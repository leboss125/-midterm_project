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

  var counterObject = {}; 
  var counter = 0;
  //var ids = new Array();
  $('button[id]').each(function() { //Get elements that have an id=
   //console.log('hello',$(this));
   $(this).click(function(){

    if(this.getAttribute('id').includes('add')===true){
      var arg = parseInt(this.getAttribute("id").split(":")[1]);
      console.log('hello'); 
      console.log(arg); 
      counterObject[arg]=0; 
      counter++;
      if(counter>=5){
        counter = 5;
      }
    }
    else {
        var arg = parseInt(this.getAttribute("id").split(":")[1]);
        console.log('bye'); 
        console.log(arg); 
      counter--;
      if(counter<0){
        counter = 0;
      }
    }
    console.log(counter,this.getAttribute('id'))
  });
   //ids.push($(this).attr(“id”)); //add id to array
  });

console.log(counterObject); 
});
