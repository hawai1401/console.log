const colorCodes = {
  noir: "0",
  rouge: "1",
  vert: "2",
  jaune: "3",
  bleu: "4",
  violet: "5",
  ciel: "6",
  blanc: "7",
};
const params = {
  b: "1",
  intensité: "2",
  i: "3",
  u: "4",
  inversé: "7",
  barré: "9",
};

const error = (a) =>
  console.log(
    `\x1b[1;31m[\x1b[0m\x1b[41;37;1m Erreur \x1b[0m\x1b[1;31m] \x1b[0m\x1b[31m${a}\x1b[0m`
  );

const normal = (a) =>
  console.log(
    `\x1b[1;34m[\x1b[0m\x1b[44;37;1m Log \x1b[0m\x1b[1;34m] \x1b[0m\x1b[34m${a}\x1b[0m`
  );

const color = (color, a, b) => {
  let code = colorCodes[color];
  console.log(
    `\x1b[1;3${code}m[\x1b[0m\x1b[4${code};37;1m ${a} \x1b[0m\x1b[1;3${code}m] \x1b[0m\x1b[3${code}m${b}\x1b[0m`
  );
};

function custom() {
  let parametres = "";
  for (let i = 1; i < arguments.length; i++) {
    const element = arguments[i];
    parametres += ";";
    if (element && i === 1) {
      parametres += "3" + colorCodes[element];
    }
    if (element && i === 2) {
      arguments[0] = ` ${arguments[0]} `;
      parametres += "4" + colorCodes[element];
    }
    if (i > 2) {
      parametres += params[element]
    }
  }
  console.log(`\x1b[${parametres}m${arguments[0]}\x1b[0m`);
}

module.exports = { error, normal, custom, color };
