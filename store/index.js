

export const state = () => ({
	navOverlay: false,
});

export const mutations = {
	toggleNav: (state, payload) => {
		state.navOverlay = payload;
	},
	
};

