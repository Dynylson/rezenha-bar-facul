import db from '../database/db.js';

export function findAll() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM events', (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

export function create({ name, image }) {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO events (name, image) VALUES (?, ?)',
      [name, image],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, name, image });
      }
    );
  });
}

export function update(id, { name, image }) {
  return new Promise((resolve, reject) => {
    db.run(
      'UPDATE events SET name = ?, image = ? WHERE id = ?',
      [name, image, id],
      function (err) {
        if (err) reject(err);
        else resolve(this.changes > 0);
      }
    );
  });
}

export function remove(id) {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM events WHERE id = ?', id, function (err) {
      if (err) reject(err);
      else resolve(this.changes > 0);
    });
  });
}
