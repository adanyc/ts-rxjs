
function getHexColor(color: string) {
  let hex: string;

  switch (color) {
    case 'red':
      hex = '#FF0000';
      break;
    case 'blue':
      hex = '#0000FF';
      break;
    default:
      hex = '#000000';
  }

  return hex;
}

const hex1 = getHexColor('blue');
console.log(hex1);

// Improved
const hexColor: { [key: string]: string } = {
  red: '#FF0000',
  blue: '#0000FF'
}

const hex2 = hexColor['blue'] || '#000000';
console.log(hex2);