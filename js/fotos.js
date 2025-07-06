// Deze file geeft 3 arrays
// TODO: Deze is gegenereerd door het python programma genFoto.py
// 1.e4 e6 2.Qe2 c5 3.g3 Nc6 4.Bg2 Nd4 5.Qd3 d5 6.c3 Nc6 7.exd5 exd5 8.Bxd5 Be6 9.Bxc6+ bxc6 10.Qxd8+ Rxd8 11.Ne2 Nf6 12.d4 Be7 13.O-O O-O 14.Re1 cxd4 15.Nxd4 Bc5 16.Be3 Ng4 17.b4 Bxd4 18.Bxd4 Ra8
// r4rk1/5ppp/2p1b3/p7/PP1B2n1/2P3P1/3N1P1P/R3R1K1 b - a3 0 20
/*Data vakanties 
formaat: (0)latitude, (1)langitude, (2)zoomfactor, (3)regio (4)vakantiesoort (5)jaar (6)land*/
const vakregio = [
[28.276, -16.9409, 10, "Canarische eilanden" ,"vakantie" ,2025, "Spanje"], 
[56.502,  -3.9220,  7, "Schotland"           ,"vakantie" ,2024, "UK"],
[39.371,   2.7430,  9, "Mallorca"            ,"vakantie" ,2024, "Spanje"],
[49.6962,  5.2432, 12, "Ardennen"            ,"trip"     ,2024, "Belgie"],    // geo:49.6962,5.2432?z=12
[50.5981,  6.2515, 12, "Eifel"               ,"trip"     ,2024, "Duitsland"], // geo:50.598068,6.251489?z=17
[51.0236,  3.6773, 12, "Gent"                ,"trip"     ,2024, "Belgie"],    // geo:51.0236,3.6773?z=12
[51.5115,  3.7292, 11, "Zeeland"             ,"trip"     ,2024, "Nederland"], // geo:51.5115,3.7292?z=11
[51.5824,  4.7761, 13, "Breda"               ,"dagtocht" ,2024, "Nederland"], // geo:51.56645,4.77425?z=13
[50.4335,  7.3471, 10, "Koblenz, Amigo's"    ,"trip"     ,2025, "Duitsland"], //geo:50.4335,7.3471?z=10
];

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
[28.531350, -16.280086, "Park rural de Anaga",          "Canarische eilanden", "Spanje", 2025, "April",    "TPA", "hiking",  1], //Tenerige Park rural de Anaga
[51.582460,   4.775068, "Breda streetart",              "Breda",            "Nederland", 2024, "Maart",    "BSA", "stad",    1], //Breda streetart wandeling
[50.512202,   6.168755, "Eifel",                        "Eifel",            "Duitsland", 2024, "Augustus", "DEF", "fietsen", 2], //Eifel vakantie Konzen
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
["BSA0", 800, 600 , "Streetart in Breda"],
["DEF0", 800, 361 , "Fietsen door de Hoge Venen"],
["DEF1", 316, 600 , "Vennbahn Radweg"],
];
//["", ""],
