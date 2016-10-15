// background.js
let flag = false;
let openTabs = [];
let linkStore = "";




// saves links
// and sends historical links
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === 'save') {
            console.log('yo');
            linkStore += request.payload;
            // chrome.runtime.sendMessage(activeTab.id, {'message': 'reload', 'html': linkStore});
            sendResponse({ 'html': linkStore });
        }
    }
)

// opens new tabs with URLs
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "open_new_tab") {
            if (!flag) flag = true;
            else {
                flag = false;
                chrome.tabs.remove(openTabs);
                openTabs = [];
                return;
            }
            for (let i = 0; i < request.url.length; i++) {
                chrome.tabs.create({ "url": request.url[i] }, (tabs) => {
                    openTabs.push(tabs.id)
                });
            }
        }
    }
);
