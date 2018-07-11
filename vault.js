'use strict';
module.exports = function secret() {
    const secretVault = {};
    
    const setValue = function(key, value){
        secretVault[key] = value;

        console.log('    setValue key  --->  ' + key);
        console.log('    setValue value  --->  ' + value);
        console.log('    secretVault[key]  --->  ' + secretVault[key]);
    }
    const getValue = function(key){
    
        console.log('    getValue key  --->  ' + key);
       
        if(secretVault.hasOwnProperty(key)) {
           
            console.log('    secretVault[key]  --->  ' + secretVault[key])
            
            return secretVault[key];
        }
        else {
            return null;
        }
    }
    
    console.log('    >>> getValue: getValue <<<  --->  ' + getValue);
    console.log('    >>> setValue: setValue <<<  --->  ' + setValue);
    
    return {
        getValue: getValue,
        setValue: setValue
    }
};


// CALL FUNCTION SECRET & BOTH OBJECT KEYS

// var result = secret();
// result.setValue('my key 1', 'my secret 1');
// result.getValue('my key 1');


//==========================================================================================================


// CALL FUNCTION SECRET WITH CONSOLE.LOGs

// call the function and assign it to result
// let result = secret();

// console.log('*** result is an Object with two key/value pairs - getValue: function() and setValue: function() ***');
// console.log(result);

// console.log('*** result.setValue or Object.key; the key is setValue and the value is function(key, value){} ***');
// result.setValue('my key 1', 'my value 1');

// console.log('*** result.getValue or Object.key; the key is getValue and the value is function(key){} ***');
// result.getValue('my key 1');


//===========================================================================================================


//     OTHER WAYS TO WRITE getValue

//     1st WAY
    
//     const getValue = function (key) {
//         if (secretVault === undefined) {
//             return null;
//         }
//         else {
//             return secretVault[key];
//         }
//     }
    
//     2nd WAY
    
//     const getValue = function (key) {
//         if(key in secretVault) {
//             return secretVault[key];
//         }
//         else {
//             return null;
//         }
//     }


//===========================================================================================================


//      CONSOLE.LOG RESULTS

// "    >>> getValue: getValue <<<  --->  function(key){
    
//     window.runnerWindow.proxyConsole.log('    getValue key  --->  ' + key);
   
//     if(secretVault.hasOwnProperty(key)) {
       
//         window.runnerWindow.proxyConsole.log('    secretVault[key]  --->  ' + secretVault[key])
        
//         return secretVault[key];
//     }
//     else {
//         return null;
//     }
// }"
// "    >>> setValue: setValue <<<  --->  function(key, value){
//     secretVault[key] = value;

//     window.runnerWindow.proxyConsole.log('    setValue key  --->  ' + key);
//     window.runnerWindow.proxyConsole.log('    setValue value  --->  ' + value);
//     window.runnerWindow.proxyConsole.log('    secretVault[key]  --->  ' + secretVault[key]);
// }"
// "*** result is an Object with two key/value pairs - getValue: function() and setValue: function() ***"
// [object Object] {
// getValue: function(key){

//     window.runnerWindow.proxyConsole.log('    getValue key  --->  ' + key);
   
//     if(secretVault.hasOwnProperty(key)) {
       
//         window.runnerWindow.proxyConsole.log('    secretVault[key]  --->  ' + secretVault[key])
        
//         return secretVault[key];
//     }
//     else {
//         return null;
//     }
// },
// setValue: function(key, value){
//     secretVault[key] = value;

//     window.runnerWindow.proxyConsole.log('    setValue key  --->  ' + key);
//     window.runnerWindow.proxyConsole.log('    setValue value  --->  ' + value);
//     window.runnerWindow.proxyConsole.log('    secretVault[key]  --->  ' + secretVault[key]);
// }
// }
// "*** result.setValue or Object.key; the key is setValue and the value is function(key, value){} ***"
// "    setValue key  --->  my key 1"
// "    setValue value  --->  my value 1"
// "    secretVault[key]  --->  my value 1"
// "*** result.getValue or Object.key; the key is getValue and the value is function(key){} ***"
// "    getValue key  --->  my key 1"
// "    secretVault[key]  --->  my value 1"