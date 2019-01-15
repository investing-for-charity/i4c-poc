import React, { Component } from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import MoreI4cCard from "../../modules/MoreI4cCard";
import ButtonLink from "../../modules/ButtonLink";
import ImpactSection from './ImpactSection';
class HomePage extends Component {
    
    render() {
        
        return (
            <section>
                <h1>Welcome To HomePage</h1>
                <ImpactSection />
                <BrowserRouter>
                    <>
                    <MoreI4cCard CardText = "This is some text" CardHeading = "This is a heading" CardImage = "http://writingexercises.co.uk/images2/randomimage/pipe-sculpture.jpg" />
                    <ButtonLink href="#" text={"link"} {...this.props} section={"The only section"}/>
                    <ButtonLink href="google.com" color={"green"} text="link2"/>
                    <ButtonLink href="react.com" color={"red"} text="link3"/>
                    </>
                </BrowserRouter>
                
            </section>
        );
    }
}

export default HomePage