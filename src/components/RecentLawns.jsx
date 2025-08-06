import React from "react";
import { Box, Typography, Button } from "@mui/material";
import LawnCard from "./LawnCard";

export default function RecentLawns() {
  const lawns = [
    {
      image: "https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg",
      city: "Kansas City, Missouri",
      location: "Near Routine Yard Maintenance near Robertson",
      price: 45,
      lastMowed: "2 months ago",
      frequency: "Weekly",
      note:
        "I want the front and sides of the house mowed twice a month, the far back just once a month. I do not want the inside of the fenced back yard mowed at this time. Let me know if you have more questions.",
    },
    {
      image: "https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg",
      city: "Kansas City, Missouri",
      location: "Near Routine Yard Maintenance near Robertson",
      price: 52,
      lastMowed: "1 month ago",
      frequency: "Bi-weekly",
      note: "Please trim the edges and avoid the flower beds in the front yard.",
    },
    {
      image: "https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg",
      city: "Kansas City, Missouri",
      location: "Near Routine Yard Maintenance near Robertson",
      price: 60,
      lastMowed: "3 weeks ago",
      frequency: "Monthly",
      note: "Only mow the front yard and around the driveway.",
    },
  ];

  return (
    <Box sx={{ px: 2, py: 4, backgroundColor: "#fff" }}>
      <Typography
        sx={{
          fontSize: 22,
          fontWeight: 700,
          textAlign: "center",
          mb: 2,
          color: "#333",
        }}
      >
        Recent lawns mowed in <br />
        <Box component="span" sx={{ color: "#3d3d3d" }}>
          Columbus, OH
        </Box>
      </Typography>

      <Typography textAlign="center" fontSize={14} mb={3} color="#666">
        by GreenPal's community of lawn care pros
      </Typography>

      {/* Scrollable Cards */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          px: 1,
          pb: 2,
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {lawns.map((lawn, index) => (
         <LawnCard
  image="https://static4.depositphotos.com/1007968/368/i/450/depositphotos_3687189-stock-photo-manicured-yard.jpg"
  city="Kansas City, Missouri"
  location="Near Routine Yard Maintenance near Robertson"
  price={45}
  rate={75}
  lastMowed="2 months ago"
  frequency="Weekly"
  note="I want the front and sides of the house mowed twice a month, the far back just once a month. I do not want the inside of the fenced back yard mowed at this time. Let me know if you have more questions."
/>


        ))}
      </Box>

      <Box textAlign="center" mt={3}>
        <Button
          variant="contained"
          sx={{
            background:
              "linear-gradient(90deg, rgba(255,167,38,1) 0%, rgba(255,111,0,1) 100%)",
            borderRadius: 30,
            fontWeight: 700,
            fontSize: 16,
            px: 4,
            py: 1.3,
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
    </Box>
  );
}
