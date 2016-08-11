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

const MiniGame = React.createClass({
    propTypes: {
        gamePieces: React.PropTypes.array.isRequired,
        count: React.PropTypes.number.isRequired,
    },

    clicked: function(index) {
        console.log("yo square "+ index + " was clicked!");
    },

    render: function() {
        const xWin = checkWin(this.props.gamePieces[this.props.count],'X')? <div className={classes.winner}>X</div> : null;
        const oWin = checkWin(this.props.gamePieces[this.props.count],'O')? <div className={classes.winner}>O</div> : null;
        return (
          <div className={classes.square}>
            {xWin}
            {oWin}
            <table className={classes.board}>
                <tbody>
                    <tr>
                        <td className='top left'>
                            <Square
                                pieces={this.props.gamePieces[this.props.count]} 
                                count={0}
                                clicked={this.clicked}
                            />
                        </td>
                        <td className='top'>
                            <Square
                                pieces={this.props.gamePieces[this.props.count]} 
                                count={1}
                                clicked={this.clicked}
                            />
                        </td>
                        <td className='top right'>
                            <Square
                                pieces={this.props.gamePieces[this.props.count]} 
                                count={2}
                                clicked={this.clicked}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='left'>
                            <Square
                                pieces={this.props.gamePieces[this.props.count]} 
                                count={3}
                                clicked={this.clicked}
                            />
                        </td>
                        <td>
                            <Square
                                pieces={this.props.gamePieces[this.props.count]} 
                                count={4}
                                clicked={this.clicked}
                            />
                        </td>
                        <td className='right'>
                            <Square
                                pieces={this.props.gamePieces[this.props.count]} 
                                count={5}
                                clicked={this.clicked}
                            />
                        </td>
                    </tr>
                    <tr>
                        <td className='bottom left'>
                            <Square
                                pieces={this.props.gamePieces[this.props.count]} 
                                count={6}
                                clicked={this.clicked}
                            />
                        </td>
                        <td className='bottom'>
                            <Square
                                pieces={this.props.gamePieces[this.props.count]} 
                                count={7}
                                clicked={this.clicked}
                            />
                        </td>
                        <td className='bottom right'>
                            <Square
                                pieces={this.props.gamePieces[this.props.count]} 
                                count={8}
                                clicked={this.clicked}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
          </div>
        );
    }
})


export default MiniGame
