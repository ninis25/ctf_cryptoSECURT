const express = require('express');
const path = require('path');
const fs = require('fs');
const cors = require('cors');
const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, '../public')));

// Fonction pour lire les indices
const getHints = (level) => {
    try {
        const hintsPath = path.join(__dirname, `challenges/${level}/indices.json`);
        const hints = JSON.parse(fs.readFileSync(hintsPath, 'utf8'));
        return hints;
    } catch (error) {
        return { error: "No hints available bestie" };
    }
};

// Memes pour la page d'accueil
const memes = [
    "POV: Tu cherches le flag depuis 3h 💀",
    "Personne:\nMoi qui trouve pas le flag: Literally crying rn bestie 😭",
    "Les flags sont comme ma motivation: Introuvables fr fr",
    "Mom come pick me up, les CTF sont trop durs 😭",
    "Skill issue + ratio + L + t'as pas le flag",
    "Le flag: *existe*\nMoi: And I took that personally",
    "Moi: Je vais trouver le flag\nLe flag: That's cute bestie",
    "POV: Tu utilises inspect element pour trouver le flag 🤡",
    "Le writeup: C'est ez\nMoi: 404 skill not found",
    "No cap fr fr, ces flags sont plus durs que mes partiels",
    "Mes dernières braincells en voyant le challenge: Adios",
    "Le flag: *est en ROT13*\nMoi: C'est du quantum computing là",
    "Moi: *decode en binaire*\nLe flag: You wouldn't get it"
];

// Routes
app.get('/api/random-meme', (req, res) => {
    const randomMeme = memes[Math.floor(Math.random() * memes.length)];
    res.json({ meme: randomMeme });
});

app.get('/api/hints/:level', (req, res) => {
    const { level } = req.params;
    const hints = getHints(level);
    res.json(hints);
});

app.post('/api/verify/:level', (req, res) => {
    const { level } = req.params;
    const { flag } = req.body;
    
    const flags = {
        'level1': 'CTF{ratio_plus_t_es_nul}',
        'level2': 'CTF{common_L_bestie_fr_fr}',
        'level3': 'CTF{crying_in_binary}',
        'final': 'CTF{gigachad_approved}'
    };

    if (flags[level] === flag) {
        res.json({ 
            success: true, 
            message: "W rizz + based",
            nextLevel: level === 'final' ? null : `level${parseInt(level.slice(-1)) + 1}`
        });
    } else {
        res.json({ 
            success: false, 
            message: "Skill issue bestie fr fr",
            hint: getHints(level).current
        });
    }
});

// Gestion des erreurs
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: "Something broke bestie 😭",
        message: "Server skill issue fr fr"
    });
});

// Démarrage du serveur
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
    console.log(`W rizz + server is based`);
}); 