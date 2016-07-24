import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './GameBoard.scss'
import MiniGame from '../MiniGame'

export const GameBoard = (props) => (
  <div>
  	<table className={classes.boards}>
  	<tbody>
  		<tr>
		    <td className='top left'><MiniGame gamePieces={props.pieces[0]}/></td>
		    <td className='top'><MiniGame gamePieces={props.pieces[1]}/></td>
		    <td className='top right'><MiniGame gamePieces={props.pieces[2]}/></td>
	    </tr>
  		<tr>
		    <td className='left'><MiniGame gamePieces={props.pieces[3]}/></td>
		    <td ><MiniGame gamePieces={props.pieces[4]}/></td>
		    <td className='right'><MiniGame gamePieces={props.pieces[5]}/></td>
	    </tr>
  		<tr>
		    <td className='bottom left'><MiniGame gamePieces={props.pieces[6]}/></td>
		    <td className='bottom'><MiniGame gamePieces={props.pieces[7]}/></td>
		    <td className='bottom right'><MiniGame gamePieces={props.pieces[8]}/></td>
	    </tr>
    </tbody>
    </table>
  </div>
)

GameBoard.propTypes = {
  pieces: React.PropTypes.array.isRequired
}

export default GameBoard
