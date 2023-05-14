var CSVStreamWriter = require('dw/io/CSVStreamWriter');

var File = require('dw/io/File');
var FileWriter = require('dw/io/FileWriter');


function run() 

{

    var file = new File(File.IMPEX + '/src/test.csv');
    var fileWriter = new FileWriter(file);
    fileWriter.writeLine('tetstcdscdcdsd');
    fileWriter.close();

}

module.exports = {
    createFile: run
  };