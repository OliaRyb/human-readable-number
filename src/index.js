module.exports = function toReadable(number) {
    if (number === 0)
        return 'zero';

    let array1 = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    let array20 = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    let arrayDec = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    let i = number;
    let numberArray = [];
    while (i > 0) {
        let k = i % 10;
        numberArray.push(k);
        i = Math.trunc (i / 10);
    }

    let numText = '';
    if (numberArray[0] > 0)
        numText = array1[numberArray[0]];
    
    if (numberArray.length > 1) {
        if (numberArray[1] === 1){
            numText = array20[numberArray[0]];
        } else if (numberArray[1] > 1) {
            numText = arrayDec[numberArray[1]-2] + ' ' + numText;
        }
    };
    
    if (numberArray.length > 2) {
        numText = array1[numberArray[2]] +  ' ' + 'hundred' + ' ' + numText;
    }

    numText = numText.trim();
    console.log(numText);
    return numText;
}