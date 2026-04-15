const homePage = async (req, res) => {
    try {
        const shows = await showService.getItems();
        res.render('index', {
            title: 'TV Shows',
            shows: shows
        });
    } catch (error) {
        console.error('System Error(controller)');
        res.status(500).send('Systemwide error');
    }
};
module.exports = {
    homePage
};