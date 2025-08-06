import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";

export default function AboutColumbiaSection() {
  return (
    <Box
      sx={{
        maxWidth: { xs: 400, md: 800 },
        mx: "auto",
        px: { xs: 2, md: 4 },
        py: { xs: 4, md: 6 },
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        backgroundColor: "#e9faff", // light blue background
        color: "#333",
        textAlign: { xs: "center", md: "left" },
      }}
    >
      {/* Title */}
      <Typography
        sx={{
          fontSize: { xs: 18, md: 22 },
          fontWeight: 700,
          mb: 1,
        }}
      >
        About Columbia
        <br />
        South Carolina
      </Typography>

      {/* Subtitle */}
      <Typography
        sx={{
          fontSize: { xs: 14, md: 16 },
          color: "#666",
          mb: 2,
        }}
      >
        Columbia is a city in South Carolina, United States.
      </Typography>

      {/* Image */}
      <Box
        sx={{
          position: "relative",
          borderRadius: 2,
          overflow: "hidden",
          mb: 2,
        }}
      >
        <Box
          component="img"
          src="https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg" // Replace with your image if needed
          alt="Columbia"
          sx={{
            width: "100%",
            height: { xs: 180, md: 220 },
            objectFit: "cover",
          }}
        />
        {/* Orange ribbon */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 8,
            width: "100%",
            backgroundColor: "#f7931e",
          }}
        />
      </Box>

      {/* Description */}
      <Box sx={{ position: "relative", overflow: "hidden", mb: 2 }}>
        <Typography sx={{ fontSize: 14, lineHeight: 1.6, textAlign: "left" }}>
          The city of Columbia is the capital of the state of South Carolina. It
          is also the second largest city in the state, which is part of the
          continental US. As of 2016 the estimated population was 134,309.
          Columbia serves as the seat of Richland County.
        </Typography>

        {/* Blur effect at bottom */}
        <Box
          sx={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: 40,
            background: "linear-gradient(to bottom, transparent, #e9faff)",
          }}
        />
      </Box>

      {/* Read More */}
      <Link
        href="#"
        underline="hover"
        sx={{
          color: "#f7931e",
          fontWeight: 600,
          fontSize: 14,
          display: "inline-block",
          mb: { xs: 3, md: 4 },
          textAlign: "left",
        }}
      >
        Read More
      </Link>

      {/* Button */}
      <Button
        variant="contained"
        fullWidth
        sx={{
          mt: 1,
          background:
            "linear-gradient(90deg, rgba(255,167,38,1) 0%, rgba(255,111,0,1) 100%)",
          borderRadius: 30,
          fontWeight: 700,
          fontSize: 16,
          py: 1.2,
          textTransform: "none",
          boxShadow: "none",
          "&:hover": {
            background:
              "linear-gradient(90deg, rgba(255,140,0,1) 0%, rgba(245,124,0,1) 100%)",
          },
        }}
      >
        See Prices &gt;
      </Button>
    </Box>
  );
}
