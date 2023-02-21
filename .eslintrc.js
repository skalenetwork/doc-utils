module.exports = {
	"env": {
		"browser": true,
		"es2021": true
	},
	"extends": [
		"plugin:@typescript-eslint/recommended",
		"eslint-config-prettier",
		"plugin:prettier/recommended"
	],
	"overrides": [
	],
	"parser": "@typescript-eslint/parser",
	"parserOptions": {
		"ecmaVersion": "latest",
		"sourceType": "module"
	},
	"plugins": [
		"@typescript-eslint"
	],
	"rules": {
		"linebreak-style": [
			"error",
			"unix"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	},
	"ignorePatterns": ["src/tabs-block.js"],
};
