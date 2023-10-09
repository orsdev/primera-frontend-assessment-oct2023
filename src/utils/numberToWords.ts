export function numberToWords(value: number) {
  const units = [
    "",
    "One",
    "Two",
    "Three",
    "Four",
    "Five",
    "Six",
    "Seven",
    "Eight",
    "Nine",
    "Ten",
    "Eleven",
    "Twelve",
    "Thirteen",
    "Fourteen",
    "Fifteen",
    "Sixteen",
    "Seventeen",
    "Eighteen",
    "Nineteen",
  ];
  const tens = [
    "",
    "",
    "Twenty",
    "Thirty",
    "Forty",
    "Fifty",
    "Sixty",
    "Seventy",
    "Eighty",
    "Ninety",
  ];

  function convertTwoDigits(num: number) {
    if (num === 0) {
      return "";
    } else if (num < 20) {
      return units[num];
    } else {
      return tens[Math.floor(num / 10)] + " " + units[num % 10];
    }
  }

  if (value < 1 || value > 20) {
    return "Number out of range (1-20)";
  }

  return convertTwoDigits(value);
}
