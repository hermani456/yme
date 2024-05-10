import {
  Body,
  Container,
  Head,
  Hr,
  Html,
  Img,
  Preview,
  Text,
} from "@react-email/components";
import * as React from "react";

export const YmeEmailTemplate = ({ name, cargo, email, phone }) => (
  <Html>
    <Head />
    <Preview>Yme Recruiment. Linking talent and comunities.</Preview>
    <Body style={main}>
      <Container style={container}>
        <Img
          src={
            "https://yme-production.up.railway.app/_next/static/media/footerLogo.4f2c56fb.svg"
          }
          width="170"
          height="50"
          alt="Yme Logo"
          style={logo}
        />
        <Text style={paragraph}>Hola,</Text>
        <Text style={paragraph}>
          Han subido un nuevo curriculum a través de la web de Yme.
        </Text>
        <Text style={paragraph}>
          Nombre del postulante:{" "}
          <span style={{ fontWeight: "bold" }}>{name}</span>
        </Text>
        <Text style={paragraph}>
          Cargo del postulante:{" "}
          <span style={{ fontWeight: "bold" }}>{cargo}</span>
        </Text>
        <Text style={paragraph}>
          Email del postulante:{" "}
          <span style={{ fontWeight: "bold" }}>{email}</span>
        </Text>
        <Text style={paragraph}>
          Teléfono del postulante:{" "}
          <span style={{ fontWeight: "bold" }}>{phone}</span>
        </Text>
        <Hr style={hr} />
        <Text style={footer}>Yme.cl, 2024. Todos los derechos reservados.</Text>
      </Container>
    </Body>
  </Html>
);

export default YmeEmailTemplate;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
};

const logo = {
  margin: "0 auto",
};

const paragraph = {
  fontSize: "16px",
  lineHeight: "26px",
};

const hr = {
  borderColor: "#cccccc",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
};
