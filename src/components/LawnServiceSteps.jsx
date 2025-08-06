import React from "react";
import { Box, Typography, Stack } from "@mui/material";

// Sample icons (replace with your real image paths or SVGs)
const steps = [
  {
    icon: "https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg", // Replace with your actual icon path
    text: "Get free quotes",
  },
  {
    icon: "https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg",
    text: "Read their reviews and\nchoose with confidence",
  },
  {
    icon: "https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg",
    text: "Hire with ease & relax",
  },
];

export default function LawnServiceSteps() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 360,
        mx: "auto",
        py: 4,
        px: 2,
        background: "linear-gradient(to bottom, #64b531, #00b55b)",
        borderRadius: "12px",
        color: "#fff",
        textAlign: "center",
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
      }}
    >
      {/* Heading */}
      <Typography
        variant="h6"
        sx={{
          fontWeight: 700,
          fontSize: "1.25rem",
          mb: 3,
          lineHeight: 1.4,
        }}
      >
        Local lawn mowing services in Indianapolis Indiana compete for your lawn
      </Typography>

      {/* Steps */}
      <Stack spacing={3}>
        {steps.map(({ icon, text }, index) => (
          <Box key={index}>
            <Box
              component="img"
              src={icon}
              alt="Step icon"
              sx={{
                width: 72,
                height: 72,
                mx: "auto",
                mb: 1,
                borderRadius: "50%",
                backgroundColor: "#0B4D75",
                objectFit: "contain",
              }}
            />
            <Typography sx={{ fontSize: "0.95rem", lineHeight: 1.4 }}>
              {text}
            </Typography>
          </Box>
        ))}
      </Stack>
    </Box>
  );
}
