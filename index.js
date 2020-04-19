function toRoman(num) {

    let arab = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
    let roman = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" ];
    let newNum = "";

    for(let i= 0; i < arab.length; i++ ) {
      // //with while
      // while (num>=arab[i]) {
      //   newNum += roman[i];
      //   num -= arab[i];
      // }

      //with recursive
        if (num >= arab[i]) {
          newNum += roman[i];
          num -= arab[i];
          // console.log(num);
          return newNum + toRoman(num);
        }
    }
    return newNum;
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
