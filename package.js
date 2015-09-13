var IPFS_VERSION = '2.3.2';

Package.describe({
  name: "sunnyg:meteor-ipfs",
  summary: "IPFS + Meteor",
  version: IPFS_VERSION,
  git: "https://github.com/sunny-g/meteor-ipfs"
});

Npm.depends({
  'ipfs-api': IPFS_VERSION
});

Package.onUse(function (api) {
  api.versionsFrom(['METEOR@1.0']);

  api.use([
    'okgrow:promise',
    'cosmos:browserify'
  ], 'client');

  api.addFiles([
    'client.browserify.js',
    'client.js'
  ], 'client');

  //api.addFiles([,
  //  'server.js'
  //], 'server');

  api.export([
    'ipfs'
  ], ['client', 'server']);

});