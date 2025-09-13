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
let fishtime = 0;
const fishtimes = [15, 19, 24, 30]
const luckchanceTier1 = [0, 1, 0, 4, 0 ,3, 4, 0, 0]
const luckchanceTier2 = [7, 0, 3, 1, 0, 0, 2, 8, 3, 0]
const luckchanceTier3 = [4, 1, 9, 4, 12, 0, 7, 0, 0, 8]
const luckchanceTier4 = [2, 16, 11, 9, 14, 19, 4, 13]
let land1Timetofish; let land2Timetofish; let land3Timetofish; let land4Timetofish; let land5Timetofish; let land6Timetofish
//all of this is for the fishing
function landfish1() {
    if (fishingLand1 == false) {
        fishingLand1 = true; //yeah because i know you'll try to spam the function, you...        creature...
        let fishtime1 = fishtimes[0]; //this redeclares the timer each activation, so the array is untouched
        let fishtime2 = fishtimes[1]; let fishtime3 = fishtimes[2]; let fishtime4 = fishtimes[3];
        fishtext1.textContent = "land is fishing right now"
        land1Timetofish = setInterval(() => { //idk how can i order all of this shit well, but i hope it's functional
            if (land1Lucktier == 1) {
                fishtime1--;
                const landRoundchance = Math.floor(Math.random() * luckchanceTier1.length); //fish chance
                const numberpick = luckchanceTier1[landRoundchance]; //no, you can't change the rng, you fatass
                if (numberpick != 0) {fishes += 1} //add yummy fish
                if (fishtime1 == 0) {
                    clearInterval(land1Timetofish);
                    fishingLand1 = false;
                    fishtext1.textContent = "no bait is on the land"
                }
            } else if (land1Lucktier == 2) {  //it's pretty much the same on all 4 tiers so stop looking
                fishtime2--; //i know there's an easier way, but i wanna suffer, also i can add specific values on each tier
                const landRoundchance = Math.floor(Math.random() * luckchanceTier2.length);
                const numberpick = luckchanceTier2[landRoundchance];
                if (numberpick > 5) {fishes += 2} else if (numberpick != 0) {fishes += 1}
                if (fishtime2 == 0) {
                    clearInterval(land1Timetofish); fishingLand1 = false; fishtext1.textContent = "no bait is on the land"
                }
            } else if (land1Lucktier == 3) {
                fishtime3--;
                const landRoundchance = Math.floor(Math.random() * luckchanceTier3.length);
                const numberpick = luckchanceTier3[landRoundchance];
                if (numberpick > 10) {fishes += 6} else if (numberpick > 5) {fishes += 3} else if (numberpick != 0) {fishes += 1}
                if (fishtime3 == 0) {
                    clearInterval(land1Timetofish); fishingLand1 = false; fishtext1.textContent = "no bait is on the land"
                }
            } else if (land1Lucktier == 4) {
                fishtime4-- ;
                const landRoundchance = Math.floor(Math.random() * luckchanceTier4.length);
                const numberpick = luckchanceTier4[landRoundchance];
                if (numberpick > 15) {fishes += 12} else if (numberpick > 10) {fishes += 8}
                else if (numberpick > 5) {fishes += 4} else if (numberpick != 0) {fishes += 2}
                if (fishtime4 == 0) {
                    clearInterval(land1Timetofish); fishingLand1 = false; fishtext1.textContent = "no bait is on the land"
                }
            }
            textDisplay(); savefish();
        }, 1000)
    } else {console.warn("the function is already active bro, stop")}
}
function landfish2() {           //oh my god bruh
    if (fishingLand2 == false) { //just skip to line 115, then 323
        fishingLand2 = true;
        let fishtime1 = fishtimes[0]; let fishtime2 = fishtimes[1]; let fishtime3 = fishtimes[2]; let fishtime4 = fishtimes[3];
        fishtext2.textContent = "land is fishing right now"
        land2Timetofish = setInterval(() => {
            if (land2Lucktier == 1) {
                fishtime1--;
                const landRoundchance = Math.floor(Math.random() * luckchanceTier1.length);
                const numberpick = luckchanceTier1[landRoundchance];
                if (numberpick != 0) {fishes += 1}
                if (fishtime1 == 0) {
                    clearInterval(land2Timetofish); fishingLand2 = false; fishtext2.textContent = "no bait is on the land"
                }
            } else if (land2Lucktier == 2) {
                fishtime2--;
                const landRoundchance = Math.floor(Math.random() * luckchanceTier2.length);
                const numberpick = luckchanceTier2[landRoundchance];
                if (numberpick > 5) {fishes += 2} else if (numberpick != 0) {fishes += 1} else {}
                if (fishtime2 == 0) {
                    clearInterval(land2Timetofish); fishingLand2 = false; fishtext2.textContent = "no bait is on the land"
                }
            } else if (land2Lucktier == 3) {
                fishtime3--;
                const landRoundchance = Math.floor(Math.random() * luckchanceTier3.length);
                const numberpick = luckchanceTier3[landRoundchance];
                if (numberpick > 10) {fishes += 6}
                else if (numberpick > 5) {fishes += 3}
                else if (numberpick != 0) {fishes += 1}
                if (fishtime3 == 0) {
                    clearInterval(land2Timetofish); fishingLand2 = false; fishtext2.textContent = "no bait is on the land"
                }
            } else if (land2Lucktier == 4) {
                fishtime4-- ;
                const landRoundchance = Math.floor(Math.random() * luckchanceTier4.length);
                const numberpick = luckchanceTier4[landRoundchance];
                if (numberpick > 15) {fishes += 12} else if (numberpick > 10) {fishes += 8}
                else if (numberpick > 5) {fishes += 4} else if (numberpick != 0) {fishes += 2}
                if (fishtime4 == 0) {
                    clearInterval(land2Timetofish); fishingLand2 = false; fishtext2.textContent = "no bait is on the land"
                }
            }
            textDisplay();
            savefish();
        }, 1000)
    } else {console.warn("the function is already active bro, stop")}
}
function landfish3() {
    if (lands >= 3 && lands <= 6) { // if you actually own this land, you can fish; else, don't
        if (fishingLand3 == false) {
            fishingLand3 = true;
            let fishtime1 = fishtimes[0]; let fishtime2 = fishtimes[1]; let fishtime3 = fishtimes[2]; let fishtime4 = fishtimes[3];
            fishtext3.textContent = "land is fishing right now"
            land3Timetofish = setInterval(() => {
                if (land3Lucktier == 1) {
                    fishtime1--;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier1.length);
                    const numberpick = luckchanceTier1[landRoundchance];
                    if (numberpick != 0) {fishes += 1}
                    if (fishtime1 == 0) {
                        clearInterval(land3Timetofish); fishingLand3 = false; fishtext3.textContent = "no bait is on the land"
                    }
                } else if (land3Lucktier == 2) {
                    fishtime2--;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier2.length);
                    const numberpick = luckchanceTier2[landRoundchance];
                    if (numberpick > 5) {fishes += 2}
                    else if (numberpick != 0) {fishes += 1} else {}
                    if (fishtime == 0) {
                        clearInterval(land3Timetofish); fishingLand3 = false; fishtext3.textContent = "no bait is on the land"
                    }
                } else if (land3Lucktier == 3) {
                    fishtime3--;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier3.length);
                    const numberpick = luckchanceTier3[landRoundchance];
                    if (numberpick > 10) {fishes += 6}
                    else if (numberpick > 5) {fishes += 3}
                    else if (numberpick != 0) {fishes += 1};
                    if (fishtime3 == 0) {
                        clearInterval(land3Timetofish); fishingLand3 = false; fishtext3.textContent = "no bait is on the land"
                    }
                } else if (land3Lucktier == 4) {
                    fishtime4-- ;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier4.length);
                    const numberpick = luckchanceTier4[landRoundchance];
                    if (numberpick > 15) {fishes += 12}
                    else if (numberpick > 10) {fishes += 8}
                    else if (numberpick > 5) {fishes += 4}
                    else if (numberpick != 0) {fishes += 2}
                    if (fishtime4 == 0) {
                        clearInterval(land3Timetofish); fishingLand3 = false; fishtext3.textContent = "no bait is on the land"
                    }
                }
                textDisplay(); savefish();
            }, 1000)
        } else {console.warn("the function is already active bro, stop")}
    } else {window.alert("you don't own this land yet, try buying it on the trading port")} //come back when you're richer
}
function landfish4() {
    if (lands >= 4 && lands <= 6) {
        if (fishingLand4 == false) {
            fishingLand4 = true;
            let fishtime1 = fishtimes[0]; let fishtime2 = fishtimes[1]; let fishtime3 = fishtimes[2]; let fishtime4 = fishtimes[3];
            fishtext4.textContent = "land is fishing right now"
            land4Timetofish = setInterval(() => {
                if (land4Lucktier == 1) {
                    fishtime1--;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier1.length);
                    const numberpick = luckchanceTier1[landRoundchance];
                    if (numberpick != 0) {fishes += 1}
                    if (fishtime1 == 0) {
                        clearInterval(land4Timetofish); fishingLand4 = false; fishtext4.textContent = "no bait is on the land"
                    }
                } else if (land4Lucktier == 2) {
                    fishtime2--;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier2.length);
                    const numberpick = luckchanceTier2[landRoundchance];
                    if (numberpick > 5) {fishes += 2}
                    else if (numberpick != 0) {fishes += 1} else {}
                    if (fishtime == 0) {
                        clearInterval(land4Timetofish); fishingLand4 = false; fishtext4.textContent = "no bait is on the land"
                    }
                } else if (land4Lucktier == 3) {
                    fishtime3--;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier3.length);
                    const numberpick = luckchanceTier3[landRoundchance];
                    if (numberpick > 10) {fishes += 6}
                    else if (numberpick > 5) {fishes += 3}
                    else if (numberpick != 0) {fishes += 1};
                    if (fishtime3 == 0) {
                        clearInterval(land4Timetofish); fishingLand4 = false; fishtext4.textContent = "no bait is on the land"
                    }
                } else if (land4Lucktier == 4) {
                    fishtime4-- ;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier4.length);
                    const numberpick = luckchanceTier4[landRoundchance];
                    if (numberpick > 15) {fishes += 12}
                    else if (numberpick > 10) {fishes += 8}
                    else if (numberpick > 5) {fishes += 4}
                    else if (numberpick != 0) {fishes += 2}
                    if (fishtime4 == 0) {
                        clearInterval(land4Timetofish); fishingLand4 = false; fishtext4.textContent = "no bait is on the land"
                    }
                }
                textDisplay(); savefish();
            }, 1000)
        } else {console.warn("the function is already active bro, stop")}
    } else {window.alert("you don't own this land yet, try buying it on the trading port")}
}
function landfish5() {
    if (lands >= 5 && lands <= 6) {
        if (fishingLand5 == false) {
            fishingLand5 = true;
            let fishtime1 = fishtimes[0]; let fishtime2 = fishtimes[1]; let fishtime3 = fishtimes[2]; let fishtime4 = fishtimes[3];
            fishtext3.textContent = "land is fishing right now"
            land3Timetofish = setInterval(() => {
                if (land5Lucktier == 1) {
                    fishtime1--;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier1.length);
                    const numberpick = luckchanceTier1[landRoundchance];
                    if (numberpick != 0) {fishes += 1}
                    if (fishtime1 == 0) {
                        clearInterval(land5Timetofish); fishingLand5 = false; fishtext5.textContent = "no bait is on the land"
                    }
                } else if (land5Lucktier == 2) {
                    fishtime2--;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier2.length);
                    const numberpick = luckchanceTier2[landRoundchance];
                    if (numberpick > 5) {fishes += 2}
                    else if (numberpick != 0) {fishes += 1} else {}
                    if (fishtime == 0) {
                        clearInterval(land5Timetofish); fishingLand5 = false; fishtext5.textContent = "no bait is on the land"
                    }
                } else if (land5Lucktier == 3) {
                    fishtime3--;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier3.length);
                    const numberpick = luckchanceTier3[landRoundchance];
                    if (numberpick > 10) {fishes += 6}
                    else if (numberpick > 5) {fishes += 3}
                    else if (numberpick != 0) {fishes += 1};
                    if (fishtime3 == 0) {
                        clearInterval(land5Timetofish); fishingLand5 = false; fishtext5.textContent = "no bait is on the land"
                    }
                } else if (land5Lucktier == 4) {
                    fishtime4-- ;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier4.length);
                    const numberpick = luckchanceTier4[landRoundchance];
                    if (numberpick > 15) {fishes += 12}
                    else if (numberpick > 10) {fishes += 8}
                    else if (numberpick > 5) {fishes += 4}
                    else if (numberpick != 0) {fishes += 2}
                    if (fishtime4 == 0) {
                        clearInterval(land5Timetofish); fishingLand5 = false; fishtext5.textContent = "no bait is on the land"
                    }
                }
                textDisplay(); savefish();
            }, 1000)
        } else {console.warn("the function is already active bro, stop")}
    } else {window.alert("you don't own this land yet, try buying it on the trading port")}
}
function landfish6() {
    if (lands = 6) {
        if (fishingLand6 == false) {
            fishingLand6 = true;
            let fishtime1 = fishtimes[0]; let fishtime2 = fishtimes[1]; let fishtime3 = fishtimes[2]; let fishtime4 = fishtimes[3];
            fishtext3.textContent = "land is fishing right now"
            land3Timetofish = setInterval(() => {
                if (land6Lucktier == 1) {
                    fishtime1--;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier1.length);
                    const numberpick = luckchanceTier1[landRoundchance];
                    if (numberpick != 0) {fishes += 1}
                    if (fishtime1 == 0) {
                        clearInterval(land6Timetofish); fishingLand6 = false; fishtext6.textContent = "no bait is on the land"
                    }
                } else if (land6Lucktier == 2) {
                    fishtime2--;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier2.length);
                    const numberpick = luckchanceTier2[landRoundchance];
                    if (numberpick > 5) {fishes += 2}
                    else if (numberpick != 0) {fishes += 1} else {}
                    if (fishtime == 0) {
                        clearInterval(land6Timetofish); fishingLand6 = false; fishtext6.textContent = "no bait is on the land"
                    }
                } else if (land6Lucktier == 3) {
                    fishtime3--;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier3.length);
                    const numberpick = luckchanceTier3[landRoundchance];
                    if (numberpick > 10) {fishes += 6}
                    else if (numberpick > 5) {fishes += 3}
                    else if (numberpick != 0) {fishes += 1};
                    if (fishtime3 == 0) {
                        clearInterval(land6Timetofish); fishingLand6 = false; fishtext6.textContent = "no bait is on the land"
                    }
                } else if (land6Lucktier == 4) {
                    fishtime4-- ;
                    const landRoundchance = Math.floor(Math.random() * luckchanceTier4.length);
                    const numberpick = luckchanceTier4[landRoundchance];
                    if (numberpick > 15) {fishes += 12}
                    else if (numberpick > 10) {fishes += 8}
                    else if (numberpick > 5) {fishes += 4}
                    else if (numberpick != 0) {fishes += 2}
                    if (fishtime4 == 0) {
                        clearInterval(land6Timetofish); fishingLand6 = false; fishtext6.textContent = "no bait is on the land"
                    }
                }
                textDisplay(); savefish();
            }, 1000)
        } else {console.warn("the function is already active bro, stop")}
    } else {window.alert("you got the point at this rate")}
}
function textDisplay() {
    fishDisplay.textContent = `You have ${fishes} fishes || you currently own ${lands} water lands`
    moneyDisplay.textContent = `You currently have ${money}$`;
}
textDisplay();
const pricerange1 = [68, 74, 71, 69, 65, 74]
const pricerange2 = [289, 281, 265, 276, 284, 273, 279]
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
    fishes -= 50; money += sellprice
    textDisplay(); savefish()
}
function savefish() { //self explanatory
    localStorage.setItem("waterLands", lands); localStorage.setItem("fishes", fishes); localStorage.setItem("dollars", money)
    localStorage.setItem("land1luck", land1Lucktier); localStorage.setItem("land2luck", land2Lucktier);
    localStorage.setItem("land3luck", land3Lucktier); localStorage.setItem("land4luck", land4Lucktier);
    localStorage.setItem("land5luck", land5Lucktier); localStorage.setItem("land6luck", land6Lucktier);
}