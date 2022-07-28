const removeFromArray = function(array, ...args) {
    let location;
    args.forEach(arg => {
        if (array.indexOf(arg) === -1) {
            // nothing
        } else {
            location = array.indexOf(arg)
            array.splice(location, 1);            
        }
    });
    return array
};

// Do not edit below this line
module.exports = removeFromArray;