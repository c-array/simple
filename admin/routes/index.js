/**
 * 服务路由集合
 */
const express = require('express');
const router = express.Router();
const fs = require('fs');
var api = '/api';
function addMapping(router, mapping) {
  for (var url in mapping) {
    if (url.startsWith('GET ')) {
      var path = url.substring(4);
      router.get(api + path, mapping[url]);
      console.log(`register URL mapping: GET ${path}`);
    } else if (url.startsWith('POST ')) {
      var path = url.substring(5);
      router.post(api + path, mapping[url]);
      console.log(`register URL mapping: POST ${path}`);
    } else if (url.startsWith('PUT ')) {
      var path = url.substring(4);
      router.put(api + path, mapping[url]);
      console.log(`register URL mapping: PUT ${path}`);
    } else if (url.startsWith('DELETE ')) {
      var path = url.substring(7);
      router.delete(api + path, mapping[url]);
      console.log(`register URL mapping: DELETE ${path}`);
    } else {
      console.log(`invalid URL: ${url}`);
    }
  }
}
 
function addControllers(router, dir) {
  fs.readdirSync(dir).filter((f) => {
    return f.endsWith('.js');
  }).forEach((f) => {
    console.log(`process controller: ${f}...`);
    let mapping = require(dir + '/' + f);
    addMapping(router, mapping);
  });
}
 
module.exports = function (dir) {
  var controllersDir = dir || 'controller';
  addControllers(router, controllersDir);
  return router;
};
