var dbconn = require('../data/dbconnection.js');
var hotelData = require('../data/hotel-data.json');

module.exports.hotelsGetAll = function(req, res){
     console.log("Get hotel data!!");
     console.log("QUERY:", req.query);

     var db = dbconn.get("db",db);
     
     // for manual queries 
     var offset = 0;
     var count = 5;

     if(req.query && req.query.offset){
         offset = parseInt(req.query.offset,10);
     }

    if(req.query && req.query.count){
         count = parseInt(req.query.count,10);
     }

     var returnData = hotelData.slice(offset,offset + count);

    res
        .status(200)
        .json(returnData);
};

module.exports.hotelsGetOne = function(req, res){

    var hotelId = req.params.hotelId;
    var thisHotel = hotelData[hotelId];
     console.log("Get a hotel ID!!");
    res
        .status(200)
        .json(thisHotel);
};

module.exports.hotelsAddOne = function(req, res){
     console.log("POST new hotel !!");
     console.log(req.body);
    res
        .status(200)
        .json(req.body);
};