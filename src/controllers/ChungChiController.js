import db from '../models';  
import ChungChiServices from "../services/ChungChiServices";
let getAllChungChi = async (req, res) => {
    try {
        let data = await db.chungchi.findAll();  // Lấy toàn bộ chungchi
        return res.render('danhsach_chungchi.ejs', { data: data });  // Truyền data sang view
    } catch (error) {
        console.log(error);
        return res.status(500).send('Đã xảy ra lỗi');
    }
};
let postChungChi = async (req, res) => {
    let message = await ChungChiServices.createNewChungChi(req.body);
    console.log(message);
}
module.exports = {
    getAllChungChi : getAllChungChi,
    postChungChi: postChungChi,

}
