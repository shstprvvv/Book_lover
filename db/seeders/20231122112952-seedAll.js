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
        {
          nameBook: 'Сафарли Эльчин: Когда я вернусь, будь дома',
          writer: 'Эльчин Сафарли',
          img: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcTSNy4vaJfc57vyaG7CKBWI6TUKaLWUCnQbsdJyup5RhC-h3Jq_pJR7tkYaf-ehE1G_0gSTplVvjXcIKBwJQ46Lse-xY4fKzx8-faQE4i4&usqp=CAE',
          user_id: 1,
          owner_comment:
            '«Когда я вернусь, будь дома» - книга, наполненная запахами и звуками. Это тишина Города вечной зимы где-то на севере Франции, и пестрый, вечно шумный Стамбул. Песни Франка Синатры и азаны муэдзинов. Вкус французских булочек с изюмом и турецкого кофе. На этой условной границе Запада и Востока разворачивается история семьи, рассказанная в невероятно поэтичных письмах отца к дочери. Письмах о далеком прошлом, где есть война и голод. О настоящем, заполненном ожиданием и светлой грустью. И о будущем с верой, что «каждый новый день, вопреки трудностям, можно сделать незабываемым».',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameBook: 'Лаура Лабас: Сердце ведьмы',
          writer: 'Лабас Лаура',
          img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTjirea5dSXoJIxmOgN5IBMKg8oVUsThgogBXhoUiZLJPPBGW7aSjKykEYngpW6MnLOY3q1ht-VkB57wMGko2UpX4oZj4GB8sp-ZynzlFvWOm0E14xTJCNI&usqp=CAE',
          user_id: 1,
          owner_comment:
            'Дарсия Боннет хочет стать повелительницей Порочных, самых зловещих колдовских душ, чтобы использовать их силу и вернуть свою сестру из загробного мира. Но для этого ей нужно убить тринадцать ведьм. Пока Дарсия неустанно охотится на ведьм на извилистых улицах Нового Орлеана, на ее пути оказывается Валенс Маркиз, на которого обрушивается жестокое проклятие. Дарсия становится его последней надеждой.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameBook: 'Анна Джейн: Твое сердце будет разбито',
          writer: 'Джейн Анна',
          img: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTS99g0c09uXTOe2qCOHIGMY28jKTZZlSt6OBpS-0oYyd1qwP-P_5YdoJ_hvh977Ww_PNO5we-phX2YS4_W_Aiy_i0RrXFCXF0DnWJLioAqm1XHnMjeZTc-&usqp=CAE',
          user_id: 1,
          owner_comment:
            'Я вижу его каждый день в окне дома напротив. Он – самый крутой парень в моей новой школе. Красавчик, от которого все без ума. Опасный одиночка, который меня не замечает.Однажды он спас меня от одноклассниц, решивших превратить мою жизнь в ад. Он сказал всем, что я его девушка, и украл мой первый поцелуй при всех! Теперь никто не смеет меня тронуть, потому что никто не рискнет с ним связываться. Взамен я должна делать все, что он скажет. ',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameBook: 'Эми Бартол: Рожденная второй',
          writer: 'Бартол Эми',
          img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROuZl50ycUssVuJ18nwbPisYJt80xf-nQtTHEEOAiLLuFSXG66j3JR6w75q5Fye5VjD7oZmqdYdpmlYtdJhyRQCkHsRGQ69TeQ8xF1PJo&usqp=CAE',
          user_id: 1,
          owner_comment:
            '«Рожденная второй» — первая книга атмосферной трилогии с выраженной романтической линией и достойной героиней в футуристическом антураже.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameBook: 'Эллен Фоллен: Порочные души',
          writer: 'Фоллен Эллен',
          img: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSGrDlv3YKel4DBpvpCpsgymLYlb7fjG2j9IPqmm9kHmxqeaF5sbOAsL_yFQnJfxNdVFJcIVAVTa6Ipn3abHiJsmaaBEhJ0HwcFrSoLH8Y',
          user_id: 1,
          owner_comment:
            'Молодая медсестра Эмерсон мечтает стать мамой, но шансы уменьшаются с каждым днем. Хоук Карпентер — бывший наркоман и новоиспеченный отец, который ради новорожденного сына готов стать другим, лучшим человеком. Мимолетные взгляды украдкой, борьба за жизнь и здоровье малыша, короткие разговоры в больничных коридорах, внутренние сомнения... и желание обладать.',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          nameBook: 'А. Моллой: История Икс',
          writer: 'Моллой А. Дж.',
          img: 'https://img3.labirint.ru/rc/eb358f10339d0d40122d328b638822bb/363x561q80/books44/437737/cover.jpg?1563777892',
          user_id: 1,
          owner_comment:
            'Скромную и застенчивую студентку Александру Бекманн друзья называют Икс. Девушка любит все загадочное и таинственное. Ей противна тихая и размеренная жизнь, которую она ведет. Икс грезит о приключениях. И вот Александра попадает в Неаполь, чтобы собрать материал для будущей диссертации, посвященной итальянским криминальным сообществам. На залитых ярким солнцем улицах девушка встречает лорда Маркуса Роскаррика, богатого итальянского аристократа, чье прошлое покрыто мраком. Марк открывает Икс двери в мир, о котором она даже не смела мечтать, но, чтобы стать своей в этом мире, героиня должна пройти некие эротические ритуалы - мистерии, которые одновременно пугают и притягивают ее...',
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
        {
          book_raitng: 4,
          user_id: 1,
          book_id: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          book_raitng: 3,
          user_id: 1,
          book_id: 2,
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
