requirejs.config({
  baseUrl: './',
  paths: {
    'angular': 'vendor/angular/angular',
    'angular-ui-router': 'vendor/angular-ui-router/release/angular-ui-router',
    'angular-ui-router-statehelper': 'vendor/angular-ui-router.stateHelper/statehelper',
    'angular-bootstrap': 'vendor/angular-bootstrap/ui-bootstrap-tpls',
    'angular-aria': 'vendor/angular-aria/angular-aria',
    'angular-messages': 'vendor/angular-messages/angular-messages',
    'angular-animate': 'vendor/angular-animate/angular-animate',
    'angular-material': 'vendor/angular-material/angular-material',
    'bootstrap': 'vendor/bootstrap/dist/js/bootstrap',
    'jquery': 'vendor/jquery/dist/jquery'
  },
  packages: [
  ],
  shim: {
    'angular': {
      exports: 'angular'
    },
    'angular-aria': {
      exports: 'angular-aria',
      deps: ['angular']
    },
    'angular-messages': {
      exports: 'angular-messages',
      deps: ['angular']
    },
    'angular-animate': {
      exports: 'angular-animate',
      deps: ['angular']
    },
    'angular-material': {      exports: 'angular-material',
      deps: ['angular', 'angular-aria', 'angular-messages', 'angular-animate']
    },
    'angular-bootstrap': {
      exports: 'angular-bootstrap',
      deps: ['angular']
    },
    'angular-ui-router': {
      deps: ['angular']
    },
    'angular-ui-router-statehelper': {
      exports: 'angular-ui-router-statehelper',
      deps: ['angular', 'angular-ui-router']
    },
    'bootstrap': {
      deps: ['jquery']
    }
  }
});

require(['app'], function (app) {
    app.init();
});
