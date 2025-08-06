import React from 'react';
import { Box, Typography, Button ,IconButton} from '@mui/material';
import RedoIcon from '@mui/icons-material/Redo';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
export default function LawnService() {
  return (
    <Box
      sx={{
        background: 'linear-gradient(180deg, #004E64 0%, #034d5aff 100%)',
        color: 'white',
        fontFamily: 'Inter, sans-serif',
        p: { xs: 4, sm: 4 },
        maxWidth: { xs: '100%', sm: 400,md:900,lg:900},
        textAlign: 'left',
        mx: 'auto',
      }}
    >
      <Typography
        variant="h5"
        sx={{
          fontWeight: 700,
          lineHeight: 1.3,
          textAlign:"left",
          mb: 2,
          fontSize: { xs: '32px', sm: '32px' },
        }}
      >
        Tired of unreliable 
        lawn services? So 
        are we... <br />
        <Box component="span" sx={{ fontSize: { xs: '32px', sm: '32px' } }}>
          See how it works
        </Box>
      </Typography>
      <Typography
        sx={{
          fontSize: { xs: '20px', sm: '20px' },
          lineHeight: 1.50,
          color:"#f3efefff",
          mb: 2,
          fontWeight: 400,
        }}
      >
        Save Time, Save Money, Book a great local landscaping service in
        Indianapolis now with GreenPal.
      </Typography>
      <Typography
        sx={{
          color: '#FFA000',
          fontWeight: 500,
          fontSize: { xs: '20px', sm: '20px' },
          lineHeight:"0.50",
          mb: 1,
        }}
      >
        Click here to watch how <br />
        GreenPal works.
        <Box
          component="span"
        >
          <IconButton sx={{ color: "#FFA000",transform: 'rotate(60deg)',mt:2 }}><RedoIcon /></IconButton>
        </Box>
      </Typography>
      <Box
        sx={{
          position: 'relative',
          width: '100%',
          // borderRadius: 2,
          overflow: 'hidden',
          mb: 3,
        }}
      >
        <Box
          component="img"
          src="/assests/images/tired.png"
          alt="GreenPal Video Preview"
          sx={{
            width: '100%',
            display: 'block',
          }}
        />
        <Box
          sx={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            backgroundColor: 'white',
            borderRadius: '50%',
            p: '10px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 0,
              height: 0,
              borderTop: '10px solid transparent',
              borderBottom: '10px solid transparent',
              borderLeft: '16px solid #FFA000',
            }}
          />
        </Box>
      </Box>
      <Button
        sx={{
          background: 'linear-gradient(90deg, #FFA000, #FF6F00)',
          borderRadius: '30px',
          display:"flex",
          py: 1.5,
          mx:"auto",
          fontSize: '18px',
          width:"300px",
          fontWeight: 700,
          color: 'white',
          textTransform: 'none',
          '&:hover': {
            background: 'linear-gradient(90deg, #FFB300, #FF8F00)',
          },
        }}
      >
        See Prices <IconButton sx={{ color: "#fff",}}><NavigateNextIcon  sx={{fontSize:"24px",fontWeight:"bold"}}/></IconButton>
      </Button>
    </Box>
  );
}
