function open_new_window(location) {
  window.location.href = location;
}


// an array to store the state of the viewed memes
viewedMemes = [];

// the toggleViewed function
function toggleViewed(event) {
  var memeId = $(event.target).closest("tr").data("id");
  var index = viewedMemes.indexOf(memeId);
  
  if (index === -1) {
    viewedMemes.push(memeId);
  } else {
    viewedMemes.splice(index, 1);
  }
  
  $(event.target).closest("tr").toggleClass("viewed");
}