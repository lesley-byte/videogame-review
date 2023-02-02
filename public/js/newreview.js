//This will be the javascript front end to fetch a post request

const newReviewFormHandler = async (event) => {
  event.preventDefault();
  console.log('newReviewFormHandler: New review form submitted');
  // get the values from the form
  // get value from radio but
  const review_rating = document.querySelector(
    'input[name="rate"]:checked'
  ).value;
  const review_title = document.querySelector('#review_title').value;
  const review_text = document.querySelector('#review_text').value;
  // const reviewUser = document.querySelector('#user').value;
  const game_id = document.querySelector('#review_game_id').value;
  console.log('review rating: ' + review_rating);
  await fetch('/reviews', {
    method: 'POST',
    body: JSON.stringify({
      review_rating,
      review_title,
      review_text,
      //  reviewUser,
      game_id,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  document.location.replace(`/games/${game_id}`);
};

document
  .querySelector('#new-review-form')
  .addEventListener('submit', newReviewFormHandler);
