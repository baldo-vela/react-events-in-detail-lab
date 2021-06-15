// Code CoordinatesButton Component Here
import React, {Component} from "react"

export default class CoordinatesButton extends Component {
    render() {
        return(
            <button 
                onClick={event => this.handleClick(event)}
            >Coords
            </button>
            )
    }

    handleClick(event){
        const x = event.clientX
        const y = event.clientY
        this.props.onReceiveCoordinates([x,y])
    }
}