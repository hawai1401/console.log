const error = (a) =>
  console.log(
    `\x1b[1;31m[\x1b[0m\x1b[41;37;1m Erreur \x1b[0m\x1b[1;31m] \x1b[0m\x1b[31m${a}\x1b[0m`
  );
const normal = (a) =>
  console.log(
    `\x1b[1;34m[\x1b[0m\x1b[44;37;1m Log \x1b[0m\x1b[1;34m] \x1b[0m\x1b[34m${a}\x1b[0m`
  );
const color = (color, a, b) => {
  switch (color) {
    case "noir":
      color = 0;
      break;
    case "rouge":
      color = 1;
      break;
    case "vert":
      color = 2;
      break;
    case "jaune":
      color = 3;
      break;
    case "bleu":
      color = 4;
      break;
    case "violet":
      color = 5;
      break;
    case "ciel":
      color = 6;
      break;
    case "blanc":
      color = 7;
      break;

    default:
      break;
  }
  console.log(
    `\x1b[1;3${color}m[\x1b[0m\x1b[4${color};37;1m ${a} \x1b[0m\x1b[1;3${color}m] \x1b[0m\x1b[3${color}m${b}\x1b[0m`
  );
};
function custom() {
  let parametres = "";
  for (let i = 1; i < arguments.length; i++) {
    const element = arguments[i];
    parametres += ";";
    if (i && i === 1) {
      switch (element) {
        case "noir":
          parametres += "30";
          break;
        case "rouge":
          parametres += "31";
          break;
        case "vert":
          parametres += "32";
          break;
        case "jaune":
          parametres += "33";
          break;
        case "bleu":
          parametres += "34";
          break;
        case "violet":
          parametres += "35";
          break;
        case "ciel":
          parametres += "36";
          break;
        case "blanc":
          parametres += "37";
          break;

        default:
          continue;
      }
    }
    if (i && i === 2) {
      arguments[0] = ` ${arguments[0]} `;
      switch (element) {
        case "noir":
          parametres += "40";
          break;
        case "rouge":
          parametres += "41";
          break;
        case "vert":
          parametres += "42";
          break;
        case "jaune":
          parametres += "43";
          break;
        case "bleu":
          parametres += "44";
          break;
        case "violet":
          parametres += "45";
          break;
        case "ciel":
          parametres += "46";
          break;
        case "blanc":
          parametres += "47";
          break;

        default:
          continue;
      }
    }
    if (i > 2) {
      switch (element) {
        case "b":
          parametres += "1";
          break;
        case "intensité":
          parametres += "2";
          break;
        case "i":
          parametres += "3";
          break;
        case "u":
          parametres += "4";
          break;
        case "inversé":
          parametres += "7";
          break;
        case "barré":
          parametres += "9";
          break;

        default:
          error("Mauvais paramètre");
          break;
      }
    }
  }
  console.log(`\x1b[${parametres}m${arguments[0]}\x1b[0m`);
}

module.exports = { error, normal, custom, color };
