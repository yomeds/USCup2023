// Get the comment input elements and submit button
const authorInput = document.getElementById('author-input');
const commentInput = document.getElementById('comment-input');
const submitButton = document.getElementById('submit-button');

// Get the comments container
const commentsContainer = document.querySelector('.comments');

// Function to create a new comment element
function createCommentElement(author, comment) {
  const commentElement = document.createElement('div');
  commentElement.classList.add('comment');

  const authorSpan = document.createElement('span');
  authorSpan.classList.add('comment-author');
  authorSpan.textContent = author + ':';

  const commentSpan = document.createElement('span');
  commentSpan.classList.add('comment-text');
  commentSpan.textContent = comment;

  commentElement.appendChild(authorSpan);
  commentElement.appendChild(commentSpan);

  return commentElement;
}

// Function to handle comment submission
function handleCommentSubmission(e) {
  e.preventDefault(); // Prevent form submission

  const author = authorInput.value.trim();
  const comment = commentInput.value.trim();

  if (author !== '' && comment !== '') {
    const commentElement = createCommentElement(author, comment);
    commentsContainer.appendChild(commentElement);

    // Clear the input fields
    authorInput.value = '';
    commentInput.value = '';
  }
}

// Add event listener for form submission
submitButton.addEventListener('click', handleCommentSubmission);
