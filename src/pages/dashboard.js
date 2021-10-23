import { Layout } from "antd";
import React from "react";
import SiteFooter from "../common/SiteFooter";
import SiteHeader from "../common/SiteHeader";
import { StyledContent } from "../common/StyledElements";
import RafflePage from "../components/RafflePage";

const dashboard = () => {
  return (
    <>
      <Layout>
        <SiteHeader />
        <Layout>
          <StyledContent>
            <RafflePage />
          </StyledContent>
        </Layout>
        <SiteFooter />
      </Layout>
    </>
  );
};

export default dashboard;
