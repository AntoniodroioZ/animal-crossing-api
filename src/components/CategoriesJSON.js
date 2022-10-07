import ImgBugs from './images/nature.png';
import ImgFish from './images/fish.png';
import ImgSea from './images/sea.png';
import ImgFossil from './images/fossil.png';

export const Categories = [
    {
        id: 0,
        name:"Home",
        listCategories:[]
    },
    {
        id: 1,
        name:"Nature",
        listCategories:[
            {
                img:ImgBugs,
                name:"Bugs",
                api_name:"bugs",
            },
            {
                img:ImgFish,
                name:"Fishes",
                api_name:"fish",
            },
            {
                img:ImgSea,
                name:"Sea",
                api_name:"sea",
            },
            {
                img:ImgFossil,
                name:"Fossils",
                api_name:"fossils",
            },
        ]
    },
    {
        id: 2,
        name:"Art",
        listCategories:[]
    },
    {
        id: 3,
        name:"Villagers",
        listCategories:[]
    },
    {
        id: 4,
        name:"All Items",
        listCategories:[]
    },
];