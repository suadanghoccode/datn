
let getCer_expiringPage = async (req, res) => {
    try{
        return res.render('chungchi_saphethan.ejs');
    }catch(e){
        console.log(e);
    }
}



//object: {
//    key: '',
//    value: ''
// }
module.exports = {
    getCer_expiringPage: getCer_expiringPage
}