// Use this presets array inside your presetHandler
const presets = require('./presets');

// Complete this function:
const presetHandler = (request, presetIndex, newPresetArray) => {
    
    let array = [];

    if (presets[presetIndex] !== -1) {
        
        
        
        switch(request) {
            case 'GET':
                //code block
                if (presetIndex < presets.length) {
                    array.push(200, presets[presetIndex]);
                }
                else {
                    array.push(404);
                }
                break;

            case 'PUT':
                //code block
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

    
};

// Leave this line so that your presetHandler function can be used elsewhere:
module.exports = presetHandler;
