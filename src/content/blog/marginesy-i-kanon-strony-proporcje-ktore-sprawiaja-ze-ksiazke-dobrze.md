---
title: "Marginesy w książce i kanon strony — proporcje czytelności"
description: "Marginesy w książce i kanon strony to nie strata papieru, lecz konstrukcja, dzięki której tekst dobrze się czyta. Wyjaśniamy proporcje 2:3:4:6, kanon Van de Graafa i poprawkę na oprawę."
date: 2026-07-16
category: "Typografia"
tags:
  ["marginesy w książce kanon strony", "typografia", "skład książki", "kanon van de graafa", "proporcje strony", "marginesy", "tschichold"]
---

Trzymasz w rękach dwie książki tej samej grubości. Pierwsza otwiera się posłusznie i leży płasko, tekst zaczyna się w komfortowej odległości od grzbietu, a kciuk spoczywa na dole strony, nie zasłaniając ani jednego słowa. Druga zamyka się sama, ostatnie litery każdego wersu uciekają w zszywkę, a żeby doczytać linię do końca, trzeba rozgniatać oprawę. Obie mają tę samą treść i ten sam papier. Różni je jedno: rozkład pustej przestrzeni wokół kolumny tekstu. To właśnie o tym są **marginesy w książce i kanon strony** — o tym, że biel na brzegach nie jest marnotrawstwem, lecz elementem konstrukcyjnym, który decyduje o tym, czy lekturę się kontynuuje, czy odkłada.

---

## Margines to nie pusty brzeg, tylko funkcja

Zanim przejdziemy do proporcji, warto rozprawić się z najczęstszym błędem początkujących: przekonaniem, że margines to obszar „do zagospodarowania”, a im więcej tekstu zmieści się na stronie, tym lepiej. Historycznie było odwrotnie. W średniowiecznych manuskryptach i inkunabułach kolumna tekstu zajmowała zwykle **45–50% powierzchni strony** — mimo że pergamin i papier były wtedy dobrami luksusowymi. Dziś, kiedy papier jest tani, zadrukowana powierzchnia w wielu wydaniach przekracza **75%** strony. Kierunek zmian jest więc jasny: marginesy skurczyły się z powodów ekonomicznych, a nie dlatego, że tak jest lepiej dla czytelnika.

Margines pełni co najmniej cztery konkretne zadania:

- **reguluje ciężar wizualny** kolumny tekstu na stronie — pozwala jej „oddychać”;
- **chroni tekst przed obcięciem** przy krojeniu bloku (introligator pracuje z tolerancją 1–3 mm);
- **daje miejsce na trzymanie książki** — zwłaszcza margines zewnętrzny i dolny, żeby palce nie lądowały na literach;
- **kompensuje oprawę** — margines wewnętrzny (przy grzbiecie) musi być na tyle szeroki, by zszycie lub klejenie nie wciągało tekstu w „rynnę”.

Innymi słowy: margines jest jednocześnie estetyczny, funkcjonalny i ekonomiczny. Projektując go, godzisz trzy sprzeczne interesy — koszt papieru, komfort czytania i wygląd. Kanony strony, o których zaraz, to sprawdzone przez stulecia sposoby na rozstrzygnięcie tego sporu. Jeśli dopiero zaczynasz i chcesz zrozumieć, gdzie w całym procesie leży ta decyzja, pomocny będzie przegląd tego, [czym właściwie jest skład i łamanie tekstu](/blog/co-to-jest-sklad-tekstu/).

---

## Kanon strony: sekret, który odkryto trzykrotnie

Najciekawsze w klasycznych proporcjach jest to, że kilku badaczy doszło do nich niezależnie, dzieląc te same stare książki cyrklem i linijką — i za każdym razem otrzymali ten sam wynik.

Pojęcie **kanonu strony** (canons of page construction) spopularyzował w połowie XX wieku Jan Tschichold, opierając się na pracach J. A. Van de Graafa, Raúla Rosariva i Hansa Kaysera. Tschichold pisał wprost: „Choć dziś w dużej mierze zapomniane, opracowano przez stulecia metody i reguły, których nie da się poprawić. Aby powstawały doskonałe książki, trzeba je przywrócić do życia i stosować”.

Trzy nazwiska, które warto znać:

- **Van de Graaf** przeanalizował książki z pięćdziesięciu lat od Biblii Gutenberga (1455) i zrekonstruował konstrukcję geometryczną — „tajny kanon” — którą można narysować bez żadnej jednostki miary, samą linijką. Efekt: niezależnie od formatu strony kolumna tekstu ląduje **1/9 od góry i od wewnątrz**, a marginesy wynoszą 1/9 i 2/9 wymiaru strony.
- **Rosarivo** w 1947 r. badał Biblię 42-wierszową Gutenberga i wykazał, że drukarz dzielił wysokość i szerokość strony na **dziewięć części**. Jego „boska proporcja typograficzna” to nic innego jak liczba 2:3, którą nazywał „liczbą tajną”. Analizę potwierdzili eksperci Muzeum Gutenberga.
- **Tschichold** dołożył do tego jedną decydującą regułę: najlepszy stosunek boków strony to **2:3**, bo mieści się w ciągu Fibonacciego i blisko złotego podziału.

Uwaga terminologiczna, która oszczędza wielu nieporozumień: **„złoty kanon” to nie to samo co złoty podział.** Kanon opiera się na prostych proporcjach całkowitych (2:3), a nie na liczbie 1,618. John Man podał, że strona Biblii Gutenberga ma wymiary 30,7 × 44,5 cm — stosunek ok. 0,69, a więc bliżej Rosarivowego 2:3 (0,667) niż złotego podziału (0,618).

---

## Proporcje, które działają: reguła 2:3:4:6

![Rozkładówka książki z zaznaczoną kolumną tekstu i marginesami w proporcji 2:3:4:6 według kanonu Van de Graafa.](/blog/marginesy-i-kanon-strony-proporcje-ktore-sprawiaja-ze-ksiazke-dobrze/01-ilustracja.webp)

*Kanon strony realnie złożony w LaTeX-u: rozkładówka 2:3 z podziałem na dziewięć części i marginesami wewnętrzny–górny–zewnętrzny–dolny w stosunku 2:3:4:6.*


Cała ta geometria sprowadza się do zestawu reguł, które można zapamiętać i zastosować od ręki. Dla strony w proporcji 2:3 klasyczny kanon daje marginesy w stosunku **2:3:4:6** — odpowiednio wewnętrzny : górny : zewnętrzny : dolny.

Z tej jednej liczby wynika wszystko, co odróżnia stronę harmonijną od przypadkowej:

| Zależność | Reguła | Dlaczego tak |
|---|---|---|
| wewnętrzny vs zewnętrzny | zewnętrzny = **2×** wewnętrzny | na rozkładówce dwie kolumny „schodzą się” w jeden blok nad grzbietem |
| górny vs dolny | dolny = **2×** górny | tekst siedzi w górnej części strony, gdzie naturalnie spoczywa wzrok |
| kolumna vs strona | ta sama proporcja | blok tekstu jest miniaturą strony — echo formatu |
| wysokość kolumny | równa **szerokości strony** | najbardziej zaskakująca i najbardziej „domykająca” własność kanonu |

Ta ostatnia zależność — wysokość kolumny tekstu równa szerokości strony — jest tym elementem, który u Tschicholda budził największy zachwyt. Wygląda niepozornie, a jednak to ona sprawia, że proporcje „grają”. Praktyczny efekt reguły 2:3:4:6 opisał już George Bernard Shaw: górny margines ma być **mniejszy** od dolnego, ale drukarze uparcie robią go za dużym. Paul Renner tłumaczył szerszy dół prozaicznie — „ponieważ trzymamy książkę za dolny margines, kiedy bierzemy ją do ręki i czytamy”.

Jeśli chcesz szybko wyliczyć marginesy bez rysowania przekątnych, wystarczy tzw. **system 2-3-4-6**: przyjmij dowolną jednostkę, a potem pomnóż ją przez 2, 3, 4 i 6, żeby otrzymać kolejno margines wewnętrzny, górny, zewnętrzny i dolny. To ta sama harmonia, tylko liczona arytmetycznie zamiast geometrycznie.

---

## Gdzie kanon spotyka introligatora: poprawka na oprawę

Tu zaczyna się różnica między teorią a książką, którą naprawdę da się czytać. Klasyczny kanon każe robić margines wewnętrzny **węższy** od zewnętrznego (2 do 4). Introligatorzy mówią co innego: margines przy grzbiecie powinien być równy zewnętrznemu albo większy. Kto ma rację?

Obie strony — bo mówią o dwóch różnych rzeczach.

Kanon opisuje **proporcje wizualne** na płasko rozłożonej rozkładówce. Fizyczna książka nigdy nie leży idealnie płasko: część wewnętrznego marginesu znika w oprawie, a przy klejeniu (oprawa miękka, klejona na gorąco) grzbiet bywa sztywny i „chce się zamykać”. Do tego dochodzi **creep** — przy oprawie zeszytowej kartki w środku składki wysuwają się na zewnątrz o nawet połowę grubości bloku, więc strony wewnętrzne mają obcięty margines węższy niż zewnętrzne.

Dlatego do wartości z kanonu dodaje się **poprawkę na oprawę** (w KOMA-Script nazywaną BCOR, binding correction). Kluczowa własność klasycznej konstrukcji jest taka, że po dodaniu tej poprawki **proporcje pozostają zachowane** — powiększasz tylko rynnę, a reszta układu się nie rozjeżdża. Wielkość poprawki zależy od dwóch rzeczy: rodzaju oprawy i liczby stron. Im grubszy blok i im sztywniejsze klejenie, tym więcej trzeba dodać.

Praktyczne punkty wyjścia dla typowej książki klejonej w formacie **6 × 9 cala (ok. 152 × 229 mm)**:

| Margines | Wartość wyjściowa | Uwaga |
|---|---|---|
| wewnętrzny (grzbiet) | 20–25 mm | im więcej stron, tym bliżej 25 mm i wyżej |
| zewnętrzny | ~15–20 mm | drukarnie często wymagają min. ok. 10 mm od krawędzi |
| górny | ~12–15 mm | plus zapas na żywą paginę, jeśli jest |
| dolny | ~18–22 mm | miejsce na numer strony i na palce |

To wartości orientacyjne, nie dogmat — realny układ dostraja się do formatu, stopnia pisma i liczby stron. Zasada nadrzędna brzmi: **hojny margines wewnętrzny czyni książkę klejoną znacznie łatwiejszą w czytaniu**, choćby na ekranie wyglądał na zbyt szeroki. Zanim zatwierdzisz układ, warto poprosić drukarnię o „dummy” — makietę z pustych kartek na docelowym papierze — i sprawdzić, jak blok naprawdę się otwiera. Więcej o tym, jak przygotować plik pod kątem spadów i krojenia, znajdziesz w tekście o [PDF-ie gotowym do drukarni](/blog/pdf-do-drukarni/).

---

## Marginesy to połowa równania — druga to długość wiersza

Najpiękniej wyliczone marginesy nie uratują strony, jeśli sama kolumna tekstu jest źle zwymiarowana. Bo margines i szerokość kolumny to naczynia połączone: to, co zostaje na brzegach, jest po prostu resztą po ustaleniu, ile tekstu mieści się w wierszu.

A długość wiersza ma twarde, mierzalne granice czytelności. Robert Bringhurst podaje, że w składzie jednołamowym idealny wiersz liczy **66 znaków**, z dopuszczalnym zakresem od 45 do 75. Emil Ruder mówił o 50–60 literach, a Josef Müller-Brockmann o średnio 10 słowach w wierszu długiego tekstu. Powyżej tych wartości oko męczy się w drodze powrotnej do początku następnej linii; poniżej — musi przeskakiwać zbyt często.

To dlatego nie da się dobrać marginesów „w oderwaniu”. Za wąskie marginesy oznaczają zwykle za długi wiersz i mozolną lekturę — dokładnie przypadek akademickiego tomu, w którym wiersze sięgają 85 znaków, a wąska kolumna zamienia się w klaustrofobiczną ścianę tekstu. Za szerokie marginesy przy dużym stopniu pisma dają wiersz za krótki, w którym wzrok skacze z boku na bok. Dobry skład to znalezienie takiej trójki — **stopień pisma, szerokość kolumny, interlinia** — która mieści się w oknie komfortowej czytelności, a dopiero potem rozłożenie reszty strony według kanonu.

Warto też pamiętać, że sam blok tekstu musi być „czysty” w środku: równomierny szary ton bez rzek, bez [wdów, sierot i bękartów](/blog/typografia-polska-wdowy-sieroty-i-bekarty-grzechy-skladu-i-jak-ich/), z poprawnym przenoszeniem i mikrotypografią. Marginesy budują ramę; to, co dzieje się w środku ramy, decyduje o reszcie — a o tych detalach piszemy osobno w tekście o [mikrotypografii](/blog/mikrotypografia-detale-ktore-odrozniaja-amatorski-sklad-od/).

---

## Kanon jako punkt wyjścia, nie kaftan bezpieczeństwa

Byłoby nieuczciwe twierdzić, że każda dobra książka trzyma się reguły 2:3:4:6. Sam Tschichold przyznawał, że współcześni wydawcy w większości ignorują te reguły — najczęściej z powodów finansowych — a książki i tak potrafią wyglądać dobrze. Paul Renner ostrzegał, żeby nie traktować proporcji marginesów jak doktryny: szerokie marginesy w książce kieszonkowej byłyby przecież bez sensu. Doświadczeni projektanci robią więc tak: **zaczynają od kanonu, a potem świadomie od niego odchodzą** — pod kątem oprawy, formatu i własnego wyczucia.

Format też ma znaczenie. Klasyczny kanon zakłada stronę 2:3, tymczasem znormalizowane formaty ISO (A4, A5) mają proporcję 1:√2 (ok. 1,41). Da się na nich pracować — pakiety klas w LaTeX-u dzielą wtedy stronę na dwanaście części zamiast dziewięciu, żeby zejść z nieco za dużymi marginesami — ale trzeba świadomie zdecydować, czy trzymamy się proporcji medytacyjnej, czy praktycznej normy papieru.

W naszej pracowni proporcje marginesów zwykle **nie są ustawiane ręcznie po omacku**, tylko wyliczane parametrycznie: przyjmujemy proporcję strony, jednostkę marginesu i poprawkę na oprawę zależną od liczby stron, a układ liczy resztę tak, by echo formatu i kolumny zostało zachowane od pierwszej do ostatniej strony. To metoda — narzędziem bywa u nas LaTeX z klasami spod znaku KOMA-Script, które jako jedyne pozwalają wygodnie dzielić stronę siatką i sterować poprawką BCOR — ale intencja jest zawsze wynikowa: **spójny, wydrukowany blok książki**, a nie efektowny diagram. Jeśli chcesz zobaczyć, jak ta decyzja wpina się w cały tok pracy nad publikacją, prowadzi przez to poradnik o [składzie książki krok po kroku](/blog/sklad-ksiazki-krok-po-kroku-od-manuskryptu-do-gotowego-pliku-do-druku/), a przy samodzielnym wydawaniu — o tym, [co zlecić specjaliście](/blog/self-publishing-jak-samodzielnie-wydac-ksiazke-i-co-zlecic/).

Ostatecznie marginesy w książce i kanon strony sprowadzają się do jednego, bardzo ludzkiego pytania: czy komuś będzie się to wygodnie czytało przez trzysta stron. Reguła 2:3:4:6 nie jest magią — jest skróconym zapisem stuleci obserwacji, gdzie oko odpoczywa, gdzie ląduje kciuk i gdzie znika tekst w oprawie. Można ją złamać, i czasem trzeba. Ale żeby świadomie złamać regułę, najpierw trzeba wiedzieć, że istnieje.