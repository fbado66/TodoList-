import React, { Component } from 'react';
import Condition from './Condition';

export default class Game extends Component {
  constructor(props) {
    super(props)
    this.state = {
      board: Array(9).fill(null),
      player: null,
      winnerplayer: null
    }
  
  }
  winner() {
    let winCombinations =
      [
        ["0", "1", "2"],
        ["3", "4", "5"],
        ["6", "7", "8"],
        ["0", "3", "6"],
        ["1", "4", "7"],
        ["2", "5", "8"],
        ["0", "4", "8"],
        ["2", "4", "6"],
      ]
    this.checkMatch(winCombinations)
  
  }
  checkMatch(winCombinations) {
    for (let index = 0; index < winCombinations.length; index++) {
      const [a, b, c] = winCombinations[index];
      let board = this.state.board
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        alert('We have a winner');

         let yolo = winCombinations[index]

        console.log(yolo)
        this.setState({
          winnerplayer: this.state.player
        })
      }
    }
  }

  handleClick(index) {
    if (this.state.player && !this.state.winnerplayer) {
      let newGame = this.state.board
      if (this.state.board[index] === null) {
        newGame[index] = this.state.player
        this.setState({
          board: newGame,
          player: this.state.player === "X" ? "O" : "X"
        })
        this.winner()
      }
    }
  }
  setPlayer(player) {
    this.setState({ player })
  }
  renderBoxes() {
    return this.state.board.map(
      (box, index) =>
        <div className="box" key={index}
          onClick={() => this.handleClick(index)}>
          <span className='player'>{box}</span>
           </div>
    )
  }
  reset() {
    this.setState({
      player: null,
      winnerplayer: null,
      board: Array(9).fill(null)
    })
  };
 
  render() {
    
    return (
      <React.Fragment>
        

        <h1>Tic Tac Toe App</h1>
        
        
        <Condition
          player={this.state.player}
          setPlayer={(e) => { this.setPlayer(e) }}
          winnerplayer={this.state.winnerplayer}
        />
        <div className="board">
          {this.renderBoxes()}
        </div>
        <button 
        onClick={() => this.reset()}> Reset</button >
      </React.Fragment>
    );
  }
}

