const db=require('../lib/db');

const getTVcards=async()=>{
    const result=await db.query('SELECT * FROM TV_shows');
    return result.rows;
};
module.exports={
    getTVcards,
}