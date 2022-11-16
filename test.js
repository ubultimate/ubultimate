// document.getElementById('btn').addEventListener('click', event => {clickFunc()});


async function getData() {
    const requestURL = 'https://ubultimate.github.io/ubultimate/test.json';
    const request = new Request(requestURL);
    const response = await fetch(request);
    const playerData = await response.json();

    for(let i in playerData) {
        // document.getElementById('target').innerHTML+='<tr> <td>'+k+'</td> <td>'+dict[k]+'</td> </tr>';
        i = 1;
        let currentPlayer = playerData[i];
        let currentPlayerName = currentPlayer['Name'];
        let currentPlayerLocation = currentPlayer['Location']
        let currentPlayerPosition = currentPlayer['Position']

        document.getElementById('htmlName').innerText = currentPlayerName;
        document.getElementById('htmlLocation').innerText = currentPlayerLocation;
        document.getElementById('htmlPosition').innerText = currentPlayerPosition;
        }
} // End Function - getData 


function populatePlayers(inputName, inputNum, inputPos, inputHome, inputFlag, inputImg){
    let i = 0 //missing the inputImg because I need to get the fetch feature
        console.log("fyi in the loop")
        const repeatText = "<div id='div1' class='u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1'> <div id='div2' class='u-container-layout u-similar-container u-container-layout-1'> <img id='img1' class='u-expanded-width u-image u-image-round u-radius-20 u-image-1' data-image-width='598' data-image-height='598' src=" + "" + "/> <p id='p1' class='u-align-left u-text u-text-grey-30 u-text-3'>"+ inputHome +"</p><h3 id='p2' class='u-align-left u-text u-text-default u-text-palette-2-base u-text-4'>" + inputName + "</h3> <p id='p3' class='u-align-left u-text u-text-body-color u-text-5'>#" + inputNum +"</p> <p id='p4' class='u-align-left u-text u-text-body-color u-text-5'>📍:" + inputPos + "</p> <p id='p5' class='u-align-left u-text u-text-body-color u-text-5'>🚩:" + inputFlag + "</p></div></div>"
        
        // document.getElementById("hi").style.display = "none";

    for(i = 0; i<3;i++){
        document.getElementById('enterHere').outerHTML += repeatText;
    }
} // End function - test

populatePlayers("shaft", "1️⃣", "hand", "jcc", "sexy", "assets/img/gehRoster/GEH_Shaft.jpg");




















function clickFunc(){
    let show = document.getElementById('htmlName')
    show.outerHTML = "<h1 id='htmlName'>hellow</h1>";
    console.log(show.outerHTML)
    
}




// document.body.onload = addElement;
function addElement(nam, loc, pos) {
    // create a new div element
    const newDiv = document.createElement('div');

    // and give it some content
    const newContent = document.createTextNode('Jack is amazing');

    // add the text node to the newly created div
    newDiv.appendChild(newContent);

    // add the newly created element and its content into the DOM
    const currentDiv = document.getElementById('div1');
    document.body.insertBefore(newDiv, currentDiv);
}


{/* <div id='div1' class='u-align-center u-container-style u-list-item u-radius-20 u-repeater-item u-shape-round u-white u-list-item-1'>
	<div id='div2' class='u-container-layout u-similar-container u-container-layout-1'>
		<img id='img1' class='u-expanded-width u-image u-image-round u-radius-20 u-image-1' data-image-width='598' data-image-height='598' src='assets/img/gehRoster/GEH_Shaft.jpg'/>
		<p id='p1' class='u-align-left u-text u-text-grey-30 u-text-3'>JCC</p>
		<h3 id='p2' class='u-align-left u-text u-text-default u-text-palette-2-base u-text-4'>Shaft</h3>
		<p id='p3' class='u-align-left u-text u-text-body-color u-text-5'>#1️⃣</p>
		<p id='p4' class='u-align-left u-text u-text-body-color u-text-5'>📍: Handler</p>
		<p id='p5' class='u-align-left u-text u-text-body-color u-text-5'>🚩: Gets really exited when high</p>
	</div>
</div> */}