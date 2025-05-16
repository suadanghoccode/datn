import express from "express";
import ChungChiController from '../controllers/ChungChiController';
import UserController from '../controllers/UserController';
import ThuyenVienController from '../controllers/ThuyenVienController';
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
    router.get('/danh-sach-bang-luong', UserController.getBangLuong);
    router.get('/danh-sach-thuyen-vien-dang-tren-tau', UserController.getThuyenVienBangLuong);
    app.use("/", router);
};

export default initWebRoutes;