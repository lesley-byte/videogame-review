//This will be the fetch to update/put a review

const newReviewFormHandler = async (event) => {
  event.preventDefault();
  // get the values from the form
  const reviewTitle = document.querySelector('#title').value.trim();
  const reviewText = document.querySelector('#newreview').value.trim();
  // const reviewUser = document.querySelector('#review_user').value.trim();
  // const reviewGame = document.querySelector('#gamename').value.trim();

  const data = { title: reviewTitle, text: reviewText };

  if (reviewTitle && reviewText) {
    const response = await fetch(`/reviews/${id}`, {
      method: 'PUT',
      body: JSON.stringify(data),
      headers: { 'Content-Type': 'application/json' },
    });

    if (response.ok) {
      document.location.replace('/reviews');
    } else {
      alert(
        `newReviewFormHandler: Failed to create a new review. ${response.statusText}`
      );
      console.log(response);
    }
  }
};

document
  .getElementById('#submit')
  .addEventListener('submit', newReviewFormHandler);
