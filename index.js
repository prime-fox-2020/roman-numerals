function toRoman(num) {
  const roman = [
    [1, 'I'],
    [5, 'V'],
    [10, 'X'],
    [50, 'L'],
    [100, 'C'],
    [500, 'D'],
    [1000, 'M']
  ];
  if (num <= 0) {
    return '';
  }

  let rom, min;

  for (let i = 0; i < roman.length; i++){
    if (num >= roman[i][0]) {
      rom = roman[i][1];
      min = roman[i][0];
    }
    if (i % 2 == 0 && roman[i+1] != undefined && num + roman[i][0] >= roman[i+1][0]) {
      rom = roman[i][1] + roman[i+1][1];
      min = roman[i+1][0] - roman[i][0];
    }
    if (i % 2 != 0 && roman[i+1] != undefined && num + roman[i-1][0] >= roman[i+1][0]) {
      rom = roman[i-1][1] + roman[i+1][1];
      min = roman[i+1][0] - roman[i-1][0];
    }
  }

  return rom + toRoman(num-min);
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
