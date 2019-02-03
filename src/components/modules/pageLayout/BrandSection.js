import React, {Component, Fragment} from 'react';
import styled from 'styled-components';
import {SectionWrapper, Breadcrumb, Link, HTMLContent, InternalLink} from './../../modules';



const ImageContainer = styled.img`
width: 100%;
max-width: 720px;
max-height: 480px;
height: auto; 
position: relative;
top: 0;
`

const Section = styled.div `
width: ${props => props.width || "100%"};
@media (min-width: 768px){
    width: 50%;
    height: ${props => props.height || "auto"};
}
`
const Wrapper = styled.div`
text-align: left;
padding: 48px;
@media (min-width: 768px){
    margin-top: ${props => props.marginTop || "20%"};
}
`

const LinkContainer = styled.div`
margin-top: 30px;
`

class BrandOpener extends Component {

    render () {
        const { color, image, link, marginTop, information  } = this.props;  
        return (
            <>
            <SectionWrapper align_start color={color} height= "auto" padding="0">
                <Section height="100%"> 
                    <ImageContainer src= {image} alt="Cherring man" />
                    <ImageContainer src= {image} alt="Cherring man" />
                    {/* first received child is a vertical list */}
                </Section>
                <Section>
                    <Wrapper marginTop={marginTop}>
                        {information ? information.map((information) => {

                        return(
                            <Fragment key={information.heading}>
                            <HTMLContent  content={information.heading} />
                            <HTMLContent content={information.text} />
                            </Fragment>
                        )
                        } ) : null}

                        {link ? link.map((link) => {

                        return(
                            <InternalLink text={link.linkText} color={link.linkColor} location={link.linkLocation} key={link.linkText}  />
                        )
                        } ) : null}

                    </Wrapper>               
                </Section>
            </SectionWrapper>
            
            </>  
        )
    } 
}

export default BrandOpener

