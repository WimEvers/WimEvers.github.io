// Deze file geeft 3 arrays
// TODO: Deze is gegenereerd door het python programma genFoto.py

/*Data vakanties 
formaat: (0)latitude, (1)langitude, (2)zoomfactor, (3)regio (4)vakantiesoort (5)jaar (6)land*/
const vakregio = [
[28.276, -16.9409, 10, "Canarische eilanden" ,"vakantie" ,2025, "Spanje"], 
[56.502,  -3.9220,  7, "Schotland"           ,"vakantie" ,2024, "UK"],
[39.371,   2.7430,  9, "Mallorca"            ,"vakantie" ,2024, "Spanje"],
[49.6962,  5.2432, 12, "Ardennen"            ,"trip"     ,2024, "Belgie"],    // geo:49.6962,5.2432?z=12
[50.5853,  6.2557, 12, "Eifel"               ,"trip"     ,2024, "Duitsland"], // geo:50.58528,6.25568?z=14 
[51.0236,  3.6773, 12, "Gent"                ,"trip"     ,2024, "Belgie"],    // geo:51.0236,3.6773?z=12
[51.5115,  3.7292, 11, "Zeeland"             ,"trip"     ,2024, "Nederland"], // geo:51.5115,3.7292?z=11
[51.5824,  4.7761, 13, "Breda"               ,"dagtocht" ,2024, "Nederland"], // geo:51.56645,4.77425?z=13
];

/*Data locaties 
formaat: (0)latitude, (1)langitude, (2)plaatsnaam, (3)regio, (4)land, (5)jaartal, (6)maand, (7)fotocode (8) icon (9)aantal foto's*/
const locaties = [
[28.35221,  -16.835699, "Los Silos",                    "Canarische eilanden", "Spanje", 2025, "April", "TLS", "hotel",   1], //Tenerife Los Silos
[28.28526,  -16.43538 , "Guimar",                       "Canarische eilanden", "Spanje", 2025, "April", "TGM", "hotel",   1], //Tenerife GuiMar
[28.14428,  -17.21317 , "Hermigua",                     "Canarische eilanden", "Spanje", 2025, "April", "GHG", "hotel",   2], //Gomera HermiGua
[28.185232, -17.200588, "Camino de los Pasos",          "Canarische eilanden", "Spanje", 2025, "April", "GWA", "hiking",  2], //Gomera Wandeling Agula
[28.317941, -16.805751, "Parque Rural de Teno",         "Canarische eilanden", "Spanje", 2025, "April", "TWT", "hiking",  1], //Tenerife Wandeling Tenogebergte 
[28.07420,  -17.23017,  "Barranco de Guarimiar",        "Canarische eilanden", "Spanje", 2025, "April", "GKG", "kloof",   1], //Gomera Kloof barranco de Guarimiar
[28.224080, -16.631187, "El Teide",                     "Canarische eilanden", "Spanje", 2025, "April", "TWG", "hiking",  1], //Tenerife Wandeling roques de Garcia
[28.12899,  -17.27016,  "Parque Nacional de Garajonay", "Canarische eilanden", "Spanje", 2025, "April", "GNG", "natpark", 2], //Gomera National park Garajonay
[28.531350, -16.280086, "Park rural de Anaga",          "Canarische eilanden", "Spanje", 2025, "April", "TPA", "hiking",  1], //Tenerige Park rural de Anaga
[51.582460,   4.775068, "Breda streetart",              "Breda",            "Nederland", 2024, "Maart", "BSA", "stad",    1], //Breda streetart wandeling
] 

// fotoTekst; de beschrijving bij elke foto
// (0) fotonaam (=filename) (1) Omschrijving
const fotoText = [
["TLS0", "Hotel Rural Case Amarilla in Los Tilos; een bananen plantage"],
["TGM0", "Hotel Rural Finca Salamanca in Guimar; een voormalige avocado plantage"],
["GHG0", "Hotel Apartamentos Los Telares in Hermigua"],
["GHG1", "Uitzicht vanaf ons balkon"],
["GWA0", "Het gaat steil omhoog over de Camino de los Pasos"],
["GWA1", "Uitzicht vanaf de Mirador de Abrante"],
["TWT0", "Mooit uitzichten vanaf de toppen van het Teno gebergte"],
["GKG0", "Barranco de Guarimiar; afdeling"],
["TWG0", "Roques de Garcia"],
["GNG0", "Garajonay NP"],
["GNG1", "Het is vaak mistig en vochtig"],
["TPA0", "Mooi, oud laurier bos in Anaga"],
["BSA0", "Streetart in Breda"],
];
