'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('chucvu', [{
                tenchucvu: 'Giám đốc',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenchucvu: 'Trưởng phòng',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenchucvu: 'Nhân viên',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('chucvu', null, {});
    }
};