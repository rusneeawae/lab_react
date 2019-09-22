import React from 'react';
 
class CharacterCard extends React.Component{
    state = {
        acctive: false
    }

    acctive = () => {
        this.setState({
            acctive: !this.state.acctive
        });
        this.props.activetionHandler(this.props.value);
    }

    render(){
        let acctiveClass = this.state.acctive ? 'activeCard ': '';
        let className = `card ${acctiveClass}`
        return(
        <div className={className} onClick={this.acctive}>
            {this.props.value}  
        </div>
        )
    }
}
export default CharacterCard;