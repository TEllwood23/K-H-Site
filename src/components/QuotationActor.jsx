import { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import quotes from '../data/quotationsActor.json';

function Quotation({ className }) {
  const [currentQuote, setCurrentQuote] = useState(null);
  const [fadeClass, setFadeClass] = useState('opacity-0');
  const [quotePool, setQuotePool] = useState([...quotes]);

  const changeQuote = () => {
    setFadeClass('opacity-0'); // Fade out
    setTimeout(() => {
      // Pick a random quote
      const randomIndex = Math.floor(Math.random() * quotePool.length);
      const nextQuote = quotePool[randomIndex];

      // Update pool and quote
      const updatedPool = quotePool.filter((_, index) => index !== randomIndex);
      setQuotePool(updatedPool.length > 0 ? updatedPool : [...quotes]); // Reset pool if empty
      setCurrentQuote(nextQuote);

      setFadeClass('opacity-100'); // Fade in
    }, 1000); // Match fade duration
  };

  useEffect(() => {
    // Initial call
    changeQuote();
    // Repeat every 6 seconds
    const interval = setInterval(changeQuote, 6000);

    return () => clearInterval(interval); // Cleanup on unmount
  }, []); // Empty dependency array, no unnecessary re-renders

  return (
    <div className={`transition-opacity duration-1000 ${fadeClass} ${className} text-center`}>
      {currentQuote && (
        <div className="text-l font-sans">
          <p className="text-black">{`"${currentQuote.quote}"`}</p>
          <p className="text-textSecondary">{currentQuote.source}</p>
      </div>
      )}
    </div>
  );
}

Quotation.propTypes = {
  className: PropTypes.string, // Validate `className` as a string
};

export default Quotation;
