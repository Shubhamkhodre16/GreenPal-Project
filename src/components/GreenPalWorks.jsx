import React from "react";
import { Box, Typography, Link } from "@mui/material";

export default function GreenPalWorks() {
  return (
    <Box
      sx={{
        maxWidth: { xs: 400, md: 800 },
        mx: "auto",
        px: 2,
        py: 4,
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        color: "#333",
        backgroundColor: "#f1fdf4",
      }}
    >
      {/* Section Title */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: 20,
          textAlign: "center",
          mb: 2,
          padding:"0px 20px 0px 20px"

        }}
      >
        How does
        <br />
        GreenPal Work?
      </Typography>

      {/* Main Image */}
      <Box
        component="img"
        src="https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg" // Replace with your own image
        alt="Lawn Mower"
        sx={{
          width: "100%",
          borderRadius: 2,
          height: 180,
          objectFit: "cover",
          mb: 2,
        }}
      />

      {/* Text content */}
      <Typography
        variant="body2"
        sx={{
          fontSize: 14,
          lineHeight: 1.5,
          mb: 1,
        }}
      >
        How long did it take you to contract a cheap lawn mower the last time?
        If it took you more than an hour you are wasting thirty minutes of your
        life. GreenPal can connect you not only to the same landscapers in
        Indianapolis, IN you are probably looking for, but it can do it faster
        and cheaper.
      </Typography>

      {/* Blurred text effect */}
      <Box
        sx={{
          position: "relative",
          height: 48,
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            fontSize: 14,
            lineHeight: 1.5,
            color: "#666",
          }}
        >
          Instead of seeking out every local lawn mower in your area going as
          far south to get one… we already have local lawn mowers in your area
          going as far south.
        </Typography>

        {/* Gradient Fade */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 28,
            background: "linear-gradient(to bottom, transparent, white)",
          }}
        />
      </Box>

      <Link
        href="#"
        underline="hover"
        sx={{ color: "#f7931e", fontWeight: 600, fontSize: 14, display: "block", mb: 4 }}
      >
        Read More
      </Link>

      {/* Nearby Cities Section */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: 16,
          textAlign: "center",
          mb: 1,
        }}
      >
        Not in Columbia?
      </Typography>
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 16,
          color: "#00a651",
          textAlign: "center",
          mb: 2,
        }}
      >
        GreenPal also covers
        <br />
        these nearby cities
      </Typography>

      {/* Map Image */}
      <Box
        component="img"
        src="https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg"
        alt="Nearby Map"
        sx={{
          width: "100%",
          borderRadius: 1,
          mb: 2,
        }}
      />

      {/* City Grid */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          fontSize: 13,
          mb: 3,
          gap: 1.5,
        }}
      >
        {[
          "Asheville", "Fayetteville", "Augusta", "Statesboro",
          "Greenville", "Milledgeville", "Charleston", "Pooler",
          "Rock Hill", "Athens", "Summerville", "Savannah",
        ].map((city) => (
          <Box key={city} sx={{ minWidth: 100, textAlign: "center" }}>
            {city}
          </Box>
        ))}
      </Box>

      {/* Zip Code Info */}
      <Typography sx={{ fontSize: 14, fontWeight: 600, mb: 1 }}>
        GreenPal offers nearby lawn maintenance services in these Columbia Zip Codes
      </Typography>

      {/* Zip Code List */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 1.2,
          fontSize: 14,
          color: "#444",
          mb: 2,
        }}
      >
        {["46201", "46217", "46201", "46201", "46201", "46217", "46201"].map(
          (zip, idx) => (
            <Box key={idx}>{zip}</Box>
          )
        )}
      </Box>

      {/* Bottom Read More */}
      <Link
        href="#"
        underline="hover"
        sx={{ color: "#f7931e", fontWeight: 600, fontSize: 14 }}
      >
        Read More
      </Link>
    </Box>
  );
}
