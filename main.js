// retrieve all images on the page
var images = $("img")
var n = images.length

// retrieve paths to random images to replace each image
// images come from unsplash.com
$.ajax({
  method: 'GET',
  url: 'https://picsum.photos/list',
  success: function(result){
    var paths = []
    for (i=0; i<n; i++){
      var index = getRandomArbitrary(0,result.length)
      var path = 'https://unsplash.it/1200/800?image=' + index
      paths.push(path)
    }
    replaceImage(paths)
  },
  error: function(err){
    console.log(err)
  }
})

// loop through and replace all images
function replaceImage(paths){
  for (i=images.length-1; i>=0; i--){
    image = images[i];
    w = image.width
    h = image.height
    var parent = image.parentNode;
    parent.removeChild(image);
    var new_image = document.createElement("IMG");
    new_image.src = paths[i];
    new_image.width = w;
    new_image.height = h;
    parent.prepend(new_image);
  }
}

// Returns a random number between min (inclusive) and max (exclusive)
function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}




// Plain JS get all images
// var images = document.getElementsByTagName('img');

// Jquery get all images
// var images = $("img")
// for (i=images.length-1; i>=0; i--){
//   image = images[i];
//   var parent = image.parentNode;
//   parent.removeChild(image);
//   var new_image = document.createElement("IMG");
//   new_image.src = image_source
//   parent.prepend(new_image);
// }


// example callback function with jquery
// $('div').click(function() {
//   alert('A div was clicked!');
// });
