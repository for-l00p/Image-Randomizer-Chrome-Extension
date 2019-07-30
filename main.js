/*
Code loosely based on the 'Intro to Chrome Extension Project' tutorial from csx
https://csx.codesmith.io/public/chrome-extension/chrome-extension-1

This Chrome extension replaces all images on a webpage with random ones from the picsum api
*/

// retrieve all images from the DOM
// equivalently : 'var images = document.getElementsByTagName('img');''
var images = $("img")

// use ajax to generate asynchronous api requests for placeholder images
$.ajax({
  method: 'GET',
  url: 'https://picsum.photos/list',
  success: function(result){
    // for each image, generate a random replacement
    for (i = 0; i < images.length; i++){
      if (i > 50) {break};
      image = images[i]

      // find new image with same dimensions
      var width = image.width
      var height = image.height
      var path = 'https://unsplash.it/' + width + '/' + height + '?random=' + i

      // update the image
      replaceImage(i,path)
    }
  },
  error: function(err){
    console.log(err)
  }
})

// callback function, once an image link is obtained,
function replaceImage(index, path){
  image = images[index];

  // retrieve parent element and remove original image
  var parent = image.parentNode;
  parent.removeChild(image);

  // create new image element and add to parent
  var new_image = document.createElement("IMG");
  new_image.src = path;
  parent.prepend(new_image);
}
