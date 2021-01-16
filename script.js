
 //var hour_id = this.previousElementSibling.id;
  //var hour_text = this.previousElementSibling.value;
  


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
    var rowTask = $(this).find("textarea")  //div:nth-child(2)
    var rowTaskText = rowTask.text()
    tempArry.push({
        [rowTime]: rowTaskText
    })
})

 localStorage.setItem("scheduling",JSON.stringify(tempArry));

let here = ["nine", "ten","eleven","twelve","thirteen","fourteen","fifteen","sixteen","seventeen" ]

}
//  var getMore = localStorage.getItem("scheduling");


// local scheduler   get item
var loadScheduler = function(){

}
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// every time user clicked save button


$("nine").val(localStorage.getItem("9"));   

function backgroundUpdate() {
     var currentTime = moment().hours() (currentTime)    (".time-block").each(function(){ var id = $(this).attr("id") 

      if (id < currentTime) { $(this).addClass("past") } else if(id === currentTime) 
      {  $(this).addClass("present") }
       else  { $(this).addClass("future")}  

})}

// (".saveBtn").on('click', function(){
//     var intel = $(this).siblings(".description").val()
//      var time = $(this).parent().attr("id") localStorage.setItem(time, intel) }
     
//      )[i]
// $("#10 .description").val(localStorage.getItem("10"))
 