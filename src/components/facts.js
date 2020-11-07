import React, {useState} from "react";




function Facts() {
    
    const [randomNumber, setRandomNumber] = useState(0)
    
    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * randomFacts.length);
        setRandomNumber(randomNumber)
    }

    const randomFacts = [
      "loves maps and infographics",
      "hosted living-room restaurants ('13) and ramen pop-ups ('17)",
      "finished the famous Nijmeegse Vierdaagse ('18)",
      "used to host workshops in kimchi making ('15)",
      "traveled solo for longer periods of time (Canada '14, Australia '16, Thailand '18)",
      'shares a car with friends (2014-present) that is organized by a self-built app',
      'wrote an article on coffee in beer',
      "got interested in programming through a course in Python",
      "during programming, loves to listen to Marconi Union, Four Tet or Rival Consoles",
      "is quite a feminist",
      "is originally from Rotterdam area",
      "'s favorite color is yellow"
    ];

    return (
      <div className='fact-container'>
          <div className="intro-name">LISAN..</div>
          <div className="fact-content">
              {randomFacts[randomNumber]}
          </div>
          <div>
              <button className='fact-button' onClick={generateRandomNumber}>Next random fact</button>
          </div>
      </div>
    )
}

export default Facts;