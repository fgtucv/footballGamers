const footballPlayers = [
    {
        playerName: "Андрі́й Лу́нін",
        playerImg: "https://s.ill.in.ua/i/news/630x373/517/517874.jpg",
        playerInfo: "воротар іспанського клубу «Реал Мадрид» і збірної України. У складі збірної України U-20 став переможцем молодіжного чемпіонату світу 2019, а також визнаний ФІФА найкращим голкіпером цього турніру[3]. Майстер спорту України міжнародного класу (2019).",
    },
    {
        playerName: "Віталій Миколенко",
        playerImg: "https://static.ukrinform.com/photos/2022_01/thumb_files/630_360_1641050117-650.jpg",
        playerInfo: "український футболіст, лівий захисник англійського клубу «Евертон» та збірної України.",
    },
    {
        playerName: "Микола Матвієнко",
        playerImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj_0oqPMOY6CORNqjxnxO9XJvzo1ZVm7ER8g&usqp=CAU",
        playerInfo: "український футболіст, захисник донецького «Шахтаря» та збірної України. Триразовий чемпіон України, чотириразовий переможець Кубка України, дворазовий півфіналіст Ліги Європи (2015/16, 2019/20), фіналіст Юнацької ліги УЄФА 2014/15.",
    },
    {
        playerName: "Ілля Забарний",
        playerImg: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Illya_Zabarnyi_2023.jpg/375px-Illya_Zabarnyi_2023.jpg",
        playerInfo: "український футболіст, центральний захисник англійського клубу «Борнмут» та збірної України.",
    },
    {
        playerName: "Юхим Конопля",
        playerImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTswsD1GYMbchAZMZw7CtHEtkYH1EB00w2nzQ&usqp=CAU",
        playerInfo: "український футболіст, правий захисник донецького «Шахтаря» та збірної України. Чемпіон світу молодіжного чемпіонату світу 2019 у складі збірної України U-20.",
    },
    {
        playerName: "Олександр Зінченко",
        playerImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlNFT8bBJXw9wHxBMBWl_J8W3bvfmruV4RAA&usqp=CAU",
        playerInfo: "український футболіст, півзахисник і лівий захисник лондонського «Арсеналу» та збірної України. Колишній гравець «Манчестер Сіті», у складі якого став найтитулованішим українським гравцем у європейських чемпіонатах.",
    },
    {
        playerName: "Володимир Бражко",
        playerImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNJjdwbrMtKyjEKhDjgfD8WYgcN2l9TbqcYw&usqp=CAU",
        playerInfo: "український футболіст, опорний півзахисник київського «Динамо». Бронзовий призер молодіжного чемпіонату Європи 2023 у складі збірної України U-21.",
    },
    {
        playerName: "Георгій Судаков",
        playerImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPMAX2GT-ohcZWyOhehmcW1oZs1LwyD9QGsw&usqp=CAU",
        playerInfo: "український футболіст, півзахисник донецького «Шахтаря», молодіжної та національної збірних України. Бронзовий призер молодіжного чемпіонату Європи 2023 у складі збірної України U-21, найкращий бомбардир молодіжного чемпіонату Європи 2023.",
    },
    {
        playerName: "Михайло Мудрик",
        playerImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjsnpV8B6TN27md3apMYn6F0VBe0TiYgpYSg&usqp=CAU",
        playerInfo: "український футболіст, лівий вінгер лондонського «Челсі» і збірної України. Бронзовий призер молодіжного чемпіонату Європи 2023 у складі збірної України U-21.",
    },
    {
        playerName: "Артем Довбик",
        playerImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScWneX9SDm_USdrQzZq2ZBQlg-GzrYVcgcEQ&usqp=CAU",
        playerInfo: " український футболіст, нападник іспанської «Жирони» та збірної України.",
    },
    {
        playerName: "Олександр Зубков",
        playerImg: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQginkdK7SzT182awrhATgttjULtRTGxvSseA&usqp=CAU",
        playerInfo: "український футболіст, вінгер донецького «Шахтаря» та збірної України.",
    },
];

const list = document.querySelector(".fotboler_list");
const modalImg = document.querySelector(".fottboler_modal-img");
const modalName = document.querySelector(".fottboler_name");
const modalInfo = document.querySelector(".fottboler_info");
const bacdrop = document.querySelector(".bacdrop");

const htmlListCode = footballPlayers.map((player) => {
    return `<li class="fotboler_item"><img class="fotboler_img" src="${player.playerImg}" alt=""></li>`;
}).join("");

console.log(htmlListCode)

list.insertAdjacentHTML("beforeend", htmlListCode);

list.addEventListener("click", openModal);
bacdrop.addEventListener("click", closeModal)

function openModal(event) {
    const element = event.target;

    // if (!element.classList.contains("fotboler_item")) {
    //     return;
    // };

    modalImg.src = element.src;

    footballPlayers.forEach((player) => {
        if (element.src === player.playerImg) {
            modalInfo.textContent = `${player.playerInfo}`;
            modalName.textContent = `${player.playerName}`
        }

        bacdrop.id = "";
    });
};

function closeModal() {
    bacdrop.id = "is-hiden";
}