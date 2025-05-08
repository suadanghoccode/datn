import express from "express";
import ChungChiController from '../controllers/ChungChiController';
const router = express.Router();

const initWebRoutes = (app) => {
    router.get('/danh-sach-chung-chi', ChungChiController.getAllChungChi);
    router.post('/post-chungchi', ChungChiController.postChungChi);
    app.use("/", router);
};

export default initWebRoutes;