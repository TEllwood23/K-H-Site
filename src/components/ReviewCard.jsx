
import PropTypes from 'prop-types';

function ReviewCard({ quote, source, stars, url }) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="block rounded-lg p-4 hover:shadow-2xl transition-shadow duration-300 w-56 h-42 text-center"
    >
      <div className="text-white text-m font-serif italic">
        “{quote}”
      </div>
      <div className="text- text-sm mt-2">— {source}</div>
      <div className="mt-2 text-yellow-400 text-lg">
        {'★'.repeat(stars)}{'☆'.repeat(5 - stars)} {/* Star rating */}
      </div>
    </a>
  );
}

ReviewCard.propTypes = {
  quote: PropTypes.string.isRequired,
  source: PropTypes.string.isRequired,
  stars: PropTypes.number.isRequired,
  url: PropTypes.string.isRequired,
};

export default ReviewCard;
