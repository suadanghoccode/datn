import db from '../models';  

let getAllChucVu = async (req, res) => {
    try {
        let data = await db.chucvu.findAll();  // Lấy toàn bộ thuyenvien
        return res.render('danhsach_chucvu.ejs', { data: data });  // Truyền data sang view
    } catch (error) {
        console.log(error);
        return res.status(500).send('Đã xảy ra lỗi');
    }
};

export default {
    getAllChucVu
};
