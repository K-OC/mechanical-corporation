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
        style={{
          width: "100%",
          textAlign: "center",
          padding: "1rem",
          color: "#fff",
          fontWeight: "bold",
          marginBottom: "1rem",
          backgroundColor: "#2E3091",
        }}
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
              <Typography variant="body2" style={{ whiteSpace: "nowrap", fontStyle:"italic" }}>Mailing Address</Typography>
              <Typography variant="body2" style={{ whiteSpace: "nowrap" }}>
                P.O Box 468
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
              <Typography variant="body2" style={{ whiteSpace: "nowrap", fontStyle:"italic" }}>Mailing Address</Typography>
              <Typography variant="body2" style={{ whiteSpace: "nowrap" }}>
                P.O Box 468
              </Typography>
              <Typography variant="body2" style={{ whiteSpace: "nowrap" }}>
                Buchans, NL A0H 1GO
              </Typography>
              <Link
                href="mailto:r_brace@hotmail.com"
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
                r_brace@hotmail.com
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
      <iframe
        title="googleMap"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.7085498947663!2d-56.85765708390444!3d48.82562207928426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b7a0c7ce7502bb9%3A0x184df4a267db408d!2s2%20Main%20St%2C%20Buchans%2C%20NL%20A0H%201G0!5e0!3m2!1sen!2sca!4v1681177917259!5m2!1sen!2sca"
        width="600"
        height="450"
        style={{border:"0", maxWidth:"100%", width:"100%", padding: ".5rem", opacity:"0.99"}}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Contacts;
