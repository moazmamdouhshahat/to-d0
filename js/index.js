var inputdata = document.getElementById('inputdata');
var addtask = document.getElementById('addtask');
var alldata =document.getElementById('alldata');
var Nodata = document.getElementById('Nodata')

function checkTasks(){
  if(alldata.childElementCount ==0 ){
    Nodata.style.display="block";
  }
  else{
    Nodata.style.display="none";
  }
}

// // add now task  the function 
// function addnowtask(){
//     var data = inputdata.value; 
//     console.log(data);
//     var NowDiv = document.createElement('div');
//     NowDiv.classList.add('alert');
//     NowDiv.classList.add('alert-info')
//     NowDiv.classList.add('col-12')
//     NowDiv.classList.add('m-auto')
//     NowDiv.append(data)
//     alldata.append(NowDiv)
//     console.log(NowDiv);
// }
// addtask.addEventListener('click', addnowtask)





//  طريقة اخر لي فكشن
function addnowtask(){
    var data = inputdata.value;
    console.log(data);
    if (data.length>=3 && data.length<=20) {
      var NowDiv = `<div class=" alert alert-info checked"> ${data}
      <button class="btn btn-denger float-right delete" style="margin: -7px; background-color:blue"  > 
           Delet   
      </button>
    </div>`
      
alldata.innerHTML += NowDiv  
checkTasks();
inputdata.value =''

    }
  else{
    window.alert("Task should be Moar Than 3 charcter and Less Than 20 charcter")
  }

}
addtask.addEventListener('click',addnowtask)


// delete tasks
document.addEventListener('click' , (e)=>{

  if(e.target.classList.contains('delete')) {
    e.target.parentElement.remove();
    checkTasks();
  }
  else{

  }
})
// check task 
document.addEventListener('click', (e)=>{
  if(e.target.classList.contains('checked')){
    e.target.classList.toggle('CheckStyle');  
    checkTasks(); 
   }
else{

}
})
