const express=require('express');
const path=require('path');
const showsRouter=require('./src/routes/shows.routes');
const { title } = require('process');

const app=express();
const PORT=3000;

app.set('views',path.join(__dirname,'src','views'));
app.set('view engine','ejs');

app.use(express.static(path.join(__dirname,'../public')));
app.use('/',showsRouter);

app.get('/', (req,res)=>{
    res.render('index', {title: 'Project'});
})

app.use((req, res, next) => {
    res.status(404).render('404', { title: 'Site not found' });
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Internal error');
});

app.listen(PORT,()=>{
    console.log(`server is running at http://localhost:${PORT}`);
});