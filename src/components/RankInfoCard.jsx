import React from "react";
import { Box, Typography, Container, Stack } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
// import LawnMowerImage from "./assets/lawnmower.png"; // adjust this path to your image

const RankInfoCard = () => {
  return (
    <Container
      maxWidth="sm"
      sx={{
        textAlign: "center",
        py: { xs: 4, md: 6 },
        px: { xs: 2, md: 4 },
      }}
    >
      {/* Stars */}
      <Stack
        direction="row"
        justifyContent="center"
        spacing={1}
        mb={2}
      >
        <StarIcon sx={{ color: "#FFD700", fontSize: 28 }} />
        <StarIcon sx={{ color: "#FFD700", fontSize: 28 }} />
        <StarIcon sx={{ color: "#FFD700", fontSize: 28 }} />
      </Stack>

      {/* Image */}
      <Box
        component="img"
        src="https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg"
        alt="Lawn Mower"
        sx={{
          width: "100%",
          maxWidth: "220px",
          mx: "auto",
          mb: 3,
        }}
      />

      {/* Title */}
      <Typography
        variant="h6"
        component="h2"
        gutterBottom
        sx={{
          fontWeight: 600,
          fontSize: { xs: "1.1rem", md: "1.3rem" },
          color: "#222",
          lineHeight: 1.4,
        }}
      >
        How{" "}
        <Box component="span" sx={{ color: "#FFA500", fontWeight: "bold" }}>
          we rank
        </Box>{" "}
        lawn & landscape companies
      </Typography>

      {/* Body */}
      <Typography
        variant="body2"
        sx={{
          color: "#555",
          fontSize: { xs: "0.9rem", md: "1rem" },
          lineHeight: 1.6,
        }}
      >
        Each week, thousands of customers across the U.S. trust our network of
        professional landscapers. In Lawrenceville, GA, we evaluate lawn care
        companies based on five key performance areas: customer satisfaction,
        service quality, punctuality, job volume, and responsiveness. This
        approach helps us identify and highlight the top-performing lawn mowing
        services in the area.
      </Typography>
    </Container>
  );
};

export default RankInfoCard;
