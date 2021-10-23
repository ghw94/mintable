import React from "react";
import styled from "styled-components";
import "../styles/style.css";
import logo from "../assets/Mintable-Logo.png";

const Box = styled.div`
  padding: 80px 60px;
  background: #2c0346;
  bottom: 0;
  width: 100%;
`;
const FooterLink = styled.a`
  color: #fff;
  margin-bottom: 20px;
  font-size: 14px;
  text-decoration: none;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 60px;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  grid-gap: 10px;

  @media (width: 100%) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 0 auto;
`;

export const Heading = styled.p`
  font-size: 16px;
  color: #fff;
  margin-bottom: 20px;
  font-weight: bold;
`;

const SiteFooter = () => {
  return (
    <>
      <Box>
        <Container>
          <Row>
            <Column style={{ display: "inline" }}>
              <img src={logo} className="logo" alt="Mintable" />
              <span
                className="font"
                style={{ fontSize: "24px", color: "white" }}
              >
                Mintable
              </span>
              <Heading style={{ paddingTop: "20px" }}>
                Join our community
              </Heading>
            </Column>
            <Column>
              <Heading>My Account</Heading>
              <FooterLink href="#">Create a store</FooterLink>
              <FooterLink href="#">List an Item for sale</FooterLink>
            </Column>
            <Column style={{ paddingTop: "45px" }}>
              <FooterLink href="#">My profile</FooterLink>
              <FooterLink href="#">Browse</FooterLink>
            </Column>
            <Column>
              <Heading>Need Help?</Heading>
              <FooterLink href="#">FAQ</FooterLink>
              <FooterLink href="#">Mintable guide</FooterLink>
            </Column>
            <Column>
              <Heading>Buy an Item</Heading>
              <FooterLink href="#">Digital Items</FooterLink>
              <FooterLink href="#">Store</FooterLink>
            </Column>
            <Column>
              <Heading>Legal</Heading>
              <FooterLink href="#">Privacy Policy</FooterLink>
              <FooterLink href="#">Terms of use</FooterLink>
            </Column>
          </Row>
        </Container>
      </Box>
    </>
  );
};

export default SiteFooter;
