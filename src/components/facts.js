import React, {useState} from "react";
import { useTranslation } from 'react-i18next';

import './Facts.css';

function Facts(props) {
    const { t } = useTranslation(['facts']);
    const [randomNumber, setRandomNumber] = useState(0)
    
    const generateRandomNumber = () => {
        const randomNumber = Math.floor(Math.random() * randomFacts.length);
        console.log(randomFacts);
        setRandomNumber(randomNumber)
    }

    const randomFacts = t('list', { returnObjects: true });

    return (
      <div className='fact-container' style={ props.dimensions.width < 700 ? {flexDirection: 'column', alignItems: 'center'} : {}}>
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