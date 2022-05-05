import React from 'react';
import './App.css';
import axios from 'axios';
import PlayerList from './Player/PlayerList';
import PlayerSingle from './Player/PlayerSingle';
import PlayerForm from './Player/PlayerForm';

class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      players: [],
      currentPlayers: {}
    }
    this.updateCurrentPlayer = this.updateCurrentPlayer.bind(this);

  }

  componentDidMount(){
    const url = 'http://localhost:4000/players';
    axios.get(url).then((Response) => {
      this.setState({
        players: Response.data
      })
    })
    .catch((error) => {
      console.log(error);
    });
  };

  updateCurrentPlayer(item){
    this.setState({
      currentPlayer: item,
    });
  } 

  render(){
    return (
      <div className="container-fluid">
        <div className='row'>

          <nav>
            <div className="nav-wrapper">
              <a href="/" className="brand-logo green darken-5">Soccer Management Cloud Platform supported with Blockchain and AI</a>

            </div>
          </nav>

        </div>
        <div className='row'>
          <div className='col s3'><PlayerList players={this.state.players} 
          updateCurrentPlayer={this.updateCurrentPlayer}/>
          </div>
          <div className='col s9'><PlayerSingle player={this.state.currentPlayers}/></div>
        </div>
        <div className='row'>
          <div className='col s12'><PlayerForm/> </div>
        </div>
      </div>
    );
  }
  }


export default App;
