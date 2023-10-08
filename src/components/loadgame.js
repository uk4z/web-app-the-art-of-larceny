function loadGame() {
    import('./out/the_art_of_larceny.js') // Replace with the actual path to your Bevy game WASM module
      .then((module) => {
        // When the module is loaded, initialize and run your game
        return module.default();
      })
      .then(() => {
        // Append the canvas to the gameContainer div
        const gameContainer = document.getElementById('gameContainer');
        const canvas = document.createElement('canvas');
        gameContainer.appendChild(canvas);
      })
      .catch(console.error);
  }
  
  export default loadGame; // Export the function for use in other files
  