
// injects hover.js
function launchHover(tab) {
  chrome.tabs.executeScript(tab.ib, {
    file: 'hover.js'
  });
  window.close();
}

// Send a message to the active tab
function send(tab) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    var activeTab = tabs[0];
    chrome.tabs.sendMessage(activeTab.id, { "message": "start" });
  });
  window.close();
};


function save(tab) {
  chrome.tabs.query({ 'active': true, 'lastFocusedWindow': true }, function (tabs) {
    var currentURL = tabs[0].url;
    var currentURLanchor = `<p><a href="${currentURL}" target="_this">link!</a></p>`
    // document.getElementById('main').innerHTML = document.getElementById('main').innerHTML + currentURLanchor;
    
    chrome.runtime.sendMessage({ 'message': 'save', 'payload': currentURLanchor }, function (response) {
      console.log('ayo');
      document.getElementById('main').innerHTML = document.getElementById('main').innerHTML + response.html;
    });
  });
};


// event listeners on popup.html
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById('btn').addEventListener('click', send);
  document.getElementById('save').addEventListener('click', save);
  document.getElementById('hover').addEventListener('click', launchHover);

});


