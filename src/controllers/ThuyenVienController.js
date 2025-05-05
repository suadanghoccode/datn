import db from '../models';  

let getAllThuyenVien = async (req, res) => {
    try {
        let data = await db.thuyenvien.findAll();  // Lấy toàn bộ thuyenvien
        return res.render('danhsach_thuyenvien.ejs', { data: data });  // Truyền data sang view
    } catch (error) {
        console.log(error);
        return res.status(500).send('Đã xảy ra lỗi');
    }
};

export default {
    getAllThuyenVien
};
