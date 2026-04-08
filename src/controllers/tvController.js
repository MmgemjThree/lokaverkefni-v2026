const tvService=require('../lib/showService');
const homePage=async(req,res)=>{
    try {
        const shows=await tvService.getTVcards();
        res.render('index',{
            title: something,
            shows: shows
        });
    } catch (error) {
        console.error('Items not found:', error);
        res.status(500).send('System error, items could not be loaded');
    }
};
const getDetails=async(req,res)=>{
    try {
        const id=req.params.id;
        const tvCard=await showService.getCardsByID(id);

        if (!tvCard) {
        return res.status(404).send('Item not found')
    }
    res.render('tv-details', {
        title: tvCard.title,
        tvCard: tvCard
    });
    }
    catch (error) {
        console.error('Error obtaining items', error);
        res.status(500).send('System error')
    };
}
module.exports={
    homePage,
    getDetails
};