import React, {Component} from 'react';
import styled from 'styled-components';
import SectionWrapper from '../../../modules/SectionWrapperV2';
import image from '../../../../img/handshake.jpg';
import ButtonLink from './../../../modules/ButtonLink';
import VolunteerCard from '../../../modules/VolunteerCard';
import { getContent } from '../../../../actions';
import { connect } from 'react-redux';

const ImageContainer = styled.img`
height: auto; 
width: auto; 
max-width: 600px; 
max-height: 600px;
margin: -200px auto 0 auto; 
`

const Section = styled.div `
width: ${props => props.width || "100%"};
text-align: center;
@media (min-width: 768px){
    width: 50%;
}
`
const Wrapper = styled.div`
text-align: left;
padding-right: 180px;
`
const P = styled.p`
margin-bottom: ${props => props.margin || "0px"};

`

const BorderP = styled.p`
color: white;
background-color: green;
`

class FirstSection extends Component {

    componentDidMount () {
        this.props.getContent("about/first-section");    
    }

    render () {
        console.log(this.props)
        const {color} = this.props;
        
        return (
            <SectionWrapper color={color}>
                <Section>
                    <ImageContainer src= {image} />
                    <VolunteerCard CardHeading="Volunteer group." CardText="A little but about what they do. Lorem Ipsum is simply dummy text of the printing and typesetting industry." CardImage={image} display="flex" />
                </Section>

                <Section>
                    <Wrapper>
                        <BorderP>ABOUT INVESTING FOR CHARITY LTD</BorderP>
                        <h1>Donate once, give forever.</h1> 
                        <P margin="70px">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</P>
                        <h2>Investing for Charity helps donors give more effectively</h2>
                        <P margin="20px">orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</P>
                        <p>For more of what we do....</p>
                        <ButtonLink text="DOWNLOAD PDF" color="green" />
                    </Wrapper>               
                </Section>
            </SectionWrapper>
        )
    } 
}

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.aboutFirst
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(FirstSection);
