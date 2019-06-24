
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
      console.log(item, orderSummary[item]);
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
                <span class="is-trial-font">${orderObj[item].name}</span>
                <span class="is-trial-font">$${round(orderObj[item].price * orderObj[item].freq)}</span>
                <span class="is-trial-font is-numberCircle"> ${orderObj[item].freq}</span>
              </div>`;
      total += orderObj[item].price * orderObj[item].freq;
    }
    html += `<div>
                <span class="is-trial-font"> BEFORE TAX: $${round(total)} </span>
                <span class="is-trial-font"> TAX: $${round(total*0.15)} </span>
                <span class="is-trial-font"> <b>TOTAL<b>: $${round(total*1.15)} </span>
              </div>`

    return html;
  };

  function round(number) {
    return Math.round(number * 100) / 100;
  }



  $('button[id]').each(function() { //Get elements that have an id=

   $(this).click(function(){

    var index = parseInt(this.getAttribute("id").split(":")[1]);
    if(this.getAttribute('id').includes('add')===true){

      orderSummary[index]['freq'] ++;

      if(orderSummary[index]['freq'] >=5){
        orderSummary[index]['freq'] = 5;
      }
    }
    else if (this.getAttribute('id').includes('remove')===true){
      orderSummary[index]['freq'] --;

      if(orderSummary[index]['freq'] < 0){
        orderSummary[index]['freq'] = 0;
      }
    }
    console.log(orderSummary);

    $("#result span").remove()
    $("#result").prepend((createOrder(checkFrequency())));
    });

  });

});
