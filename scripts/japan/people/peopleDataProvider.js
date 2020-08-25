const japanPeople = [
    {
        photo: "img/japan/akira.jpg",
        name: "Akira Kurosawa",
        birth: {
            date: "03.23.1910",
            place: "Shinagawa"
        },
        death: {
            date: "09.06.1998",
            place: "Setagaya"
        }
   }, 
    {
        photo: "img/japan/ayumi.jpg",
        name: "Ayumi Hamasaki",
        birth: {
            date: "10.02.1978",
            place: "Fukuoka"
        },
        death: {
            date: "Alive and Well",
            place: ""
        }
},
    {
        photo: "img/japan/meiji.jpg",
        name: "Emperor Meiji",
        birth: {
            date: "11.03.1852",
            place: "Kyoto"
        },
        death: {
            date: "07.30.1912",
            place: "Meiji Palace"
        }
},
//     {
//         name: "Utada Hikaru",
//         birth: {
//             date: "01.19.1983",
//             place: ""
//         },
//         death: {
//             date: "",
//             place: ""
//         }
// },
    {
        photo: "img/japan/minamoto.jpg",
        name: "Minamoto no Yoshitsune",
        birth: {
            date: "1159",
            place: ""
        },
        death: {
            date: "06.15.1189",
            place: ""
        }
},
    {
        photo: "img/japan/hayao.jpg",
        name: "Hayao Miyazaki",
        birth: {
            date: "01.05.1941",
            place: "Bunkyo, Tokyo"
        },
        death: {
            date: "Alive and Well",
            place: ""
        }
}
]
export const usePeople = () => {
    return japanPeople.slice()
}
const People = (peopleObj) => {
    return `
    <div class="people-list-entries">
    <div class="people-image">
        <img src="../${peopleObj.photo}" alt="${peopleObj.name}">
    </div>
    <div class="people-copy">
        <h2>${peopleObj.name}</h2>
        <p class="people-birth-info">Born ${peopleObj.birth.date} in ${peopleObj.birth.place}</p>
        <p class="people-death-info">Died ${peopleObj.death.date} in ${peopleObj.death.place}</p>
    </div>
</div>
`
}
export const peopleLists = () => {

    // Get a reference to the `<article class="content">` element
    const contentElement = document.querySelector(".people-list")
    const cities = usePeople()
    contentElement.innerHTML = '<h2 id="people-intro">Historical Figures</h2>'

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