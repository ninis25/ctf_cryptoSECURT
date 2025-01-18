# 🌟 **SecuRT 2024 - CryptoHack 2077 - CTF Cryptographie**

![Version](https://img.shields.io/badge/version-1.0.0-blue.svg?style=flat-square)
![Difficulty](https://img.shields.io/badge/difficulty-progressive-orange.svg?style=flat-square)
![Category](https://img.shields.io/badge/category-cryptography-brightgreen.svg?style=flat-square)

> **Un CTF de cryptographie avec un design cyberpunk et des solutions détaillées pour les amateurs comme les experts.**

## 📚 **Table des Matières**

- [🚀 Installation](#-installation)
- [📁 Structure du Projet](#-structure-du-projet)
- [🎯 Challenges](#-challenges)
- [🔍 Solutions Détaillées](#-solutions-détaillées)
- [🛠️ Technologies Utilisées](#%EF%B8%8F-technologies-utilis%C3%A9es)
- [🤝 Contribution](#-contribution)
- [📝 License](#-license)

## 🚀 **Installation**

```bash
# Cloner le repository
$ git clone https://github.com/ninis25/cryptohack-2077.git

# Installer les dépendances
$ cd ctf_cryptographie/server
$ npm install

# Lancer le serveur
$ npm start
```

**Le CTF est accessible sur [http://localhost:3000](http://localhost:3000).**

## 📁 **Structure du Projet**

```plaintext
ctf_cryptographie/
├── public/          # Frontend statique
│   ├── css/         # Styles cyberpunk
│   ├── js/          # Scripts d'interaction
│   └── pages/       # Pages des challenges
├── server/          # Backend Node.js
│   ├── challenges/  # Fichiers des challenges
│   ├── routes/      # Routes API
│   ├── utils/       # Utilitaires pour les défis
│   └── server.js    # Point d'entrée du backend
└── README.md        # Documentation
```

## 🎯 **Challenges**

### **Level 1: Ez Clap**
- **Difficulté**: Débutant
- **Type**: ROT13
- **Description**: Un simple décalage de 13 lettres.
- **Outils recommandés**:
  - [ROT13 Decoder](https://rot13.com/)

### **Level 2: Real**
- **Difficulté**: Intermédiaire
- **Type**: Vigenère
- **Description**: Une clé à deviner pour déchiffrer le message.
- **Outils recommandés**:
  - [Vigenère Decoder](https://www.dcode.fr/vigenere-cipher)

### **Level 3: Based**
- **Difficulté**: Avancé
- **Type**: Binaire vers ASCII
- **Description**: Chaque groupe de 8 bits révèle un caractère.
- **Outils recommandés**:
  - [Binary to ASCII Converter](https://www.rapidtables.com/convert/number/binary-to-ascii.html)

### **Final Boss: Gigachad**
- **Difficulté**: Expert
- **Type**: Base64 + Reverse
- **Description**: Un double encodage avec inversion du résultat.
- **Outils recommandés**:
  - [Base64 Decoder](https://www.base64decode.org/)

## 🔍 **Solutions Détaillées**

<details>
<summary>**Level 1: Ez Clap**</summary>

### **Méthode de résolution**
1. Identifier le ROT13 (décalage de 13 lettres).
2. Utiliser un décodeur ROT13.
3. Message chiffré: `PGS{engvb_cyhf_g_rf_ahy}`
4. Flag: `CTF{ratio_plus_t_es_nul}`

```python
def rot13(message):
    result = ""
    for char in message:
        if char.isalpha():
            ascii_offset = ord('a') if char.islower() else ord('A')
            result += chr((ord(char) - ascii_offset + 13) % 26 + ascii_offset)
        else:
            result += char
    return result
```

</details>

<details>
<summary>**Level 2: Real**</summary>

### **Méthode de résolution**
1. Identifier Vigenère avec la clé "NPC".
2. Utiliser un outil pour décrypter.
3. Message chiffré: `HGY{pbzzbf_Y_orfgvr_se_se}`
4. Flag: `CTF{common_L_bestie_fr_fr}`

```python
def vigenere_decrypt(cipher_text, key):
    result = ""
    key_length = len(key)
    key_as_int = [ord(i) for i in key]
    for i in range(len(cipher_text)):
        if cipher_text[i].isalpha():
            ascii_offset = ord('a') if cipher_text[i].islower() else ord('A')
            key_index = i % key_length
            result += chr((ord(cipher_text[i]) - ascii_offset - (key_as_int[key_index] - ord('A'))) % 26 + ascii_offset)
        else:
            result += cipher_text[i]
    return result
```

</details>

<details>
<summary>**Level 3: Based**</summary>

### **Méthode de résolution**
1. Convertir le binaire en ASCII.
2. Chaque groupe de 8 bits = 1 caractère.
3. Flag: `CTF{crying_in_binary}`

```python
def binary_to_text(binary):
    return ''.join(chr(int(binary[i:i+8], 2)) for i in range(0, len(binary), 8))
```

</details>

<details>
<summary>**Final Boss: Gigachad**</summary>

### **Méthode de résolution**
1. Décoder le Base64.
2. Inverser le résultat.
3. Message: `ZGV2b3JwcGFfZGFoY2FnaWd7RlRD`
4. Flag: `CTF{gigachad_approved}`

```python
import base64

def solve_final(encoded):
    decoded = base64.b64decode(encoded).decode()
    return decoded[::-1]
```

</details>

## 🛠️ **Technologies Utilisées**

- **Frontend**:
  - HTML5, CSS3, JavaScript
  - Design System Cyberpunk
  - SVG Animations

- **Backend**:
  - Node.js
  - Express
  - Crypto Utils

## 🤝 **Contribution**

Les contributions sont les bienvenues ! N'hésitez pas à ouvrir une PR ou à signaler un problème sur le [repository GitHub](https://github.com/ninis25/cryptohack-2077).

## 📝 **License**

MIT License - © 2025 **SecuRT 2024** - Anisse Fouka
