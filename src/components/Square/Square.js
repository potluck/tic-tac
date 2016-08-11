import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Square.scss'

const Square = React.createClass({
    propTypes: {
      pieces: React.PropTypes.array.isRequired,
      count: React.PropTypes.number.isRequired,
      clicked: React.PropTypes.func.isRequired
    },

    clicked: function() {
        console.log("yo I was clicked!");
        this.props.clicked(this.props.count);
    },

    render: function() {
        return (
            <div onClick={this.clicked} className={classes.square}>
                <h2>{this.props.pieces[this.props.count]}</h2>
            </div>
        );
    }
})

export default Square
