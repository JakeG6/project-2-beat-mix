// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, presetIndex, newPresetArray) => {
    
    let array = [];

    if (request== 'PUT' || request == 'GET') {
        if (presets[presetIndex]) {
        
            switch(request) {
                case 'GET':
                    if (presetIndex < presets.length) {
                        array.push(200, presets[presetIndex]);
                    }
                    else {
                        array.push(404);
                    }
                    break;
    
                case 'PUT':
                    if (presetIndex < presets.length) {
                        presets[presetIndex] = newPresetArray;
                        array.push(200, presets[presetIndex]);
                    }
                    else {
                        array.push(404);
                    }
                    
                    break;
    
                default:
                    array.push(400);
            }
    
            return array;
    
        }
        else {
            array.push(404);
            return array;
        }
    }

    else array.push(400);
    
    return array;
    
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
