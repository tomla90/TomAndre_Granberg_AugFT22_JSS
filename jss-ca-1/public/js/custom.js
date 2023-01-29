function open_new_window(location) {
  window.location.href = location;
}


function toggleViewed(event) {
  $(event.target).closest("tr").toggleClass("viewed");
}
