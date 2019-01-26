import React, {Component} from "react"; 
import styled from 'styled-components';
import {SectionWrapper, InternalLink, HTMLContent} from "./../../../modules"

const ImageContainer = styled.iframe`
width: 250px; 
height: 250px;
margin: -600px auto 0 auto; 

`

const Section = styled.div `
width: 50%;
margin-right: 2em;
text-align: left;
`


class CTASection extends Component {
    render() { 
        return (  
                <SectionWrapper>
                            <ImageContainer src= {"https://www.youtube.com/embed/tgbNymZ7vqY"} />

                    <Section>
                            <h1>"Our <InternalLink text="qualified team"/> did the research, so you don't have to.</h1> 
                            <h3>The Australian charity sector holds over $30 billion dollars in cash reserves earning very low returns. A donation to I4C goes much further.</h3>

                            <h3>Most charities rely on regular donations to sustain their programs. <InternalLink text="Join us" /> to make an everlasting impact.</h3> 

                            <InternalLink text="Vetted by our Board of Trustees" />
                        
                    </Section>
                    
                </SectionWrapper>
        );
    }
}
 
export default CTASection;
