
let getCrewPage = async (req, res) => {
    try {
        return res.render('danhsach_thuyenvien.ejs');
    } catch (e) {
        console.log(e);
    }
};

let getAddCrewPage = async (req, res) => {
    try {
        return res.render('them_thuyenvien.ejs');
    } catch (e) {
        console.log(e);
    }
};

let postAddCrew = async (req, res) => {
    try {

        // Lưu vào database (Giả sử model Crew đã được thiết lập)

        // Sau khi lưu xong, chuyển hướng về danh sách thuyền viên
        return res.redirect('/crews');
    } catch (e) {
        console.log(e);
        return res.status(500).send("Lỗi khi lưu dữ liệu");
    }
};

let getCrewPersonalInfoPage = async (req, res) => {
    try {
        return res.render('thuyenvien_chitiet.ejs');
    } catch (e) {
        console.log(e);
    }
};
let getCrewFamilyInfoPage = async (req, res) => {
    try {
        return res.render('thuyenvien_thannhan.ejs');
    } catch (e) {
        console.log(e);
    }
};
let getCrewEducationInfoPage = async (req, res) => {
    try {
        return res.render('thuyenvien_hocvan.ejs');
    } catch (e) {
        console.log(e);
    }
};
let getCrewLanguageCertificatesPage = async (req, res) => {
    try {
        return res.render('thuyenvien_ngoaingu.ejs');
    } catch (e) {
        console.log(e);
    }
};
let getCrewCertificatesPage = async (req, res) => {
    try {
        return res.render('thuyenvien_chungchi.ejs');
    } catch (e) {
        console.log(e);
    }
};

let geCrewSailingHistoryPage = async (req, res) => {
    try {
        return res.render('thuyenvien_lichsu.ejs');
    } catch (e) {
        console.log(e);
    }
};
let getCrewAttachmentsPage = async (req, res) => {
    try {
        return res.render('thuyenvien_dinhkem.ejs');
    } catch (e) {
        console.log(e);
    }
};

module.exports = {
    getCrewPage: getCrewPage,
    getAddCrewPage: getAddCrewPage,
    postAddCrew : postAddCrew,
    getCrewPersonalInfoPage: getCrewPersonalInfoPage,
    getCrewFamilyInfoPage: getCrewFamilyInfoPage,
    getCrewEducationInfoPage: getCrewEducationInfoPage,
    getCrewLanguageCertificatesPage: getCrewLanguageCertificatesPage,
    getCrewCertificatesPage: getCrewCertificatesPage,
    geCrewSailingHistoryPage: geCrewSailingHistoryPage,
    getCrewAttachmentsPage: getCrewAttachmentsPage
};
