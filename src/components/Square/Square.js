import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Square.scss'

export const Square = (props) => (
  <div>
    <h2>{props.piece}</h2>
  </div>
)

Square.propTypes = {
  piece: React.PropTypes.string.isRequired
}

export default Square
