import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import {
  StyledDrill,
  StyledSeaCan,
  StyledDrillConsummable,
  StyledStorage,
  StyledDrillRig,
  StyledBulletdozerExcavator
} from "../Custom-Icons/CustomIcons";

const services = [
  {
    name: "Bit sharpening",
    icon: <StyledDrill />,
  },
  {
    name: "Drill Consumable Products",
    icon: <StyledDrillConsummable />,
  },
  {
    name: "Drill Hammer Rebuilds",
    icon: <StyledDrillRig />,
  },
  {
    name: "Sea Can Modifications",
    icon: <StyledSeaCan />,
  },
  {
    name: "Indoor / Outdoor Storage",
    icon: <StyledStorage />,
  },
  {
  name: "Wear Services", 
  icon: <StyledBulletdozerExcavator/>
  }
];

const Services = () => {
  return (
    <Box sx={{ mb: 10, mt: 3, padding: "0 1rem 0 1rem"}}>
      <Typography
        variant="h4"
        gutterBottom
        textAlign="center"
        style={{
          padding: "1rem",
          color: "#FFFAF0",
          fontWeight: "bold",
          marginTop: "2rem",
          backgroundColor: "#2E3091",
          width: "calc(100% + 2rem)",
          marginLeft: "-1rem", 
          marginRight: "-1rem", 
        }}
      >
        Our Services
      </Typography>
      <Grid
        container
        spacing={1}
        wrap="wrap"
        sx={{
          justifyContent: "center",
          "@media (max-width: 599px)": {
            justifyContent: "flex-start",
            padding: "1rem"
          },
        }}
      >
        {services.map((service, index) => (
          <Grid key={index} item xs={12} sm={6} md={4}>
            <Card
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                opacity: "0.99",
                justifyContent: "center",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                height: "300px", // Fixed height or responsive based on design needs
                width: "100%",
                maxWidth: "600", // Maximum width of the card
                margin: "auto", // Centers the card within the grid item
              }}
            >
              <CardContent
                sx={{
                  position: "relative",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  overflow: "auto",
                  justifyContent: "center",
                  padding: ".5rem",
                  textAlign: "center",
                }}
              >
                {service.icon}
                <Typography
                  variant="h6"
                  sx={{
                    color: "rgb(46, 48, 145)",
                    fontWeight: "bold",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    maxWidth: "100%",
                    marginTop: "1rem",
                  }}
                >
                  {service.name}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Services;

// display: "flex",
// flexDirection: "column",
// alignItems: "center",
// justifyContent: "center",
