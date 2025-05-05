let getPayrollPage = async (req, res) => {
    try {
        return res.render('danhsach_bangluong.ejs');
    } catch (e) {
        console.log(e);
    }
};
let getPayrollAddPage = async (req, res) => {
    try {
        return res.render('them_bangluong.ejs');
    } catch (e) {
        console.log(e);
    }
};
module.exports = {
    getPayrollPage: getPayrollPage,
    getPayrollAddPage: getPayrollAddPage
};