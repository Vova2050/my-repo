"use strict";

const DATA = [
    {
        "first name": "Олексій",
        "last name": "Петров",
        photo: "./img/trainers/trainer-m1.jpg",
        specialization: "Басейн",
        specializationEN: "swimming pool",
        category: "майстер",
        categoryEN: "master",
        experience: "8 років",
        description:
            "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
    },
    {
        "first name": "Марина",
        "last name": "Іванова",
        photo: "./img/trainers/trainer-f1.png",
        specialization: "Тренажерний зал",
        specializationEN: "gym",
        category: "спеціаліст",
        categoryEN: "specialist",
        experience: "2 роки",
        description:
            "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
    },
    {
        "first name": "Ігор",
        "last name": "Сидоренко",
        photo: "./img/trainers/trainer-m2.jpg",
        specialization: "Дитячий клуб",
        specializationEN: "kids club",
        category: "інструктор",
        categoryEN: "instructor",
        experience: "1 рік",
        description:
            "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
    },
    {
        "first name": "Тетяна",
        "last name": "Мороз",
        photo: "./img/trainers/trainer-f2.jpg",
        specialization: "Бійцівський клуб",
        specializationEN: "fight club",
        category: "майстер",
        categoryEN: "master",
        experience: "10 років",
        description:
            "Тетяна є експертом в бойових мистецтвах. Вона проводить тренування для професіоналів і новачків. Її підхід до навчання допомагає спортсменам досягати високих результатів.",
    },
    {
        "first name": "Сергій",
        "last name": "Коваленко",
        photo: "./img/trainers/trainer-m3.jpg",
        specialization: "Тренажерний зал",
        specializationEN: "gym",
        category: "інструктор",
        categoryEN: "instructor",
        experience: "1 рік",
        description:
            "Сергій фокусується на роботі з фітнесом та кардіотренуваннями. Він вдосконалив свої методики протягом багатьох років. Його учні завжди в формі та енергійні.",
    },
    {
        "first name": "Олена",
        "last name": "Лисенко",
        photo: "./img/trainers/trainer-f3.jpg",
        specialization: "Басейн",
        specializationEN: "swimming pool",
        category: "спеціаліст",
        categoryEN: "specialist",
        experience: "4 роки",
        description:
            "Олена спеціалізується на синхронному плаванні. Вона тренує команди різного рівня. Її команди завжди займають призові місця на змаганнях.",
    },
    {
        "first name": "Андрій",
        "last name": "Волков",
        photo: "./img/trainers/trainer-m4.jpg",
        specialization: "Бійцівський клуб",
        specializationEN: "fight club",
        category: "інструктор",
        categoryEN: "instructor",
        experience: "1 рік",
        description:
            "Андрій має досвід у вивченні різних бойових мистецтв. Він викладає техніку та тактику бою. Його учні здобувають перемоги на міжнародних турнірах.",
    },
    {
        "first name": "Наталія",
        "last name": "Романенко",
        photo: "./img/trainers/trainer-f4.jpg",
        specialization: "Дитячий клуб",
        specializationEN: "kids club",
        category: "спеціаліст",
        categoryEN: "specialist",
        experience: "3 роки",
        description:
            "Наталія розробила унікальну програму для дітей дошкільного віку. Вона допомагає дітям розвивати фізичні та ментальні навички. Її класи завжди веселі та динамічні.",
    },
    {
        "first name": "Віталій",
        "last name": "Козлов",
        photo: "./img/trainers/trainer-m5.jpg",
        specialization: "Тренажерний зал",
        specializationEN: "gym",
        category: "майстер",
        categoryEN: "master",
        experience: "10 років",
        description:
            "Віталій спеціалізується на функціональному тренуванні. Він розробив ряд ефективних тренувальних програм. Його клієнти швидко досягають бажаних результатів.",
    },
    {
        "first name": "Юлія",
        "last name": "Кравченко",
        photo: "./img/trainers/trainer-f5.jpg",
        specialization: "Басейн",
        specializationEN: "swimming pool",
        category: "спеціаліст",
        categoryEN: "specialist",
        experience: "4 роки",
        description:
            "Юлія є експертом у водних видах спорту. Вона проводить тренування з аквагімнастики та аеробіки. Її учні демонструють вражаючі показники на змаганнях.",
    },
    {
        "first name": "Олег",
        "last name": "Мельник",
        photo: "./img/trainers/trainer-m6.jpg",
        specialization: "Бійцівський клуб",
        specializationEN: "fight club",
        category: "майстер",
        categoryEN: "master",
        experience: "12 років",
        description:
            "Олег є визнаним майстром в бойових мистецтвах. Він тренує чемпіонів різних вагових категорій. Його методики вважаються одними з найефективніших у світі бойових мистецтв.",
    },
    {
        "first name": "Лідія",
        "last name": "Попова",
        photo: "./img/trainers/trainer-f6.jpg",
        specialization: "Дитячий клуб",
        specializationEN: "kids club",
        category: "інструктор",
        categoryEN: "instructor",
        experience: "1 рік",
        description:
            "Лідія має великий досвід у роботі з дітьми. Вона організовує різноманітні спортивні ігри та заняття. Її класи завжди допомагають дітям розвивати соціальні навички та командний дух.",
    },
    {
        "first name": "Роман",
        "last name": "Семенов",
        photo: "./img/trainers/trainer-m7.jpg",
        specialization: "Тренажерний зал",
        specializationEN: "gym",
        category: "спеціаліст",
        categoryEN: "specialist",
        experience: "2 роки",
        description:
            "Роман є експертом у кросфіту та функціональних тренуваннях. Він розробив власні програми для різних вікових груп. Його учні часто отримують нагороди на фітнес-турнірах.",
    },
    {
        "first name": "Анастасія",
        "last name": "Гончарова",
        photo: "./img/trainers/trainer-f7.jpg",
        specialization: "Басейн",
        specializationEN: "swimming pool",
        category: "інструктор",
        categoryEN: "instructor",
        experience: "1 рік",
        description:
            "Анастасія фокусується на водних програмах для здоров'я та фітнесу. Вона проводить тренування для осіб з різним рівнем підготовки. Її учні відзначають покращення здоров'я та благополуччя після занять.",
    },
    {
        "first name": "Валентин",
        "last name": "Ткаченко",
        photo: "./img/trainers/trainer-m8.jpg",
        specialization: "Бійцівський клуб",
        specializationEN: "fight club",
        category: "спеціаліст",
        categoryEN: "specialist",
        experience: "2 роки",
        description:
            "Валентин є експертом в таеквондо та кікбоксингу. Він викладає техніку, тактику та стратегію бою. Його учні часто стають чемпіонами на національних та міжнародних змаганнях.",
    },
    {
        "first name": "Лариса",
        "last name": "Петренко",
        photo: "./img/trainers/trainer-f8.jpg",
        specialization: "Дитячий клуб",
        specializationEN: "kids club",
        category: "майстер",
        categoryEN: "master",
        experience: "7 років",
        description:
            "Лариса розробила комплексну програму для розвитку фізичних та інтелектуальних навичок дітей. Вона проводить заняття в ігровій формі. Її методика допомагає дітям стати активними та розумними.",
    },
    {
        "first name": "Олексій",
        "last name": "Петров",
        photo: "./img/trainers/trainer-m9.jpg",
        specialization: "Басейн",
        specializationEN: "swimming pool",
        category: "майстер",
        categoryEN: "master",
        experience: "11 років",
        description:
            "Олексій має багаторічний досвід роботи з плавцями. Він займається якісною підготовкою спортсменів на міжнародних змаганнях. Його методика базується на новітніх технологіях тренувань.",
    },
    {
        "first name": "Марина",
        "last name": "Іванова",
        photo: "./img/trainers/trainer-f9.jpg",
        specialization: "Тренажерний зал",
        specializationEN: "gym",
        category: "спеціаліст",
        categoryEN: "specialist",
        experience: "2 роки",
        description:
            "Марина спеціалізується на роботі з ваговими тренажерами. Вона розробила унікальну програму для набору м'язової маси. Її клієнти завжди задоволені результатами.",
    },
    {
        "first name": "Ігор",
        "last name": "Сидоренко",
        photo: "./img/trainers/trainer-m10.jpg",
        specialization: "Дитячий клуб",
        specializationEN: "swimming pool",
        category: "інструктор",
        categoryEN: "instructor",
        experience: "1 рік",
        description:
            "Ігор працює з дітьми різного віку. Він створив ігрові методики для розвитку координації та спритності. Його уроки завжди цікаві та корисні для малюків.",
    },
    {
        "first name": "Наталія",
        "last name": "Бондаренко",
        photo: "./img/trainers/trainer-f10.jpg",
        specialization: "Бійцівський клуб",
        specializationEN: "fight club",
        category: "майстер",
        categoryEN: "master",
        experience: "8 років",
        description:
            "Наталія є майстром у бойових мистецтвах. Вона вивчала різні техніки та стили, із якими працює зі своїми учнями. Її підхід до навчання відповідає найвищим стандартам.",
    },
    {
        "first name": "Андрій",
        "last name": "Семенов",
        photo: "./img/trainers/trainer-m11.jpg",
        specialization: "Тренажерний зал",
        specializationEN: "gym",
        category: "інструктор",
        categoryEN: "instructor",
        experience: "1 рік",
        description:
            "Андрій спеціалізується на функціональному тренуванні. Він розробив власну систему вправ для зміцнення корпусу. Його учні завжди отримують видимі результати.",
    },
    {
        "first name": "Софія",
        "last name": "Мельник",
        photo: "./img/trainers/trainer-f11.jpg",
        specialization: "Басейн",
        specializationEN: "swimming pool",
        category: "спеціаліст",
        categoryEN: "specialist",
        experience: "6 років",
        description:
            "Софія працює з аквагімнастикою. Вона вивчила різні техніки та стили плавання. Її заняття допомагають клієнтам розслабитися та покращити фізичну форму.",
    },
    {
        "first name": "Дмитро",
        "last name": "Ковальчук",
        photo: "./img/trainers/trainer-m12.png",
        specialization: "Дитячий клуб",
        specializationEN: "kids club",
        category: "майстер",
        categoryEN: "master",
        experience: "10 років",
        description:
            "Дмитро спеціалізується на розвитку дитячого спорту. Він розробив унікальну програму для малюків. Його методики забезпечують гармонійний розвиток дітей.",
    },
    {
        "first name": "Олена",
        "last name": "Ткаченко",
        photo: "./img/trainers/trainer-f12.jpg",
        specialization: "Бійцівський клуб",
        specializationEN: "fight club",
        category: "спеціаліст",
        categoryEN: "specialist",
        experience: "5 років",
        description:
            "Олена є відомим тренером у жіночому бойовому клубі. Вона вивчила різні техніки самооборони. Її підхід дозволяє її ученицям відчувати себе впевнено в будь-яких ситуаціях.",
    },
];
addEventListener('DOMContentLoaded', function () {

    const body = document.querySelector("body");
    let ul = document.querySelector('.trainers-cards__container');
    const sorting = document.querySelector('.sorting');
    sorting.removeAttribute('hidden');
    const aside = document.querySelector('.sidebar');
    aside.removeAttribute('hidden');
    const defaultDATA = JSON.parse(JSON.stringify(DATA));
    const submitFilter = document.querySelector('.filters__submit');

    function templateLi(arr = DATA) {
        ul.innerHTML = '';
        const liTemplate = document.querySelector('#trainer-card');
        for (let i = 0; i < arr.length; i++) {
            const clone = liTemplate.content.cloneNode(true);
            let li = clone.childNodes[1];
            let img = li.childNodes[1];
            let trainerName = li.childNodes[3];
            const btn = li.childNodes[5];
            img.setAttribute('src', arr[i].photo);
            trainerName.textContent = arr[i]['first name'] + ' ' + arr[i]['last name'];
            ul.append(clone);

            const arrOfSort = sorting.querySelectorAll('button');
            if (arrOfSort[0].classList.contains('sorting__btn--active')) {
                arrOfSort[0].classList.remove('sorting__btn--active');
            }
            arrOfSort[localStorage.getItem('indexActive')].classList.add('sorting__btn--active');
           

            addEventListener('click', function (event){
                for (let j = 0; j < arrOfSort.length; j++) {
                    if (arrOfSort[j].classList.contains('sorting__btn--active')) {
                        arrOfSort[j].classList.remove('sorting__btn--active');
                    }
                }
                if (event.target === arrOfSort[0]) {
                    arrOfSort[0].classList.add('sorting__btn--active');
                    img.setAttribute('src', defaultDATA[i].photo );
                    trainerName.innerText = defaultDATA[i]["first name"] + ' ' + defaultDATA[i]["last name"];
                    localStorage.setItem('indexActive', '0');


                }
                if (event.target === arrOfSort[1]) {
                    arrOfSort[1].classList.add('sorting__btn--active');
                    const sortedDATA = DATA.sort((a, b) => a['last name'].localeCompare(b['last name']));
                    img.setAttribute('src', sortedDATA[i].photo );
                    trainerName.innerText = sortedDATA[i]["first name"] + ' ' + sortedDATA[i]["last name"];
                    localStorage.setItem('indexActive', '1');

                }
                if (event.target === arrOfSort[2]) {
                    arrOfSort[2].classList.add('sorting__btn--active');
                    localStorage.setItem('indexActive', '2');
                    const experienceDATA = arr.sort((a,b) => b.experience.slice(0,2) - a.experience.slice(0,2) )
                    img.setAttribute('src', experienceDATA[i].photo );
                    trainerName.innerText = experienceDATA[i]["first name"] + ' ' + experienceDATA[i]["last name"];
                }
                if (event.target === btn) {
                    document.body.style.overflow = 'hidden';
                    const templateModal = document.querySelector('#modal-template');

                    const cloneModal = templateModal.content.cloneNode(true);
                    const modal = cloneModal.childNodes[1];
                    const modalBody = modal.childNodes[1]
                    const modalImg = modalBody.childNodes[1];
                    modalImg.setAttribute('src', DATA[i].photo);
                    const modalDescription = modalBody.childNodes[3];
                    const modalClose = modalBody.childNodes[5];
                    const modalName = modalDescription.childNodes[1];
                    modalName.textContent = arr[i]['first name'] + ' ' + arr[i]['last name'];
                    const modalCategory = modalDescription.childNodes[3];
                    const modalExperience = modalDescription.childNodes[5];
                    const modalSpecification = modalDescription.childNodes[7];
                    const modalText = modalDescription.childNodes[9];
                    modalCategory.textContent = arr[i].category;
                    modalExperience.textContent = arr[i].experience;
                    modalSpecification.textContent = arr[i].specialization;
                    modalText.textContent = arr[i].description;
                    body.append(cloneModal);
                    modalClose.addEventListener('click', function () {
                        document.body.style.overflow = 'auto';
                        modal.remove();
                    })
                }
            })
        }
    }
    templateLi(DATA);
    submitFilter.addEventListener('click', function (event) {

        event.preventDefault();
        const dirInp = document.querySelector('input[name="direction"]:checked').value;
        const catInp = document.querySelector('input[name="category"]:checked').value;
        let filtredTrainersDir = DATA;
        let filtredTrainersCat = DATA;
        filtredTrainersDir = filtredTrainersDir.filter((trainer) => trainer.specializationEN.includes(dirInp))
        if (dirInp === 'all')
        {filtredTrainersDir = DATA}
        filtredTrainersCat = filtredTrainersCat.filter((trainer) => trainer.categoryEN.includes(catInp));
        if (catInp === 'all')
        {
            filtredTrainersCat = DATA;
        }
        filtredTrainersCat = filtredTrainersDir.filter(trainer => filtredTrainersCat.includes(trainer));
        templateLi(filtredTrainersCat);

    })
})

