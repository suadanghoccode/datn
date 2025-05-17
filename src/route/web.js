import express from "express";
import ChungChiController from '../controllers/ChungChiController';
import UserController from '../controllers/UserController';
import ThuyenVienController from '../controllers/ThuyenVienController';
import HopDongController from '../controllers/HopDongController';
import BangLuongController from '../controllers/BangLuongController'
const router = express.Router();

const initWebRoutes = (app) => {

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
    app.use("/", router);


    //hợp đồng ở đây
    router.get('/danh-sach-hop-dong', HopDongController.getAllHopDong);
};

export default initWebRoutes;