import React from "react";
import { Box, Typography, Button } from "@mui/material";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import LeaderboardCard from "./LeaderboardCard";

export default function Leaderboard() {
  return (
    <Box
      sx={{
        fontFamily: "'Helvetica Neue', Arial, sans-serif",
        color: "#333",
        userSelect: "none",
        px: 2,
        py: 4,
        backgroundColor: "#f5faff", // light background
      }}
    >
      {/* Section Title */}
      <Typography
        sx={{
          fontWeight: 700,
          fontSize: 20,
          color: "#3d3d3d",
          mb: 3,
          textAlign: "center",
          lineHeight: 1.3,
        }}
      >
        <Box
          component="span"
          sx={{
            color: "#6cc32a",
            fontWeight: "bold",
            mr: 1,
            fontSize: 20,
            verticalAlign: "middle",
          }}
        >
          📍
        </Box>
        Columbia Lawn Care Companies Leaderboard
      </Typography>

      {/* Scrollable Cards */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          scrollSnapType: "x mandatory",
        //   gap: 2,
          pb: 1,
          px: 1,
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {/* Example: 3 Cards */}
        {[1, 2, 3].map((id) => (
          <Box
            key={id}
            sx={{
              flexShrink: 0,
              width: 320,
              scrollSnapAlign: "start",
            }}
          >
            <LeaderboardCard
              rank={id}
              company="Landscape Solutions"
              location="Indianapolis, IN"
              price={45}
              rating={84}
              earnings={85749}
              lawns={82}
              hired={81}
              services={["Shrub Pruning", "+5 Services"]}
              avatar={`https://i.pravatar.cc/64?img=${id}`}
              topState="Texas"
            />
          </Box>
        ))}
      </Box>
      
      {/* Bottom Link */}
      <Box textAlign="center" mt={2}>
        <Button
          variant="outlined"
          endIcon={<ArrowForwardIosIcon sx={{ fontSize: 14 }} />}
          sx={{
            borderRadius: 30,
            borderColor: "#f7931e",
            color: "#f7931e",
            fontWeight: 600,
            fontSize: 13,
            textTransform: "none",
            px: 2,
            py: 0.8,
            "&:hover": {
              bgcolor: "#fff3e0",
              borderColor: "#f7931e",
            },
          }}
        >
          See all Indianapolis, IN Lawn Care Companies &gt;
        </Button>
      </Box>
    </Box>
  );
}
