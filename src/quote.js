import { useState, useEffect } from "react";

function GenerateQuote() {
  // State to store the current compliment
  const [compliment, setCompliment] = useState("");

  // List of compliments to choose from
  const listOfCompliments = [
    "Baby, I am so in love with you.",
    "My love, you are the best thing that ever happened to me.",
    "You're so beautiful it makes me nervous.",
    "Fuck me.",
    "I hope you know how beautiful you are.",
    "You will never be difficult for me.",
    "I'm the luckiest girl alive because I have you.",
    "I am very proud of you.",
    "One day, I really want us to say 'We made it' while living together in Italy.",
    "No matter what happens in the future, I want to be by your side.",
    "I absolutely adore your smile.",
    "I still cannot believe that I have such a perfect girlfriend.",
    "Fuck france.",
    "I really want to kiss you, baby.",
    "Calling you immediately makes my day better.",
    "I love you.",
    "I love everything about you - your body, your personality, your smile, your sense of humour.",
    "No matter what you say about yourself, you will always be perfect to me.",
    "I love you more. Period.",
    "You're the only one I want.",
    "You're everything I've ever dreamed about.",
  ];

  // useEffect hook to set the initial compliment when the component mounts
  useEffect(() => {
    // Set a random compliment initially
    setCompliment(getRandomCompliment(listOfCompliments));
  }, []); // Empty dependency array ensures this runs only once when the component mounts

  // Function to set a new random compliment
  function makeCompliment() {
    let randomCompliment = getRandomCompliment(listOfCompliments);
    while (randomCompliment === compliment) {
      randomCompliment = getRandomCompliment(listOfCompliments);
    }
    setCompliment(randomCompliment);
  }
  function previousCompliment() {
    let index = listOfCompliments.indexOf(compliment);
    if (index == 0) {
      index = listOfCompliments.length - 1;
    } else {
      index -= 1;
    }
    let newCompliment = listOfCompliments[index];
    setCompliment(newCompliment);
  }
  function nextCompliment() {
    let index = listOfCompliments.indexOf(compliment);
    if (index == listOfCompliments.length - 1) {
      index = 0;
    } else {
      index += 1;
    }
    let newCompliment = listOfCompliments[index];
    setCompliment(newCompliment);
  }

  return (
    <div className="parent">
      <div class="panda">
        <div class="ears"></div>
        <div class="eyes">
          <div class="pupil"></div>
        </div>
        <div class="eyes eyes-r">
          <div class="pupil"></div>
        </div>
        <div className="nose"></div>
      </div>
      <div className="complimentBox">
        {/* Display the current compliment */}
        <div className="compliment">
          <p>{compliment}</p>
          <div className="buttons">
            {/* Go to the previous compliment */}
            <button className="changeQuoteButton" onClick={previousCompliment}>
              Previous
            </button>
            {/* Button to change the compliment */}
            <button className="changeQuoteButton" onClick={makeCompliment}>
              Random
            </button>
            <button className="changeQuoteButton" onClick={nextCompliment}>
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

// Function to get a random compliment from the list
function getRandomCompliment(compliments) {
  const randomIndex = Math.floor(Math.random() * compliments.length);
  return compliments[randomIndex];
}

export default GenerateQuote;
