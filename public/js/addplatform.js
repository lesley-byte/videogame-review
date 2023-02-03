const newPlatformHandler = async (event) => {
  event.preventDefault();
  console.log('new platform form submitted!');
  const platform_id = document.querySelector('#new-platform').value;
  const game_id = document.querySelector('#game_id').value;
  console.log('game_id: ', game_id);
  console.log('platform_id: ', platform_id);
  await fetch(`../api/games/addplatform`, {
    method: 'POST',
    body: JSON.stringify({
      game_id,
      platform_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  document.location.replace(`/games/${game_id}`);
  console.log('new platform form submitted!');
};

document
  .querySelector('#add-platform-form')
  .addEventListener('submit', newPlatformHandler);
