const serviceModule = require('../service/showService');

const homePage = async (req, res) => {
    try {
        const shows = await serviceModule.getItems();
        res.render('index', {
            title: 'TV Shows',
            shows: shows
        });
    } catch (error) {
        console.error('System Error(homePage)');
        res.status(500).send('Homepage error');
    }
};
const getDetails = async(req, res) => {
    try {
        const id = req.params.id;
        const items = await showService.getItemByID(id);
        if (!items) {
            return res.status(404).send('Item not found');
        }
        res.render('showDetails', {
            title: items.name,
            shows: items
        });
    } catch (error) {
        console.error('error getting specific items', error);
        res.status(500).send('System error, could not load items');
    }
};
module.exports = {
    homePage,
    getDetails
};