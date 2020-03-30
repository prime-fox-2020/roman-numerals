function toRoman(num) {
    // FOR LOOPING
    let res = '';
    const roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
    const romanNum = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];

    while(num > 0){
        for (let i = 0; i < roman.length; i++) {
            if(num >= romanNum[i]){
                res += roman[i];
                num -= romanNum[i];
            }
        }
    }

    return res;

    // RECURSIVE

    // if(num === 0){
    //     return '';
    // }
    
    // if(num >= 1000){
    //     return 'M' + toRoman(num % 1000);
    // }
    // if(num >= 900){
    //     return 'CM' + toRoman(num % 900);
    // }
    // if(num >= 500){
    //     return 'D' + toRoman(num % 500);
    // }
    // if(num >= 400){
    //     return 'CD' + toRoman(num % 400);
    // }
    // if(num >= 100){
    //     return 'C' + toRoman(num % 100);
    // }
    // if(num >= 90){
    //     return 'XC' + toRoman(num % 90);
    // }
    // if(num >= 50){
    //     return 'L' + toRoman(num % 50);
    // }
    // if(num >= 40){
    //     return 'XL' + toRoman(num % 40);
    // }
    // if(num >= 10){
    //     return 'X' + toRoman(num % 10);
    // }
    // if(num >= 9){
    //     return 'IX' + toRoman(num % 9);
    // }
    // if(num >= 5){
    //     return 'V' + toRoman(num % 5);
    // }
    // if(num >= 4){
    //     return 'IV' + toRoman(num % 4);
    // }
    // if(num >= 1){
    //     return 'I' + toRoman(num - 1);
    // }
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
