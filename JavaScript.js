// Button interactions
document.getElementById('yes-btn').addEventListener('click', function() {
  document.querySelector('.overlay').style.display = 'none';
  document.getElementById('final-message').style.display = 'block';
  document.getElementById('bg-music').pause(); // Pause music when proposal is accepted
});

document.getElementById('no-btn').addEventListener('click', function() {
  alert('Try again, Riya! 😉');
});

// Smooth photo transition effect
window.onload = () => {
  let imgs = document.querySelectorAll('.gallery-img');
  imgs.forEach((img, index) => {
    setTimeout(() => {
      img.style.opacity = 1;
    }, 1000 * (index + 1)); // Staggering effect
  });
};
