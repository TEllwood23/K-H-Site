import { useEffect, useState } from "react";
import axios from "axios";

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
      console.log("Videos fetched:", fetchedVideos);
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
    <div className="container mx-auto px-4 pt-16 pb-4">
      <div className=" w-full text-center">
        <h1 className="font-sans text-3xl">Watch me...</h1>
      </div>
      {/* Search Bar */}
      <form onSubmit={handleSearch} className="mb-6 text-center">
        <input
          type="text"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          placeholder="Search for videos..."
          className="w-3/4 p-2 border rounded-lg"
        />
        <button
          type="submit"
          className="p-2 bg-blue-500 text-white rounded-lg ml-2 hover:bg-blue-600 transition"
        >
          Search
        </button>
      </form>

      <div className="flex flex-col md:flex-row gap-6">
  {/* Featured Video */}
        {featuredVideo && (
          <div className="w-full md:flex-1 mb-6 md:mb-0">
            <div className="aspect-w-16 aspect-h-9 md:aspect-h-36">
              <iframe
                src={`https://www.youtube.com/embed/${featuredVideo.id.videoId}`}
                title={featuredVideo.snippet.title}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>
          </div>
        )}

        {/* Video Grid */}
        <div className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id.videoId}
              className="cursor-pointer group bg-white rounded-lg shadow-lg hover:shadow-xl transition"
              onClick={() => handleVideoClick(video)}
            >
              <img
                src={video.snippet.thumbnails.medium.url}
                alt={video.snippet.title}
                className="w-full h-auto rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-500 transition">
                  {video.snippet.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>


    </div>
  );
}

export default Videos;
