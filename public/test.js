
var isEmpty = str => !str.trim().length;

var validatedForm = function() {
  console.log(isEmpty(document.getElementById('post-title').value),
  isEmpty(document.getElementById('post-description').value));
  if (
    isEmpty(document.getElementById('post-title').value) ||
    isEmpty(document.getElementById('post-description').value)) {
      document.getElementById('post-save-container').classList.add('hide');
      document.getElementById('post-save-container').classList.remove('show');
  } else {
    document.getElementById('post-save-container').classList.add('show');
    document.getElementById('post-save-container').classList.remove('hide');
  }
};

document.getElementById('post-title').addEventListener('input', function() {
  validatedForm();
});

document.getElementById('post-description').addEventListener('input', function() {
  validatedForm();
});
