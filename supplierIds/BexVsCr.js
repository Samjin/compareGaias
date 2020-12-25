const fs = require('fs');
const _ = require('lodash');

let bexNames = [{code: "1", name: "All-American"}, {code: "2", name: "Ace"}, {code: "3", name: "Advantage Rent-A-Car"}, {code: "4", name: "Americar"}, {code: "5", name: "Afinity"}, {code: "6", name: "Alamo Rent A Car"}, {code: "7", name: "Airport Re"}, {code: "8", name: "Practical"}, {code: "9", name: "Airways"}, {code: "10", name: "Town Cntry"}, {code: "11", name: "Discount Car Rentals"}, {code: "12", name: "DER Cars"}, {code: "13", name: "European Car Res_DO NOT USE"}, {code: "14", name: "Europcar"}, {code: "15", name: "Enterprise"}, {code: "16", name: "Us Rent A"}, {code: "17", name: "EZ Rent-A-Car"}, {code: "18", name: "Florida Au"}, {code: "19", name: "Fox Rental Cars"}, {code: "20", name: "Value"}, {code: "21", name: "Govacation"}, {code: "22", name: "Holiday"}, {code: "23", name: "InterAmerican"}, {code: "24", name: "Kemwel Rent A Car"}, {code: "25", name: "Kenning"}, {code: "26", name: "Allstate"}, {code: "27", name: "Midway Car Rental"}, {code: "28", name: "New Frontier"}, {code: "29", name: "Savmor Car"}, {code: "30", name: "Record Rent A Car"}, {code: "31", name: "Rent Rite"}, {code: "32", name: "Resort"}, {code: "33", name: "Rent A Wreck"}, {code: "34", name: "U-Save"}, {code: "35", name: "Sixt"}, {code: "36", name: "Triangle"}, {code: "37", name: "Its"}, {code: "38", name: "Payless"}, {code: "39", name: "Budget"}, {code: "40", name: "Hertz"}, {code: "41", name: "Avis"}, {code: "42", name: "National Car Rental"}, {code: "43", name: "Dollar Rent A Car"}, {code: "44", name: "Sears Car and Truck Rental"}, {code: "45", name: "Thrifty Car Rental"}, {code: "46", name: "Auto Europe"}, {code: "47", name: "Montgomery"}, {code: "68", name: "Simply Wheelz by Hertz"}, {code: "69", name: "Economy Rent a Car"}, {code: "70", name: "Economy Rent a Car-Obsolete"}, {code: "71", name: "NÜ Car Rentals"}, {code: "72", name: "Deluxe Rent a Car"}, {code: "73", name: "Citer"}, {code: "74", name: "Atesa"}, {code: "1000", name: "296 Rent-a-car"}, {code: "1001", name: "Amigos do Auto"}, {code: "1002", name: "addCar rental"}, {code: "1003", name: "Auto Jardim"}, {code: "1004", name: "Avis Corsica"}, {code: "1005", name: "AirCar Car rental"}, {code: "1006", name: "Auto Rent"}, {code: "1008", name: "AVIA CAR"}, {code: "1009", name: "Bravacar"}, {code: "1010", name: "TargaRent"}, {code: "1011", name: "Buchbinder"}, {code: "1012", name: "Budget Israel"}, {code: "1013", name: "Bravo Rent a Car"}, {code: "1014", name: "Caro Autovermietung"}, {code: "1015", name: "Centauro"}, {code: "1016", name: "Hertz Romania"}, {code: "1017", name: "Easirent.com"}, {code: "1018", name: "Express S.A."}, {code: "1019", name: "First-Car"}, {code: "1020", name: "Fox Autorent"}, {code: "1021", name: "Guerin Old Do not use"}, {code: "1022", name: "Goldcar rental"}, {code: "1023", name: "Hertz Canaries"}, {code: "1024", name: "Proa Rent A Car"}, {code: "1025", name: "Hertz Greece"}, {code: "1026", name: "Hiper Rent a Car"}, {code: "1027", name: "Thai Cars"}, {code: "1028", name: "Top Rent a Car"}, {code: "1029", name: "Localiza Colombia"}, {code: "1030", name: "Lagorent Rent-a-Car"}, {code: "1031", name: "National Greece"}, {code: "1032", name: "Sol Mar"}, {code: "1033", name: "STARCAR"}, {code: "1034", name: "SurPrice Car Rentals"}, {code: "1035", name: "Unidas"}, {code: "1036", name: "Autos Valls"}, {code: "1037", name: "Victoria Rent a Car"}, {code: "1038", name: "Z&X Cyprus"}, {code: "1039", name: "Easirent"}, {code: "1040", name: "Firefly"}, {code: "1041", name: "CiCar"}, {code: "1042", name: "GreenMotion Drive&Go"}, {code: "1043", name: "Interrent EU"}, {code: "1044", name: "Interrent Key’n Go"}, {code: "1045", name: "Thrifty Spain"}, {code: "1046", name: "Thrifty France"}, {code: "1047", name: "Orlando"}, {code: "1048", name: "Sicily By Car"}, {code: "1049", name: "Movida"}, {code: "1050", name: "Drive on Holidays"}, {code: "1053", name: "Buchbinder Germany"}, {code: "1054", name: "Firefly EU"}, {code: "1055", name: "Thrifty EU"}, {code: "1056", name: "Firefly DE"}, {code: "1057", name: "OK RENT A CAR"}, {code: "1058", name: "Thrifty Canaries"}, {code: "1059", name: "ORYX Rent A Car"}, {code: "1060", name: "Priceless Car Rental"}, {code: "1061", name: "Nextcar"}, {code: "1062", name: "Global Rent a Car"}, {code: "1063", name: "Localiza"}, {code: "1064", name: "Apex Car Rentals"}, {code: "1065", name: "Dollar NL"}, {code: "1066", name: "Owners"}, {code: "1067", name: "Jumbo Car"}, {code: "1068", name: "Dollar CH"}, {code: "1069", name: "Keddy By Europcar"}, {code: "1070", name: "Right Cars"}, {code: "1071", name: "Firefly Portugal"}, {code: "1072", name: "Jumbo Car reunion"}, {code: "1073", name: "Jumbo Car martinique"}, {code: "1074", name: "MegaDrive"}, {code: "1075", name: "Maggiore"}, {code: "1076", name: "Hawk"}, {code: "1077", name: "SR Rent A Car"}, {code: "1078", name: "Redspot"}, {code: "1079", name: "Dollar DP"}, {code: "1080", name: "Budget Rhodes"}, {code: "1081", name: "Budget UAE"}, {code: "1082", name: "Drive-A-Matic"}, {code: "1083", name: "Movida Rent A Car"}, {code: "1084", name: "Mex Rent A Car"}, {code: "1085", name: "Essence Car Rental"}, {code: "1086", name: "GRS Car"}, {code: "1087", name: "Bidvest"}, {code: "1088", name: "United"}, {code: "1089", name: "Click & Rent"}, {code: "1090", name: "Dollar Europe"}, {code: "1091", name: "Dollar"}, {code: "1092", name: "Airport Van Rental"}, {code: "1093", name: "Greenmotion"}, {code: "1094", name: "Silvercar by Audi"}, {code: "1095", name: "AutoClick"}, {code: "1096", name: "Jace"}, {code: "1097", name: "Localiza Argentina"}, {code: "1098", name: "Flizzr"}, {code: "1099", name: "Leasys"}, {code: "1100", name: "Turisprime"}, {code: "1101", name: "Routes"}, {code: "1102", name: "Right-Cars"}, {code: "1103", name: "RentACar Guadeloupe"}, {code: "1104", name: "ACE Australia"}, {code: "1105", name: "Firefly Greece"}, {code: "1106", name: "ACE New Zealand"}, {code: "1107", name: "First Car Rental"}, {code: "1108", name: "Firefly Cyprus"}, {code: "1109", name: "ADA"}, {code: "1110", name: "Dirent"}, {code: "1111", name: "Foco"}, {code: "1112", name: "SS Travels"}, {code: "1113", name: "Localiza Uruguay"}, {code: "1114", name: "Unidas Br"}, {code: "1115", name: "Interrent"}, {code: "1116", name: "Aerodrive"}, {code: "1117", name: "Whiz"}, {code: "1118", name: "Jumbo Car French Guyane"}, {code: "1119", name: "Thrifty NZ"}, {code: "1120", name: "Get Your Car"}, {code: "1121", name: "Rhodium"}, {code: "1122", name: "ZezGo"}, {code: "1123", name: "Fleet"}, {code: "1124", name: "Express Travel Group"}, {code: "1125", name: "Rentscape"}, {code: "1126", name: "Sixt Ni"}, {code: "1127", name: "WIber"}, {code: "1128", name: "Amigo Autos"}, {code: "1129", name: "Guerin"}, {code: "1130", name: "Ilha Verde"}, {code: "1131", name: "Cal Auto"}, {code: "1132", name: "Island Car Rentals"}, {code: "1133", name: "KK Leisure"}, {code: "1134", name: "NICONICO Rent A Car"}, {code: "1135", name: "Avis Canaries"}, {code: "1136", name: "Budget Canaries"}, {code: "1137", name: "Discount Quebec"}, {code: "1138", name: "RentMotors"}, {code: "1139", name: "Smile"}, {code: "1140", name: "Locauto"}, {code: "1141", name: "Offer Car Hire"}, {code: "1142", name: "Snap Rentals"}, {code: "1143", name: "Tripz"}]
let crNames = [{code: "1", name: "353  Car Rental"},{code: "2", name: "99Rent"},{code: "3", name: "Abbycar"},{code: "4", name: "ACE NOUVELLE ZELANDE"},{code: "5", name: "Ace Rent A Car"},{code: "6", name: "Acropolis"},{code: "7", name: "Acs Location"},{code: "8", name: "Active Rent A Car"},{code: "9", name: "Ada"},{code: "10", name: "Addcar Rental"},{code: "11", name: "Adobe"},{code: "12", name: "Advant"},{code: "13", name: "Advantage"},{code: "14", name: "Aida"},{code: "15", name: "Airauto"},{code: "16", name: "Aircar"},{code: "17", name: "Airport Van Rental"},{code: "18", name: "Alamo"},{code: "19", name: "Alise Location"},{code: "20", name: "ALMA"},{code: "21", name: "Amelcar"},{code: "22", name: "America Car Rental"},{code: "23", name: "Amigo Autos"},{code: "24", name: "Apex"},{code: "25", name: "Aquarius"},{code: "26", name: "Arnold Clark Car"},{code: "27", name: "Atesa"},{code: "28", name: "Auto Jardim"},{code: "29", name: "Auto Union"},{code: "30", name: "Autocandia"},{code: "31", name: "Autocash"},{code: "32", name: "Autoescape Special"},{code: "33", name: "Autojet"},{code: "34", name: "Autonom"},{code: "35", name: "Autorent"},{code: "36", name: "AutoRent Armenia"},{code: "37", name: "Autos Menorca"},{code: "38", name: "Autos Valls"},{code: "39", name: "Autovia"},{code: "40", name: "AVANCE"},{code: "41", name: "Avantcar"},{code: "42", name: "Avax"},{code: "43", name: "Avia Car"},{code: "44", name: "Avis"},{code: "45", name: "Avro Rent A Car"},{code: "46", name: "B-Rent"},{code: "47", name: "Benerent"},{code: "48", name: "Bidvest"},{code: "49", name: "Bobo Campers"},{code: "50", name: "Bravacar"},{code: "51", name: "Bravo Rent A Car"},{code: "52", name: "Britz"},{code: "53", name: "Buchbinder"},{code: "54", name: "Budget"},{code: "56", name: "Cactus"},{code: "57", name: "Calauto"},{code: "58", name: "Caldera"},{code: "59", name: "Camelcar"},{code: "60", name: "Car Go"},{code: "61", name: "Car Hire Rental"},{code: "62", name: "Car Net"},{code: "63", name: "CarDelMar Special"},{code: "64", name: "Carhire"},{code: "66", name: "Carwiz"},{code: "67", name: "Centauro"},{code: "68", name: "Cgff"},{code: "69", name: "Cicar"},{code: "70", name: "Circular"},{code: "71", name: "Citer"},{code: "72", name: "Class Rent A Car"},{code: "73", name: "Click Rent"},{code: "74", name: "Confort"},{code: "75", name: "Crown Car Hire"},{code: "76", name: "Cruise America"},{code: "77", name: "Cruise Canada"},{code: "78", name: "Cubacar"},{code: "79", name: "Delpaso"},{code: "80", name: "Dickmanns"},{code: "81", name: "Dirent"},{code: "82", name: "Discount"},{code: "83", name: "Dollar"},{code: "84", name: "Dominican Rent A Car.Dominicanrep"},{code: "85", name: "Drivalia"},{code: "86", name: "Drive And Go"},{code: "87", name: "Drive Hellas"},{code: "88", name: "Drive NZ"},{code: "89", name: "Drive South Africa"},{code: "90", name: "Driveonholidays"},{code: "91", name: "E-Z Rent-A-Car"},{code: "92", name: "Easirent"},{code: "93", name: "East Coast"},{code: "94", name: "Eastrent"},{code: "95", name: "Easy Car"},{code: "96", name: "Easy Rent"},{code: "97", name: "Easy Rental"},{code: "98", name: "Eco Via"},{code: "99", name: "Economy Rent a Car"},{code: "100", name: "El Monte Rv"},{code: "101", name: "Enterprise"},{code: "102", name: "Essence Car Rental"},{code: "103", name: "Euromotorhome"},{code: "104", name: "Euronet Car Rental"},{code: "105", name: "Europa Service"},{code: "106", name: "Europcar"},{code: "107", name: "Evergreen"},{code: "108", name: "Express"},{code: "109", name: "Fast Rent A Car"},{code: "110", name: "Firefly"},{code: "111", name: "Firent"},{code: "112", name: "First Car"},{code: "113", name: "Fleet"},{code: "114", name: "Flexicar"},{code: "115", name: "Flizzr"},{code: "116", name: "Foco"},{code: "117", name: "Fox"},{code: "118", name: "Fox Autorent"},{code: "119", name: "Francecars"},{code: "121", name: "Gaviota Tours"},{code: "122", name: "Geneva Rental Cars"},{code: "123", name: "Geysir"},{code: "124", name: "Global Rent A Car"},{code: "125", name: "Globaldrive"},{code: "126", name: "Globe Car Rentals"},{code: "127", name: "Go Camper"},{code: "128", name: "Goldcar"},{code: "129", name: "Gorent"},{code: "130", name: "Green Motion"},{code: "131", name: "GRental Greece"},{code: "132", name: "Guerin"},{code: "133", name: "Guerin Drive 4 Less"},{code: "134", name: "Hasso"},{code: "135", name: "Havana Autos"},{code: "136", name: "Hertz"},{code: "137", name: "Hiper"},{code: "138", name: "Hire Automotive"},{code: "139", name: "Hitch Car Rentals"},{code: "140", name: "Hotwire"},{code: "141", name: "ifs Rent"},{code: "142", name: "Ilha Verde"},{code: "143", name: "Insular Car"},{code: "144", name: "Inter Location"},{code: "145", name: "Intercar"},{code: "146", name: "International Car"},{code: "147", name: "Interrent"},{code: "148", name: "Irish Car Rental National"},{code: "149", name: "Is Travel"},{code: "150", name: "Island Car Rentals"},{code: "151", name: "Istravel-Campers"},{code: "152", name: "Italy Car Rent"},{code: "153", name: "ITC"},{code: "154", name: "Joyrent"},{code: "155", name: "Jumbo Car"},{code: "156", name: "Kea Campers"},{code: "157", name: "Keddy"},{code: "158", name: "Kings Car Rental"},{code: "159", name: "Klasswagen"},{code: "160", name: "La Route Bleue"},{code: "161", name: "Last Minute Rent A Car"},{code: "162", name: "LEASYS"},{code: "163", name: "Leblanc"},{code: "164", name: "Lion Rent-a-Car"},{code: "165", name: "Localiza"},{code: "166", name: "Locationauto"},{code: "167", name: "Locauto"},{code: "168", name: "Lucky Rentals"},{code: "169", name: "Mack Rent A Car"},{code: "170", name: "Madeira Rent"},{code: "171", name: "Maggiore"},{code: "172", name: "Marbesol"},{code: "173", name: "Maui "},{code: "174", name: "MCAR"},{code: "175", name: "Megadrive"},{code: "176", name: "Mexrentacar"},{code: "177", name: "Midway Car Rental"},{code: "179", name: "MORINI"},{code: "180", name: "Moturis"},{code: "181", name: "Movida"},{code: "182", name: "National"},{code: "183", name: "Next Auto Rent"},{code: "184", name: "Nextcar"},{code: "185", name: "Nizacars"},{code: "186", name: "Noleggiare"},{code: "187", name: "Nosyeasyrent"},{code: "188", name: "NÜ Car Rentals"},{code: "189", name: "Ok Rent A Car"},{code: "190", name: "Olympic-Location"},{code: "191", name: "Oporent"},{code: "192", name: "OptimoRent"},{code: "193", name: "Orange"},{code: "194", name: "Orbita"},{code: "195", name: "Orlando"},{code: "196", name: "Oryx"},{code: "197", name: "Ownerscars"},{code: "198", name: "Panek"},{code: "199", name: "Payless"},{code: "200", name: "Pepecar"},{code: "201", name: "Planete Holidays"},{code: "202", name: "Pops Car"},{code: "203", name: "Prepaid Car Rental"},{code: "204", name: "Prestigio Rent A Car"},{code: "205", name: "Priceless"},{code: "206", name: "Primecar"},{code: "207", name: "Procar"},{code: "208", name: "Quick Cars"},{code: "209", name: "Quickly"},{code: "210", name: "Records"},{code: "211", name: "Rennauto"},{code: "212", name: "RENT a CAR"},{code: "213", name: "Rent a Star"},{code: "214", name: "Rent a wreck"},{code: "215", name: "Rentacar"},{code: "216", name: "Rental4leisure"},{code: "217", name: "Rentis"},{code: "218", name: "Rentplus"},{code: "219", name: "Rentscape"},{code: "220", name: "Rex Rent A Car"},{code: "221", name: "Rhodium"},{code: "222", name: "RIDECAR"},{code: "223", name: "Right Cars"},{code: "224", name: "Routes Car Rental"},{code: "225", name: "Royal Car Rental"},{code: "226", name: "SADO RENT"},{code: "227", name: "Schiller"},{code: "228", name: "Service Car Rental"},{code: "229", name: "Sicily By Car"},{code: "230", name: "Silvercar by Audi"},{code: "231", name: "Sixt"},{code: "232", name: "Smile Rent"},{code: "233", name: "Snap Rentals"},{code: "234", name: "Solmar"},{code: "235", name: "Sovoycars"},{code: "236", name: "Sr Rent A Car"},{code: "237", name: "Src"},{code: "238", name: "SS Travels"},{code: "239", name: "State Van Rental"},{code: "240", name: "Sternrent"},{code: "241", name: "Stoutes"},{code: "242", name: "Surprice Car Rental"},{code: "243", name: "Targarent"},{code: "244", name: "Target Rent"},{code: "245", name: "TBI Rent Car"},{code: "246", name: "Tempest"},{code: "248", name: "Thairentacar"},{code: "249", name: "Thrifty"},{code: "250", name: "Top Car"},{code: "251", name: "Top Rent a Car"},{code: "252", name: "Touring Cars"},{code: "253", name: "Transtur"},{code: "254", name: "Truche-Location"},{code: "255", name: "Turisprime"},{code: "256", name: "U-Save"},{code: "257", name: "Ucar"},{code: "258", name: "Uni Rent"},{code: "259", name: "Us Rent Max "},{code: "260", name: "Vacacionar"},{code: "261", name: "VEO"},{code: "262", name: "Vero-Rent"},{code: "263", name: "Viaroute"},{code: "264", name: "Victoria"},{code: "265", name: "Viten Group"},{code: "266", name: "Wanalou"},{code: "267", name: "Wiber Rent A Car"},{code: "268", name: "Woodford"},{code: "269", name: "WOWrent"},{code: "270", name: "Yes Rent A Car"},{code: "271", name: "Yor Car Hire"},{code: "272", name: "Yours Cars Rental"},{code: "273", name: "Zeeba Rent-A-Van"},{code: "274", name: "Zoom Car Rental"},{code: "275", name: "Zugig"},{code: "276", name: "VAN FLEET"}]


let duplicateNames = new Set();
let crNamesLowercase = crNames.map(obj => {
  obj.name = obj.name.toLowerCase()
  return obj;
})
let bexNamesLowercase = bexNames.map(obj => {
  obj.name = obj.name.toLowerCase();
  return obj
})
const nameMap = {};
const codeMap = {};
const crNameSet=new Set()
const bexNameSet=new Set()
// Check if bex name is subset of CR and vice versa
let crIndex = 0
let bexIndex = 0
for (var i = 0; i < crNamesLowercase.length; i++) {
  let crName = crNamesLowercase[i].name
  let crCleanName = cleanName(crName);

  for (var j = 0; j < bexNamesLowercase.length; j++) {
    let bexName = bexNamesLowercase[j].name
    let bexCleanName = cleanName(bexName);
    if (bexName === crName || bexCleanName && bexCleanName === crName || crCleanName && crCleanName === bexName) {
      nameMap[crName] = bexName
      codeMap[crNamesLowercase[i].code] = bexNamesLowercase[j].code
    }
  }
}

nameMap['e-z rent-a-car'] = 'ez rent-a-car'
nameMap['first car'] = 'first-car'
nameMap['click rent'] = 'click &amp; rent'
codeMap[91] = "17"
codeMap[112] = "1019"
codeMap[73] = "1089"

function cleanName(originalName) {
  let cleanName;
  if (originalName.includes(' rent a car')) {
    cleanName = originalName.replace(' rent a car', '')
  }
  if (originalName.includes(' rent-a-car')) {
    cleanName = originalName.replace(' rent-a-car', '')
  }
  if (originalName.includes(' car rental')) {
    cleanName = originalName.replace(' car rental', '')
  }
  if (originalName.includes(' car rentals')) {
    cleanName = originalName.replace(' car rentals', '')
  }
  if (originalName.includes(' rental cars')) {
    cleanName = originalName.replace(' rental cars', '')
  }
  if (originalName.includes('.com')) {
    cleanName = originalName.replace('.com', '')
  }
  return cleanName;
}

fs.writeFile("bex_vs_cr_names.json", JSON.stringify(nameMap), function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('bex_vs_cr_names created');
});

fs.writeFile("bex_vs_cr_ids.json", JSON.stringify(codeMap), function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('bex_vs_cr_ids created');
});

/* Map currently indexed GeoSup with Bex supplier list
  Check which supplier might get generated and indexed in sitemap
-------------------------------------------------------- */
// From RODIS_CR_US_Legacy-index-Rodis_jg_092020.xml
let oldIndexedSuppliers = [101, 117, 13, 136, 17, 177, 18, 182, 196, 199, 224, 231, 249, 256, 274, 44, 5, 54, 83, 91, 99]
let bexIds = bexNames.map((item) => {
  return parseInt(item.code);
})
let indexOverlapIds = oldIndexedSuppliers.map((id) => {
  if(bexIds.indexOf(id) >= 0) {
    return id;
  }
})

fs.writeFile("old_vs_new_indexed_overlappingIds.json", JSON.parse(JSON.stringify(indexOverlapIds)), function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('old_vs_new_indexed_overlappingIds created');
});

/* Map currently indexed GeoSup with Bex supplier list
  Check which supplier might get generated and indexed in sitemap
-------------------------------------------------------- */
// From Alberto's demand file. all supplier already exist in Bex supplier list
let AlbertoSupplierFromDeman = [1002,1009,1011,1012,1013,1014,1015,1017,1022,1026,1029,1030,1032,1034,1035,1039,1040,1041,1042,1043,1044,1047,1048,1049,1050,1053,1054,1055,1057,1059,1060,1061,1062,1063,1064,1065,1066,1069,1070,1071,1074,1075,1076,1079,1081,1082,1083,1084,1087,1090,1091,1092,1093,1094,1095,1097,1098,1099,11,1100,1101,1102,1104,1105,1106,1108,1109,1110,1111,1113,1115,1116,1117,1119,1121,1122,1125,1126,1127,1128,1129,1131,1135,1137,1139,1140,1142,13,14,15,17,19,2,20,27,3,30,33,34,35,38,39,40,41,42,43,45,46,6,69,71,73]
let codeMapIds = Object.values(codeMap).map((id) => {
  return parseInt(id);
})
let albertoOverlapIds = AlbertoSupplierFromDeman.map((id) => {
  if(codeMapIds.indexOf(id) < 0) {
    return id; //supplier ids from demand doesn't exist in redirect codeMap
  }
})

fs.writeFile("alberto_demand_vs_bexIds.json", JSON.parse(JSON.stringify(albertoOverlapIds)), function(err) {
  if (err) {
    return console.error(err);
  }
  console.log('alberto_demand_vs_bexIds created');
});

