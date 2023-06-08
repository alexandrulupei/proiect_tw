
var varsta1 = document.getElementById("Sub 25 ani");
var varsta2 = document.getElementById("25 - 29 ani");
var button2 = document.getElementById("button2");
var button3 = document.getElementById("button3");
var button4 = document.getElementById("button4");
var colors = ['#b9b9b9', '#ffa6a9','#cc6674', '#992038','#60000e', '#1a0105']

// slide range
const rangeInput = document.querySelectorAll("input");

// "Sub 25 ani"
// "25 - 29 ani"
// "30 - 39 ani"
// "40 - 49 ani"
// "50 - 55 ani"
// "peste 55 ani"

varsta1.addEventListener("click", function() {
    colourCountries2("Sub 25 ani", rangeInput[0].value, "/varsta");
    console.log(rangeInput[0].value);
});

varsta2.addEventListener("click", function() {
    colourCountries2("Sub 25 ani", "12", "/varsta");
});

button3.addEventListener("click", function() {
    alert("Button 3 clicked!");
});

button4.addEventListener("click", function() {
    alert("Button 4 clicked!");
});



function colourCountries2(field, month, url){

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
    var data = {}
    for(var i = 0; i < json.length; i++) {
        var product = json[i];
        if(product['JUDET'] != 'TOTAL' &&  product['luna'] == month ){
            data[product['JUDET']] = parseInt(product[field]);
            // console.log(data[product['JUDET]])
            // console.log(json[i])
            // console.log(product['JUDET'])
            // colourCountry(product['JUDET'], 3);
        }
    }
    process_data(data);
        
    }).catch(err => {
    console.log(err)
    })
}

function process_data(data){
    console.log(data)
    var max = -Infinity;
    var min = Infinity;
    for(var county in data){
        if(data[county] > max){
            max = data[county];
        }
        if(data[county] < min){
            min = data[county];
        }
    }
    var valueRange = (min - max) / 5;

    for(var county in data){
        var colorIndex = Math.abs(Math.floor((data[county] - min) / valueRange));
        console.log(min, max)
        console.log(colorIndex)
        console.log(data[county])
        colourCountry(county, colors[colorIndex]);
    }
}





function colourCountry(name, colour) {
    var country = document.getElementById(name);
    country.style.fill = colour;
    // var oldClass = country.getAttributeNS(null, 'class');
    // var newClass = oldClass + ' colour' + colour;
    // country.setAttributeNS(null, 'class', newClass);
}



// function displayName(name) {
//     document.getElementById('country-name').firstChild.data = name;
// }

// var slider = document.getElementById("myRange");
// var output = document.getElementById("demo");
// output.innerHTML = slider.value;

// slider.oninput = function() {
//   output.innerHTML = this.value;
// }



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
// double range slider end