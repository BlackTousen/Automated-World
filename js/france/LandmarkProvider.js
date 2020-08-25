const landmarksCollection = [
    {
        name: "Eiffel Tower",
        address: {
            street: "5 Avenue Anatole France",
            city: "75007 Paris"
        },
        photo: "img/france/eiffel-tower.jpg"
    },
    {
        name: "Louvre Museum",
        address: {
            street: "Rue de Rivoli",
            city: "75001 Paris"
        },
        photo: "img/france/louvre.jpg"
    },
    {
        name: "Notre-Dame",
        address: {
            street: "6 Parvis Notre-Dame-Pl.",
            city: "75004 Paris"
        },
        photo: "img/france/notre-dame.jpg"
    },
    {
        name:"Palace of Versailles",
        address: {
            street: "Place d'Armes",
            city: "78000 Versailles"
        },
        photo: "img/france/versailles.jpg"
    },
    {
        name: "Arc de Triomphe",
        address: {
            street: "Place Charles de Gaulle",
            city: "75008 Paris"
        },
        photo: "img/france/arc-de-triomphe.jpg"
    },
    {
        name: "Mont Saint-Michel",
        address: {
            street: "La Caserna Ardevon",
            city: "50170 Normandy"
        },
        photo: "img/france/montsaintmichel.jpg"
    }
];

export const useLandmarks = () => {
    return landmarksCollection.slice()
};