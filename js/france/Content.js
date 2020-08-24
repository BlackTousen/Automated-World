export const City = (cityObj) => {
    return `
        <div class="cities-list-entries">
            <h2>${cityObj.name}</h2>
            <h3>${cityObj.region}</h3>
            <p class="cities-area">${cityObj.area} mi<sup>2</sup></p>
            <p class="cities-population">${cityObj.population}</p>
            <ul class="cities-top-three">
                <li>${cityObj.topOne}</li>
                <li>${cityObj.topTwo}</li>
                <li>${cityObj.topThree}</li>
            </ul>
        </div>
    `
};

export const Landmark = (landObj) => {
    return `
        <div class="landmarks-list-entries">
            <h2>${landObj.name}</h2>
            <p class="landmark-address-street">${landObj.address.street}</p>
            <p class="landmark-address-city">${landObj.address.city}</p>
        </div>
    `
};

export const People = (peopleObj) => {
    return `
        <div class="people-list-entries">
            <h2>${peopleObj.name}</h2>
            <p class="people-birth-info">Born on ${peopleObj.birth.date} in ${peopleObj.birth.place}</p>
            <p class="people-death-info">Died on ${peopleObj.death.date} in ${peopleObj.death.place}</p>
        </div>
    `
};