'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('tau', [{
                tentau: 'Tàu Biển Đông 01',
                quoctich: 'Việt Nam',
                loaitau_id: 1, // giả định id_loaitau = 1 là 'Tàu hàng'
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tentau: 'Pacific Voyager',
                quoctich: 'Singapore',
                loaitau_id: 2, // giả định id_loaitau = 2 là 'Tàu dầu'
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tentau: 'Ocean Dream',
                quoctich: 'Nhật Bản',
                loaitau_id: 3, // giả định id_loaitau = 3 là 'công'
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('tau', null, {});
    }
};