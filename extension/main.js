//console.log("hey ");
var queueGen = {


loadQueue : function(){
console.log(localStorage.length+1);
var url = "";
  for (var i = 0; i < localStorage.length; i++){
  	url = localStorage.getItem(localStorage.key(i));
    document.body.innerHTML += url + '</br>';

    //$('#listReq').append("<li><a href='"+url+"'><span class='tab'>"+url+"</span></a></li>");
    }
}
};

    document.addEventListener('DOMContentLoaded', function () {
  queueGen.loadQueue();
});

 