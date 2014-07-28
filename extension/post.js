var statusElem  = document.getElementById('status'),
    state 		= document.getElementById('state');

function online(event) {
  return navigator.onLine;
}

addEvent(window, 'online', online);
addEvent(window, 'offline', online);

chrome.webRequest.onBeforeSendHeaders.addListener(
        function(details) {
          if(navigator.onLine){

          }
          else{
          	//if( details.url.indexOf('?') !== -1 ){
          		regex = /google/;
          		if( regex.test(details.url) ){
          		    console.log("Google");
          		}else{
          			console.log('saving request '+details.url);
          			localStorage.setItem(localStorage.length+1,details.url);
          			chrome.tabs.getCurrent(function(currentTab){
			     	    updateProperties = new Object();
			     	    updateProperties.url = 'offline_cet.htm';
			     	    chrome.tabs.update(currentTab, updateProperties, function() {});
					       });
          		} 

          }
         },
         { urls: ['http://*/*', 'https://*/*'] }, ['requestHeaders']
        );

isOnline();
function isOnline(event) {
  if(navigator.onLine) {
  	console.log("sending "+localStorage.length+" requests ");

  for (var i = 0; i < localStorage.length; i++){
    console.log(localStorage.getItem(localStorage.key(i)));
    updateProperties = new Object();
	updateProperties.url = localStorage.getItem(localStorage.key(i));
    chrome.tabs.create(updateProperties);
    localStorage.removeItem(localStorage.key(i));
}
}
  else
  	console.log("offline");
  setTimeout(isOnline,5000);
}
