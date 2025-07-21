# Logger Custom - JavaScript

![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)

## Description

Ce module propose un système de logs colorés en console pour Node.js via ANSI escape codes.  
Il contient 4 fonctions principales : `error`, `normal`, `color`, `custom`.

---

## Installation

Aucune dépendance externe.  
Copier le fichier dans votre projet et faire :

```js
const { error, normal, custom, color } = require("./console.js");
```

---

## Fonctions

### `error(message)`
Affiche une erreur en rouge.

```js
error("Une erreur s'est produite");
```

<img width="353" height="52" alt="image" src="https://github.com/user-attachments/assets/e83d48c0-dff5-4fa3-ae2c-be4b8a1c197b" />

### `normal(message)`
Affiche un log standard en bleu.

```js
normal("Message d'information");
```

<img width="288" height="45" alt="image" src="https://github.com/user-attachments/assets/b87b16fd-e54f-4598-bbe2-8f762508e98a" />

### `color(couleur, titre, message)`
Affiche un log avec couleur personnalisée (fond, texte, titre).

**Couleurs supportées :**
- `noir`
- `rouge`
- `vert`
- `jaune`
- `bleu`
- `violet`
- `ciel`
- `blanc`

```js
color("vert", "Succès", "Fichier sauvegardé");
```

<img width="283" height="45" alt="image" src="https://github.com/user-attachments/assets/26c69d1f-ce7f-44e7-a8ec-37477e8a51a2" />

### `custom(texte, texteCouleur?, fondCouleur?, ...styles)`
Log entièrement personnalisable via codes ANSI.

**Styles disponibles :**
- `b` (gras)
- `intensité` (faible)
- `i` (italique)
- `u` (souligné)
- `inversé` (inversé)
- `barré` (barré)

```js
custom("Texte stylisé", "rouge", "jaune", "b", "i", "u");
```

<img width="169" height="44" alt="image" src="https://github.com/user-attachments/assets/e760dd98-5511-4284-abd6-2994bd78f9da" />

---
