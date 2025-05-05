
let getCer_expiredPage = async (req, res) => {
    try{
        return res.render('chungchi_hethan.ejs');
    }catch(e){
        console.log(e);
    }
}



//object: {
//    key: '',
//    value: ''
// }
module.exports = {
    getCer_expiredPage: getCer_expiredPage
}