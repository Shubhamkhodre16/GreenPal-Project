import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  Card,
  CardContent,
  Avatar,
  Rating,
  MenuItem,
  Select,
  FormControl,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const vendorList = [
  {
    name: "Green Lawn Care",
    location: "Nashville, TN 37220",
    note: "I love Mercury Greens they always do such a detailed job.",
    date: "Aug 8, 2025",
    area: "Full Service Lawn Care near Timberwood",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Eco Grass Pros",
    location: "Cincinnati, OH 45202",
    note: "They arrived on time and made my lawn look fantastic.",
    date: "Aug 5, 2025",
    area: "Service near Vine Street",
    avatar: "https://randomuser.me/api/portraits/men/45.jpg",
  },
];

const VendorSection = () => {
  return (
    <Box sx={{ backgroundColor: "#e9f6ff", py: 4, px: 2 }}>
      {/* Breadcrumb */}
      <Typography
        variant="caption"
        sx={{
          display: "block",
          color: "#0075c4",
          fontSize: 12,
          mb: 2,
          fontWeight: 500,
        }}
      >
        GreenPal &gt; Ohio &gt; Columbus Lawn Care
      </Typography>

      {/* Headline */}
      <Typography
        sx={{
          fontSize: 24,
          fontWeight: 700,
          color: "#222",
          lineHeight: 1.4,
          mb: 1,
        }}
      >
        Want to get{" "}
        <Box component="span" sx={{ color: "#00aaff" }}>
          prices
        </Box>{" "}
        from others?
      </Typography>
      <Typography sx={{ color: "#555", fontSize: 14, mb: 2 }}>
        Get a quote from other vendors.
      </Typography>

      {/* Search and Dropdown */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5, mb: 3 }}>
        <TextField
          placeholder="Search by name"
          variant="outlined"
          fullWidth
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: "#888" }} />
              </InputAdornment>
            ),
          }}
          sx={{
            backgroundColor: "#ffffff",
            borderRadius: "12px",
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              fontSize: 14,
              paddingY: "6px",
            },
            "& input": {
              paddingY: "10px",
            },
          }}
        />

        <FormControl fullWidth>
          <Select
            defaultValue="3"
            sx={{
              backgroundColor: "#ffffff",
              borderRadius: "12px",
              fontSize: 14,
              "& .MuiOutlinedInput-notchedOutline": {
                borderColor: "#ccc",
              },
              "& .MuiSelect-select": {
                py: 1.5,
              },
            }}
          >
            <MenuItem value="3">Within 3 miles of ZIP</MenuItem>
            <MenuItem value="5">Within 5 miles of ZIP</MenuItem>
            <MenuItem value="10">Within 10 miles of ZIP</MenuItem>
          </Select>
        </FormControl>
      </Box>

      {/* Scrollable Card List */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: 2,
          pb: 1,
          "&::-webkit-scrollbar": {
            display: "none",
          },
          scrollbarWidth: "none",
        }}
      >
        {vendorList.map((vendor, index) => (
          <Card
            key={index}
            sx={{
              minWidth: 280,
              maxWidth: 280,
              flexShrink: 0,
              borderRadius: 3,
              backgroundColor: "#fff",
              boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
            }}
          >
            <CardContent>
              {/* Header Row */}
              <Box display="flex" alignItems="center" mb={1.2}>
                <Avatar
                  src={vendor.avatar}
                  sx={{ width: 42, height: 42, mr: 1.5 }}
                />
                <Box>
                  <Box display="flex" alignItems="center" mb={0.3}>
                    <CheckCircleIcon
                      fontSize="small"
                      sx={{ color: "#6cc32a", mr: 0.5 }}
                    />
                    <Typography
                      variant="caption"
                      sx={{ color: "#6cc32a", fontSize: 12, fontWeight: 500 }}
                    >
                      Verified by GreenPal
                    </Typography>
                  </Box>
                  <Typography
                    fontWeight={700}
                    fontSize={14}
                    lineHeight={1.2}
                    mb={0.2}
                  >
                    {vendor.name}
                  </Typography>
                  <Rating value={5} readOnly size="small" />
                  <Typography
                    variant="body2"
                    sx={{
                      color: "#666",
                      fontSize: 13,
                      mt: 0.5,
                      lineHeight: 1.4,
                    }}
                  >
                    {vendor.location}
                  </Typography>
                  <Box
                    sx={{
                      backgroundColor: "#f2f2f2",
                      px: 1,
                      py: 0.4,
                      borderRadius: 1,
                      display: "inline-block",
                      fontSize: 11,
                      mt: 0.5,
                      color: "#444",
                    }}
                  >
                    {vendor.area}
                  </Box>
                </Box>
              </Box>

              {/* Review Text */}
              <Typography
                variant="body2"
                sx={{
                  fontSize: 13,
                  color: "#444",
                  mt: 1.5,
                  mb: 0.6,
                  lineHeight: 1.6,
                }}
              >
                {vendor.note}
              </Typography>

              {/* Date */}
              <Typography
                variant="caption"
                sx={{ fontSize: 11, color: "#999", mt: 0.5 }}
              >
                {vendor.date}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default VendorSection;
