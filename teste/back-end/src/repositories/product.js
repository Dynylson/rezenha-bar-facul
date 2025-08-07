import db from '../database/db.js';

export function findAll() {
  return new Promise((resolve, reject) => {
    db.all('SELECT * FROM products', (err, rows) => {
      if (err) reject(err);
      else resolve(rows);
    });
  });
}

export function create({ name, price, image }) {
  return new Promise((resolve, reject) => {
    db.run(
      'INSERT INTO products (name, price, image) VALUES (?, ?, ?)',
      [name, price, image],
      function (err) {
        if (err) reject(err);
        else resolve({ id: this.lastID, name, price, image });
      }
    );
  });
}

export function update(id, { name, price, image }) {
  return new Promise((resolve, reject) => {
    db.run(
      'UPDATE products SET name = ?, price = ?, image = ? WHERE id = ?',
      [name, price, image, id],
      function (err) {
        if (err) reject(err);
        else resolve(this.changes > 0);
      }
    );
  });
}

export function remove(id) {
  return new Promise((resolve, reject) => {
    db.run('DELETE FROM products WHERE id = ?', [id], function (err) {
      if (err) reject(err);
      else resolve(this.changes > 0);
    });
  });
}
