'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('hopdong', [{
                tenhopdong: 'Hợp đồng ngắn hạn',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenhopdong: 'Hợp đồng dài hạn',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenhopdong: 'Hợp đồng thử việc',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('hopdong', null, {});
    }
};