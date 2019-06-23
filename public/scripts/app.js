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





  var orderSummary= {
  };
  for(var i = 0; i < $('p[id]').length; i++){
    orderSummary[$('p[id]')[i].getAttribute("id")] = {

    };
    orderSummary[$('p[id]')[i].getAttribute("id")]['name'] = $('p[class]').eq(i).text();
    orderSummary[$('p[id]')[i].getAttribute("id")]['freq'] = 0;
    orderSummary[$('p[id]')[i].getAttribute("id")]['price'] = parseFloat($("p[id]").eq(i).text() .split("$")[1]);

  }
  //console.log('price: ',prices);
  console.log('results: ',orderSummary);


  $('button[id]').each(function() { //Get elements that have an id=

   $(this).click(function(){

    var index = parseInt(this.getAttribute("id").split(":")[1]);
    if(this.getAttribute('id').includes('add')===true){

      //console.log(arg)
      orderSummary[index]['freq'] ++;
      //prices[index] = prices[index] + parseFloat($('p[id]').eq(index).text().split("$")[1]);

      if(orderSummary[index]['freq'] >=5){
        orderSummary[index]['freq'] = 5;
      }
    }
    else if (this.getAttribute('id').includes('remove')===true){
      orderSummary[index]['freq'] --;
      //prices[index] = prices[index] - parseFloat($('p[id]').eq(index).text().split("$")[1]);
      if(orderSummary[index]['freq'] < 0){
        orderSummary[index]['freq'] = 0;
      }
    }
    console.log(orderSummary);
    //console.log(prices);

    var total = 0;
    for(count in orderSummary){
      total = total + orderSummary[count].freq * orderSummary[count].price;
    }

    console.log(total);



  });
   //ids.push($(this).attr(“id”)); //add id to array
  });

});
