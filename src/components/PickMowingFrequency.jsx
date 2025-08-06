// PickMowingFrequency.js

import React from 'react';
import {
  Box,
  Grid,
  Typography,
  Paper,
  Table,
  TableBody,
  TableRow,
  TableCell,
  CheckCircle,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/CheckCircle';
import GrassIcon from '@mui/icons-material/Grass';

const PickMowingFrequency = () => {
  const features = [
    'Mowing',
    'String trimming',
    'Clearing grass clipping from hard surfaces',
    'Job updates & location tracking',
    'Picture receipt',
    'Outstanding customer service',
    'Maintaining edge along driveway & sidewalks',
    'Keep the same provider each service',
    'Easy skip & pause feature',
    'Locked in pricing all season',
  ];

  const oneTimeFeatures = [
    true, true, true, true, true, true, false, false, false, false
  ];

  const recurringFeatures = [
    true, true, true, true, true, true, true, true, true, true
  ];

  const renderCheck = (included) => (
    included ? <CheckIcon color="success" fontSize="small" /> : null
  );

  return (
    <Box sx={{ p: { xs: 2, sm: 4 }, maxWidth: 700, mx: "auto" }}>
      <Typography variant="h5" fontWeight={700} gutterBottom textAlign="center">
        Pick Your Mowing Frequency
      </Typography>

      <Typography variant="body1" textAlign="center" mb={3}>
        We provide both one-time and ongoing lawn mowing services.
        Choose from weekly, bi-weekly, monthly, or just a single mow.
      </Typography>

      <Grid container spacing={2} mb={4}>
        <Grid item xs={12} sm={6}>
          <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', bgcolor: "#FFF8E1" }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                bgcolor: "#FFA726",
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1,
                color: 'white',
                fontWeight: 'bold'
              }}
            >
              1x
            </Box>
            <Typography variant="subtitle1" fontWeight={600}>One-Time Cuts</Typography>
            <Typography variant="body2">Great for anyone looking to take a break from mowing their lawn.</Typography>
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Paper variant="outlined" sx={{ p: 2, textAlign: 'center', bgcolor: "#E8F5E9" }}>
            <Box
              sx={{
                width: 40,
                height: 40,
                bgcolor: "#66BB6A",
                borderRadius: '50%',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                mb: 1,
                color: 'white'
              }}
            >
              <GrassIcon fontSize="small" />
            </Box>
            <Typography variant="subtitle1" fontWeight={600}>Recurring Service</Typography>
            <Typography variant="body2">Perfect for those in need of weekly, bi-weekly or monthly cuts.</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Table size="small">
        <TableBody>
          {features.map((feature, index) => (
            <TableRow key={feature}>
              <TableCell>{feature}</TableCell>
              <TableCell align="center">
                {renderCheck(oneTimeFeatures[index])}
              </TableCell>
              <TableCell align="center">
                {renderCheck(recurringFeatures[index])}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <Box mt={3} textAlign="center">
        <Typography variant="body2">Weekly customers save</Typography>
        <Typography variant="h6" color="orange" fontWeight={700}>
          up to 30%
        </Typography>
      </Box>
    </Box>
  );
};

export default PickMowingFrequency;
