import '../css/game.css'
import loadGame from './loadgame';


function Game() {
  const startGame = () => {
    const button = document.getElementById("startGameButton"); 
    button.remove(); 
    loadGame();   
  }
  return(
    <div className="game">
        <button className="startButton" id="startGameButton" onClick={startGame}>Start Game</button>
        <canvas id="gameContainer" style={{width:'0px', height:'0px', border: 'None'}}></canvas>
    </div>
  );
}

export default Game;
