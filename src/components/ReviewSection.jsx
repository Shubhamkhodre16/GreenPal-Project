import React from "react";
import {
  Box,
  Typography,
  TextField,
  InputAdornment,
  MenuItem,
  Select,
  FormControl,
  Avatar,
  Button,
  Rating,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import useStyles from "./style";

const reviews = [
  {
    name: "Family Cox",
    initials: "FC",
    date: "May 21, 2025",
    text: "They did great, I love Mercury Greens they always do such a detailed job.",
    avatar: "",
  },
  {
    name: "Stacy Miller",
    avatar: "https://randomuser.me/api/portraits/men/33.jpg",
    date: "May 21, 2025",
    text: "They did great, I love Mercury Greens they always do such a detailed job.",
  },
  {
    name: "Alex Doe",
    initials: "AD",
    date: "May 21, 2025",
    text: "They did great, I love Mercury Greens they always do such a detailed job.",
  },
  {
    name: "Michael Rogers",
    initials: "MR",
    date: "May 21, 2025",
    text: "They did great, I love Mercury Greens they always do such a detailed job.",
  },
  {
    name: "Lucian Radu",
    avatar: "https://randomuser.me/api/portraits/men/44.jpg",
    date: "May 21, 2025",
    text: "They did great, I love Mercury Greens they always do such a detailed job.",
  },
];

const tags = [
  "Lawn • 6",
  "Landscaping • 2",
  "Garden • 2",
  "Removal • 2",
  "Plant • 2",
  "Yard • 1",
  "Weeds • 1",
];

const ReviewSection = () => {
  const classes = useStyles();

  return (
    <Box className={classes.reviewSectionWrapper}>
      {/* Heading */}
      <Typography variant="h5" className={classes.heading}>
        Here is what other GreenPal users have to say as of July 2025
      </Typography>

      {/* Rating Summary */}
      <Box className={classes.ratingSummary}>
        <Rating value={4} sx={{fontSize:"1.3rem"}} readOnly precision={0.5} />
        <Typography variant="caption" color="#18b6d3" sx={{ fontWeight: 600 }}>
          ( 4,940 reviews )
        </Typography>
      </Box>

      {/* Search Input */}
      <TextField
        placeholder="Search Reviews"
        variant="outlined"
        fullWidth
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        className={classes.searchInput}
      />

      {/* Sort Select */}
      <FormControl fullWidth>
        <Select
          defaultValue="most-relevant"
          IconComponent={KeyboardArrowDownIcon}
          className={classes.sortSelect}
        >
          <MenuItem value="most-relevant">Most Relevant</MenuItem>
          <MenuItem value="newest">Newest</MenuItem>
          <MenuItem value="oldest">Oldest</MenuItem>
        </Select>
      </FormControl>

      <Typography className={classes.mention}>
        Read reviews that mention:
      </Typography>

      {/* Tags */}
      <Box className={classes.tagList}>
        {tags.map((tag, idx) => (
          <Box key={idx} className={classes.tagItem}>
            {tag}
          </Box>
        ))}
      </Box>

      {/* Reviews */}
      {reviews.map((review, idx) => {
        const isLast = idx === reviews.length - 1;

        const ReviewContent = (
          <>
            {/* Rating Row */}
            <Box className={classes.ratingRow}>
              <Rating value={5} readOnly size="small" />
              <CheckCircleIcon sx={{ color: "#69c04c", fontSize: 18 }} />
              <Typography variant="caption" sx={{ color: "#69c04c", fontWeight: 500 }}>
                Verified by GreenPal
              </Typography>
            </Box>

            {/* Location */}
            <Box className={classes.locationRow}>
              <LocationOnIcon sx={{ fontSize: 16, color: "#888" }} />
              <Typography className={classes.locationText}>Nashville, TN 37220</Typography>
            </Box>

            {/* Tag */}
            <Box className={classes.tagLabel}>Near Lawn Cutting near Talbot’s Corner</Box>

            {/* Review Text */}
            <Typography className={classes.reviewText}>{review.text}</Typography>

            {/* Reviewer Info */}
            <Box className={classes.reviewerRow}>
              <Box className={classes.reviewerInfo}>
                {review.avatar ? (
                  <Avatar src={review.avatar} sx={{ width: 28, height: 28 }} />
                ) : (
                  <Avatar sx={{ width: 28, height: 28, bgcolor: "#ddd" }}>
                    <Typography fontSize={12} color="#333">
                      {review.initials}
                    </Typography>
                  </Avatar>
                )}
                <Typography className={classes.reviewerName}>{review.name}</Typography>
              </Box>
              <Typography className={classes.reviewDate}>{review.date}</Typography>
            </Box>
          </>
        );

        return (
          <Box
            key={idx}
            className={`${classes.reviewBox} ${isLast ? classes.lastReviewBox : ""}`}
          >
            {ReviewContent}
            {isLast && <Box className={classes.blurOverlay} />}
          </Box>
        );
      })}

      {/* Read More Button */}
      <Box textAlign="center" mt={3}>
        <Button variant="outlined" className={classes.readMoreBtn}>
          Read More Reviews
        </Button>
      </Box>
    </Box>
  );
};

export default ReviewSection;
