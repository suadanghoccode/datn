'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('loaitau', [{
                tenloaitau: 'Tàu hàng',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenloaitau: 'Tàu dầu',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenloaitau: 'Tàu công',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenloaitau: 'Tàu hóa chất',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('loaitau', null, {});
    }
};