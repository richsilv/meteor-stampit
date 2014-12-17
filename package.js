Package.describe({
  name: 'richsilv:stampit',
  version: '1.0.0',
  summary: 'Stampit.js - create objects from reusable, composable behaviors.',
  git: 'https://github.com/richsilv/meteor-stampit'
});

Package.on_use(function (api) {

   api.add_files('stampit/dist/stampit.js', ['client', 'server']);

});

Package.on_test(function (api) {
  api.use('richsilv:stampit');
  api.use('tinytest');
  
  // api.add_files('richsilv:stampit_tests.js');
});