function toRoman(num) {
    if (num > 3000) return 'Angka maksimal 3000';
    else if (num >= 1000) return 'M' + toRoman(num - 1000);
    else if (num >= 900) return 'CM' + toRoman(num - 900);
    else if (num >= 500) return 'D' + toRoman(num - 500);
    else if (num >= 400) return 'CD' + toRoman(num - 400);
    else if (num >= 100) return 'C' + toRoman(num - 100);
    else if (num >= 90) return 'XC' + toRoman(num - 90);
    else if (num >= 50) return 'L' + toRoman(num - 50);
    else if (num >= 40) return 'XL' + toRoman(num - 40);
    else if (num >= 10) return 'X' + toRoman(num - 10);
    else if (num >= 9) return 'IX' + toRoman(num - 9);
    else if (num >= 5) return 'V' + toRoman(num - 5);
    else if (num >= 4) return 'IV' + toRoman(num - 4);
    else if (num >= 1) return 'I' + toRoman(num - 1);
    else return '';
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
