
$(document).ready(function() {

  var orderSummary= {
  };
  for(var i = 0; i < $('p[id]').length; i++){
    orderSummary[$('p[id]')[i].getAttribute("id")] = {

    };
    orderSummary[$('p[id]')[i].getAttribute("id")]['name'] = $('p[class = is-font-item]').eq(i).text();
    orderSummary[$('p[id]')[i].getAttribute("id")]['freq'] = 0;
    orderSummary[$('p[id]')[i].getAttribute("id")]['price'] = parseFloat($("p[id]").eq(i).text() .split("$")[1]);

  }
  console.log('results: ',orderSummary);

  function checkFrequency(){

    var obj = {};
    for(let item in orderSummary){
      //console.log(item, orderSummary[item]);
      if (orderSummary[item]['freq'] != 0){
        obj[item] = orderSummary[item];
      }
    }
    return obj;
  }

  const createOrder = orderObj => {
    console.log(orderObj);
    var html = "";
    var total = 0;
    for (item in orderObj){
      html +=`<div>
                <span>${orderObj[item].name}</span>
                <span>Quantity: ${orderObj[item].freq}</span>
                <span>$${(orderObj[item].price * orderObj[item].freq).toFixed(2)}</span>
              </div>`;
      total += orderObj[item].price * orderObj[item].freq;
    }
    html += `<div>
                <span> BEFORE TAX: $${total.toFixed(2)} </span>
                <span> TAX: $${(total * 0.15).toFixed(2)} </span>
                <span > TOTAL: $<b id="total">${(total * 1.15).toFixed(2)}</b> </span>
              </div>`

    return html;
  };

  $('button[id]').each(function() { //Get elements that have an id=

   $(this).click(function(){

    var index = parseInt(this.getAttribute("id").split(":")[1]);
    if(this.getAttribute('id').includes('add') === true){

      orderSummary[index]['freq'] ++;

      if(orderSummary[index]['freq'] >= 5){
        orderSummary[index]['freq'] = 5;
      }
    }
    else if (this.getAttribute('id').includes('remove') === true){

      orderSummary[index]['freq'] --;

      if(orderSummary[index]['freq'] < 0){
        orderSummary[index]['freq'] = 0;
      }
    }

    $("#result span").remove()
    $("#result").prepend((createOrder(checkFrequency())));



    /*$.ajax({
      method: 'post',
      url: '/restaurant',
      data: {
        items: checkFrequency(),
        total_price: parseFloat($("#total").text())
      }

    }).done(result => console.log(result)) */


    });

  });

  $("#order-now").on('click',function(){



      var finalTotal = 0
      var temp = checkFrequency();

      for(item in temp){
        finalTotal += temp[item].price * temp[item].freq;
      }

      var restoId = window.location.pathname.split('/')[window.location.pathname.split('/').length-1]

      console.log('testing result: ' ,checkFrequency(), finalTotal, restoId);

        $.ajax({
          method: 'post',
          url: '/restaurant',
          data: {
            items: checkFrequency(),
            total_price: finalTotal,
            restaurant_id: restoId
          }
        }).done(result => console.log(result))

    });

  //POST REQUEST FOR ORDER STATUS TABLE: id, customer_id, restaurant_id, items(object), total_price
  // created_at, status, time_to_complite

});
