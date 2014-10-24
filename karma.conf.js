module.exports = function (config) {
    config.set({
        basePath: './',
        autoWatch: false,
        frameworks: ['jasmine'],
        browsers: ['PhantomJS'],
        debug: true,

        junitReporter: {
            outputFile: 'reports/unit.xml',
            suite: 'unit'
        }
    });
};
