  module.exports = function toReadable (number) {
  let arrayFromNumber = String(number).split('');
  let result = [];


    if (arrayFromNumber[arrayFromNumber.length - 1] === '0') {
      result.unshift('zero');
    } else if (arrayFromNumber[arrayFromNumber.length - 1] === '1') {
      result.unshift('one');
    } else if (arrayFromNumber[arrayFromNumber.length - 1] === '2') {
      result.unshift('two');
    } else if (arrayFromNumber[arrayFromNumber.length - 1] === '3') {
      result.unshift('three');
    } else if (arrayFromNumber[arrayFromNumber.length - 1] === '4') {
      result.unshift('four');
    } else if (arrayFromNumber[arrayFromNumber.length - 1] === '5') {
      result.unshift('five');
    } else if (arrayFromNumber[arrayFromNumber.length - 1] === '6') {
      result.unshift('six');
    } else if (arrayFromNumber[arrayFromNumber.length - 1] === '7') {
      result.unshift('seven');
    } else if (arrayFromNumber[arrayFromNumber.length - 1] === '8') {
      result.unshift('eight');
    } else if (arrayFromNumber[arrayFromNumber.length - 1] === '9') {
      result.unshift('nine');
    } 
    
    if (arrayFromNumber[arrayFromNumber.length - 2] === '0') {
      result.unshift('zero');
    } else if (arrayFromNumber[arrayFromNumber.length - 2] === '1') {
      result.unshift('ten');
    } else if (arrayFromNumber[arrayFromNumber.length - 2] === '2') {
      result.unshift('twenty');
    } else if (arrayFromNumber[arrayFromNumber.length - 2] === '3') {
      result.unshift('thirty');
    } else if (arrayFromNumber[arrayFromNumber.length - 2] === '4') {
      result.unshift('forty');
    } else if (arrayFromNumber[arrayFromNumber.length - 2] === '5') {
      result.unshift('fifty');
    } else if (arrayFromNumber[arrayFromNumber.length - 2] === '6') {
      result.unshift('sixty');
    } else if (arrayFromNumber[arrayFromNumber.length - 2] === '7') {
      result.unshift('seventy');
    } else if (arrayFromNumber[arrayFromNumber.length - 2] === '8') {
      result.unshift('eighty');
    } else if (arrayFromNumber[arrayFromNumber.length - 2] === '9') {
      result.unshift('ninety');
    } 
    if (arrayFromNumber.length === 3) {
      result.unshift('hundred');
    }
    if (arrayFromNumber[arrayFromNumber.length - 3] === '1') {
      result.unshift('one');
    } else if (arrayFromNumber[arrayFromNumber.length - 3] === '2') {
      result.unshift('two');
    } else if (arrayFromNumber[arrayFromNumber.length - 3] === '3') {
      result.unshift('three');
    } else if (arrayFromNumber[arrayFromNumber.length - 3] === '4') {
      result.unshift('four');
    } else if (arrayFromNumber[arrayFromNumber.length - 3] === '5') {
      result.unshift('five');
    } else if (arrayFromNumber[arrayFromNumber.length - 3] === '6') {
      result.unshift('six');
    } else if (arrayFromNumber[arrayFromNumber.length - 3] === '7') {
      result.unshift('seven');
    } else if (arrayFromNumber[arrayFromNumber.length - 3] === '8') {
      result.unshift('eight');
    } else if (arrayFromNumber[arrayFromNumber.length - 3] === '9') {
      result.unshift('nine');
    }

  result = result.join(' ');
  
  result = result.replace(/zero zero/, '');
  result = result.replace(/ten zero/, 'ten');
  result = result.replace(/ten one/, 'eleven');
  result = result.replace(/ten two/, 'twelve');
  result = result.replace(/ten three/, 'thirteen');
  result = result.replace(/ten four/, 'fourteen');
  result = result.replace(/ten five/, 'fifteen');
  result = result.replace(/ten six/, 'sixteen');
  result = result.replace(/ten seven/, 'seventeen');
  result = result.replace(/ten eight/, 'eighteen');
  result = result.replace(/ten nine/, 'nineteen');
  result = result.replace(/twenty zero/, 'twenty');
  result = result.replace(/thirty zero/, 'thirty');
  result = result.replace(/forty zero/, 'forty');
  result = result.replace(/fifty zero/, 'fifty');
  result = result.replace(/sixty zero/, 'sixty');
  result = result.replace(/seventy zero/, 'seventy');
  result = result.replace(/eighty zero/, 'eighty');
  result = result.replace(/ninety zero/, 'ninety');
  
  if (result.indexOf('zero') === 12 || result.indexOf('zero') === 13 || result.indexOf('zero') === 14) {
    result = result.replace(/zero/, '');
  }
  result = result.replace(/  /, ' ');
  

  return result.trim();
}

// console.log(toReadable(900));





// node src/index.js