import db from '../models';  
import ChungChiServices from "../services/ChungChiServices";
let getAllChungChi = async (req, res) => {
    let data = await ChungChiServices.getAllChungChi();
    console.log(data);
    return res.render('danhsach_chungchi.ejs', {
        dataTable : data
    });
};
let postChungChi = async (req, res) => {
    let message = await ChungChiServices.createNewChungChi(req.body);
    console.log(message);
}
module.exports = {
    getAllChungChi : getAllChungChi,
    postChungChi: postChungChi,

}
