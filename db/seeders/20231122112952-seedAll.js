/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'admin',
          email: 'admin@1',
          hashpass: '123',
          phone: '123',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Books',
      [
        {
          nameBook: 'Александра Хворост: Преступление без улик',
          writer: 'Хворост Александра Юрьевна',
          img: 'https://img3.labirint.ru/rc/ab72b7789cf4f241593d7067809dcf13/363x561q80/books94/938837/cover.png?1700216723',
          user_id: 1,
          owner_comment:
            'У корреспондента "Королевского вестника" Мэгги Смит пропал самый драгоценный инструмент - телефон.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameBook: 'Мишель Пастуро: Белый. История цвета',
          writer: 'Пастуро Мишель',
          img: 'https://img4.labirint.ru/rc/92e8921921e5cc9d31d616b8cb557260/363x561q80/books99/989034/cover.jpg?1699795593',
          user_id: 1,
          owner_comment:
            '"Белый" - очередной том М. Пастуро, дополняющий его предыдущие исследования об истории цвета в Западной Европе на протяжении веков.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameBook: 'Вьет Нгуен: Преданный',
          writer: 'Нгуен Вьет Тхань',
          img: 'https://img4.labirint.ru/rc/4dc6b5d3473033af0248c5293da865f5/363x561q80/books98/972504/cover.jpg?1694147107',
          user_id: 1,
          owner_comment:
            'В 2016 году роман Вьет Тхань Нгуена “Сочувствующий” стал лауреатом Пулитцеровской премии.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          user_comment: 'Отличная книга',
          user_id: 1,
          book_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Ratings',
      [
        {
          book_raitng: 5,
          user_id: 1,
          book_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );

    await queryInterface.bulkInsert(
      'Favorites_books',
      [
        {
          user_id: 1,
          book_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {},
    );
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
