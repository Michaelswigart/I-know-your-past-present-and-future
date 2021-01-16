
var schedulerArray = localStorage.getItem("scheduling") !== null ? JSON.parse(localStorage.getItem("scheduling")) : [];


const currentHour = moment().hour();
var rowBlocks = $(".color");
colorBlocks ();

function colorBlocks() {
 
  for (var i = 0; i < rowBlocks.length; i++) {
 
   var timeBlock = rowBlocks[i];

    if (timeBlock.dataset.time < currentHour) {  
      $(timeBlock).addClass ("past")
        //do something for the past

    } else if (timeBlock.dataset.time > currentHour) {
      $(timeBlock).addClass ("future")
        // do something for the future

    } else {

      $(timeBlock).addClass ("present")
        //do something for present 
    }

  }
}
var saveScheduler = function(){

var tempArry = []
$("#scheduling .row").each(function(){
    var rowTime = $(this).data("time")
    var rowTask = $(this).find("textarea") //div:nth-child(2)
    var rowTaskText = rowTask.val().trim()
    tempArry.push({
        [rowTime]: rowTaskText
    })
})

 localStorage.setItem("scheduling",JSON.stringify(tempArry));



}


// local scheduler   get item
var loadScheduler = function(){
 if (schedulerArray.length === 0 ){return}
 $.each(schedulerArray, function(index, objData){
     var hour = Object.keys(objData)[0];
     var task = Object.values(objData)[0];
     var targetRow = $("#scheduling").find(`[data-time=${hour}]`);
     targetRow.find("textarea").text(task);
 })
}
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// every time user clicked save button

   

// function backgroundUpdate() {
//      var currentTime = moment().hours() (currentTime)    (".time-block").each(function(){ var id = $(this).attr("id") 

//       if (id < currentTime) { $(this).addClass("past") } else if(id === currentTime) 
//       {  $(this).addClass("present") }
//        else  { $(this).addClass("future")}  

// })}

$(".saveBtn").on("click",saveScheduler);
 
 loadScheduler();