function toRoman(num) {
    let result = ''
    let romanList = {
        'M': 1000, 
        'CM': 900, 
        'D': 500, 
        'CD': 400, 
        'C': 100, 
        'XC': 90, 
        'L': 50, 
        'XL': 40, 
        'X': 10, 
        'IX': 9, 
        'V': 5, 
        'IV': 4, 
        'I': 1
    }

    if (num < 1 || num > 3000) {
        return ''
    }else {
        for (let key in romanList){
            while (num >= romanList[key]){
                result += key
                num -= romanList[key]
            }
        }
    }
    
    return result
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
