export const links = [
  {
    name: "Kezdőlap",
    hash: "#kezdolap",
  },
  {
    name: "Szolgáltatásaink",
    hash: "#szolgaltatasok",
  },
  {
    name: "Áraink",
    hash: "#arak",
  },
  {
    name: "Rólunk",
    hash: "#rolunk",
  },
  {
    name: "Vélemények",
    hash: "#velemenyek",
  },
  {
    name: "Terület",
    hash: "#terulet",
  },
  {
    name: "GYIK",
    hash: "#gyik",
  },
  {
    name: "Kapcsolat",
    hash: "#kapcsolat",
  },
] as const;

export const services = [
  {
    title: "Irodaház takarítás",
    icon: "Building2",
    description:
      "Munkahelyünkön máris nagyobb lendülettel állunk neki napi teendőink végzésének, ha egy patyolat tiszta, átlátható tér fogad. Professzionális irodatakarítási szolgáltatásunk garantálja, hogy dolgozói mindig inspiráló, egészséges környezetben végezhessék munkájukat.",
    features: [
      "Napi, heti vagy havi rendszerességű takarítás",
      "Irodai bútorok és felületek portalanítása",
      "Padlók gépi tisztítása és polírozása",
      "Szőnyegtisztítás és karbantartás",
      "Mosdók és közös helyiségek fertőtlenítése",
      "Hulladékgyűjtés és szelektív szemétkezelés",
    ],
    infoTitle: "Milyen gyakran kell takarítani egy irodaházat?",
    infoText:
      "Egy irodaház takarítási gyakorisága olyan tényezőktől függően változhat, mint az épület mérete, a dolgozók száma és az elvégzett munka jellege. Általában a közös helyiségeket és a nagy forgalmú zónákat naponta, míg az egyes irodákat és a ritkábban használt tereket hetente vagy kéthetente lehet takarítani.",
  },
  {
    title: "Társasház takarítás",
    icon: "Home",
    description:
      "A társasház lakóterületünk közös része, ahol szomszédjainkkal osztozunk. Rendszeres takarításunkkal biztosítjuk, hogy a lépcsőház, lift és közös helyiségek mindig tiszták és reprezentatívak maradjanak - növelve ezzel az ingatlan értékét is.",
    features: [
      "Lépcsőházak és folyosók takarítása",
      "Lift és közös helyiségek tisztítása",
      "Bejárati ajtók és üvegfelületek tisztítása",
      "Korlátok és kapaszkodók fertőtlenítése",
      "Postaládák és csengők tisztítása",
      "Téli síkosságmentesítés és hóeltakarítás",
    ],
    infoTitle: "Társasház takarítás jól jön, amikor:",
    infoText:
      "A lépcsőház házi kedvencek nyomait viseli, lakótársak felújítási munkálatai után maradnak nyomok, vagy egyszerűen szeretné, hogy otthona közös terei mindig reprezentatívak és tiszták legyenek.",
  },
  {
    title: "Építkezés, felújítás utáni takarítás",
    icon: "HardHat",
    description:
      "Ha tökéletes végeredményre vágyik, akkor az építkezés, felújítás, festés utáni elcseppenések, ragasztófolyás, por és egyéb szennyeződések szakszerű eltávolítását cégünkre bízza. Ipari gépeinkkel és speciális tisztítószereinkkel garantáljuk a makulátlan eredményt.",
    features: [
      "Építési por és törmelék eltávolítása",
      "Festékfoltok és ragasztómaradványok tisztítása",
      "Ablakok és üvegfelületek alapos tisztítása",
      "Padlók és burkolatok gépi tisztítása",
      "Szaniterek és csaptelepek polírozása",
      "Végleges átadás előtti minőségellenőrzés",
    ],
    infoTitle: "Építés utáni nagytakarítás:",
    infoText:
      "Az építkezések olyan rendetlenséget hagyhatnak maguk után, amely alapos tisztítást igényel. Biztosítjuk, hogy az újonnan épített vagy felújított ingatlanok makulátlanok legyenek, és készen álljanak a beköltözésre.",
  },
  {
    title: "Lakás nagytakarítás",
    icon: "Sparkles",
    description:
      "Időnként mindannyiunknak szüksége van egy alapos nagytakarításra, amit mi professzionális szinten végzünk el. Legyen szó költözés előtti/utáni takarításról vagy egyszerűen egy mélyreható tisztításról - mi segítünk!",
    features: [
      "Konyhai gépek mélytisztítása (sütő, hűtő, mikrohullámú)",
      "Fürdőszoba vízkő- és penészmentesítése",
      "Ablakok és redőnyök tisztítása",
      "Bútorok mögötti és alatti területek takarítása",
      "Csempék és fugák alapos tisztítása",
      "Textilek és kárpitok frissítése",
    ],
    infoTitle: "Mikor érdemes nagytakarítást rendelni?",
    infoText:
      "Költözés előtt/után, évszakváltáskor, nagyobb rendezvények előtt, vagy ha egyszerűen szeretné, hogy otthona újra ragyogjon. Ajánljuk évente legalább 2-4 alkalommal.",
  },
];

// Rólunk szekció statisztikák
export const stats = [
  { value: "2025", label: "Alapítás éve" },
  { value: "10+", label: "Év szakmai tapasztalat" },
  { value: "Szeged", label: "és környéke" },
  { value: "100%", label: "Elégedettségi garancia" },
];

// Rólunk szekció részletes jellemzők
export const aboutFeatures = [
  {
    icon: "Users",
    title: "Tapasztalt csapat",
    description:
      "Minden munkatársunk átesett alapos képzésen és rendelkezik a szükséges szakmai tapasztalattal. Folyamatosan fejlesztjük tudásunkat az új tisztítási technológiák terén.",
  },
  {
    icon: "Leaf",
    title: "Környezetbarát megoldások",
    description:
      "Kizárólag környezetbarát, hipoallergén tisztítószereket használunk, amelyek biztonságosak gyermekek és háziállatok számára is, miközben hatékonyan távolítják el a szennyeződéseket.",
  },
  {
    icon: "Award",
    title: "Minőséggarancia",
    description:
      "Ha nem elégedett munkánkkal, díjmentesen visszamegyünk és újratakarítunk. Számunkra az ügyfél elégedettsége az első - ezt garantáljuk minden megrendelésünknél.",
  },
  {
    icon: "Clock",
    title: "Rugalmas időpontok",
    description:
      "Alkalmazkodunk az Ön időbeosztásához - legyen szó reggeli, esti vagy hétvégi takarításról. Online foglalási rendszerünkkel könnyedén kiválaszthatja az Önnek megfelelő időpontot.",
  },
  {
    icon: "Shield",
    title: "Biztosított szolgáltatás",
    description:
      "Teljes körű felelősségbiztosítással rendelkezünk, így Ön nyugodt lehet. Munkatársaink megbízhatóak és diszkrétek - otthona biztonságban van velünk.",
  },
  {
    icon: "Headphones",
    title: "Ügyfélszolgálat",
    description:
      "Kérdése van? Ügyfélszolgálatunk hétköznap 8:00-18:00 között elérhető. Gyors válaszidővel és személyre szabott megoldásokkal állunk rendelkezésére.",
  },
];
