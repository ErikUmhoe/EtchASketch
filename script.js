
function createGridInitial(){
let container = document.querySelector('#container');
for(var i = 0; i < 16; i++)
  	{
    let div1 = document.createElement('div');
    div1.classList.add('cont-div');
    for(var j = 0; j < 16; j++)
      {
        let div2 = document.createElement('div');
        div2.classList.add('grid-div');
        div1.appendChild(div2);
       
      }
    container.appendChild(div1);
  	}
  }
  createGridInitial();
  $("button").click(function(){$('.grid-div').removeClass("hover")});
   $('.grid-div').hover(function(){$(this).addClass("hover")});
   $("#resize").click(function() {
	var size = prompt("Please enter the size: ");
  size = parseInt(size);
  while(container.firstChild){
  container.removeChild(container.firstChild);
  }
  for(var i = 0; i < size; i++)
  {
  let div1 = document.createElement('div');
    div1.classList.add('cont-div');
    for(var j = 0; j < size; j++)
      {
        let div2 = document.createElement('div');
        div2.classList.add('grid-div');
        div2.style.width = 320/size + "px";
        div2.style.height = 320/size + "px";
        div1.appendChild(div2);
       
      }
    container.appendChild(div1);
  }
    $("button").click(function(){$('.grid-div').removeClass("hover")});
   $('.grid-div').hover(function(){$(this).addClass("hover")});
  
});


   
