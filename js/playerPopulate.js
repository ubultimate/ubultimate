// Sorts players by number so that they appear from lowest -> highest on website 
// CopyRight - Big Rona <3
function customSortByNumber(fst,snd){
    let fstVal = fst["Number"];
    let sndVal = snd["Number"];
    if(fstVal > sndVal){
        return -69;
    } else if(fstVal < sndVal){
        return 420;
    } else{
        return 0;
    }
}

// Gets player data from JSON file and send data to populatePlayers function
async function playerData() {
    // Gets data from JSON
    const requestURL = 'https://ubultimate.github.io/ubultimate/test.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const playerData = await response.json();
    playerData.sort(customSortByNumber);

    // Loops through JSON object and extracts items
    for(let i in playerData) {
        let currentPlayer = playerData[i];
        let currentPlayerName = currentPlayer['Name'];
        let currentPlayerLoc = currentPlayer['Location'];
        let currentPlayerPos = currentPlayer['Position'];
        let currentPlayerNum = convertNumbers(currentPlayer['Number']);
        let currentPlayerImg = currentPlayer['imgURL'];
        let currentPlayerFlag = currentPlayer['Redflag'];
        
        // Sends data to populate the players roster which will show players cards/profiles
        populatePlayers(currentPlayerName, currentPlayerLoc, currentPlayerPos, currentPlayerNum, currentPlayerImg, currentPlayerFlag);
    }
}


// Creates and shows single card for the player
function populatePlayers(inputName, inputHome, inputPos, inputNum, inputImg, inputFlag){
    // TODO: create default falues just incase they don't input anything

    // This repeatText variable is the templete/format of the player card.
    const repeatText = "<div id='div1' class='u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1'> <div id='div2' class='u-container-layout u-similar-container u-container-layout-1'> <img id='img1' class='u-expanded-width u-image u-image-round u-radius-20 u-image-1' data-image-width='598' data-image-height='598'/> <p id='p1' class='u-align-left u-text u-text-grey-30 u-text-3'>"+ inputHome +"</p><h3 id='p2' class='u-align-left u-text u-text-default u-text-palette-2-base u-text-4'>" + inputName + "</h3> <p id='p3' class='u-align-left u-text u-text-body-color u-text-5'>#" + inputNum +"</p> <p id='p4' class='u-align-left u-text u-text-body-color u-text-5'>📍: " + inputPos + "</p> <p id='p5' class='u-align-left u-text u-text-body-color u-text-5'>🚩: " + inputFlag + "</p></div></div>"
    
    // Adds the new card to the file
    document.getElementById('enterHere').outerHTML += repeatText;
    document.getElementById('img1').src = inputImg.toString();
}


// Loops and converts int numbers to emojis
function convertNumbers(inputNum) {
    let returnStr = "";
    
    for(let i in inputNum.toString()){
        returnStr += convertEmojiNum(inputNum[i]);
    }
    return returnStr;
}

// Switch case to converts int to emoji
function convertEmojiNum(inputNum) {
    if (typeof inputNum == typeof "String") { 
        switch(inputNum) {
            case "0":
                return "0️⃣";
            case "1":
                return "1️⃣";
            case "2":
                return "2️⃣";
            case "3":
                return "3️⃣";
            case "4":
                return "4️⃣";    
            case "5":
                return "5️⃣";
            case "6":
                return "6️⃣";
            case "7":
                return "7️⃣";
            case "8":
                return "8️⃣";
            case "9":
                return "9️⃣";
        }
    } else {
        return "Elsa You Suck at website stuff";
    }
}

playerData();