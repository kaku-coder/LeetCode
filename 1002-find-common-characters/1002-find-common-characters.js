/**
 * @param {string[]} words
 * @return {string[]}
 */
var commonChars = function(words) {

    let result = [];

    for (let ch of new Set(words[0])) {

        let count = Infinity;

        for (let i = 0; i < words.length; i++) {

            let currentCount = 0;

            for (let j = 0; j < words[i].length; j++) {
                if (words[i][j] === ch) {
                    currentCount++;
                }
            }

            count = Math.min(count, currentCount);
        }

        for (let i = 0; i < count; i++) {
            result.push(ch);
        }
    }

    return result;
};