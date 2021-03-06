import React from 'react';
import styled from "styled-components";
import {darkGreen} from "./../BrandStyle"
import { ErrorBoundary } from '..';

const StyledBreadcrumb = styled.span`
display: ${props => props.mobile ? "flex" : "none"};
position: absolute;
width: 100%;
z-index: 1;
justify-content: center;
a {
    font-size: 13px;
    font-weight: bold;
    line-height: 1.23;
    text-align: center;

background-color: ${darkGreen};
border: 1px solid ${darkGreen};

    padding: 8px;
    color: white;
    :hover, :focus {
        cursor: pointer;
    }
}
    a:not(:last-of-type) {
        padding-left: 8px;

    ::after {
        content: ">";
        padding-left: 8px;
    }
}

@media (min-width: 500px){
    display: ${props => props.mobile ? "none" : "inline"};
    color: white;
    width: auto;
}
`
const Breadcrumb = ({text, to, mobile, children}) => {
    return (
        <ErrorBoundary>
        <StyledBreadcrumb mobile={mobile}>
        {children}
        </StyledBreadcrumb>
        </ErrorBoundary>
    )
}


export default Breadcrumb

