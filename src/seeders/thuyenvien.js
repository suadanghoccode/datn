'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('thuyenvien', [{
                anh: 'avatar1.jpg',
                hoten: 'Nguyễn Văn A',
                cccd: '123456789',
                email: 'vana@example.com',
                sodienthoai: '0901234567',
                chieucao: 170,
                cannang: 65.5,
                nhommau: 'O',
                sizegiay: 42,
                tinhtranghonnhan: 'Độc thân',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                anh: 'avatar2.jpg',
                hoten: 'Trần Văn B',
                cccd: '987654321',
                email: 'vanb@example.com',
                sodienthoai: '0912345678',
                chieucao: 160,
                cannang: 50.2,
                nhommau: 'A',
                sizegiay: 38,
                tinhtranghonnhan: 'Đã kết hôn',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('thuyenvien', null, {});
    }
};