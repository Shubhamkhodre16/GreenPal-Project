import React from "react";
import TopRatedCard from "./TopRatedCard";
import "../styles/topRatedSection.css";

const providers = [
  {
    image: "https://i.pravatar.cc/150?img=1",
    name: "Mikken Services Lawn Services in Columbia, SC",
    hired: 40,
    rating: "4.4/5",
    reviews: 150,
    quote: "We know your lawn and landscape is a major investment. And that is what my company specializes in preserving",
  },
  {
    image: "https://i.pravatar.cc/150?img=2",
    name: "EverGreen Lawn Solutions",
    hired: 40,
    rating: "4.6/5",
    reviews: 200,
    quote: "Reliable and consistent lawn service with high attention to detail and customer satisfaction",
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
    name: "Urban Turf Pro Services",
    hired: 40,
    rating: "4.8/5",
    reviews: 180,
    quote: "Delivering quality lawn maintenance tailored to your property’s unique needs",
  },
  {
    image: "https://i.pravatar.cc/150?img=4",
    name: "Peak Green Care",
    hired: 40,
    rating: "4.7/5",
    reviews: 160,
    quote: "Committed to enhancing your curb appeal through expert lawn care",
  },
];

const TopRatedSection = () => {
  return (
    <div
      className="toprated-section"
      style={{ maxWidth: 450, margin: "0 auto", padding: 16 }}
    >
      <h2
        className="toprated-title"
        style={{
          fontWeight: 700,
          fontSize: "1.5rem",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        Top Rated Lawn Mowing Service Providers in Columbus, OH
      </h2>

      {providers.map((provider, index) => (
        <TopRatedCard key={index} provider={provider} />
      ))}
    </div>
  );
};

export default TopRatedSection;
