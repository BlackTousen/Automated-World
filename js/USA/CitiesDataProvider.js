const citiesDataArray = [
	{
		name: 'New York City',
		area: '468 Sq Mi',
		population: '8.3 Million',
		region: 'New York',
	},
	{
		name: 'Los Angeles',
		area: '502 Sq Mi',
		population: '3.9 Million',
		region: 'California',
	},
	{
		name: 'Miami',
		area: '56 Sq Mi',
		population: '467 Thousand',
		region: 'Florida',
	},
	{
		name: 'Philadelphia',
		area: '142 Sq Mi',
		population: '1.5 Million',
		region: 'Pennsylvania',
	},
	{
		name: 'Seattle',
		area: '142 Sq Mi',
		population: '608 Thousand',
		region: 'Washington',
	},
];

export const useCityData = () => {
	return citiesDataArray.slice();
};
