import React, {Component} from 'react';
import styled from 'styled-components';
import {InternalLink, SectionWrapper} from './../../modules';
import {connect} from "react-redux"; 
import {getContent} from "./../../../actions"


const Section = styled.div `
height: 50%;
width: ${props => props.width || "100%"};
text-align: center;
@media (min-width: 768px){
    width: 50%;
}
`


class FindOutMore extends Component {
    componentDidMount() {
        this.props.getContent("our-team/find-out-more")
    }
    
    render() { 
        const {findout, findoutError, findoutIsFetching} = this.props; 
        console.log("thisone", findout)
        if (findoutIsFetching) {
            return <div>Loading</div>

        } else if (findoutError || !findout|| !findout[0]){
            return <div>error</div>
        }     

            return ( 
                <SectionWrapper>
                    <Section width="100%">
                        <h2>{findout[0].content.heading}</h2>
                        <InternalLink 
                        text={findout[0].content.link.text} 
                        to={findout[0].content.url} 
                        />
                    </Section>
                </SectionWrapper>
            )
                
    } 
}

const mapStateToProps = (state) => {
    const {findout, findoutIsFetching, findoutError} = state.findout
    return {
        findout, 
        findoutIsFetching,
        findoutError

    }
}

export default connect(mapStateToProps, {getContent})(FindOutMore);




















