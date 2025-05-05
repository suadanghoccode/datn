import express from "express";
import dashboardController from "../controllers/dashboardController";
import userController from "../controllers/userController";
import cerExpiredController from "../controllers/cerExpiredController";
import cerExpiringController from "../controllers/cerExpiringController";
import payrollController from "../controllers/payrollController";
import loginController from "../controllers/loginController";
import ThuyenVienController from '../controllers/ThuyenVienController';
import ChucVuController from '../controllers/ChucvuController';
import ChungChiController from '../controllers/ChungChiController';
const router = express.Router();
const chungChiRoutes = require('./chungchi.route');

const initWebRoutes = (app) => {
    router.get('/', dashboardController.getDashboardPage);
    router.get('/login', loginController.getLoginPage);
    router.get('/dashboard', dashboardController.getDashboardPage);
    router.get('/users', userController.getUserPage);
    router.get('/users-add', userController.getUserAddPage);
    router.get('/users-update', userController.getUserUpdatePage);
    router.get('/danh-sach-thuyen-vien', ThuyenVienController.getAllThuyenVien);

    router.get('/danh-sach-chuc-vu', ChucVuController.getAllChucVu);

    router.get('/danh-sach-chung-chi', ChungChiController.getAllChungChi);
    router.post('/post-chungchi', ChungChiController.postChungChi);

    router.get('/cer-expired', cerExpiredController.getCer_expiredPage);
    router.get('/cer-expiring', cerExpiringController.getCer_expiringPage);
    router.get('/payroll', payrollController.getPayrollPage);
    router.get('/payroll-add', payrollController.getPayrollAddPage);
    app.use('/api/chungchi', chungChiRoutes);
    app.use("/", router);
};

export default initWebRoutes;