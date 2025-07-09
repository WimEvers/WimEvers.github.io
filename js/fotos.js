// Deze file geeft 3 arrays
// TODO: Deze is gegenereerd door het python programma genFoto.py
// 
// r2r2k1/5ppp/2p5/3b4/PP1B2nN/6P1/5P1P/R3R1K1 b - - 0 23
/*Data vakanties 
formaat: (0)latitude, (1)langitude, (2)zoomfactor, (3)regio (4)vakantiesoort (5)jaar (6)land*/
const vakregio = [
[28.276, -16.9409, 10, "Canarische eilanden" ,"vakantie" ,2025, "Spanje"], 
[56.502,  -3.9220,  7, "Schotland"           ,"vakantie" ,2024, "UK"],
[39.371,   2.7430,  9, "Mallorca"            ,"vakantie" ,2024, "Spanje"],
[49.6967,  5.3139, 11, "Ardennen"            ,"trip"     ,2024, "Belgie"],    // geo:49.6967,5.3139?z=11
[50.5981,  6.2515, 12, "Eifel"               ,"trip"     ,2024, "Duitsland"], // geo:50.598068,6.251489?z=17
[51.0236,  3.6773, 12, "Gent"                ,"trip"     ,2024, "Belgie"],    // geo:51.0236,3.6773?z=12
[51.5115,  3.7292, 11, "Zeeland"             ,"trip"     ,2024, "Nederland"], // geo:51.5115,3.7292?z=11
[51.5824,  4.7761, 13, "Breda"               ,"dagtocht" ,2024, "Nederland"], // geo:51.56645,4.77425?z=13
[50.4335,  7.3471, 10, "Koblenz"             ,"trip"     ,2025, "Duitsland"], // geo:50.4335,7.3471?z=10
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
[50.512202,   6.168755, "Eifel",                        "Eifel",            "Duitsland", 2024, "Augustus", "DEF", "fietsen", 2], //Eifel vakantie Konzen
[51.06178,    3.67164,  "Bourgoyen",                    "Gent",                "Belgie", 2024, "Augustus", "GBG", "park",    1], //Gent BourGoyen
[51.05697,    3.72080,  "De stad Gent",                 "Gent",                "Belgie", 2024, "Augustus", "BGT", "stadje",  2], //Belgie GentT
[51.003476,   3.585760, "De Leie",                      "Gent",                "Belgie", 2024, "Augustus", "BGL", "fietsen", 1], //Belgie Gent Leie
[50.554300,   6.763818, "Bad Munstereifel",             "Koblenz",          "Duitsland", 2025, "Juli",     "DBM", "stadje",  1], //Duitsland Bad Munstereifel
[50.358374,   7.599401, "Koblenz",                      "Koblenz",          "Duitsland", 2025, "Juli",     "DKO", "stadje",  2], //Duitsland KOblenz
[50.316412,   7.626416, "Rupertsklamm",                 "Koblenz",          "Duitsland", 2025, "Juli",     "DRK", "kloof",   2], //Duitsland RupertsKlamm
[50.27169,    7.646321, "Braubach",                     "Koblenz",          "Duitsland", 2025, "Juli",     "DBB", "stadje",  1], //Duitsland BrauBach
] 
//[,   , "",              "",            "", 202, "", "", "",    0], //
// fotoTekst; de beschrijving bij elke foto
// (0) fotonaam (=filename) (1) width px (2) height px (3) Omschrijving
const fotoText = [
["TLS0", 800, 361 , "Hotel Rural Case Amarilla in Los Tilos; een bananen plantage"],
["TGM0", 800, 1067, "Hotel Rural Finca Salamanca in Guimar; een voormalige avocado plantage", ],
["GHG0", 800, 600 , "Hotel Apartamentos Los Telares in Hermigua"],
["GHG1", 800, 600 , "Uitzicht vanaf ons balkon"],
["GWA0", 450, 600 , "Het gaat steil omhoog over de Camino de los Pasos"],
["GWA1", 800, 600 , "Uitzicht vanaf de Mirador de Abrante"],
["GWA2", 800, 520 , "De wandeling"],
["TWT0", 800, 600 , "Mooit uitzichten vanaf de toppen van het Teno gebergte"],
["GKG0", 800, 533 , "Barranco de Guarimiar; afdeling"],
["TWG0", 800, 533 , "Roques de Garcia"],
["GNG0", 800, 600 , "Garajonay NP"],
["GNG1", 450, 600 , "Het is vaak mistig en vochtig"],
["TPA0", 800, 600 , "Mooi, oud laurier bos in Anaga"],
["TWK0", 800, 600 , "Kaart van de wandeling"],
["TWK1", 800, 600 , "Playa de los roques"],
["TWK2", 800, 600 , "Uitzicht op playa de la Fayana"],
["TPA1", 800, 600 , "Kaart van de wandeling"],
["BSA0", 800, 600 , "Streetart in Breda"],
["DEF0", 800, 361 , "Fietsen door de Hoge Venen"],
["DEF1", 316, 600 , "Vennbahn Radweg"],
["DBM0", 450, 600 , "De stadsmuur bij Bad Munstereifel"],
["DKO0", 800, 600 , "Festung Ehrenbreitstein"],
["DKO1", 450, 600 , "Kaiser Wilhelm Denkmal bij het Deutsches Eck"],
["DRK0", 800, 600 , "De ingang van de kloof"],
["DRK1", 450, 600 , "Het is een mooie kloof"],
["DBB0", 800, 600 , "Mooie vakwerkhuizen"],
["GBG0", 800, 600 , "Het park Bourgoyen"],
["BGT0", 800, 600 , "Gent by night"],
["BGT1", 800, 600 , "Gravensteen"],
["BGL0", 800, 600 , "Fietstocht langs de Leie; kasteel van Ooidonk"],
];
//["", 800, 600 , ""],
