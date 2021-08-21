module.exports = {
	mode: "jit",
	purge: [
		"./pages/*.tsx",
		"./pages/**/*.tsx",
		"./components/**/*.tsx",
		"./components/*.tsx",
	],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			maxHeight: {
				profile: "min(640px, 65vh)",
			},
			minHeight: {
				profile: "380px",
			},
			fontFamily: {
				marker: "Permanent Marker",
			},
			letterSpacing: {
				ultra: ".3em",
			},
		},
	},
	variants: {
		extend: {
			brightness: ["hover"],
		},
	},
	plugins: [],
};
