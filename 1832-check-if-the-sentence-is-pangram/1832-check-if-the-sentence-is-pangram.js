/**
 * @param {string} sentence
 * @return {boolean}
 */
var checkIfPangram = function(sentence) {
    let set = new Set()
    for(let i = 0;i<sentence.length;i++){
        set.add(sentence[i])
    }
     let alphabet = "abcdefghijklmnopqrstuvwxyz";
     for(let i = 0;i<alphabet.length;i++){
        if(!set.has(alphabet[i])){
            return false
        }
     }
     return true
};