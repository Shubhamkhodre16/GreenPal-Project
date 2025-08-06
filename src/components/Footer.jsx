// src/components/Footer.jsx
import React from 'react';
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
    Button,
} from '@mui/material';
import { Facebook, Twitter, Pinterest, Instagram } from '@mui/icons-material';
import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';

const Footer = () => {
    return (
        <Box sx={{ bgcolor: '#00324E', color: 'white' }}>
            <Container maxWidth="lg">
                {/* GreenPal Logo */}
                <Box>
                    <Box
                        display="flex"
                        alignItems="center"
                        gap={2}
                        flexDirection={{ xs: 'column', sm: 'row' }}
                    >
                        <img src='/assests/images/greenpal.png' width={250} height={120} />
                    </Box>
                </Box>

                {/* Descriptions */}
                <Typography
                    sx={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
                        maxWidth: '600px',
                        mb: 2,
                        color: "#ddd9d9ff"
                    }}
                >
                    GreenPal is hands-down the easiest way to book a local lawn care company for yard maintenance services at an affordable price. If you're looking for same day lawn mowing or next day lawn cutting services you're at the right place.
                </Typography>

                <Typography
                    sx={{
                        fontFamily: 'Roboto, sans-serif',
                        fontSize: '0.875rem',
                        fontWeight: 400,
                        mb: 4,
                        maxWidth: '600px',
                        color: "#ddd9d9ff",
                        textAlign: { xs: "center", sm: "center", md: "left", lg: "left" },
                    }}
                >
                    GreenPal is the easiest way to book a lawn mowing services near me at the touch of a button without even having to make a phone call.
                </Typography>

                {/* Main Links */}
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                fontSize: '1rem',
                                mb: 1,
                            }}
                        >
                            GreenPal
                        </Typography>
                        {[
                            'Lawn Care Blog',
                            'Snow Removal Services',
                            'Frequently Asked Questions',
                            'Affordable Lawn Care',
                            'Lawn Care Near Me',
                            'Lawn Mowing Tips',
                        ].map((item) => (
                            <Link
                                href="#"
                                key={item}
                                color="inherit"
                                underline="hover"
                                display="block"
                                sx={{
                                    fontFamily: 'Roboto, sans-serif',
                                    fontSize: '0.75rem',
                                    lineHeight: "1.85",
                                    mb: 0.5,
                                    color: "#ddd9d9ff"
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={6} md={3} sx={{ mt: 4 }}>
                        {/* <Typography
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                fontSize: '1rem',
                                mb: 1,
                            }}
                        >
                            Services
                        </Typography> */}
                        {[
                            'Landscaping',
                            'Yard Clean Up Tips',
                            'Order Lawn Care',
                            'GreenPal Reviews',
                            'Contact Us',
                            'About Us',
                        ].map((item) => (
                            <Link
                                href="#"
                                key={item}
                                color="inherit"
                                underline="hover"
                                display="block"
                                sx={{
                                    fontFamily: 'Roboto, sans-serif',
                                    fontSize: '0.75rem',
                                    mb: 0.5,
                                    color: "#ddd9d9ff",
                                    lineHeight: "1.85"
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                fontSize: '1rem',
                                mb: 1,
                            }}
                        >
                            Providers
                        </Typography>
                        {[
                            'Apply to be a GreenPal',
                            'Business Guides',
                            'Vendor Free Lawn',
                        ].map((item) => (
                            <Link
                                href="#"
                                key={item}
                                color="inherit"
                                underline="hover"
                                display="block"
                                sx={{
                                    fontFamily: 'Roboto, sans-serif',
                                    fontSize: '0.75rem',
                                    mb: 0.5,
                                    lineHeight: "1.85",
                                    color: "#ddd9d9ff"
                                }}
                            >
                                {item}
                            </Link>
                        ))}
                    </Grid>

                    <Grid item xs={12} sm={6} md={3}>
                        <Typography
                            sx={{
                                fontFamily: 'Montserrat, sans-serif',
                                fontWeight: 700,
                                fontSize: '1rem',
                                mb: 1,
                            }}
                        >
                            Connect with us
                        </Typography>
                        <Box sx={{ display: "flex", gap: 0.75 }}>
                            <IconButton href="#" sx={{ color: "#ddd9d9ff", border: "1px solid #ddd9d9ff", borderRadius: "50%" }}><Facebook /></IconButton>
                            <IconButton href="#" sx={{ color: "#ddd9d9ff", border: "1px solid #ddd9d9ff", borderRadius: "50%" }}><Twitter /></IconButton>
                            <IconButton href="#" sx={{ color: "#ddd9d9ff", border: "1px solid #ddd9d9ff", borderRadius: "50%" }}><Pinterest /></IconButton>
                            <IconButton href="#" sx={{ color: "#ddd9d9ff", border: "1px solid #ddd9d9ff", borderRadius: "50%" }}><Instagram /></IconButton>
                        </Box>
                    </Grid>
                </Grid>

                {/* App Buttons */}
                <Box mt={5} display="flex" flexDirection={{ xs: 'column', sm: 'row' }} gap={2}>
                    <Typography sx={{
                        fontFamily: 'Montserrat, sans-serif',
                        fontWeight: 700,
                        fontSize: '1rem',
                        textAlign: "center",

                    }}>Get the remote control for your lawn</Typography>
                    <Box sx={{ display: "flex", justifyContent: "center", }} gap={2}>
                        <Button
                            variant="outlined"
                            startIcon={<AndroidIcon />}
                            sx={{
                                color: '#fff',
                                '&:hover': { bgcolor: '#000000ff', color: "#fff" },
                                fontFamily: 'Roboto, sans-serif',
                                fontSize: '0.875rem',
                                textTransform: "capitalize",
                                border: "1px solid #fff",
                                borderRadius: "30px"
                            }}
                        >
                            Play Store
                        </Button>
                        <Button
                            variant="outlined"
                            startIcon={<AppleIcon />}
                            sx={{
                                color: '#fff',
                                '&:hover': { bgcolor: '#000000ff', color: "#fff" },
                                fontFamily: 'Roboto, sans-serif',
                                fontSize: '0.875rem',
                                textTransform: "capitalize",
                                border: "1px solid #fff",
                                borderRadius: "30px"
                            }}
                        >
                            App Store
                        </Button>
                    </Box>
                </Box>

                {/* Satisfaction Section */}
                <Box

                    display="flex"
                    alignItems="center"
                    gap={2}
                    flexDirection={{ xs: 'column', sm: 'row' }}
                >
                    <img src='/assests/images/footer.png' width={300} height={120} />
                </Box>

                {/* City List */}
                <Box>
                    <Typography
                        sx={{
                            fontFamily: 'Roboto, sans-serif',
                            fontSize: '0.75rem',
                            fontWeight: 300,
                            color: "#ddd9d9ff",
                            lineHeight: "1.80"
                        }}
                    >
                        Tucson, AZ San Diego, CA Albuquerque, NM El Paso, TX Los Angeles, CA Bakersfield, CA Salt Lake City, UT Lake Tahoe, NV Denver, CO Lubbock, TX Midland, TX Amarillo, TX Reno, NV San Jose, CA Sacramento, CA Abilene, TX Boise, ID Spring, TX Yukon, OK Oklahoma City, OK Moore, OK Norman, OK Edmond, OK Alamo Heights, TX White Settlement, TX San Antonio, TX Midwest City, OK Benbrook, TX Saginaw, TX Laredo, TX Killeen, TX Fort Worth, TX Converse, TX Schertz, TX Haltom City, TX Cibolo, TX Roanoke, TX Keller, TX North Richland Hills, TX New, NV San Jose, CA Sacramento, CA Abilene, TX Boise, ID Spring, TX Yukon, OK Oklahoma City, OK Moore, OK
                        Norman, OK Edmond, OK Alamo Heights, TX White Settlement, TX San Antonio, TX Midwest City, OK Benbrook,
                        TX Saginaw, TX Laredo, TX Killeen, TX Fort Worth, TX Converse, TX Schertz, TX Haltom City, TX Cibolo, TX
                        Roanoke, TX Keller, TX North Richland Hills, TX New Braunfels, TX Denton, TX Hurst, TX Bedford, TX Flower
                        Mound, TX Waco, TX Mansfield, TX Grapevine, TX Arlington, TX Euless, TX Austin, TX Lewisville, TX Grand Prairie, TX
                        Seguin, TX Windemere, TX Irving, TX The Colony, TX Frisco, TX De Soto, TX Dallas, TX Richardson, TX Lancaster, TX
                        Plano, TX Mc Kinney, TX Garland, TX Mesquite, TX Wylie, TX Burleson, TX Tulsa, OK Corpus Christi, TX Mc Allen, TX
                        Katy, TX Cypress, TX Cinco Ranch, TX Tomball, TX Rosenberg, TX Conroe, TX The Woodlands, TX Mission Bend, TX
                        Portland, OR Sugar Land, TX Stafford, TX Missouri City, TX Brownsville, TX Aldine, TX Bellaire, TX Houston, TX Porter,
                        TX Humble, TX Belleville, MO Atascocita, TX Spokane, WA Pearland, TX Pasadena, TX Omaha, NE Friendswood, TX
                        League City, TX Baytown, TX Kansas City, MO
                    </Typography>
                </Box>
            </Container>

            <Box sx={{ backgroundColor: "#01273dff", padding: "10px", marginTop: "20px" }}>
                <Box sx={{ display: 'flex', justifyContent: 'center', gap: '1rem', fontSize: '12px', fontFamily: 'Inter, sans-serif', }}>
                    <a href="/privacy-policy" style={{ color: 'white', textDecoration: 'underline' }}>Privacy Policy</a>
                    <a href="/terms" style={{ color: 'white', textDecoration: 'underline' }}>Terms & Conditions</a>
                </Box>

                <Typography style={{ textAlign: 'center', marginTop: '1rem', fontSize: '12px', fontFamily: 'Inter, sans-serif' }}>
                    Copyright © 2025 GreenPal Co. All rights reserved.
                </Typography>
            </Box>

        </Box>

    );
};

export default Footer;
