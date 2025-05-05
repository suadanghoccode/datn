
let getUserPage = async (req, res) => {
    try{
        return res.render('danhsach_user.ejs');
    }catch(e){
        console.log(e);
    }
}
let getUserAddPage = async (req, res) => {
    try{
        return res.render('thêm_user.ejs');
    }catch(e){
        console.log(e);
    }
}
let getUserUpdatePage = async (req, res) => {
    try{
        return res.render('capnhat_user.ejs');
    }catch(e){
        console.log(e);
    }
}


//object: {
//    key: '',
//    value: ''
// }
module.exports = {
    getUserPage: getUserPage,
    getUserAddPage: getUserAddPage,
    getUserUpdatePage: getUserUpdatePage
}