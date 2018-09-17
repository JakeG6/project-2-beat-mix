// Drum Arrays
let kicks = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let snares =[false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let hiHats = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];
let rideCymbals = [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false];

const toggleDrum = (drum, index) => {
    if (drum && index) {
        drum[index] = !drum[index];
    }
}

const clear = (drum) => {
    if (drum) {
        if (drum === "kicks" || drum === "snares" || drum === "hiHats" || drum === "rideCymbals") {
            for (i = 0; i < drum.length; i++) {
                drum[i] = false;
            }
        }
    } 
}

const invert = (drum) => {
    if (drum) {
        if (drum === "kicks" || drum === "snares" || drum === "hiHats" || drum === "rideCymbals") {
            for (i = 0; i < drum.length; i++) {
                drum[i] != drum[i];
            }    
        }
    }   
}