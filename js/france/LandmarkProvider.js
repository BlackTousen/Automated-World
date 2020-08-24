const landmarksCollection = [
    {
        name: "Eiffel Tower",
        address: {
            street: "5 Avenue Anatole France",
            city: "75007 Paris"
        },
        photo: "eiffel-tower.jpg"
    },
    {
        name: "Louvre Museum",
        address: {
            street: "Rue de Rivoli",
            city: "75001 Paris"
        }
    },
    {
        name: "Cathédrale Notre-Dame de Paris",
        address: {
            street: "6 Parvis Notre-Dame-Pl.",
            city: "75004 Paris"
        }
    },
    {
        name:"Palace of Versailles",
        address: {
            street: "Place d'Armes",
            city: "78000 Versaille"
        }
    },
    {
        name: "Arc de Triomphe",
        address: {
            street: "Place Charles de Gaulle",
            city: "75008 Paris"
        }
    }
];

export const useLandmarks = () => {
    return landmarksCollection.slice()
};