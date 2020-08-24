import { useCityData } from './CitiesDataProvider.js';
import { useFamousData } from './FamousDataProvider.js';
import { useLandmarkData } from './LandmarksDataProvider.js';

export const createCityHTML = (CitiesArray) => {
	return `
        <section class="Cities-List">
            <li>${CitiesArray}</li>
        </section>
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

export const CityList = () => {
	// Get a reference to the `<article class="content">` element
	const contentElement = document.querySelector('.cities-holder');
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
	const contentElement = document.querySelector('.famous-holder');
	const famousDataArray = useFamousData();

	let famousHTMLRepresentation = '';
	for (const placeHolderFamous of famousDataArray) {
		famousHTMLRepresentation += createFamousHTML(placeHolderFamous);
	}

	// Add to the existing HTML in the content element
	contentElement.innerHTML += `
    
        ${famousHTMLRepresentation}
    `;
};

export const landmarksList = () => {
	// Get a reference to the `<article class="content">` element
	const contentElement = document.querySelector('.landmarks-holder');
	const landmarksDataArray = useLandmarkData();

	let landmarksHTMLRepresentation = '';
	for (const placeHolderLandmarks of landmarksDataArray) {
		landmarksHTMLRepresentation += createLandmarksHTML(placeHolderLandmarks);
	}

	// Add to the existing HTML in the content element
	contentElement.innerHTML += `
    
        ${landmarksHTMLRepresentation}
    `;
};
