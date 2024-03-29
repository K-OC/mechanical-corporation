import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import { StyledGear } from "../Custom-Icons/CustomIcons";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const Wrapper = styled("div")({
  width: "100%",
  maxHeight: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  marginTop: "2rem",
  opacity: "0.9",
  justifyContent: "start",
});

const CardCtn = styled("div")({
  display: "flex",
  flexDirection: "column",
  overflowY: "hidden",
  width: "70%",
  gap: "0.2rem",
  "@media (max-width: 700px)": {
    // minHeight: "70rem",
    scrollBehavior: "smooth",
    width: "100%",
  },
});

const ContentCard = styled(Accordion)({
  backgroundColor: "rgb(46, 48, 145)",
  width: "100%",
  borderBottom: "1px solid rgb(255, 242, 0)",
  "&:last-child": {
    borderBottom: "none",
  },
});

const ContentTitleCtn = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "left",
});

const ContentCardTitle = styled(Typography)({
  padding: "0.3rem",
  textAlign: "center",
  fontWeight: "bold",
  color: "rgb(255, 242, 0)",
});

const ContentCardParaCtn = styled(AccordionDetails)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "start",
  alignItems: "center",
  background:
    "linear-gradient(to bottom, rgb(46, 48, 145), rgb(80, 83, 187, 0.5));",

  ul: {
    color: "yellow",
    width: "80%",
  },
  "&.Mui-expanded": {
    margin: "12px 0",
  },
}));

const ContentCardPara = styled(Typography)({
  color: "rgb(255, 242, 0)",
  textAlign: "left",
  fontWeight: "bold",
  maxWidth: "80%",
});

const AboutUs = () => {
  const [expanded, setExpanded] = useState("");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : "");
  };

  return (
    <Wrapper>
      <Typography
        variant="h4"
        style={{
          width: "100%",
          textAlign: "center",
          padding: "1rem",
          color: "#FFFAF0",
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundColor: "#2E3091",
        }}
      >
        About Us{" "}
      </Typography>
      <CardCtn>
        <ContentCard
          expanded={expanded === "mission"}
          onChange={handleChange("mission")}
        >
          <AccordionSummary expandIcon={<StyledGear fill="rgb(255, 242, 0)" />}>
            <ContentTitleCtn>
              <ContentCardTitle>Mission</ContentCardTitle>
            </ContentTitleCtn>
          </AccordionSummary>
          <ContentCardParaCtn>
            <ContentCardPara>
              Beothuk Mechanical Corporation [BMC] is committed to providing our
              clients with professional quality machining and welding services
              customized to their needs on-site and in the field. All work shall
              be performed at the highest standard, promoting sage and
              cost-effective work practices.
            </ContentCardPara>
            <ContentCardPara>
              BMC is dedicated to bringing growth and innovation to the local
              economy in which we operate, and adapting to the changing needs of
              our team and clients.
            </ContentCardPara>
            <ContentCardPara>
              BMC is an equal opportunity corporation that encourages and
              actively seeks to build a diverse and invclusive work environment.
            </ContentCardPara>
          </ContentCardParaCtn>
        </ContentCard>
        <ContentCard
          expanded={expanded === "values"}
          onChange={handleChange("values")}
        >
          <AccordionSummary expandIcon={<StyledGear fill="rgb(255, 242, 0)" />}>
            <ContentTitleCtn>
              <ContentCardTitle>Values</ContentCardTitle>
            </ContentTitleCtn>
          </AccordionSummary>
          <ContentCardParaCtn>
            <List>
              <ListItem>
                <ListItemText
                  primary="Integrity"
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Commitment to Excellence"
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Safety"
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Innovation"
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Teamwork"
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Community"
                  primaryTypographyProps={{ fontWeight: "bold" }}
                />
              </ListItem>
            </List>
          </ContentCardParaCtn>
        </ContentCard>
        <ContentCard
          expanded={expanded === "vision"}
          onChange={handleChange("vision")}
        >
          <AccordionSummary expandIcon={<StyledGear fill="rgb(255, 242, 0)" />}>
            <ContentTitleCtn>
              <ContentCardTitle>Vision</ContentCardTitle>
            </ContentTitleCtn>
          </AccordionSummary>
          <ContentCardParaCtn>
            <ContentCardPara>
              To be the leader of the machining, welding, and fabrication
              contracting and service industries through the utilization of
              safety, training and specialized technology.
            </ContentCardPara>
          </ContentCardParaCtn>
        </ContentCard>
      </CardCtn>
    </Wrapper>
  );
};
export default AboutUs;
