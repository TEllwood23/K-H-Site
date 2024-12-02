import { useEffect, useState } from "react";
import axios from "axios";
console.log(axios);

function Videos() {
  const [videos, setVideos] = useState([]);
  const [featuredVideo, setFeaturedVideo] = useState(null);
  const [searchQuery, setSearchQuery] = useState("kieran hodgson");

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    fetchVideos();
  }, [searchQuery]);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            key: API_KEY,
            part: "snippet",
            q: searchQuery,
            type: "video",
            maxResults: 12,
          },
        }
      );
      const fetchedVideos = response.data.items;
      setVideos(fetchedVideos);
      if (!featuredVideo && fetchedVideos.length > 0) {
        setFeaturedVideo(fetchedVideos[0]);
      }
      console.log("Videos fetched:", fetchedVideos); // Debugging: Log fetched videos
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleVideoClick = (video) => {
    setFeaturedVideo(video);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    fetchVideos();
  };

  return (
    <div className="container mx-auto px-4">
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-6">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for videos..."
          className="w-full p-2 border rounded"
        />
        <button type="submit" className="p-2 bg-blue-500 text-white rounded ml-2">
          Search
        </button>
      </form>

      {/* Featured Video */}
      {featuredVideo && (
        <div className="aspect-w-16 aspect-h-9 mb-6">
          <iframe
            src={`https://www.youtube.com/embed/${featuredVideo.id.videoId}`}
            title={featuredVideo.snippet.title}
            frameBorder="0"
            allowFullScreen
            className="w-full h-full"
          ></iframe>
        </div>
      )}

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {videos.map((video) => (
          <div
            key={video.id.videoId}
            className="cursor-pointer"
            onClick={() => handleVideoClick(video)}
          >
            <img
              src={video.snippet.thumbnails.medium.url}
              alt={video.snippet.title}
              className="w-full h-auto rounded shadow"
            />
            <h3 className="text-sm font-bold mt-2">{video.snippet.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Videos;
