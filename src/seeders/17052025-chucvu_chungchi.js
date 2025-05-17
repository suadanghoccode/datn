'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('chucvu_chungchi', [{
                chucvu_id: 1, // Giả sử id_chucvu = 1
                chungchi_id: 2, // Giả sử id_chungchi = 2
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                chucvu_id: 2, // Giả sử id_chucvu = 2
                chungchi_id: 3, // Giả sử id_chungchi = 3
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('chucvu_chungchi', null, {});
    }
};