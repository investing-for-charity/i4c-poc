import styled from "styled-components";
import Link from "./Link"


const ButtonLink = styled(Link)`
    border-bottom: 3px solid ${props => props.color || "black"};
    display: inline-block;
    color: ${props => props.color || "black"};
    /* text-align: ${props => props.textLeft ? "left" : "center"}; */
    text-decoration: none;	
    width: fit-content;
    margin: 12px 8px 16px;
    padding-bottom: 8px;
    font-size: 16px;
    :hover, :focus {
        color: blue;
    }
    `

  
export default ButtonLink;



