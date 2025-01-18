const validateFlag = (level, flag) => {
    const flags = {
        'level1': 'CTF{ratio_plus_t_es_nul}',
        'level2': 'CTF{common_L_bestie_fr_fr}',
        'level3': 'CTF{crying_in_binary}',
        'final': 'CTF{gigachad_approved}'
    };

    return flags[level] === flag;
};

const getErrorMessage = (level) => {
    const messages = {
        'level1': 'Skill issue bestie, essaie encore',
        'level2': 'Common L + ratio + t\'es nul',
        'level3': 'Literally crying rn bestie 😭',
        'final': 'POV: Tu vas rage quit fr fr 💀'
    };

    return messages[level];
};

module.exports = {
    validateFlag,
    getErrorMessage
}; 