import db from '../models';
import HopDongServices from "../services/HopDongServices";
let getAllHopDong = async (req, res) => {
    let data = await HopDongServices.getAllHopDong();
    return res.render('danhsach_hopdong.ejs', {
        dataTable: data
    });
};

let getHopDongChoThanhLy = async (req, res) => {
    let data = await HopDongServices.getHopDongChoThanhLy();
    return res.render('hopdong_chothanhly.ejs', {
        dataTable: data
    });
};

let getHopDongDaThanhLy = async (req, res) => {
    let data = await HopDongServices.getHopDongDaThanhLy();
    return res.render('hopdong_dathanhly.ejs', {
        dataTable: data
    });
};

const postHopDong = async (req, res) => {
    try {
        const data = req.body;
        const file = req.file; // multer sẽ gắn file vào đây

        const newHopDong = await HopDongServices.createNewHopDong(data, file);

        res.redirect('/danh-sach-hop-dong');
    } catch (error) {
        console.error(error);
        res.status(500).send(error.message);
    }
};

let getIDHopDong = async (req, res) => {
    let hopdong_id = req.query.id;
    if (hopdong_id) {
        let hopdong_data = await HopDongServices.getHopDongId(hopdong_id);
        console.log(hopdong_data);
        return res.send('Tìm thấy chứng chỉ');
    } else {
        return res.send('Không tìm thấy chứng chỉ');
    }
}

// Controller
let puteditHopDong = async (req, res) => {
    try {
        let data = req.body;
        let file = req.file; // file upload (hoặc undefined nếu ko có file)
        console.log('DATA:', data); 
        await HopDongServices.updateHopDongData(data, file);
        return res.redirect('/danh-sach-hop-dong');
    } catch (error) {
        res.send('Lỗi: ' + error.message);
    }
};

let deleteHopDong = async (req, res) => {
    let ids = req.body.id; // => mảng id
    if (!Array.isArray(ids)) {
        ids = [ids]; // nếu gửi 1 id thì cho thành mảng luôn
    }

    for (let id of ids) {
        await HopDongServices.deleteHopDong(id);
    }

    return res.redirect('/danh-sach-hop-dong');
};

let postThanhLyHopDong = async (req, res) => {
    try {
        const message = await HopDongServices.updatethanhLyHopDong(req.body.idHopDong);
        return res.status(200).json({ message });
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Lỗi server khi thanh lý hợp đồng' });
    }
}

module.exports = {
    getAllHopDong: getAllHopDong,
    postHopDong: postHopDong,
    getIDHopDong: getIDHopDong,
    puteditHopDong: puteditHopDong,
    deleteHopDong : deleteHopDong,
    getHopDongChoThanhLy : getHopDongChoThanhLy,
    postThanhLyHopDong : postThanhLyHopDong,
    getHopDongDaThanhLy : getHopDongDaThanhLy,
}