import React from "react";
import {
  Box,
  Typography,
  Button,
  TextField,
  Card,
  CardContent,
  Avatar,
  Rating,
  Stack,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import Slider from "./Slider";
const HomePage = () => {
  return (
    <Box
      sx={{
        minHeight: "100vh",
        backgroundImage: `url('/assests/images/grass.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        p: 2,
        color: "white",
      }}
    >
      {/* Header Section */}
      <Box sx={{ textAlign: "center", }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {/* <Typography variant="h6" sx={{ fontWeight: "bold", color: "#ffffffff" }}>
          GREENPAL
        </Typography> */}
          <img src="/assests/images/greenpal.png" alt="Greenpal logo" width={120} height={90} />
          <Button
            variant="contained"
            sx={{
              position: "absolute",
              right: 16,
              top: 40,
              backgroundColor: "#FF7F00",
              fontWeight: "bold",
              textTransform: "capitalize",
              padding: "10px 20px",
              borderRadius: "50px",
              "&:hover": { backgroundColor: "#FF8C00" },
            }}
          >
            See Prices
          </Button>
        </Box>
        <Typography
          variant="h4"
          sx={{ fontWeight: "bold", mt: 3, color: "white" }}
        >
          Professional Lawn Care Services in Columbus
        </Typography>
        <Typography variant="subtitle1" sx={{ mt: 1, color: "#eee", fontWeight: "bold", fontSize: "20px" }}>
          Fast, Easy, & Free Quotes
        </Typography>
        <Typography variant="body1" sx={{ mt: 6, mb: 0, fontSize: 14, fontWeight: "bold" }}>
          Book your grass cutting in 60 seconds ↴
        </Typography>
        {/* Address input */}
        <Box sx={{ display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", }}>
          <TextField
            placeholder="Enter your house address"
            variant="outlined"
            sx={{
              mt: 1,
              backgroundColor: "white",
              width: { xs: "80%", ms: "80%", md: "40%", lg: "40%" },
              borderRadius: "25px",
              "& .MuiOutlinedInput-root": {
                borderRadius: "25px",
                "& fieldset": {
                  border: "none",
                },
                "&:hover fieldset": {
                  border: "none",
                },
                "&.Mui-focused fieldset": {
                  border: "none",
                },
              },
              input: { textAlign: "center" },
            }}
          />
          <Button
            variant="contained"
            sx={{
              mt: 2,
              width: { xs: "80%", ms: "80%", md: "40%", lg: "40%" },
              background: "linear-gradient(to bottom, #f5a835ff, #FF7F00)",
              borderRadius: "25px",
              fontWeight: "bold",
              // py: 1.5,
              padding: "16px 20px",
              textTransform: "capitalize",
            }}
          >
            See Prices
          </Button>
        </Box>
      </Box>
      <Slider />
    </Box>
  );
};
export default HomePage;





