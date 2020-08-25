const peopleCollection = [
    {
        name: "Claude Monet",
        birth: {
            date: "11.14.1840",
            place: "Paris"
        },
        death: {
            date: "12.05.1926",
            place: "Giverny"
        },
        photo: "img/france/monet.jpg"
    },
    {
        name: "Paul Gaugin",
        birth: {
            date: "6.7.1848",
            place: "Paris"
        },
        death: {
            date: "5.8.1903",
            place: "Polynesia"
        },
        photo: "img/france/gaugin.jpg"
    },
    {
        name: "Auguste Rodin",
        birth: {
            date: "11.12.1840",
            place: "Paris"
        },
        death: {
            date: "11.17.1917",
            place: "Meudon"
        },
        photo: "img/france/rodin.jpg"
    },
    {
        name: "Napoleon Bonaparte",
        birth: {
            date: "8.15.1760",
            place: "Ajaccio"
        },
        death: {
            date: "5.5.1821",
            place: "Saint Helena"
        },
        photo: "img/france/napoleon.jpg"
    },
    {
        name: "Joan of Arc",
        birth: {
            date: "1412",
            place: "Domrémy-la-Pucelle"
        },
        death: {
            date: "5.30.1431",
            place: "Rouen"
        },
        photo: "img/france/joan-of-arc.jpg"
    },
    {
        name: "Maurice Ravel",
        birth: {
            date: "3.7.1875",
            place: "Ciboure"
        },
        death: {
            date: "12.28.1937",
            place: "Paris"
        },
        photo: "img/france/ravel.jpg"
    }
];

export const usePeople = () => {
    return peopleCollection.slice()
};