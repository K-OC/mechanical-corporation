import React from "react";
import { Card, CardContent, Typography, Button } from "@mui/material";
import { Facebook, Email } from "@mui/icons-material"; // Added Email icon
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  margin-top: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const SectionTitle = styled(Typography)`
  font-size: 2rem;
  font-weight: bold;
  color: #2E3091;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const InfoCard = styled(Card)`
  width: 100%;
  max-width: 400px;
  margin: 0.5rem;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
`;

const CardContentWrapper = styled(CardContent)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
`;

const MapContainer = styled.div`
  flex: 2;
  max-width: 650px;
  padding: 0.5rem;
  display: flex;
  justify-content: center;

  iframe {
    border: 0;
    width: 100%;
    height: 450px;
    max-width: 100%;
  }
`;

const ContactButton = styled(Button)`
  display: flex;
  align-items: center;
  font-weight: bold;
  color: #ffffff;
  background-color: #2E3091;
  text-decoration: none;
  margin-top: 0.5rem;
  width: 100%;
  justify-content: center;
  &:hover {
    background-color: #25327a;
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
<SectionTitle variant="h2" sx={{ fontWeight: 'bold' }}>Get in touch</SectionTitle>

      <Container>
        {/* Information Section */}
        <InfoCard>
          <CardContentWrapper>
               <ContactButton
              href="mailto:info@beothukmechanical.com"
              startIcon={<Email />}
              variant="contained"
            >
              info@beothukmechanical.com
            </ContactButton>

            <ContactButton
              href="https://www.facebook.com/profile.php?id=100089649765877"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<Facebook />}
              variant="contained"
            >
              Visit us on Facebook
            </ContactButton>
            <Typography variant="body1" fontWeight="bold" sx={{ fontSize: '1.2rem', textAlign: 'center' }}>
              Mailing Address
            </Typography>
            <Typography variant="body2" sx={{ textAlign: 'center' }}>
              P.O Box 468<br /> Buchans, NL A0H 1GO
            </Typography>
          </CardContentWrapper>
        </InfoCard>

        {/* Map Section */}
        <MapContainer>
          <iframe
            title="googleMap"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2626.7085498947663!2d-56.85765708390444!3d48.82562207928426!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4b7a0c7ce7502bb9%3A0x184df4a267db408d!2s2%20Main%20St%2C%20Buchans%2C%20NL%20A0H%201G0!5e0!3m2!1sen!2sca!4v1681177917259!5m2!1sen!2sca"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </MapContainer>
      </Container>
    </div>
  );
};

export default Contacts;
