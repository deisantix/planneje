const fs = require('fs');
const sqlite = require('sqlite3');

try {
    fs.mkdirSync('bin/db');
} catch (error) {
    console.log('Diretório bin/db já existe');
} finally {
    fs.openSync('bin/db/planneje.db', 'w');
}

const db = new sqlite.Database('bin/db/planneje.db', sqlite.OPEN_READWRITE,
    (err) => {
        if (err) throw err;
    }
);

const createLogin = `
    CREATE TABLE IF NOT EXISTS login(
        user_id INTEGER PRIMARY KEY AUTOINCREMENT,
        nome VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        senha VARCHAR(255) NOT NULL,
        data_nascimento DATE
    )
`;

const createRelato = `
    CREATE TABLE IF NOT EXISTS relato(
        id_relato INTEGER PRIMARY KEY AUTOINCREMENT,
        relato TEXT,
        humor VARCHAR(255) CHECK(humor in ('pessimo', 'mal', 'neutro', 'feliz', 'incrivel')),
        data_relato DATE,
        user_id INTEGER REFERENCES login(user_id),
        FOREIGN KEY(user_id) REFERENCES login(user_id)
    )
`;

const createPlanner = `
    CREATE TABLE IF NOT EXISTS planner(
        id_planner INTEGER PRIMARY KEY AUTOINCREMENT,
        nome_planner VARCHAR(255),
        user_id INTEGER REFERENCES login(user_id),
        FOREIGN KEY(user_id) REFERENCES login(user_id)
    )
`;

const createTarefa = `
    CREATE TABLE IF NOT EXISTS tarefa(
        id_tarefa INTEGER PRIMARY KEY AUTOINCREMENT,
        descricao TEXT,
        nome_tarefa VARCHAR(255) NOT NULL,
        dias_semana VARCHAR(255),
        quantas_vezes VARCHAR(255),
        prioridade VARCHAR(255) NOT NULL CHECK(prioridade in ('baixa', 'media', 'alta')),
        feita BOOLEAN NOT NULL,
        id_planner INT REFERENCES planner(id_planner),
        FOREIGN KEY(id_planner) REFERENCES planner(id_planner)
    )
`;

const tables = [createLogin, createRelato, createPlanner, createTarefa];

db.serialize(() => {
    for (let table of tables) db.run(table);
});
console.log('Banco de dados criado com sucesso!');

module.exports = db;
