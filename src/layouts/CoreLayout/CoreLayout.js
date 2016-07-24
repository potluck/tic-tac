import React from 'react'
import Header from '../../components/Header'
import GameBoard from '../../components/GameBoard'
import classes from './CoreLayout.scss'
import '../../styles/core.scss'

export const CoreLayout = ({ children }) => (
  <div className='container text-center'>
    <Header />
    <div className={classes.mainContainer}>
      {children}
    </div>
    <GameBoard pieces={[['X',' ', 'X','O','O',' ',' ',' ','X'],
    					['X','X', 'X','O','O',' ',' ',' ','X'],
    					['X',' ', 'X','O','O',' ',' ',' ','X'],
    					['X',' ', 'X','O','O',' ',' ',' ','X'],
    					['X',' ', 'X','O','O',' ',' ',' ','X'],
    					['X',' ', 'X','O','O','O',' ',' ','X'],
    					['X',' ', 'X','O','O',' ',' ',' ','X'],
    					['X',' ', 'X','O','O',' ',' ',' ','X'],
    					['X',' ', 'X','O','O',' ',' ',' ','X']]}/>
  </div>
)

CoreLayout.propTypes = {
  children: React.PropTypes.element.isRequired
}

export default CoreLayout
