import React, {Component} from 'react'
import Attributes from './Attributes'

export default class Card extends Component {
   constructor(props){
       super(props)
       this.state = {
           showAttributes: false
       }
   }

    handleClick = (character) => {
        this.setState({
            showAttributes: !this.state.showAttributes
        })
        this.props.changeActiveCard(character)
    }

    displayStuff = () => {
        return <Attributes character={this.props.character}/>
    }

    dotheOtherThing = () => {
        return this.state.showAttributes ? <Attributes character={this.props.character}/> : 'ClICK ME'
    }
    render(){
        const {character} = this.props
        return (
            <div className='card' onClick={() => this.props.id ? null : this.handleClick(character)}>
                <h3>{character.name}</h3>
                <img src={character.image} alt='name'/>
                {this.props.id ? this.displayStuff() : this.dotheOtherThing()}
            </div>
        )
    }
}
