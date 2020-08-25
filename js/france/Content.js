export const City = (cityObj) => {
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
};

export const Landmark = (landObj) => {
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
};

export const People = (peopleObj) => {
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
};