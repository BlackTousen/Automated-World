const LandmarkDataArray = [
	{
		name: 'Statue of Liberty',
		address: { street: 'New York, NY 10004', city: 'New York City' },
		photo: 'img/usa/statueOfLiberty.jpg',
	},
	{
		name: 'Hollywood Bowl',
		address: { street: '2301 N Highland Ave', city: 'Los Angeles 90068' },
		photo: 'img/usa/hollywoodBowl.jpg',
	},
	{
		name: 'Freedom Tower',
		address: { street: '600 Biscayne Blvd', city: 'Miami 33132' },
		photo: 'img/usa/freedomTower.jpg',
	},
	{
		name: 'Liberty Bell',
		address: { street: '526 Market St', city: 'Philadelphia 19106' },
		photo: 'img/usa/libertyBell.jpg',
	},
	{
		name: 'Space Needle',
		address: { street: '400 Broad St', city: 'Seattle 98109' },
		photo: 'img/usa/spaceNeedle.jpg',
	},
];

export const useLandmarkData = () => {
	return LandmarkDataArray.slice();
};
