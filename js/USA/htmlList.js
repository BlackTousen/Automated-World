import { useCityData } from './CitiesDataProvider.js';
import { useFamousData } from './FamousDataProvider.js';
import { useLandmarkData } from './LandmarksDataProvider.js';

export const createCityHTML = (cityObj) => {
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
    `;
};

export const createFamousHTML = (famousObj) => {
	return `
        <div class="people-list-entries">
            <div class="people-image">
                <img src="../${famousObj.photo}" alt="${famousObj.name}">
            </div>
            <div class="people-copy">
                <h2>${famousObj.name}</h2>
                <p class="people-birth-info">Born ${famousObj.birth.date} in ${famousObj.birth.place}</p>
                <p class="people-death-info">Died ${famousObj.death.date} in ${famousObj.death.place}</p>
            </div>
        </div>
    `;
};

export const createLandmarksHTML = (landmarkObj) => {
	return `
        <div class="landmarks-list-entries">
            <div class="landmarks-image">
                <img src="../${landmarkObj.photo}" alt="${landmarkObj.name}">
            </div>
            <div class="landmarks-copy">
                <h2>${landmarkObj.name}</h2>
                <p class="landmark-address-street">${landmarkObj.address.street}</p>
                <p class="landmark-address-city">${landmarkObj.address.city}</p>
            </div>
        </div>
    `;
};

export const cityList = () => {
	// Get a reference to the `<article class="content">` element
	const contentElement = document.querySelector('.cities-list');
	const citiesDataArray = useCityData();

	let cityHTMLRepresentation = '';
	for (const placeHolderCities of citiesDataArray) {
		cityHTMLRepresentation += createCityHTML(placeHolderCities);
	}

	// Add to the existing HTML in the content element
	contentElement.innerHTML += `
    <h2 id="city-intro">Cities Worth Visiting</h2>
        ${cityHTMLRepresentation}
    `;
};

export const famousList = () => {
	// Get a reference to the `<article class="content">` element
	const contentElement = document.querySelector('.people-list');
	const famousDataArray = useFamousData();

	let famousHTMLRepresentation = '';
	for (const placeHolderFamous of famousDataArray) {
		famousHTMLRepresentation += createFamousHTML(placeHolderFamous);
	}

	// Add to the existing HTML in the content element
	contentElement.innerHTML += `
        <h2 id="people-intro">Historical Figures</h2>
        ${famousHTMLRepresentation}
    `;
};

export const landmarksList = () => {
	// Get a reference to the `<article class="content">` element
	const contentElement = document.querySelector('.landmarks-list');
	const landmarksDataArray = useLandmarkData();

	let landmarksHTMLRepresentation = '';
	for (const placeHolderLandmarks of landmarksDataArray) {
		landmarksHTMLRepresentation += createLandmarksHTML(placeHolderLandmarks);
	}

	// Add to the existing HTML in the content element
	contentElement.innerHTML += `
        <h2 id="landmark-intro">Must See Locations</h2>
        ${landmarksHTMLRepresentation}
    `;
};
