import React from "react";
import { Box, Typography, Avatar, Button, Divider } from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import FormatQuoteIcon from "@mui/icons-material/FormatQuote";

const TopRatedCard = ({ provider }) => {
  const { image, name, hired, rating, reviews, quote } = provider;

  return (
    <Box sx={{ mb: 4 }}>
      {/* Avatar and Name Section */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 2, mb: 1 }}>
        <Avatar src={image} alt={name} sx={{ width: 56, height: 56 }} />
        <Box>
          <Typography
            variant="subtitle2"
            sx={{ fontWeight: 600, fontSize: "0.95rem", maxWidth:300 }}
          >
            {name}
          </Typography>
          <Typography variant="body2" sx={{ fontWeight: 600 }}>
            Hired {hired} times on{" "}
            <Box component="span" sx={{ color: "#4CAF50" }}>
              GreenPal
            </Box>
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center", mt: 0.5 }}>
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} sx={{ color: "#FFD700", fontSize: 18 }} />
            ))}
            <Typography
              variant="caption"
              sx={{ ml: 1, color: "#777" }}
            >
              (overall rating {rating}. {reviews} Reviews)
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* See Price Button */}
      <Box sx={{ textAlign: "center", mt: 2, mb: 1 }}>
        <Button
          variant="outlined"
          sx={{
            color: "#FB8C00",
            borderColor: "#FB8C00",
            borderRadius: 999,
            px: 3,
            fontWeight: 600,
            fontSize: "0.9rem",
            textTransform: "none",
            "&:hover": {
              backgroundColor: "#FFF3E0",
              borderColor: "#FB8C00",
            },
          }}
        >
          See Price &gt;
        </Button>
      </Box>

      {/* Quote Section (no shadow, clean spacing) */}
      <Box sx={{ px: 1, pt: 1 }}>
        <Typography
          variant="body2"
          sx={{
            fontStyle: "italic",
            color: "#444",
            display: "flex",
            alignItems: "flex-start",
          }}
        >
          <FormatQuoteIcon
            sx={{ fontSize: 20, color: "#999", mr: 0.5, mt: 0.3 }}
          />
          {quote.length > 100 ? quote.slice(0, 100) + "…" : quote}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            color: "#0288D1",
            mt: 1,
            fontWeight: 600,
            cursor: "pointer",
            fontSize: "0.85rem",
          }}
        >
          Read More
        </Typography>
      </Box>

      {/* Divider for clean separation */}
      <Divider sx={{ mt: 3 }} />
    </Box>
  );
};

export default TopRatedCard;
