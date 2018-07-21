'use strict';
module.exports = function() {

    const vault = {};
    
    function getValue(key) {
        if (key in vault) {
            return vault[key];
        }
        else {
            return null;
        }
    }
   
    function setValue(key, value){
        vault[key] = value;
    }

    return {
        setValue:setValue,
        getValue:getValue
    }

};