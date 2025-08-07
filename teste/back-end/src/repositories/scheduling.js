import db from '../database/db.js';

export function findAll() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM agendamentos', (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

export function create({ customer_name, date, time }) {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO agendamentos (customer_name, date, time) VALUES (?, ?, ?)',
      [customer_name, date, time],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, customer_name, date, time });
      }
    );
  });
}

export function update(id, { customer_name, date, time }) {
  return new Promise((resolve, reject) => {
    db.run(
      'UPDATE agendamentos SET customer_name = ?, date = ?, time = ? WHERE id = ?',
      [customer_name, date, time, id],
      function (err) {
        if (err) reject(err);
        else resolve(this.changes > 0);
      }
    );
  });
}

export function remove(id) {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM agendamentos WHERE id = ?', id, function (err) {
      if (err) reject(err);
      else resolve(this.changes > 0);
    });
  });
}
