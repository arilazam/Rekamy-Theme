'use strict';

module.exports = {
	theme: {
		slug: 'rekamy',
		name: 'Rekamy',
		author: 'Rekamy Agency'
	},
	dev: {
		browserSync: {
			live: true,
			proxyURL: 'rekamy.local',
			bypassPort: '8181'
		},
		browserslist: [ // See https://github.com/browserslist/browserslist
			'> 1%',
			'last 2 versions'
		],
		debug: {
			styles: false, // Render verbose CSS for debugging.
			scripts: false // Render verbose JS for debugging.
		}
	},
	export: {
		compress: true
	}
};
