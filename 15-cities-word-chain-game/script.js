"use strict";

let field = document.querySelector('#field');
let message = document.querySelector('#message');
let mode = document.querySelector('#mode-select input:checked');

let cities = [];
let allCities = [
  "Alchevsk", "Alupka", "Alushta", "Amvrosiivka", "Ananiev", "Andrushivka", "Antratsyt", "Apostolove", "Armiansk", "Artsyz", "Avdiivka",
  "Bakhmach", "Bakhmut", "Balakliia", "Balta", "Bar", "Baranivka", "Barvinkove", "Baryshivka", "Bashtanka", "Baturyn", "Berdychiv", "Berdiansk", "Berehove", "Berestechko", "Berezan", "Berezivka", "Berezne", "Berezyne", "Bershad", "Biliahivka", "Bilohirsk", "Bilopilliia", "Blahovishchenske", "Bobrynets", "Bobrovytsia", "Bohodukhiv", "Bohuslav", "Boroshany", "Borshchiv", "Boryslav", "Boryspil", "Boyarka", "Bratske", "Brianka", "Brody", "Brovari", "Bryn", "Bucha", "Buchach", "Burshtyn", "Buryan", "Busk",
  "Cherkasy", "Chernihiv", "Chernivtsi", "Chodoriv", "Chop", "Chornyiostriv", "Chorol", "Chortkiv", "Chudniv", "Chuhuiv", "Chust", "Chyhyryn",
  "Debaltseve", "Derhachi", "Derkhan", "Derzhansk", "Dnipro", "Dniprorudne", "Dobromyl", "Dobropilliia", "Dokuchaievsk", "Dolyna", "Dolynska", "Donetsk", "Drohobych", "Druzhkivka", "Dubliany", "Dubno", "Dubrovytsia", "Dunaivtsi", "Dymytrov",
  "Enerhodar", "Fastiv", "Feodosia", "Filatovka", "Foros", "Haivoron", "Hadiach", "Haliatyn", "Halych", "Henychesk", "Hirske", "Horlivka", "Horodenka", "Horodnia", "Horodok", "Horodyshche", "Hostomel",
  "Ichnia", "Ihorivka", "Illintsi", "Ilovaisk", "Inhulets", "Inkerman", "Irpin", "Irshava", "Ishun", "Izmail", "Izvaryne", "Izyaslav", "Izyum",
  "Kakhovka", "Kalinivka", "Kalmiuske", "Kalush", "Kamianske", "Kaniv", "Karlivka", "Karpatske", "Katerynivka", "Keliantsi", "Kerch", "Kharkiv", "Khartsyzk", "Kherson", "Khmelnytskyi", "Khmilnyk", "Khotyn", "Khristynivka", "Khust", "Kilia", "Kirowske", "Kitsman", "Kivertsi", "Klevan", "Kliuchove", "Kobeliaky", "Kodyma", "Kolomyia", "Komarno", "Konotop", "Korosten", "Korostyshiv", "Kosiv", "Kostiantynivka", "Kostiantynivsk", "Kotiuzhany", "Kovel", "Kovylne", "Kramatorsk", "Krasnoarmiisk", "Krasnohrad", "Krasnohorivka", "Krasnodon", "Krasnoperekopsk", "Kremenchuk", "Kremenets", "Kreminna", "Krolevets", "Kropyvnytskyi", "Krynychky", "Kupiansk", "Kurakhove", "Kyiv", "Kylyia", "Kypuche", "Kyrylivka",
  "Ladyzhyn", "Laisyn", "Lankivtsi", "Lanivtsi", "Lebedyn", "Liubashivka", "Liuboml", "Liubotyn", "Lochvytsia", "Lozova", "Luhansk", "Lutsk", "Lutuhyne", "Lvig", "Lviv", "Lyman", "Lysychansk",
  "Mahiiv", "Makiivka", "Malyn", "Marhanets", "Mariupol", "Marinka", "Melitopol", "Mena", "Merefa", "Miusynsk", "Molochansk", "Molodohvardiysk", "Monastyryshche", "Monastyryska", "Morshyn", "Mospyne", "Mukachevo", "Mykolaiv", "Mykolaivka", "Myrhorod", "Myrnohrad", "Myronivka",
  "Nadvirna", "Nemyriv", "Netishyn", "Nikopol", "Nizhyn", "Nosivka", "Novoazovsk", "Novodnistrovsk", "Novodruzhesk", "Novohrodivka", "Novomyrhorod", "Novomoskovsk", "Novoselytsia", "Novovolynsk",
  "Obukhiv", "Ochakov", "Odesa", "Okhtyrka", "Oleksandriia", "Oleksandrivsk", "Oleshky", "Olevsk", "Olhynka", "Onufrirvka", "Orynyn", "Oster", "Ostroh", "Ovruch",
  "Pavlohrad", "Perechin", "Pereiaslav", "Peremyshliany", "Pereshchepyne", "Perevalsk", "Pervomaisk", "Pervomaiskyi", "Petrovo", "Petrovske", "Piatykhatky", "Pidhaitsi", "Pidhorodne", "Pivdenne", "Pochayiv", "Podilsk", "Pology", "Polonne", "Poltava", "Popasna", "Pryluky", "Prymorsk", "Prypiat", "Pryshib", "Pustomyty", "Putivl", "Pyriatyn",
  "Radomyshl", "Radyvyliv", "Rakhiv", "Reni", "Reshetylivka", "Rivne", "Rodynske", "Rohatyn", "Romny", "Rovenky", "Rozdilna", "Rozhyshche", "Rubizhne", "Rudky", "Rzhyshchiv",
  "Saky", "Sambir", "Sarny", "Selydove", "Semenivka", "Seredynabuda", "Sevastopol", "Severodonetsk", "Severynivka", "Shakhtarsk", "Sharhorod", "Shchastia", "Shepetivka", "Shostka", "Shpola", "Shumske", "Simferopol", "Siversk", "Skadovsk", "Skalat", "Skole", "Skvyra", "Slavuta", "Slavutych", "Sloviansk", "Smila", "Sniatyn", "Snihurivka", "Snizhne", "Sokal", "Sokyriany", "Soledar", "Sorokyne", "Sosnivka", "Sosnytsia", "Stakhanov", "Starobeshieve", "Starobilsk", "Starokostiantyniv", "Stebnyk", "Storožynets", "Stryi", "Sudak", "Sukhodilsk", "Sumy", "Svaliava", "Svatove", "Sviatohirsk", "Svitlodarsk", "Svitlovodsk",
  "Talne", "Tarashcha", "Tatarbunary", "Teplodar", "Teplohirsk", "Terebovlia", "Ternivka", "Ternopil", "Tetiiv", "Tiachiv", "Tlumach", "Tokmak", "Toretsk", "Trostianets", "Truskavets", "Tulchyn", "Turchyn", "Turka", "Tysmenytsia",
  "Uhniv", "Ukrainka", "Ukrainsk", "Uman", "Ustynivka", "Uzhhorod",
  "Vakhnovka", "Valky", "Varash", "Vasylivka", "Vasylkiv", "Vatutine", "Verkhnodniprovsk", "Verkhnye", "Vilniansk", "Vinnytsia", "Volodymyr", "Volodymyrets", "Volnovakha", "Vovchansk", "Voznesensk", "Vorozhba", "Vuhledar", "Vuhlehirsk", "Vylkove", "Vynohradiv", "Vyshhorod", "Vyshneve", "Vyshkove",
  "Yahotyn", "Yalta", "Yampil", "Yaremche", "Yasynuvata", "Yenakiieve", "Yevpatoria", "Yorzhik", "Yuzhne", "Yuzhnoukrainsk",
  "Zabolotiv", "Zaporizhzhia", "Zastavna", "Zatyshshia", "Zbarazh", "Zboriv", "Zdolbuniv", "Zelenodolsk", "Zhavka", "Zhbyr", "Zhmerynka", "Zhytomyr", "Zhuravka", "Zievka", "Zinkiv", "Ziz", "Zmiyiv", "Znamianka", "Zolochev", "Zolochiv", "Zolotonosha", "Zorynsk", "Zuhres", "Zviahel"
];

function citiesCheck(target) {
    if (cities.length > 0) {
        let last = cities[cities.length - 1];
        let lastLetter = last[last.length - 1];

        if (cities.includes(target)) {
            message.textContent = 'This city already used!'
            return false;
        }

        if (target[0].toLowerCase() === lastLetter.toLowerCase()) {
            message.textContent = `Last word: ${target}`
            cities.push(target)
            return true;

        } else {
            message.textContent = `Incorrect city`;
            return false;
        }
    } else {
        message.textContent = `First word: ${target}`;
        cities.push(target);
        return true;
    }
}

function playerTurn(inputTarget) {
    let input = inputTarget.value[0].toUpperCase() + inputTarget.value.slice(1);
    
    if (mode.value === 'computer') {
        if (!allCities.includes(input)) {
            message.textContent = 'Computer doesnt have this city';
            return;
        }
        
        if (citiesCheck(input)) {
            computerTurn();
            console.log(cities)
        } else {
            return;
        }
    } else {
        citiesCheck(input)
    }

    inputTarget.value = '';
}

function computerTurn() {
    let last = cities[cities.length - 1];
    let lastLetter = last[last.length - 1];

    for (let city of allCities) {
        if (city[0].toLowerCase() === lastLetter && !cities.includes(city)) {
            citiesCheck(city);
            return;
        }
    }

    message.textContent = 'No more available cities'
}

field.addEventListener('keypress', function(event) {
    if(event.key !== 'Enter') return;
    if(field.value === '') return;
    playerTurn(this)
});