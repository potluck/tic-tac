import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './MiniGame.scss'
import Square from '../Square'

function checkWin(gamePieces, c) {
	const combos = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]
	for (let i = 0; i < combos.length; i++) {
		const combo = combos[i];
		if (gamePieces[combo[0]] == c && gamePieces[combo[1]] == c && gamePieces[combo[2]] == c) {
			return true;
		}
	}
	return false;
}

export const MiniGame = (props) => { 
	const xWin = checkWin(props.gamePieces,'X')? <div className={classes.winner}>X</div> : null;
	const oWin = checkWin(props.gamePieces,'O')? <div className={classes.winner}>O</div> : null;
	return (
	  <div className={classes.square}>
		{xWin}
		{oWin}
	    <table className={classes.board}>
		    <tbody>
		    	<tr>
		    		<td className='top left'><Square piece={props.gamePieces[0]}/></td>
		    		<td className='top'><Square piece={props.gamePieces[1]}/></td>
		    		<td className='top right'><Square piece={props.gamePieces[2]}/></td>
				</tr>
		    	<tr>
		    		<td className='left'><Square piece={props.gamePieces[3]}/></td>
		    		<td><Square piece={props.gamePieces[4]}/></td>
		    		<td className='right'><Square piece={props.gamePieces[5]}/></td>
				</tr>
		    	<tr>
		    		<td className='bottom left'><Square piece={props.gamePieces[6]}/></td>
		    		<td className='bottom'><Square piece={props.gamePieces[7]}/></td>
		    		<td className='bottom right'><Square piece={props.gamePieces[8]}/></td>
				</tr>
			</tbody>
	    </table>
	  </div>
	);
}

MiniGame.propTypes = {
  gamePieces: React.PropTypes.array.isRequired
}

export default MiniGame
