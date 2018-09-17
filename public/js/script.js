// Drum Arrays

let drums = {
    "kicks": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    "snares": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    "hiHats":  [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false],
    "rideCymbals": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
}
 

const toggleDrum = (drum, index) => {
    if (drum && (index >= 0 && index < 16)) {
        drum[index] = !drum[index];
    }
    else return;
}

const clear = (drum) => {
    if (drum) {
        if (drum === "kicks" || drum === "snares" || drum === "hiHats" || drum === "rideCymbals") {
            for (i = 0; i < drum.length; i++) {
                drum[i] = false;
            }
        }
    }
    else return; 
}

const invert = (drum) => {
    if (drum) {
        if (drum === "kicks" || drum === "snares" || drum === "hiHats" || drum === "rideCymbals") {
            for (i = 0; i < drum.length; i++) {
                drum[i] != drum[i];
            }    
        }
    } 
    else {
        return;
    }  
}