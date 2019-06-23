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

//retrieving all IDs from individual page

console.log("poulet");


$(document).ready(function() {

  var count = {

  }
  var counter = 0;
  //var ids = new Array();
  $('button[id]').each(function() { //Get elements that have an id=
   //console.log('hello',$(this));
   $(this).click(function(){

    if(this.getAttribute('id').includes('add')===true){
      let arg = parseInt(this.getAttribute("id").split(":")[1]);
      //console.log(arg)
      counter++;
      if(counter>=5){
        counter = 5;
      }
    }
    else {
      counter--;
      if(counter<0){
        counter = 0;
      }
    }
    console.log(counter,this.getAttribute('id'))
  });
   //ids.push($(this).attr(“id”)); //add id to array
  });


});
