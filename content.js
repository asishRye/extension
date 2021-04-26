
var uploadButton = document.createElement("BUTTON");
var innerText = document.createTextNode("Upload Resume");

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            uploadButton.appendChild(innerText);
            document.getElementsByClassName("ha")[0].appendChild(uploadButton);
            uploadButton.onclick = function () {
                console.log("Do work here");
            };
        }
    }
);
