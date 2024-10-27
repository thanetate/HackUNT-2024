import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";
import axios from "axios";

interface Swipe {
    swipedOnId: string;
    direction: string;
}

interface SwipeContextType {
    recentMatches: Swipe[];
    fetchSwipes: () => Promise<void>;
    addSwipe: (newSwipe: Swipe) => void;
}

const SwipeContext = createContext<SwipeContextType | undefined>(undefined);

export const useSwipes = () => {
    const context = useContext(SwipeContext);
    if (!context) {
        throw new Error("useSwipes must be used within a SwipeProvider");
    }
    return context;
};

export const SwipeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [recentMatches, setRecentMatches] = useState<Swipe[]>([]);

    const fetchSwipes = async () => {
        try {
            const response = await axios.get<Swipe[]>("http://localhost:3000/swipes");
            const rightSwipes = response.data.filter((swipe) => swipe.direction === "right");
            setRecentMatches(rightSwipes);
        } catch (error) {
            console.error("Failed to fetch swipes:", error);
        }
    };

    // This function adds a new swipe to the recentMatches array
    const addSwipe = (newSwipe: Swipe) => {
        if (newSwipe.direction === "right") {
            setRecentMatches((prevMatches) => [...prevMatches, newSwipe]);
        }
    };

    useEffect(() => {
        fetchSwipes();
    }, []);

    return (
        <SwipeContext.Provider value={{ recentMatches, fetchSwipes, addSwipe }}>
            {children}
        </SwipeContext.Provider>
    );
};
