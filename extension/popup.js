chrome.webRequest.onSendHeaders.addListener(
        function(details) {
         chrome.extension.getBackgroundPage().console.log(details.url, details.requestHeaders);
         //var a = new XMLHttpRequest(details.requestHeaders);
         //a.send();
         //a.open("POST", details.url, true);

          //return;
        },
        {
    urls: ['http://*/*','https://*/*']
}, ['requestHeaders']
        );