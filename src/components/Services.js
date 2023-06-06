import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import {
  StyledBulletdozerExcavator,
  StyledDrill,
  StyledHydraulicEnergy,
  StyledPickupTruck,
  StyledLaserTurret,
  StyledWeld,
  StyledLineBoring,
  StyledMachinePressIndustry,
  StyledSeaCan,
  StyledDrillConsummable,
  StyledStorage,
  StyledDrillRig,
} from "../Custom-Icons/CustomIcons";

const services = [
  {
    name: "Bit sharpening",
    icon: <StyledDrill />,
  },
  {
    name: "Welding and Fabrication",
    icon: <StyledWeld />,
  },
  {
    name: "Bucket Rebuilds",
    icon: <StyledBulletdozerExcavator />,
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
    name: "Hydraulic Hoses & Fittings",
    icon: <StyledHydraulicEnergy />,
  },
  {
    name: "Sea Can Modifications",
    icon: <StyledSeaCan />,
  },
  {
    name: "Laser Alignment",
    icon: <StyledLaserTurret />,
  },
  {
    name: "Line Boring",
    icon: <StyledLineBoring />,
  },
  {
    name: "Mobile Welding & Mechanical Maintenance",
    icon: <StyledWeld />,
  },
  {
    name: "Precision Machining",
    icon: <StyledMachinePressIndustry />,
  },
  {
    name: "Truck Box Liners (Hardox)",
    icon: <StyledPickupTruck />,
  },
  {
    name: "Indoor / Outdoor Storage",
    icon: <StyledStorage />,
  },
];

const Services = () => {
  return (
    <Box sx={{ mb: 10, mt: 3 }}>
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
          width: "100%",
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
                opacity: "0.9",
                justifyContent: "center",
                boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.1)",
                height: "100%",
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
