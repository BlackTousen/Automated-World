const cityCollection = [
    {
        name: "Paris",
        area: "40.7",
        population: "2,148,000",
        region: "Ile-de-France",
        topOne: "Eiffel Tower",
        topTwo: "Louvre Museum",
        topThree: "Arc de Triomphe",
        photo: "img/france/paris.jpg"
    },
    {
        name: "Marseille",
        area: "92.9",
        population: "861,635",
        region: "Bouches-du-Rhone",
        topOne: "Basilique Notre Dame de la Garde",
        topTwo: "SENSAS Marseille",
        topThree: "La Cantine de Lynn",
        photo: "img/france/marseille.jpg"

    },
    {
        name: "Bordeaux",
        area: "19.06",
        population: "249,712",
        region: "Gironde",
        topOne: "Bassins de Lumières",
        topTwo: "BLISSS",
        topThree: "Porte Quinze",
        photo: "img/france/bordeaux.jpg"
    },
    {
        name: "Nice",
        area: "27.77",
        population: "342,522",
        region: "French Riviera",
        topOne: "Old Town",
        topTwo: "Promenade des Anglais",
        topThree: "La Route Du Miam",
        photo: "img/france/nice.jpg"
    },
    {
        name: "Lyon",
        area: "18.48",
        population: "513,275",
        region: "Rhone",
        topOne: "Basilique Notre Dame de Fourviere",
        topTwo: "Parc de la Tete d'Or",
        topThree: "Bouchon Bat D'ARgent",
        photo: "/img/france/lyon.jpg"
    },
    {
        name: "Strasbourg",
        area: "30.22",
        population: "277,270",
        region: "Bas-Rhin",
        topOne: "Strasbourg Cathedral",
        topTwo: "La Petite France",
        topThree: "Parc de l'Orangerie",
        photo: "/img/france/strasbourg.jpg"
    }
];

export const useCities = () => {
    return cityCollection.slice()
};