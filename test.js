// document.getElementById('btn').addEventListener('click', event => {clickFunc()});

async function playerData() {
    const requestURL = 'https://ubultimate.github.io/ubultimate/test.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const playerData = await response.json();

    for(let i in playerData) {
        let currentPlayer = playerData[i];
        let currentPlayerName = currentPlayer['Name'];
        let currentPlayerLoc = currentPlayer['Location']
        let currentPlayerPos = currentPlayer['Position']
        let currentPlayerNum = currentPlayer['Number']
        let currentPlayerImg = currentPlayer['imgURL']
        let currentPlayerFlag = currentPlayer['Redflag']

        populatePlayers(currentPlayerName, currentPlayerLoc, currentPlayerPos, currentPlayerNum, currentPlayerImg, currentPlayerFlag);
    }
} // End Function - getData 


function populatePlayers(inputName, inputHome, inputPos, inputNum, inputImg, inputFlag){
    
    const repeatText = "<div id='div1' class='u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1'> <div id='div2' class='u-container-layout u-similar-container u-container-layout-1'> <img id='img1' class='u-expanded-width u-image u-image-round u-radius-20 u-image-1' data-image-width='598' data-image-height='598'/> <p id='p1' class='u-align-left u-text u-text-grey-30 u-text-3'>"+ inputHome +"</p><h3 id='p2' class='u-align-left u-text u-text-default u-text-palette-2-base u-text-4'>" + inputName + "</h3> <p id='p3' class='u-align-left u-text u-text-body-color u-text-5'>#" + inputNum +"</p> <p id='p4' class='u-align-left u-text u-text-body-color u-text-5'>📍:" + inputPos + "</p> <p id='p5' class='u-align-left u-text u-text-body-color u-text-5'>🚩:" + inputFlag + "</p></div></div>"
    document.getElementById('enterHere').outerHTML += repeatText;
    document.getElementById('img1').src = inputImg;
} // End function - test



playerData();


function stuff(){
    const imageUrl = "https://resizing.flixster.com/KZNkDNclEpm3XM2Aket8wTeVd9g=/300x300/v2/https://flxt.tmsimg.com/assets/41469_bu.jpg";

    
    // var val = document.getElementById('imagename').value,
    //     src = 'http://webpage.com/images/' + val +'.png',
    //     img = document.createElement('img');

    // img.src = src;
    // document.body.appendChild(img);
    // }


}


