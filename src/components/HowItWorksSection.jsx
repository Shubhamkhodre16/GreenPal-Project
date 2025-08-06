import React from "react";
import { Box, Typography, Stack, Button } from "@mui/material";

const steps = [
  {
    number: 1,
    title: "Your Details",
    image: "https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg", // Replace with actual step image
  },
  {
    number: 2,
    title: "Choose a Pro",
    image: "https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg", // Replace with actual step image
  },
  {
    number: 3,
    title: "Book Your Appointment",
    image: "https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg", // Replace with actual step image
  },
];

const HowItWorksSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#eafaf0",
        py: 6,
        px: 2,
      }}
    >
      {/* Heading */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: { xs: "30px", sm: "32px" },
          textAlign: "center",
          color: "#2c2c2c",
        }}
      >
        How It Works
      </Typography>

      {/* Subheading */}
      <Typography
        sx={{
          textAlign: "center",
          fontSize: { xs: "14px", sm: "16px" },
          color: "#555",
          mt: 1,
          mb: 6,
        }}
      >
        Fast, Easy, & Free Quotes
      </Typography>

      {/* Steps */}
      <Stack spacing={6} alignItems="center">
        {steps.map((step) => (
          <Box key={step.number} sx={{ textAlign: "center" }}>
            <Box
              component="img"
              src={step.image}
              alt={step.title}
              sx={{
                width: 180,
                height: 180,
                borderRadius: "50%",
                objectFit: "cover",
                border: "5px solid rgba(39, 101, 101, 0.1)",
                boxShadow: "0 0 8px rgba(0,0,0,0.1)",
                mb: 2,
              }}
            />

            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mb: 1,
                gap:1
              }}
            >
              <Box
                sx={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  backgroundColor: "#3dc962",
                  color: "black",
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                }}
              >
                {step.number}
              </Box>
                <Typography
              variant="subtitle1"
              sx={{
                fontWeight: 700,
                fontSize: "16px",
                color: "#2c2c2c",
              }}
            >
              {step.title}
            </Typography>
            </Box>

          
          </Box>
        ))}
      </Stack>

      {/* CTA Button */}
      <Box sx={{ textAlign: "center", mt: 2 }}>
        <Button
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #ffa726, #fb8c00)",
            borderRadius: "999px",
            fontWeight: "bold",
            fontSize: "15px",
            px: 12,
            py: 1.5,
            textTransform: "none",
            boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
            "&:hover": {
              background: "linear-gradient(to right, #ff9800, #f57c00)",
            },
          }}
        >
          See Prices &nbsp;&gt;
        </Button>
      </Box>
    </Box>
  );
};

export default HowItWorksSection;
