
    // JavaScript code
    
    //  document.getElementById("button1").addEventListener("click", function() {
    //      toggleGraphic("graphic1");
    //    });
  
    //    document.getElementById("button2").addEventListener("click", function() {
    //      toggleGraphic("graphic2");
    //    });
  
    //    document.getElementById("button3").addEventListener("click", function() {
    //      toggleGraphic("graphic3");
    //    });
  
    //    document.getElementById("button4").addEventListener("click", function() {
    //        toggleGraphic("graphic4");
    //      });
  
  
      function toggleGraphic(id) {
        var graphic = document.getElementById(id);
        if (graphic.style.display === "none") {
          graphic.style.display = "block";
        } else {
          graphic.style.display = "none";
        }
      }
  
      // Varsta buttons ids
  const id_varsta = "button1"

  const judet1 = "GALATI"
  const judet2 = "BRAILA"
  const judet3 = "NEAMT"
  const judet4 = "IASI"
  const judet5 = "SUCEAVA"

  const countyNames = [judet1, judet2, judet3, judet4, judet5];
  //const countyIterator = countyNames.values();
  
  // coloane tabel varsta 
  const id_varsta1 = "Sub 25 ani"
  const id_varsta2 = "25 - 29 ani"
  const id_varsta3 = "30 - 39 ani"
  const id_varsta4 = "40 - 49 ani"
  const id_varsta5 = "50 - 55 ani"
  const id_varsta6 = "peste 55 ani"

  const arr_varsta = [id_varsta1, id_varsta2, id_varsta3, id_varsta4, id_varsta5, id_varsta6];
  const arr_tip = []
  const arr_educatie = []
  const arr_mediu = []
  //const varstaIterator = arr_varsta.values();
  
  // Educatie buttons ids
  const id_educatie1 = "fara studii"
  const id_educatie2 = "invatamant primar "
  const id_educatie3 = "invatamant gimnazial "
  const id_educatie4 = "invatamant liceal"
  const id_educatie5 = "invatamant posticeal"
  const id_educatie6 = "invatamant profesional/arte si meserii"
  const id_educatie7 = "invatamant universitar"
  const id_educatie8 = "Total someri, din care: "
  
  // Mediu buttons ids
  const id_mediu1 = "NUMAR TOTAL SOMERI "
  const id_mediu2 = "NUMAR TOTAL SOMERI DIN MEDIUL URBAN "
  const id_mediu3 = "NUMAR SOMERI FEMEI DIN MEDIUL URBAN  "
  const id_mediu4 = "NUMAR SOMERI BARBATI DIN MEDIUL URBAN "
  const id_mediu5 = "NUMAR TOTAL SOMERI DIN MEDIUL RURAL "
  const id_mediu6 = "NUMAR SOMERI FEMEI DIN MEDIUL RURAL "
  const id_mediu7 = "NUMAR SOMERI BARBATI DIN MEDIUL RURAL "
  const id_mediu8 = "NUMAR TOTAL SOMERI FEMEI  "
  const id_mediu9 = "NUMAR TOTAL SOMERI BARBATI "
  
  // Tip buttons ids
  const id_tip1 = "Numar total someri "
  const id_tip2 = "Numar total someri femei  "
  const id_tip3 = "Numar total someri barbati  "
  const id_tip4 = "Numar  someri indemnizati  "
  const id_tip5 = "Numar someri neindemnizati "
  const id_tip6 = "Rata somajului (%)  "
  const id_tip7 = "Rata somajului Feminina (%)  "
  const id_tip8 = "Rata somajului Masculina (%)  "
  
  // Tip buttons 
  var tip1 = document.getElementById(id_tip1);
  var tip2 = document.getElementById(id_tip2);
  var tip3 = document.getElementById(id_tip3);
  var tip4 = document.getElementById(id_tip4);
  var tip5 = document.getElementById(id_tip5);
  var tip6 = document.getElementById(id_tip6);
  var tip7 = document.getElementById(id_tip7);
  var tip8 = document.getElementById(id_tip8);
  
  // Varsta buttons 
  var varsta = document.getElementById(id_varsta);
  
  // Educatie buttons 
  var educatie1 = document.getElementById(id_educatie1);
  var educatie2 = document.getElementById(id_educatie2);
  var educatie3 = document.getElementById(id_educatie3);
  var educatie4 = document.getElementById(id_educatie4);
  var educatie5 = document.getElementById(id_educatie5);
  var educatie6 = document.getElementById(id_educatie6);
  var educatie7 = document.getElementById(id_educatie7);
  var educatie8 = document.getElementById(id_educatie8);
  
  // Mediu buttons
  var mediu1 = document.getElementById(id_mediu1);
  var mediu2 = document.getElementById(id_mediu2);
  var mediu3 = document.getElementById(id_mediu3);
  var mediu4 = document.getElementById(id_mediu4);
  var mediu5 = document.getElementById(id_mediu5);
  var mediu6 = document.getElementById(id_mediu6);
  var mediu7 = document.getElementById(id_mediu7);
  var mediu8 = document.getElementById(id_mediu8);
  var mediu9 = document.getElementById(id_mediu9);
  
  //Legend text 
  var legend1 = document.getElementById("legend1");
  var legend2 = document.getElementById("legend2");
  var legend3 = document.getElementById("legend3");
  var legend4 = document.getElementById("legend4");
  var legend5 = document.getElementById("legend5");
  var legend6 = document.getElementById("legend6");
  
  // Colors code for map coloring
  var colors = ['#b9b9b9', '#ffa6a9','#cc6674', '#992038','#60000e', '#1a0105']

  var varstaFilds = [id_varsta1, id_varsta2, id_varsta3, id_varsta4, id_varsta5, id_varsta6]
  var mediuFilds = [id_mediu1, id_mediu1, id_mediu1, id_mediu1, id_mediu1, id_mediu1]
  

// toogle switch pentru alegerea graficului
  // var checkInput = document.getElementById('check');
  // var on = document.getElementsByClassName('on');
  // var off = document.getElementsByClassName('off');

  // checkInput.addEventListener("click", function(){
  // if (checkInput.checked == true) {
  //   on[0].style.color="black";
  //   off[0].style.color="#253b52";
  // } else {
  // on[0].style.color="#253b52";
  //   off[0].style.color="black";
  // }
  // })
  
  // slide range
  const rangeInput = document.querySelectorAll("input");
  
  // Varsta buttons
  varsta.addEventListener("click", function() { full(rangeInput[0].value, rangeInput[1].value ,  "/varsta", "graphic1")}); 
  // educatie.addEventListener("click", function() { full(rangeInput[0].value, rangeInput[1].value ,  "/educatie", "graphic1")});

  // Educatie submenu buttons
  
  // Mediu submenu buttons
  
  // Tip submenu buttons
  
  
  const values = [];
  var data = {};
  var bigData = {};
  var charts = {};

  function full (month_min, month_max, url, graphicID,){
    // setTimeout(() => {prepare(month_min, month_max, url);
    // createChart(graphicID);}, 1000);
    prepare(month_min, month_max, url, graphicID);
  }
  
  
  function prepare(month_min, month_max, url, graphicID){

    fetch(url, {
      method: 'GET',
      headers: {  
          'Content-Type': 'application/json',
      }
    
    }).then(response => {

      // Converting received data to JSON
      return response.json();
    }).then(json => {
    
      // Loop through each data
       console.log(json)
      

      if(month_min == month_max){

        for(var i = 0; i < json.length; i++) {
          var product = json[i];
          data = {};
          if(product['JUDET'] != 'TOTAL' && (product['JUDET'] == judet1 || product['JUDET'] == judet2 || product['JUDET'] == judet3 || product['JUDET'] == judet3 || product['JUDET'] == judet4 || product['JUDET'] == judet5) && product['luna'] == month_min)
          {
            //folosteste url pentru a gasi tipul

            switch(url) {
              case '/educatie':
                // code block
                break;
              case '/varsta':
                // code block
                for (var k = 0; k < arr_varsta.length; k++){
                  if (product[arr_varsta[k]]){ 
                    data[arr_varsta[k]] = parseInt(product[arr_varsta[k]]);
                    }
                }
                if (product[arr_varsta[0]]){
                  // console.log(data);
                  bigData[product['JUDET']] = data; //populezi data cu tipul cerut (varsta/educatie/mediu/tip)
                }
                break;
              case '/mediu':
                // code block
                break;
              case '/tip':
                // code block
                break;  
              default:
                // code block
            }
          }
        }
    }else{
        for(var i = 0; i < json.length; i++) {
          var product = json[i];
          if(product['JUDET'] != 'TOTAL' && (product['JUDET'] == judet1 || product['JUDET'] == judet2 || product['JUDET'] == judet3 || product['JUDET'] == judet3 || product['JUDET'] == judet4 || product['JUDET'] == judet5) && product['luna'] == month_min){
              if(product[field]){
                if(data[product['JUDET']] == null){
                  data[product['JUDET']] = parseInt(product[field]); //TO DO creeaza o lista pentri fields prin care sa iterezi si adauga in data 
                }
                else{
                  data[product['JUDET']] += parseInt(product[field]);
                }
              } 
          }
        }
      }



      console.log("datele tale:")
         console.log(bigData)
         createChart(graphicID, bigData);
        
    }).catch(err => {
      console.log(err)
    })
}


 function createChart(chartId, bigData){
  if (chartExists(chartId)){
    const valueExist = charts[chartId];
    valueExist.destroy()
  };

  var ctx = document.getElementById(chartId).getContext('2d');
  var chart = new Chart(ctx, {
      type: 'line',
      data: {
          // labels: varstaFilds,
          datasets: [
              {
                  label: judet1,
                  data: bigData[judet1],
                  borderColor: 'red',
                  fill: false
              },
              {
                label: judet2,
                data: bigData[judet2],
                borderColor: 'blue',
                fill: false
              },
              {
                label: judet3,
                data: bigData[judet3],
                borderColor: 'green',
                fill: false
              },
              {
                label: judet4,
                data: bigData[judet4],
                borderColor: 'yellow',
                fill: false
              },
              {
                label: judet5,
                data: bigData[judet5],
                borderColor: 'black',
                fill: false
              }
          ]
      },
      options: {
          // Configuration options for the line graph
      }
  });
  
  charts[chartId] = chart;
  
}

function chartExists(chartId) {
  return charts.hasOwnProperty(chartId);
}


  var ctx1 = document.getElementById('graphic2').getContext('2d');
  var chart1 = new Chart(ctx1, {
      type: 'line',
      data: {
          labels: ['Sub 25 ani', '25 - 29 ani', '30 - 39 ani', "40 - 49 ani", "50 - 55 ani", "peste 55 ani"],
          datasets: [
              {
                  label: 'Vasrta',
                  data: [1456, 2054, 3001, 2345, 3214, 2111],
                  borderColor: 'rgba(255, 99, 132, 1)',
                  fill: false
              }
          ]
      },
      options: {
          // Configuration options for the line graph
      }
  });

  var ctx2 = document.getElementById('graphic3').getContext('2d');
  var chart2 = new Chart(ctx2, {
      type: 'line',
      data: {
          labels: ['Sub 25 ani', '25 - 29 ani', '30 - 39 ani', "40 - 49 ani", "50 - 55 ani", "peste 55 ani"],
          datasets: [
              {
                  label: 'Vasrta',
                  data: [1456, 2054, 3001, 2345, 3214, 2111],
                  borderColor: 'rgba(255, 99, 132, 1)',
                  fill: false
              }
          ]
      },
      options: {
          // Configuration options for the line graph
      }
  });

  var ctx3 = document.getElementById('graphic4').getContext('2d');
  var chart3 = new Chart(ctx3, {
      type: 'line',
      data: {
          labels: ['Sub 25 ani', '25 - 29 ani', '30 - 39 ani', "40 - 49 ani", "50 - 55 ani", "peste 55 ani"],
          datasets: [
              {
                  label: 'Vasrta',
                  data: [1456, 2054, 3001, 2345, 3214, 2111],
                  borderColor: 'rgba(255, 99, 132, 1)',
                  fill: false
              }
          ]
      },
      options: {
          // Configuration options for the line graph
      }
  });


  
    // Multi select checkbox
  // double range slider end







  
  /*------------------------- Range Slider -------------------------- */
  
  
  // double range slider start
  function collision($div1, $div2) {
    var x1 = $div1.offset().left;
    var w1 = 40;
    var r1 = x1 + w1;
    var x2 = $div2.offset().left;
    var w2 = 40;
    var r2 = x2 + w2;
      
    if (r1 < x2 || x1 > r2) return false;
    return true;
    
  }

 
  
// // slider call

let minRangeValueGap = 0;
const range = document.getElementById("range_track");
const minval = document.querySelector(".minvalue");
const maxval = document.querySelector(".maxvalue");
// const rangeInput = document.querySelectorAll("input");

let minRange, maxRange, minPercentage, maxPercentage;

const minRangeFill = () => {
  range.style.left = (rangeInput[0].value / rangeInput[0].max) * 100 + "%";
};
const maxRangeFill = () => {
  range.style.right =
    100 - (rangeInput[1].value / rangeInput[1].max) * 100 + "%";
};
const MinVlaueBubbleStyle = () => {
  minPercentage = (minRange / rangeInput[0].max) * 100;
  minval.style.left = minPercentage + "%";
  minval.style.transform = `translate(-${minPercentage / 2}%, -100%)`;
};
const MaxVlaueBubbleStyle = () => {
  maxPercentage = 100 - (maxRange / rangeInput[1].max) * 100;
  maxval.style.right = maxPercentage + "%";
  maxval.style.transform = `translate(${maxPercentage / 2}%, 100%)`;
};

const setMinValueOutput = () => {
  minRange = parseInt(rangeInput[0].value);
  minval.innerHTML = rangeInput[0].value;
};
const setMaxValueOutput = () => {
  maxRange = parseInt(rangeInput[1].value);
  maxval.innerHTML = rangeInput[1].value;
};

setMinValueOutput();
setMaxValueOutput();
minRangeFill();
maxRangeFill();
MinVlaueBubbleStyle();
MaxVlaueBubbleStyle();

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    setMinValueOutput();
    setMaxValueOutput();

    minRangeFill();
    maxRangeFill();

    MinVlaueBubbleStyle();
    MaxVlaueBubbleStyle();

    if (maxRange - minRange < minRangeValueGap) {
      if (e.target.className === "min") {
        rangeInput[0].value = maxRange - minRangeValueGap;
        setMinValueOutput();
        minRangeFill();
        MinVlaueBubbleStyle();
        e.target.style.zIndex = "2";
      } else {
        rangeInput[1].value = minRange + minRangeValueGap;
        e.target.style.zIndex = "2";
        setMaxValueOutput();
        maxRangeFill();
        MaxVlaueBubbleStyle();
      }
    }
  });
});