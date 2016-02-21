function getRegionQueryString(regionID){
    var regionDictionary = {
        1 :  "Boston",
        2 : "(philadelphia OR pittsburgh OR new york)",
        3 : "(chicago OR detroit OR indianapolis OR cincinnati OR columbus)",
        4 : "(minneapolis OR kansas city)",
        5 : "(charlotte OR atlanta OR miami OR washington OR baltimore)",
        6 : "nashville",
        7 : "(oklahoma city OR dallas OR austin OR new orleans)",
        8 : "(salt lake city OR las vegas OR pheonix OR tueson OR albuquerque OR el paso OR denver",
        9 : "(seattle OR portland OR las angeles)"
    };
    return regionDictionary[regionID];
}

module.exports = getRegionQueryString();