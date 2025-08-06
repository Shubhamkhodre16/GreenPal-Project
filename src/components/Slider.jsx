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

export default function LawnProSlider() {
  return (
    <Box sx={{ mt: 0 }}>
      <Typography
        variant="h6"
        sx={{
          color: "white",
          textAlign: "center",
          mb: 2,
          fontWeight: "bold",
          textTransform: "none",
        }}
      >
        Hire a Trusted Lawn Pro
      </Typography>
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        style={{ paddingBottom: 30 }}
        breakpoints={{
          600: { slidesPerView: 1 },
          900: { slidesPerView: 4 },
          1200: { slidesPerView: 6 },
        }}
      >
        {lawnPros?.map((pro, index) => (
          <SwiperSlide key={index}>
            <Box display="flex" justifyContent="center">
              <Card
                sx={{
                  width: 300,
                  borderRadius: 4,
                  height: 280,
                  position: "relative",
                }}
              >
                {/* Mowing Chip in Top-Right */}
                <Chip
                  label={
                    <Box sx={{ textAlign: "center" }}>
                      ${pro.price}
                      <Typography
                        variant="caption"
                        display="block"
                        sx={{ lineHeight: 1 }}
                      >
                        /mowing
                      </Typography>
                    </Box>
                  }
                  size="small"
                  sx={{
                    position: "absolute",
                    top: 8,
                    right: 8,
                    backgroundColor: "#FF9900",
                    color: "white",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    px: 0.5,
                    py: 1.5,
                    height: "40px",
                    fontSize: "14px",
                    zIndex: 1,
                  }}
                />
                <CardContent sx={{ p: 2 }}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <Avatar src={pro.image} sx={{ width: 56, height: 56 }} />
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight="bold"
                        sx={{ fontSize: "14px", mb: 0.5 }}
                      >
                        {pro.name}
                      </Typography>
                      <Box display="flex" alignItems="center">
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
                          sx={{ fontSize: "13px", ml: 0.5 }}
                        >
                          ({pro.reviews} reviews)
                        </Typography>
                      </Box>
                      <Typography
                        variant="body2"
                        sx={{ fontSize: "13px", mt: 0.5 }}
                      >
                        <strong>$Avg. Price:</strong>${pro.price} per cut
                      </Typography>
                    </Box>
                  </Stack>
                  {/* Hire Me Button */}
                  <Button
                    variant="outlined"
                    sx={{
                      mt: 2,
                      borderRadius: "20px",
                      fontWeight: "bold",
                      textTransform: "none",
                      width: "100px",
                      paddingLeft: "30px",
                    }}
                  >
                    Hire Me
                  </Button>
                </CardContent>
              </Card>
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
    </Box>
  );
}
