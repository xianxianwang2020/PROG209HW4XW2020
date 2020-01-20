let fruitArray = [];
let fruit;
let swapArray=[];
//let revserArray=[];


let startScreen =  document.getElementById("startScreen");
let swapScreen =  document.getElementById("swapScreen");
let startList =  document.getElementById("listStart");
let swapList =  document.getElementById("listSwap");
let startbutton=document.getElementById("startbutton");
let swapbutton = document.getElementById("swapbutton");


// define what should happen when click each  button
startbutton.addEventListener("click",start,false);
swapbutton.addEventListener("click",swapHandler,false);

function  start(){

  for (let i=0; i<3;i++)
  {

      fruit=(prompt("Enter THREE TYPE of  Fruit: "+(i+1))).toString();
      fruitArray.push(fruit);
  }

  startbutton.classList.add("displayNone");
  swapbutton.classList.remove("displayInNone");
  swapbutton.classList.add("displayInlineBLock");

  displayHandler();
}

function displayHandler()

 {

  for (let j = 0; j < fruitArray.length; j++ )
   {
      let  li = document.createElement("li");
      let listItem =document.createTextNode( (j+1)+": "+ (fruitArray[j]));

      li.appendChild(listItem);

      startList.appendChild(li);
  }
 }
// window.onload=display;


 function swapHandler()

{
  startScreen.classList.add("displayNone");
  swapScreen.classList.remove("displayNone");
  swapScreen.classList.add("displayBlock");
  
  
  swapArray = fruitArray.map(doswap);
  


  for (let y = 0; y < swapArray.length; y++ )
    {
       let lix = document.createElement("li");
       let listItemx =document.createTextNode( (y+1)+": "+ (swapArray[y]));

       lix.appendChild(listItemx);

       swapList.appendChild(lix);
   }
    
  
}

// window.onload=swapArray;

function doswap(item){
  let firstStr;
  let midStr;
  let lastStr;
  let combinedStr;

//for (let x=0; x<fruitArray.length;x++)
//{
firstStr=item.substr(0,1);
lastStr=item.substr(item.length-1,item.length);
midStr=item.substr(1,item.length-2);

combinedStr=lastStr.concat( midStr,firstStr);
return combinedStr;

//}

}



  