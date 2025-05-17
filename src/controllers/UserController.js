import db from '../models';
import UserServices from "../services/UserServices";

let getAllUser = async (req, res) => {
    try {
        let data = await UserServices.getAllUser();
        return res.render('danhsach_user.ejs', {
            dataTable: data
        });
    } catch (e) {
        console.error(e);
        return res.status(500).send('Lỗi khi lấy dữ liệu');
    }
};

let getBangLuong = async (req, res) => {
    return res.render('danhsach_bangluong.ejs');
}
let getThuyenVienBangLuong = async (req, res) => {
    return res.render('danhsach_thuyenvien_luong.ejs');
}

module.exports = {
    getAllUser : getAllUser,
    getBangLuong : getBangLuong,
    getThuyenVienBangLuong: getThuyenVienBangLuong
}