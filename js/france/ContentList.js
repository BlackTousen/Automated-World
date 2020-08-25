import {useCities} from "./CityProvider.js";
import {useLandmarks} from "./LandmarkProvider.js";
import {usePeople} from "./PeopleProvider.js";
import {City, Landmark, People} from "./Content.js";

const cityTarget = document.querySelector(".cities-list");
const landTarget = document.querySelector(".landmarks-list");
const peopleTarget = document.querySelector(".people-list");

export const CityList = () => {
    const cityArray = useCities();
    cityTarget.innerHTML = '<h2 id="city-intro">Cities Worth Visiting</h2>'
    cityArray.forEach(
        (cityObj) => {
            cityTarget.innerHTML += City(cityObj);
        }
    )
};

export const LandmarkList = () => {
    const landArray = useLandmarks();
    landTarget.innerHTML = '<h2 id="landmark-intro">Must See Locations</h2>'
    landArray.forEach(
        (landObj) => {
            landTarget.innerHTML += Landmark(landObj);
        }
    )
};

export const PeopleList = () => {
    const peopleArray = usePeople();
    peopleTarget.innerHTML = '<h2 id="people-intro">Historical Figures</h2>'
    peopleArray.forEach(
        (peopleObj) => {
            peopleTarget.innerHTML += People(peopleObj);
        }
    )
};