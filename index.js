function toRoman(num) {
    var romawi = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'V', 'IV', 'I']
    var arab   = [1000, 900, 500,  400, 100,   90,  50,   40,  10,   5,    4,   1]
    var answer = ''
    for (let i = 0; i < arab.length; i++) {
        while (num >= arab[i]) {
            answer += romawi[i]
            num -= arab[i]
        } 
    }
    return answer
}

// Drive code
console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("——————|——————————|———————");
console.log("4     | IV       | ", toRoman(4));
console.log("9     | IX       | ", toRoman(9));
console.log("13    | XIII     | ", toRoman(13));
console.log("1453  | MCDLIII  | ", toRoman(1453));
console.log("1646  | MDCXLVI  | ", toRoman(1646));
// console.log("1646  | MDCXLVI  | ", toRoman(3001));

//abaikan code dibawah ini
module.exports = toRoman 
