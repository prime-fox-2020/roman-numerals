function toRoman(num) {
    let dictionary = [
        ['I',  1],
        ['IV', 4],   
        ['V',  5],
        ['IX', 9],
        ['X',  10],
        ['XL', 40],
        ['L',  50],
        ['XC', 90],
        ['C',  100],
        ['CD', 400],
        ['D',  500],
        ['CM', 900],
        ['M',  1000]
    ]

    let result = ''
    if(num === 0){
        return result
    }
    for(let i = dictionary.length-1; i>=0 ; i--){
        if(num >= dictionary[i][1]){
            result += dictionary[i][0]
            num -= dictionary[i][1]
            break
        }
    }
    return result + toRoman(num)

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

//abaikan code dibawah ini
module.exports = toRoman
