

function showaddgame() {
  let showInputs = document.querySelector('#add-game-form');
  showInputs.style.display = 'block';
}

const newGameFormHandler = async (event) => {
  event.preventDefault();
  console.log('new game form submitted!');
  const game_name = document.querySelector('#new-game').value;
  const developer_id = document.querySelector('#myDevelopers').value;
  const category_id = document.querySelector('#myCategories').value;
  const date = document.querySelector('#date').value;

  await fetch(`/api/games`, {
    method: 'POST',
    body: JSON.stringify({
      game_name,
      developer_id,
      category_id,
      date,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  document.location.replace('/games');
};

document
  .querySelector('#add-game-form')
  .addEventListener('submit', newGameFormHandler);

document.querySelector('#addbutton').addEventListener('click', showaddgame);
