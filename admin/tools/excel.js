var xlsx = require('node-xlsx');
var fs = require('fs');
function Excel(param) {
    var buffer = xlsx.build([{name: param.name, data: param.data}]);
    fs.writeFileSync('./report/' + param.name + '.xlsx', buffer, 'binary');
    return '/' + param.name + '.xlsx';
}

module.exports = Excel;

