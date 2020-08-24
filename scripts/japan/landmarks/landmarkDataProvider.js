const japanLandmarks = [
    {
        name: "Shujiro Castle",
        location: "Naha, Japan"
    },
    {
        name: "Tokyo's Skytree",
        location: "Tokyo, Japan"
    },
    {
        name: "Taketomi Beach",
        location: "Taketomi Island, Japan"
    },
    {
        name: "Mount Fuji",
        location: "Shizuoka‎ and ‎Yamanashi prefectures"
    },
    {
        name: "Kinkaku-ji",
        location: "Kyoto, Japan"
    }
]
export const useLandmarks = () => {
    return japanLandmarks.slice()
}
const Landmarks = (city) => {
    return `
            <li class="landmark">${city.name} --- ${city.location}</li>
    `
}
export const landmarkList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".landmarks-list")
    const cities = useLandmarks()

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
        <article class="cards">
         ${citiesHTML}
        </article>
    `
}