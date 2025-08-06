import React from "react";
import { Box, Typography, Button, TextField } from "@mui/material";
import Slider from "./Slider";
import useStyles from "./style";

const HomePage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.container}>
      <Box className={classes.headerBox_main}>
        <Box className={classes.headerBox}>
          <img
            src="/assests/images/greenpal.png"
            alt="Greenpal logo"
            className={classes.main_logo}
          />
          <Button variant="contained" className={classes.see_priceBtn}>
            See Prices
          </Button>
        </Box>
        <Typography variant="h4" sx={{ mt: 3 }} className={classes.main_title}>
          Professional Lawn Care Services in Columbus
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{ mt: 1 }}
          className={classes.main_subtitle}
        >
          Fast, Easy, & Free Quotes
        </Typography>
        <Typography
          variant="body1"
          sx={{ mt: 6, mb: 0 }}
          className={classes.main_subtitle2}
        >
          Book your grass cutting in 60 seconds ↴
        </Typography>
        <Box className={classes.textfield_box}>
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
            }}
            className={classes.price_btn}
          >
            See Prices
          </Button>
        </Box>
      </Box>
      <Slider />
      {/* <img
        style={{
          width: "100%",
          display: "block",
          bottom: 0,
        }}
        alt=""
        src="/assests/images/reviewsimg.png"
      /> */}
    </Box>
  );
};
export default HomePage;
