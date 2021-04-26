chrome.browserAction.onClicked.addListener(function(tab){
    chrome.tabs.query({active:true, currentWindow:true},funtion(tabs){
        var activeTabs = tabs[0]
        chrome.tabs.sendMessage(activeTab.id, {"message":"clicked_browser_action"})

    })
})