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
var idArray = [];
$('div').each(function () {
    idArray.push(this.id);
});

console.log(isArray); 