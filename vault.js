'use strict';
module.exports = function() {
    const secretVault = {}
    const setValue = function(key, value){
        secretVault[key] = value;
    }
    const getValue = function(key){
    console.log('obj.key', secretVault[key]);
    if(secretVault.hasOwnProperty(key)) {
            console.log('obj[key]', secretVault[key])
            return secretVault[key];
        }
        else {
            return null;
        }
    }
    return {
        getValue: getValue,
        setValue: setValue
    }

    // const getValue = function (key) {
    //     if (secretVault === undefined) {
    //         return null;
    //     }
    //     else {
    //         return secretVault[key];
    //     }
    // }
    
    // const getValue = function (key) {
    //     if(key in secretVault) {
    //         return secretVault[key];
    //     }
    //     else {
    //         return null;
    //     }
    // }

    // var result = x();
    // result.setValue('my key 1', 'my secret 1');
    // result.getValue('my key 1');
};