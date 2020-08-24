const LandmarkDataArray = [
	{ Name: 'Statue of Liberty' },
	{ Name: 'Hollywood Hills' },
	{ Name: 'Freedom Tower' },
	{ Name: 'Liberty Bell' },
	{ Name: 'Sky Needle' },
];

export const useLandmarkData = () => {
	return LandmarkDataArray.slice();
};
