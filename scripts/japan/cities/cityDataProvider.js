const japanCities = ["Tokyo","Osaka","Okinawa","Kyoto","Kawasaki","Saitama"]
export const useCities = () => {
    return japanCities.slice()
}
const Cities = (city) => {
    return `
            <li class="city">${city}</li>
    `
}
export const cityList = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".cities-list")
    const cities = useCities()

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
        <article class="cards">
         ${citiesHTML}
        </article>
    `
}