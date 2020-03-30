function toRoman(num) {
    if (num > 0) {
        let alfabet = '';
        let numeral = 0;
        if (num >= 1000) {
            numeral = 1000;
            alfabet = 'M';
        } else if (num >= 900) {
            numeral = 900; 
            alfabet = 'CM';
        } else if (num >= 500) {
            numeral = 500; 
            alfabet = 'D';
        } else if (num >= 400) {
            numeral = 400; 
            alfabet = 'CD';
        } else if (num >= 100) {
            numeral = 100;
            alfabet = 'C';
        } else if (num >= 90) {
            numeral = 90;
            alfabet = 'XC';
        } else if (num >= 50) {
            numeral = 50;
            alfabet = 'L';
        } else if (num >= 40) {
            numeral = 40;
            alfabet = 'XL';
        } else if (num >= 10) {
            numeral = 10;
            alfabet = 'X';
        } else if (num >= 9) {
            numeral = 9;
            alfabet = 'IX';
        } else if (num >= 5) {
            numeral = 5;
            alfabet = 'V';
        } else if (num >= 4) {
            numeral = 4;
            alfabet = 'IV';
        } else if (num >= 1) {
            numeral = 1;
            alfabet = 'I';
        }
        num -= numeral;
        return alfabet + toRoman(num);
        
    } else {
        return '';
    }
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
