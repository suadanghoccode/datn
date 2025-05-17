'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('trangthai', [{
                tentrangthai: 'Đang hoạt động',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tentrangthai: 'Ngừng hoạt động',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tentrangthai: 'Tạm thời khóa',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('trangthai', null, {});
    }
};