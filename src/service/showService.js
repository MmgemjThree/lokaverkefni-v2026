const db = require('../lib/db');

const getItems = async () => {
    const result = await db.query('SELECT * FROM shows');
    return result.rows;
};
const getItemByID = async(id) => {
    const result = await db.query('SELECT * FROM shows WHERE id = $1', [id]);
    if (result.rows.length === 0) {
        return null;
    }
    return result.rows[0];
};

module.exports = {
    getItems,
    getItemByID
};