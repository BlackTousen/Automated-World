const LandmarkDataArray = [
	{
		name: 'Statue of Liberty',
		address: { street: 'New York, NY 10004', city: 'New York City' },
	},
	{
		name: 'Hollywood Bowl',
		address: { street: '2301 N Highland Ave', city: 'Los Angeles 90068' },
	},
	{
		name: 'Freedom Tower',
		address: { street: '600 Biscayne Blvd', city: 'Miami 33132' },
	},
	{
		name: 'Liberty Bell',
		address: { street: '526 Market St', city: 'Philadelphia 19106' },
	},
	{
		name: 'Sky Needle',
		address: { street: '400 Broad St', city: 'Seattle 98109' },
	},
];

export const useLandmarkData = () => {
	return LandmarkDataArray.slice();
};
