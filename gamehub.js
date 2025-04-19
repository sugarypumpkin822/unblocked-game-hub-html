function showGame(gameId) {
  const games = document.querySelectorAll('#game-container > div'); // Select all game containers
  games.forEach(game => {
    game.style.display = 'none'; // Hide all games
  });
  document.getElementById(gameId).style.display = 'block'; // Show the selected game
}
