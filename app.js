const mainImage = document.getElementById('placeholder');
const buttons = document.querySelectorAll('.button');

buttons.forEach((button, index) => {
  button.addEventListener('click', () => {
    const img = button.querySelector('img');
    const newSrc = img.src.replace('-thumb', ''); 
    const newAlt = img.alt.replace('Thumbnail of ', 'Description of ');
    mainImage.src = newSrc;
    mainImage.alt = newAlt;
  });
});
