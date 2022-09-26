const db = require('../database');

exports.cadastrar = (novoUsuario) => {
    const camposObrigatorios = ['nome', 'email', 'senha', 'dataNascimento'];
    const usuario = [];
    for (let obrigatorio of camposObrigatorios) {
        if (!novoUsuario[obrigatorio]) {
            throw new Error(`Falta campo obrigatório ${obrigatorio}`);
        } else {
            usuario.push(novoUsuario[obrigatorio]);
        }
    }

    const sql = `
        INSERT INTO login(nome, email, senha, data_nascimento)
        VALUES (?, ?, ?, ?)
    `;
    db.run(sql, usuario, (err) => {
        if (err) throw err;
    });
    return true;
};
