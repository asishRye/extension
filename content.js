
var uploadButton = document.createElement("BUTTON");
var innerText = document.createTextNode("Upload Resume");
var divElement = document.createElement("div");
var innerCode = `<ul                                style="list-style-type: none;
                                                    -moz-column-count: 5;
                                                    -moz-column-gap: 5px;
                                                    -webkit-column-count: 4;
                                                    -webkit-column-gap: 5px;
                                                    column-count: 5;
                                                    column-gap: 5px;
                                                    font-family: Arial, Helvetica, sans-serif;       
                                                    font-size: 15px;"
                    >
                    <li><input type="checkbox" />Node </li>
                    <li><input type="checkbox" />Go Lang</li>
                    <li><input type="checkbox" />HR </li>
                    <li><input type="checkbox" />Web Dev </li>
                    <li><input type="checkbox" />Flutter </li>
                    <li><input type="checkbox" />Ai </li>
                </ul>`;
divElement.innerHTML = divElement.innerHTML + innerCode;

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
divBlockStyle = `max-height: 35px;
                max-width:500px`;

function addElements() {
    uploadButton.appendChild(innerText);
    document.getElementsByClassName("ha")[0].appendChild(uploadButton);
    document.getElementsByClassName("ha")[0].appendChild(divElement);
    divElement.setAttribute("style", divBlockStyle);
    uploadButton.setAttribute("style", uploadButtonStyle);
    uploadButton.onclick = function () {
        uploadButton.setAttribute("style", uploadButtonClickedStyle);
        uploadButton.innerHTML = "Uploading";
        setTimeout(processFuntion, 2000);
        console.log("Do work here");
    };
}

chrome.runtime.onMessage.addListener(
    function (request, sender, sendResponse) {
        if (request.message === "clicked_browser_action") {
            try {
                addElements();
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