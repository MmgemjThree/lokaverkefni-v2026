const db=require('../lib/db');

const getTVcards=async()=>{
    const result=await db.query('SELECT * FROM TV_Shows ORDER BY id ASC');
    return result.rows;
};
const getCardsByID=async(id)=>{
    const result=await db.query('SELECT * FROM TV_Shows WHERE id=$1', [id]);
    if (result.rows.length===0) {
        return null;
    }
    return result.rows[0];
}
module.exports={
    getTVcards,
    getCardsByID
}