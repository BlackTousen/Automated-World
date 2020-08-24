const FamousDataArray = [
	{
		Name: 'David Rockefeller',
		birth: { date: '06.12.1915', place: 'New York City, NY' },
		death: { date: '03.20.2017', place: 'Pocantico Hills, NY' },
	},
	{
		Name: 'Howard Hughes',
		birth: { date: '12.24.1905', place: 'Humble, TX' },
		death: { date: '04.05.1976', place: 'Houston, TX' },
	},
	{
		Name: 'Dewayne "The Rock" Johnson',
		birth: { date: '05.02.1972', place: 'Hayward, CA' },
		death: { date: '', place: '' },
	},
	{
		Name: 'Benjamin Franklin',
		birth: { date: '01.17.1706', place: 'Boston, MA' },
		death: { date: '04.17.1790', place: 'Philadelphia, PA' },
	},
	{
		Name: 'Chris Cornell',
		birth: { date: '07.20.1964', place: 'Seattle, WA' },
		death: { date: '05.18.2017', place: 'Detroit, MI' },
	},
];

export const useFamousData = () => {
	return FamousDataArray.slice();
};
