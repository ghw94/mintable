import styled from "styled-components";
import { Card, Layout } from "antd";

const { Content } = Layout;

export const StyledContent = styled(Content)`
  padding: 30px;
  background-color: white;
`;

export const StyledCard = styled(Card)`
  margin-top: 30px;
  padding: 15px 0 0 0;
  box-shadow: 0px 8px 11px rgba(0, 0, 0, 0.17);
  -webkit-box-shadow: 0px 8ox 11px #0000002b;
  .ant-card-head {
    border: none;
  }

  .ant-card-body {
    padding-top: 0px;
  }
  .ant-card-head-title {
    font-weight: bold;
    padding-bottom: 0px;
  }
`;
