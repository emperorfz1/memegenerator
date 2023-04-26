const generateButton = document.getElementById('generate-button');
const memeImage = document.getElementById('meme-image');
const imageUrlInput = document.getElementById('image-url');
const topTextInput = document.getElementById('top-text');
const bottomTextInput = document.getElementById('bottom-text');

generateButton.addEventListener('click', function() {
	const imageUrl = imageUrlInput.value;
	const topText = topTextInput.value;
	const bottomText = bottomTextInput.value;
	const memeUrl = `https://api.memegen.link/images/custom/${encodeURIComponent(topText)}/${encodeURIComponent(bottomText)}.png?background=${encodeURIComponent(imageUrl)}`;
	memeImage.src = memeUrl;
});
