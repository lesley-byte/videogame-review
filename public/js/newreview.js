//This will be the javascript front end to fetch a post request
const newReviewFormHandler = async (event) => {
    event.preventDefault();
// get the values from the form
    const reviewTitle = document.querySelector('#review_title').value.trim();
    const reviewText = document.querySelector('#review_text').value.trim();
    const reviewUser = document.querySelector('#review_user').value.trim();
    const reviewGame = document.querySelector('#review_game_name').value.trim();

    if (reviewTitle && reviewText && reviewUser && reviewGame) {
        const response = await fetch('/reviews', {
            method: 'POST',
            body: JSON.stringify({ reviewTitle, reviewText, reviewUser, reviewGame }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(`newReviewFormHandler: Failed to create a new review. ${response.statusText}`);
            console.log(response);
        }
    }
};

document
    .querySelector('.new-review-form')
    .addEventListener('submit', newReviewFormHandler);
