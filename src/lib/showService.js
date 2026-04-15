const db = require('../lib/db');

const getItems = async () => {
    const result = await db.query('SELECT * FROM TV_Shows');
    return result.rows;
};
const getItemByID = async(id) => {
    const result = await db.query('SELECT * FROM TV_Shows WHERE id = $1', [id]);
    if (results.rows.length === 0) {
        return null;
    }
    return result.rows[0];
};

module.exports = {
    getItems,
    getItemByID
};