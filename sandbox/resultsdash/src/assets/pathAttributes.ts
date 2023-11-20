const pathAttributes = {
	total: {
		bodyDAttribute:
			"M 6.995 18.083 L 6.995 26.833 C 6.995 27.478 6.473 28 5.828 28 C 5.184 28 4.662 27.478 4.662 26.833 L 4.662 8.75 C 3.193 9.578 2.298 11.147 2.333 12.833 C 2.333 13.478 1.811 14 1.167 14 C 0.522 14 0 13.478 0 12.833 C 0 8.959 2.908 6.099 6.995 5.85 L 7 18.083 L 6.995 18.083 L 6.995 18.083 Z  M 8.167 20.417 L 8.167 26.833 C 8.167 27.478 8.689 28 9.333 28 C 9.978 28 10.5 27.478 10.5 26.833 L 10.5 20.417 L 11.667 20.417 C 11.825 20.431 11.982 20.374 12.095 20.262 C 12.208 20.149 12.265 19.992 12.25 19.833 L 9.917 8.75 C 11.647 9.367 12.811 10.996 12.833 12.833 C 12.833 13.478 13.356 14 14 14 C 14.644 14 15.167 13.478 15.167 12.833 C 15.167 8.961 12.255 6.099 8.167 5.85 L 8.167 5.833 L 8.167 20.417 Z",
		headDAttribute:
			"M 5.245 2.333 C 5.245 1.046 6.29 0 7.578 0 C 8.866 0 9.912 1.046 9.912 2.333 C 9.912 3.621 8.866 4.667 7.578 4.667 C 6.29 4.667 5.245 3.621 5.245 2.333 Z",
	},
	girls: {
		bodyDAttribute:
			"M 8 9.185 C 4.766 9.185 2.327 11.486 2.327 14.568 C 2.327 15.038 2.708 15.419 3.178 15.419 C 3.648 15.419 4.029 15.038 4.029 14.568 C 4.021 13.219 4.777 11.981 5.982 11.374 L 4.672 18.186 C 4.652 18.348 4.702 18.51 4.81 18.632 C 4.918 18.754 5.073 18.824 5.235 18.824 L 5.728 18.824 L 5.728 23.649 C 5.728 24.119 6.109 24.5 6.579 24.5 C 7.049 24.5 7.43 24.119 7.43 23.649 L 7.43 18.824 L 8.565 18.824 L 8.565 23.649 C 8.565 24.119 8.947 24.5 9.417 24.5 C 9.887 24.5 10.268 24.119 10.268 23.649 L 10.268 18.824 L 10.76 18.824 C 10.923 18.824 11.078 18.754 11.186 18.632 C 11.294 18.51 11.344 18.348 11.324 18.186 L 10.014 11.371 C 11.221 11.978 11.979 13.217 11.971 14.568 C 11.971 15.038 12.352 15.419 12.822 15.419 C 13.292 15.419 13.673 15.038 13.673 14.568 C 13.673 11.486 11.234 9.185 8 9.185 Z",
		headDAttribute:
			"M 5.728 5.77 C 5.728 4.517 6.745 3.5 7.998 3.5 C 9.251 3.5 10.268 4.517 10.268 5.77 C 10.268 7.023 9.251 8.041 7.998 8.041 C 6.745 8.041 5.728 7.023 5.728 5.77 Z",
	},
	boys: {
		bodyDAttribute:
			"M 8 9.185 C 4.766 9.185 2.327 11.486 2.327 14.568 C 2.327 15.038 2.708 15.419 3.178 15.419 C 3.648 15.419 4.029 15.038 4.029 14.568 C 4.019 13.321 4.666 12.162 5.732 11.515 L 5.732 23.649 C 5.732 24.119 6.113 24.5 6.583 24.5 C 7.053 24.5 7.434 24.119 7.434 23.649 L 7.434 17.689 L 8.569 17.689 L 8.569 23.649 C 8.569 24.119 8.951 24.5 9.421 24.5 C 9.891 24.5 10.272 24.119 10.272 23.649 L 10.272 11.517 C 11.335 12.164 11.981 13.323 11.971 14.568 C 11.971 15.038 12.352 15.419 12.822 15.419 C 13.292 15.419 13.673 15.038 13.673 14.568 C 13.673 11.486 11.234 9.185 8 9.185 Z",
		headDAttribute:
			"M 5.732 5.77 C 5.732 4.517 6.749 3.5 8.002 3.5 C 9.255 3.5 10.272 4.517 10.272 5.77 C 10.272 7.023 9.255 8.041 8.002 8.041 C 6.749 8.041 5.732 7.023 5.732 5.77 Z",
	},
	women: {
		bodyDAttribute:
			"M 7.583 5.833 C 3.185 5.833 0 8.779 0 12.833 C 0 13.478 0.522 14 1.167 14 C 1.811 14 2.333 13.478 2.333 12.833 C 2.333 10.989 3.505 9.348 5.25 8.75 L 2.917 19.833 C 2.902 19.992 2.959 20.149 3.072 20.262 C 3.184 20.374 3.341 20.431 3.5 20.417 L 4.667 20.417 L 4.667 26.833 C 4.667 27.478 5.189 28 5.833 28 C 6.478 28 7 27.478 7 26.833 L 7 20.417 L 8.167 20.417 L 8.167 26.833 C 8.167 27.478 8.689 28 9.333 28 C 9.978 28 10.5 27.478 10.5 26.833 L 10.5 20.417 L 11.667 20.417 C 11.825 20.431 11.982 20.374 12.095 20.262 C 12.208 20.149 12.265 19.992 12.25 19.833 L 9.917 8.75 C 11.647 9.367 12.811 10.996 12.833 12.833 C 12.833 13.478 13.356 14 14 14 C 14.644 14 15.167 13.478 15.167 12.833 C 15.167 8.779 11.976 5.833 7.583 5.833 Z",
		headDAttribute:
			"M 5.244 2.333 C 5.244 1.046 6.29 0 7.578 0 C 8.865 0 9.911 1.046 9.911 2.333 C 9.911 3.621 8.865 4.667 7.578 4.667 C 6.29 4.667 5.244 3.621 5.244 2.333 Z",
	},
	men: {
		bodyDAttribute:
			"M 7.578 5.833 C 3.187 5.833 0 8.777 0 12.833 C 0 13.478 0.522 14 1.167 14 C 1.811 14 2.333 13.478 2.333 12.833 C 2.298 11.147 3.193 9.578 4.662 8.75 L 4.662 26.833 C 4.662 27.478 5.184 28 5.828 28 C 6.473 28 6.995 27.478 6.995 26.833 L 6.995 18.083 L 8.162 18.083 L 8.162 26.833 C 8.162 27.478 8.684 28 9.328 28 C 9.973 28 10.495 27.478 10.495 26.833 L 10.495 8.749 C 11.965 9.577 12.861 11.146 12.826 12.833 C 12.826 13.478 13.348 14 13.993 14 C 14.637 14 15.159 13.478 15.159 12.833 C 15.159 8.777 11.971 5.833 7.578 5.833 Z",
		headDAttribute:
			"M 5.245 2.333 C 5.245 1.046 6.29 0 7.578 0 C 8.866 0 9.912 1.046 9.912 2.333 C 9.912 3.621 8.866 4.667 7.578 4.667 C 6.29 4.667 5.245 3.621 5.245 2.333 Z",
	},
};

export default pathAttributes;