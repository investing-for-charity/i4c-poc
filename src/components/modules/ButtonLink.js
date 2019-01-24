import React from "react";
import {Link, withRouter} from "react-router-dom";
import styled from "styled-components";
import ReactGA from "react-ga";


const ButtonLink = styled(Link)`
    border-bottom: 3px solid ${props => props.color || "black"};
    display: inline-block;
    color: ${props => props.color || "black"};
    text-align: center;
    text-decoration: none;	
    ${props => props.auto ? "" : "width: 128px;"}
    margin: 8px 8px;
    height: 32px;
    font-size: 1em;
    :hover {
        color: blue;
    }
    `

    
function StyledLink({className, section, text, location, color, href, auto}) {
    const analytics = () => {
        ReactGA.event({
            category: 'ButtonLink',
            action: `Section: ${section}, Button: ${text}, Page: ${location.pathname}`,
          });
    }
        return (
        <ButtonLink 
            className={className}
            auto={auto} 
            to={`${href}`} 
            color={color} 
            onClick={analytics}>
                {text}
        </ButtonLink>
        )
    }
  
export default withRouter(StyledLink);



