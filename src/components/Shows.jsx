import { useEffect, useState } from 'react';
import { fetchShows } from '../api';

function Shows() {
  const [shows, setShows] = useState([]);

  // Fetch the shows data when the component mounts
  useEffect(() => {
    async function getShows() {
      const data = await fetchShows();
      setShows(data);
      console.log(shows);
    }
    getShows();
  }, []);

  return (
    <div>
      <h1>Shows</h1>
      <ul>
        {shows.map(show => (
          <li key={show.id}>
            <h2>{show.title}</h2>
            <p>Video URL: <a href={show.videoUrl} target="_blank" rel="noopener noreferrer">{show.videoUrl}</a></p>
            <img src={show.picture} alt={show.title} style={{ width: '200px' }} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Shows;
