import { Col, Row, Button, Select } from "antd";
import React, { useEffect, useState } from "react";
import { StyledCard } from "../common/StyledElements";
import diamond from "../assets/mintable-diamond-card-nft.png";
import gold from "../assets/mintable-gold-card-nft.png";
import silver from "../assets/mintable-silver-card-nft.png";
import styled from "styled-components";
import "../styles/style.css";
import placeholder from "../assets/placeholder.PNG";
import ticket from "../assets/ticket.PNG";
import { useDropzone } from "react-dropzone";

const StyledDiv = styled.div`
  width: 100%;
`;

const StyledButton = styled(Button)`
  background-color: #550ded;
  color: white;
  width: 94px;
  height: 42px;
  border-radius: 4px;
  float: right;
`;

const StyledDottedDiv = styled.div`
  border: 2px dotted #eaeaff;
  width: 100%;
  height: 448px;
  border-radius: 12px;
  padding: 50px;
`;

const RafflePage = () => {
  const [files, setFiles] = useState([]);

  const { getRootProps, getInputProps } = useDropzone({
    accept: "image/*",
    noClick: true,
    noKeyboard: true,
    onDrop: (acceptedFiles) => {
      setFiles(
        acceptedFiles.map((file) =>
          Object.assign(file, {
            preview: URL.createObjectURL(file),
          })
        )
      );
    },
  });

  const thumbs = files.map((file) => (
    <div key={file.name}>
      <div>
        <img src={file.preview} />
      </div>
    </div>
  ));

  useEffect(
    () => () => {
      // Make sure to revoke the data uris to avoid memory leaks
      files.forEach((file) => URL.revokeObjectURL(file.preview));
    },
    [files]
  );
  return (
    <>
      <Row>
        <Col xs={24} sm={24} md={8} style={{ paddingRight: "20px" }}>
          <StyledCard>
            <Row
              type="flex"
              gutter={10}
              style={{ borderBottom: "1px solid #E9E9E9" }}
            >
              <Col span={15}>
                <StyledDiv>
                  <p className="font">Get More Tickets</p>
                </StyledDiv>
              </Col>
              <Col span={9}>
                <StyledButton>Buy</StyledButton>
              </Col>
            </Row>

            <div>
              <img
                src={diamond}
                className="raffle-ticket"
                alt="Diamond"
                draggable={true}
              />
            </div>
            <div>
              <img
                src={gold}
                className="raffle-ticket"
                alt="Gold"
                draggable={true}
              />
            </div>
            <div>
              <img
                src={silver}
                className="raffle-ticket"
                alt="Silver"
                draggable={true}
              />
            </div>
          </StyledCard>
        </Col>
        <Col xs={24} sm={24} md={16}>
          <StyledCard>
            <div>
              <p
                className="font"
                style={{
                  fontSize: "32px",
                  textAlign: "center",
                  marginBottom: "0",
                }}
              >
                Collectors Event
              </p>
              <p className="font" style={{ textAlign: "center" }}>
                Participate and win high quality curated NFTs
              </p>
            </div>
            <StyledDottedDiv>
              <div {...getRootProps()}>
                {files.length > 0 ? (
                  <div>{thumbs}</div>
                ) : (
                  <img
                    src={placeholder}
                    className="raffle-ticket"
                    alt="placeholder"
                  />
                )}
                <input {...getInputProps()} />
              </div>
              <p
                className="font"
                style={{
                  textAlign: "center",
                  color: "#727272",
                  paddingTop: "15px",
                  width: "323px",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
              >
                Drag a ticket or use the button below to draw your tickets
              </p>
            </StyledDottedDiv>
            <div style={{ borderTop: "1px solid #E9E9E9", marginTop: "34px" }}>
              <Row>
                <Col span={6}>
                  <img
                    src={ticket}
                    style={{ paddingTop: "20px" }}
                    alt="ticket"
                  />
                </Col>
                <Col span={11}>
                  <p
                    className="font"
                    style={{ paddingTop: "20px", marginBottom: "0" }}
                  >
                    Draw Tickets
                  </p>
                  <p
                    className="font"
                    style={{ fontSize: "18px", marginBottom: "6px" }}
                  >
                    10 Tickets found
                  </p>
                  <p className="font" style={{ fontSize: "16px" }}>
                    Open your tickets and get a chance to win $1000 worth of
                    high quality NFTs!{" "}
                    <a style={{ color: "#550DED" }}>Learn More</a>
                  </p>
                </Col>
                <Col span={7}>
                  <Select
                    defaultValue="Silver Ticket (1)"
                    style={{
                      width: "100%",
                      margin: "30px 10px 5px 0",
                      height: "42px",
                    }}
                  ></Select>
                  <Button
                    style={{
                      width: "100%",
                      height: "46px",
                      backgroundColor: "#550DED",
                      color: "white",
                    }}
                  >
                    Draw Ticket
                  </Button>
                </Col>
              </Row>
            </div>
          </StyledCard>
        </Col>
      </Row>
    </>
  );
};

export default RafflePage;
