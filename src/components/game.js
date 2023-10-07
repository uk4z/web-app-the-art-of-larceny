import '../css/game.css'

function Game() {
  return(
    <div className="game">
        <canvas id="gameContainer" style={{width:'100%', height:'100%', border: 'None'}}></canvas>
    </div>
  );
}

export default Game;
