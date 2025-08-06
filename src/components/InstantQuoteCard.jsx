import React from "react";
import {
  Box,
  Typography,
  TextField,
  MenuItem,
  Button,
  Paper,
} from "@mui/material";

const grassOptions = [
  "Less than 10” tall",
  "More than 10” tall",
];

const frequencyOptions = [
  "Every Week",
  "Every 2 Weeks",
  "Once a Month",
];

export default function InstantQuoteCard() {
  const [grassHeight, setGrassHeight] = React.useState(grassOptions[0]);
  const [mowingFrequency, setMowingFrequency] = React.useState(frequencyOptions[0]);

  return (
    <Box
      sx={{
        maxWidth: 360,
        mx: "auto",
        py: 4,
        px: 2,
        fontFamily: '"Helvetica Neue", Arial, sans-serif',
      }}
    >
      <Paper elevation={0}>
        {/* Title */}
        <Typography
          variant="h5"
          sx={{
            fontSize: "1.5rem",
            fontWeight: 700,
            lineHeight: 1.3,
            textAlign: "center",
            mb: 1,
          }}
        >
          Get an Instant Lawn Mowing Quote – <br />
          <span style={{ color: "#1a1a1a" }}>Columbia, SC</span>
        </Typography>

        <Typography
          sx={{
            fontSize: "0.9rem",
            textAlign: "center",
            color: "#5f6368",
            mb: 2,
          }}
        >
          Let AI estimate your lawn care price based on local data
        </Typography>

        {/* Map */}
        <Box
          sx={{
            borderRadius: "12px",
            overflow: "hidden",
            mb: 3,
            position: "relative",
          }}
        >
          <img
            src="https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg"
            alt="Map"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
          <Box
            sx={{
              position: "absolute",
              top: 8,
              right: 8,
              background: "#fff",
              px: 1,
              py: 0.5,
              borderRadius: "6px",
              fontSize: "0.85rem",
              fontWeight: 600,
              color: "#333",
              boxShadow: 1,
            }}
          >
            Zip: <span style={{ color: "#000" }}>29044</span>
          </Box>
        </Box>

        {/* Dropdown: Grass height */}
        <Typography
          sx={{ fontSize: "0.9rem", fontWeight: 600, mb: 0.5 }}
        >
          How tall is your grass?
        </Typography>
        <TextField
          fullWidth
          size="small"
          select
          value={grassHeight}
          onChange={(e) => setGrassHeight(e.target.value)}
          sx={{
            mb: 2,
            background: "#f8f9fa",
            borderRadius: 1,
            "& fieldset": { border: "1px solid #dadce0" },
          }}
        >
          {grassOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {/* Dropdown: Mowing Frequency */}
        <Typography
          sx={{ fontSize: "0.9rem", fontWeight: 600, mb: 0.5 }}
        >
          How often are you wanting mowing
        </Typography>
        <TextField
          fullWidth
          size="small"
          select
          value={mowingFrequency}
          onChange={(e) => setMowingFrequency(e.target.value)}
          sx={{
            mb: 3,
            background: "#f8f9fa",
            borderRadius: 1,
            "& fieldset": { border: "1px solid #dadce0" },
          }}
        >
          {frequencyOptions.map((option) => (
            <MenuItem key={option} value={option}>
              {option}
            </MenuItem>
          ))}
        </TextField>

        {/* Price Box */}
        <Box
          sx={{
            background: "#e6f4ea",
            borderRadius: "12px",
            py: 2,
            px: 2,
            textAlign: "center",
            mb: 3,
          }}
        >
          <Typography
            sx={{
              fontSize: "1.5rem",
              fontWeight: 700,
              color: "#202124",
              mb: 0.5,
            }}
          >
            $48.00/cut
          </Typography>
          <Typography sx={{ fontSize: "0.8rem", color: "#5f6368" }}>
            Estimated Price for Columbia, SC: <br />
            Based on average lawn size, every week mowing
          </Typography>
        </Box>

        {/* CTA Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            background: "linear-gradient(to right, #FFA726, #FF6F00)",
            color: "#fff",
            fontWeight: 600,
            fontSize: "1rem",
            py: 1.2,
            borderRadius: "24px",
            textTransform: "none",
            boxShadow: "none",
            "&:hover": {
              background: "linear-gradient(to right, #fb8c00, #f4511e)",
              boxShadow: "none",
            },
          }}
        >
          See Prices
        </Button>
      </Paper>
    </Box>
  );
}
