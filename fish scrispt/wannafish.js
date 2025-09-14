document.getElementsByClassName("fishbutton");
let fishDisplay = document.getElementById("sourcesDisp"); let moneyDisplay = document.getElementById("fishernetworth")
let fishtext1 = document.getElementById("landfish1text"); let fishtext2 = document.getElementById("landfish2text")
let fishtext3 = document.getElementById("landfish3text"); let fishtext4 = document.getElementById("landfish4text")
let fishtext5 = document.getElementById("landfish5text"); let fishtext6 = document.getElementById("landfish6text")

let lands = parseInt(localStorage.getItem("waterLands")) || 2
let land1Lucktier = parseInt(localStorage.getItem("land1luck")) || 1; let land2Lucktier = parseInt(localStorage.getItem("land2luck")) || 1
let land3Lucktier = parseInt(localStorage.getItem("land3luck")) || 1; let land4Lucktier = parseInt(localStorage.getItem("land4luck")) || 1
let land5Lucktier = parseInt(localStorage.getItem("land5luck")) || 1; let land6Lucktier = parseInt(localStorage.getItem("land6luck")) || 1
let fishes = parseInt(localStorage.getItem("fishes")) || 0; let money = parseInt(localStorage.getItem("dollars")) || 0 //important currency
let fishingLand1 = false; let fishingLand2 = false; let fishingLand3 = false; let fishingLand4 = false; let fishingLand5 = false; let fishingLand6 = false
let fishtime = [25];
const luckchanceTier1 = [0, 1, 0, 4, 0 ,3, 4, 0, 0]
const luckchanceTier2 = [7, 0, 3, 1, 0, 0, 2, 8, 3, 0]
const luckchanceTier3 = [4, 1, 9, 4, 12, 0, 7, 0, 0, 8]
const luckchanceTier4 = [2, 16, 11, 9, 14, 19, 4, 13]
let land1Timetofish; let land2Timetofish; let land3Timetofish; let land4Timetofish; let land5Timetofish; let land6Timetofish
//all of this is for the fishing
function landfish1() {
    if (fishingLand1 == false) {
        fishingLand1 = true; //yeah because i know you'll try to spam the function, you...        creature...
        fishtext1.textContent = "land is fishing right now"
        land1Timetofish = setInterval(() => {
            for (i = 0; i < land1Lucktier; i++) {
                let currentfishtime = fishtime[0]
                fishchanceland();
                console.log("hi")
                if (currentfishtime == 0) {
                    clearInterval(land1Timetofish); fishingLand1 = false; fishtext1.textContent = "no bait is on the land"
                    break
                }
            } textDisplay(); savefish();
        }, 1000)
    } else {console.warn("the function is already active bro, stop")}
}
function landfish2() { //huh...
    if (fishingLand2 == false) {
        fishingLand2 = true; fishtext2.textContent = "land is fishing right now"
        land2Timetofish = setInterval(() => {
            for (i = 0; i = land1Lucktier; i++) { //i dont like loops that much
                let currentfishtime = fishtime[0] //they are just hard to understand
                if (currentfishtime == 0) {
                    clearInterval(land2Timetofish); fishingLand2 = false; fishtext2.textContent = "no bait is on the land"
                    break
                }
                fishchanceland();
            } textDisplay(); savefish();
        }, 1000)
    } else {console.warn("the function is already active bro, stop")}
}
function landfish3() {
    if (lands >= 3 && lands <= 6) { // if you actually own this land, you can fish; else, don't
        if (fishingLand3 == false) {
            fishingLand3 = true; fishtext3.textContent = "land is fishing right now"
            land3Timetofish = setInterval(() => {
                for (i = 0; i < land1Lucktier; i++) {
                    let currentfishtime = fishtime[0]
                    if (currentfishtime == 0) {
                        clearInterval(land3Timetofish); fishingLand3 = false; fishtext3.textContent = "no bait is on the land"
                        break
                    }
                    fishchanceland(); break;
                } textDisplay(); savefish();
            }, 1000)
        } else {console.warn("the function is already active bro, stop")}
    } else {window.alert("you don't own this land yet, try buying it on the trading port")} //come back when you're richer
}
function landfish4() {
    if (lands >= 4 && lands <= 6) {
        if (fishingLand4 == false) {
            fishingLand4 = true; fishtext4.textContent = "land is fishing right now"
            land4Timetofish = setInterval(() => {
                for (i = 0; i < land1Lucktier; i++) {
                    let currentfishtime = fishtime[0]
                    if (currentfishtime == 0) {
                        clearInterval(land4Timetofish);
                        fishingLand4 = false;
                        fishtext4.textContent = "no bait is on the land"
                    break;
                }
                fishchanceland(); break;
            } textDisplay(); savefish();
            }, 1000)
        } else {}
    } else {window.alert("you don't own this land yet, try buying it on the trading port")}
}
function landfish5() {
    if (lands >= 5 && lands <= 6) {
        if (fishingLand5 == false) {
            fishingLand5 = true;
            fishtext3.textContent = "land is fishing right now"
            land3Timetofish = setInterval(() => {
                for (i = 0; i < land1Lucktier; i++) {
                    let currentfishtime = fishtime
                    if (currentfishtime == 0) {
                        clearInterval(land5Timetofish); fishingLand5 = false; fishtext5.textContent = "no bait is on the land"
                        break;
                    } 
                    fishchanceland(); break;
                } textDisplay(); savefish();
            }, 1000)
        } else {}
    } else {window.alert("you don't own this land yet, try buying it on the trading port")}
}
function landfish6() {
    if (lands = 6) {
        if (fishingLand6 == false) {
            fishingLand6 = true;
            let fishtime1 = fishtimes[0]; let fishtime2 = fishtimes[1]; let fishtime3 = fishtimes[2]; let fishtime4 = fishtimes[3];
            fishtext3.textContent = "land is fishing right now"
            land3Timetofish = setInterval(() => {
                for (i = 0; i < land1Lucktier; i++) {
                    let currentfishtime = fishtime
                    if (currentfishtime == 0) {
                        clearInterval(land6Timetofish); fishingLand6 = false; fishtext6.textContent = "no bait is on the land"
                        break;
                    }
                    fishchanceland(); break;
                } textDisplay(); savefish();
            }, 1000)
        } else {console.warn("the function is already active bro, stop")}
    } else {window.alert("you got the point at this rate")}
}
function fishchanceland() { //i tecnically dont even know what im doing here
    if ((land1Lucktier || land2Lucktier || land3Lucktier || land4Lucktier || land5Lucktier || land6Lucktier) == 1) {
        const landRoundchance = Math.floor(Math.random() * luckchanceTier1.length)
        const numberpick = luckchanceTier1[landRoundchance]
        if (numberpick != 0) {fishes += 1}
    } else if ((land1Lucktier || land2Lucktier || land3Lucktier || land4Lucktier || land5Lucktier || land6Lucktier) == 2) {
        const landRoundchance = Math.floor(Math.random() * luckchanceTier1.length)
        const numberpick = luckchanceTier1[landRoundchance]
        if (numberpick > 5) {fishes += 2} else if (numberpick != 0) {fishes += 1}   
    } else if ((land1Lucktier || land2Lucktier || land3Lucktier || land4Lucktier || land5Lucktier || land6Lucktier) == 3) {        
        const landRoundchance = Math.floor(Math.random() * luckchanceTier1.length)
        const numberpick = luckchanceTier1[landRoundchance]
        if (numberpick > 10) {fishes += 5} else if (numberpick > 5) {fishes += 3} else if (numberpick != 0) {fishes += 1}   
    } else if ((land1Lucktier || land2Lucktier || land3Lucktier || land4Lucktier || land5Lucktier || land6Lucktier) == 4) {
        const landRoundchance = Math.floor(Math.random() * luckchanceTier1.length)
        const numberpick = luckchanceTier1[landRoundchance]
        if (numberpick > 15) {fishes += 12} else if (numberpick > 10) {fishes += 8} else if (numberpick > 5) {fishes += 4} else if (numberpick != 0) {fishes += 2}           
    }
}
function textDisplay() {
    fishDisplay.textContent = `You have ${fishes} fishes || you currently own ${lands} water lands`
    moneyDisplay.textContent = `You currently have ${money}$`;
}
textDisplay();
const pricerange1 = [68, 74, 71, 69, 65, 74]
const pricerange2 = [289, 281, 265, 276, 284, 273, 279]
const pricerange3 = [843, 815, 852, 860, 858, 842, 872]
function sell50() {
    if (fishes < 50) {
        alert("Not enough fish to sell right now"); return
    }
    let priceselection = Math.floor(Math.random() * pricerange1.length)
    let sellprice = pricerange1[priceselection]
    fishes -= 50; money += sellprice
    textDisplay(); savefish()
}
function sell200() {
    if (fishes < 200) {
        alert("Not enough fishes to sell"); return
    }
    let priceselection = Math.floor(Math.random() * pricerange2.length)
    let sellprice = pricerange2[priceselection]
    fishes -= 200; money += sellprice
    textDisplay(); savefish()
}
function sell600() {
    if (fishes < 600) {
        alert("Do you even have that many?"); return
    }
    let priceselection = Math.floor(Math.random() * pricerange3.length)
    let sellprice = pricerange3[priceselection]
    fishes -= 600; money += sellprice
    textDisplay(); savefish()

}
let landprice = parseInt(localStorage.getItem("waterlandprice")) || 560;
let landpricetext = document.getElementById("newlandtext")
landpricetext.textContent = `Buy land (${landprice})`
function buynewland() {
    if (money < landprice) {
        alert("You don't have enough money right now"); return
    }
    money -= landprice; lands++; landprice *= 4.5;
    savelands(); savefish()
}
function savefish() { //self explanatory
localStorage.setItem("fishes", fishes); localStorage.setItem("dollars", money)
    localStorage.setItem("land1luck", land1Lucktier); localStorage.setItem("land2luck", land2Lucktier)
    localStorage.setItem("land3luck", land3Lucktier); localStorage.setItem("land4luck", land4Lucktier)
    localStorage.setItem("land5luck", land5Lucktier); localStorage.setItem("land6luck", land6Lucktier)
}
function savelands() {
    localStorage.setItem("waterLands", lands); localStorage.setItem("waterlandprice", landprice);
}