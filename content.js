
var uploadButton = document.createElement("BUTTON");
var innerText = document.createTextNode("Upload Resume");
uploadButtonStyle = `border-radius: 4px;
                    border-width: 0px;
                    height: 30px;
                    background-color: #4285f4;
                    color: white;
                    `;
uploadButtonClickedStyle = `border-radius: 4px;
                            border-width: 0px;
                            height: 30px;
                            background-color: green;
                            color: white;
                            `;
uploadButtonFailedStyle = `border-radius: 4px;
                            border-width: 0px;
                            height: 30px;
                            background-color: red;
                            color: white;
                            `;

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            try {
                uploadButton.appendChild(innerText);
                document.getElementsByClassName("ha")[0].appendChild(uploadButton);
                uploadButton.setAttribute("style", uploadButtonStyle);
                uploadButton.onclick = function () {
                    uploadButton.setAttribute("style", uploadButtonClickedStyle);
                    uploadButton.innerHTML = "Uploading";
                    setTimeout(processFuntion, 2000);
                    console.log("Do work here");
                };
            }
            catch {
                console.log("Something bad happened :(");
            }

        }
    }
);


function processFuntion() {
    var current = new Date();
    var a = current.getSeconds();
    console.log(a);
    if (a % 2 == 0) {
        uploadButton.setAttribute("style", uploadButtonClickedStyle);
        uploadButton.innerHTML = "Uploaded";
    }
    else {
        uploadButton.setAttribute("style", uploadButtonFailedStyle);
        uploadButton.innerHTML = "Upload Failed";
    }


}