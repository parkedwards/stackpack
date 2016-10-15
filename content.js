
// content.js
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "start") {
      console.log('stacking!');
      let stackLinks = $('a[href^="http://stackoverflow.com"]');
      let stackArray = [];

        
      for (var i = 0; i < stackLinks.length; i++) {
          stackArray.push(stackLinks[i]["href"]);
      }
      
      chrome.runtime.sendMessage({"message": "open_new_tab", "url": stackArray});
    }
  }
);
