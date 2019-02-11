import React, { Component } from 'react';
import Player from './Player';

export default class Condition extends Component {
  handleSetPlayer(e) {
    this.props.setPlayer(e)
    }

   
    renderHtml() {
      if (this.props.winnerplayer) {
        return (
        <h2>{this.props.winnerplayer} is the winner </h2>)
      } else {
        return this.props.player ?
            <h2>Next player is {this.props.player}</h2> :
            <Player player={(e) => this.handleSetPlayer(e)} />
        } 
      }
    render() {
      return (<span>{this.renderHtml()}</span>)
      
      }
}