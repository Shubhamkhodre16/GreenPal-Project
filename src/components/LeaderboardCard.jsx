import React from "react";
import {
  Box,
  Typography,
  Avatar,
  Button,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import LocalFloristIcon from "@mui/icons-material/LocalFlorist";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";

export default function LeaderboardCard({
  rank,
  company,
  location,
  price,
  rating,
  earnings,
  lawns,
  hired,
  services,
  avatar,
  topState,
}) {
  return (
    <Box
      sx={{
        borderRadius: 3,
        p: 2,
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        color: "#333",
      }}
    >
      <Box
        sx={{
          bgcolor: "#fff",
          borderRadius: 3,
          p: 2,
          boxShadow: "0 2px 6px rgb(0 0 0 / 0.1)",
          textAlign: "center",
        }}
      >
        {/* Rank */}
        <Typography sx={{ fontWeight: 700, fontSize: 22, color: "#444" }}>
          #{rank}
        </Typography>

        {/* Avatar with Crown */}
        <Box sx={{ position: "relative", display: "inline-block", mb: 1 }}>
          <EmojiEventsIcon
            sx={{
              color: "#ffd700",
              fontSize: 36,
              position: "absolute",
              top: -16,
              left: "50%",
              transform: "translateX(-50%)",
              zIndex: 2,
            }}
          />
          <Avatar
            src={avatar}
            sx={{
              width: 64,
              height: 64,
              border: "3px solid #ffd700",
              zIndex: 1,
            }}
          />
        </Box>

        <Typography
          sx={{ color: "#f7931e", fontSize: 13, fontWeight: 600, mb: 1 }}
        >
          Ranked #{rank} in {topState}
        </Typography>

        <Typography sx={{ fontWeight: 700, fontSize: 18, mb: 1 }}>
          {company}
        </Typography>

        {/* Stars */}
        <Box sx={{ display: "flex", justifyContent: "center", mb: 1 }}>
          {[...Array(5)].map((_, i) => (
            <StarIcon key={i} sx={{ fontSize: 18, color: "#ffd700" }} />
          ))}
        </Box>

        {/* Rating */}
        <Typography
          sx={{ fontSize: 13, fontWeight: 700, color: "#4caf50", mb: 1.5 }}
        >
          {rating}% Reliability Rating
        </Typography>

        {/* Price */}
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 2,
            fontWeight: 700,
            fontSize: 20,
            color: "#f7931e",
            gap: 0.5,
          }}
        >
          <Box
            sx={{
              px: 1.5,
              py: 0.2,
              borderRadius: 1,
              fontSize: 22,
              fontWeight: 900,
            }}
          >
            ${price}
          </Box>
          / Mowing
        </Box>

        {/* Stats Grid */}
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            fontSize: 13,
            color: "#444",
            mb: 2,
            rowGap: 1,
            columnGap: 2,
            textAlign: "left",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Box
              component="span"
              sx={{ mr: 0.5, fontWeight: 700, color: "#1b5e20" }}
            >
              $
            </Box>
            ${earnings.toLocaleString()} earned
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocationOnIcon sx={{ fontSize: 16, mr: 0.5, color: "#6cc32a" }} />
            {location}
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <LocalFloristIcon sx={{ fontSize: 16, mr: 0.5, color: "#6cc32a" }} />
            {lawns} lawns mowed in
          </Box>

          <Box sx={{ display: "flex", alignItems: "center" }}>
            <CheckCircleIcon sx={{ fontSize: 16, mr: 0.5, color: "#6cc32a" }} />
            Hired {hired} Times
          </Box>
        </Box>

        {/* Services */}
        <Box sx={{ textAlign: "left", mb: 2 }}>
          <Typography sx={{ fontWeight: 600, fontSize: 14, mb: 1 }}>
            Yard Maintenance Services offered
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mb: 1 }}>
            <CheckCircleIcon sx={{ fontSize: 18, mr: 1, color: "#4caf50" }} />
            <Typography sx={{ fontSize: 14 }}>{services[0]}</Typography>
          </Box>
          <Typography
            sx={{
              color: "#f7931e",
              fontWeight: 600,
              fontSize: 14,
              cursor: "pointer",
              userSelect: "none",
              "&:hover": { textDecoration: "underline" },
            }}
          >
            View {services[1]}
          </Typography>
        </Box>

        {/* See Prices Button */}
        <Button
          fullWidth
          variant="contained"
          sx={{
            background:
              "linear-gradient(90deg, rgba(255,167,38,1) 0%, rgba(255,111,0,1) 100%)",
            borderRadius: 6,
            fontWeight: 700,
            fontSize: 16,
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
