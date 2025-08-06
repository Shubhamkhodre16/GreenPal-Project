// styles.js or inside your component file
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
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
});

export default useStyles;
