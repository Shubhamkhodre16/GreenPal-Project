import React, { useState } from "react";
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
  Button,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { vendorList } from "../helpers/helper";
import useStyles from "./style";

const VendorSection = () => {
  const [searchName, setSearchName] = useState(false);
  const classes = useStyles();

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
        GreenPal &gt; Ohio &gt;
        <span
          style={{
            color: "#60545C",
          }}
        >
          {" "}
          Columbus Lawn Care
        </span>
      </Typography>

      {/* Headline */}
      <div
        style={{
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: 28,
            fontWeight: 700,
            color: "#222",
            lineHeight: 1.4,
            mb: 1,
            textAlign: "center",
          }}
        >
          Find Trusted Lawn Care Pros Instantly
        </Typography>
        <Typography
          sx={{ textAlign: "center", color: "#555", fontSize: 18, mb: 2 }}
        >
          Search by Name or Zip Code.Easy booking in seconds
        </Typography>
      </div>
      {/* Search and Dropdown */}
      <Box sx={{ display: "flex", flexDirection: "row", gap: 1.5, mb: 1.5 }}>
        <TextField
          placeholder="Search by name or zip code"
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
            border: "1px solid #d8d5d6",
            "& .MuiOutlinedInput-root": {
              borderRadius: "12px",
              fontSize: 14,
              paddingY: "6px",
              "& fieldset": {
                borderColor: "#d8d5d6",
              },
              "&:hover fieldset": {
                borderColor: "#d8d5d6",
              },
              "&.Mui-focused fieldset": {
                borderColor: "#d8d5d6",
              },
            },
            "& input": {
              paddingY: "10px",
            },
          }}
          onFocus={() => setSearchName(true)}
        />
        {searchName && (
          <Button
            sx={{
              fontSize: 15,
              color: "#60545C",
              textTransform: "capitalize",
            }}
            onClick={() => setSearchName(false)}
          >
            Cancel
          </Button>
        )}
      </Box>

      {searchName && (
        <Box
          sx={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            bgcolor: "#e9f6ff",
            zIndex: 1300,
          }}
        >
          {/* Fixed Search Header */}
          <Box
            sx={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "95%",
              px: 2,
              py: 2,
              boxShadow: "0 2px 4px rgba(0,0,0,0.1)",
              zIndex: 1400,
              bgcolor: "#e9f6ff",
            }}
          >
            {" "}
            <Typography sx={{ color: "#60545c", fontSize: 18, mb: 2 }}>
              Search by Name or Zip Code
            </Typography>
            <Box sx={{ display: "flex" }}>
              <TextField
                placeholder="Search by name or zip code"
                variant="outlined"
                fullWidth
                autoFocus
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
                  border: "1px solid #d8d5d6",
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                    fontSize: 14,
                    paddingY: "6px",
                    "& fieldset": {
                      borderColor: "#d8d5d6",
                    },
                    "&:hover fieldset": {
                      borderColor: "#d8d5d6",
                    },
                    "&.Mui-focused fieldset": {
                      borderColor: "#d8d5d6",
                    },
                  },
                  "& input": {
                    paddingY: "10px",
                  },
                }}
              />
              <Button
                sx={{
                  fontSize: 15,
                  color: "#60545C",
                  textTransform: "capitalize",
                  whiteSpace: "nowrap",
                }}
                onClick={() => setSearchName(false)}
              >
                Cancel
              </Button>
            </Box>
          </Box>

          {/* Scrollable Vendor List */}
          <Box
            sx={{
              mt: "150px", // height of fixed header
              px: 2,
              pb: 3,
              height: "calc(100vh - 88px)",
              overflowY: "auto",
            }}
          >
            <Typography
              sx={{
                textAlign: "center",
                fontWeight: 500,
                color: "#60545c",
                fontSize: 14,
                mb: 2,
              }}
            >
              4 lawn pros found near you
            </Typography>

            {vendorList.map((vendor, index) => (
              <Card
                key={index}
                sx={{
                  mb: 2,
                  borderRadius: 3,
                  backgroundColor: "#fff",
                  boxShadow: "0px 1px 4px rgba(0,0,0,0.1)",
                }}
              >
                <CardContent>
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
                          sx={{
                            color: "#6cc32a",
                            fontSize: 12,
                            fontWeight: 500,
                          }}
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
                      <Rating value={5} readOnly size="small" />{" "}
                      <Typography
                        variant="caption"
                        className={classes.review_text}
                      >
                        (4.5/5 109 reviews)
                      </Typography>
                      <Typography
                        variant="body2"
                        sx={{
                          color: "#666",
                          fontSize: 13,
                          mt: 0.5,
                          lineHeight: 1.4,
                        }}
                      >
                        📍 {vendor.location}
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
                      <Typography
                        variant="caption"
                        sx={{ fontSize: 11, color: "#999", mt: 0.5 }}
                      >
                        {vendor.date}
                      </Typography>
                    </Box>
                  </Box>
                  <Button
                    variant="contained"
                    sx={{
                      width: "100%",
                    }}
                    className={classes.instant_price_btn}
                  >
                    Get Instant Price
                  </Button>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default VendorSection;
