import React, { useState, useCallback, useEffect, useRef } from "react";

const MEMBERS_FALLBACK = [{"firstName":"Vivian","lastName":"Mavromoustakos","coach":"Chris C"},{"firstName":"Taso","lastName":"Vassiliou","coach":"Chris C"},{"firstName":"Miranda","lastName":"Fischer","coach":"Chris C"},{"firstName":"Elissa","lastName":"DeBruyn","coach":"Andrew"},{"firstName":"Parsa","lastName":"Sharifi","coach":"Kostas"},{"firstName":"Jasmine","lastName":"Carchi","coach":"Hayley"},{"firstName":"Mark","lastName":"Puglia","coach":"Andrew"},{"firstName":"Chris","lastName":"Militello","coach":"Kostas"},{"firstName":"Gianfranco","lastName":"Salamone","coach":"Andrew"},{"firstName":"Ava","lastName":"Ghiotti","coach":"Chris C"},{"firstName":"Dena","lastName":"Boutsikakis","coach":"Hayley"},{"firstName":"Emma","lastName":"Tabenkin","coach":"Hayley"},{"firstName":"Cindy","lastName":"Lee","coach":"Hayley"},{"firstName":"Timothy","lastName":"Lau","coach":"Kostas"},{"firstName":"Matthew","lastName":"Taylee","coach":"Troy"},{"firstName":"Martha","lastName":"Taylee","coach":"Andrew"},{"firstName":"Jan","lastName":"Lei","coach":"Chris C"},{"firstName":"Brendan","lastName":"Deehan","coach":"Chris C"},{"firstName":"Erin","lastName":"Deely","coach":"Chris C"},{"firstName":"Lauren","lastName":"Boudreau","coach":"Kostas"},{"firstName":"Medina","lastName":"Malagic","coach":"Troy"},{"firstName":"Kristina","lastName":"Coriaty","coach":"Andrew"},{"firstName":"Cindy","lastName":"Chen","coach":"Chris C"},{"firstName":"Joann","lastName":"Syrek","coach":"Chris C"},{"firstName":"Bartosz","lastName":"Herdzik","coach":"Kostas"},{"firstName":"Jeffrey","lastName":"Katz","coach":"Chris C"},{"firstName":"Madeline","lastName":"Skoblik","coach":"Kostas"},{"firstName":"Richard","lastName":"Postelnick","coach":"Chris C"},{"firstName":"Deandra","lastName":"Bowersox","coach":"Hayley"},{"firstName":"Krista","lastName":"Kivilo","coach":"Chris C"},{"firstName":"Jessica","lastName":"Lingad","coach":"Chris C"},{"firstName":"Sarah","lastName":"Nakhost-Karimi","coach":"Troy"},{"firstName":"Ayah","lastName":"Issa","coach":"Troy"},{"firstName":"Walter","lastName":"Avaroma","coach":"Troy"},{"firstName":"Dan","lastName":"Marra","coach":"Kostas"},{"firstName":"Cara","lastName":"Gross","coach":"Chris C"},{"firstName":"Marc","lastName":"Gross","coach":"Chris C"},{"firstName":"Matt","lastName":"Neftleberg","coach":"Kostas"},{"firstName":"Michelle","lastName":"Skurnik","coach":"Kostas"},{"firstName":"Luisa","lastName":"Peralta","coach":"Kostas"},{"firstName":"Shelley","lastName":"Criswell","coach":"Chris C"},{"firstName":"Jermaine","lastName":"Barker","coach":"Chris C"},{"firstName":"Mario","lastName":"Giacalone","coach":"Kostas"},{"firstName":"Alex","lastName":"Neumann","coach":"Andrew"},{"firstName":"Adam","lastName":"Eidelsafy","coach":"Kostas"},{"firstName":"Nancy","lastName":"Marin-Rojas","coach":"Hayley"},{"firstName":"Linnea","lastName":"Kickasola","coach":"Chris C"},{"firstName":"Heather","lastName":"Scott","coach":"Andrew"},{"firstName":"Maria","lastName":"Spatola","coach":"Chris C"},{"firstName":"Jill","lastName":"Palmer","coach":"Chris C"},{"firstName":"Adrianne","lastName":"Cordero","coach":"Chris C"},{"firstName":"Allie","lastName":"Yang","coach":"Hayley"},{"firstName":"Kate","lastName":"Hyman","coach":"Hayley"},{"firstName":"Toby","lastName":"Bucsescu","coach":"Kostas"},{"firstName":"Jon","lastName":"Ferrer","coach":"Troy"},{"firstName":"Phat","lastName":"Tran","coach":"Andrew"},{"firstName":"Kody","lastName":"Wescott","coach":"Elijah"},{"firstName":"Lauren","lastName":"Bailey","coach":"Hayley"},{"firstName":"Ana","lastName":"Quintero","coach":"Hayley"},{"firstName":"Zach","lastName":"Horowitz","coach":"Andrew"},{"firstName":"Kelly","lastName":"Goldberg","coach":"Elijah"},{"firstName":"Hosu","lastName":"Kim","coach":"Hayley"},{"firstName":"MICHAEL","lastName":"CORNACCHIA","coach":"Andrew"},{"firstName":"Te","lastName":"Lee","coach":"Troy"},{"firstName":"Eloise","lastName":"Hyman","coach":"Hayley"},{"firstName":"Oscar","lastName":"Solera","coach":"Andrew"},{"firstName":"James","lastName":"Di Maggio","coach":"Andrew"},{"firstName":"Geraldine","lastName":"Kilkelly","coach":"Troy"},{"firstName":"Anne","lastName":"Pfeifenberger","coach":"Chris C"},{"firstName":"Adrianne","lastName":"Lapar","coach":"Chris C"},{"firstName":"Hannah","lastName":"Sommer","coach":"Elijah"},{"firstName":"Jessie","lastName":"Sector","coach":"Chris C"},{"firstName":"Miranda","lastName":"Onnen","coach":"Andrew"},{"firstName":"George","lastName":"Sabini","coach":"Chris C"},{"firstName":"Amal","lastName":"Muzaffar","coach":"Andrew"},{"firstName":"Jeff","lastName":"Krenn","coach":"Andrew"},{"firstName":"Huijo","lastName":"Jeong","coach":"Kostas"},{"firstName":"Nick","lastName":"True Palmer","coach":"Chris C"},{"firstName":"Celeste","lastName":"Scollan","coach":"Troy"},{"firstName":"Teej","lastName":"Matchhar","coach":"Chris C"},{"firstName":"Ryan","lastName":"Parker","coach":"Andrew"},{"firstName":"Sam","lastName":"Swanson","coach":"Chris C"},{"firstName":"Kirthana","lastName":"Chandramouli","coach":"Hayley"},{"firstName":"Katie","lastName":"Wilson","coach":"Chris C"},{"firstName":"Aurora","lastName":"Calzolaio","coach":"Andrew"},{"firstName":"Nicola","lastName":"Spencer-Coye","coach":"Hayley"},{"firstName":"Gino","lastName":"DiBianco","coach":"Chris C"},{"firstName":"Eloisa","lastName":"Mallouras","coach":"Nick"},{"firstName":"Silvia","lastName":"Alvarez","coach":"Chris C"},{"firstName":"Chris","lastName":"Mallouras","coach":"Andrew"},{"firstName":"Margaret","lastName":"Miller Waters","coach":"Andrew"},{"firstName":"Annie","lastName":"Tracy","coach":"Elijah"},{"firstName":"Caroline","lastName":"Greenberg","coach":"Hayley"},{"firstName":"Jennifer","lastName":"Wharton","coach":"Chris C"},{"firstName":"David","lastName":"Di Maggio","coach":"Kostas"},{"firstName":"Robert","lastName":"Prado","coach":"Kostas"},{"firstName":"Frankie","lastName":"Vaccaro","coach":"Andrew"},{"firstName":"Jake","lastName":"Neri","coach":"Andrew"},{"firstName":"Cameron","lastName":"Smith","coach":"Elijah"},{"firstName":"Devon","lastName":"Frye","coach":"Kostas"},{"firstName":"Matt","lastName":"Marrone","coach":"Chris C"},{"firstName":"Madeleine","lastName":"Campbell","coach":"Chris C"},{"firstName":"Lou","lastName":"Pulice","coach":"Troy"},{"firstName":"Elisa","lastName":"Edmondson","coach":"Kostas"},{"firstName":"Cole","lastName":"Mathews","coach":"Troy"},{"firstName":"Natalia","lastName":"Ballester","coach":"Chris C"},{"firstName":"Ethan","lastName":"Jakah","coach":"Chris C"},{"firstName":"Sandra","lastName":"Valminord","coach":"Elijah"},{"firstName":"Rachel","lastName":"Shuman","coach":"Chris C"},{"firstName":"Jennifer","lastName":"Diaz","coach":"Andrew"},{"firstName":"Tasha","lastName":"Naula","coach":"Kostas"},{"firstName":"Amanda","lastName":"Kotey","coach":"Troy"},{"firstName":"Joshua","lastName":"Kraushaar","coach":"Elijah"},{"firstName":"Julie","lastName":"Serigano","coach":"Hayley"},{"firstName":"Jennifer","lastName":"Katz","coach":"Hayley"},{"firstName":"Juliann","lastName":"McEachern","coach":"Troy"},{"firstName":"Lenny","lastName":"Li","coach":"Kostas"},{"firstName":"Niamh","lastName":"McDermott","coach":"Chris C"},{"firstName":"Brian","lastName":"Bove","coach":"Elijah"},{"firstName":"Lena","lastName":"Wu","coach":"Kostas"},{"firstName":"Natasha","lastName":"Klushina","coach":"Andrew"},{"firstName":"Nahiyan","lastName":"Khan","coach":"Elijah"},{"firstName":"Anxhela","lastName":"Mezini","coach":"Elijah"},{"firstName":"Spiro","lastName":"Xenophontos","coach":"Kostas"},{"firstName":"Bella","lastName":"Tabassum","coach":"Nick"},{"firstName":"Paul","lastName":"Gerra","coach":"Elijah"},{"firstName":"Jennifer","lastName":"Riegle","coach":"Hayley"},{"firstName":"Jackie","lastName":"Moran","coach":"Kostas"},{"firstName":"Christopher","lastName":"Austin","coach":"Elijah"},{"firstName":"Andrew","lastName":"Lai","coach":"Chris C"},{"firstName":"Eli","lastName":"Gundry","coach":"Elijah"},{"firstName":"John","lastName":"Adamidis","coach":"Kostas"},{"firstName":"Sarah","lastName":"Cho","coach":"Kostas"},{"firstName":"Marina","lastName":"Tassi","coach":"Nick"},{"firstName":"Nick","lastName":"Fanourgiakis","coach":"Elijah"},{"firstName":"Abegayle","lastName":"Neri","coach":"Andrew"},{"firstName":"Sabrina","lastName":"Zottoli","coach":"Andrew"},{"firstName":"Christina","lastName":"Drossos","coach":"Andrew"},{"firstName":"Iliana","lastName":"Bitis","coach":"Troy"},{"firstName":"Aspa","lastName":"Bitis","coach":"Troy"},{"firstName":"Carolina","lastName":"Parra","coach":"Chris C"},{"firstName":"Michael","lastName":"Bowersox","coach":"Chris C"},{"firstName":"Alex","lastName":"Rodriguez","coach":"Troy"},{"firstName":"Britney","lastName":"Berardelli","coach":"Hayley"},{"firstName":"Katherine","lastName":"Mallouras","coach":"Hayley"},{"firstName":"Na Bin","lastName":"Park","coach":"Elijah"},{"firstName":"Em","lastName":"Pedron","coach":"Hayley"},{"firstName":"Richard","lastName":"Grech","coach":"Troy"},{"firstName":"Andrew","lastName":"Purdy","coach":"Chris C"},{"firstName":"Divina","lastName":"Mogro","coach":"Andrew"},{"firstName":"Fotini","lastName":"Tsividalis","coach":"Kostas"},{"firstName":"Joohee","lastName":"Oh","coach":"Kostas"},{"firstName":"Elena","lastName":"Dimkaros","coach":"Kostas"},{"firstName":"Destiny","lastName":"Reeves","coach":"Kostas"},{"firstName":"Edward","lastName":"Bradin","coach":"Troy"},{"firstName":"Didier","lastName":"Lecorps","coach":"Kostas"},{"firstName":"Kelly","lastName":"Redznak","coach":"Nick"},{"firstName":"Vinesh","lastName":"Vora","coach":"Nick"},{"firstName":"Nicholas","lastName":"Oxenhorn","coach":"Andrew"},{"firstName":"Erika","lastName":"Diaz-Ortiz","coach":"Nick"},{"firstName":"Brandon","lastName":"Vaeth","coach":"Kostas"},{"firstName":"Casey","lastName":"Schreiner","coach":"Nick"},{"firstName":"Katie","lastName":"Talay","coach":"Chris C"},{"firstName":"Kate","lastName":"Grossman","coach":"Nick"},{"firstName":"Samia","lastName":"Kemal","coach":"Nick"},{"firstName":"Kenny","lastName":"Huang","coach":"Kostas"},{"firstName":"Julie","lastName":"Huang","coach":"Kostas"},{"firstName":"Katie","lastName":"Kenfield","coach":"Chris C"},{"firstName":"Elizabeth","lastName":"Yasny","coach":"Andrew"},{"firstName":"Nicolaos","lastName":"Tzoumerkiotis","coach":"Kostas"},{"firstName":"Terrance","lastName":"OConnell","coach":"Nick"},{"firstName":"John","lastName":"Petrucci","coach":"Nick"},{"firstName":"Odhise","lastName":"Paskali","coach":"Kostas"},{"firstName":"Amy","lastName":"Kwak","coach":"Troy"},{"firstName":"Bronwen","lastName":"Wickkiser","coach":"Hayley"},{"firstName":"John","lastName":"LaPolla","coach":"Elijah"},{"firstName":"Michael","lastName":"Allen","coach":"Nick"},{"firstName":"Chris","lastName":"Brizzolara","coach":"Kostas"},{"firstName":"Anna","lastName":"Fitzgerald","coach":"Elijah"},{"firstName":"Gina","lastName":"Antoun","coach":"Troy"},{"firstName":"Sarah","lastName":"Shaddock","coach":"Nick"},{"firstName":"Anna","lastName":"Vassiliou","coach":"Andrew"},{"firstName":"Kenneth","lastName":"Li","coach":"Nick"},{"firstName":"Julianne","lastName":"Burke","coach":"Nick"},{"firstName":"Megan","lastName":"Bradley","coach":"Nick"},{"firstName":"Marysia","lastName":"Klopotowski","coach":"Hayley"},{"firstName":"Zoi","lastName":"Fanourgiakis","coach":"Chris C"},{"firstName":"Adelyn","lastName":"Melnikoff","coach":"Nick"},{"firstName":"Adam","lastName":"Carvalho","coach":"Nick"},{"firstName":"Glen","lastName":"Krugolets","coach":"Nick"},{"firstName":"Lea","lastName":"Karnath","coach":"Nick"},{"firstName":"Nick","lastName":"Arenare","coach":"Elijah"},{"firstName":"Richard","lastName":"Bailey","coach":"Kostas"},{"firstName":"Ritesh","lastName":"Bansal","coach":"Andrew"},{"firstName":"Emanuel","lastName":"Boutsikakis","coach":"Andrew"},{"firstName":"'Cil","lastName":"Brewer","coach":"Chris C"},{"firstName":"Maria","lastName":"Buendia","coach":"Chris C"},{"firstName":"Stephen","lastName":"Caridi","coach":"Chris C"},{"firstName":"Fernando","lastName":"Cicarelli","coach":"Chris C"},{"firstName":"Adam","lastName":"Crane","coach":"Andrew"},{"firstName":"Peter","lastName":"Dellaportas","coach":"Kostas"},{"firstName":"Chrissie","lastName":"Di Bianco","coach":"Chris C"},{"firstName":"Parry","lastName":"Ermogenous","coach":"Chris C"},{"firstName":"Chad","lastName":"Frye","coach":"Andrew"},{"firstName":"Christos","lastName":"Giannopoulos","coach":"Chris C"},{"firstName":"James","lastName":"Granada","coach":"Troy"},{"firstName":"Dennis","lastName":"Hruska","coach":"Hayley"},{"firstName":"Cash","lastName":"Kacarevic","coach":"Kostas"},{"firstName":"Pauline","lastName":"Kakkos","coach":"Hayley"},{"firstName":"Jennifer","lastName":"Lowenherz","coach":"Hayley"},{"firstName":"Michael","lastName":"Mannino","coach":"Chris C"},{"firstName":"Mary","lastName":"Nash","coach":"Chris C"},{"firstName":"Mike","lastName":"Peterson","coach":"Chris C"},{"firstName":"Amy","lastName":"Postelnik","coach":"Andrew"},{"firstName":"Joe","lastName":"Rojas","coach":"Hayley"},{"firstName":"Laurie","lastName":"Scherer","coach":"Troy"},{"firstName":"Edward","lastName":"Taylee","coach":"Troy"},{"firstName":"Karin","lastName":"Venegas","coach":"Hayley"},{"firstName":"Spiredoula","lastName":"Viglis","coach":"Hayley"},{"firstName":"Christina","lastName":"Nickas","coach":"Nick"},{"firstName":"Becky","lastName":"Williams","coach":"Hayley"},{"firstName":"Laura","lastName":"Borg","coach":"Hayley"},{"firstName":"Richard","lastName":"Borg","coach":"Troy"},{"firstName":"Matthew","lastName":"Bonfitto","coach":"Chris C"},{"firstName":"Pio","lastName":"Bonfitto","coach":"Troy"},{"firstName":"Ali","lastName":"Khurman","coach":"Chris C"},{"firstName":"Manolis","lastName":"Tsividakis","coach":"Kostas"},{"firstName":"Monica","lastName":"Hassan","coach":"Andrew"},{"firstName":"Emily","lastName":"Bram","coach":"Nick"},{"firstName":"Daniel","lastName":"Harris","coach":"Elijah"},{"firstName":"David","lastName":"Hernandez","coach":"Troy"},{"firstName":"Jessica","lastName":"Krocker","coach":"Nick"},{"firstName":"Lukas","lastName":"Thorn","coach":"Chris C"},{"firstName":"William","lastName":"Bernstein","coach":"Nick"},{"firstName":"Miranda","lastName":"Manimbo","coach":"Kostas"},{"firstName":"Josh","lastName":"Brewer","coach":"Chris C"},{"firstName":"David","lastName":"Abrukin","coach":"Troy"},{"firstName":"Kate","lastName":"DeMay","coach":"Hayley"},{"firstName":"Alex","lastName":"Perez","coach":"Nick"},{"firstName":"Devin","lastName":"Visslailli","coach":"Chris C"},{"firstName":"Lucilla","lastName":"Pan","coach":"Nick"},{"firstName":"Jennifer","lastName":"Eaker","coach":"Chris C"},{"firstName":"Lorie","lastName":"Grech","coach":"Hayley"},{"firstName":"Savannah","lastName":"Bell","coach":"Hayley"},{"firstName":"Brian","lastName":"Victor","coach":"Elijah"},{"firstName":"Alison","lastName":"Welt","coach":"Nick"},{"firstName":"Kai","lastName":"Farrell","coach":"Hayley"},{"firstName":"Andrew","lastName":"Sheivachman","coach":"Nick"},{"firstName":"Richard","lastName":"Murphy","coach":"Nick"},{"firstName":"Jaime","lastName":"Tejada","coach":"Kostas"},{"firstName":"Eleni","lastName":"Ibrahim","coach":"Chris C"},{"firstName":"Lauren","lastName":"DiGiovanni","coach":"Chris C"},{"firstName":"Nikki","lastName":"Baldauf","coach":"Nick"},{"firstName":"Patricia","lastName":"Gonzalez","coach":"Troy"},{"firstName":"Jayne","lastName":"Deely","coach":"Nick"},{"firstName":"Daniel","lastName":"Pino","coach":"Kostas"},{"firstName":"Michele","lastName":"Quiles","coach":"Elijah"},{"firstName":"Mickey","lastName":"Ruddy","coach":"Nick"},{"firstName":"Sarah","lastName":"Braginsky","coach":"Hayley"},{"firstName":"May","lastName":"Ledner","coach":"Andrew"},{"firstName":"Alexia","lastName":"Devlin","coach":"Nick"},{"firstName":"Ulises","lastName":"Amaya","coach":"Troy"},{"firstName":"Nick","lastName":"Kosarek","coach":"Nick"},{"firstName":"Felipe","lastName":"Machado","coach":"Elijah"},{"firstName":"Boyeon","lastName":"Choi","coach":"Troy"},{"firstName":"Stephen","lastName":"Zelin","coach":"Troy"},{"firstName":"Ryan","lastName":"Kellys","coach":"Nick"},{"firstName":"Rebecca","lastName":"Kivlehan","coach":"Nick"},{"firstName":"Ryann","lastName":"King","coach":"Elijah"},{"firstName":"Spiro","lastName":"Levis","coach":"Chris C"},{"firstName":"Kaitlin","lastName":"Fitzpatrick","coach":"Nick"},{"firstName":"Rajash","lastName":"Puar","coach":"Nick"},{"firstName":"Clare","lastName":"Mandaro","coach":"Elijah"},{"firstName":"Tymel","lastName":"Stewart","coach":"Nick"},{"firstName":"Doreen","lastName":"Dardashtian","coach":"Elijah"},{"firstName":"James","lastName":"Tankersley","coach":"Elijah"},{"firstName":"Maysie","lastName":"Ocera","coach":"Hayley"},{"firstName":"Ali","lastName":"Mcleod","coach":"Andrew"},{"firstName":"Thomas","lastName":"Grimaldi","coach":"Chris C"},{"firstName":"Kate","lastName":"Foran","coach":"Andrew"},{"firstName":"Manolis","lastName":"Grilakis","coach":"Andrew"},{"firstName":"Mairead","lastName":"Kress","coach":"Andrew"},{"firstName":"Dawn","lastName":"Brewer","coach":"Elijah"},{"firstName":"Matt","lastName":"St.Jean","coach":"Kostas"},{"firstName":"Caila","lastName":"Crossan","coach":"Hayley"},{"firstName":"Genevieve","lastName":"Gonzolaz","coach":"Andrew"},{"firstName":"Jennia","lastName":"Iordanou","coach":"Troy"},{"firstName":"Linnea","lastName":"Herman","coach":"Andrew"},{"firstName":"Phoenix","lastName":"Lin","coach":"Chris C"},{"firstName":"Christian","lastName":"Iordanou","coach":"Chris C"},{"firstName":"Leah","lastName":"Ruggiero","coach":"Troy"},{"firstName":"Jessica","lastName":"Daneshvar","coach":"Nick"},{"firstName":"Ian","lastName":"Paulino","coach":"Nick"},{"firstName":"Alba","lastName":"Rajanibala","coach":"Hayley"},{"firstName":"Alexsei","lastName":"Sheih","coach":"Nick"},{"firstName":"Princess","lastName":"Guerrero","coach":"Nick"},{"firstName":"Elizabeth","lastName":"Sia","coach":"Troy"},{"firstName":"Tiffany","lastName":"Do","coach":"Elijah"},{"firstName":"Evangelos","lastName":"Viglis","coach":"Andrew"},{"firstName":"Krista","lastName":"Brenner","coach":"Andrew"},{"firstName":"Markos","lastName":"Viglis","coach":"Kostas"},{"firstName":"Patrick","lastName":"Farran","coach":"Andrew"},{"firstName":"Ali","lastName":"Levin","coach":"Hayley"},{"firstName":"Vanessa","lastName":"Carney","coach":"Nick"},{"firstName":"Meghan","lastName":"Maguire","coach":"Kostas"},{"firstName":"Ken","lastName":"Weinberg","coach":"Troy"},{"firstName":"Pamela","lastName":"Clemens","coach":"Nick"},{"firstName":"Conor","lastName":"Lyman","coach":"Troy"},{"firstName":"Mariah","lastName":"Maher","coach":"Nick"},{"firstName":"Erika","lastName":"Ferrentino","coach":"Chris C"},{"firstName":"Shelly","lastName":"Vance","coach":"Andrew"},{"firstName":"Ian","lastName":"Halbwachs","coach":"Elijah"},{"firstName":"Kristen","lastName":"Leeman","coach":"Troy"},{"firstName":"Yumi","lastName":"Masuda","coach":"Nick"},{"firstName":"Mar","lastName":"Asayan","coach":"Elijah"},{"firstName":"David","lastName":"Goens","coach":"Chris C"},{"firstName":"Odin","lastName":"Zurek","coach":"Nick"},{"firstName":"Eleonore","lastName":"Dumas","coach":"Elijah"},{"firstName":"Daniel","lastName":"Leeman","coach":"Andrew"},{"firstName":"Maria","lastName":"Hara","coach":"Andrew"},{"firstName":"Ketan","lastName":"Patel","coach":"Troy"},{"firstName":"Emily","lastName":"Hartnett","coach":"Hayley"},{"firstName":"Alexandra","lastName":"Gravina","coach":"Troy"},{"firstName":"Ronald","lastName":"Arcentales","coach":"Elijah"},{"firstName":"John","lastName":"Mahramas","coach":"Andrew"},{"firstName":"James","lastName":"Fouhey","coach":"Chris C"},{"firstName":"Valeria","lastName":"Nieves","coach":"Hayley"},{"firstName":"Olivia","lastName":"Bruno","coach":"Nick"},{"firstName":"Jeff","lastName":"Griffin","coach":"Nick"},{"firstName":"Amy","lastName":"Cohen","coach":"Nick"},{"firstName":"David","lastName":"Lechtenberg","coach":"Kostas"},{"firstName":"Peter","lastName":"Grills","coach":"Chris C"},{"firstName":"Katerina","lastName":"Vlitas","coach":"Hayley"},{"firstName":"John","lastName":"Waters","coach":"Andrew"},{"firstName":"Judy","lastName":"Chung","coach":"Hayley"},{"firstName":"Cassie","lastName":"Barrett","coach":"Andrew"},{"firstName":"Henrieke","lastName":"Te Horst-Iordanou","coach":"Hayley"},{"firstName":"Cassidy","lastName":"Hamilton","coach":"Elijah"},{"firstName":"Ben","lastName":"Virgilio","coach":"Kostas"},{"firstName":"Tyler","lastName":"Baldwin","coach":"Chris C"},{"firstName":"Danica","lastName":"Roganovic","coach":"Andrew"},{"firstName":"Mariel","lastName":"Wamsley","coach":"Hayley"},{"firstName":"Deirdre","lastName":"McPartlandt","coach":"Nick"},{"firstName":"Kerry","lastName":"Yang","coach":"Andrew"}];

let _memberList = MEMBERS_FALLBACK;

// ─── NICKNAMES & DISPLAY OVERRIDES ───────────────────────────────────────────
const NICKNAMES = {
  "stevie di maggio": "David Di Maggio", "stevie d": "David Di Maggio",
  "genny gonzalez": "Genevieve Gonzolaz", "genny g": "Genevieve Gonzolaz",
  "danni harris": "Daniel Harris", "danni h": "Daniel Harris",
  "mike ruddy": "Mickey Ruddy", "mike r": "Mickey Ruddy",
  "richard bailey": "Richard Bailey", "rich b": "Richard Bailey", "richard b": "Richard Bailey",
  "bruno e": "Bruno Eeckels",
  "bart": "Bartosz Herdzik", "bart h": "Bartosz Herdzik",
  "niko t": "Nicolaos Tzoumerkiotis", "nicolaos t": "Nicolaos Tzoumerkiotis",
  "peter t": "Phat Tran", "pete t": "Phat Tran",
  "rich p": "Richard Postelnick", "richard p": "Richard Postelnick",
  "dennis bells": "Dennis Hruska",
};
const DISPLAY_NAMES = {
  "david di maggio": "Stevie D", "genevieve gonzolaz": "Genny G",
  "daniel harris": "Danni H", "mickey ruddy": "Mickey R", "richard bailey": "Richard B",
  "nicolaos tzoumerkiotis": "Niko T", "phat tran": "Peter T", "bartosz herdzik": "Bart H", "sarah prewett": "Carson P",
};

// Female members who skip the Hayley preference and are treated like males for assignment
const HAYLEY_PREF_EXCEPTIONS = new Set(["amal muzaffar", "alex neumann", "jackie moran"]);

// Zone preferences for specific members — always route to this zone if a coach there is available
const MEMBER_ZONE_PREF = {
  "christos giannopoulos": "Rack",
};

// Female names for Hayley preference
const FEMALE_NAMES = new Set(["vivian","miranda","elissa","jasmine","emma","lauren","kristina","cindy","joann","madeline","deandra","krista","jessica","sarah","ayah","cara","michelle","luisa","shelley","nancy","linnea","maria","adrianne","allie","kelly","geraldine","anne","hannah","caroline","jennifer","kirthana","katie","nicola","eloisa","margaret","annie","caroline","erika","ava","dena","britney","katherine","em","fotini","joohee","elena","destiny","kelly","kate","julie","bronwen","gina","sarah","megan","marysia","zoi","adelyn","lea","jessica","miranda","kate","savannah","alison","kai","eleni","lauren","jayne","michele","sarah","alexia","rebecca","ryann","kaitlin","clare","doreen","maysie","ali","kate","mairead","dawn","caila","genevieve","jennia","linnea","leah","jessica","alba","princess","elizabeth","tiffany","ali","vanessa","pamela","mariah","kristen","mar","eleonore","maria","emily","alexandra","valeria","amy","katerina","judy","cassie","jasmine","erin","martha","sara","natalia","rachel","tasha","amanda","lena","natasha","anxhela","bella","alba","laura","iliana","aspa","carolina","anna","julianne","emily","dawn","krista","dawn","sandra","jennifer","may","erika","kim","irene","alexandria","kristie"]);

// ─── PAIRS & PREFERRED COACH OVERRIDES ──────────────────────────────────────
// Each entry: members who should always be together, with an optional preferred coach
// preferredCoach: assign both to this coach when they're on shift (and not doing foundations)
// Format: { members: ["First Last", "First Last"], preferredCoach: "CoachName" }
const PAIRS = [
  { members: ["David Lechtenberg", "Amy Cohen"], preferredCoach: "Nick" },
  { members: ["Dan Marra", "Luisa Peralta"] },
];

// Normalize pair member names for lookup
const PAIR_LOOKUP = {}; // "first last" -> { pairIdx, preferredCoach }
PAIRS.forEach((pair, idx) => {
  pair.members.forEach(name => {
    PAIR_LOOKUP[name.toLowerCase()] = { pairIdx: idx, preferredCoach: pair.preferredCoach };
  });
});

// ─── MEMBER LOOKUP ────────────────────────────────────────────────────────────
const _initialCount = {};
MEMBERS_FALLBACK.forEach(m => {
  const key = `${m.firstName.trim().toLowerCase()} ${m.lastName.trim()[0].toLowerCase()}`;
  _initialCount[key] = (_initialCount[key] || 0) + 1;
});
const _initialClashes = new Set(Object.keys(_initialCount).filter(k => _initialCount[k] > 1));

const MEMBER_LOOKUP = {};
function rebuildLookup(memberList) {
  _memberList = memberList;
  // Rebuild clashes for new member list
  const newCount = {};
  memberList.forEach(m => {
    const key = `${m.firstName.trim().toLowerCase()} ${m.lastName.trim()[0].toLowerCase()}`;
    newCount[key] = (newCount[key] || 0) + 1;
  });
  _initialClashes.clear();
  Object.keys(newCount).filter(k => newCount[k] > 1).forEach(k => _initialClashes.add(k));
  Object.keys(MEMBER_LOOKUP).forEach(k => delete MEMBER_LOOKUP[k]);
  memberList.forEach(m => {
  const fn = m.firstName.trim().toLowerCase();
  const ln = m.lastName.trim();
  const li = ln[0].toLowerCase();
  const clashKey = `${fn} ${li}`;
  const displayLast = _initialClashes.has(clashKey) ? ln.slice(0, 4) : ln[0];
  const display = `${m.firstName} ${displayLast}`;
  const entry = { coach: m.coach, display, firstName: m.firstName, lastName: ln };
  if (!_initialClashes.has(clashKey)) MEMBER_LOOKUP[`${fn} ${li}`] = entry;
    MEMBER_LOOKUP[`${fn} ${ln.toLowerCase()}`] = entry;
  });
}
rebuildLookup(MEMBERS_FALLBACK);

function norm(s) { return s.toLowerCase().replace(/[^a-z0-9 ]/g, "").replace(/\s+/g, " ").trim(); }
function trigramSim(a, b) {
  const tg = s => { const t = new Set(); const p = ` ${s} `; for (let i = 0; i < p.length-2; i++) t.add(p.slice(i,i+3)); return t; };
  const ta = tg(a), tb = tg(b); let inter = 0;
  ta.forEach(t => { if (tb.has(t)) inter++; });
  return (2*inter)/(ta.size+tb.size);
}

function lookupMember(firstName, lastName) {
  const fn = norm(firstName), ln = norm(lastName), li = ln[0] || "";
  const applyDisplay = e => {
    const key = norm(`${e.firstName} ${e.lastName}`);
    const pref = DISPLAY_NAMES[key];
    return pref ? { ...e, display: pref } : e;
  };
  const exact = MEMBER_LOOKUP[`${fn} ${ln}`] || MEMBER_LOOKUP[`${fn} ${li}`];
  if (exact) return applyDisplay({ ...exact, matchType: "exact" });
  if (ln.length >= 2) {
    const ln4 = ln.slice(0, 4);
    const m4 = Object.values(MEMBER_LOOKUP).find(e => norm(e.firstName) === fn && norm(e.lastName).startsWith(ln4));
    if (m4) return applyDisplay({ ...m4, matchType: "exact" });
  }
  const nk1 = norm(`${firstName} ${lastName}`), nk2 = `${fn} ${li}`;
  for (const nk of [nk1, nk2]) {
    if (NICKNAMES[nk]) {
      const parts = NICKNAMES[nk].split(" ");
      const nFn = norm(parts[0]), nLn = norm(parts.slice(1).join(" "));
      const ne = MEMBER_LOOKUP[`${nFn} ${nLn}`] || MEMBER_LOOKUP[`${nFn} ${nLn[0]}`];
      if (ne) return applyDisplay({ ...ne, matchType: "nickname" });
    }
  }
  const query = norm(`${firstName} ${lastName}`);
  let best = null, bestScore = 0;
  _memberList.forEach(m => {
    const cand = norm(`${m.firstName} ${m.lastName}`);
    const score = trigramSim(query, cand);
    const fnScore = trigramSim(fn, norm(m.firstName));
    const liMatch = ln[0] && norm(m.lastName)[0] === ln[0];
    const combined = liMatch ? fnScore*0.6 + score*0.4 : score;
    if (combined > bestScore) { bestScore = combined; best = m; }
  });
  if (bestScore > 0.55 && best) {
    const e = { coach: best.coach, display: `${best.firstName} ${best.lastName[0]}`, firstName: best.firstName, lastName: best.lastName, matchType: "fuzzy", fuzzyScore: bestScore };
    return applyDisplay(e);
  }
  return null;
}

function isFemale(firstName) {
  return FEMALE_NAMES.has(firstName.toLowerCase());
}

// ─── SCHEDULE CONFIG ─────────────────────────────────────────────────────────
// Zone layout per day per hour: { zone -> coach[] }
// "busy" coaches (foundations/inferno/class) are tracked separately

// ─── CALENDAR ASSESSMENTS (injected by Claude before download) ───────────────
// Format: { "YYYY-MM-DD": [ { hour: 18, member: "Andrew" }, ... ] }
// This gets updated each time you upload a Mindbody file in Claude
const CALENDAR_ASSESSMENTS = {}; // populated dynamically from Google Calendar API

const DAY_CONFIG = {
  Monday: {
    hours: [15,16,17,18,19,20],
    coaches: {
      Kostas: { start:15, end:20 }, Andrew: { start:16, end:21 },
      "Chris E": { start:17, end:20 }, Hayley: { start:16, end:20 }, Ricky: { start:16, end:20 },
    },
    // zone layout per hour: zone -> ordered coach list (first = primary)
    zoneLayout: {
      15: { Rack:["Kostas"], "Turf-A":[], "Turf-B":[], Back:[] },
      16: { Rack:["Andrew","Ricky"], "Turf-A":["Kostas"], "Turf-B":[], Back:["Hayley"] },
      17: { Rack:["Andrew","Ricky"], "Turf-A":["Kostas"], "Turf-B":[], Back:["Hayley","Chris E"] },
      18: { Rack:["Andrew","Ricky"], "Turf-A":["Kostas"], "Turf-B":[], Back:["Hayley","Chris E"] },
      19: { Rack:["Andrew","Ricky"], "Turf-A":["Kostas"], "Turf-B":[], Back:["Hayley","Chris E"] },
      20: { Rack:["Andrew"], "Turf-A":[], "Turf-B":[], Back:[] },
    },
    foundations: { 17:"Kostas", 19:"Kostas" },
    foundationsFallback: ["Chris E","Andrew","Ricky","Hayley"],
    zoneCap: { Rack:7, "Turf-A":5, "Turf-B":2, Back:6 },
    openGym: {},
  },
  Tuesday: {
    hours: [16,17,18,19,20],
    coaches: {
      Kostas: { start:16, end:21 }, Andrew: { start:16, end:20 },
      Elijah: { start:17, end:20 }, Hayley: { start:16, end:20 },
    },
    zoneLayout: {
      16: { Rack:["Andrew","Kostas"], "Turf-A":[], "Turf-B":[], Back:["Hayley"] },
      17: { Rack:["Kostas","Andrew"], "Turf-A":["Elijah"], "Turf-B":[], Back:["Hayley"] },
      18: { Rack:["Kostas","Andrew"], "Turf-A":["Elijah"], "Turf-B":[], Back:["Hayley"] },
      19: { Rack:["Kostas","Andrew"], "Turf-A":["Elijah"], "Turf-B":[], Back:["Hayley"] },
      20: { Rack:["Kostas"], "Turf-A":[], "Turf-B":[], Back:[] },
    },
    foundations: { 17:"Hayley", 19:"Elijah" },
    foundationsFallback: ["Kostas","Andrew","Nick","Elijah","Hayley"],
    // Hayley always in back regardless of 9 rule
    backAlways: true,
    zoneCap: { Rack:7, "Turf-A":5, "Turf-B":2, Back:6 },
    openGym: {},
  },
  Wednesday: {
    hours: [15,16,17,18,19,20],
    coaches: {
      Kostas: { start:15, end:20 }, Andrew: { start:16, end:21 },
      Nick: { start:15, end:21 }, Ricky: { start:16, end:20 }, Troy: { start:18, end:20 },
    },
    zoneLayout: {
      15: { Rack:["Kostas"], "Turf-A":["Nick"], "Turf-B":[], Back:[] },
      16: { Rack:["Kostas","Andrew"], "Turf-A":["Nick"], "Turf-B":[], Back:["Ricky"] },
      17: { Rack:["Kostas","Andrew"], "Turf-A":["Nick"], "Turf-B":[], Back:["Ricky"] },
      18: { Rack:["Kostas","Andrew"], "Turf-A":["Nick"], "Turf-B":[], Back:["Ricky","Troy"] },
      19: { Rack:["Kostas","Andrew"], "Turf-A":["Nick"], "Turf-B":[], Back:["Ricky","Troy"] },
      20: { Rack:["Andrew"], "Turf-A":["Nick"], "Turf-B":[], Back:[] },
    },
    // foundations 5pm: goes to back if >=9, else turf. 7pm always turf.
    foundations: { 17:"Nick", 19:"Nick" },
    foundationsFallback: ["Kostas","Andrew","Ricky","Troy"],
    foundationsZoneOverride: { 17: (total) => total >= 9 ? "Back" : "Turf-A" },
    nineRule: { zones: ["Back"], fromHour: 16, coaches: ["Nick"] }, // Nick moves to back if >=9 at 4-5pm
    zoneCap: { Rack:7, "Turf-A":5, "Turf-B":2, Back:6 },
    openGym: {},
  },
  Thursday: {
    hours: [16,17,18,19,20],
    coaches: {
      Kostas: { start:16, end:21 }, Andrew: { start:16, end:20 },
      Nick: { start:16, end:20 }, Elijah: { start:16, end:20 },
    },
    zoneLayout: {
      16: { Rack:["Kostas","Andrew"], "Turf-A":["Elijah","Nick"], "Turf-B":[], Back:[] },
      17: { Rack:["Kostas","Andrew"], "Turf-A":["Elijah","Nick"], "Turf-B":[], Back:[] },
      18: { Rack:["Kostas","Andrew"], "Turf-A":["Elijah","Nick"], "Turf-B":[], Back:[] },
      19: { Rack:["Kostas","Andrew"], "Turf-A":["Elijah","Nick"], "Turf-B":[], Back:[] },
      20: { Rack:["Kostas"], "Turf-A":[], "Turf-B":[], Back:[] },
    },
    // 9 rule: if >=9, Nick moves to Back
    nineRule: { backCoach: "Nick", turf: "Elijah" },
    foundations: { 17:"Elijah", 19:"Elijah" },
    foundationsFallback: ["Kostas","Andrew","Nick","Hayley"],
    zoneCap: { Rack:7, "Turf-A":5, "Turf-B":2, Back:6 },
    openGym: {},
  },
  Friday: {
    hours: [15,16,17,18,19],
    coaches: {
      Kostas: { start:15, end:20 }, Elijah: { start:15, end:20 },
    },
    zoneLayout: {
      15: { Rack:["Kostas"], "Turf-A":["Elijah"], "Turf-B":[], Back:[] },
      16: { Rack:["Kostas"], "Turf-A":["Elijah"], "Turf-B":[], Back:[] },
      17: { Rack:["Kostas"], "Turf-A":["Elijah"], "Turf-B":[], Back:[] },
      18: { Rack:["Kostas"], "Turf-A":["Elijah"], "Turf-B":[], Back:[] },
      19: { Rack:["Kostas"], "Turf-A":["Elijah"], "Turf-B":[], Back:[] },
    },
    foundations: { 17:"Elijah" },
    foundationsFallback: ["Kostas","Nick","Ricky"],
    openGym: { Back: true },
    zoneCap: { Rack:7, "Turf-A":5, "Turf-B":2, Back:6 },
  },
  Saturday: {
    hours: [8,9,10,11,12],
    coaches: {
      Kostas: { start:8, end:12 }, Andrew: { start:8, end:13 },
      Hayley: { start:9, end:13 }, Elijah: { start:9, end:13 },
    },
    zoneLayout: {
      8:  { Rack:["Kostas"], "Turf-A":["Andrew"], "Turf-B":[], Back:[] },
      9:  { Rack:["Kostas","Elijah"], "Turf-A":["Hayley"], "Turf-B":[], Back:["Andrew"] },
      10: { Rack:["Kostas","Elijah"], "Turf-A":["Andrew"], "Turf-B":[], Back:["Hayley"] },
      11: { Rack:["Kostas","Elijah"], "Turf-A":["Hayley"], "Turf-B":[], Back:["Andrew"] },
      12: { Rack:["Elijah","Andrew"], "Turf-A":["Hayley"], "Turf-B":[], Back:[] },
    },
    foundations: { 10:"Andrew" },
    foundationsFallback: ["Kostas","Elijah","Hayley"],
    inferno: { 9:"Hayley", 11:"Hayley" },
    bodiesInMotion: { 8:"Andrew" },
    zoneCap: { Rack:7, "Turf-A":5, "Turf-B":2, Back:6 },
    openGym: { Back: [12] },
  },

  // ─── AM SHIFTS ────────────────────────────────────────────────────────────────
  MondayAM: {
    hours: [6,7,8,9,10,11,12],
    coaches: {
      "Chris C": { start:6, end:13 }, Nick: { start:6, end:12 },
      Hayley: { start:6, end:12 }, Elijah: { start:6, end:11 },
      Troy: { start:6, end:12 },
    },
    zoneLayout: {
      6:  { Rack:["Hayley"], "Turf-A":["Troy","Elijah"], "Turf-B":[], Back:["Chris C","Nick"] },
      7:  { Rack:["Hayley"], "Turf-A":["Troy","Elijah"], "Turf-B":[], Back:["Chris C","Nick"] },
      8:  { Rack:["Hayley"], "Turf-A":["Troy","Elijah"], "Turf-B":[], Back:["Chris C","Nick"] },
      9:  { Rack:["Hayley","Chris C"], "Turf-A":["Troy","Elijah"], "Turf-B":[], Back:["Nick"] },
      10: { Rack:["Hayley"], "Turf-A":["Troy","Elijah"], "Turf-B":[], Back:["Chris C","Nick"] },
      11: { Rack:["Hayley","Nick"], "Turf-A":["Troy"], "Turf-B":[], Back:["Chris C"] },
      12: { Rack:["Chris C"], "Turf-A":[], "Turf-B":[], Back:[] },
    },
    foundations: { 10:"Nick" },
    foundationsFallback: ["Troy","Elijah","Hayley","Chris C"],
    foundationsZoneOverride: { 10: () => "Back" },
    breakAt: { "Chris C": [10] },
    zoneCap: { Rack:7, "Turf-A":5, "Turf-B":2, Back:6 },
    openGym: { Back: [9, 12] },
  },

  TuesdayAM: {
    hours: [6,7,8,9,10,11,12],
    coaches: {
      "Chris C": { start:6, end:13 }, Nick: { start:6, end:9 },
      Troy: { start:6, end:12 }, Ricky: { start:7, end:12 },
      Andrew: { start:10, end:13 },
    },
    zoneLayout: {
      6:  { Rack:["Nick"], "Turf-A":["Troy"], "Turf-B":[], Back:["Chris C"] },
      7:  { Rack:["Nick","Ricky"], "Turf-A":["Troy"], "Turf-B":[], Back:["Chris C"] },
      8:  { Rack:["Nick","Ricky"], "Turf-A":["Troy"], "Turf-B":[], Back:["Chris C"] },
      9:  { Rack:["Ricky"], "Turf-A":["Troy"], "Turf-B":[], Back:[] },
      10: { Rack:["Andrew","Ricky"], "Turf-A":[], "Turf-B":[], Back:["Chris C","Troy"] },
      11: { Rack:["Andrew"], "Turf-A":["Troy"], "Turf-B":[], Back:["Chris C"] },
      12: { Rack:["Andrew"], "Turf-A":[], "Turf-B":[], Back:[] },
    },
    foundations: { 7:"Nick", 8:"Chris C", 10:"Troy" },
    foundationsTurf: { 7: true },
    foundationsFallback: ["Troy","Elijah","Nick","Andrew","Ricky"],
    foundationsZoneOverride: { 8: () => "Back", 10: () => "Back" },
    breakAt: { "Chris C": [10] },
    zoneCap: { Rack:7, "Turf-A":5, "Turf-B":2, Back:6 },
    openGym: { Back: [9, 12] },
  },

  WednesdayAM: {
    hours: [6,7,8,9,10,11,12],
    coaches: {
      "Chris C": { start:6, end:13 }, Hayley: { start:6, end:12 },
      Elijah: { start:6, end:11 }, Troy: { start:6, end:12 },
    },
    zoneLayout: {
      6:  { Rack:["Hayley"], "Turf-A":["Troy","Elijah"], "Turf-B":[], Back:["Chris C"] },
      7:  { Rack:["Hayley"], "Turf-A":["Troy","Elijah"], "Turf-B":[], Back:["Chris C"] },
      8:  { Rack:["Hayley"], "Turf-A":["Troy","Elijah"], "Turf-B":[], Back:["Chris C"] },
      9:  { Rack:["Hayley","Chris C"], "Turf-A":["Troy","Elijah"], "Turf-B":[], Back:[] },
      10: { Rack:["Hayley"], "Turf-A":["Troy"], "Turf-B":[], Back:["Chris C","Elijah"] },
      11: { Rack:["Hayley"], "Turf-A":["Troy"], "Turf-B":[], Back:["Chris C"] },
      12: { Rack:["Chris C"], "Turf-A":[], "Turf-B":[], Back:[] },
    },
    foundations: { 8:"Elijah", 10:"Elijah" },
    foundationsFallback: ["Troy","Nick","Hayley","Chris C"],
    foundationsZoneOverride: { 10: () => "Back" },
    breakAt: { "Chris C": [10] },
    zoneCap: { Rack:7, "Turf-A":5, "Turf-B":2, Back:6 },
    openGym: { Back: [9, 12] },
  },

  ThursdayAM: {
    hours: [6,7,8,9,10,11,12],
    coaches: {
      "Chris C": { start:6, end:11 }, Ricky: { start:6, end:12 },
      Hayley: { start:6, end:9 }, Troy: { start:6, end:12 },
      Andrew: { start:10, end:13 },
    },
    zoneLayout: {
      6:  { Rack:["Hayley","Ricky"], "Turf-A":["Troy"], "Turf-B":[], Back:["Chris C"] },
      7:  { Rack:["Hayley","Ricky"], "Turf-A":[], "Turf-B":[], Back:["Chris C","Troy"] },
      8:  { Rack:["Hayley","Ricky"], "Turf-A":["Troy"], "Turf-B":[], Back:["Chris C"] },
      9:  { Rack:["Ricky"], "Turf-A":["Troy"], "Turf-B":[], Back:["Chris C"] },
      10: { Rack:["Andrew","Ricky"], "Turf-A":[], "Turf-B":[], Back:["Troy"] },
      11: { Rack:["Andrew","Ricky"], "Turf-A":["Troy"], "Turf-B":[], Back:[] },
      12: { Rack:["Andrew"], "Turf-A":[], "Turf-B":[], Back:[] },
    },
    foundations: { 7:"Troy", 10:"Troy" },
    foundationsFallback: ["Troy","Elijah","Nick","Hayley","Andrew"],
    foundationsZoneOverride: { 10: () => "Back" },
    bodiesInMotion: { 7:"Chris C" },
    zoneCap: { Rack:7, "Turf-A":5, "Turf-B":2, Back:6 },
    openGym: { Back: [9, 12] },
  },

  FridayAM: {
    hours: [6,7,8,9,10,11,12],
    coaches: {
      "Chris C": { start:6, end:13 }, Nick: { start:6, end:13 },
      Hayley: { start:6, end:12 }, Troy: { start:6, end:12 },
      Elijah: { start:7, end:11 }, Ricky: { start:6, end:12 },
    },
    zoneLayout: {
      6:  { Rack:["Hayley","Ricky"], "Turf-A":["Troy"], "Turf-B":[], Back:["Chris C","Nick"] },
      7:  { Rack:["Hayley","Ricky"], "Turf-A":["Troy","Elijah"], "Turf-B":[], Back:["Chris C","Nick"] },
      8:  { Rack:["Hayley","Ricky"], "Turf-A":["Troy","Elijah"], "Turf-B":[], Back:["Chris C","Nick"] },
      9:  { Rack:["Hayley","Ricky","Chris C"], "Turf-A":["Troy","Elijah"], "Turf-B":[], Back:["Nick"] },
      10: { Rack:["Hayley","Ricky"], "Turf-A":["Troy"], "Turf-B":[], Back:["Chris C","Nick"] },
      11: { Rack:["Hayley","Ricky"], "Turf-A":["Troy"], "Turf-B":[], Back:["Nick","Chris C"] },
      12: { Rack:["Nick","Chris C"], "Turf-A":[], "Turf-B":[], Back:[] },
    },
    foundations: { 8:"Elijah", 10:"Nick" },
    foundationsTurf: { 8: true },
    foundationsFallback: ["Troy","Elijah","Nick","Hayley","Ricky"],
    foundationsZoneOverride: { 10: () => "Back" },
    breakAt: { Nick:[9], "Chris C":[10] },
    zoneCap: { Rack:7, "Turf-A":5, "Turf-B":2, Back:6 },
    openGym: { Back: [9, 12] },
  },

  // ─── SUNDAY ───────────────────────────────────────────────────────────────────
  Sunday: {
    hours: [9,10,11,12],
    coaches: {
      Nick: { start:9, end:13 }, "Chris E": { start:9, end:13 },
    },
    zoneLayout: {
      9:  { Rack:["Nick"], "Turf-A":["Chris E"], "Turf-B":[], Back:[] },
      10: { Rack:["Nick"], "Turf-A":["Chris E"], "Turf-B":[], Back:[] },
      11: { Rack:["Nick"], "Turf-A":["Chris E"], "Turf-B":[], Back:[] },
      12: { Rack:["Nick"], "Turf-A":["Chris E"], "Turf-B":[], Back:[] },
    },
    zoneCap: { Rack:7, "Turf-A":5, "Turf-B":2, Back:6 },
    openGym: { Back: [10, 11, 12] },
  },
};

const ZONES = ["Rack", "Turf-A", "Turf-B", "Back"];
const ZONE_LABELS = { Rack:"Rack", "Turf-A":"Turf (3)", "Turf-B":"Turf (2)", Back:"Back" };
const COACH_COLORS = {
  Kostas:"#2563eb", Andrew:"#059669", Hayley:"#d97706",
  Nick:"#7c3aed", Elijah:"#dc2626", Troy:"#0891b2",
  Ricky:"#db2777", "Chris E":"#65a30d", "Chris C":"#c2410c",
};

function fmt(h) {
  if (h === 12) return "12pm";
  if (h === 0) return "12am";
  return h < 12 ? `${h}am` : `${h-12}pm`;
}

// ─── ASSIGNMENT ENGINE ────────────────────────────────────────────────────────

// Core member assignment — given a layout (zone->coach[]), assigns members using all priority rules
// Returns: { [zone]: items[] }
function assignMembersToLayout(dayName, hour, members, customLayout) {
  const cfg = DAY_CONFIG[dayName];
  const layout = customLayout;
  const foundCoach = cfg.foundations?.[hour];
  const infernoCoach = cfg.inferno?.[hour];
  const bodiesCoach = cfg.bodiesInMotion?.[hour];
  const total = members.length;

  const busy = new Set();
  const hasFoundations = members.some(m => m.isFoundations);
  // Only mark foundations coach as busy if they're actually in the layout
  if (foundCoach && hasFoundations && !foundCoachAbsent) busy.add(foundCoach);
  if (infernoCoach) busy.add(infernoCoach);
  if (bodiesCoach) busy.add(bodiesCoach);

  const fullLayout = {};
  ZONES.forEach(z => { fullLayout[z] = [...(layout[z] || [])]; });

  const zoneCoaches = {};
  ZONES.forEach(z => { zoneCoaches[z] = (fullLayout[z] || []).filter(c => !busy.has(c)); });

  const pool = {};
  ZONES.forEach(z => { (fullLayout[z] || []).forEach(c => { if (!busy.has(c)) pool[c] = { zone: z, items: [] }; }); });

  const semi = members.filter(m => !m.isFoundations);
  const zoneFill = {};
  ZONES.forEach(z => { zoneFill[z] = 0; });

  const coachZoneFn = (c) => ZONES.find(z => (layout[z]||[]).includes(c)) || null;
  const floorCoachesForZone = (z) =>
    (zoneCoaches[z] || []).filter(c => pool[c]).sort((a,b) => pool[a].items.length - pool[b].items.length);

  const hasOpenGym = members.some(m => m.isOpenGym);

  const bestZone = (preferZone = null) => {
    const activeZones = ZONES.filter(z => {
      if (z === "Back" && hasOpenGym) return false; // Back reserved for open gym
      return (zoneCoaches[z]||[]).length > 0;
    });
    if (activeZones.length === 0) return null;
    const sorted = activeZones.slice().sort((a, b) => {
      const ratioA = zoneFill[a] / cap(a);
      const ratioB = zoneFill[b] / cap(b);
      return ratioA - ratioB;
    });
    if (preferZone && activeZones.includes(preferZone)) {
      if (zoneFill[preferZone] < (cfg.zoneCap[preferZone] || 7)) return preferZone;
    }
    return sorted[0];
  };

  // Sort: members with an on-shift programming coach go first, so they claim their coach before cap fills
  const sortedSemi = [...semi].sort((a, b) => {
    const infoA = lookupMember(a.firstName, a.lastName);
    const infoB = lookupMember(b.firstName, b.lastName);
    const aIsPair = PAIR_LOOKUP[`${a.firstName} ${a.lastName}`.toLowerCase()] ? 0 : 1;
    const bIsPair = PAIR_LOOKUP[`${b.firstName} ${b.lastName}`.toLowerCase()] ? 0 : 1;
    if (aIsPair !== bIsPair) return aIsPair - bIsPair; // pairs first
    const aHasCoach = infoA?.coach && !!pool[infoA.coach] ? 0 : 1;
    const bHasCoach = infoB?.coach && !!pool[infoB.coach] ? 0 : 1;
    return aHasCoach - bHasCoach;
  });

  sortedSemi.forEach(member => {
    const info = lookupMember(member.firstName, member.lastName);
    const display = info ? info.display : `${member.firstName} ${member.lastName[0]||"?"}`;
    const progCoach = info?.coach;
    const female = isFemale(member.firstName);
    const progCoachZone = progCoach ? coachZoneFn(progCoach) : null;
    let assigned = null;

    // 0. Pair preferred coach / pair together
    const fullName = `${member.firstName} ${member.lastName}`.toLowerCase();
    const pairInfo = PAIR_LOOKUP[fullName];
    if (pairInfo) {
      if (pairInfo.preferredCoach && pool[pairInfo.preferredCoach]) {
        const prefCoach = pairInfo.preferredCoach;
        const z = coachZoneFn(prefCoach);
        if (z && zoneFill[z] < (cfg.zoneCap[z] || 7)) assigned = prefCoach;
      }
      if (!assigned) {
        const pair = PAIRS[pairInfo.pairIdx];
        const partnerName = pair.members.find(n => n.toLowerCase() !== fullName);
        if (partnerName) {
          const partnerCoach = Object.keys(pool).find(c =>
            pool[c].items.some(item => item.rawName?.toLowerCase() === partnerName.toLowerCase() ||
              item.display?.toLowerCase().startsWith(partnerName.split(" ")[0].toLowerCase()))
          );
          if (partnerCoach) {
            const z = coachZoneFn(partnerCoach);
            if (z) assigned = partnerCoach; // pairs always stay together regardless of cap
          }
        }
      }
    }

    // 0b. Zone preference
    if (!assigned && MEMBER_ZONE_PREF[fullName]) {
      const prefZone = MEMBER_ZONE_PREF[fullName];
      const candidates = floorCoachesForZone(prefZone);
      if (candidates.length > 0 && zoneFill[prefZone] < (cfg.zoneCap[prefZone] || 7)) {
        assigned = candidates[0];
      }
    }

    // 1. Programming coach if on floor AND their zone isn't over cap
    // Pairs ignore cap to stay with their programming coach
    if (!assigned && progCoach && pool[progCoach]) {
      const z = coachZoneFn(progCoach);
      const isPairMember = !!pairInfo;
      if (z && (isPairMember || zoneFill[z] < (cfg.zoneCap[z] || 7))) assigned = progCoach;
    }
    if (!assigned && female && !HAYLEY_PREF_EXCEPTIONS.has(fullName) && pool["Hayley"]) {
      const backCap = cfg.zoneCap["Back"] || 6;
      const backFill = zoneFill["Back"] || 0;
      const hayleyZone = coachZoneFn("Hayley");
      // Only apply Hayley preference when Hayley is actually in the Back zone
      if (hayleyZone === "Back" && backFill < backCap) {
        assigned = "Hayley";
      }
    }
    if (!assigned) {
      const targetZone = bestZone(progCoachZone);
      const isException = HAYLEY_PREF_EXCEPTIONS.has(fullName);
      if (targetZone) {
        const cands = floorCoachesForZone(targetZone).filter(c => !isException || c !== "Hayley");
        if (cands.length > 0) assigned = cands[0];
      }
      if (!assigned) {
        const all = Object.keys(pool).filter(c => !isException || c !== "Hayley").sort((a,b) => pool[a].items.length - pool[b].items.length);
        const finalAll = all.length > 0 ? all : Object.keys(pool).sort((a,b) => pool[a].items.length - pool[b].items.length);
        if (finalAll.length > 0) assigned = finalAll[0];
      }
    }
    if (assigned && pool[assigned]) {
      pool[assigned].items.push({ display, noMatch: !info, matchType: info?.matchType, fuzzyScore: info?.fuzzyScore, rawName: `${member.firstName} ${member.lastName}`, isCarlsen: member.isCarlsen || false });
      const z = coachZoneFn(assigned);
      if (z) zoneFill[z]++;
    }
  });

  // Return zone -> items[] map
  const result = {};
  ZONES.forEach(z => {
    result[z] = (fullLayout[z] || []).filter(c => !busy.has(c)).flatMap(c => pool[c]?.items || []);
  });
  return result;
}

function buildHourAssignment(dayName, hour, members, total, customLayout, mondayFallback, ignoreZoneCap, absentSet) {
  const cfg = DAY_CONFIG[dayName];
  const layout = customLayout ? JSON.parse(JSON.stringify(customLayout)) : JSON.parse(JSON.stringify(cfg.zoneLayout[hour] || {}));
  const cap = (z) => ignoreZoneCap ? 999 : (cfg.zoneCap[z] || 7);
  // Monday fallback: Chris E takes over foundations from Kostas
  const baseFounds = cfg.foundations?.[hour];
  // If the foundations coach is absent and has a replacement, transfer foundations to replacement
  const foundCoach = (() => {
    if (!baseFounds) return null;
    if (mondayFallback && dayName === "Monday") return "Chris E";
    // If original foundations coach is absent, find best available fallback
    const layoutToCheck = customLayout || cfg.zoneLayout?.[hour] || {};
    const allInLayout = ZONES.flatMap(z => layoutToCheck[z] || []);
    if (!allInLayout.includes(baseFounds)) {
      // Try foundationsFallback list in priority order
      const fallbacks = cfg.foundationsFallback || [];
      for (const fb of fallbacks) {
        if (allInLayout.includes(fb)) return fb;
      }
      // Last resort: first available coach
      return allInLayout[0] || null;
    }
    return baseFounds;
  })();
  const foundCoachAbsent = false; // resolved above — foundCoach is always someone in the layout
  const infernoCoach = cfg.inferno?.[hour];
  const bodiesCoach = cfg.bodiesInMotion?.[hour];

  // Determine busy coaches
  const busy = new Set();
  const hasFoundations = members.some(m => m.isFoundations);
  // Only mark foundations coach as busy if they're actually in the layout
  if (foundCoach && hasFoundations && !foundCoachAbsent) busy.add(foundCoach);
  if (infernoCoach) busy.add(infernoCoach);
  if (bodiesCoach) busy.add(bodiesCoach);
  // Mark break coaches as busy — they show on schedule but get no members
  const breakCoaches = cfg.breakAt || {};
  Object.entries(breakCoaches).forEach(([coach, hours]) => {
    if (hours.includes(hour)) busy.add(coach);
  });

  // Apply 9 rule for Thursday (skip if Nick is absent)
  if (dayName === "Thursday" && cfg.nineRule && !(absentSet?.has("Nick"))) {
    if (total >= 9) {
      Object.keys(layout).forEach(z => {
        layout[z] = layout[z].filter(c => c !== "Nick");
      });
      layout["Back"] = ["Nick"];
    }
  }

  // Apply 9 rule for Wednesday 4-5pm (skip absent coaches)
  if (dayName === "Wednesday" && hour >= 16 && hour <= 17 && total >= 9) {
    const nickAbsent = absentSet?.has("Nick");
    const rickyAbsent = absentSet?.has("Ricky");
    Object.keys(layout).forEach(z => {
      layout[z] = layout[z].filter(c =>
        (nickAbsent || c !== "Nick") && (rickyAbsent || c !== "Ricky")
      );
    });
    if (!rickyAbsent) layout["Turf-A"] = ["Ricky"];
    if (!nickAbsent) layout["Back"] = ["Nick"];
  }

  // Foundations zone override for Wednesday 5pm
  if (dayName === "Wednesday" && hour === 17 && cfg.foundationsZoneOverride?.[17]) {
    // handled in render — foundations happens in back if >=9
  }

  const semi = members.filter(m => !m.isFoundations && !m.isOpenGym && !m.isInferno && !m.isBodiesInMotion && !m.isNutritionSeminar);
  const foundations = members.filter(m => m.isFoundations);

  // If foundations coach is not Chris C and <=2 foundations members, move to Turf-B
  // Skip if foundationsZoneOverride explicitly handles this hour
  const foundCoachOnTurf = foundCoach && foundCoach !== "Chris C" && !cfg.foundationsZoneOverride?.[hour];
  if (foundCoachOnTurf && foundations.length > 0 && foundations.length <= 2) {
    // <=2 members: move to Turf-B
    ZONES.forEach(z => { layout[z] = (layout[z]||[]).filter(c => c !== foundCoach); });
    layout["Turf-B"] = [foundCoach];
  } else if (foundCoachOnTurf && foundations.length >= 3 && cfg.foundationsTurf?.[hour]) {
    // 3+ members on AM Turf foundations: move to Back
    ZONES.forEach(z => { layout[z] = (layout[z]||[]).filter(c => c !== foundCoach); });
    layout["Back"] = [foundCoach, ...(layout["Back"]||[])];
  }

  // Save full layout for pool building (so hidden extra coaches still take members)
  const fullLayout = {};
  ZONES.forEach(z => { fullLayout[z] = [...(layout[z] || [])]; });

  // Cap each zone to max 2 coaches for display only
  ZONES.forEach(z => {
    if ((layout[z] || []).length > 2) layout[z] = layout[z].slice(0, 2);
  });

  // Floor coaches per zone (not busy) — use full layout for assignment
  const zoneCoaches = {};
  ZONES.forEach(z => {
    zoneCoaches[z] = (fullLayout[z] || []).filter(c => !busy.has(c));
  });

  // Build assignment pools from full layout — coach -> { zone, items[] }
  // If open gym is happening, remove Back coaches from the pool
  const pool = {};
  ZONES.forEach(z => {
    if (z === "Back" && members.some(m => m.isOpenGym)) return;
    (fullLayout[z] || []).forEach(c => {
      if (!busy.has(c)) pool[c] = { zone: z, items: [] };
    });
  });

  // Zone fill tracking: how many members currently assigned to each zone
  const zoneFill = {};
  ZONES.forEach(z => { zoneFill[z] = 0; });

  // Get zone for a coach
  const coachZone = (c) => ZONES.find(z => (layout[z]||[]).includes(c)) || null;

  // Get floor coaches for a zone sorted by fewest members
  const floorCoachesForZone = (z) =>
    (zoneCoaches[z] || []).filter(c => pool[c]).sort((a,b) => pool[a].items.length - pool[b].items.length);

  // Pick the best zone to send the next member to, respecting soft caps
  // Returns the zone with the most room relative to its cap (ignoring empty/null zones)
  const hasOpenGym = members.some(m => m.isOpenGym);

  const bestZone = (preferZone = null, preferNotBack = false) => {
    const activeZones = ZONES.filter(z => {
      if (z === "Back" && hasOpenGym) return false; // Back reserved for open gym
      return (zoneCoaches[z]||[]).length > 0;
    });
    if (activeZones.length === 0) return null;

    // Sort by fill ratio (ascending) — most room first
    // If preferNotBack, penalize Back zone unless it's the only option
    const sorted = activeZones.slice().sort((a, b) => {
      const capA = cap(a);
      const capB = cap(b);
      const ratioA = (zoneFill[a] / capA) + (preferNotBack && a === "Back" ? 0.5 : 0);
      const ratioB = (zoneFill[b] / capB) + (preferNotBack && b === "Back" ? 0.5 : 0);
      return ratioA - ratioB;
    });

    // If preferred zone isn't over cap yet, use it
    if (preferZone && activeZones.includes(preferZone)) {
      if (zoneFill[preferZone] < cap(preferZone)) return preferZone;
    }

    return sorted[0];
  };

  // Sort: members with an on-shift programming coach go first, so they claim their coach before zone caps fill
  const sortedSemi = [...semi].sort((a, b) => {
    const infoA = lookupMember(a.firstName, a.lastName);
    const infoB = lookupMember(b.firstName, b.lastName);
    const aHasCoach = infoA?.coach && pool[infoA.coach] ? 0 : 1;
    const bHasCoach = infoB?.coach && pool[infoB.coach] ? 0 : 1;
    return aHasCoach - bHasCoach;
  });

  sortedSemi.forEach(member => {
    const info = lookupMember(member.firstName, member.lastName);
    const display = info ? info.display : `${member.firstName} ${member.lastName[0]||"?"}`;
    const progCoach = info?.coach;
    const female = isFemale(member.firstName);
    const progCoachZone = progCoach ? coachZone(progCoach) : null;

    let assigned = null;

    // 0. Pair preferred coach — takes priority over programming coach
    const fullName = `${member.firstName} ${member.lastName}`.toLowerCase();
    const pairInfo = PAIR_LOOKUP[fullName];
    if (pairInfo) {
      if (pairInfo.preferredCoach && pool[pairInfo.preferredCoach]) {
        const prefCoach = pairInfo.preferredCoach;
        const z = coachZone(prefCoach);
        if (z && zoneFill[z] < cap(z)) assigned = prefCoach;
      }
      // No preferred coach — find where pair partner was assigned and match zone
      if (!assigned) {
        const pair = PAIRS[pairInfo.pairIdx];
        const partnerName = pair.members.find(n => n.toLowerCase() !== fullName);
        if (partnerName) {
          const partnerCoach = Object.keys(pool).find(c =>
            pool[c].items.some(item => item.rawName?.toLowerCase() === partnerName.toLowerCase() ||
              item.display?.toLowerCase().startsWith(partnerName.split(" ")[0].toLowerCase()))
          );
          if (partnerCoach) {
            const z = coachZone(partnerCoach);
            if (z) assigned = partnerCoach; // pairs always stay together regardless of cap
          }
        }
      }
    }

    // 0b. Zone preference — route to preferred zone if available
    if (!assigned && MEMBER_ZONE_PREF[fullName]) {
      const prefZone = MEMBER_ZONE_PREF[fullName];
      const candidates = floorCoachesForZone(prefZone);
      if (candidates.length > 0 && zoneFill[prefZone] < cap(prefZone)) {
        assigned = candidates[0];
      }
    }

    // 1. Programming coach if on floor AND their zone isn't over cap
    // Pairs ignore cap to stay with their programming coach
    if (!assigned && progCoach && pool[progCoach]) {
      const z = coachZone(progCoach);
      if (z && (!!pairInfo || zoneFill[z] < cap(z))) {
        assigned = progCoach;
      }
    }

    // 2. Hayley preference for women — only when Hayley is in the Back zone
    if (!assigned && female && !HAYLEY_PREF_EXCEPTIONS.has(fullName) && pool["Hayley"]) {
      const backFill = zoneFill["Back"] || 0;
      const hayleyZone = coachZone("Hayley");
      // Only apply when Hayley is actually in the Back zone
      if (hayleyZone === "Back" && backFill < cap("Back")) {
        assigned = "Hayley";
      }
    }

    // 3. Zone-balanced fallback — non-female members avoid Back unless it's the only zone
    if (!assigned) {
      const isException = HAYLEY_PREF_EXCEPTIONS.has(fullName);
      const preferNotBack = !female || isException;
      const targetZone = bestZone(progCoachZone, preferNotBack);
      if (targetZone) {
        const candidates = floorCoachesForZone(targetZone).filter(c => !isException || c !== "Hayley");
        if (candidates.length > 0) assigned = candidates[0];
      }
      if (!assigned) {
        const all = Object.keys(pool)
          .filter(c => !isException || c !== "Hayley")
          .sort((a,b) => pool[a].items.length - pool[b].items.length);
        // If filtering removes all options, fall back to any coach
        const finalAll = all.length > 0 ? all : Object.keys(pool).sort((a,b) => pool[a].items.length - pool[b].items.length);
        if (finalAll.length > 0) assigned = finalAll[0];
      }
    }

    if (assigned && pool[assigned]) {
      pool[assigned].items.push({ display, noMatch: !info, matchType: info?.matchType, fuzzyScore: info?.fuzzyScore, rawName: `${member.firstName} ${member.lastName}`, isCarlsen: member.isCarlsen || false });
      const z = coachZone(assigned);
      if (z) zoneFill[z]++;
    }
  });

  // Build zone result
  const zoneResult = {};
  ZONES.forEach(z => {
    const coaches = layout[z] || [];
    const openGymVal = cfg.openGym?.[z];
    const openGym = openGymVal === true || (Array.isArray(openGymVal) && openGymVal.includes(hour));
    if (openGym) { zoneResult[z] = { openGym: true, coaches: [], items: [] }; return; }
    if (coaches.length === 0) { zoneResult[z] = null; return; }

    const coachSlots = coaches.map(c => {
      const isBusy = busy.has(c);
      const items = isBusy ? [] : (pool[c]?.items || []);
      // For foundations coach: attach foundations members
      let foundItems = [];
      if (isBusy && c === foundCoach) {
        const coachIsOnTurf = (layout["Turf-A"]||[]).includes(c);
        let foundZone;
        // Check for explicit zone override first
        const foundZoneOverride = cfg.foundationsZoneOverride?.[hour];
        if (foundZoneOverride) {
          foundZone = typeof foundZoneOverride === "function" ? foundZoneOverride(total) : foundZoneOverride;
        } else if (dayName === "Wednesday" && hour === 17 && total >= 9) {
          foundZone = "Back";
        } else if (coachIsOnTurf) {
          if (foundations.length <= 2) {
            foundZone = "Turf-B";
          } else if (cfg.foundationsTurf?.[hour]) {
            foundZone = "Back";
          } else {
            foundZone = "Turf-A";
          }
        } else if (cfg.foundationsTurf?.[hour]) {
          foundZone = foundations.length <= 2 ? "Turf-B" : "Back";
        } else {
          foundZone = ZONES.find(zz => (layout[zz]||[]).includes(c)) || z;
        }
        if (foundZone === z) {
          foundItems = foundations.map(m => ({
            display: `${m.firstName} ${m.lastName[0]||"?"}`,
            isFoundations: true,
            isCarlsen: m.isCarlsen || false,
            rawName: `${m.firstName} ${m.lastName}`
          }));
        }
      }

      if (isBusy && c === infernoCoach) {
        const infernoCount = members.filter(m => m.isInferno).length;
        foundItems = infernoCount > 0
          ? [{ display:`Inferno (${infernoCount})`, isFoundations:true, isClassCount:true }]
          : [{ display:"Inferno", isFoundations:true, isClassCount:true }];
      }
      if (isBusy && c === bodiesCoach) {
        const bodiesCount = members.filter(m => m.isBodiesInMotion).length;
        foundItems = bodiesCount > 0
          ? [{ display:`Bodies in Motion (${bodiesCount})`, isFoundations:true, isClassCount:true }]
          : [{ display:"Bodies in Motion", isFoundations:true, isClassCount:true }];
      }
      return { coach: c, busy: isBusy, items: [...items, ...foundItems] };
    });
    zoneResult[z] = { coaches: coachSlots };
  });

  // Add open gym members to the Back zone
  const openGymMembers = members.filter(m => m.isOpenGym);
  if (openGymMembers.length > 0) {
    const ogItems = openGymMembers.map(m => ({
      display: `${m.firstName} ${m.lastName[0]||"?"}`,
      isOpenGym: true,
    }));
    zoneResult["Back"] = { coaches: [{ coach: "Open Gym", busy: false, items: ogItems }], isOpenGymHour: true };
  }

  return { zoneResult, foundCoach, infernoCoach, bodiesCoach, busy, openGymMembers };
}

// ─── MAIN COMPONENT ───────────────────────────────────────────────────────────
export default function GymScheduler() {
  const [day, setDay] = useState("Monday");
  const [schedule, setSchedule] = useState(null);
  const [entries, setEntries] = useState(null);
  const [error, setError] = useState(null);
  // pendingShift: set after file drop for Mon-Fri to let user pick AM/PM
  const [pendingShift, setPendingShift] = useState(null); // { detectedDay, parsed, assessmentData }
  const [fileDate, setFileDate] = useState(null); // Date object from dropped file
  const [dragging, setDragging] = useState(false);
  const [blankStep, setBlankStep] = useState(null); // null | "day" | "shift"
  const [blankDay, setBlankDay] = useState(null);
  const [isBlankTemplate, setIsBlankTemplate] = useState(false);
  const membersRef = useRef(MEMBERS_FALLBACK);
  const [membersLoaded, setMembersLoaded] = useState(0);

  useEffect(() => {
    fetch("/api/members")
      .then(r => r.ok ? r.json() : null)
      .then(data => {
        if (data && Array.isArray(data) && data.length > 0) {
          membersRef.current = data;
          rebuildLookup(data);
          // If a schedule is already showing, rebuild it with the fresh member data
          setMembersLoaded(prev => prev + 1);
        }
      })
      .catch(() => {});
  }, []);
  const [calendarData, setCalendarData] = useState({});
  const calendarDataRef = useRef({});

  useEffect(() => {
    fetch("/api/assessments")
      .then(r => r.ok ? r.json() : {})
      .then(data => { setCalendarData(data); calendarDataRef.current = data; })
      .catch(() => {});
  }, []);
  const [light, setLight] = useState(true);
  // overrides[hour][zone] = members[] — tracks manual drag changes
  const [overrides, setOverrides] = useState({});
  // coachOverrides[hour][zone] = coach[] — tracks manually dragged coach positions
  const [coachOverrides, setCoachOverrides] = useState({});
  // assessments[hour] = 0 | 1 | 2 (number of assessments this hour)
  const [assessments, setAssessments] = useState({});
  // assessmentNames[hour][0|1] = name string
  const [assessmentNames, setAssessmentNames] = useState({});
  // carlsenNames[hour][idx] = typed name for a Carlsen placeholder
  const [carlsenNames, setCarlsenNames] = useState({});
  // carlsenResolved[cKey] = { display, coach, info } — resolved member once selected from suggestions
  const [carlsenResolved, setCarlsenResolved] = useState({});
  // carlsenSuggOpen[cKey] = bool — whether suggestion dropdown is open
  const [carlsenSuggOpen, setCarlsenSuggOpen] = useState({});
  // oneOnOnes[hour] = bool — whether a 1-on-1 is scheduled
  // oneOnOnes[hour] = [ { coach, member, coachLocked, memberLocked }, ... ] — up to 2 per hour
  const [oneOnOnes, setOneOnOnes] = useState({});
  // waitlist[hour] = [ { query, resolved, suggs, suggOpen }, ... ]
  const [waitlist, setWaitlist] = useState({});
  // freeTypeMembers[hour][zone] = [ { name, locked } ] — manually typed members not in DB
  const [freeTypeMembers, setFreeTypeMembers] = useState({});
  // classLabelZone[hour][coach] = zone — overrides which zone shows the Bodies/Inferno label
  const [classLabelZone, setClassLabelZone] = useState({});
  // absentCoaches = Set of coach names removed from today's shift
  const [absentCoaches, setAbsentCoaches] = useState(new Set());
  // replacementCoaches = { removedCoach: replacementCoach } map
  const [replacementCoaches, setReplacementCoaches] = useState({});
  // showAddCoach = whether the + coach dropdown is open
  const [showAddCoach, setShowAddCoach] = useState(false);
  // drag tracking
  const dragRef = useState({ item: null, fromHour: null, fromZone: null })[0];

  // Rebuild schedule from current entries with absent/replacement coach overrides
  const rebuildScheduleWithCoaches = useCallback((currentEntries, currentDay, absent, replacements) => {
    if (!currentEntries || !currentDay) return;
    const cfg = DAY_CONFIG[currentDay];
    if (!cfg) return;

    // Apply Monday-specific fallback when a non-Kostas coach is removed with no replacement
    const mondayFallback = currentDay === "Monday" && absent.size > 0
      && Object.keys(replacements).filter(c => absent.has(c)).length === 0;

    const result = {};
    cfg.hours.forEach(h => {
      const hourMembers = currentEntries.filter(e => e.hour === h);
      const total = hourMembers.length;

      // Build a modified layout for this hour removing absent coaches
      const baseLayout = JSON.parse(JSON.stringify(cfg.zoneLayout[h] || {}));
      ZONES.forEach(z => {
        const toAdd = [];
        baseLayout[z] = (baseLayout[z] || []).filter(c => {
          if (absent.has(c)) {
            const rep = replacements[c];
            if (rep && !(baseLayout[z] || []).includes(rep) && !toAdd.includes(rep)) toAdd.push(rep);
            return false;
          }
          return true;
        });
        toAdd.forEach(r => { if (!baseLayout[z].includes(r)) baseLayout[z].push(r); });
      });

      // If foundations coach is absent with no replacement, move best available coach into their zone
      const foundHour = cfg.foundations?.[h];
      if (foundHour && absent.has(foundHour) && !replacements[foundHour]) {
        const origFoundZone = ZONES.find(z => (cfg.zoneLayout[h]?.[z]||[]).includes(foundHour));
        if (origFoundZone) {
          const allAvailable = ZONES.flatMap(z => baseLayout[z] || []).filter(c => c && !absent.has(c));
          // Use foundationsFallback priority order, then any available coach
          const fallbacks = cfg.foundationsFallback || [];
          const subCoach = fallbacks.find(fb => allAvailable.includes(fb) && !(baseLayout[origFoundZone]||[]).includes(fb))
            || allAvailable.find(c => !(baseLayout[origFoundZone]||[]).includes(c));
          if (subCoach) {
            ZONES.forEach(z => { baseLayout[z] = (baseLayout[z]||[]).filter(c => c !== subCoach); });
            baseLayout[origFoundZone] = [subCoach, ...(baseLayout[origFoundZone]||[])];
          }
        }
      }

      // Monday fallback: a coach is removed with no replacement
      // → Chris E covers Turf/foundations, Kostas on Rack (if not absent)
      if (mondayFallback) {
        ZONES.forEach(z => {
          baseLayout[z] = baseLayout[z].filter(c => c !== "Chris E");
          if (!absent.has("Kostas")) baseLayout[z] = baseLayout[z].filter(c => c !== "Kostas");
        });
        // Kostas on Rack only if not absent
        if (!absent.has("Kostas") && !baseLayout["Rack"].includes("Kostas")) {
          baseLayout["Rack"].unshift("Kostas");
        }
        // Chris E on Turf-A from 5pm onwards
        if (h >= 17 && cfg.coaches["Chris E"]) {
          baseLayout["Turf-A"] = ["Chris E"];
        }
      }

      result[h] = { ...buildHourAssignment(currentDay, h, hourMembers, total, baseLayout, mondayFallback, true, absent), total };
    });
    setSchedule(result);
    setOverrides({});
    setCoachOverrides({});
  }, [day]);

  const buildAndApplyShift = useCallback((detectedDay, parsed, shift, dateObj) => {
    const activeDay = shift === "AM" ? detectedDay + "AM" : detectedDay;
    if (!DAY_CONFIG[activeDay]) return;
    setDay(activeDay);
    if (dateObj) setFileDate(dateObj);
    setEntries(parsed);
    setOverrides({});
    setCoachOverrides({});
    setAssessments({});
    setCarlsenNames({});
    setCarlsenResolved({});
    setCarlsenSuggOpen({});
    setOneOnOnes({});
    setWaitlist({});
    setFreeTypeMembers({});
    setAbsentCoaches(new Set());
    setReplacementCoaches({});
    setShowAddCoach(false);
    setAssessmentNames({});
    setPendingShift(null);
    setIsBlankTemplate(false);
    setIsBlankTemplate(false);
    const cfg = DAY_CONFIG[activeDay];
    const result = {};
    cfg.hours.forEach(h => {
      const hourMembers = parsed.filter(e => e.hour === h);
      const total = hourMembers.length;
      result[h] = { ...buildHourAssignment(activeDay, h, hourMembers, total), total };
    });
    setSchedule(result);
    // Inject calendar assessments for this file's date
    if (dateObj) {
      const dateStr = dateObj.toISOString().split("T")[0];
      if (calendarDataRef.current[dateStr]) {
        const asmts = calendarDataRef.current[dateStr];
        const newAssessments = {};
        const newAssessmentNames = {};
        asmts.forEach(a => {
          const count = a.members ? a.members.length : 1;
          newAssessments[a.hour] = Math.min(count, 2);
          newAssessmentNames[a.hour] = {};
          if (a.members) {
            a.members.forEach((name, idx) => {
              if (name) { newAssessmentNames[a.hour][idx] = name; newAssessmentNames[a.hour][`locked-asmt-${a.hour}-${idx}`] = true; }
            });
          } else if (a.member) {
            newAssessmentNames[a.hour][0] = a.member;
            newAssessmentNames[a.hour][`locked-asmt-${a.hour}-0`] = true;
          }
        });
        setAssessments(newAssessments);
        setAssessmentNames(newAssessmentNames);
      }
    }
  }, []);

  // Rebuild schedule when fresh member data arrives
  useEffect(() => {
    if (membersLoaded === 0 || !day || !entries) return;
    const cfg = DAY_CONFIG[day];
    if (!cfg) return;
    const result = {};
    cfg.hours.forEach(h => {
      const hourMembers = entries.filter(e => e.hour === h);
      result[h] = { ...buildHourAssignment(day, h, hourMembers, hourMembers.length), total: hourMembers.length };
    });
    setSchedule(result);
    setOverrides({});
    setCoachOverrides({});
  }, [membersLoaded]);

  const processFile = useCallback(async (file) => {
    setError(null);
    try {
      const buf = await file.arrayBuffer();
      let XLSX = window.XLSX;
      if (!XLSX) {
        await new Promise((res, rej) => {
          const s = document.createElement("script");
          s.src = "https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js";
          s.onload = res; s.onerror = rej; document.head.appendChild(s);
        });
        XLSX = window.XLSX;
      }
      const wb = XLSX.read(buf, { type:"array", cellDates:false });
      const ws = wb.Sheets[wb.SheetNames[0]];
      const rows = XLSX.utils.sheet_to_json(ws, { header:1, defval:"", raw:false });
      let headerIdx = rows.findIndex(r => String(r[0]).toLowerCase().includes("date") || String(r[1]).toLowerCase().includes("start"));
      if (headerIdx === -1) headerIdx = 0;

      const parseHour = raw => {
        const s = String(raw||"").trim();
        const ampm = s.match(/^(\d{1,2}):(\d{2})\s*(AM|PM)$/i);
        if (ampm) { let h=parseInt(ampm[1]); if(ampm[3].toUpperCase()==="PM"&&h!==12) h+=12; if(ampm[3].toUpperCase()==="AM"&&h===12) h=0; return h; }
        const h24 = s.match(/^(\d{1,2}):/); if (h24) return parseInt(h24[1]);
        const frac = parseFloat(s); if (!isNaN(frac)&&frac>0&&frac<1) return Math.round(frac*24);
        return null;
      };

      const parsed = [];
      for (let i = headerIdx+1; i < rows.length; i++) {
        const row = rows[i];
        const clientRaw = String(row[6]||"").trim();
        const desc = String(row[3]||"");
        if (!clientRaw || clientRaw==="undefined") continue;
        const hour = parseHour(row[1]);
        if (hour===null) continue;
        let firstName="", lastName="";
        if (clientRaw.includes(",")) { const [l,f]=clientRaw.split(",",2); lastName=l.trim(); firstName=f.trim().split(/\s+/)[0]; }
        else { const p=clientRaw.trim().split(/\s+/); firstName=p[0]; lastName=p.slice(1).join(" "); }
        const isFoundations = desc.toLowerCase().includes("foundation");
        const isOpenGym = desc.toLowerCase().includes("open gym");
        const isInferno = desc.toLowerCase().includes("inferno");
        const isBodiesInMotion = desc.toLowerCase().includes("bodies in motion");
        const isNutritionSeminar = desc.toLowerCase().includes("nutrition");
        const isCarlsen = firstName.toLowerCase() === "christopher" && lastName.toLowerCase() === "carlsen";
        if (firstName) parsed.push({ hour, firstName, lastName, isFoundations, isOpenGym, isInferno, isBodiesInMotion, isNutritionSeminar, isCarlsen });
      }
      if (parsed.length===0) { setError("No sign-ups found. Use the 'Schedule at a Glance' report."); return; }
      // Auto-detect day of week from the file's date column
      let detectedDay = null;
      let dateObj = null;
      const firstRow = rows.slice(headerIdx + 1).find(r => String(r[0]||"").trim());
      if (firstRow) {
        const rawDate = String(firstRow[0]||"").trim();
        // "3/23/2026" or "3/23/26" or ISO "2026-03-23"
        const mdyMatch = rawDate.match(/^(\d{1,2})\/(\d{1,2})\/(\d{2,4})$/);
        if (mdyMatch) {
          let yr = parseInt(mdyMatch[3]);
          if (yr < 100) yr += 2000;
          dateObj = new Date(yr, parseInt(mdyMatch[1])-1, parseInt(mdyMatch[2]), 12, 0, 0);
        }
        if (!dateObj) {
          const isoMatch = rawDate.match(/^(\d{4})-(\d{2})-(\d{2})/);
          if (isoMatch) dateObj = new Date(parseInt(isoMatch[1]), parseInt(isoMatch[2])-1, parseInt(isoMatch[3]), 12, 0, 0);
        }
        if (!dateObj) {
          const frac = parseFloat(rawDate);
          if (!isNaN(frac) && frac > 40000) dateObj = new Date(Date.UTC(1899, 11, 30) + frac * 86400000);
        }
        if (dateObj && !isNaN(dateObj)) {
          const dayNames = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
          detectedDay = dayNames[dateObj.getDay()];
          setFileDate(dateObj);
        }
        if (detectedDay && DAY_CONFIG[detectedDay]) setDay(detectedDay);
      }

      // For Mon-Fri, prompt AM/PM toggle before building schedule
      const needsToggle = detectedDay && ["Monday","Tuesday","Wednesday","Thursday","Friday"].includes(detectedDay);
      if (needsToggle) {
        setPendingShift({ detectedDay, parsed, dateObj });
        return;
      }

      setEntries(parsed);
      setOverrides({});
      setCoachOverrides({});
      setAssessments({});
      setCarlsenNames({});
      setCarlsenResolved({});
      setCarlsenSuggOpen({});
      setOneOnOnes({});
      setWaitlist({});
      setFreeTypeMembers({});
      setClassLabelZone({});
      setAbsentCoaches(new Set());
      setReplacementCoaches({});
      setShowAddCoach(false);
      setAssessmentNames({});
      if (!detectedDay) setFileDate(null);

      // Build schedule using detected day (not stale state)
      const activeDay = detectedDay && DAY_CONFIG[detectedDay] ? detectedDay : day;
      const cfg = DAY_CONFIG[activeDay];
      const result = {};
      cfg.hours.forEach(h => {
        const hourMembers = parsed.filter(e => e.hour===h);
        const total = hourMembers.length;
        result[h] = { ...buildHourAssignment(activeDay, h, hourMembers, total), total };
      });
      setSchedule(result);

      // Auto-apply calendar assessments for this date
      const dateStr = dateObj ? dateObj.toISOString().split("T")[0] : null;
      if (dateStr && calendarDataRef.current[dateStr]) {
        const asmts = calendarDataRef.current[dateStr];
        const newAssessments = {};
        const newAssessmentNames = {};
        asmts.forEach(a => {
          const count = a.members ? a.members.length : 1;
          newAssessments[a.hour] = Math.min(count, 2);
          newAssessmentNames[a.hour] = {};
          if (a.members) {
            a.members.forEach((name, idx) => {
              newAssessmentNames[a.hour][idx] = name;
              newAssessmentNames[a.hour][`locked-asmt-${a.hour}-${idx}`] = !!name;
            });
          } else if (a.member) {
            newAssessmentNames[a.hour][0] = a.member;
            newAssessmentNames[a.hour][`locked-asmt-${a.hour}-0`] = !!a.member;
          }
        });
        setAssessments(newAssessments);
        setAssessmentNames(newAssessmentNames);
      }
    } catch(e) { setError("Parse error: "+e.message); }
  }, [day]);

  const onDrop = useCallback(e => { e.preventDefault(); setDragging(false); const f=e.dataTransfer.files[0]; if(f) processFile(f); }, [processFile]);
  const onFileChange = useCallback(e => { const f=e.target.files[0]; if(f) processFile(f); }, [processFile]);

  const cfg = DAY_CONFIG[day];

  // ─── THEME ─────────────────────────────────────────────────────────────────
  const t = light ? {
    page:"#f8f7f4", header:"#fff", headerBorder:"#e5e3de", text:"#1a1a1a",
    muted:"#888", dim:"#aaa", surface:"#fff", border:"#e0ded9",
    zoneBg:"#f3f2ee", zoneHeader:"#e8e6e1", printBg:"#fff",
    chip:"#f0efeb", chipText:"#333", chipBorder:"#ddd",
    foundChip:"#dcfce7", foundText:"#166534", foundBorder:"#86efac",
    fuzzyChip:"#ede8f8", fuzzyText:"#5b21b6", fuzzyBorder:"#c4b5fd",
    noMatchChip:"#fef3c7", noMatchText:"#92400e", noMatchBorder:"#fcd34d",
    openGym:"#f9fafb", openGymText:"#9ca3af",
    busyBg:"#f9fafb", busyText:"#bbb",
  } : {
    page:"#0f0f0f", header:"#141414", headerBorder:"#1e1e1e", text:"#e5e5e5",
    muted:"#555", dim:"#444", surface:"#1a1a1a", border:"#2a2a2a",
    zoneBg:"#161616", zoneHeader:"#1e1e1e", printBg:"#fff",
    chip:"#222", chipText:"#ccc", chipBorder:"#333",
    foundChip:"#1e2a1e", foundText:"#4ade80", foundBorder:"#166534",
    fuzzyChip:"#1e1e2a", fuzzyText:"#a78bfa", fuzzyBorder:"#4c1d95",
    noMatchChip:"#2a1f1a", noMatchText:"#fb923c", noMatchBorder:"#92400e",
    openGym:"#111", openGymText:"#444",
    busyBg:"#111", busyText:"#333",
  };

  return (
    <div style={{ fontFamily:"'Inter',system-ui,sans-serif", background:t.page, minHeight:"100vh", color:t.text, transition:"background 0.2s" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        * { box-sizing:border-box; margin:0; padding:0; }

        @media print {
          .no-print { display:none !important; }
          tr.no-print { display:none !important; }
          td.no-print { display:none !important; }
          body { background:white !important; margin:0 !important; }
          .print-sheet { background:white !important; color:black !important; }
          .hour-col { break-inside:avoid; }
          .zone-row td { border-top: 2px solid #000 !important; border-bottom: 2px solid #000 !important; }
          table { border-collapse: collapse; width:100% !important; }
          /* Print layout */
          @page { margin: 0.5in; size: landscape; }
          .print-sheet { display: block; height: calc(100vh - 1in) !important; }
          .print-sheet table { width: 100% !important; height: calc(100vh - 1.8in) !important; border-collapse: collapse !important; }
          .print-sheet tbody { height: 100% !important; display: table-row-group !important; }

          /* Zone-specific print heights */
          .zone-row td:first-child { vertical-align: middle !important; }
          .zone-row td:not(:first-child) { vertical-align: top !important; }
          /* Prevent coach name bar from wrapping and causing uneven row heights */
          .zone-row td .coach-name { font-size: 14px !important; }
          .zone-row td div[style*="zoneHeader"] { flex-wrap: nowrap !important; overflow: hidden !important; }
          /* Collapse Turf-B row on print when it has no content — use height:0 not display:none to preserve rowspan */
          .no-turf-b .zone-row-Turf-B { height: 0 !important; overflow: hidden !important; border: none !important; }
          .no-turf-b .zone-row-Turf-B td { height: 0 !important; padding: 0 !important; border: none !important; overflow: hidden !important; font-size: 0 !important; }

          /* With Turf-B visible: Rack > Back > Turf-A > Turf-B */
          .has-turf-b .zone-row-Rack  { height: 37% !important; }
          .has-turf-b .zone-row-Back  { height: 33% !important; }
          .has-turf-b .zone-row-Turf-A { height: 22% !important; }
          .has-turf-b .zone-row-Turf-B { height: 8% !important; }

          /* Without Turf-B: Rack > Back > Turf-A, fill the page */
          .no-turf-b .zone-row-Rack  { height: 42% !important; }
          .no-turf-b .zone-row-Back  { height: 35% !important; }
          .no-turf-b .zone-row-Turf-A { height: 23% !important; }

          /* Assessment variants — with Turf-B */
          .has-turf-b.has-one-asmt .zone-row-Rack  { height: 20vh !important; }
          .has-turf-b.has-one-asmt .zone-row-Back  { height: 18vh !important; }
          .has-turf-b.has-one-asmt .zone-row-Turf-A { height: 14vh !important; }
          .has-turf-b.has-one-asmt .zone-row-Turf-B { height: 8vh !important; }
          .has-turf-b.has-two-asmt .zone-row-Rack  { height: 19vh !important; }
          .has-turf-b.has-two-asmt .zone-row-Back  { height: 17vh !important; }
          .has-turf-b.has-two-asmt .zone-row-Turf-A { height: 13vh !important; }
          .has-turf-b.has-two-asmt .zone-row-Turf-B { height: 7vh !important; }

          /* Assessment variants — without Turf-B */
          .no-turf-b.has-one-asmt .zone-row-Rack  { height: 25vh !important; }
          .no-turf-b.has-one-asmt .zone-row-Back  { height: 23vh !important; }
          .no-turf-b.has-one-asmt .zone-row-Turf-A { height: 17vh !important; }
          .no-turf-b.has-two-asmt .zone-row-Rack  { height: 23vh !important; }
          .no-turf-b.has-two-asmt .zone-row-Back  { height: 21vh !important; }
          .no-turf-b.has-two-asmt .zone-row-Turf-A { height: 15vh !important; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <div className="no-print" style={{ background:t.header, borderBottom:`1px solid ${t.headerBorder}`, padding:"14px 24px", display:"flex", alignItems:"center", justifyContent:"space-between" }}>
        <div>
          <span style={{ fontWeight:700, fontSize:16, letterSpacing:"-0.02em" }}>Iron Lion</span>
          <span style={{ marginLeft:10, fontSize:11, color:t.muted, textTransform:"uppercase", letterSpacing:"0.1em" }}>Daily Sign-In Sheet</span>
        </div>
        <div style={{ display:"flex", gap:8, alignItems:"center" }}>
          <button onClick={() => setLight(l=>!l)} style={{ border:`1px solid ${t.border}`, background:t.surface, color:t.muted, padding:"4px 12px", cursor:"pointer", fontFamily:"inherit", fontSize:11, borderRadius:3 }}>
            {light ? "☾ Dark" : "☀ Light"}
          </button>
          {schedule && <button onClick={() => window.print()} style={{ border:"none", background:"#1a1a1a", color:"#fff", padding:"5px 14px", cursor:"pointer", fontFamily:"inherit", fontSize:11, borderRadius:3, fontWeight:500 }}>⎙ Print</button>}
          {schedule && <button onClick={() => { setSchedule(null); setEntries(null); }} style={{ border:`1px solid ${t.border}`, background:t.surface, color:t.muted, padding:"4px 12px", cursor:"pointer", fontFamily:"inherit", fontSize:11, borderRadius:3 }}>↩ New file</button>}
        </div>
      </div>

      {/* ── AM/PM SHIFT TOGGLE ── */}
      {pendingShift && (
        <div className="no-print" style={{ padding:"20px 24px" }}>
          <div style={{ border:`1.5px solid ${t.border}`, borderRadius:6, padding:"28px 24px", textAlign:"center", background:t.surface }}>
            <div style={{ fontSize:15, fontWeight:700, marginBottom:4 }}>{pendingShift.detectedDay}</div>
            <div style={{ fontSize:12, color:t.muted, marginBottom:20 }}>Which shift is this?</div>
            <div style={{ display:"flex", gap:12, justifyContent:"center" }}>
              <button
                onClick={() => buildAndApplyShift(pendingShift.detectedDay, pendingShift.parsed, "AM", pendingShift.dateObj)}
                style={{ fontSize:14, fontWeight:700, padding:"10px 32px", border:`1px solid ${t.border}`, borderRadius:4, background:t.surface, color:t.text, cursor:"pointer", fontFamily:"inherit" }}>
                AM
              </button>
              <button
                onClick={() => buildAndApplyShift(pendingShift.detectedDay, pendingShift.parsed, "PM", pendingShift.dateObj)}
                style={{ fontSize:14, fontWeight:700, padding:"10px 32px", border:`1px solid ${t.border}`, borderRadius:4, background:t.surface, color:t.text, cursor:"pointer", fontFamily:"inherit" }}>
                PM
              </button>
            </div>
            <div style={{ marginTop:16, fontSize:10, color:t.dim, cursor:"pointer" }}
              onClick={() => setPendingShift(null)}>↩ cancel</div>
          </div>
        </div>
      )}

      {/* ── DAY SELECTOR + UPLOAD (screen only) ── */}
      {!schedule && !pendingShift && !blankStep && (
        <div className="no-print" style={{ padding:"20px 24px" }}>
          <div
            onClick={() => document.getElementById("mb-file").click()}
            onDragOver={e=>{e.preventDefault();setDragging(true);}} onDragLeave={()=>setDragging(false)} onDrop={onDrop}
            style={{ border:`1.5px dashed ${dragging?"#888":t.border}`, borderRadius:6, padding:"36px 24px", textAlign:"center", cursor:"pointer", background: dragging?t.surface:"transparent", transition:"all 0.2s" }}>
            <input id="mb-file" type="file" accept=".xlsx,.csv,.xls" style={{ display:"none" }} onChange={onFileChange} />
            <div style={{ fontSize:13, color:t.muted, marginBottom:4 }}>Drop Mindbody <strong>Schedule at a Glance</strong> export here</div>
            <div style={{ fontSize:11, color:t.dim }}>XLSX · CSV · XLS</div>
          </div>
          {error && <div style={{ marginTop:12, color:"#dc2626", fontSize:12, padding:"8px 12px", background:"#fef2f2", borderRadius:4 }}>{error}</div>}
          <div style={{ marginTop:16, textAlign:"center", display:"flex", gap:10, justifyContent:"center" }}>
            <a href="https://clients.mindbodyonline.com/app/business/Report/Staff/ScheduleAtAGlance?reportID=undefined"
              target="_blank" rel="noopener noreferrer"
              style={{ fontSize:12, fontWeight:600, padding:"8px 20px", border:`1px solid ${t.border}`, borderRadius:4, background:t.surface, color:t.muted, cursor:"pointer", fontFamily:"inherit", textDecoration:"none", display:"inline-flex", alignItems:"center" }}>
              Open Mindbody Report
            </a>
            <button onClick={() => setBlankStep("day")}
              style={{ fontSize:12, fontWeight:600, padding:"8px 20px", border:`1px solid ${t.border}`, borderRadius:4, background:t.surface, color:t.muted, cursor:"pointer", fontFamily:"inherit" }}>
              Print Blank Template
            </button>
          </div>
        </div>
      )}

      {/* ── BLANK TEMPLATE: DAY PICKER ── */}
      {!schedule && !pendingShift && blankStep === "day" && (
        <div className="no-print" style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"60px 24px", gap:16 }}>
          <div style={{ fontSize:13, fontWeight:600, color:t.muted, letterSpacing:"0.05em", textTransform:"uppercase", marginBottom:4 }}>Select Day</div>
          <div style={{ display:"flex", gap:10, flexWrap:"wrap", justifyContent:"center" }}>
            {["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"].map(d => (
              <button key={d} onClick={() => { setBlankDay(d); setBlankStep("shift"); }}
                style={{ fontSize:13, fontWeight:600, padding:"10px 20px", border:`1px solid ${t.border}`, borderRadius:4, background:t.surface, color:t.text, cursor:"pointer", fontFamily:"inherit" }}>
                {d}
              </button>
            ))}
          </div>
          <div style={{ marginTop:8, fontSize:10, color:t.dim, cursor:"pointer" }} onClick={() => setBlankStep(null)}>↩ cancel</div>
        </div>
      )}

      {/* ── BLANK TEMPLATE: SHIFT PICKER ── */}
      {!schedule && !pendingShift && blankStep === "shift" && blankDay && (
        <div className="no-print" style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", padding:"60px 24px", gap:16 }}>
          <div style={{ fontSize:13, fontWeight:600, color:t.muted, letterSpacing:"0.05em", textTransform:"uppercase", marginBottom:4 }}>{blankDay} — AM or PM?</div>
          {(() => {
            const hasAM = !!DAY_CONFIG[blankDay + "AM"];
            const hasPM = !!DAY_CONFIG[blankDay];
            const applyBlank = (shift) => {
              const activeDay = shift === "AM" ? blankDay + "AM" : blankDay;
              const cfg = DAY_CONFIG[activeDay];
              if (!cfg) return;
              // Build today's date adjusted to the correct day of week
              const today = new Date();
              const todayDow = today.getDay(); // 0=Sun
              const targetDow = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"].indexOf(blankDay);
              const diff = targetDow - todayDow;
              const targetDate = new Date(today);
              targetDate.setDate(today.getDate() + diff);
              setFileDate(targetDate);
              setDay(activeDay);
              setEntries([]);
              setOverrides({});
              setCoachOverrides({});
              setAssessments({});
              setAssessmentNames({});
              setCarlsenNames({});
              setCarlsenResolved({});
              setCarlsenSuggOpen({});
              setOneOnOnes({});
              setWaitlist({});
              setFreeTypeMembers({});
              setClassLabelZone({});
              setAbsentCoaches(new Set());
              setReplacementCoaches({});
              setShowAddCoach(false);
              setPendingShift(null);
              setIsBlankTemplate(true);
              // Build blank schedule — no members
              const result = {};
              cfg.hours.forEach(h => {
                result[h] = { ...buildHourAssignment(activeDay, h, [], 0), total: 0 };
              });
              setSchedule(result);
              setBlankStep(null);
              setBlankDay(null);
              setTimeout(() => window.print(), 300);
            };
            return (
              <div style={{ display:"flex", gap:12 }}>
                {hasAM && (
                  <button onClick={() => applyBlank("AM")}
                    style={{ fontSize:14, fontWeight:700, padding:"10px 32px", border:`1px solid ${t.border}`, borderRadius:4, background:t.surface, color:t.text, cursor:"pointer", fontFamily:"inherit" }}>
                    AM
                  </button>
                )}
                {hasPM && (
                  <button onClick={() => applyBlank("PM")}
                    style={{ fontSize:14, fontWeight:700, padding:"10px 32px", border:`1px solid ${t.border}`, borderRadius:4, background:t.surface, color:t.text, cursor:"pointer", fontFamily:"inherit" }}>
                    PM
                  </button>
                )}
                {!hasAM && !hasPM && (
                  <button onClick={() => applyBlank("PM")}
                    style={{ fontSize:14, fontWeight:700, padding:"10px 32px", border:`1px solid ${t.border}`, borderRadius:4, background:t.surface, color:t.text, cursor:"pointer", fontFamily:"inherit" }}>
                    Print
                  </button>
                )}
              </div>
            );
          })()}
          <div style={{ marginTop:8, fontSize:10, color:t.dim, cursor:"pointer" }} onClick={() => setBlankStep("day")}>↩ back</div>
        </div>
      )}

      {/* ── PRINT SHEET ── */}
      {schedule && (
        <div id="print-sheet" className={`print-sheet${isBlankTemplate ? " blank-template" : ""}`} style={{ padding:"16px 20px" }}>
          {/* Sheet header */}
          <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-end", marginBottom:12, paddingBottom:8, borderBottom:`2px solid ${t.text}` }}>
            <div>
              <div style={{ fontWeight:700, fontSize:18, letterSpacing:"-0.02em" }}>IRON LION</div>
              <div style={{ fontSize:11, color:t.muted, letterSpacing:"0.08em", textTransform:"uppercase" }}>Semi-Private Sign-In · {day.replace("AM"," AM").replace("MondayAM","Monday AM").replace("TuesdayAM","Tuesday AM").replace("WednesdayAM","Wednesday AM").replace("ThursdayAM","Thursday AM").replace("FridayAM","Friday AM")}</div>
            </div>
            <div style={{ fontSize:11, color:t.muted }}>
              {(fileDate || new Date()).toLocaleDateString("en-US", { weekday:"long", month:"long", day:"numeric", year:"numeric" })}
            </div>
          </div>

          {/* Coach hours bar — click to remove, + to add */}
          {!isBlankTemplate && <div style={{ display:"flex", flexWrap:"wrap", gap:8, marginBottom:12, alignItems:"center" }}>
            {Object.entries(cfg.coaches).map(([name, c]) => {
              const isAbsent = absentCoaches.has(name);
              const replacement = replacementCoaches[name];
              return (
                <div key={name} style={{ display:"flex", alignItems:"center", gap:4 }}>
                  <div
                    onClick={() => {
                      const next = new Set(absentCoaches);
                      if (isAbsent) {
                        next.delete(name);
                        const nextRep = { ...replacementCoaches };
                        delete nextRep[name];
                        setReplacementCoaches(nextRep);
                        setAbsentCoaches(next);
                        rebuildScheduleWithCoaches(entries, day, next, nextRep);
                      } else {
                        next.add(name);
                        setAbsentCoaches(next);
                        rebuildScheduleWithCoaches(entries, day, next, replacementCoaches);
                      }
                    }}
                    style={{ display:"flex", alignItems:"center", gap:6, background: isAbsent ? t.zoneBg : t.surface, border:`1px solid ${isAbsent ? "#ef4444" : t.border}`, borderRadius:3, padding:"4px 10px", cursor:"pointer", opacity: isAbsent ? 0.5 : 1, transition:"all 0.15s", userSelect:"none" }}>
                    <div style={{ width:7, height:7, borderRadius:"50%", background: isAbsent ? "#ef4444" : (COACH_COLORS[name]||"#888"), flexShrink:0 }} />
                    <span style={{ fontSize:12, fontWeight:600, color: isAbsent ? "#ef4444" : (COACH_COLORS[name]||t.text), textDecoration: isAbsent ? "line-through" : "none" }}>{name}</span>
                    {!isAbsent && <span style={{ fontSize:11, color:t.muted }}>{fmt(c.start)}–{fmt(c.end)}</span>}
                  </div>
                  {/* Replacement picker */}
                  {isAbsent && (
                    <div style={{ display:"flex", alignItems:"center", gap:4 }}>
                      {replacement ? (
                        // Show styled chip matching other coaches, click to change
                        <div style={{ display:"flex", alignItems:"center", gap:6, background:t.surface, border:`1px solid ${COACH_COLORS[replacement]||t.border}`, borderRadius:3, padding:"4px 10px", cursor:"pointer", userSelect:"none" }}
                          onClick={() => {
                            const nextRep = { ...replacementCoaches };
                            delete nextRep[name];
                            setReplacementCoaches(nextRep);
                            rebuildScheduleWithCoaches(entries, day, absentCoaches, nextRep);
                          }}>
                          <div style={{ width:7, height:7, borderRadius:"50%", background:COACH_COLORS[replacement]||"#888", flexShrink:0 }} />
                          <span style={{ fontSize:12, fontWeight:600, color:COACH_COLORS[replacement]||t.text }}>{replacement}</span>
                          <span style={{ fontSize:11, color:t.muted }}>{fmt(c.start)}–{fmt(c.end)}</span>
                        </div>
                      ) : (
                        // Show dropdown to pick sub
                        <div style={{ position:"relative", display:"inline-block" }}>
                          <select
                            value=""
                            onChange={e => {
                              const rep = e.target.value;
                              if (!rep) return;
                              const nextRep = { ...replacementCoaches, [name]: rep };
                              setReplacementCoaches(nextRep);
                              rebuildScheduleWithCoaches(entries, day, absentCoaches, nextRep);
                            }}
                            style={{ appearance:"none", WebkitAppearance:"none", fontSize:12, fontWeight:600, fontFamily:"inherit", padding:"4px 24px 4px 10px", border:`1px solid ${t.border}`, borderRadius:3, background:t.surface, color:t.muted, cursor:"pointer", outline:"none" }}>
                            <option value="">+ Sub</option>
                            {Object.keys(COACH_COLORS).filter(c => !absentCoaches.has(c) && c !== name).map(c => (
                              <option key={c} value={c}>{c}</option>
                            ))}
                          </select>
                          <span style={{ position:"absolute", right:8, top:"50%", transform:"translateY(-50%)", pointerEvents:"none", fontSize:9, color:t.muted }}>▾</span>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>}

          {/* Grid: zone rows x hour columns */}
          {(() => {
            const getAssessmentCount = (hour) => assessments[hour] || 0;

            const visibleZones = ZONES.filter(z => {
              if (z === "Turf-A") return true;
              // Show Turf-B if any hour has foundations on turf with <=2 members
              if (z === "Turf-B") return true; // Always show Turf-B — allow manual drags
              return cfg.hours.some(h => schedule[h]?.zoneResult[z] !== null);
            });
            const ZONE_ROW_LABEL = { Rack:"Rack", "Turf-A":"Turf", "Turf-B":"Turf (2)", Back:"Back" };

            // Get effective members for a zone/hour — use override if set, else auto-assigned
            const getItems = (hour, zone) => {
              const base = overrides[hour]?.[zone] !== undefined
                ? overrides[hour][zone]
                : (() => {
                    const zd = schedule[hour]?.zoneResult[zone];
                    if (!zd) return [];
                    if (zd.openGym) return []; // static open gym (no members signed in via Mindbody)
                    // Include open gym members from dynamic open gym coach slot
                    return zd.coaches.flatMap(s => s.items);
                  })();
              // Append resolved waitlist members that belong to this zone
              // Zone is determined by which zone their prog coach is in; fallback to Rack
              const wl = (waitlist[hour]||[]).filter(e => e.resolved && !e.pinned);
              const wlForZone = wl.filter(e => {
                const progCoach = e.resolved?.info?.coach;
                const h = schedule[hour];
                if (!h) return zone === "Rack";
                const zoneResult = h.zoneResult || {};
                // Find which zone has the prog coach
                for (const z of ZONES) {
                  const coaches = (zoneResult[z]?.coaches||[]).map(s => s.coach);
                  if (progCoach && coaches.includes(progCoach)) return z === zone;
                }
                // Fallback: first active zone
                const firstActive = ZONES.find(z => (zoneResult[z]?.coaches||[]).length > 0);
                return (firstActive || "Rack") === zone;
              });
              return [...base, ...wlForZone.map(e => ({ display: e.resolved.display, isWaitlist: true }))];
            };

            // Get effective coaches for a zone — use override if set
            const getCoaches = (hour, zone) => {
              if (coachOverrides[hour]?.[zone] !== undefined) return coachOverrides[hour][zone];
              const zd = schedule[hour]?.zoneResult[zone];
              if (!zd) return [];
              if (zd.openGym) return [{ coach: "Open Gym", busy: false }];
              return zd.coaches.map(s => ({ coach: s.coach, busy: s.busy }));
            };

            // Move a coach from one zone to another within the same hour
            const moveCoach = (hour, fromZone, toZone, coachName) => {
              // Build new coach override — use all ZONES so Back is always reachable
              const newCoachOverride = { ...(coachOverrides[hour] || {}) };
              ZONES.forEach(z => {
                if (newCoachOverride[z] === undefined) newCoachOverride[z] = getCoaches(hour, z);
              });
              newCoachOverride[fromZone] = (newCoachOverride[fromZone]||[]).filter(c => c.coach !== coachName);
              if (!newCoachOverride[toZone]) newCoachOverride[toZone] = [];
              if (!newCoachOverride[toZone].find(c => c.coach === coachName)) {
                newCoachOverride[toZone] = [...newCoachOverride[toZone], { coach: coachName, busy: false }];
              }

              // Commit coach positions immediately — always
              // If moving Open Gym out, clear it from the source zone
              if (coachName === "Open Gym") {
                newCoachOverride[fromZone] = (newCoachOverride[fromZone]||[]).filter(c => c.coach !== "Open Gym");
              }
              setCoachOverrides(prev => ({ ...prev, [hour]: newCoachOverride }));

              // Build flat zone->coachName[] map
              const newLayout = {};
              ZONES.forEach(z => {
                newLayout[z] = (newCoachOverride[z] || []).map(c => c.coach || c);
              });

              const hourEntries = entries ? entries.filter(e => e.hour === hour) : [];

              if (hourEntries.length > 0) {
                // Snapshot the current state before anything changes
                const currentOverrides = { ...(overrides[hour] || {}) };
                ZONES.forEach(z => {
                  if (currentOverrides[z] === undefined) {
                    const zd = schedule[hour]?.zoneResult[z];
                    if (!zd) { currentOverrides[z] = []; return; }
                    // Always include all items including open gym members
                    currentOverrides[z] = zd.coaches.flatMap(s => s.items);
                  }
                });

                const fromZoneAllItems = [...(currentOverrides[fromZone] || [])];
                const isOpenGymCoach = coachName === "Open Gym";

                // Open gym coach: only move open gym members
                // Regular coach: only move non-open-gym members
                const fromZoneFoundItems = fromZoneAllItems.filter(m => m.isFoundations);
                const fromZoneOpenGymItems = fromZoneAllItems.filter(m => m.isOpenGym);
                const fromZoneSemiItems = fromZoneAllItems.filter(m => !m.isFoundations && !m.isOpenGym);

                let membersToMove = [];
                if (isOpenGymCoach) {
                  // Open Gym drags: move all open gym members and clear source zone marker
                  membersToMove = fromZoneOpenGymItems;
                } else {
                  // Use newCoachOverride (already committed) to get accurate remaining coaches
                  // This avoids stale state from getCoaches() which hasn't updated yet
                  const remainingCoachesInFromZone = (newCoachOverride[fromZone] || []).filter(c => !c.busy && c.coach !== "Open Gym");
                  // Also exclude 1on1 coaches from "active floor" count
                  const oneOnOneCoachNames = (Array.isArray(oneOnOnes[hour]) ? oneOnOnes[hour] : [])
                    .filter(s => s.coachLocked && s.coach).map(s => s.coach.toLowerCase());
                  const activeRemainingCoaches = remainingCoachesInFromZone.filter(c => !oneOnOneCoachNames.includes(c.coach.toLowerCase()));

                  if (activeRemainingCoaches.length === 0) {
                    // No other coaches left — all members follow
                    membersToMove = fromZoneSemiItems;
                  } else {
                    // Proportional split based on pre-drag coach count
                    const preDragCoaches = [...remainingCoachesInFromZone, { coach: coachName }].filter(c => !oneOnOneCoachNames.includes(c.coach.toLowerCase()));
                    const totalCoaches = preDragCoaches.length;
                    const coachIdx = preDragCoaches.findIndex(c => c.coach === coachName);
                    membersToMove = fromZoneSemiItems.filter((_, i) => i % totalCoaches === coachIdx);
                  }
                  // Foundations follow if this is the foundations coach
                  const cfg2 = DAY_CONFIG[day];
                  const foundCoach2 = cfg2?.foundations?.[hour];
                  if (foundCoach2 === coachName) membersToMove = [...membersToMove, ...fromZoneFoundItems];
                }

                // Move everyone together
                const allMoving = membersToMove;
                const movingDisplays = new Set(allMoving.map(m => m.display));
                currentOverrides[fromZone] = (currentOverrides[fromZone]||[]).filter(m => !movingDisplays.has(m.display));
                currentOverrides[toZone] = [...(currentOverrides[toZone]||[]), ...allMoving];
                setOverrides(prev => ({ ...prev, [hour]: currentOverrides }));
              }
            };

            // Move a member from one zone to another within the same hour
            const moveItem = (hour, fromZone, toZone, item) => {
              // If this is a 1-on-1 member, remove from oneOnOnes and pin to overrides
              if (item.isOneOnOne) {
                const idx = item._ooIdx;
                const coach = item._ooCoach;
                setOneOnOnes(prev => {
                  const arr = [...(Array.isArray(prev[hour]) ? prev[hour] : [])];
                  arr.splice(idx, 1);
                  return { ...prev, [hour]: arr.length ? arr : undefined };
                });
                setOverrides(prev => {
                  const next = { ...prev, [hour]: { ...prev[hour] } };
                  ZONES.forEach(z => {
                    if (next[hour][z] === undefined) {
                      const zd = schedule[hour]?.zoneResult[z];
                      next[hour][z] = zd && !zd.openGym ? zd.coaches.flatMap(s => s.items) : [];
                    }
                  });
                  const coachColor = COACH_COLORS[coach] || null;
                  next[hour][toZone] = [...(next[hour][toZone]||[]), { display: item.display, isOneOnOne: true, _ooCoach: coach, _ooCoachColor: coachColor }];
                  return next;
                });
                return;
              }

              // If this is a free-type member, remove from freeTypeMembers and pin to overrides
              if (item.isFreeType) {
                const srcZone = item._freeTypeZone || fromZone;
                const srcIdx = item._freeTypeIdx;
                setFreeTypeMembers(prev => {
                  const next = { ...prev, [hour]: { ...prev[hour] } };
                  next[hour][srcZone] = (next[hour][srcZone]||[]).filter((_, i) => i !== srcIdx);
                  return next;
                });
                setOverrides(prev => {
                  const next = { ...prev, [hour]: { ...prev[hour] } };
                  ZONES.forEach(z => {
                    if (next[hour][z] === undefined) {
                      const zd = schedule[hour]?.zoneResult[z];
                      next[hour][z] = zd && !zd.openGym ? zd.coaches.flatMap(s => s.items) : [];
                    }
                  });
                  next[hour][toZone] = [...(next[hour][toZone]||[]), { display: item.display, isFreeType: true }];
                  return next;
                });
                return;
              }

              // If this is a waitlist member, remove from waitlist state and pin to overrides
              if (item.isWaitlist) {
                // Mark as pinned (not removed) so the count stays correct
                setWaitlist(prev => {
                  const arr = (prev[hour]||[]).map(e =>
                    e.resolved?.display === item.display ? { ...e, pinned: true } : e
                  );
                  return { ...prev, [hour]: arr };
                });
                setOverrides(prev => {
                  const next = { ...prev, [hour]: { ...prev[hour] } };
                  ZONES.forEach(z => {
                    if (next[hour][z] === undefined) {
                      const zd = schedule[hour]?.zoneResult[z];
                      next[hour][z] = zd && !zd.openGym ? zd.coaches.flatMap(s => s.items) : [];
                    }
                  });
                  // Don't add to fromZone since it was injected — just add to toZone
                  next[hour][toZone] = [...(next[hour][toZone]||[]), { ...item, isWaitlist: true }];
                  return next;
                });
                return;
              }
              setOverrides(prev => {
                const next = { ...prev, [hour]: { ...prev[hour] } };
                // Initialize all zones for this hour from current state if not overridden
                ZONES.forEach(z => {
                  if (next[hour][z] === undefined) {
                    const zd = schedule[hour]?.zoneResult[z];
                    next[hour][z] = zd && !zd.openGym ? zd.coaches.flatMap(s => s.items) : [];
                  }
                });
                next[hour][fromZone] = next[hour][fromZone].filter((m, i) =>
                  !(m.display === item.display && i === item._idx)
                );
                next[hour][toZone] = [...next[hour][toZone], { ...item }];
                return next;
              });
            };

            // Assessment helpers
            const cycleAssessment = (hour) => {
              const cur = getAssessmentCount(hour);
              if (cur >= 2) {
                setAssessments(prev => { const n={...prev}; delete n[hour]; return n; });
                setAssessmentNames(prev => { const n={...prev}; delete n[hour]; return n; });
              } else {
                setAssessments(prev => ({ ...prev, [hour]: cur + 1 }));
              }
            };
            const setAssessmentName = (hour, idx, name) => {
              setAssessmentNames(prev => ({
                ...prev,
                [hour]: { ...(prev[hour]||{}), [idx]: name }
              }));
            };

            return (
              <table style={{ width:"100%", borderCollapse:"collapse", tableLayout:"fixed" }}
                className={(() => {
                  const m = Math.max(0, ...cfg.hours.map(h => getAssessmentCount(h)));
                  const asmtClass = m >= 2 ? "has-two-asmt" : m === 1 ? "has-one-asmt" : "";
                  // has-turf-b when Turf-B actually has scheduled coaches or an assessment
                  const turfBHasContent = cfg.hours.some(h =>
                    getAssessmentCount(h) > 0 ||
                    (schedule[h]?.zoneResult?.["Turf-B"] !== null &&
                     (schedule[h]?.zoneResult?.["Turf-B"]?.coaches||[]).length > 0)
                  );
                  const turfBClass = turfBHasContent ? "has-turf-b" : "no-turf-b";
                  return [turfBClass, asmtClass].filter(Boolean).join(" ");
                })()}>
                <colgroup>
                  <col style={{ width:72 }} />
                  {cfg.hours.map(h => <col key={h} />)}
                </colgroup>
                <thead>
                  <tr>
                    <th style={{ background:"#1a1a1a", border:`1px solid ${t.border}`, padding:"5px 8px" }} />
                    {cfg.hours.map(hour => {
                      const h = schedule[hour];
                      const baseTotal = h?.total ?? 0;
                      const classMembers = entries ? entries.filter(e => e.hour === hour && (e.isInferno || e.isBodiesInMotion || e.isNutritionSeminar)).length : 0;
                      const ogCount = entries ? entries.filter(e => e.hour === hour && e.isOpenGym).length : 0;
                      const wlCount = (waitlist[hour]||[]).filter(e => e.resolved).length;
                      const total = baseTotal - classMembers - ogCount + wlCount;
                      return (
                        <th key={hour} style={{ background:"#1a1a1a", color:"#fff", border:`1px solid ${t.border}`, padding:"5px 8px", textAlign:"left" }}>
                          <span style={{ fontWeight:700, fontSize:15 }}>{fmt(hour)}</span>
                          <span style={{ fontSize:11, opacity:0.65, marginLeft:6 }}>{total} in</span>
                        </th>
                      );
                    })}
                  </tr>
                </thead>
                <tbody>
                  {visibleZones.map(zone => {
                    const bothTurfVisible = visibleZones.includes("Turf-A") && visibleZones.includes("Turf-B");
                    return (
                    <tr key={zone} className={`zone-row zone-row-${zone}`}>
                      {/* Zone label — Turf-A spans 2 rows when Turf-B is also visible, Turf-B gets no label */}
                      {zone === "Turf-B" && bothTurfVisible ? null : (
                        <td rowSpan={zone === "Turf-A" && bothTurfVisible ? 2 : 1}
                          style={{ background:t.zoneHeader, border:`1px solid ${t.border}`, padding:"6px 8px", verticalAlign:"middle", textAlign:"center" }}>
                          <div style={{ fontSize:16, fontWeight:700, letterSpacing:"0.05em", textTransform:"uppercase", color:t.muted, writingMode:"vertical-rl", transform:"rotate(180deg)", whiteSpace:"nowrap", margin:"0 auto" }}>
                            {ZONE_ROW_LABEL[zone]}
                          </div>
                        </td>
                      )}
                      {cfg.hours.map(hour => {
                        const h = schedule[hour];
                        if (!h) return <td key={hour} style={{ border:`1px solid ${t.border}`, background:t.surface }} />;
                        const { zoneResult, foundCoach, infernoCoach, bodiesCoach } = h;
                        let zd = zoneResult[zone];
                        // Assessment in Turf-B takes priority — render before empty zone check
                        if (zone === "Turf-B" && getAssessmentCount(hour) > 0) {
                          const asmtCount2 = getAssessmentCount(hour);
                          const asmtNames2 = assessmentNames[hour] || {};
                          return (
                            <td key={hour} style={{ border:`1px solid ${t.border}`, background:t.surface, verticalAlign:"top", padding:0 }}>
                              <div style={{ padding:"3px 8px 2px", borderBottom:`1px solid ${t.border}`, background:t.zoneHeader }}>
                                <span style={{ fontSize:15, fontWeight:700, color:COACH_COLORS["Andrew"]||"#059669" }}>Andrew</span>
                              </div>
                              <div style={{ padding:"4px 8px 6px" }}>
                                {Array.from({ length: asmtCount2 }).map((_, idx) => {
                                  const val = (asmtNames2[idx] || "").trim();
                                  const lockedKey = `locked-asmt-${hour}-${idx}`;
                                  const isLocked = val && asmtNames2[lockedKey];
                                  const isEmptyFirstSlot = asmtCount2 === 2 && idx === 0 && !val;
                                  return (
                                    <div key={idx} style={{ marginBottom: idx < asmtCount2-1 ? 4 : 0 }}>
                                      {asmtCount2 === 2 && !isEmptyFirstSlot && (
                                        <div style={{ fontSize:9, color:t.dim, marginBottom:1 }}>{idx === 0 ? ":00" : ":30"}</div>
                                      )}
                                      {isEmptyFirstSlot ? (
                                        <input className="no-print" value="" onChange={e => setAssessmentName(hour, idx, e.target.value)} placeholder=":00 (optional)"
                                          style={{ display:"block", width:"100%", fontSize:11, border:"none", borderBottom:`1px dashed ${t.border}`, background:"transparent", color:t.dim, fontFamily:"inherit", outline:"none", padding:"1px 0", fontStyle:"italic" }} />
                                      ) : isLocked ? (
                                        <div style={{ fontSize:14, padding:"3px 0", display:"flex", alignItems:"center", gap:3, color:t.chipText, cursor:"text" }}
                                          onClick={() => setAssessmentName(hour, lockedKey, false)}>
                                          <span style={{ fontSize:13, color:t.dim }}>·</span>
                                          {val}
                                          <span style={{ fontSize:10, color:COACH_COLORS["Andrew"]||"#059669", fontWeight:700, marginLeft:2 }}>A</span>
                                        </div>
                                      ) : (
                                        <input value={asmtNames2[idx] || ""} onChange={e => setAssessmentName(hour, idx, e.target.value)}
                                          onBlur={() => { if ((asmtNames2[idx]||"").trim()) setAssessmentName(hour, lockedKey, true); }}
                                          onKeyDown={e => { if (e.key === "Enter" && (asmtNames2[idx]||"").trim()) setAssessmentName(hour, lockedKey, true); }}
                                          placeholder="Member name"
                                          style={{ display:"block", width:"100%", fontSize:14, border:"none", borderBottom:`1px solid ${t.border}`, background:"transparent", color:t.text, fontFamily:"inherit", outline:"none", padding:"2px 0" }} />
                                      )}
                                    </div>
                                  );
                                })}
                              </div>
                            </td>
                          );
                        }
                        // Always allow drops even if zone has no scheduled coaches
                        if (!zd || (!zd.openGym && zd.coaches.length === 0 && !coachOverrides[hour]?.[zone]?.length && !overrides[hour]?.[zone]?.length)) {
                          // Render as empty droppable cell
                          const onDragOverEmpty = (e) => { e.preventDefault(); e.currentTarget.style.outline = "2px solid #3b82f6"; e.currentTarget.style.outlineOffset = "-2px"; };
                          const onDragLeaveEmpty = (e) => { e.currentTarget.style.outline = ""; e.currentTarget.style.outlineOffset = ""; };
                          const onDropEmpty = (e) => {
                            e.preventDefault();
                            e.currentTarget.style.outline = ""; e.currentTarget.style.outlineOffset = "";
                            try {
                              const data = JSON.parse(e.dataTransfer.getData("text/plain"));
                              if (data.hour !== hour) return;
                              if (data.type === "classLabel") {
                                setClassLabelZone(prev => ({ ...prev, [hour]: { ...(prev[hour] || {}), [data.coach]: zone } }));
                              } else if (data.type === "coach" && data.fromZone !== zone) moveCoach(hour, data.fromZone, zone, data.coach);
                              else if (data.type === "member" && data.fromZone !== zone) moveItem(hour, data.fromZone, zone, data.item);
                            } catch(err) {}
                          };
                          // Check if there are any override items/coaches to show
                          const overrideCoaches = coachOverrides[hour]?.[zone] || [];
                          const overrideItems = overrides[hour]?.[zone] || [];
                          if (overrideCoaches.length === 0 && overrideItems.length === 0) {
                            return (
                              <td key={hour} style={{ border:`1px solid ${t.border}`, background:t.zoneBg, padding:0, minHeight:40, verticalAlign:"top" }}
                                onDragOver={onDragOverEmpty} onDragLeave={onDragLeaveEmpty} onDrop={onDropEmpty}>
                                <div style={{ minHeight:40 }} />
                              </td>
                            );
                          }
                          // Has override content — fall through to full render with a synthetic zd
                          zd = { coaches: overrideCoaches.map(c => ({ coach: c.coach||c, busy:false, items:[] })), openGym:false };
                        }

                        const items = getItems(hour, zone).map((m, i) => ({ ...m, _idx: i }));
                        const asmtCount = getAssessmentCount(hour);
                        const asmtNames = assessmentNames[hour] || {};
                        const oneOnOneSlots = Array.isArray(oneOnOnes[hour]) ? oneOnOnes[hour] : [];
                        const oneOnOneCoaches = oneOnOneSlots.filter(s => s.coachLocked && s.coach).map(s => s.coach.toLowerCase());
                        const foundationsCoach = cfg.foundations?.[hour];
                        const effectiveCoachesList = getCoaches(hour, zone).filter(({ coach }) => {
                          if (coach === "Andrew" && asmtCount > 0) return false;
                          if (oneOnOneCoaches.includes(coach.toLowerCase())) return false;
                          // When assessment active + foundations in Turf-A: remove non-foundations coaches from Turf-A
                          if (zone === "Turf-A" && asmtCount > 0 && foundationsCoach && coach !== foundationsCoach) {
                            const turfACoaches = getCoaches(hour, "Turf-A");
                            const hasFounds = turfACoaches.some(c => c.coach === foundationsCoach);
                            if (hasFounds) return false;
                          }
                          return true;
                        });
                        // If 1on1 coach is the sole coach in this zone, treat zone as empty
                        const nonBusyCoaches = getCoaches(hour, zone).filter(c => !c.busy);
                        const oneOnOneSoleCoach = nonBusyCoaches.length > 0 &&
                          nonBusyCoaches.every(c => oneOnOneCoaches.includes(c.coach.toLowerCase()));
                        const effectiveItems = oneOnOneSoleCoach ? [] : items;
                        const zoneIsEmpty = effectiveCoachesList.length === 0 && effectiveItems.length === 0;
                        const activeCoaches = zd.coaches ? zd.coaches.filter(s => !s.busy || s.items.length > 0) : [];

                        // Drop zone handler
                        const onDragOverZone = (e) => { e.preventDefault(); e.currentTarget.style.outline = "2px solid #3b82f6"; e.currentTarget.style.outlineOffset = "-2px"; };
                        const onDragLeaveZone = (e) => { e.currentTarget.style.outline = ""; e.currentTarget.style.outlineOffset = ""; };
                        const onDropZone = (e) => {
                          e.preventDefault();
                          e.currentTarget.style.outline = "";
                          e.currentTarget.style.outlineOffset = "";
                          try {
                            const data = JSON.parse(e.dataTransfer.getData("text/plain"));
                            if (data.hour !== hour) return;
                            if (data.type === "classLabel") {
                              setClassLabelZone(prev => ({ ...prev, [hour]: { ...(prev[hour] || {}), [data.coach]: zone } }));
                            } else if (data.type === "coach" && data.fromZone !== zone) {
                              moveCoach(hour, data.fromZone, zone, data.coach);
                            } else if (data.type === "member" && data.fromZone !== zone) {
                              moveItem(hour, data.fromZone, zone, data.item);
                            }
                          } catch(err) {}
                        };

                        return (
                          <td key={hour} style={{ border:`1px solid ${t.border}`, background: zoneIsEmpty ? t.zoneBg : t.surface, verticalAlign:"top", padding:0 }}
                            onDragOver={onDragOverZone} onDragLeave={onDragLeaveZone} onDrop={onDropZone}>
                            {zd.openGym && effectiveCoachesList.length === 0 && coachOverrides[hour]?.[zone] === undefined ? (
                              <div style={{ padding:"6px 8px", background:t.openGym, height:"100%" }}>
                                <span
                                  draggable
                                  onDragStart={(e) => {
                                    e.dataTransfer.setData("text/plain", JSON.stringify({ type:"coach", hour, fromZone: zone, coach:"Open Gym" }));
                                    e.currentTarget.style.opacity = "0.4";
                                  }}
                                  onDragEnd={(e) => { e.currentTarget.style.opacity = "1"; }}
                                  style={{ fontSize:15, fontWeight:700, color:t.openGymText, cursor:"grab", userSelect:"none" }}>
                                  Open Gym
                                </span>
                              </div>
                            ) : (
                              <div>
                                {/* Coach name bar — draggable, hide Andrew if assessment, hide in blank template */}
                                {!isBlankTemplate && (() => {
                                  const effectiveCoaches = effectiveCoachesList;
                                  // Open gym: show "Open Gym" label instead of coaches
                                  if (effectiveCoaches.length === 1 && effectiveCoaches[0]?.coach === "Open Gym") {
                                    const ogSlot = schedule[hour]?.zoneResult[zone]?.coaches?.find(s => s.coach === "Open Gym");
                                    const ogCount = ogSlot?.items?.length ?? 0;
                                    return (
                                      <div style={{ padding:"3px 8px 2px", borderBottom:`1px solid ${t.border}`, background:t.zoneHeader, display:"flex", alignItems:"center", justifyContent:"space-between" }}>
                                        <span
                                          draggable
                                          onDragStart={(e) => {
                                            e.dataTransfer.setData("text/plain", JSON.stringify({ type:"coach", hour, fromZone: zone, coach:"Open Gym" }));
                                            e.currentTarget.style.opacity = "0.4";
                                          }}
                                          onDragEnd={(e) => { e.currentTarget.style.opacity = "1"; }}
                                          style={{ fontSize:15, fontWeight:700, color:t.openGymText, cursor:"grab", userSelect:"none" }}>
                                          Open Gym
                                        </span>
                                        {ogCount > 0 && <span style={{ fontSize:11, color:t.dim }}>{ogCount}</span>}
                                      </div>
                                    );
                                  }
                                  return (
                                    <div style={{ padding:"3px 8px 2px", display:"flex", alignItems:"center", flexWrap:"wrap", borderBottom:`1px solid ${t.border}`, background:t.zoneHeader }}>
                                      {effectiveCoaches.map(({ coach, busy: isBusy }) => {
                                        const color = COACH_COLORS[coach] || "#888";
                                        return (
                                          <span key={coach}
                                            draggable
                                            onDragStart={(e) => {
                                              e.dataTransfer.setData("text/plain", JSON.stringify({ type:"coach", hour, fromZone: zone, coach }));
                                              e.currentTarget.style.opacity = "0.4";
                                            }}
                                            onDragEnd={(e) => { e.currentTarget.style.opacity = "1"; }}
                                            style={{ display:"inline-flex", alignItems:"center", gap:4, marginRight:8, cursor:"grab", userSelect:"none" }}>
                                            <span className="coach-name" style={{ fontSize:15, fontWeight:700, color }}>{coach}</span>
                                          </span>
                                        );
                                      })}
                                      {effectiveItems.filter(m=>!m.isFoundations).length > 0 &&
                                        <span style={{ fontSize:9, color:t.dim, marginLeft:"auto" }}>{effectiveItems.filter(m=>!m.isFoundations).length}</span>}
                                    </div>
                                  );
                                })()}

                                {/* Bodies in Motion / Inferno label — draggable, respects classLabelZone override */}
                                {(() => {
                                  const busyCoach = bodiesCoach || infernoCoach;
                                  if (!busyCoach) return null;
                                  // Check if this coach's class label should show in this zone
                                  // Priority: manual drag override → config zone → coach's busy zone
                                  const configZone = bodiesCoach
                                    ? cfg.bodiesInMotionZone?.[hour]
                                    : cfg.infernoZone?.[hour];
                                  const labelZone = classLabelZone[hour]?.[busyCoach] ||
                                    configZone ||
                                    ZONES.find(z => schedule[hour]?.zoneResult?.[z]?.coaches?.some(s => s.coach === busyCoach && s.busy));
                                  if (labelZone !== zone) return null;
                                  const zoneCoachSlots = zd?.coaches || [];
                                  // Find the busy coach slot anywhere in the schedule (label may have moved)
                                  const slot = ZONES.reduce((found, z) => found ||
                                    schedule[hour]?.zoneResult?.[z]?.coaches?.find(s => s.busy && (s.coach === bodiesCoach || s.coach === infernoCoach)),
                                  null);
                                  const isBodies = !!bodiesCoach;
                                  const label = slot?.items?.[0]?.display || (isBodies ? "Bodies in Motion" : "Inferno");
                                  return (
                                    <div
                                      draggable
                                      onDragStart={e => {
                                        e.dataTransfer.setData("text/plain", JSON.stringify({ type:"classLabel", hour, fromZone: zone, coach: busyCoach, label }));
                                        e.currentTarget.style.opacity = "0.4";
                                      }}
                                      onDragEnd={e => { e.currentTarget.style.opacity = "1"; }}
                                      style={{ padding:"2px 8px 4px", cursor:"grab", userSelect:"none" }}>
                                      <span style={{ fontSize:13, color:t.foundText, fontWeight:600 }}>{label}</span>
                                    </div>
                                  );
                                })()}

                                {/* Members — draggable */}
                                <div style={{ padding:"3px 8px 4px", minHeight:24 }}>
                                  {effectiveItems.filter(m => !m.isClassCount).length === 0 && !bodiesCoach && !infernoCoach && <div style={{ fontSize:10, color:t.dim, fontStyle:"italic" }}>—</div>}
                                  {effectiveItems.filter(m => !m.isClassCount).map((m, i) => {
                                    if (m.isCarlsen) {
                                      const carlsenIdx = items.slice(0, i+1).filter(x => x.isCarlsen).length - 1;
                                      const cKey = `${hour}-${zone}-${carlsenIdx}`;
                                      const cName = carlsenNames[cKey] || "";
                                      const resolved = carlsenResolved[cKey];
                                      const suggOpen = carlsenSuggOpen[cKey] && cName.length >= 2;

                                      // Fuzzy suggestions from member list
                                      const suggestions = cName.length >= 2 ? membersRef.current.filter(mem => {
                                        const full = `${mem.firstName} ${mem.lastName}`.toLowerCase();
                                        const fn = mem.firstName.toLowerCase();
                                        const q = cName.toLowerCase();
                                        return full.includes(q) || fn.startsWith(q) || trigramSim(norm(q), norm(full)) > 0.35;
                                      }).slice(0, 5) : [];

                                      const resolveMember = (mem) => {
                                        const info = lookupMember(mem.firstName, mem.lastName);
                                        const display = info ? info.display : `${mem.firstName} ${mem.lastName[0]}`;
                                        setCarlsenResolved(prev => ({ ...prev, [cKey]: { display, info, mem } }));
                                        setCarlsenNames(prev => ({ ...prev, [cKey]: display }));
                                        setCarlsenSuggOpen(prev => ({ ...prev, [cKey]: false }));
                                        // Re-run assignment for this hour with Carlsen resolved as a real member
                                        if (entries) {
                                          try {
                                            const hourEntries = entries.filter(e => e.hour === hour).map(e => {
                                              if (e.firstName.toLowerCase() === "christopher" && e.lastName.toLowerCase() === "carlsen") {
                                                return { ...e, firstName: mem.firstName, lastName: mem.lastName, isCarlsen: true, wasResolved: true };
                                              }
                                              return e;
                                            });
                                            const currentCoachLayout = {};
                                            ZONES.forEach(z => { currentCoachLayout[z] = getCoaches(hour, z).map(c => c.coach || c); });
                                            const reassigned = assignMembersToLayout(day, hour, hourEntries, currentCoachLayout);
                                            Object.keys(reassigned).forEach(z => {
                                              reassigned[z] = reassigned[z].map(item =>
                                                item.rawName === `${mem.firstName} ${mem.lastName}` ? { ...item, isCarlsen: true, display } : item
                                              );
                                            });
                                            setOverrides(prev => ({ ...prev, [hour]: reassigned }));
                                          } catch(err) {
                                            console.warn("Carlsen reassignment failed:", err);
                                          }
                                        }
                                      };

                                      if (resolved) {
                                        // Show resolved name like a normal member — draggable with c marker
                                        return (
                                          <div key={i}
                                            draggable
                                            onDragStart={(e) => {
                                              e.dataTransfer.setData("text/plain", JSON.stringify({ type: "member", hour, fromZone: zone, item: m }));
                                              e.currentTarget.style.opacity = "0.4";
                                            }}
                                            onDragEnd={(e) => { e.currentTarget.style.opacity = "1"; }}
                                            style={{ fontSize:14, padding:"3px 0", cursor:"grab", userSelect:"none", display:"flex", alignItems:"center", gap:3, color:t.chipText }}>
                                            <span style={{ fontSize:13, color:t.dim, flexShrink:0 }}>·</span>
                                            {resolved.display}
                                            <span style={{ fontSize:9, color:"#f59e0b", fontWeight:600, marginLeft:1 }}>c</span>
                                            <span style={{ fontSize:9, color:t.dim, marginLeft:2, cursor:"pointer" }}
                                              onClick={() => { setCarlsenResolved(prev => { const n={...prev}; delete n[cKey]; return n; }); setCarlsenNames(prev => ({ ...prev, [cKey]: "" })); }}>✕</span>
                                          </div>
                                        );
                                      }

                                      return (
                                        <div key={i} style={{ fontSize:12, padding:"2px 0", position:"relative" }}>
                                          <div style={{ display:"flex", alignItems:"center", gap:3 }}>
                                            <span style={{ fontSize:13, color:t.dim, flexShrink:0 }}>·</span>
                                            <input
                                              value={cName}
                                              onChange={e => {
                                                setCarlsenNames(prev => ({ ...prev, [cKey]: e.target.value }));
                                                setCarlsenSuggOpen(prev => ({ ...prev, [cKey]: true }));
                                              }}
                                              onFocus={() => setCarlsenSuggOpen(prev => ({ ...prev, [cKey]: true }))}
                                              onBlur={() => setTimeout(() => {
                                                setCarlsenSuggOpen(prev => ({ ...prev, [cKey]: false }));
                                                // Lock as free-type if has text but no member selected
                                                if (cName.trim() && !carlsenResolved[cKey]) {
                                                  setCarlsenResolved(prev => ({ ...prev, [cKey]: { display: cName.trim(), info: null, mem: null, isFreeType: true } }));
                                                }
                                              }, 150)}
                                              onKeyDown={e => {
                                                if (e.key === "Enter" && cName.trim() && !carlsenResolved[cKey]) {
                                                  setCarlsenResolved(prev => ({ ...prev, [cKey]: { display: cName.trim(), info: null, mem: null, isFreeType: true } }));
                                                  setCarlsenSuggOpen(prev => ({ ...prev, [cKey]: false }));
                                                }
                                              }}
                                              placeholder="Type name..."
                                              style={{ fontSize:14, width:110, border:"none", borderBottom:`1px solid ${t.border}`, background:"transparent", color:t.text, fontFamily:"inherit", outline:"none", padding:"0 2px" }}
                                            />
                                            <span style={{ fontSize:9, color:"#f59e0b", fontWeight:600, marginLeft:1 }}>c</span>
                                          </div>
                                          {suggOpen && suggestions.length > 0 && (
                                            <div style={{ position:"absolute", left:12, top:"100%", zIndex:100, background:t.surface, border:`1px solid ${t.border}`, borderRadius:3, minWidth:140, boxShadow:"0 4px 12px rgba(0,0,0,0.15)" }}>
                                              {suggestions.map((mem, si) => (
                                                <div key={si}
                                                  onMouseDown={() => resolveMember(mem)}
                                                  style={{ padding:"4px 8px", fontSize:11, cursor:"pointer", borderBottom: si < suggestions.length-1 ? `1px solid ${t.border}` : "none", display:"flex", justifyContent:"space-between", alignItems:"center" }}>
                                                  <span>{mem.firstName} {mem.lastName[0]}</span>
                                                  <span style={{ fontSize:9, color:COACH_COLORS[mem.coach]||t.muted, fontWeight:600 }}>{mem.coach}</span>
                                                </div>
                                              ))}
                                            </div>
                                          )}
                                        </div>
                                      );
                                    }
                                    return (
                                      <div key={i}
                                        draggable
                                        onDragStart={(e) => {
                                          e.dataTransfer.setData("text/plain", JSON.stringify({ type: "member", hour, fromZone: zone, item: m }));
                                          e.currentTarget.style.opacity = "0.4";
                                        }}
                                        onDragEnd={(e) => { e.currentTarget.style.opacity = "1"; }}
                                        style={{ fontSize:14, padding:"3px 0", cursor:"grab", userSelect:"none",
                                          color: m.isFoundations ? t.foundText : m.noMatch ? t.noMatchText : t.chipText,
                                          display:"flex", alignItems:"center", gap:3 }}>
                                        <span style={{ fontSize:13, color:t.dim, flexShrink:0 }}>·</span>
                                        {m.display}
                                        {m.isFoundations && !m.isClassCount && <span style={{ fontSize:10, color:t.foundText, fontWeight:700, marginLeft:2 }}>F</span>}
                                      {m.isWaitlist && <span style={{ fontSize:10, color:"#0891b2", fontWeight:700, marginLeft:2 }}>W</span>}
                                      {m.isOneOnOne && m._ooCoach && <span style={{ fontSize:11, fontWeight:700, color:COACH_COLORS[m._ooCoach]||t.muted, marginLeft:2 }}>{m._ooCoach}</span>}
                                        
                                      </div>
                                    );
                                  })}

                                  {/* Free-type members — manually added */}
                                  {(freeTypeMembers[hour]?.[zone] || []).map((ft, fti) => (
                                    ft.locked ? (
                                      <div key={`ft-${fti}`}
                                        draggable
                                        onDragStart={(e) => {
                                          e.dataTransfer.setData("text/plain", JSON.stringify({ type:"member", hour, fromZone: zone, item: { display: ft.name, isFreeType: true, _freeTypeZone: zone, _freeTypeIdx: fti } }));
                                          e.currentTarget.style.opacity = "0.4";
                                        }}
                                        onDragEnd={(e) => { e.currentTarget.style.opacity = "1"; }}
                                        style={{ fontSize:14, padding:"3px 0", display:"flex", alignItems:"center", gap:3, color:t.chipText, cursor:"grab", userSelect:"none" }}>
                                        <span style={{ fontSize:13, color:t.dim }}>·</span>
                                        {ft.name}
                                        <span style={{ fontSize:9, color:t.dim, cursor:"pointer", marginLeft:2 }}
                                          onClick={(e) => { e.stopPropagation(); setFreeTypeMembers(prev => {
                                            const next = { ...prev, [hour]: { ...prev[hour] } };
                                            next[hour][zone] = (next[hour][zone]||[]).filter((_, i) => i !== fti);
                                            return next;
                                          }); }}>✕</span>
                                      </div>
                                    ) : (
                                      <div key={`ft-${fti}`} style={{ fontSize:14, padding:"2px 0", display:"flex", alignItems:"center", gap:3 }}>
                                        <span style={{ fontSize:13, color:t.dim }}>·</span>
                                        <input
                                          autoFocus
                                          value={ft.name}
                                          onChange={e => setFreeTypeMembers(prev => {
                                            const next = { ...prev, [hour]: { ...prev[hour] } };
                                            const arr = [...(next[hour][zone] || [])];
                                            arr[fti] = { name: e.target.value, locked: false };
                                            next[hour][zone] = arr;
                                            return next;
                                          })}
                                          onKeyDown={e => { if (e.key === "Enter" && ft.name.trim()) {
                                            setFreeTypeMembers(prev => {
                                              const next = { ...prev, [hour]: { ...prev[hour] } };
                                              const arr = [...(next[hour][zone] || [])];
                                              arr[fti] = { name: ft.name, locked: true };
                                              next[hour][zone] = arr;
                                              return next;
                                            });
                                          }}}
                                          onBlur={() => {
                                            if (ft.name.trim()) {
                                              setFreeTypeMembers(prev => {
                                                const next = { ...prev, [hour]: { ...prev[hour] } };
                                                const arr = [...(next[hour][zone] || [])];
                                                arr[fti] = { name: ft.name, locked: true };
                                                next[hour][zone] = arr;
                                                return next;
                                              });
                                            } else {
                                              setFreeTypeMembers(prev => {
                                                const next = { ...prev, [hour]: { ...prev[hour] } };
                                                next[hour][zone] = (next[hour][zone]||[]).filter((_, i) => i !== fti);
                                                return next;
                                              });
                                            }
                                          }}
                                          placeholder="Type full name, press Enter..."
                                          style={{ fontSize:14, width:160, border:"none", borderBottom:`1px solid ${t.border}`, background:"transparent", color:t.text, fontFamily:"inherit", outline:"none", padding:"0 2px" }}
                                        />
                                      </div>
                                    )
                                  ))}

                                  {/* 1-on-1 members — shown in Back zone */}
                                  {zone === "Back" && (Array.isArray(oneOnOnes[hour]) ? oneOnOnes[hour] : []).filter(s => s.coachLocked && s.memberLocked && s.coach && s.member).map((slot, si) => {
                                    const coachColor = COACH_COLORS[slot.coach] || t.muted;
                                    return (
                                      <div key={`oo-${si}`}
                                        draggable
                                        onDragStart={(e) => {
                                          e.dataTransfer.setData("text/plain", JSON.stringify({ type:"member", hour, fromZone: zone, item: { display: slot.member, isOneOnOne: true, _ooIdx: si, _ooCoach: slot.coach } }));
                                          e.currentTarget.style.opacity = "0.4";
                                        }}
                                        onDragEnd={(e) => { e.currentTarget.style.opacity = "1"; }}
                                        style={{ fontSize:14, padding:"3px 0", display:"flex", alignItems:"center", gap:3, cursor:"grab", userSelect:"none", color:t.chipText }}>
                                        <span style={{ fontSize:13, color:t.dim }}>·</span>
                                        {slot.member}
                                        <span style={{ fontSize:11, fontWeight:700, color:coachColor, marginLeft:2 }}>{slot.coach}</span>
                                      </div>
                                    );
                                  })}
                                </div>

                              </div>
                            )}
                          </td>
                        );
                      })}
                    </tr>
                  );})}

                  {/* Assessment buttons row */}
                  <tr className="no-print">
                    <td style={{ background:t.zoneHeader, border:`1px solid ${t.border}`, padding:"6px 8px", verticalAlign:"middle", textAlign:"center" }}>
                      <div style={{ fontSize:9, fontWeight:700, color:t.muted, textTransform:"uppercase", letterSpacing:"0.05em" }}>Asmt</div>
                    </td>
                    {cfg.hours.map(hour => {
                      const count = getAssessmentCount(hour);
                      const label = count === 0 ? "+ Assessment" : count === 1 ? "+ 2nd (:30)" : "✕ Remove";
                      const bg = count === 2 ? "#fee2e2" : count === 1 ? "#fef3c7" : t.surface;
                      const col = count === 2 ? "#991b1b" : count === 1 ? "#92400e" : t.muted;
                      return (
                        <td key={hour} style={{ border:`1px solid ${t.border}`, padding:"4px 6px", background:t.surface }}>
                          <button onClick={() => cycleAssessment(hour)}
                            style={{ width:"100%", fontSize:10, padding:"3px 4px", border:`1px solid ${t.border}`, borderRadius:3, background:bg, color:col, cursor:"pointer", fontFamily:"inherit", fontWeight:500 }}>
                            {label}
                          </button>
                        </td>
                      );
                    })}
                  </tr>

                  {/* Waitlist input row — only shown when any hour has pending (unresolved) entries */}
                  {cfg.hours.some(h => (waitlist[h]||[]).some(e => !e.resolved)) && (
                    <tr className="no-print">
                      <td style={{ background:t.zoneHeader, border:`1px solid ${t.border}`, padding:"6px 8px", verticalAlign:"middle", textAlign:"center" }}>
                        <div style={{ fontSize:11, fontWeight:700, letterSpacing:"0.05em", textTransform:"uppercase", color:"#0891b2", writingMode:"vertical-rl", transform:"rotate(180deg)", whiteSpace:"nowrap", margin:"0 auto" }}>WL</div>
                      </td>
                      {cfg.hours.map(hour => {
                        const pending = (waitlist[hour]||[]).filter(e => !e.resolved);
                        if (pending.length === 0) return <td key={hour} style={{ border:`1px solid ${t.border}`, background:t.zoneBg }} />;
                        return (
                          <td key={hour} style={{ border:`1px solid ${t.border}`, background:t.surface, verticalAlign:"top", padding:"4px 8px 6px" }}>
                            {pending.map((entry, pidx) => {
                              const realIdx = (waitlist[hour]||[]).indexOf(entry);
                              const suggs = (entry.query||"").length >= 2
                                ? membersRef.current.filter(m => {
                                    const full = (m.firstName+" "+m.lastName).toLowerCase();
                                    const q = entry.query.toLowerCase();
                                    return full.includes(q) || m.firstName.toLowerCase().startsWith(q) || trigramSim(norm(q), norm(full)) > 0.35;
                                  }).slice(0,5)
                                : [];
                              const resolveWL = (mem) => {
                                const info = lookupMember(mem.firstName, mem.lastName);
                                const display = info ? info.display : `${mem.firstName} ${mem.lastName[0]}`;
                                setWaitlist(prev => {
                                  const arr = [...(prev[hour]||[])];
                                  arr[realIdx] = { ...arr[realIdx], resolved: { display, info, mem }, query: display, suggOpen: false };
                                  return { ...prev, [hour]: arr };
                                });
                              };
                              return (
                                <div key={pidx} style={{ position:"relative", marginBottom: pidx < pending.length-1 ? 4 : 0 }}>
                                  <div style={{ display:"flex", alignItems:"center", gap:3 }}>
                                    <span style={{ fontSize:13, color:t.dim }}>·</span>
                                    <input
                                      autoFocus={pidx === 0}
                                      value={entry.query||""}
                                      onChange={e => setWaitlist(prev => {
                                        const arr = [...(prev[hour]||[])];
                                        arr[realIdx] = { ...arr[realIdx], query: e.target.value, suggOpen: true };
                                        return { ...prev, [hour]: arr };
                                      })}
                                      onFocus={() => setWaitlist(prev => {
                                        const arr = [...(prev[hour]||[])];
                                        arr[realIdx] = { ...arr[realIdx], suggOpen: true };
                                        return { ...prev, [hour]: arr };
                                      })}
                                      onKeyDown={e => {
                                        if (e.key === "Enter" && (entry.query||"").trim()) {
                                          // If no DB match, resolve as free-type with best zone assignment
                                          const name = entry.query.trim();
                                          const display = name;
                                          setWaitlist(prev => {
                                            const arr = [...(prev[hour]||[])];
                                            arr[realIdx] = { ...arr[realIdx], resolved: { display, info: null, mem: null }, query: display, suggOpen: false };
                                            return { ...prev, [hour]: arr };
                                          });
                                        }
                                      }}
                                      onBlur={() => setTimeout(() => setWaitlist(prev => {
                                        const arr = [...(prev[hour]||[])];
                                        if (arr[realIdx]) arr[realIdx] = { ...arr[realIdx], suggOpen: false };
                                        return { ...prev, [hour]: arr };
                                      }), 150)}
                                      placeholder="Type name..."
                                      style={{ fontSize:13, width:90, border:"none", borderBottom:`1px solid ${t.border}`, background:"transparent", color:t.text, fontFamily:"inherit", outline:"none", padding:"0 2px" }}
                                    />
                                    <span style={{ fontSize:10, color:"#0891b2", fontWeight:700 }}>W</span>
                                    <span style={{ fontSize:9, color:t.dim, cursor:"pointer" }}
                                      onClick={() => setWaitlist(prev => {
                                        const arr = [...(prev[hour]||[])];
                                        arr.splice(realIdx, 1);
                                        return { ...prev, [hour]: arr };
                                      })}>✕</span>
                                  </div>
                                  {entry.suggOpen && suggs.length > 0 && (
                                    <div style={{ position:"absolute", left:16, top:"100%", zIndex:100, background:t.surface, border:`1px solid ${t.border}`, borderRadius:3, minWidth:140, boxShadow:"0 4px 12px rgba(0,0,0,0.15)" }}>
                                      {suggs.map((mem, si) => (
                                        <div key={si} onMouseDown={() => resolveWL(mem)}
                                          style={{ padding:"4px 8px", fontSize:11, cursor:"pointer", borderBottom: si<suggs.length-1?`1px solid ${t.border}`:"none", display:"flex", justifyContent:"space-between" }}>
                                          <span>{mem.firstName} {mem.lastName[0]}</span>
                                          <span style={{ fontSize:9, color:COACH_COLORS[mem.coach]||t.muted, fontWeight:600 }}>{mem.coach}</span>
                                        </div>
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </td>
                        );
                      })}
                    </tr>
                  )}

                  {/* Waitlist button row */}
                  <tr className="no-print">
                    <td style={{ background:t.zoneHeader, border:`1px solid ${t.border}`, padding:"6px 8px", verticalAlign:"middle", textAlign:"center" }}>
                      <div style={{ fontSize:9, fontWeight:700, color:t.muted, textTransform:"uppercase", letterSpacing:"0.05em" }}>WL</div>
                    </td>
                    {cfg.hours.map(hour => {
                      const wl = waitlist[hour] || [];
                      const hasAny = wl.length > 0;
                      return (
                        <td key={hour} style={{ border:`1px solid ${t.border}`, padding:"4px 6px", background:t.surface }}>
                          <button
                            onClick={() => setWaitlist(prev => ({
                              ...prev,
                              [hour]: [...(prev[hour]||[]), { query:"", resolved:null, suggOpen:false }]
                            }))}
                            style={{ width:"100%", fontSize:10, padding:"3px 4px", border:`1px solid ${t.border}`, borderRadius:3, background: hasAny ? "#e0f7fa" : t.surface, color: hasAny ? "#0891b2" : t.muted, cursor:"pointer", fontFamily:"inherit", fontWeight:500 }}>
                            + Waitlist
                          </button>
                        </td>
                      );
                    })}
                  </tr>

                  {/* 1-on-1 input row — shown when any hour has pending (incomplete) 1on1 slots */}
                  {cfg.hours.some(h => (Array.isArray(oneOnOnes[h]) ? oneOnOnes[h] : []).some(s => !s.coachLocked || !s.memberLocked)) && (
                    <tr className="no-print">
                      <td style={{ background:t.zoneHeader, border:`1px solid ${t.border}`, padding:"6px 8px", verticalAlign:"middle", textAlign:"center" }}>
                        <div style={{ fontSize:9, fontWeight:700, letterSpacing:"0.05em", textTransform:"uppercase", color:"#7c3aed", writingMode:"vertical-rl", transform:"rotate(180deg)", whiteSpace:"nowrap", margin:"0 auto" }}>1on1</div>
                      </td>
                      {cfg.hours.map(hour => {
                        const slots = (Array.isArray(oneOnOnes[hour]) ? oneOnOnes[hour] : []).filter(s => !s.coachLocked || !s.memberLocked);
                        if (slots.length === 0) return <td key={hour} style={{ border:`1px solid ${t.border}`, background:t.zoneBg }} />;
                        return (
                          <td key={hour} style={{ border:`1px solid ${t.border}`, background:t.surface, verticalAlign:"top", padding:"4px 8px 6px" }}>
                            {slots.map((slot, si) => {
                              const realIdx = (Array.isArray(oneOnOnes[hour]) ? oneOnOnes[hour] : []).indexOf(slot);
                              const coachColor = COACH_COLORS[slot.coach] || t.text;
                              const updateSlot = (patch) => {
                                setOneOnOnes(prev => {
                                  const arr = [...(prev[hour]||[])];
                                  arr[realIdx] = { ...arr[realIdx], ...patch };
                                  return { ...prev, [hour]: arr };
                                });
                                // When coach is locked in, redistribute their members away from floor
                                if (patch.coachLocked && patch.coach && entries) {
                                  const ooCoach = patch.coach;
                                  // Rebuild overrides without the 1on1 coach in any zone
                                  setOverrides(prev => {
                                    const next = { ...prev, [hour]: { ...prev[hour] } };
                                    ZONES.forEach(z => {
                                      if (next[hour][z] === undefined) {
                                        const zd = schedule[hour]?.zoneResult[z];
                                        next[hour][z] = zd && !zd.openGym ? zd.coaches.flatMap(s => s.items) : [];
                                      }
                                    });
                                    // Move members that were with the 1on1 coach to the best remaining zone
                                    const ooZone = ZONES.find(z => (next[hour][z]||[]).length > 0 &&
                                      schedule[hour]?.zoneResult[z]?.coaches?.some(s => s.coach === ooCoach));
                                    if (ooZone) {
                                      const displaced = (next[hour][ooZone]||[]).filter(m => !m.isFoundations && !m.isOpenGym && !m.isOneOnOne);
                                      if (displaced.length > 0) {
                                        // Find best zone to redistribute to (not the 1on1 zone)
                                        const targetZone = ZONES.find(z => z !== ooZone &&
                                          schedule[hour]?.zoneResult[z]?.coaches?.some(s => !s.busy) &&
                                          !(schedule[hour]?.zoneResult[z]?.openGym));
                                        if (targetZone) {
                                          next[hour][ooZone] = (next[hour][ooZone]||[]).filter(m => m.isFoundations || m.isOpenGym || m.isOneOnOne);
                                          next[hour][targetZone] = [...(next[hour][targetZone]||[]), ...displaced];
                                        }
                                      }
                                    }
                                    return next;
                                  });
                                }
                              };
                              return (
                                <div key={si} style={{ marginBottom: si < slots.length-1 ? 6 : 0 }}>
                                  <div style={{ position:"relative", marginBottom:3 }}>
                                    <select value={slot.coach||""} onChange={e => updateSlot({ coach: e.target.value, coachLocked: !!e.target.value })}
                                      style={{ appearance:"none", WebkitAppearance:"none", fontSize:12, fontWeight:700, fontFamily:"inherit", padding:"3px 20px 3px 6px", border:`1px solid ${slot.coach ? coachColor : t.border}`, borderRadius:3, background:t.surface, color: slot.coach ? coachColor : t.muted, cursor:"pointer", outline:"none", width:"100%" }}>
                                      <option value="">Coach...</option>
                                      {Object.keys(COACH_COLORS).map(c => <option key={c} value={c}>{c}</option>)}
                                    </select>
                                    <span style={{ position:"absolute", right:5, top:"50%", transform:"translateY(-50%)", pointerEvents:"none", fontSize:9, color:t.muted }}>▾</span>
                                  </div>
                                  <input value={slot.member||""} onChange={e => updateSlot({ member: e.target.value, memberLocked: false })}
                                    onBlur={() => { if ((slot.member||"").trim()) updateSlot({ memberLocked: true }); }}
                                    onKeyDown={e => { if (e.key==="Enter" && (slot.member||"").trim()) updateSlot({ memberLocked: true }); }}
                                    placeholder="Member name..."
                                    style={{ display:"block", width:"100%", fontSize:13, border:"none", borderBottom:`1px solid ${t.border}`, background:"transparent", color:t.text, fontFamily:"inherit", outline:"none", padding:"2px 0", boxSizing:"border-box" }} />
                                </div>
                              );
                            })}
                          </td>
                        );
                      })}
                    </tr>
                  )}

                  {/* 1-on-1 button row */}
                  <tr className="no-print">
                    <td style={{ background:t.zoneHeader, border:`1px solid ${t.border}`, padding:"6px 8px", verticalAlign:"middle", textAlign:"center" }}>
                      <div style={{ fontSize:9, fontWeight:700, color:t.muted, textTransform:"uppercase", letterSpacing:"0.05em" }}>1on1</div>
                    </td>
                    {cfg.hours.map(hour => {
                      const slots = Array.isArray(oneOnOnes[hour]) ? oneOnOnes[hour] : [];
                      const count = slots.length;
                      const firstComplete = count >= 1 && slots[0].coachLocked && slots[0].memberLocked;
                      const lastComplete = count >= 1 && slots[count-1]?.coachLocked && slots[count-1]?.memberLocked;
                      const label = count === 0 ? "+ 1 on 1" : !firstComplete ? "✕ Remove" : lastComplete ? "+ Add" : "✕ Remove";
                      const bg = count >= 1 ? "#f3e8ff" : t.surface;
                      const col = count >= 1 ? "#6b21a8" : t.muted;
                      return (
                        <td key={hour} style={{ border:`1px solid ${t.border}`, padding:"4px 6px", background:t.surface }}>
                          <button onClick={() => {
                            if (count === 0 || lastComplete) {
                              // Add new slot
                              setOneOnOnes(prev => ({ ...prev, [hour]: [...(Array.isArray(prev[hour]) ? prev[hour] : []), { coach:"", member:"", coachLocked:false, memberLocked:false }] }));
                            } else {
                              // Remove last incomplete slot
                              setOneOnOnes(prev => {
                                const arr = [...(Array.isArray(prev[hour]) ? prev[hour] : [])];
                                arr.pop();
                                return { ...prev, [hour]: arr.length ? arr : undefined };
                              });
                            }
                          }}
                          style={{ width:"100%", fontSize:10, padding:"3px 4px", border:`1px solid ${t.border}`, borderRadius:3, background:bg, color:col, cursor:"pointer", fontFamily:"inherit", fontWeight:500 }}>
                            {label}
                          </button>
                        </td>
                      );
                    })}
                  </tr>
                </tbody>
              </table>
            );
          })()}


        </div>
      )}
    </div>
  );
}
