import { useEffect, useState } from 'react';
import quotes from '../data/quotationsActor.json'; // Adjust the path if needed

function Quotation() {
  const [currentQuote, setCurrentQuote] = useState(null); // Current quote
  const [fadeClass, setFadeClass] = useState('opacity-0'); // Fade animation class
  const [quotePool, setQuotePool] = useState([...quotes]); // Pool of quotes

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
    <div className={`transition-opacity duration-1000 ${fadeClass} text-center`}>
      {currentQuote && (
        <div className="text-xl font-sans">
          <p className="text-black">{`"${currentQuote.quote}"`}</p>
          <p className="text-textSecondary">{currentQuote.source}</p>
        </div>
      )}
    </div>
  );
}

export default Quotation;
