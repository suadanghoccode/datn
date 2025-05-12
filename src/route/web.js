import express from "express";
import ChungChiController from '../controllers/ChungChiController';
import UserController from '../controllers/UserController';
const router = express.Router();

const initWebRoutes = (app) => {

    // user ở đây
    router.get('/danh-sach-user', UserController.getAllUser);
    
    //chứng chỉ ở đâyđây
    router.get('/danh-sach-chung-chi', ChungChiController.getAllChungChi);
    router.post('/post-chungchi', ChungChiController.postChungChi);
    router.post('/edit-chungchi', ChungChiController.getEditChungChi);
    router.post('/put-chungchi', ChungChiController.putChungChi);
    router.post('/delete-chungchi', ChungChiController.deleteChungChi);
    app.use("/", router);
};

export default initWebRoutes;