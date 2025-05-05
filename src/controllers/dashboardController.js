
let getDashboardPage = async (req, res) => {
    try{
        return res.render('trangchu.ejs');
    }catch(e){
        console.log(e);
    }
}



//object: {
//    key: '',
//    value: ''
// }
module.exports = {
    getDashboardPage: getDashboardPage
}