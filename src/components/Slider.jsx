import {
  Box,
  Typography,
  Card,
  CardContent,
  Avatar,
  Rating,
  Stack,
  Button,
  Chip,
} from "@mui/material";
import StarIcon from "@mui/icons-material/Star";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { lawnPros } from "../helpers/helper";
import useStyles from "./style";

export default function LawnProSlider() {
  const classes = useStyles();

  return (
    <Box sx={{ mt: 0 }}>
      <Typography
        variant="h6"
        sx={{
          mt: 2,
          mb: 1,
        }}
        className={classes.slider_title}
      >
        Got a free instant quote ↴
      </Typography>{" "}
      <Swiper
        spaceBetween={10}
        slidesPerView={1.1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        style={{
          paddingLeft: 20,
          paddingRight: 20,
          paddingBottom: 30,
        }}
        breakpoints={{
          600: { slidesPerView: 2 },
          900: { slidesPerView: 2 },
          1200: { slidesPerView: 4 },
        }}
      >
        {lawnPros?.map((pro, index) => (
          <SwiperSlide key={index}>
            <Box display="flex" justifyContent="center">
              <Card
                sx={{
                  width: 300,
                  borderRadius: 4,
                  height: 160,
                  position: "relative",
                }}
              >
                <div className={classes.price_chip_div}>
                  <span style={{ fontSize: "16px" }}>${pro.price}</span>
                  <span style={{ fontSize: "11px" }}>/mowing</span>
                </div>

                <CardContent sx={{ p: 2 }}>
                  <Stack direction="row" spacing={2} sx={{ mt: 2 }}>
                    <Avatar
                      src={pro.image}
                      sx={{ mt: 2, width: 60, height: 60 }}
                    />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        className={classes.available_txt}
                      >
                        ✅ Available
                      </Typography>
                      <Typography
                        variant="subtitle1"
                        className={classes.name_text}
                      >
                        {pro.name}
                      </Typography>
                      <Box className={classes.rating_div}>
                        <Rating
                          name="read-only"
                          value={pro.rating}
                          precision={0.5}
                          readOnly
                          size="small"
                          emptyIcon={<StarIcon style={{ opacity: 0.3 }} />}
                        />
                        <Typography
                          variant="caption"
                          className={classes.review_text}
                        >
                          (4.5/5 {pro.reviews} reviews)
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        className={classes.pricecut_text}
                        sx={{ mt: 0.5 }}
                      >
                        <strong>
                          <span style={{ color: "#018c16" }}>$</span> Avg.
                          Price:
                        </strong>{" "}
                        ${pro.price} per cut
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{
                          mt: 2,
                        }}
                        className={classes.seeprice_btn}
                      >
                        See Price
                      </Button>
                    </Box>
                  </Stack>
                </CardContent>
              </Card>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
