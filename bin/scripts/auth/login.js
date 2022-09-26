const db = require('../database');

exports.getUsers = () => {
    const sql = `SELECT * FROM login`;

    db.all(sql, [], (err, rows) => {
        if (err) throw err;
    });
}

exports.login = (email, senha) => {
    const sql = `
        SELECT email, senha
        FROM login
        WHERE email = (?)
    `
    db.all(sql, [email], (err, rows) => {
        if (err) throw err;
        console.log(rows);
    });
}
