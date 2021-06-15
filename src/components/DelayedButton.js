// Code DelayedButton Component Here
import React, { Component } from "react"

export default class DelayedButton extends Component {

    render() {
        return (
            <button 
                onClick={event => this.handleClick(event)}
            >
            </button>
        )
    }

    handleClick(event) {
        event.persist();
        setTimeout(() => {
            this.props.onDelayedClick(event);
            }, 
            this.props.delay);
        }

}