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


$(document).ready(function() {
  //console.log(parseInt($('button[id]')[1].getAttribute("id").split(":")[1]));


  var counter = {

  }
  for(var i = 0; i < $('button[id]').length; i++){
    console.log("poulet");
    counter[parseInt($('button[id]')[i].getAttribute("id").split(":")[1])] = 0;
  }
  console.log(counter);
  //var counter = 0;


  $('button[id]').each(function() { //Get elements that have an id=

   $(this).click(function(){

    var index = parseInt(this.getAttribute("id").split(":")[1]);
    if(this.getAttribute('id').includes('add')===true){

      //console.log(arg)
      counter[index] ++;
      if(counter[index] >=5){
        counter[index] = 5;
      }
    }
    else {
      counter[index] --;
      if(counter[index] < 0){
        counter[index] = 0;
      }
    }
    console.log(counter);
  });
   //ids.push($(this).attr(“id”)); //add id to array
  });


});
