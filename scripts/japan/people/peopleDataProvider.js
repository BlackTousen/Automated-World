const japanPeople = ["Akira Kurosawa","Ayumi Hamasaki","Emperor Meiji","Utada Hikaru","Minamoto no Yoshitsune","Hayao Miyazaki"]
export const usePeople = () => {
    return japanPeople.slice()
}
const People = (city) => {
    return `
            <li class="famous">${city}</li>
    `
}
export const peopleLists = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".famous-list")
    const cities = usePeople()

    let citiesHTML = ""
    for (const x of cities) {
        /*
            Invoke the Fish component function
            and pass the current fish object as an argument.
            Each time, add the return value to the
            fishHTMLRepresentations variable with `+=`
        */
       citiesHTML += People(x)
    }


    // Add to the existing HTML in the content element
    contentElement.innerHTML += `
         ${citiesHTML}
    `
}