console.log('addfriend.js loaded');

const newFriendHandler = async (event) => {
    event.preventDefault();
    console.log('new friend form submitted!');
    const friend_id = document.querySelector('#myFriend').value;
    // const user_id = document.querySelector('#user_id').value;

    await fetch('/friends', {
        method: 'POST',
        body: JSON.stringify({
            friend_id,
            // user_id
        }),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    document.location.replace('./');
};

document
    .querySelector('#add-friend-form')
    .addEventListener('submit', newFriendHandler);

