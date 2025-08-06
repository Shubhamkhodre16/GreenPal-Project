// styles.js or inside your component file
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  // Home Page Css
  price_chip_div: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    zIndex: 1,
    fontWeight: 600,
    backgroundColor: "#FF9900",
    position: "absolute",
    color: "white",
    height: "40px",
    right: "13px",
    lineHeight: "15px",
    padding: "1%",
    clipPath:
      "polygon(0 0, 100% 0, 100% 80%, 75% 100%, 50% 80%, 25% 100%, 0 80%)",
  },
  review_text: {
    whiteSpace: "nowrap !important",
    color: "#60545c !important",
    fontSize: "11px !important",
  },
  seeprice_btn: {
    borderRadius: "20px !important",
    textTransform: "none !important",
    color: "black !important",
    border: "1px solid black !important",
    fontWeight: "600 !important",
  },
  pricecut_text: {
    fontSize: "13px !important",
    lineHeight: "10px !important",
  },
  name_text: {
    fontSize: "14px !important",
    fontWeight: "600 !important",
  },
  rating_div: {
    display: "flex !important",
    alignItems: "center !important",
  },
  available_txt: {
    lineHeight: "2px !important",
    fontSize: "11px !important",
  },
  slider_title: {
    color: "white !important",
    textAlign: "center !important",
    fontWeight: "600 !important",
    textTransform: "none !important",
  },
  container: {
    minHeight: "100vh !important",
    backgroundImage: `url('/assests/images/grass.png')`,
    backgroundSize: "cover !important",
    backgroundPosition: "center !important",
    p: 2,
    color: "white",
  },
  main_logo: {
    width: 120,
    height: 90,
  },
  headerBox_main: {
    textAlign: "center !important",
  },
  headerBox: {
    display: "flex !important",
    justifyContent: "space-between !important",
  },
  see_priceBtn: {
    position: "absolute !important",
    right: 16,
    top: 22,
    backgroundColor: "#FF7F00 !important",
    fontWeight: "bold !important",
    textTransform: "capitalize !important",
    padding: "10px 20px !important",
    borderRadius: "50px !important",
    "&:hover": { backgroundColor: "#FF8C00 !important" },
  },
  main_title: {
    fontWeight: "600 !important",
    color: "white !important",
  },
  main_subtitle: {
    color: "#eee !important",
    fontWeight: "400 !important",
    fontSize: "20px !important",
  },
  main_subtitle2: {
    fontSize: "16px !important",
    fontWeight: "400 !important",
  },
  textfield_box: {
    display: "flex !important",
    flexDirection: "column !important",
    justifyContent: "center !important",
    alignItems: "center !important",
  },
  price_btn: {
    background: "linear-gradient(to bottom, #f5a835ff, #FF7F00) !important",
    borderRadius: "25px !important",
    fontWeight: "bold !important",
    // py: 1.5,
    padding: "16px 20px !important",
    textTransform: "capitalize !important",
  },
  instant_price_btn: {
    background: "#65ba67 !important",
    borderRadius: "25px !important",
    fontWeight: "bold !important",
    // py: 1.5,
    padding: "15px 20px !important",
    textTransform: "capitalize !important",
  },
  // Home Page Css
   // ================= ReviewSection Styles =================
  reviewSectionWrapper: {
    padding: "32px 32px",
    maxWidth: 600,
    margin: "0 auto",
  },
  heading: {
    fontWeight: "bold !important",
    fontSize: "26px !important",
    textAlign: "center !important",
    marginBottom: "8px !important",
    lineHeight: 1.4,
  },
  ratingSummary: {
    display: "flex",
    flexDirection: "row",     // horizontal layout
    alignItems: "center",     // vertically center-align
    justifyContent: "center", // horizontally center them as a group
    marginBottom: "16px",
    gap: "8px",               // space between rating and text
  },

  searchInput: {
    backgroundColor: "#fff !important",
    marginBottom: "16px !important",
    "& .MuiOutlinedInput-root": {
      borderRadius: "16px !important",
    },
  },

  sortSelect: {
    borderRadius: "16px !important",
    backgroundColor: "#fff !important",
    fontSize: "14px !important",
    marginBottom: "16px !important",
    "& .MuiSelect-icon": {
      color: "#444 !important",  // changed to black
      fontSize: "22px !important",
      right: "12px",
    },
  },

  tagList: {
    display: "flex",
    flexWrap: "wrap",
    gap: "8px",
    marginBottom: "16px",
    marginTop: "8px",
  },
  mention: {
    fontSize: "14px",
    marginBottom: "8px",
    textAlign: "left",
    color: "#444"
  },
  tagItem: {
    border: "1px solid #ccc",
    borderRadius: "20px",
    padding: "4px 12px",
    fontSize: "13px",
    color: "#18b6d3",
    backgroundColor: "#f9f9f9",
  },
  reviewBox: {
    borderBottom: "1px solid #eee",
    padding: "16px 0",
    textAlign: "left",
  },
  ratingRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  locationRow: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    marginTop: "8px",
    marginBottom: "4px",
  },
  locationText: {
    fontSize: "13px",
    color: "#444",
  },
  tagLabel: {
    fontSize: "12px",
    color: "#666",
    backgroundColor: "#f0f3f6",
    padding: "2px 6px",
    display: "inline-block",
    borderRadius: "4px",
    marginBottom: "8px",
  },
  reviewText: {
    fontSize: "14px",
    color: "#444",
  },
  reviewerRow: {
    marginTop: "16px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reviewerInfo: {
    display: "flex",
    alignItems: "center",
    gap: "8px",
  },
  reviewerName: {
    fontSize: "13px",
    fontWeight: 600,
  },
  reviewDate: {
    fontSize: "12px",
    color: "#999",
  },
  lastReviewBox: {
    position: "relative",
    overflow: "hidden",
  },
  blurOverlay: {
    pointerEvents: "none",
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    height: "42%",
    background:
      "linear-gradient(to bottom, rgba(255,255,255,0) 0%, rgba(255,255,255,0.8) 70%, rgba(255,255,255,1) 100%)",
    backdropFilter: "blur(1px)",
    borderBottom: "1px solid #eee",
    borderRadius: "0 0 8px 8px",
  },
  readMoreBtn: {
    borderRadius: "999px !important",
    textTransform: "none !important",
    padding: "8px 32px !important",
    fontWeight: "700 !important",
    borderColor: "#444 !important",
    color: "#444 !important",
    fontSize: "14px !important",
    "&:hover": {
      backgroundColor: "#fff8f1 !important",
      borderColor: "#ff9100 !important",
    },
  },

});

export default useStyles;

