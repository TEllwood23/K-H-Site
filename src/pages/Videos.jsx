// VERSION WITH LOAD MORE

import { useEffect, useState } from "react";
import axios from "axios";

function Videos() {
  const [videos, setVideos] = useState([]); // All fetched videos
  const [visibleVideos, setVisibleVideos] = useState(); // Number of videos initially visible
  const [selectedVideo, setSelectedVideo] = useState(null); // For the modal popup

  const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const response = await axios.get(
        `https://www.googleapis.com/youtube/v3/search`,
        {
          params: {
            key: API_KEY,
            part: "snippet",
            q: "kieran hodgson",
            type: "video",
            maxResults: 20, // Fetch up to 20 videos
          },
        }
      );
      const fetchedVideos = response.data.items;
      setVideos(fetchedVideos);
    } catch (error) {
      console.error("Error fetching videos:", error);
    }
  };

  const handleLoadMore = () => {
    setVisibleVideos((prev) => prev + 3); // Load 4 more videos each time
  };

  return (
    <div className="container mx-auto px-4 pt-10 lg:pt-16 pb-4">
      {/* Page Header */}
      <div className="w-full flex justify-center mb-6">
        <h1 className="text-4xl pb-4 font-sub">
          Watch all my videos on{" "}
          <a
            href="https://www.berksnest.com/tickets"
            target="_blank"
            rel="noopener noreferrer"
            className="text-textSecondary hover:text-red-900 hover:underline transition duration-300 cursor-pointer"
          >
            Youtube
          </a>
        </h1>
      </div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {videos.slice(0, visibleVideos).map((video) => (
          <div
            key={video.id.videoId}
            className="cursor-pointer group bg-white rounded-lg shadow-lg hover:shadow-xl transition"
            onClick={() => setSelectedVideo(video)} // Open modal on click
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

      {/* Load More Button */}
      {visibleVideos < videos.length && (
        <div className="text-center mt-6">
          <button
            onClick={handleLoadMore}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Load More
          </button>
        </div>
      )}

      {/* Modal for Selected Video */}
      {selectedVideo && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
          onClick={() => setSelectedVideo(null)} // Close modal on outside click
        >
          <div
            className="bg-white rounded-lg shadow-lg w-11/12 md:w-3/4 lg:w-1/2"
            onClick={(e) => e.stopPropagation()} // Prevent modal closure on click inside
          >
            {/* Video Player */}
            <div className="aspect-w-16 aspect-h-9">
              <iframe
                src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
                title={selectedVideo.snippet.title}
                frameBorder="0"
                allowFullScreen
                className="w-full h-full"
              ></iframe>
            </div>

            {/* Video Title */}
            <div className="p-4 text-center">
              <h2 className="text-lg font-bold">{selectedVideo.snippet.title}</h2>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Videos;



// // VERSION WITH POPUP

// import { useEffect, useState } from "react";
// import axios from "axios";

// function Videos() {
//   const [videos, setVideos] = useState([]);
//   const [selectedVideo, setSelectedVideo] = useState(null);

//   const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

//   useEffect(() => {
//     fetchVideos();
//   }, []);

//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get(
//         `https://www.googleapis.com/youtube/v3/search`,
//         {
//           params: {
//             key: API_KEY,
//             part: "snippet",
//             q: "kieran hodgson",
//             type: "video",
//             maxResults: 12,
//           },
//         }
//       );
//       const fetchedVideos = response.data.items;
//       setVideos(fetchedVideos);
//       console.log("Videos fetched:", fetchedVideos); // Debugging log
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     }
//   };

//   // Close the modal when pressing the Escape key
//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (e.key === "Escape") {
//         setSelectedVideo(null);
//       }
//     };

//     document.addEventListener("keydown", handleKeyDown);
//     return () => document.removeEventListener("keydown", handleKeyDown);
//   }, []);

//   return (
//     <div className="container mx-auto px-4 pt-16 pb-4">
//       <div className="w-full flex justify-center mb-6">
//         <h1 className="font-sans text-3xl">Watch me...</h1>
//       </div>

//       {/* Video Grid */}
//       <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
//         {videos.map((video) => (
//           <div
//             key={video.id.videoId}
//             className="cursor-pointer group bg-white rounded-lg shadow-lg hover:shadow-xl transition"
//             onClick={() => setSelectedVideo(video)} // Open modal with the selected video
//           >
//             <img
//               src={video.snippet.thumbnails.medium.url}
//               alt={video.snippet.title}
//               className="w-full h-auto rounded-t-lg"
//             />
//             <div className="p-4">
//               <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-500 transition">
//                 {video.snippet.title}
//               </h3>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Modal for Selected Video */}
//       {selectedVideo && (
//         <div
//           className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
//           onClick={() => setSelectedVideo(null)} // Close modal on outside click
//         >
//           <div
//             className="bg-white rounded-lg shadow-lg w-3/4 max-w-2xl relative"
//             onClick={(e) => e.stopPropagation()} // Prevent modal closure when clicking on the modal content
//           >
//             {/* Video Player */}
//             <div className="aspect-w-16 aspect-h-9">
//               <iframe
//                 src={`https://www.youtube.com/embed/${selectedVideo.id.videoId}`}
//                 title={selectedVideo.snippet.title}
//                 frameBorder="0"
//                 allowFullScreen
//                 className="w-full h-full"
//               ></iframe>
//             </div>

//             {/* Video Title */}
//             <div className="p-4 text-center">
//               <h2 className="text-lg font-bold">{selectedVideo.snippet.title}</h2>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Videos;



//SAFE VERSION

// import { useEffect, useState } from "react";
// import axios from "axios";

// function Videos() {
//   const [videos, setVideos] = useState([]);
//   const [featuredVideo, setFeaturedVideo] = useState(null);
//   const [searchQuery, setSearchQuery] = useState("kieran hodgson");

//   const API_KEY = import.meta.env.VITE_YOUTUBE_API_KEY;

//   useEffect(() => {
//     fetchVideos();
//   }, [searchQuery]);

//   const fetchVideos = async () => {
//     try {
//       const response = await axios.get(
//         `https://www.googleapis.com/youtube/v3/search`,
//         {
//           params: {
//             key: API_KEY,
//             part: "snippet",
//             q: searchQuery,
//             type: "video",
//             maxResults: 12,
//           },
//         }
//       );
//       const fetchedVideos = response.data.items;
//       setVideos(fetchedVideos);
//       if (!featuredVideo && fetchedVideos.length > 0) {
//         setFeaturedVideo(fetchedVideos[0]);
//       }
//       console.log("Videos fetched:", fetchedVideos);
//     } catch (error) {
//       console.error("Error fetching videos:", error);
//     }
//   };

//   const handleVideoClick = (video) => {
//     setFeaturedVideo(video);
//   };

//   const handleSearch = (e) => {
//     e.preventDefault();
//     fetchVideos();
//   };

//   return (
//     <div className="container mx-auto px-4 pt-16 pb-4">
//       <div className=" w-full flex text-center">
//         <h1 className="font-sans text-3xl">Watch me...</h1>
//       </div>
//       {/* Search Bar */}
//       <form onSubmit={handleSearch} className="mb-6 text-center">
//         <input
//           type="text"
//           value={searchQuery}
//           onChange={(e) => setSearchQuery(e.target.value)}
//           placeholder="Search for videos..."
//           className="w-3/4 p-2 border rounded-lg"
//         />
//         <button
//           type="submit"
//           className="p-2 bg-blue-500 text-white rounded-lg ml-2 hover:bg-blue-600 transition"
//         >
//           Search
//         </button>
//       </form>

//       <div className="flex flex-col md:flex-row gap-6">
//   {/* Featured Video */}
//         {featuredVideo && (
//           <div className="w-full md:flex-1 mb-6 md:mb-0">
//             <div className="aspect-w-16 aspect-h-9 md:aspect-h-36">
//               <iframe
//                 src={`https://www.youtube.com/embed/${featuredVideo.id.videoId}`}
//                 title={featuredVideo.snippet.title}
//                 frameBorder="0"
//                 allowFullScreen
//                 className="w-full h-full"
//               ></iframe>
//             </div>
//           </div>
//         )}

//         {/* Video Grid */}
//         <div className="w-full md:flex-1 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {videos.map((video) => (
//             <div
//               key={video.id.videoId}
//               className="cursor-pointer group bg-white rounded-lg shadow-lg hover:shadow-xl transition"
//               onClick={() => handleVideoClick(video)}
//             >
//               <img
//                 src={video.snippet.thumbnails.medium.url}
//                 alt={video.snippet.title}
//                 className="w-full h-auto rounded-t-lg"
//               />
//               <div className="p-4">
//                 <h3 className="text-sm font-bold text-gray-800 group-hover:text-blue-500 transition">
//                   {video.snippet.title}
//                 </h3>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>


//     </div>
//   );
// }

// export default Videos;
