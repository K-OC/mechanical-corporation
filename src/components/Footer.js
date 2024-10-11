import React from "react";
import { Box, Container, Typography, Link, Divider, Grid } from "@mui/material";
import { Facebook, Email } from "@mui/icons-material"; // Added Email icon import

const Footer = () => {
  return (
    <Box component="footer" sx={{ padding: "2rem 0", mt: "auto" }}>
      <Container maxWidth="lg">
        <Divider sx={{ my: 3 }} />
        
        <Grid 
          container 
          spacing={4} 
          justifyContent="space-around"
          sx={{
            flexDirection: { xs: 'column', sm: 'row' }, // Stack vertically on xs screens, row on sm and up
            alignItems: 'center',
            textAlign: { xs: 'center', sm: 'left' } // Center-align on small screens for better readability
          }}
        >
          {/* Resources Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#2E3091", fontWeight: "bold" }}
            >
              Resources
            </Typography>
            <Link
              href="/about-us"
              variant="body2"
              display="block"
              sx={{
                color: "#2E3091",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              About Us
            </Link>
            <Link
              href="/equipment"
              variant="body2"
              display="block"
              sx={{
                color: "#2E3091",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Equipment
            </Link>
            <Link
              href="/services"
              variant="body2"
              display="block"
              sx={{
                color: "#2E3091",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Services
            </Link>
            <Link
              href="/contact"
              variant="body2"
              display="block"
              sx={{
                color: "#2E3091",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              Contact
            </Link>
          </Grid>

          {/* Contact Us Section */}
          <Grid item xs={12} sm={6} md={4}>
            <Typography
              variant="h6"
              gutterBottom
              sx={{ color: "#2E3091", fontWeight: "bold" }}
            >
              Contact Us
            </Typography>
            <Link
              href="mailto:info@beothukmechanical.com"
              display="flex"
              alignItems="center"
              sx={{
                color: "#2E3091",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <Email sx={{ mr: 1 }} /> info@beothukmechanical.com
            </Link>
            <Link
              href="https://www.facebook.com/profile.php?id=100089649765877"
              display="flex"
              alignItems="center"
              target="_blank"
              rel="noopener"
              sx={{
                color: "#2E3091",
                textDecoration: "none",
                "&:hover": { textDecoration: "underline" },
              }}
            >
              <Facebook sx={{ mr: 1 }} /> Facebook
            </Link>
          </Grid>
        </Grid>
        
        <Divider sx={{ my: 3 }} />
        
        <Box mt={2}>
          <Typography variant="body2" color="textSecondary" align="center">
            © {new Date().getFullYear()} Beothuk Mechanical Corporation. All
            rights reserved.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
