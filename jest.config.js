const esModules = ['@sqds/multisig'].join('|');

module.exports = {
	globals: {
		Uint8Array: Uint8Array,
	},
	transformIgnorePatterns: [`/node_modules/(?!${esModules})`],
	transform: {
		'^.+.[tj]s?$': ['babel-jest'],
	},
	testMatch: ['**/*.ts'],
};