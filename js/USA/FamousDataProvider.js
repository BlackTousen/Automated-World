const FamousDataArray = [
	{
		name: 'David Rockefeller',
		birth: { date: '6.12.1915', place: 'New York City NY' },
		death: { date: '3.20.2017', place: 'Pocantico Hills NY' },
		photo: 'img/usa/davidRockefeller.jpg',
	},
	{
		name: 'Howard Hughes',
		birth: { date: '12.24.1905', place: 'Humble TX' },
		death: { date: '4.5.1976', place: 'Houston, TX' },
		photo: 'img/usa/howardHughes.jpg',
	},
	{
		name: 'Dwayne Johnson',
		birth: { date: '5.2.1972', place: 'Hayward CA' },
		death: { date: 'When he', place: 'feels like it.' },
		photo: 'img/usa/dwayneJohnson.jpg',
	},
	{
		name: 'Benjamin Franklin',
		birth: { date: '1.17.1706', place: 'Boston MA' },
		death: { date: '4.17.1790', place: 'Philadelphia PA' },
		photo: 'img/usa/benFranklin.jpg',
	},
	{
		name: 'Chris Cornell',
		birth: { date: '7.20.1964', place: 'Seattle WA' },
		death: { date: '5.18.2017', place: 'Detroit MI' },
		photo: 'img/usa/chrisCornell.jpg',
	},
];

export const useFamousData = () => {
	return FamousDataArray.slice();
};
