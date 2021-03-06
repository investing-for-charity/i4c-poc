import React, {Component} from 'react';
import styled from 'styled-components';
import {SectionWrapper, ScrollButton} from "../../../modules";
import {connect} from "react-redux";
import {getContent} from "../../../../actions";
import {Loading} from "./../../../modules"

const ImpactSectionWrapper = styled(SectionWrapper)`
flex-direction: column;
text-align: center;
position: relative;
flex-wrap: nowrap;
text-align: left;
@media only screen and (min-width: 500px) {
    text-align: center;
    height: calc(100vh - 110px);
}
button {
    @media only screen and (max-width: 500px) {
    
    }
}
`
const Div = styled.div `
    padding: 0 24px 52px;
    h1, p {
        @media only screen and (min-width: 500px) {
        text-align: center;
    }
    }
`


class ImpactSection extends Component {
    componentDidMount() {
        const body = document.querySelector("body");
        body.scrollTop = 0;
        const {impact} = this.props;
        if(!impact){
        this.props.getContent("impactsection")
        }
    }
    
    render () {
        const {color, impact, impactIsFetching, impactError} = this.props;

        if (impactIsFetching ) {
        return (<Loading/>)
        } else if (impactError || !impact || !impact[0]){
            return <div>error</div>
        }
        
        return (
            <>
            
            <ImpactSectionWrapper padding="0" height="calc(100vh - 90px)" aria-live="polite" color={color}>
                <Div>
                    <h1>{impact[0].heading}</h1>
                    <p>{impact[0].subtext}</p>
                </Div>
                <ScrollButton target="HowItWorks" text="LEARN MORE" />
            </ImpactSectionWrapper>
            </>
        )
    } 
}


const mapStateToProps = (state) => {
    const {impact, impactIsFetching, impactError} = state.impact
    return {
        impact,
        impactError,
        impactIsFetching
    }
}

export default connect(mapStateToProps, {getContent})(ImpactSection);
