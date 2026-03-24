const db=require('../lib/db');

const getTVcards=async()=>{
    const result=await db.query('SELECT * FROM x');
    return result.rows;
};
module.exports={
    
}