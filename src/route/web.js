import express from "express";
import ChungChiController from '../controllers/ChungChiController';
import UserController from '../controllers/UserController';
import ThuyenVienController from '../controllers/ThuyenVienController';
import HopDongController from '../controllers/HopDongController';
import BangLuongController from '../controllers/BangLuongController';
const multer = require('multer');
const router = express.Router();

const initWebRoutes = (app) => {

    const storage = multer.diskStorage({
        destination: function (req, file, cb) {
            cb(null, './uploads/');
        },
        filename: function (req, file, cb) {
            const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
            cb(null, uniqueSuffix + '-' + file.originalname);
        }
    });

    const upload = multer({ storage: storage });

    //thuyền viên ở đây
    router.get('/danh-sach-thuyen-vien', ThuyenVienController.getAllThuyenVien);
    // user ở đây
    router.get('/danh-sach-user', UserController.getAllUser);

    //chứng chỉ ở đâyđây
    router.get('/danh-sach-chung-chi', ChungChiController.getAllChungChi);
    router.post('/post-chungchi', ChungChiController.postChungChi);
    router.post('/edit-chungchi', ChungChiController.getEditChungChi);
    router.post('/put-chungchi', ChungChiController.putChungChi);
    router.post('/delete-chungchi', ChungChiController.deleteChungChi);

    //bảng lương ở đây
    router.get('/danh-sach-bang-luong', BangLuongController.getBangLuong);
    router.get('/danh-sach-thuyen-vien-dang-tren-tau', BangLuongController.getThuyenVienBangLuong);
    router.get('/chi-tiet-bang-luong', BangLuongController.getChiTietBangLuong);
    router.get('/them-bang-luong', BangLuongController.getThemBangLuong);
    router.get('/cap-nhat-bang-luong', BangLuongController.getCapNhatBangLuong);

    //hợp đồng ở đây
    router.get('/danh-sach-hop-dong', HopDongController.getAllHopDong);
    router.post('/post-hop-dong', upload.single('hinhanh'), HopDongController.postHopDong);
    router.post('/edit-hop-dong',  upload.single('hinhanh'), HopDongController.puteditHopDong);
    router.post('/delete-hop-dong', HopDongController.deleteHopDong);
    router.get('/hop-dong-cho-thanh-ly', HopDongController.getHopDongChoThanhLy);
    router.post('/thuc-hien-thanh-ly', HopDongController.postThanhLyHopDong);
    router.get('/hop-dong-da-thanh-ly', HopDongController.getHopDongDaThanhLy);
    app.use("/", router);
};

export default initWebRoutes;