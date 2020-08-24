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
        }
    },
    {
        name: "Paul Gaugin",
        birth: {
            date: "06.07.1848",
            place: "Paris"
        },
        death: {
            date: "05.08.1903",
            place: "French Polynesia"
        }
    },
    {
        name: "Napoleon Bonaparte",
        birth: {
            date: "08.15.1760",
            place: "Ajaccio"
        },
        death: {
            date: "05.05.1821",
            place: "Saint Helena"
        }
    },
    {
        name: "Joan of Arc",
        birth: {
            date: "Circa 1412",
            place: "Domrémy-la-Pucelle"
        },
        death: {
            date: "05.30.1431",
            place: "Rouen"
        }
    },
    {
        name: "Maurice Ravel",
        birth: {
            date: "03.07.1875",
            place: "Ciboure"
        },
        death: {
            date: "12.28.1937",
            place: "Paris"
        }
    }
];

export const usePeople = () => {
    return peopleCollection.slice()
};