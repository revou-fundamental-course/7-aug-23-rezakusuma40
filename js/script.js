document.addEventListener('DOMContentLoaded', function () {
    const areasection = document.getElementById('area-section');
    const perimetersection = document.getElementById('perimeter-section');
    const areabuttons = document.getElementById('area-buttons');
    const perimeterbuttons = document.getElementById('perimeter-buttons');
    const arearesult = document.getElementById('area-result');
    const perimeterresult = document.getElementById('perimeter-result');
    const gotopbtn = document.getElementById('toArea');
    const gotoabtn = document.getElementById('toPerimeter');

    gotopbtn.addEventListener('click', function () {
      // Toggle the visibility of sections
        areasection.style.display = areasection.style.display === 'none' ? 'block' : 'none';
        perimetersection.style.display = perimetersection.style.display === 'none' ? 'block' : 'none';
        areabuttons.style.display = areabuttons.style.display === 'none' ? 'block' : 'none';
        perimeterbuttons.style.display = perimeterbuttons.style.display === 'none' ? 'block' : 'none';
        arearesult.style.display = arearesult.style.display === 'none' ? 'block' : 'none';
        perimeterresult.style.display = perimeterresult.style.display === 'none' ? 'block' : 'none';
    });

    gotoabtn.addEventListener('click', function () {
        // Toggle the visibility of sections
        areasection.style.display = areasection.style.display === 'none' ? 'block' : 'none';
        perimetersection.style.display = perimetersection.style.display === 'none' ? 'block' : 'none';
        areabuttons.style.display = areabuttons.style.display === 'none' ? 'block' : 'none';
        perimeterbuttons.style.display = perimeterbuttons.style.display === 'none' ? 'block' : 'none';
        arearesult.style.display = arearesult.style.display === 'none' ? 'block' : 'none';
        perimeterresult.style.display = perimeterresult.style.display === 'none' ? 'block' : 'none';
        });
});

function hasilLuas() {
    let tinggi = document.getElementById("height-input").value
    let alas = document.getElementById("base-input").value
    if(tinggi == '' || alas == ''){
        alert('tinggi dan alas tidak boleh kosong')
    } else if (parseFloat(tinggi) <= 0 || parseFloat(alas) <= 0){
        alert('tinggi dan alas harus bilangan positif')
    } else {
        let luas = parseFloat(tinggi)*parseFloat(alas)
        const trimmedResult = luas.toFixed(2).replace(/\.?0+$/, '');
        document.querySelector("#area-result").innerHTML=trimmedResult
    }
}

function hasilKeliling() {
    let side_a = document.getElementById("a-input").value
    let side_b = document.getElementById("b-input").value
    let side_c = document.getElementById("c-input").value
    if(side_a == '' || side_b == '' || side_c == ''){
        alert('panjang sisi tidak boleh kosong')
    } else if (parseFloat(side_a) <= 0 || parseFloat(side_b) <= 0 || 
    parseFloat(side_c) <= 0){
        alert('panjang sisi harus bilangan positif')
    } else if (parseFloat(side_a)>=parseFloat(side_b)+parseFloat(side_c) || 
    parseFloat(side_b)>=parseFloat(side_a)+parseFloat(side_c) || 
    parseFloat(side_a)+parseFloat(side_b)<=parseFloat(side_c)){
        alert('panjang suatu sisi harus kurang dari panjang total dua sisi lainnya')
    } else {
        let keliling = parseFloat(side_a)+parseFloat(side_b)+parseFloat(side_c)
        const trimmedResult = keliling.toFixed(2).replace(/\.?0+$/, '');
        document.querySelector("#perimeter-result").innerHTML=trimmedResult
    }
}

function hapusArea() {
  // Reset input field and result
  let heightInput=document.getElementById("height-input");
  if (heightInput.value!="") {
    heightInput.value="";
  }
  let baseInput=document.getElementById("base-input");
  if (baseInput.value!="") {
    baseInput.value="";
  }
  document.querySelector("#area-result").innerHTML="0";
}

function hapusPerimeter() {
  let aInput=document.getElementById("a-input");
  if (aInput.value!="") {
    aInput.value="";
  }
  let bInput=document.getElementById("b-input");
  if (bInput.value!="") {
    bInput.value="";
  }
  let cInput=document.getElementById("c-input");
  if (cInput.value!="") {
    cInput.value="";
  }
  document.querySelector("#perimeter-result").innerHTML="0";
}

// document.getElementsByTagName("input").addEventListener('keydown',
// function (event) {
//     // Prevent the minus key (-) from being input
//     if (event.key === '-') {
//       event.preventDefault();
//     }
//   });

// document.getElementById("display").addEventListener('input',
// function() {
//     let chars = /^(\d)*(\.)?([0-9]{1})?$/g
// })