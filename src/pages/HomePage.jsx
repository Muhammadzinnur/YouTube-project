import React, { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";

const videos = [
  {
    id: 1,
    title: "France vs Argentina | The Final That Stopped Our Hearts",
    channel: "Cuong The Thao",
    views: "17 koʻrildi",
    time: "1 oy oldin",
    duration: "17:30",
    thumbnail:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=225&fit=crop",
  },
  {
    id: 2,
    title: "Real Madrid vs Barcelona | El Clasico Highlights 2024",
    channel: "LaLiga TV",
    views: "6.4M koʻrildi",
    time: "2 hafta oldin",
    duration: "12:43",
    thumbnail:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=225&fit=crop",
  },
  {
    id: 3,
    title: "Top 10 Goals of Euro 2024",
    channel: "UEFA Highlights",
    views: "2.8M koʻrildi",
    time: "5 oy oldin",
    duration: "10:12",
    thumbnail:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=225&fit=crop",
  },
  {
    id: 4,
    title: "Cristiano Ronaldo 2024 - Best Goals & Skills",
    channel: "CR7 Studio",
    views: "4.1M koʻrildi",
    time: "2 oy oldin",
    duration: "14:21",
    thumbnail:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=225&fit=crop",
  },
  {
    id: 5,
    title: "Top 20 Free Kicks in Football History",
    channel: "Goal Masters",
    views: "15 koʻrildi",
    time: "6 oy oldin",
    duration: "9:15",
    thumbnail:
      "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?w=400&h=225&fit=crop",
  },
  {
    id: 6,
    title: "Funny Football Moments 2024",
    channel: "Soccer Comedy",
    views: "32 koʻrildi",
    time: "3 hafta oldin",
    duration: "8:09",
    thumbnail:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=225&fit=crop",
  },
  {
    id: 7,
    title: "Funny Football Moments 2026",
    channel: "Soccer Moments",
    views: "100K koʻrildi",
    time: "3 hafta oldin",
    duration: "7:45",
    thumbnail:
      "https://images.unsplash.com/photo-1529900748604-07564a03e7a6?w=400&h=225&fit=crop",
  },
  {
    id: 8,
    title: "Best Football Skills 2024",
    channel: "Football Magic",
    views: "3.2M koʻrildi",
    time: "1 oy oldin",
    duration: "11:20",
    thumbnail:
      "https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?w=400&h=225&fit=crop",
  },
  {
    id: 9,
    title: "Premier League Highlights 2024",
    channel: "EPL TV",
    views: "5.1M koʻrildi",
    time: "4 kun oldin",
    duration: "15:30",
    thumbnail:
      "https://images.unsplash.com/photo-1574629810360-7efbbe195018?w=400&h=225&fit=crop",
  },
];

const categories = [
  "All",
  "Music",
  "Jams",
  "Now on air",
  "Video games",
  "Sitcoms",
  "Sketch show",
  "Football",
  "Recently published",
  "Viewed",
  "New for you",
];

const HomePage = () => {
  const [activeCategory, setActiveCategory] = useState("Football");

  return (
    <div className="flex bg-white text-black min-h-screen">
      <Sidebar />

      <div className="flex-1">
        <Header />
        <div className="sticky top-14 z-40 bg-white border-b border-gray-300 overflow-x-auto">
          <div className="px-4 py-3 flex gap-3 whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  activeCategory === category
                    ? "bg-black text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
        <main className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video) => (
            <div
              key={video.id}
              className="relative cursor-pointer group transition-transform hover:scale-[1.02] bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md"
              style={{ height: "300px" }}
            >
              <div className="relative h-[180px] w-full overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:brightness-75 transition-all duration-300"
                  loading="lazy"
                />

                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="bg-black bg-opacity-60 rounded-full p-4">
                    <svg
                      className="w-12 h-12 text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>{" "}
                </div>
                <span className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1.5 py-0.5 rounded">
                  {video.duration}
                </span>
              </div>
              <div className="p-3 flex flex-col justify-between h-[120px]">
                <div>
                  <h3 className="font-semibold text-sm line-clamp-2 group-hover:text-blue-600">
                    {video.title}
                  </h3>
                  <p className="text-gray-600 text-xs mt-1">{video.channel}</p>
                </div>
                <p className="text-gray-500 text-xs mt-1">
                  {video.views} {video.time}
                </p>
              </div>
            </div>
          ))}
        </main>
      </div>
    </div>
  );
};

export default HomePage;
