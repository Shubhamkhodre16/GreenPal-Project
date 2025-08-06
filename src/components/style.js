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
});

export default useStyles;
