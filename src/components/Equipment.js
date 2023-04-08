import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";
import styled from "styled-components";
import BitSharpener from "../assets/IMG_1511.jpg";
import LineBoringTool from "../assets/IMG_1510.jpg";
import ShearMachine from "../assets/IMG-6737.jpg";
import universalMillingMachine from "../assets/universal-milling-machine.png";
import hydraulicBendingRolls from "../assets/IMG-6771.jpg";
import lathe from "../assets/IMG-6755.jpg";
import turningCenter from "../assets/IMG-6773.jpg";
import radialDrill from "../assets/radial-drill.jpg";

const StyledContainer = styled.div`
  display: flex;
 justify-content: center;
 flex-direction: column;
 padding: 1rem;

`;
const StyledCard = styled(Card)`
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
opacity: 0.9;

`;

const StyledCardMedia = styled(CardMedia)`
  padding-top: 56.25%; // 16:9 aspect ratio

`;

const StyledGrid = styled(Grid)`
 && {
    /* margin: 20px 0px; */
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    /* padding: 1rem; */

  }

  @media (min-width: 960px) {
    && {
      spacing: 1;
    }
  }
`;

const cardData = [
  { title: "Bit Sharpener", image: BitSharpener, alt: "Image of Bit Sharpener" },
  { title: "Line Boring Tool", image: LineBoringTool, alt: "Image of Line Boring Tool" },
  { title: "Shear Machine", image: ShearMachine, alt: "Image of Shear Machine" },
  { title: "Universal Milling Machine", image: universalMillingMachine, alt: "Image of Universal Milling Machine" },
  { title: "Hydraulic Bending Rolls", image: hydraulicBendingRolls, alt: "Image of Hydraulic Bending Rolls" },
  { title: "Lathe", image: lathe, alt: "Image of Lathe" },
  { title: "Turning Center", image: turningCenter, alt: "Image of Turning Center" },
  { title: "Radial Drill", image: radialDrill, alt: "Image of Radial Drill" },
];

const Equipment = () => {
  return (
    <>

    <StyledContainer>
    {/* <Typography
    variant="h5"
    gutterBottom
    textAlign="center"
    style={{
      padding: "1rem 0rem 1rem 0rem",
      color: "#fff",
      fontWeight: "bold",
      // marginTop: "1rem",
      backgroundColor: "#2E3091",
      width: "100%"
    }}
  >
    Our Equipment
  </Typography> */}
      <StyledGrid container spacing={0.5}   >
        {cardData.map((card, index) => (
          <Grid key={index} item xs={12} sm={6} md={4} lg={3} >
            <StyledCard>
              <StyledCardMedia image={card.image} alt={card.alt}/>
              <CardContent>
                <Typography variant="h6" component="h2" textAlign="center" color="rgb(46, 48, 145)" fontWeight="bold">
                  {card.title}
                </Typography>
              </CardContent>
            </StyledCard>
          </Grid>
        ))}
      </StyledGrid>
    </StyledContainer>
    </>
  );
};

export default Equipment;

