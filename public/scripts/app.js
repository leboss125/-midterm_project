// $(() => {
//   $.ajax({
//     method: "GET",
//     url: "/api/users"
//   }).done((users) => {
//     for(user of users) {
//       $("<div>").text(user.name).appendTo($("body"));
//     }
//   });;
// });



var order = {

}


$(document).ready(function() {

  console.log();
  document.getElementById('add').addEventListener("click", (event) => {
    var totalCount = $(".counter").text();
  console.log(totalCount);
    totalCount++;
    $(".counter").text(totalCount);
  });

  document.getElementById('remove').addEventListener("click", (event) => {
    totalCount--;
    $(".counter").text(totalCount);
  });


});

/*
var totalCount;

document.getElementById('add-tweet').children[0].addEventListener("input", (event) => {
    var totalCount = 140 - event.target.value.length;
    $(".counter").text(totalCount);
  });
*/
