'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('chucvu', [{
                tenchucvu: 'Thuyền trưởng',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenchucvu: 'Phó 2',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenchucvu: 'Phó 3',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('chucvu', null, {});
    }
};