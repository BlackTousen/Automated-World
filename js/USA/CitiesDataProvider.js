const citiesDataArray = [
	{
		name: 'New York City',
		area: '468 Sq Mi',
		population: '8.3 Million',
		region: 'New York',
		photo: 'img/usa/newYork.jpeg',
		topOne: 'Statue of Liberty',
		topTwo: 'Empire State Building',
		topThree: 'Central Park',
	},
	{
		name: 'Los Angeles',
		area: '502 Sq Mi',
		population: '3.9 Million',
		region: 'California',
		photo: 'img/usa/losAngeles.jpeg',
		topOne: 'Griffith Observatory',
		topTwo: 'Hollywood Walk of Fame',
		topThree: 'Hollywood Bowl',
	},
	{
		name: 'Miami',
		area: '56 Sq Mi',
		population: '467 Thousand',
		region: 'Florida',
		photo: 'img/usa/miami.jpeg',
		topOne: 'Freedom Tower',
		topTwo: 'Wynwood Walls',
		topThree: 'Little Havana',
	},
	{
		name: 'Philadelphia',
		area: '142 Sq Mi',
		population: '1.5 Million',
		region: 'Pennsylvania',
		photo: 'img/usa/philadelphia.jpeg',
		topOne: 'Liberty Bell',
		topTwo: 'Museum of Art',
		topThree: 'Eastern State Penitentiary',
	},
	{
		name: 'Seattle',
		area: '142 Sq Mi',
		population: '608 Thousand',
		region: 'Washington',
		photo: 'img/usa/seattle.jpeg',
		topOne: 'Space Needle',
		topTwo: 'Pike Place Market',
		topThree: 'Chihuly Garden and Glass',
	},
];

export const useCityData = () => {
	return citiesDataArray.slice();
};
