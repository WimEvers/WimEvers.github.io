// Deze file geeft 3 arrays
// TODO: Deze is gegenereerd door het python programma genFoto.py
// 
// 
/*Data vakanties 
formaat: (0)latitude, (1)langitude, (2)zoomfactor, (3)regio (4)vakantiesoort (5)jaar (6)land*/
const vakregio = [
[51.5824,  4.7761, 13, "Breda"               ,"dagtocht" ,2024, "Nederland"], // geo:51.56645,4.77425?z=13
[49.6967,  5.3109, 11, "Ardennen"            ,"trip"     ,2024, "Belgie"],    // geo:49.6967,5.3139?z=11
[50.5981,  6.2515, 12, "Eifel"               ,"trip"     ,2024, "Duitsland"], // geo:50.598068,6.251489?z=17
[51.0236,  3.6773, 12, "Gent"                ,"trip"     ,2024, "Belgie"],    // geo:51.0236,3.6773?z=12
[56.502,  -3.9220,  7, "Schotland"           ,"vakantie" ,2024, "UK"],
[39.371,   2.7430,  9, "Mallorca"            ,"vakantie" ,2024, "Spanje"],
[51.5115,  3.7292, 11, "Zeeland"             ,"trip"     ,2024, "Nederland"], // geo:51.5115,3.7292?z=11
[28.276, -16.9409, 10, "Canarische eilanden" ,"vakantie" ,2025, "Spanje"], 
[50.4335,  7.3471, 10, "Koblenz"             ,"trip"     ,2025, "Duitsland"], // geo:50.4335,7.3471?z=10
[49.7969,  6.5461, 12, "Petit Suise"         ,"trip"     ,2025, "Duitsland"], //geo:49.7969,6.5461?z=12
];
//[,  , , ""             ,""     ,202, ""], // geo:50.4335,7.3471?z=10
/*Data locaties 
formaat: (0)latitude, (1)langitude, (2)plaatsnaam, (3)regio, (4)land, (5)jaartal, (6)maand, (7)fotocode (8) icon (9)aantal foto's*/
const locaties = [
[28.35221,  -16.835699, "Los Silos",                    "Canarische eilanden", "Spanje", 2025, "April",    "TLS", "hotel",   1], //Tenerife Los Silos
[28.28526,  -16.43538 , "Guimar",                       "Canarische eilanden", "Spanje", 2025, "April",    "TGM", "hotel",   1], //Tenerife GuiMar
[28.14428,  -17.21317 , "Hermigua",                     "Canarische eilanden", "Spanje", 2025, "April",    "GHG", "hotel",   2], //Gomera HermiGua
[28.185232, -17.200588, "Camino de los Pasos",          "Canarische eilanden", "Spanje", 2025, "April",    "GWA", "hiking",  3], //Gomera Wandeling Agula
[28.317941, -16.805751, "Parque Rural de Teno",         "Canarische eilanden", "Spanje", 2025, "April",    "TWT", "hiking",  1], //Tenerife Wandeling Tenogebergte 
[28.07420,  -17.23017,  "Barranco de Guarimiar",        "Canarische eilanden", "Spanje", 2025, "April",    "GKG", "kloof",   1], //Gomera Kloof barranco de Guarimiar
[28.224080, -16.631187, "El Teide",                     "Canarische eilanden", "Spanje", 2025, "April",    "TWG", "hiking",  1], //Tenerife Wandeling roques de Garcia
[28.12899,  -17.27016,  "Parque Nacional de Garajonay", "Canarische eilanden", "Spanje", 2025, "April",    "GNG", "natpark", 2], //Gomera National park Garajonay
[28.40139,  -16.58721,  "Sendero Rambla de Castro",     "Canarische eilanden", "Spanje", 2025, "April",    "TWK", "hiking",  3], //Tenerife Wandeling langs de Kust
[28.531300, -16.280054, "Anaga",                        "Canarische eilanden", "Spanje", 2025, "April",    "TPA", "hiking",  2], //Tenerife Anaga geo:28.531300,-16.280054?z=18
[51.582460,   4.775068, "Breda streetart",              "Breda",            "Nederland", 2024, "Maart",    "BSA", "stad",    1], //Breda streetart wandeling
[49.839605,   5.001408, "Wandeling vanuit Rochehaut",   "Ardennen",            "Belgie", 2024, "Augustus", "BAR", "hiking",  3], //Belgie Ardennnen wandeling Rochehaut
[49.696308,   5.310924, "Wandeling Le Dolmen d'Azy",    "Ardennen",            "Belgie", 2024, "Augustus", "BAA", "hiking",  3], //Belgie Ardennnen wandeling le dolmen d'Azy
[49.792655,   5.065309, "Bouillon",                     "Ardennen",            "Belgie", 2024, "Augustus", "BAB", "stadje",  2], //Belgie Ardennnen Bouillon
[49.63365,    5.34751,  "Abdij ruine van Orval",        "Ardennen",            "Belgie", 2024, "Augustus", "BAO", "stadje",  1], //Belgie Ardennen Orval
[50.512202,   6.168755, "Eifel",                        "Eifel",            "Duitsland", 2024, "Augustus", "DEF", "fietsen", 2], //Eifel vakantie Konzen
[51.06178,    3.67164,  "Bourgoyen",                    "Gent",                "Belgie", 2024, "Augustus", "GBG", "park",    1], //Gent BourGoyen
[51.05697,    3.72080,  "De stad Gent",                 "Gent",                "Belgie", 2024, "Augustus", "BGT", "stadje",  2], //Belgie GentT
[51.003476,   3.585760, "De Leie",                      "Gent",                "Belgie", 2024, "Augustus", "BGL", "fietsen", 1], //Belgie Gent Leie
[50.554300,   6.763818, "Bad Munstereifel",             "Koblenz",          "Duitsland", 2025, "Juli",     "DBM", "stadje",  1], //Duitsland Bad Munstereifel
[50.358374,   7.599401, "Koblenz",                      "Koblenz",          "Duitsland", 2025, "Juli",     "DKO", "stadje",  2], //Duitsland KOblenz
[50.316412,   7.626416, "Rupertsklamm",                 "Koblenz",          "Duitsland", 2025, "Juli",     "DRK", "kloof",   2], //Duitsland RupertsKlamm
[50.27169,    7.646321, "Braubach",                     "Koblenz",          "Duitsland", 2025, "Juli",     "DBB", "stadje",  1], //Duitsland BrauBach
[49.80444,    6.65377,  "GenovevaHoehle",               "Petit Suise",      "Duitsland", 2025, "Juli",     "DGH", "hiking",  3], //Duitsland Genoveva Hoehle
[49.825508,   6.33880,  "Berdorf",                      "Petit Suise",      "Luxemburg", 2025, "Juli",     "DBD", "hiking",  3], //Luxemburg BerDorf 
[49.846102,   6.440295, "Teufelsschlucht",              "Petit Suise",      "Duitsland", 2025, "Juli",     "DTS", "hiking",  4], //Duitsland TeufelsSchlucht
] 
//[,   , "",              "",            "", 202, "", "", "",    0], //geo:49.63365,5.34751?z=16 Orval
// fotoTekst; de beschrijving bij elke foto
// (0) fotonaam (=filename) (1) width px (2) height px (3) Omschrijving (4) file type
// alle foto's saven als jpg, Quality level 50, progressive (zie folder AA Wim/Hobby/programming/size test)
// alle gpx files weergeven in gpx.studio layer: mapbox outdoor via snipping tool saven als PNG, via IRFAN view saven met compression level 9 
// nog veel kleiner via GIMP - Image - Mode - indexed, dan opslaan via export als PNG file

// size is niet meer nodig wel filetype (PNG voor kaarten, JPG voor foto's)
const fotoText = [
["TLS0", 800, 361 , "Hotel Rural Case Amarilla in Los Tilos; een bananen plantage", "png"],
["TGM0", 800, 1067, "Hotel Rural Finca Salamanca in Guimar; een voormalige avocado plantage", "png"],
["GHG0", 800, 600 , "Hotel Apartamentos Los Telares in Hermigua", "png"],
["GHG1", 800, 600 , "Uitzicht vanaf ons balkon", "png"],
["GWA0", 450, 600 , "Het gaat steil omhoog over de Camino de los Pasos", "jpg"],
["GWA1", 800, 600 , "Uitzicht vanaf de Mirador de Abrante", "png"],
["GWA2", 800, 520 , "De wandeling", "png"],
["TWT0", 800, 600 , "Mooit uitzichten vanaf de toppen van het Teno gebergte", "png"],
["GKG0", 800, 533 , "Barranco de Guarimiar; afdeling", "png"],
["TWG0", 800, 533 , "Roques de Garcia", "png"],
["GNG0", 800, 600 , "Garajonay NP", "png"],
["GNG1", 450, 600 , "Het is vaak mistig en vochtig", "png"],
["TPA0", 800, 600 , "Mooi, oud laurier bos in Anaga", "png"],
["TWK0", 800, 600 , "Kaart van de wandeling", "png"],
["TWK1", 800, 600 , "Playa de los roques", "png"],
["TWK2", 800, 600 , "Uitzicht op playa de la Fayana", "png"],
["TPA1", 800, 600 , "Kaart van de wandeling", "png"],
["BSA0", 800, 600 , "Streetart in Breda", "png"],
["DEF0", 800, 361 , "Fietsen door de Hoge Venen", "png"],
["DEF1", 316, 600 , "Vennbahn Radweg", "png"],
["DBM0", 450, 600 , "De stadsmuur bij Bad Munstereifel", "png"],
["DKO0", 800, 600 , "Festung Ehrenbreitstein", "png"],
["DKO1", 450, 600 , "Kaiser Wilhelm Denkmal bij het Deutsches Eck", "png"],
["DRK0", 800, 600 , "De ingang van de kloof", "png"],
["DRK1", 450, 600 , "Het is een mooie kloof", "png"],
["DBB0", 800, 600 , "Mooie vakwerkhuizen", "png"],
["GBG0", 800, 600 , "Het Park Bourgoyen", "png"],
["BGT0", 800, 600 , "Gent by night", "png"],
["BGT1", 800, 600 , "Gravensteen", "png"],
["BGL0", 800, 600 , "Fietstocht langs de Leie; kasteel van Ooidonk", "png"],
["BAA0", 800, 619 , "Op de top", "png"],
["BAA1", 800, 600 , "De Semois", "png"],
["BAA2", 606, 765 , "De wandeling", "png"],
["BAR0", 800, 361 , "Uitzicht over de Semois", "png"],
["BAR1", 800, 360 , "Gewoon een leuke foto", "png"],
["BAR2", 800, 526 , "De wandeling", "png"],
["BAB0", 446, 600 , "Middeleeuwsfeest op het kasteel van Bouillon", "png"],
["BAB1", 800, 360 , "Bij het riddertournooi", "png"],
["BAO0", 800, 361 , "De ruine van de Abdij van Orval", "png"],
["DGH0", 800, 600 , "De route", "png"],
["DGH1", 800, 600 , "De Genoveva Hoehle", "jpg"],
["DGH2", 800, 600 , "Selfie", "jpg"],
["DBD0", 800, 600 , "De route", "png"],
["DBD1", 800, 600 , "Mooie lichtinval", "jpg"],
["DBD2", 800, 600 , "Portret van ons twee", "jpg"],
["DTS0", 800, 600 , "De route", "png"],
["DTS1", 800, 600 , "Groepsfoto", "jpg"],
["DTS2", 800, 600 , "De schlucht is plaatselijk nauw", "jpg"],
["DTS3", 800, 600 , "Nils moet even ruig doen", "jpg"],
]
//["", 800, 600 , "", "jpg"],
