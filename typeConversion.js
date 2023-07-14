
console.log(convertToNumber("123"));
console.log(convertToNumber("abc"));



function convertToNumber(string) {
  try {
    const number = Number(string);
    if (isNaN(number)) {
      throw error;
    }
    return number;
 } 
    catch (error) {
    return "Invalid number";
  }
 }