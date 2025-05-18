import db from '../models/index';

let getAllHopDong = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let hopdongs = await db.Hopdong.findAll({
                where: {
                    trangthaihopdong: 'Có hiệu lực' // Chỉ lấy hợp đồng có trạng thái này
                },
                include: [{
                    model: db.Thuyenvien,
                    as: 'thuyenvien',
                    attributes: ['id_thuyenvien', 'hoten']
                }],
                raw: true,
                nest: true
            });
            resolve(hopdongs);
        } catch (e) {
            reject(e);
        }
    });
};

let getHopDongChoThanhLy = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let hopdongs = await db.Hopdong.findAll({
                where: {
                    trangthaihopdong: 'Chờ thanh lý' // Chỉ lấy hợp đồng có trạng thái này
                },
                include: [{
                    model: db.Thuyenvien,
                    as: 'thuyenvien',
                    attributes: ['id_thuyenvien', 'hoten']
                }],
                raw: true,
                nest: true
            });
            resolve(hopdongs);
        } catch (e) {
            reject(e);
        }
    });
};

let getHopDongDaThanhLy = () => {
    return new Promise(async (resolve, reject) => {
        try {
            let hopdongs = await db.Hopdong.findAll({
                where: {
                    trangthaihopdong: 'Đã thanh lý' // Chỉ lấy hợp đồng có trạng thái này
                },
                include: [{
                    model: db.Thuyenvien,
                    as: 'thuyenvien',
                    attributes: ['id_thuyenvien', 'hoten']
                }],
                raw: true,
                nest: true
            });
            resolve(hopdongs);
        } catch (e) {
            reject(e);
        }
    });
};

const parseDate = (str) => {
    if (!str) return null;

    if (str.includes('/')) {
        // Định dạng dd/MM/yyyy
        const parts = str.split('/');
        if (parts.length !== 3) return null;
        const [day, month, year] = parts;
        const date = new Date(`${year}-${month}-${day}`);
        if (isNaN(date.getTime())) return null;
        return date;
    } else if (str.includes('-')) {
        // Định dạng yyyy-MM-dd hoặc yyyy-M-d
        const date = new Date(str);
        if (isNaN(date.getTime())) return null;
        return date;
    } else {
        // Định dạng không xác định
        return null;
    }
};

let createNewHopDong = async (data, file) => {
    return new Promise(async (resolve, reject) => {
        try {
            // Kiểm tra thuyền viên
            const thuyenVien = await db.Thuyenvien.findOne({
                where: {
                    id_thuyenvien: data.thuyenvien_id
                }
            });

            if (!thuyenVien) {
                return reject(new Error('Thuyền viên không tồn tại!'));
            }

            // Kiểm tra hợp đồng gần nhất
            const lastHopDong = await db.Hopdong.findOne({
                where: {
                    thuyenvien_id: data.thuyenvien_id
                },
                order: [
                    ['ngayhethan', 'DESC']
                ]
            });

            if (lastHopDong) {
                const now = new Date();
                const hetHan = new Date(lastHopDong.ngayhethan);
                if (hetHan >= now) {
                    return reject(new Error('Thuyền viên này vẫn còn hợp đồng hiệu lực!'));
                }
            }

            // Lấy tên file nếu có
            const hinhanh = file ? file.filename : null;

            // Chuyển đổi ngày từ string "dd/MM/yyyy" sang Date object
            const ngayky = parseDate(data.ngayky);
            const ngayhethan = parseDate(data.ngayhethan);

            // Tạo hợp đồng mới
            const result = await db.Hopdong.create({
                thuyenvien_id: data.thuyenvien_id,
                ngayky,
                ngayhethan,
                trangthaihopdong: data.trangthaihopdong,
                hinhanh: hinhanh
            });

            resolve(result);

        } catch (e) {
            reject(e);
        }
    });
};

let getHopDongId = (hopdong_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hopdong = await db.Hopdong.findOne({
                where: {
                    id: hopdong_id
                }
            })
            if (hopdong) {
                resolve(hopdong);
            } else {
                resolve([]);
            }
        } catch (e) {
            reject(e);
        }
    })
}

let deleteHopDong = (hopdong_id) => {
    return new Promise(async (resolve, reject) => {
        try {
            let hopdong = await db.Hopdong.findOne({
                where: {
                    id_hopdong: hopdong_id
                }
            })
            if (hopdong) {
                await hopdong.destroy();
            }
            resolve();
        } catch (e) {
            reject(e);
        }
    })
}

let updateHopDongData = async (data, file) => {
    try {
        const thuyenVien = await db.Thuyenvien.findOne({
            where: {
                id_thuyenvien: data.thuyenvien_id
            },
        });

        if (!thuyenVien) {
            throw new Error('Thuyền viên không tồn tại!');
        }

        const hinhanh = file ?.filename || data.oldHinhanh || null;

        console.log('Ngay ky truoc khi parse:', data.ngayKi);
        // Chuyển đổi ngày từ string "dd/MM/yyyy" sang Date object
        const ngayky = parseDate(data.ngayKi);
        const ngayhethan = parseDate(data.ngayHetHan);

        await db.Hopdong.update({
            thuyenvien_id: data.thuyenvien_id,
            ngayky,
            ngayhethan,
            hinhanh: hinhanh,
        }, {
            where: {
                id_hopdong: data.idHopDong
            },
        });

        return 'Cập nhật hợp đồng thành công!';
    } catch (e) {
        console.error(e);
        throw e;
    }
};

let updatethanhLyHopDong = async (idHopDong) => {
    if (!idHopDong) {
        throw new Error('Thiếu ID hợp đồng');
    }

    await db.Hopdong.update({
        trangthaihopdong: 'Đã thanh lý',
        ngaythanhly: new Date()
    }, {
        where: {
            id_hopdong: idHopDong
        }
    });

    return 'Thanh lý hợp đồng thành công!';
}

module.exports = {
    getAllHopDong: getAllHopDong,
    createNewHopDong: createNewHopDong,
    getHopDongId: getHopDongId,
    updateHopDongData: updateHopDongData,
    deleteHopDong: deleteHopDong,
    getHopDongChoThanhLy: getHopDongChoThanhLy,
    updatethanhLyHopDong: updatethanhLyHopDong,
    getHopDongDaThanhLy : getHopDongDaThanhLy,
}