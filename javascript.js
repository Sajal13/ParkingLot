var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
};

console.log(`hi alien`);
console.log(localStorage);
showData();

  let addCarBtn=document.getElementById(`addCarBtn`);
  addCarBtn.addEventListener(`click`,function(){
    
let ownerNameInput=document.getElementById(`ownerNameInput`);
let carNameInput=document.getElementById(`carNameInput`);
let liscenceNumberInput=document.getElementById(`liscenceNumberInput`);
let entryDateInput =document.getElementById(`entryDateInput`);
let exitDateInput=document.getElementById(`exitDateInput`);
let data=localStorage.getItem("data");
let dataArray;
let dataObject={
    ownerName:ownerNameInput.value,
    carName:carNameInput.value,
    liscenceNumber:liscenceNumberInput.value,
    entryDate:entryDateInput.value,
    exitDate:exitDateInput.value
    };
if(data==null){
    dataArray=[];
}
else{
    dataArray=JSON.parse(data);
}
dataArray.push(dataObject);
localStorage.setItem("data",JSON.stringify(dataArray));
showData();

  });




  

    function showData(){
    let data=localStorage.getItem("data");
    let dataArray;
    if(data==null){
        dataArray=[];
    }
    else{
        dataArray=JSON.parse(data);
    }
    localStorage.setItem("data", JSON.stringify(dataArray));
    let html=`
   
    <tr id="carOutputHeadingRow">
    <th class="carOutputHeading">Car Owner</th>
    <th class="carOutputHeading">Name</th>
    <th class="carOutputHeading">Car no.</th>
    <th class="carOutputHeading">Entry Date</th>
    <th class="carOutputHeading">Exit Date</th>
    <th class="carOutputHeading">Action</th>    
    
</tr>

    `;
    Array.from(dataArray).forEach(function(element, index){
        html+=`
        <tr class="dataLine" id="data${index+1}">
        <td class="dataOutput">${element.ownerName}</td>
        <td class="dataOutput">${element.carName}</td>
        <td class="dataOutput">${element.liscenceNumber}</td>
        <td class="dataOutput">${element.entryDate}</td>
        <td class="dataOutput">${element.exitDate}</td>
        <td class="dataOutput">
        <button id="delBtn" onclick="deleteData(${index}) ">Delete</button>
        </td>
        </tr>
        <style>
        
            .dataOutput{
                border: 2px solid black;
              text-align:center;
            }
            #delBtn img{
                width: 30px;
                height: 30px;
                background-color:white;
            }

        </style>
        
         `;
        let showingData=document.getElementById(`showingData`);
        if(dataArray!=0){
            showingData.innerHTML=html;
        }
        else{
            showingData.innerHTML=`ADD A CAR HISTORY`;
        }
    });
    };





    function deleteData(index){
        let data=localStorage.getItem("data");
        let dataArray;
        if(data==null){
            dataArray=[];
        }
        else{
            dataArray=JSON.parse(data);
        }
     dataArray.splice(index,1);
     localStorage.setItem("data",JSON.stringify(dataArray));
 location.reload();

    };





    function srchItem(){
        let inputSearch=document.getElementById(`inputSearch`);

        let z=document.querySelectorAll(`.dataLine`);
    
                  Array.from(z).forEach(function(elem,ind){
                      let text=elem.innerText;
                      if(text.includes(inputSearch.value)){
                            document.getElementById(`data${ind+1}`).style.backgroundColor=`lightblue`;
                        }
                      else{
                            document.getElementById(`data${ind+1}`).style.display=`none`;
                        }
                      
                    });
                    
    };
                
    //Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};
