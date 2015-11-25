var images = document.querySelectorAll('div.userContentWrapper img');

for (var i = 0; i < images.src.length; i++) {
	console.log(images.src[i]);
}

// function getImages() {
//   var images = document.querySelectorAll('div.userContentWrapper img, div.pinHolder img');
//   return images;
// }
