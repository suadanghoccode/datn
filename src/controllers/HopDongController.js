import db from '../models';  
let getAllHopDong = async (req, res) => {
    return res.render('danhsach_hopdong.ejs');
};

module.exports = {
    getAllHopDong : getAllHopDong,
}
