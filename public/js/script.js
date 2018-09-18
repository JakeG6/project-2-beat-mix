// Drum Arrays



let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

let drums = {
    get kicks() {
        return kicks;
    },
    get snares() {
        return snares;
    },
    get hiHats() {
        return hiHats;
    },
    get rideCymbals() {
        return rideCymbals;
    },

}
 

const toggleDrum = (drum, index) => {
    if (drum && (index >= 0 && index < 16)) {
        drums[drum][index] = !drums[drum][index];
    }
    else return;
}

const clear = (drum) => {
    if (drum) {
        if (drum === "kicks" || drum === "snares" || drum === "hiHats" || drum === "rideCymbals") {
            for (i = 0; i < drums[drum].length; i++) {
                drums[drum][i] = false;
            }
        }
    }
    else return; 
}

const invert = (drum) => {
    if (drum) {
        if (drum === "kicks" || drum === "snares" || drum === "hiHats" || drum === "rideCymbals") {
            for (i = 0; i < drums[drum].length; i++) {
                drums[drum][i] = !drums[drum][i];
            }    
        }
    } 
    else {
        return;
    }  
}