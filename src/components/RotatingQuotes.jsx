import { useState, useEffect } from 'react';
import PropTypes from 'prop-types'; // Import PropTypes
import quotes from '../data/quotes.json'; // Import the JSON file

function RotatingQuotes({ excludedQuotes = [] }) {
  const [displayedQuotes, setDisplayedQuotes] = useState([]);
  const [quoteIndices, setQuoteIndices] = useState([]);
  const [fading, setFading] = useState(false);

  const getRandomIndices = (excludeIndices) => {
    const availableIndices = quotes
      .map((_, index) => index)
      .filter((index) => !excludeIndices.includes(index));

    const randomIndices = [];
    while (randomIndices.length < 3 && availableIndices.length > 0) {
      const randomIndex = Math.floor(Math.random() * availableIndices.length);
      randomIndices.push(availableIndices.splice(randomIndex, 1)[0]);
    }
    return randomIndices;
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setFading(true);
      setTimeout(() => {
        const newIndices = getRandomIndices([...excludedQuotes, ...quoteIndices]);
        setQuoteIndices(newIndices);
        setDisplayedQuotes(newIndices.map((index) => quotes[index]));
        setFading(false);
      }, 1000);
    }, 20000);

    const initialIndices = getRandomIndices(excludedQuotes);
    setQuoteIndices(initialIndices);
    setDisplayedQuotes(initialIndices.map((index) => quotes[index]));

    return () => clearInterval(interval);
  }, [excludedQuotes, quoteIndices]);

  return (
    <div className="space-y-4">
      {displayedQuotes.map((quote, index) => (
        <div
          key={index}
          className={`transition-opacity duration-20000 ${fading ? 'opacity-0' : 'opacity-100'}`}
        >
          <p className='text-xl font-semibold'>&apos;{quote.text}&apos;</p>
          <p className="text-sm text-gray-500">{quote.source}</p>
        </div>
      ))}
    </div>
  );
}

// Define PropTypes for validation
RotatingQuotes.propTypes = {
  excludedQuotes: PropTypes.arrayOf(PropTypes.number), // Array of numbers
};

// Default props
RotatingQuotes.defaultProps = {
  excludedQuotes: [], // Empty array if none provided
};

export default RotatingQuotes;
