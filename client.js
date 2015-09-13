ipfs = ipfsAPI('localhost', '5001');
ipfs.ipfsAPI = ipfsAPI;

ipfs.q = {
  add: Meteor.wrapPromise(ipfs.add),
  cat: Meteor.wrapPromise(ipfs.cat),
  ls: Meteor.wrapPromise(ipfs.ls)

  // TODO: level 2 commands don't seem to be working correctly
  //config: {
  //  set: Meteor.wrapPromise(ipfs.config.set),
  //  get: Meteor.wrapPromise(ipfs.config.get),
  //  show: Meteor.wrapPromise(ipfs.config.show),
  //  replace: Meteor.wrapPromise(ipfs.config.replace)
  //}
  //object: Meteor.wrapPromise(ipfs.object)
};