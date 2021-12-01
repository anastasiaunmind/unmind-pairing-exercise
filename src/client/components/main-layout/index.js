import React from "react";
import PropTypes from "prop-types";
import { LayoutContainer, GlobalStyle } from "./index.styled";

function Layout({ children }) {
    return (
        <LayoutContainer data-testid="layout">
            <GlobalStyle />
            {children}
        </LayoutContainer>
    );
}

Layout.propTypes = {
    children: PropTypes.node,
};

export default Layout;
