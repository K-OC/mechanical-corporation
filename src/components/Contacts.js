import React from "react";
import { Card, CardContent, Typography, Link } from "@mui/material";
import { StyledEmail, StyledPhone } from "../Custom-Icons/CustomIcons";
import styled from "styled-components";

const StyledCard = styled(Card)``;

const CardCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2rem;
  width: 100%;
  flex-direction: row; // default value
  // media query for screens with max-width of 768px
  @media (max-width: 768px) {
    flex-direction: column;
  }
  ${StyledCard} {
    width: 50%;
    @media (max-width: 768px) {
      width: 100%;
    }
  }
`;
const Contacts = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "2rem",
      }}
    >
      <Typography
        variant="h4"
        style={{width: "100%", textAlign:'center',  padding: '1rem', color: "#fff", fontWeight: "bold", marginBottom: "1rem", backgroundColor: "#2E3091" }}
      >
        Get in touch
      </Typography>
      <CardCtn>
        <StyledCard>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              padding: "1rem",
            }}
          >
            <div style={{ flexGrow: 1, paddingRight: "1rem" }}>
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                John (Jack) Glavine
              </Typography>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                BMC President
              </Typography>
              <Typography variant="body2" style={{ whiteSpace: "nowrap" }}>
                P.O Box 468, 42 East Street,
              </Typography>
              <Typography variant="body2" style={{ whiteSpace: "nowrap" }}>
                Buchans, NL A0H 1GO
              </Typography>
              <Link
                href="mailto:jpgalvine@gmail.com"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#2E3091",
                  marginTop: "1rem",
                }}
              >
                <StyledEmail style={{ marginRight: "0.5rem" }} />
                jpgalvine@gmail.com
              </Link>
              <Link
                href="tel:709-222-4394"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#2E3091",
                  marginTop: "0.5rem",
                }}
              >
                <StyledPhone style={{ marginRight: "0.5rem" }} />
                709-222-4394
              </Link>
            </div>
          </CardContent>
        </StyledCard>
        <StyledCard>
          <CardContent
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "1rem",
              padding: "1rem",
            }}
          >
            <div style={{ flexGrow: 1, paddingRight: "1rem" }}>
              <Typography
                variant="h5"
                style={{ fontWeight: "bold", marginBottom: "0.5rem" }}
              >
                Rick Brace
              </Typography>
              <Typography variant="body1" style={{ fontWeight: "bold" }}>
                BMC General Manager
              </Typography>
              <Typography variant="body2" style={{ whiteSpace: "nowrap" }}>
                P.O Box 468, 42 East Street,
              </Typography>
              <Typography variant="body2" style={{ whiteSpace: "nowrap" }}>
                Buchans, NL A0H 1GO
              </Typography>
              <Link
                href="mailto:rbrace@buchansmining.co"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#2E3091",
                  marginTop: "1rem",
                }}
              >
                <StyledEmail style={{ marginRight: "0.5rem" }} />
                rbrace@buchansmining.co
              </Link>
              <Link
                href="tel:709-672-3080"
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontWeight: "bold",
                  textDecoration: "none",
                  color: "#2E3091",
                  marginTop: "0.5rem",
                }}
              >
                <StyledPhone style={{ marginRight: "0.5rem" }} />
                709-572-0308
              </Link>
            </div>
          </CardContent>
        </StyledCard>
      </CardCtn>
    </div>
  );
};

export default Contacts;
