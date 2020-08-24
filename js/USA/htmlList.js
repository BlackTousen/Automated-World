import { useCityData } from './CitiesDataProvider.js';
import { useFamousData } from './FamousDataProvider.js';
import { useLandmarkData } from './LandmarksDataProvider.js';

export const createCityHTML = (cityObj) => {
	return `
        <div class="cities-list-entries">
            <h2>${cityObj.name}</h2>
            <h3>${cityObj.region}</h3>
            <p class="cities-area">${cityObj.area} mi<sup>2</sup></p>
            <p class="cities-population">${cityObj.population}</p>
        </div>
    `;
};

export const createFamousHTML = (FamousArray) => {
	return `
        <section class="Famous-List">
            <li>${FamousArray}</li>
        </section>
    `;
};

export const createLandmarksHTML = (LandmarksArray) => {
	return `
        <section class="Famous-List">
            <li>${LandmarksArray}</li>
        </section>
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
    
        ${cityHTMLRepresentation}
    `;
};

export const famousList = () => {
	// Get a reference to the `<article class="content">` element
	const contentElement = document.querySelector('.people-list');
	const famousDataArray = useFamousData();

	let famousHTMLRepresentation = '';
	for (const placeHolderFamous of famousDataArray) {
		famousHTMLRepresentation += createFamousHTML(placeHolderFamous.Name);
	}

	// Add to the existing HTML in the content element
	contentElement.innerHTML += `
    
        ${famousHTMLRepresentation}
    `;
};

export const landmarksList = () => {
	// Get a reference to the `<article class="content">` element
	const contentElement = document.querySelector('.landmarks-list');
	const landmarksDataArray = useLandmarkData();

	let landmarksHTMLRepresentation = '';
	for (const placeHolderLandmarks of landmarksDataArray) {
		landmarksHTMLRepresentation += createLandmarksHTML(
			placeHolderLandmarks.Name
		);
	}

	// Add to the existing HTML in the content element
	contentElement.innerHTML += `
    
        ${landmarksHTMLRepresentation}
    `;
};
