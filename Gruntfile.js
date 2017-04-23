'use strict';

const path = require('path');

const BUILD_DIR = path.join('build', path.sep);
const STAGING_DIR = path.join(BUILD_DIR, 'staging', path.sep);
const ARTIFACT_DIR = path.join(BUILD_DIR, 'artifacts', path.sep);
const LAMBDA_RELEASE_ARTIFACT = 'lambda-release.zip';

module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    mkdir: {
      staging: {
        options: {
          create: [STAGING_DIR]
        }
      },
      artifacts: {
        options: {
          create: [ARTIFACT_DIR]
        }
      }
    },
    copy: {
      staging: {
        src: ['<%= pkg.main %>', 'package.json'],
        dest: STAGING_DIR
      }
    },
    'npm-command': {
      staging: {
        options: {
          cwd: STAGING_DIR,
          cmd: 'install',
          args: ['--production']
        }
      }
    },
    compress: {
      release: {
        options: {
          archive: path.join(ARTIFACT_DIR, LAMBDA_RELEASE_ARTIFACT)
        },
        files: [
          {
            cwd: STAGING_DIR,
            src: ['**']
          }
        ]
      }
    },
    clean: [BUILD_DIR]
  });

  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-npm-command');
  grunt.loadNpmTasks('grunt-mkdir');

  grunt.registerTask('build', ['mkdir:staging', 'copy:staging', 'npm-command:staging']);
  grunt.registerTask('release', ['build', 'mkdir:artifacts', 'compress:release']);
};
