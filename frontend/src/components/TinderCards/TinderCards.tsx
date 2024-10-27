"use client";

import TinderCard from 'react-tinder-card';
import { useState } from 'react';
import "./TinderCards.css"


// Define a type for the character object
//type Character = {
//  name: string;
//  images: string[];
//};

const db = [ 
    { name: 'Ooze', images: ['/ooze.jpg', '/ooze1.jpg', '/ooze2.jpg'] },
    { name: 'Ghost', images: ['/ghost.jpg', '/ghost1.jpg', '/ghost2.png'] },
    { name: 'Werewolf', images: ['/werewolf.jpg', '/werewolf1.jpg', '/werewolf2.jpg'] },
];

console.log("pingas");
const TinderCards = () => {
    const [characters] = useState(db);
    const [currentImageIndices, setCurrentImageIndices] = useState(
      Array(db.length).fill(0) // Track current image index for each character
    );

    const [topCardIndex, setTopCardIndex] = useState(db.length - 1);
    const [swipes, setSwipes] = useState<{ name: string; direction: string }[]>([]); // Track swipe direction and character name
    
    const handleNextImage = (index: number) => {
      setCurrentImageIndices((prevIndices) => {
          const newIndices = [...prevIndices];
          newIndices[index] = (newIndices[index] + 1) % characters[index].images.length;
          return newIndices;
      });
  };

  const handlePrevImage = (index: number) => {
    setCurrentImageIndices((prevIndices) => {
        const newIndices = [...prevIndices];
        newIndices[index] = (newIndices[index] - 1 + characters[index].images.length) % characters[index].images.length;
        return newIndices;
    });
};

    const doSwipe = (direction: string, index: number) => {
        console.log(`Swiped ${direction} on ${characters[index].name}`);
      
      // Add the swipe data to swipes state
        setSwipes((prevSwipes) => [
            ...prevSwipes,
            { name: characters[index].name, direction }
        ]);

        // Move to the next card
        setTopCardIndex((prevIndex) => prevIndex - 1);
  };

  // Debugging: Log the swipe data
  console.log("Swipe History:", swipes);

    return (
        <div>
          <div className="tinderCards__cardContainer">
            {characters.map((character, index) => {
              //const isTopCard = index === characters.length - 1; // Top card is the last element in array
              return (
                <TinderCard
                  className='swipe'
                  key={character.name}
                  onSwipe={(dir) => doSwipe(dir, index)}
                  preventSwipe={["up", "down"]}
                  swipeRequirementType='position'
                  swipeThreshold={300}
                >
                  <div
                    style={{
                      visibility: index === topCardIndex ? 'visible' : 'hidden', // Only top card is visible
                      transition: 'visibility 0.3s ease-out', // Smooth transition for visibility
                    }}
                  >
                    <div style={{ 
                      backgroundImage: `url(${character.images[currentImageIndices[index]]})`, 
                      backgroundSize: 'cover',
                      backgroundPosition: 'center',
                      width: '300px',
                      height: '400px',
                      borderRadius: '10px',
                      boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.2)',
                      position: 'relative',
                      display: 'flex',
                      alignItems: 'flex-end', // Positions text at the bottom
                      color: '#fff',
                      overflow: 'hidden',
                      userSelect: 'none', // Prevent selection on the entire card
                    }}>
                      <h3 style={{
                          width: '100%',
                          textAlign: 'center',
                          padding: '10px 0',
                          background: 'rgba(0, 0, 0, 0.4)', // Semi-transparent background for text
                          margin: 0,
                          userSelect: 'none', // Prevent selection on the text
                          cursor: 'pointer',
                      }}>{character.name}</h3>

                      {/* Next/Previous Buttons */}
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          handlePrevImage(index); 
                        }} 
                        style={{
                          position: 'absolute', 
                          left: '10px', 
                          bottom: '50%', 
                          zIndex: 1,
                          pointerEvents: index === topCardIndex ? 'auto' : 'none', // Only clickable when on top
                        }}
                      >
                        ‹
                      </button>
                      <button 
                        onClick={(e) => { 
                          e.stopPropagation(); 
                          handleNextImage(index); 
                        }} 
                        style={{ 
                          position: 'absolute', 
                          right: '10px', 
                          bottom: '50%', 
                          zIndex: 1,
                          pointerEvents: index === topCardIndex ? 'auto' : 'none', // Only clickable on top card
                        }}
                      >
                        ›
                      </button>
                    </div>
                  </div>
                </TinderCard>
              );
            })}
          </div>
        </div>
    );
};
 
export default TinderCards;