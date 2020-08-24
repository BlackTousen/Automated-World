import { usePeople, peopleLists } from './people/peopleDataProvider.js'
import { useCities, cityList } from './cities/cityDataProvider.js'
import { useLandmarks, landmarkList } from './landmarks/landmarkDataProvider.js'

const japanFacts = ["Japan is made up of 6,852 islands.","Tokyo is the most populated city on earth with 38,140,000 people.","You can sleep at work.","Haiku poetry, which was invented in Japan, consists of only three lines and is the world’s shortest poetic form.","Over two billion manga, Japanese comic books or graphic novels, are sold in Japan each year.","There are millions of vending machines that sell anything from food to sex toys."]
const useFacts = () => {
    return japanFacts.slice()
}

const usedPeopleList = usePeople()
const usedCitiesList = useCities()
const usedLandmarksList = useLandmarks()
cityList()
landmarkList()
peopleLists()
document.getElementById("myBtn").onclick = function() {myFunction()};
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }