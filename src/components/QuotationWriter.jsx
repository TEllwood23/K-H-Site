//SHUFFLED VERSION WITH NEW STYLING

// import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'; // For prop validation
// import quotes from '../data/quotes_writer.json'; // Adjust the path if needed

// function Quotation({ count = 1 }) {
//   const [currentQuotes, setCurrentQuotes] = useState([]); // Current set of quotes
//   const [fadeClass, setFadeClass] = useState('opacity-0'); // Fade animation class
//   const [quotePool, setQuotePool] = useState([...quotes]); // Pool of available quotes

//   const changeQuotes = () => {
//     setFadeClass('opacity-0'); // Start fade-out
//     setTimeout(() => {
//       // Select `count` unique quotes
//       const shuffled = [...quotePool].sort(() => 0.5 - Math.random());
//       const selectedQuotes = shuffled.slice(0, count);

//       // Update pool, reset if necessary
//       const updatedPool = quotePool.filter((quote) => !selectedQuotes.includes(quote));
//       setQuotePool(updatedPool.length > 0 ? updatedPool : [...quotes]);

//       // Set the selected quotes and fade in
//       setCurrentQuotes(selectedQuotes);
//       setFadeClass('opacity-100'); // Start fade-in
//     }, 1000); // Match fade-out duration
//   };

//   useEffect(() => {
//     // Initial call
//     changeQuotes();
//     // Repeat every 6 seconds
//     const interval = setInterval(changeQuotes, 6000);

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []); // Empty dependency array, so it runs once

//   return (
//     <div className={`transition-opacity duration-1000 ${fadeClass}`}>
//       {currentQuotes.map((quote, index) => (
//         <div key={index} className="text-xl font-sans px-4 py-2">
//           <p className="text-black">{`"${quote.quote}"`}</p>
//           <p className="text-textSecondary">{quote.source}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// // Add PropTypes for validation
// Quotation.propTypes = {
//   count: PropTypes.number, // Optional: the number of quotes to display at a time
// };

// export default Quotation;



// //SHUFFLED VERSION

// import { useEffect, useState } from 'react';
// import PropTypes from 'prop-types'; // Import PropTypes for validation
// import quotes from '../data/quotes.json'; // Import the quotes JSON file

// function Quotation({ count = 4 }) {
//   const [displayedQuotes, setDisplayedQuotes] = useState([]); // To store unique quotes
//   const [fadeClass, setFadeClass] = useState('opacity-0'); // For fade effect

//   // Function to shuffle the quotes and pick `count` unique ones
//   const getUniqueQuotes = () => {
//     const shuffled = [...quotes].sort(() => 0.5 - Math.random());
//     return shuffled.slice(0, count);
//   };

//   useEffect(() => {
//     const changeQuotes = () => {
//       // Fade out
//       setFadeClass('opacity-0');
//       setTimeout(() => {
//         // Select unique quotes and fade in
//         setDisplayedQuotes(getUniqueQuotes());
//         setFadeClass('opacity-100');
//       }, 1000); // Match fade-out duration
//     };

//     // Initialize quotes
//     changeQuotes();
//     const interval = setInterval(changeQuotes, 6000); // Update every 6 seconds

//     return () => clearInterval(interval); // Cleanup on unmount
//   }, []);

//   return (
//     <div className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4 transition-opacity duration-1000 ${fadeClass}`}>
//       {displayedQuotes.map((quote, index) => (
//         <div key={index} className="p-2 text-lg sm:text-base rounded-md">
//           <p className="text-black">{`"${quote.quote}"`}</p>
//           <p className="text-textSecondary">{quote.source}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// // Add PropTypes for validation
// Quotation.propTypes = {
//   count: PropTypes.number, // Validate count as a number
// };

// export default Quotation;




//safe version
import { useEffect, useState } from 'react';
import quotes from '../data/quotationsWriter.json'; // Adjust the path if needed

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
        <div className="text-l font-sans">
          <p className="text-black">{`"${currentQuote.quote}"`}</p>
          <p className="text-textSecondary">{currentQuote.source}</p>
        </div>
      )}
    </div>
  );
}

export default Quotation;
