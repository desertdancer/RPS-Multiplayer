$("#addtrain").on("click",function(){
event.preventDefault()
var trainName=$("#trainName").val()
var destination=$("#destination").val()
var firstTrainTime=$("#firstTrainTime").val()
var frequency=$("#frequency").val()
console.log(trainName, destination, firstTrainTime,frequency)
})