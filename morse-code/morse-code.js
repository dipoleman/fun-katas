// Please do not change the name of this function
function morseCode (str,toMorse) {

  const morseCodeLookUp = {
    "A": ".-",
    "B": "-...",
    "C": "-.-.",
    "D": "-..",
    "E": ".",
    "F": "..-.",
    "G": "--.",
    "H": "....",
    "I": "..",
    "J": ".---",
    "K": "-.-",
    "L": ".-..",
    "M": "--",
    "N": "-.",
    "O": "---",
    "P": ".--.",
    "Q": "--.-",
    "R": ".-.",
    "S": "...",
    "T": "-",
    "U": "..-",
    "V": "...-",
    "W": ".--",
    "X": "-..-",
    "Y": "-.--",
    "Z": "--..",
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "---..."
  };
  const reverseMorseCodeLookUp = {
    ".-": "A",
    "-...": "B",
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "---...":"9"
  };

  if (toMorse){
    const words = str.split(' ').map((word)=>{
      const letters = word.split('').map((char)=>{     
        return morseCodeLookUp[char]      
      })
      return letters.join(' ')
    })  
    return words.join('   ')
  }else{
    const words = str.split('   ').map((word)=>{
      const letters = word.split(' ').map((char)=>{      
        return reverseMorseCodeLookUp[char]      
      })
      return letters.join('')
    })  
    return words.join(' ')
  }
};

module.exports = morseCode;


// morseDecode(".... ..");
// // should return "HI"
// morseDecode(".... . .-.. .-.. ---");
// // should return "HELLO"
// morseDecode("-. --- .-. - .... -.-. --- -.. . .-. ...");
// // should return "NORTHCODERS"
// const morse =
//   "--. --- --- -..   -- --- .-. -. .. -. --.   -. --- .-. - .... -.-. --- -.. . .-. ...";
// morseDecode(morse);
// // should return "GOOD MORNING NORTHCODERS"