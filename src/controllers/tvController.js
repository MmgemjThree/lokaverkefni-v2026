const tvService=require('../lib/showService');
const homePage=async(req,res)=>{
    try {
        const shows=await showService.getTVcards();
        res.render('index',{
            title: placeholder
        });
    } catch (error) {
        console.error('Items not found:', error);
        res.status(500).send('System error, items could not be loaded');
    }
};
module.export={
    homePage
};