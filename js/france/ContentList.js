import {useCities} from "./CityProvider.js";
import {useLandmarks} from "./LandmarkProvider.js";
import {usePeople} from "./PeopleProvider.js";
import {City, Landmark, People} from "./Content.js";

const cityTarget = document.querySelector(".cities-list");
const landTarget = document.querySelector(".landmarks-list");
const peopleTarget = document.querySelector(".people-list");

export const CityList = () => {
    const cityArray = useCities();
    cityArray.forEach(
        (cityObj) => {
            cityTarget.innerHTML += City(cityObj);
        }
    )
};

export const LandmarkList = () => {
    const landArray = useLandmarks();
    landArray.forEach(
        (landObj) => {
            landTarget.innerHTML += Landmark(landObj);
        }
    )
};

export const PeopleList = () => {
    const peopleArray = usePeople();
    peopleArray.forEach(
        (peopleObj) => {
            peopleTarget.innerHTML += People(peopleObj);
        }
    )
};