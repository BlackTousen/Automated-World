import { useCityData } from './USA/CitiesDataProvider.js';
import { useLandmarkData } from './USA/LandmarksDataProvider.js';
import { useFamousData } from './USA/FamousDataProvider.js';
import {
	// createCityHTML,
	// createLandmarksHTML,
	// createFamousHTML,
	CityList,
	famousList,
	landmarksList,
} from './USA/htmlList.js';
console.log('USA main is connected');

CityList();

famousList();

landmarksList();
