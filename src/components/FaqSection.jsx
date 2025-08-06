import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    Typography,
    Button,
    Box,
    Container,
    useTheme,
    useMediaQuery,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
    {
        question: "When is the best time of year to get landscaping projects done?",
        answer:
            "It's generally recommended to maintain a grass height of about 2.5 to 3 inches (6–8 cm). Different grass types may have specific height recommendations.",
    },
    {
        question: "What is the average cost for landscaping on the front of the house?",
        answer:
            "The cost varies depending on the project scope, but typically ranges from $500 to $5,000 depending on materials, size, and design complexity.",
    },
    {
        question: "What are some essential lawn mower maintenance tips?",
        answer:
            "Clean the deck, sharpen the blades, check the spark plug, and change the oil regularly to ensure optimal performance.",
    },
    {
        question: "Are there any safety precautions to follow while landscaping?",
        answer:
            "Always wear protective gear, stay hydrated, handle equipment responsibly, and be mindful of surroundings like pets and children.",
    },
    {
        question: "How long does a typical landscaping project take?",
        answer:
            "Smaller projects can take a few hours to a day, while larger projects may take several days or even weeks depending on complexity.",
    },
    {
        question: "Do I need to be home during the landscaping service?",
        answer:
            "It’s not necessary, but it’s helpful to provide clear instructions or mark off any specific areas to be worked on if you're not present.",
    },
];



const FaqSection = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Container maxWidth="sm" sx={{ my: { xs: 6, sm: 8 }, px: { xs: 2, sm: 0 } }}>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    textAlign: "center",
                    px: 2, // Padding on small screens
                    maxWidth: 400, // Optional: constrain width for better readability
                    mx: "auto", // Center horizontally
                    mt: 4, // Margin top
                    mb: 4,
                }}
            >
                <Typography
                    variant="h5"
                    fontWeight={700}
                    sx={{
                        fontSize: { xs: "28px", sm: "24px" },
                        mb: 1,
                        color: "#222",
                    }}
                >
                    How does <span style={{ color: "#222" }}>GreenPal Work?</span>
                </Typography>

                <Typography
                    sx={{
                        fontSize: { xs: "13px", sm: "14px" },
                        color: "#666",
                        lineHeight: 1.6,
                        mb: 4,
                    }}
                >
                    Common questions about how GreenPal can help you{" "}
                    <span
                        style={{
                            color: "#2e7d32",
                            fontWeight: 600,
                            textDecoration: "underline",
                        }}
                    >
                        hire the best
                    </span>{" "}
                    lawn care service in Indianapolis
                </Typography>
            </Box>


            {faqs.map((faq, index) => (
                <Accordion
                    key={index}
                    defaultExpanded={index === 1}
                    sx={{
                        mb: 1,
                        boxShadow: "none",
                        borderBottom: "1px solid #e0e0e0",
                        "&:before": { display: "none" },
                    }}
                >
                    <AccordionSummary expandIcon={<ExpandMoreIcon sx={{ color: "#555" }} />}>
                        <Typography
                            sx={{
                                fontSize: { xs: "14px", sm: "15px" },
                                fontWeight: 600,
                                color: index >= 4 ? "#aaa" : "#333",
                                width: "68%"
                            }}
                        >
                            {faq.question}
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography
                            sx={{
                                fontSize: { xs: "13px", sm: "14px" },
                                color: "#555",
                                lineHeight: 1.6,
                            }}
                        >
                            {faq.answer}
                        </Typography>
                    </AccordionDetails>
                </Accordion>
            ))}

            {/* Shadow fade + Button */}
            <Box
                position="relative"
                display="flex"
                justifyContent="center"
                alignItems="center"
                sx={{ height: 80 }}
            >
                {/* Shadow text overlay */}
                <Box
                    sx={{
                        position: "absolute",
                        top: -60,
                        left: 0,
                        right: 0,
                        height: 40,
                        background: "linear-gradient(to bottom, transparent, #fff)",
                    }}
                />

                <Button
                    variant="outlined"
                    fullWidth={isMobile}
                    sx={{
                        px: 4,
                        py: 1.5,
                        borderRadius: "999px",
                        fontWeight: 600,
                        fontSize: "14px",
                        color: "#ff7a00",
                        borderColor: "#ff7a00",
                        textTransform: "none",
                        maxWidth: { xs: "100%", sm: "300px" },
                        zIndex: 1,
                        backgroundColor: "#fff",
                        "&:hover": {
                            backgroundColor: "#fff4ea",
                            borderColor: "#ff7a00",
                        },
                    }}
                >
                    See all FAQs &nbsp; &gt;
                </Button>
            </Box>
        </Container>
    );
};

export default FaqSection;
