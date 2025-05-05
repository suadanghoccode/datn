'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('chungchi', [{
                tenchungchi: 'Chứng chỉ An toàn',
                tieuchuanapdung: 'ISO 9001',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenchungchi: 'Chứng chỉ Hàng hải',
                tieuchuanapdung: 'SOLAS',
                createdAt: new Date(),
                updatedAt: new Date()
            },
            {
                tenchungchi: 'Chứng chỉ Y tế',
                tieuchuanapdung: 'WHO',
                createdAt: new Date(),
                updatedAt: new Date()
            }
        ], {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete('chungchi', null, {});
    }
};