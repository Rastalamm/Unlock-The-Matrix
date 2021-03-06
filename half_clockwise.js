var http = require('http');
var querystring = require('querystring');
var Rotator = require('matrix-rotator').MatrixRotator;

var HOST = 'localhost';
var PORT = '1337';

var hexArray = [
  [ '0x0',  '0x1',  '0x2',  '0x3',  '0x4',  '0x5',  '0x6',  '0x7',  '0x8',  '0x9',  '0xA',  '0xB' ],
  [ '0xC',  '0xD',  '0xE',  '0xF',  '0x10', '0x11', '0x12', '0x13', '0x14', '0x15', '0x16', '0x17' ],
  [ '0x18', '0x19', '0x1A', '0x1B', '0x1C', '0x1D', '0x1E', '0x1F', '0x20', '0x21', '0x22', '0x23' ],
  [ '0x24', '0x25', '0x26', '0x27', '0x28', '0x29', '0x2A', '0x2B', '0x2C', '0x2D', '0x2E', '0x2F' ],
  [ '0x30', '0x31', '0x32', '0x33', '0x34', '0x35', '0x36', '0x37', '0x38', '0x39', '0x3A', '0x3B' ],
  [ '0x3C', '0x3D', '0x3E', '0x3F', '0x40', '0x41', '0x42', '0x43', '0x44', '0x45', '0x46', '0x47' ],
  [ '0x48', '0x49', '0x4A', '0x4B', '0x4C', '0x4D', '0x4E', '0x4F', '0x50', '0x51', '0x52', '0x53' ],
  [ '0x54', '0x55', '0x56', '0x57', '0x58', '0x59', '0x5A', '0x5B', '0x5C', '0x5D', '0x5E', '0x5F' ],
  [ '0x60', '0x61', '0x62', '0x63', '0x64', '0x65', '0x66', '0x67', '0x68', '0x69', '0x6A', '0x6B' ],
  [ '0x6C', '0x6D', '0x6E', '0x6F', '0x70', '0x71', '0x72', '0x73', '0x74', '0x75', '0x76', '0x77' ],
  [ '0x78', '0x79', '0x7A', '0x7B', '0x7C', '0x7D', '0x7E', '0x7F', '0x80', '0x81', '0x82', '0x83' ],
  [ '0x84', '0x85', '0x86', '0x87', '0x88', '0x89', '0x8A', '0x8B', '0x8C', '0x8D', '0x8E', '0x8F' ]
];

hexArray.length

var isTrue = 'false';

var http = require('http');
var keepAliveAgent = new http.Agent({ keepAlive: true, keepAliveMsecs : 200 });

var options = {
  hostname : HOST,
  port : PORT,
  method : 'POST',
  agent : keepAliveAgent
}

function sendNewRequest (input){

  var request = http.request(options, function(response){

    var responseBody = '';

    response.on('data', function (data) {

      responseBody += data;
    });

    response.on('end', function () {

      var responseObject = JSON.parse(responseBody);

      if(responseObject.success){
        console.log('you got the right answer');
        console.log(responseObject);
        return 'true';
      }else{
        console.log(milCount, 'try again', postData.length);
        //run the request again
        if(postData.length > 0){
          sendNewRequest(postData.pop());
        }else{
          console.log('more combinations');
          rotateAgain();
        }
      }
    });

  });

  input = input.toString();
  var sendCombination = querystring.stringify({key:input});
  request.write(sendCombination);
  request.end();

}


var rotateMe = new Rotator (hexArray);



var postData = [];
var milCount = 25;

function rotateAgain(){
milCount += 1;
  rotateMe.rotateStep('ClockWise', 6);

  for(var i = 0; i < 1; i++) {
    for(var j = 0; j < 36; j++){
      for(var k = 0; k < 28; k++){
        for(var l = 0; l < 20; l++){
          for(var m = 0; m < 12; m++){
            for(var n = 0; n < 4; n++){
              var value = rotateMe.rotateStep('ClockWise', 1).toString();
              postData.push(value);
            }
             rotateMe.rotateStep('ClockWise', 2);
          }
           rotateMe.rotateStep('ClockWise', 3);
         }
          rotateMe.rotateStep('ClockWise', 4);
        }
      rotateMe.rotateStep('ClockWise', 5);
     }
    rotateMe.rotateStep('ClockWise', 6);
  }

  sendNewRequest(postData.pop());
}

  for(var q = 0; q <25; q++){
    rotateMe.rotateStep('ClockWise', 6);
  }


  for(var i = 0; i < 1; i++) {
    for(var j = 0; j < 36; j++){
      for(var k = 0; k < 28; k++){
        for(var l = 0; l < 20; l++){
          for(var m = 0; m < 12; m++){
            for(var n = 0; n < 4; n++){
              var value = rotateMe.rotateStep('ClockWise', 1).toString();
              postData.push(value);
            }
             rotateMe.rotateStep('ClockWise', 2).toString();
          }
           rotateMe.rotateStep('ClockWise', 3).toString();
         }
          rotateMe.rotateStep('ClockWise', 4).toString();
        }
      rotateMe.rotateStep('ClockWise', 5).toString();
     }
    rotateMe.rotateStep('ClockWise', 6).toString();
  }

sendNewRequest(postData.pop());