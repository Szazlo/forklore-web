import {Timestamp} from "firebase/firestore";

export const recipes = [
    {
        id: 1,
        title: 'Kebab and rice',
        cookingTime: 45,
        difficulty: 'hard',
        averageRating: 4,
        createdAt: Timestamp,
        about: "kebab and rice taste good yes" ,
        content: 'put rice with kebab',

    },
    {
        id: 2,
        title: 'galvanized steel',
        cookingTime: 400,
        difficulty: 'hard as shit',
        averageRating: 4,
        createdAt: Timestamp,
        about: "galvanized steel fried in lava" ,
        content: 'serve with steak as a side',
    },
    {
        id: 3,
        title: 'crisps',
        cookingTime: 400,
        difficulty: 'easy',
        averageRating: 4,
        createdAt: Timestamp,
        about: "fried crisps" ,
        content: 'fry potat',
    },
    {
        id: 4,
        title: 'bacon sausage',
        cookingTime: 400,
        difficulty: 'medium',
        averageRating: 4,
        createdAt: Timestamp,
        about: "bacon rolled on a sausage" ,
        content: 'grill or sear on pan',
    },
    {
        id: 5,
        title: 'dog',
        cookingTime: 400,
        difficulty: 'hard',
        averageRating: 4,
        createdAt: Timestamp,
        about: "grilled dog" ,
        content: 'cook on 225 in oven',
    },
    {
        id: 6,
        title: 'fufu',
        cookingTime: 400,
        difficulty: 'impossible',
        averageRating: 4,
        createdAt: Timestamp,
        about: "some african shit" ,
        content: 'boil or sum shit',
    }

]
