
var textColor = function(timeInt,timeElement){
 timeElement
}
var saveScheduler = function(){
var tempArry = []
$("#scheduling .row").each(function(){
    var rowTime = $(this).data("time")
    var rowTask = $(this).find("div:nth-child(2)")
    var rowTaskText = rowTask.text()
    tempArry.push({
        [rowTime]: rowTaskText
    })
})
localStorage.setItem("scheduling",JSON.stringify(tempArry))
}// locil scheduling   get item
var loadScheduler = function(){

}
$("#currentDay").text(moment().format("dddd, MMMM Do"));
// every time user clicked save button
