import React, {Component} from 'react';
import styled from 'styled-components';
import SmallHorizontalCard from '../../modules/SmallHorizontalCard';
import { getContent } from '../../../actions';
import { connect } from 'react-redux';

const Wrapper = styled.div`
    width: 470px;
`

class VerticalCardSection extends Component {

    
    componentDidMount () {
        const {verticalCard, getContent} = this.props; 
        getContent(verticalCard);    
    }

    render() { 
        
        const { content, isFetching, error} = this.props;
        

        if (isFetching) {
            return ("loading")
            } else if (error || !content || !content[0]){
                return null
            }

        if(content){
            return (
                <>
                    {content.map((content) => {
                    return (
                        <Wrapper key={content._id}>
                            <SmallHorizontalCard
                            CardText={content.text}
                            CardImage={content.image.secure_url}
                            />
                        </Wrapper>
                    )
                    }) }
                </>
                
             );
            }
            return(null);
    }
}

const mapStateToProps = (state) => {
    const {content, isFetching, error} = state.causeHomeVerticalCard
    console.log(state)
    return {
        content,
        isFetching,
        error,
    }
}

export default connect(mapStateToProps, {
    getContent
})(VerticalCardSection);