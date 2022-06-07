module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		clean: ['src/temp'],
		uglify: {
			options: {
				// banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
			},
			build: {
				src: 'src/js.js',
				dest: 'src/temp/js.js'
			}
		},
		cssmin: {
			target: {
				expand: true,
				cwd: 'src',
				src: '*.css',
				dest: '',
				ext: '.css'
			}
		}
		,
		ejs: {
			target: {
				expand: true,
				cwd: 'src/ejs',
				src: '*.ejs',
				dest: 'src/temp',
				ext: '.html'
			}
		},
		htmlmin: {
			target: {
				options: { // Target options
					removeComments: true,
					collapseWhitespace: true
				},
				expand: true,
				cwd: 'src/temp',
				src: '*.html',
				dest: '',
				ext: '.html'
			}
		}





	});

	// Load the plugin that provides the "uglify" task.
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-ejs');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-clean');

	// Default task(s).
	grunt.registerTask('default', ['clean', 'uglify', 'cssmin', 'ejs', 'htmlmin' ]);
};
