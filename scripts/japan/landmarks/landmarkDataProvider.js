const japanLandmarks = [
    {
        name: "Shurijo Castle",
        address: { street: "1 Chome-2 Shurikinjocho", city: "Naha, Okinawa, Japan" },
        photo: "img/japan/shujiro.jpg"
    },
    {
        name: "Tokyo's Skytree",
        address:{ street: "1 Chome-1-2 Oshiage", city: "Sumida City, Tokyo, Japan" },
        photo: "img/japan/skytree.jpeg"
            },
    {
        name: "Taketomi Beach",
        address: { street: "Taketomi Island", city: "Japan" },
        photo: "img/japan/taketomi.jpg"
    },
    {
        name: "Mount Fuji",
        address: { street:"Shizuoka‎ and ‎Yamanashi prefectures", city: "Japan" },
        photo: "img/japan/fuji.jpg"
    },
    {
        name: "Kinkaku-ji",
        address: { street: "1 Kinkakujicho", city: "Kita Ward, Kyoto, Japan" },
        photo: "img/japan/kinkaku.jpg"
    }
]
export const useLandmarks = () => {
    return japanLandmarks.slice()
}
const Landmarks = (landObj) => {
    return `
    <div class="landmarks-list-entries">
    <div class="landmarks-image">
        <img src="../${landObj.photo}" alt="${landObj.name}">
    </div>
    <div class="landmarks-copy">
        <h2>${landObj.name}</h2>
        <p class="landmark-address-street">${landObj.address.street}</p>
        <p class="landmark-address-city">${landObj.address.city}</p>
    </div>
</div>
`
}
export const landmarkList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".landmarks-list")
    const cities = useLandmarks()
    contentElement.innerHTML = '<h2 id="landmark-intro">Must See Locations</h2>'

    let citiesHTML = ""
    for (const x of cities) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       citiesHTML += Landmarks(x)
    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
         ${citiesHTML}
    `
}