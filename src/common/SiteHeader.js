import { Menu, Layout } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/Mintable-Logo.png";
import "../styles/style.css";
import { DownOutlined } from "@ant-design/icons";
import Search from "antd/lib/input/Search";

const { Header } = Layout;
const FixedMenu = styled(Header)`
  /* position: fixed; */
  z-index: 100;
  width: 100%;
  height: 81px;
  background-color: white;
  color: white;
  border-bottom: 1px solid #d6dee3;
`;

const RightMenu = styled(Menu)`
  float: right;
  background-color: white;
  border-bottom: 0px;

  padding-top: 8px;

  /* .ant-menu-item > a:only-child {
    color: white;
  } */
`;

const MenuItem = styled(Menu.Item)`
  .ant-menu-item {
    border: 1px solid black;
  }
`;

const LeftMenu = styled.div`
  float: left;
  display: inline-flex;
  padding-top: 22px;
`;

const SiteHeader = () => {
  return (
    <>
      <FixedMenu>
        <LeftMenu>
          <img src={logo} className="logo" alt="Mintable" />
          <Search
            style={{ paddingTop: "5px" }}
            placeholder="Search for anything"
            enterButton
          />
        </LeftMenu>
        <RightMenu mode="horizontal">
          <Menu.Item key="1">
            <Link to="#">Browse</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="#">Discover</Link>
          </Menu.Item>
          <Menu.Item key="3">
            <Link to="#">Mint an item</Link>
          </Menu.Item>
          <Menu.Item key="4">
            <Link to="#">Vote/DAO</Link>
          </Menu.Item>
          <MenuItem className="button-border" key="5">
            <Link to="#">
              My Account <DownOutlined />
            </Link>
          </MenuItem>
          <MenuItem className="button-border" key="6">
            <Link to="#">
              Ethereum <DownOutlined />
            </Link>
          </MenuItem>
        </RightMenu>
      </FixedMenu>
    </>
  );
};

export default SiteHeader;
