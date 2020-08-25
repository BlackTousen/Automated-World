const japanCities = [
    { 
        name: "Tokyo", 
        region: "Kanto Prefecture",
        area: 847,
        population: 9273000,
        topOne: "The Imperial Palace",
        topTwo: "Ginza District",
        topThree: "The Sensō-ji Temple",
        photo: "img/japan/tokyo.jpg"
},
    { 
        name: "Osaka", 
        region: "Kansai Prefecture",
        area: 86.1,
        population: 2691000,
        topOne: "Osaka Castle",
        topTwo: "Shitennō-ji Temple",
        topThree: "Osaka Aquarium Kaiyukan",
        photo: "img/japan/osaka.jpg"
    },
    { 
        name: "Okinawa",
        region: "Okinawa Prefecture",
        area: 463,
        population: 9273000,
        topOne: "Beaches",
        topTwo: "Shuri Castle",
        topThree: "Churaumi Aquarium",
        photo: "img/japan/okinawa.jpeg"
 },
    {
         name: "Kyoto",
         region: "Kyoto Prefecture",
         area: 319.6,
         population: 1475000,
         topOne: "Nijo Castle",
         topTwo: "Fushimi-Inari Taisha Shrine",
         topThree: "Kinkaku-ji: The Golden Pavilion",
         photo: "img/japan/kyoto.jpg"
        },
    { 
        name: "Kawasaki",
        region: "Kanagawa Prefecture",
        area: 55.73,
        population: 1475000,
        topOne: "Higashiogijima Park",
        topTwo: "Keihin Fushimi Inari Temple",
        topThree: "Higashi-takane Forest Park",
        photo: "img/japan/kawasaki.jpg"
    },
    // { 
    //     name: "Saitama" ,
    //     region: "Kanto Prefecture",
    //     area: 1466,
    //     population: 1475000,
    //     topOne: "Kawagoe",
    //     topTwo: "The Metropolitan Area Outer Underground Discharge Channel",
    //     topThree: "Bonsai Museum"
    // }
]
export const useCities = () => {
    return japanCities.slice()
}
const Cities = (cityObj) => {
    return `
    <div class="cities-list-entries">
    <div class="cities-image">
        <img src="../${cityObj.photo}" alt="${cityObj.name}">
    </div>
    <div class="cities-copy">
        <h2>${cityObj.name}</h2>
        <h3>${cityObj.region}</h3>
        <p class="cities-area"><strong>Size:</strong> ${cityObj.area} mi<sup>2</sup></p>
        <p class="cities-population"><strong>Population:</strong> ${cityObj.population}</p>
        <ul class="cities-top-three">
            <li><h4>Must-See Places:</h4></li>
            <li>${cityObj.topOne}</li>
            <li>${cityObj.topTwo}</li>
            <li>${cityObj.topThree}</li>
        </ul>
    </div>
</div>
`
}
export const cityList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".cities-list")
    const cities = useCities()
    contentElement.innerHTML = '<h2 id="city-intro">Cities Worth Visiting</h2>'

    let citiesHTML = ""
    for (const x of cities) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       citiesHTML += Cities(x)
    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
    ${citiesHTML}
    `
}
