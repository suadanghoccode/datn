let getLoginPage = async (req, res) => {
    try{
        return res.render('dangnhap.ejs');
    }catch(e){
        console.log(e);
    }
}



//object: {
//    key: '',
//    value: ''
// }
module.exports = {
    getLoginPage: getLoginPage
}