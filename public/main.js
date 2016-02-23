requirejs.config({
  baseUrl: './',
  paths: {
    'angular': 'vendor/angular/angular',
    'angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
    'angular-bootstrap': 'vendor/angular-bootstrap/ui-bootstrap-tpls',
    'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
    'jquery': 'vendor/jquery/dist/jquery'
  },
  packages: [
  ],
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-bootstrap': {
      exports: 'angular-bootstrap',
      deps: ['angular']
    },
    'angular-ui-router': {
      deps: ['angular']
    },
    'bootstrap': {
      deps: ['jquery']
    }
  }
});

require(['app'], function (app) {
    app.init();
});
