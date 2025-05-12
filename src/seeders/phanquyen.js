'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('phanquyen', [
            {
                tenphanquyen: 'Quản trị viên',
                mota: 'Quản lý toàn bộ hệ thống',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenphanquyen: 'Nhân viên nhân sự',
                mota: 'Sử dụng chức năng quản lý hồ sơ',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenphanquyen: 'Nhân viên kế toán',
                mota: 'Sử dụng chức năng quản lý lương',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ]);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('phanquyen', null, {});
    }
};
