import React from "react";
import { Box, Typography } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function LawnCard({
  image,
  city,
  location,
  price,
  rate,
  lastMowed,
  frequency,
  note,
}) {
  return (
    <Box
      sx={{
        minWidth: 280,
        maxWidth: 280,
        bgcolor: "#fff",
        borderRadius: 2,
        overflow: "hidden",
        mx: 1,
        flexShrink: 0,
      }}
    >
      {/* Lawn Image with top labels */}
      <Box sx={{ position: "relative" }}>
        <img
          src={image}
          alt="Lawn"
          width="100%"
          height="160px"
          style={{ objectFit: "cover" }}
        />

        {/* GREENPAL label top-left */}
        <Box
          sx={{
            position: "absolute",
            top: 8,
            left: 8,
            background: "rgba(0, 0, 0, 0.6)",
            color: "#fff",
            fontSize: 12,
            fontWeight: 700,
            px: 1.2,
            py: 0.4,
            borderRadius: 1,
            letterSpacing: 0.5,
          }}
        >
          GREENPAL
        </Box>

        {/* Price tag top-right */}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            right: 0,
            background: "#f7931e",
            color: "#fff",
            px: 1.4,
            py: 0.8,
            fontWeight: 700,
            fontSize: 14,
            borderBottomLeftRadius: 8,
          }}
        >
          ${price}
          <Box component="span" sx={{ fontSize: 11, ml: 0.5 }}>
            /mowing
          </Box>
        </Box>
      </Box>

      {/* Card content aligned left */}
      <Box sx={{ p: 2, textAlign: "left" }}>
        <Typography fontWeight={700} fontSize={14} mb={0.5}>
          Yard Cutting – {city}
        </Typography>

        <Box display="flex" alignItems="center" fontSize={12} color="#555" mb={1}>
          <LocationOnIcon sx={{ fontSize: 16, mr: 0.5, color: "#6cc32a" }} />
          {location}
        </Box>

        {/* Price per cut */}
        <Box display="flex" alignItems="center" fontSize={13} color="#333" mb={0.5}>
          <AttachMoneyIcon sx={{ fontSize: 16, mr: 0.5, color: "#6cc32a" }} />
          <strong>Price:</strong> ${rate} per cut
        </Box>

        {/* Last Mowed */}
        <Box display="flex" alignItems="center" fontSize={13} color="#333" mb={0.5}>
          <AccessTimeIcon sx={{ fontSize: 16, mr: 0.5, color: "#6cc32a" }} />
          <strong>Last Mowed:</strong> {lastMowed}
        </Box>

        {/* Frequency */}
        <Box display="flex" alignItems="center" fontSize={13} color="#333" mb={1}>
          <CalendarTodayIcon sx={{ fontSize: 16, mr: 0.5, color: "#6cc32a" }} />
          <strong>Service Frequency:</strong> {frequency}
        </Box>

        {/* Note */}
        {note && (
          <Box
            sx={{
              bgcolor: "#f4f8fb",
              p: 1.2,
              borderRadius: 2,
              fontSize: 12,
              color: "#444",
              lineHeight: 1.4,
            }}
          >
            {note}
          </Box>
        )}
      </Box>
    </Box>
  );
}
