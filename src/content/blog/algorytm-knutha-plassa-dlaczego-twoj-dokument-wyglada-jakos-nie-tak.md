---
title: "Algorytm Knutha-Plassa: dlaczego dokument wygląda źle"
description: "Algorytm Knutha-Plassa to metoda, która łamie akapit jako całość, a nie linijka po linijce. Wyjaśniamy, dlaczego dzięki niej tekst z LaTeX-a i InDesigna wygląda równo, a dokument z Worda „jakoś nie tak”."
date: 2026-08-03
category: "LaTeX"
tags:
  ["algorytm knutha-plassa", "latex", "łamanie tekstu", "justowanie", "typografia", "skład tekstu", "dzielenie wyrazów"]
---

Otwierasz PDF, który dopiero co wyszedł z Worda, i coś Cię uwiera — choć nie umiesz nazwać co. Tekst jest wyjustowany do obu marginesów, kropki na miejscu, żadnej literówki. A jednak akapit „oddycha” nierówno: jedna linijka ściśnięta jak zbita szufelka, kolejna rozciągnięta tak, że między wyrazami dałoby się postawić monetę. Gdzieniegdzie przez środek kolumny biegnie jasna smuga — rzeka białych przerw łącząca się z linijki na linijkę. Nie potrafisz wskazać błędu, ale wiesz, że „coś jest nie tak”. Winowajcą nie jest czcionka ani margines. Winowajcą jest sposób, w jaki program zdecydował, gdzie złamać każdą linię. I właśnie tę decyzję **algorytm Knutha-Plassa** podejmuje zupełnie inaczej niż Twój edytor tekstu.

---

## Dwie filozofie łamania: zachłanna kontra całościowa

![Porównanie tego samego akapitu złożonego dwoma metodami łamania linii — zachłanną z nierównymi, rozpychanymi spacjami oraz całościową z równomiernymi odstępami.](/blog/algorytm-knutha-plassa-dlaczego-twoj-dokument-wyglada-jakos-nie-tak/01-ilustracja.webp)

*Ten sam akapit realnie złożony w LaTeX-u dwoma sposobami: po lewej łamanie zachłanne (bez dzielenia wyrazów) rozpycha spacje nierówno, po prawej algorytm Knutha-Plassa rozkłada odstępy równo.*


Wyobraź sobie, że układasz wyrazy w wąskiej kolumnie. Najprostsza metoda to ta, którą stosuje maszynistka: dokładasz słowa do bieżącej linii, aż kolejne się nie mieści, wtedy łamiesz i zaczynasz od nowa, bez oglądania się na to, co będzie dalej. Knuth nazywa to podejściem „zachłannym” (*greedy*) — decyzja jest podejmowana raz, lokalnie, i nigdy nie podlega rewizji. Tak łamią tekst Microsoft Word oraz — do niedawna wyłącznie — wszystkie przeglądarki internetowe. Jest szybko, prosto i stabilnie. Problem w tym, że każda decyzja o złamaniu wpływa na wszystkie następne linie: świetny podział pierwszej linijki może zepsuć trzy kolejne.

Donald Knuth i Michael Plass w pracy *Breaking Paragraphs into Lines* z 1981 roku (opublikowanej w „Software: Practice and Experience”, tom 11) zaproponowali coś przeciwnego. Zamiast optymalizować każdą linię osobno, ich metoda — nazywana **total-fit** — patrzy na **cały akapit naraz**. Wygląd danej linii może zostać świadomie pogorszony, jeśli dzięki temu dwie następne wyjdą znacznie lepiej. To fundamentalna różnica: łamanie zachłanne minimalizuje błąd jednej linii, algorytm Knutha-Plassa minimalizuje sumę błędów całego akapitu.

Ta różnica nie jest akademicka. To dokładnie ona sprawia, że skład książki z LaTeX-a lub InDesigna wygląda „drukarsko”, a wydruk z domyślnych ustawień edytora — amatorsko. Jeśli chcesz zrozumieć, dlaczego w ogóle warto justować tekst i kiedy lepiej tego nie robić, opisaliśmy to osobno w tekście o [justowaniu kontra wyrównaniu do lewej](/blog/justowanie-czy-wyrownanie-do-lewej-co-wybrac-i-dlaczego/).

---

## Trzy klocki: pudełka, klej i kary

Żeby maszyna mogła „ocenić” akapit matematycznie, Knuth i Plass rozłożyli tekst na trzy proste elementy. To one są całym alfabetem algorytmu.

| Element | Co reprezentuje | Kluczowe parametry |
|---|---|---|
| **Box** (pudełko) | Litera, słowo, wzór, rysunek — cokolwiek o stałej szerokości | tylko szerokość |
| **Glue** (klej) | Spacja między wyrazami; elastyczna | szerokość normalna, rozciągliwość, ściśliwość |
| **Penalty** (kara) | Miejsce możliwego złamania, np. punkt dzielenia wyrazu | koszt złamania, szerokość (np. dywizu) |

Algorytm nie zagląda do środka pudełka — nie obchodzi go, czy to litera „a”, czy skomplikowany wzór. Widzi wyłącznie szerokości. Sercem całej mechaniki jest **klej**: spacja, która ma wymiar idealny, ale potrafi się rozciągnąć lub skurczyć w zadanych granicach. Kiedy linia jest za krótka, algorytm rozciąga klej proporcjonalnie do jego rozciągliwości; kiedy za długa — ściska go, korzystając ze ściśliwości. Cały akapit to po prostu ciąg pudełek, klejów i kar — a łamanie polega na wybraniu, w których miejscach kleju lub kary przeciąć tekst na linie.

Kara to z kolei sposób, w jaki do gry wchodzi dzielenie wyrazów. Każdy dopuszczalny punkt przeniesienia to kara z określonym kosztem i szerokością dywizu, który trzeba dołożyć. Dzięki temu system może przenieść słowo — ale tylko wtedy, gdy „opłaci się” to bardziej niż rozstrzelona spacjami linia. To także tu ukrywa się reguła, która nie pozwala zakończyć dywizem dwóch linii z rzędu. W polszczyźnie to szczególnie wrażliwy punkt, bo reguły przenoszenia są nieoczywiste — pisaliśmy o tym w tekście o [pułapkach dzielenia wyrazów, których nie widzi Word](/blog/dzielenie-wyrazow-w-jezyku-polskim-pulapki-ktorych-nie-widzi-word/).

---

## Badness, demerits i dlaczego wszystko jest podnoszone do kwadratu

Skoro tekst to zbiór klocków, potrzebna jest liczbowa miara „brzydoty”. Knuth wprowadził dwa pojęcia.

Pierwsze to **adjustment ratio** — współczynnik dopasowania linii: nadmiarowa przestrzeń podzielona przez sumę rozciągliwości wszystkich klejów w linii (albo przez ściśliwość, jeśli linia jest za długa). Na jego podstawie liczy się **badness** — „niegrzeczność” linii, rosnącą funkcję współczynnika dopasowania. Knuth wybrał funkcję opartą na sześcianie współczynnika (proporcjonalną do |ratio|³) i szczerze przyznał, że kształt tej funkcji jest arbitralny — „daje dobre wyniki”.

Drugie pojęcie to **demerits** — „punkty ujemne” linii, które łączą badness z karą za dzielenie wyrazu i za sąsiadujące dywizy. I tu pojawia się słynny szczegół: w formule z TeX-a demerity to `(l + b)² + p²`, gdzie `l` to stała kara linii, `b` to badness, a `p` to kara punktu złamania. **Badness jest podnoszone do kwadratu.** Po co?

Odpowiedź jest zaskakująco praktyczna. Minimalizacja sumy kwadratów zamiast zwykłej sumy sprawia, że algorytm dąży do **równomierności**. Rozważmy dwie linie o niegrzeczności (2, 2) i (1, 3). Przy zwykłym sumowaniu są równe (2+2 = 1+3). Ale suma kwadratów faworyzuje parę wyrównaną: 2²+2² = 8 jest mniejsze niż 1²+3² = 10. Bardziej życiowo: dwie umiarkowanie luźne linie (20, 20) wyglądają lepiej niż para (0, 40), czyli jedna idealna obok jednej fatalnej. Kwadrat karze duże odchylenia nieproporcjonalnie mocno — różnica demeritów między badness 40 a 50 to aż 60²−50² = 1100 punktów. Efekt: algorytm robi wszystko, by uniknąć pojedynczej bardzo złej linii, a gdy jedna zła linia jest **nieunikniona**, i tak optymalizuje pozostałe. To właśnie ta „wtórna optymalizacja” daje charakterystyczną, spokojną równość szarej plamy tekstu.

---

## Skąd bierze się szybkość: programowanie dynamiczne

W tym miejscu pojawia się naturalna wątpliwość. Akapit z `n` możliwymi punktami złamania ma 2ⁿ kombinacji — sprawdzenie wszystkich byłoby niewykonalne nawet dla dzisiejszych maszyn. Knuth i Plass zauważyli jednak, że problem ma szczególną strukturę: każda linia składa się z **ciągłego** fragmentu tekstu. To pozwala potraktować całość jako szukanie **najkrótszej ścieżki w grafie**, w którym węzły to możliwe punkty złamania, a krawędzie mają wagę równą demeritom danej linii. Rozwiązuje się to programowaniem dynamicznym (spokrewnionym z algorytmem Dijkstry), bez kosztownego cofania się i próbowania od nowa.

Zysk jest ogromny. Zamiast wykładniczej liczby prób algorytm buduje optymalne rozwiązanie z optymalnych rozwiązań fragmentów akapitu. Naiwna implementacja jest kwadratowa — O(n²) — ale przy rozsądnym progu odrzucania beznadziejnych kandydatów zbliża się do liniowej. Knuth podsumował to zwięźle: optymalne punkty złamania da się znaleźć w praktyce mniej więcej dwukrotnym nakładem obliczeń w stosunku do metody zachłannej, a czasem nawet szybciej — bo rzadsze dzielenie wyrazów oszczędza pracy. Innymi słowy: jakość składu nie wymaga tu poświęcenia wydajności.

---

## Widać to gołym okiem — i da się zmierzyć

Różnica nie jest subtelnością dla purystów. Klasyczne porównania tego samego tekstu złożonego w Wordzie, InDesignie i TeX-u pokazują, że w wersji TeX-owej **odchylenie standardowe odstępów międzywyrazowych** (miara nierówności spacji) jest wyraźnie niższe — spacje są konsekwentnie bliskie wartości idealnej. Word bez włączonego dzielenia wyrazów jest tu najsłabszy: brak przenoszenia zmusza go do rozpychania linii szerokimi spacjami. Historyczne badania to potwierdzają — Duncan już dekady temu wykazał, że u „szanowanego drukarza” blisko 5% linii składanych ręcznie było zbyt luźnych, ze spacjami przekraczającymi 10 jednostek na firet. Dobry algorytm schodzi z tym problemem znacznie niżej.

Warto trzymać w głowie, że **algorytm Knutha-Plassa to tylko fundament**. Na jego wierzchu pracują dalsze mechanizmy: mikrotypografia (pakiet `microtype`), która pozwala odrobinę zwężać glify i wysuwać znaki interpunkcyjne poza margines, oraz reguły kontrolujące wdowy i sieroty. O tych detalach, które oddzielają skład profesjonalny od amatorskiego, piszemy w tekstach o [mikrotypografii](/blog/mikrotypografia-detale-ktore-odrozniaja-amatorski-sklad-od/) oraz o [wdowach, sierotach i bękartach](/blog/typografia-polska-wdowy-sieroty-i-bekarty-grzechy-skladu-i-jak-ich/). Sam Knuth-Plass da równe linie — ale to dopiero warstwa startowa dobrego składu.

---

## Czego algorytm nie potrafi: rzeki i łamanie stron

Byłoby nieuczciwe przedstawiać tę metodę jako wszechmocną. Ma dwa znane ograniczenia, o których warto wiedzieć, oceniając gotowy PDF.

Pierwsze to **rzeki** — pionowe smugi bieli powstające, gdy spacje układają się jedna nad drugą w kolejnych linijkach. James Felici w *The Complete Manual of Typography* pisał, że „oprogramowanie nie jest jeszcze dość mądre”, by je wykrywać, a tym bardziej usuwać. Powód jest strukturalny: kara za rzekę byłaby „zbyt globalna” dla grafu najkrótszej ścieżki, na którym opiera się algorytm. Wykrywanie rzek bywa realizowane (np. w pakiecie `impnattypo` przez skrypty w Lua), ale ich automatyczne **eliminowanie** pozostaje kosztowne — eksperymenty potrafiły trwać ponad sześć godzin na jeden akapit. W praktyce rzekę najczęściej rozbraja się ręcznie, drobną korektą tekstu.

Drugie ograniczenie to **łamanie stron w pionie**. Wbrew intuicji TeX **nie** optymalizuje globalnie podziału na strony tak, jak robi to z liniami w akapicie. Michael Plass w swojej rozprawie wykazał, że problem optymalnej paginacji potrafi być **NP-zupełny** — a przy pamięci komputerów z lat 70. trzymanie kilku stron naraz było nierealne. Dlatego strony są łamane „lokalnie”: TeX wybiera każdy podział strony najlepiej jak potrafi w danym momencie, bez oglądania się na następny. Wyrafinowane systemy jak Lout rozszerzyły ideę Knutha na łamanie akapitów przez strony, ale to wyjątki. Dla składu książki oznacza to prostą konsekwencję: pionowe rozłożenie kolumny, odstępy przed śródtytułami czy pozycje przypisów wciąż wymagają uwagi człowieka — o czym warto pamiętać, oddając do składu [książkę](/uslugi/ksiazki/) czy [pracę naukową](/uslugi/prace-naukowe/).

---

## Gdzie ten algorytm faktycznie pracuje

Choć nazwa brzmi ezoterycznie, spotykasz jego efekty codziennie. **LaTeX** używa go w domyślnym budowaniu akapitów — i to właśnie stąd bierze się „ten wygląd” dokumentów naukowych. **Adobe InDesign** implementuje go pod nazwą Adobe Paragraph Composer; to on odpowiada za składność książek wychodzących z profesjonalnych wydawnictw. Ciekawostka: nawet Internet Explorer stosował podejście zbliżone do Knutha-Plassa przy justowaniu (`text-justify: newspaper`), a niezależne implementacje dawały niemal identyczny wynik.

Sieć długo pozostawała typograficzną pustynią. Przeglądarki zgodnie wybrały łamanie zachłanne — szybkie, ale ubogie — i przez lata jedyną drogą do lepszego efektu były karkołomne sztuczki: biblioteki JavaScript przeliczające łamania w locie albo wręcz **prekalkulacja** łamań dla każdej możliwej szerokości ekranu, zakodowana w CSS i pokazywana media queries. To działało, ale było kruche i wolne. Dopiero standard CSS Text Level 4 wprowadza właściwość `text-wrap: pretty`, która ma zlecić przeglądarce lepszy algorytm — choć jej dostępność wciąż raczkuje, a pierwsze implementacje poprawiają jedynie kilka ostatnich linii akapitu, nie cały układ. Powstają też wtyczki (np. do Obsidiana), które nakładają optymalne łamanie Knutha-Plassa na widok czytania.

| System / narzędzie | Metoda łamania | Efekt |
|---|---|---|
| LaTeX / TeX | total-fit (Knuth-Plass) | równe spacje, rzadkie dzielenia |
| Adobe InDesign | Paragraph Composer (Knuth-Plass) | jakość drukarska |
| Microsoft Word | zachłanna, linia po linii | zmienne spacje, „rzeki” |
| Przeglądarki (domyślnie) | zachłanna (greedy) | najsłabszy justunek |

---

Jeśli więc kiedyś wpatrywałeś się w wyjustowany dokument z poczuciem, że „coś jest nie tak”, teraz masz nazwę dla tej intuicji. To nie kwestia gustu ani czcionki — to matematyczna decyzja o tym, czy program potraktował Twój akapit jako całość, czy jako ciąg niezależnych linijek podejmowanych w pośpiechu. Algorytm Knutha-Plassa nie jest magią; to starannie zdefiniowany problem najkrótszej ścieżki, rozwiązany programowaniem dynamicznym i domknięty arbitralnymi, ale sprawdzonymi w praktyce formułami na niegrzeczność linii. Różnica, którą widzisz gołym okiem, ma swoje źródło w tym, że ktoś — czterdzieści lat temu — postanowił optymalizować całość zamiast fragmentu. I dokładnie ta zasada odróżnia dokument, który po prostu „się zmieścił”, od tekstu, który czyta się bez śladu wysiłku. Jeśli chcesz zobaczyć, jak to samo źródło wypada w bezpośrednim starciu narzędzi, warto sięgnąć po porównania [LaTeX-a z Wordem](/blog/latex-vs-word/) oraz [LaTeX-a z InDesignem](/blog/latex-vs-indesign-dwa-swiaty-profesjonalnego-dtp/).