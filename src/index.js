module.exports = function check(str, bracketsConfig) {
    let bracketsObj = Object.fromEntries(bracketsConfig);

    let bracketsArr = [];

    for (let i = 0; i < str.length; i++) {
        if (bracketsArr.length !== 0) {
            if (bracketsObj[bracketsArr[bracketsArr.length - 1]] === str[i]) {
                bracketsArr.pop();
            } else {
                bracketsArr.push(str[i]);
            }
        } else {
            bracketsArr.push(str[i]);

        }

    }


    return bracketsArr.length == 0;
}
