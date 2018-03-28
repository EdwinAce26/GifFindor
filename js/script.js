// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************
/*global $*/
$(document).ready(function(){
    var nextImg
    var nextImg2
    function giphyURLWithSearchTerm(searchTerm) {
   
    
    var url = "https://api.giphy.com/v1/stickers/search?q=" + searchTerm + "&api_key=dc6zaTOxFJmzC";
    return url;
}

function appendImageToBody(srcURL) {
    $('#image').append('<img src=' + srcURL + '>');
}

function callGiphyAPIWithSearchTerm(searchTerm) {
    var url = giphyURLWithSearchTerm(searchTerm);
    console.log(url);
    $.ajax({
        url: url,
        method: "GET",
        success: function(response) {
            //console.log(response);
            var image_url = response.data[0].images.original.url;
            var nextImg= response.data[1].images.original.url;
            var nextImg2= response.data[2].images.original.url;
            // console.log(images_url);
            // console.log(nextImg);
            // console.log(nextImg2);
           appendImageToBody(image_url);
      },
    }); 
}


//Add a click handler beloe to call the function when the button is clicked
    $('button').click(function() {
         var searchTerm = $('input').val();
    callGiphyAPIWithSearchTerm(searchTerm);
});
    function clearList() {
        $('#image').empty();
    }
        $('#image').click(function(){
           console.log(nextImg) 
            appendImageToBody(nextImg)
    });
  
});
