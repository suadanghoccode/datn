import db from '../models';
let getBangLuong = async (req, res) => {
    return res.render('danhsach_bangluong.ejs');
}
let getThuyenVienBangLuong = async (req, res) => {
    return res.render('danhsach_thuyenvien_luong.ejs');
}

let getThemBangLuong = async (req, res) => {
    return res.render('them_bangluong.ejs');
};

let getChiTietBangLuong = async (req, res) => {
    return res.render('bangluong_chitiet.ejs');
};

let getCapNhatBangLuong = async (req, res) => {
    return res.render('bangluong_capnhat.ejs');
};

module.exports = {
    getBangLuong : getBangLuong,
    getThuyenVienBangLuong: getThuyenVienBangLuong,
    getThemBangLuong: getThemBangLuong,
    getChiTietBangLuong: getChiTietBangLuong,
    getCapNhatBangLuong : getCapNhatBangLuong,
}