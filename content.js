
chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            var x = document.createElement("BUTTON");
            var t = document.createTextNode("Upload Resume");
            x.appendChild(t);
            document.body.appendChild(x);

        }
    }
);

