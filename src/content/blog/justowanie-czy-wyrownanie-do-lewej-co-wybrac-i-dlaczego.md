---
title: "Justowanie tekstu czy wyrównanie do lewej — co wybrać"
description: "Justowanie tekstu wygląda porządnie, ale bywa pułapką. Wyjaśniamy, kiedy justować, kiedy wyrównać do lewej i dlaczego o wyniku decyduje nie sam przycisk, lecz odstępy."
date: 2026-07-19
category: "Typografia"
tags:
  ["justowanie tekstu", "wyrównanie do lewej", "typografia", "skład tekstu", "dzielenie wyrazów", "czytelność", "latex"]
---

Autor przysyła plik do składu z jedną prośbą w mailu: „Ma być wyjustowane, jak w książce". Otwierasz dokument — rzeczywiście, obie krawędzie tekstu równe jak od linijki. Tyle że między słowami zieją dziury, a w trzech miejscach z góry na dół biegnie jasna smuga, jakby ktoś przeciągnął po stronie pędzlem z rozcieńczalnikiem. To jest właśnie moment, w którym trzeba zadać pytanie, które ten artykuł ma rozstrzygnąć: justowanie tekstu to decyzja estetyczna czy techniczna? I czy „jak w książce" naprawdę znaczy „wyjustowane"?

---

## Co właściwie robi justowanie

Wyrównanie do lewej (ang. *flush left*, *ragged right*) zostawia lewą krawędź prostą, a prawą — poszarpaną, bo każdy wiersz kończy się tam, gdzie kończy się ostatnie słowo, które się zmieściło. Odstępy między wyrazami są wtedy stałe: takie same w każdym wierszu.

Justowanie (ang. *justified*, *full justification*) wyrównuje **obie** krawędzie do marginesu. Żeby to osiągnąć, program musi rozciągnąć wiersz do pełnej szerokości szpalty — a jedyne, co da się rozciągnąć, to odstępy między słowami (czasem także między literami). I tu zaczyna się problem: skoro liczba słów w wierszu jest za każdym razem inna, to i odstępy muszą być za każdym razem inne. Raz ciasno, raz luźno.

To rozróżnienie jest fundamentem całego składu — jeśli mylą Ci się pojęcia „skład" i „formatowanie", zajrzyj najpierw do tekstu [czym różni się skład tekstu od formatowania](/blog/sklad-a-formatowanie/), bo justowanie to klasyczny przykład decyzji, którą podejmuje się na etapie składu, a nie pisania.

Warto od razu obalić najczęstsze nieporozumienie: justowanie **nie jest** znakiem profesjonalizmu samo w sobie. Profesjonalizmem jest justowanie, które nie zostawia po sobie dziur. To różnica między naciśnięciem przycisku a wykonaniem roboty.

---

## Rivers, czyli dlaczego złe justowanie boli

![Porównanie dwóch szpalt z tym samym akapitem — po lewej justowanie bez przenoszenia z dziurami i rzekami bieli, po prawej równe wyrównanie do lewej.](/blog/justowanie-czy-wyrownanie-do-lewej-co-wybrac-i-dlaczego/01-ilustracja.webp)

*Ten sam akapit realnie złożony w LaTeX-u: po lewej justowanie bez przenoszenia rozpycha odstępy i tworzy „rzeki" bieli, po prawej wyrównanie do lewej daje równe odstępy.*


Kiedy odstępy w kolejnych wierszach przypadkiem układają się jeden pod drugim, oko dostrzega pionową „rzekę" bieli spływającą przez akapit. Karen Schriver w klasycznej pracy *Dynamics in Document Design* (1997) opisuje to zjawisko wprost: nierówne odstępy tworzą „ścieżki biegnące pionowo przez tekst, łączące puste miejsca między słowami w sąsiednich wierszach". Rzeki nie są kwestią gustu — to fizyczna przeszkoda, która ściąga wzrok w dół zamiast prowadzić go w prawo.

Schriver stawia tezę, którą warto zapamiętać, bo zmienia całą rozmowę: **wyrównanie do lewej kontra justowanie to źle postawione pytanie**. Prawdziwym problemem jest odstęp między słowami. Regularny odstęp daje szybsze czytanie i lepsze zrozumienie — w obu wariantach. Wyrównanie do lewej wygrywa nie dlatego, że jest „lepsze", tylko dlatego, że gwarantuje regularny odstęp niejako z automatu. Justowanie ten sam efekt też potrafi osiągnąć, ale wymaga o wiele więcej pracy.

Do tej samej diagnozy dochodzi środowisko dostępności cyfrowej. Wytyczne WCAG 2.1 (kryterium sukcesu 1.4.8) zalecają, by tekst **nie** był justowany, i uzasadniają to konkretnie: „Nierówne odstępy między słowami w tekście justowanym mogą tworzyć »rzeki bieli« spływające przez stronę, co utrudnia czytanie, a w niektórych przypadkach je uniemożliwia. Justowanie może też ścisnąć słowa tak, że trudno rozpoznać granice między nimi". British Dyslexia Association w swoim przewodniku stylistycznym z tego samego powodu rekomenduje wyrównanie do lewej — bo łatwiej wtedy znaleźć początek i koniec wiersza, a odstępy są równe.

Zauważ, że oba problemy — rzeki i sklejone słowa — to **dwie strony tej samej monety**. Ten sam wiersz raz jest za luźny, raz za ciasny, w zależności od tego, ile słów program musiał upchnąć. Redaktorka z branży wydawniczej opisywała to w dyskusji online tak: przy tekście justowanym poprawka jednego złego przeniesienia potrafi zepsuć odstępy gdzie indziej w tym samym akapicie — więc trzeba przeglądać cały akapit od nowa. Przy wyrównaniu do lewej ta lawina nie występuje.

---

## Co mówią badania (mniej, niż byś chciał)

Skoro justowanie bywa problematyczne, to badania powinny je jednoznacznie skreślać, prawda? Otóż nie — i uczciwość każe to powiedzieć.

Przegląd literatury wygląda mniej więcej tak:

| Badanie | Wynik |
|---|---|
| Trollip & Sales (1986) | Tekst justowany czytany **wolniej**; zrozumienie bez różnic. Ale czas mierzyli sami badani — słaba metodyka. |
| Gregory & Poulton (1970) | Dla dobrych czytelników **bez różnicy**; dla słabszych justowanie w wąskich szpaltach dało gorszy wynik. |
| Muncer i in. (1986) | Przy materiale justowanym badani wypadali **istotnie gorzej**. |
| Coll, Fjermestad & Coll (1998) | Osiem eksperymentów, **brak różnic** w czasie czytania i zapamiętywaniu między wszystkimi formami wyrównania. |

Wniosek z tej tabeli nie jest taki, jaki chciałby usłyszeć każdy obóz. Najnowsze i najstaranniejsze badanie (Coll i in., 1998) nie znalazło żadnej istotnej różnicy w szybkości czytania ani w rozumieniu tekstu — niezależnie od wyrównania. Wcześniejsze prace, które „skazywały" justowanie, miały wady metodyczne albo dotyczyły specyficznych grup.

Powtarza się za to jeden motyw: **dla sprawnych czytelników różnicy nie ma, problem dotyka czytelników słabszych** — dzieci, osób uczących się języka jako obcego, osób z dysleksją, przy krótkich szpaltach. To dlatego argumentacja przeniosła się z „czytelności w ogóle" na **dostępność**. I to jest właściwa rama. Nie chodzi o to, że justowanie jest „gorsze"; chodzi o to, że źle wykonane justowanie wyklucza część odbiorców, a dobrze wykonane — nie wyklucza nikogo.

Praktyczny wniosek dla składacza: pytanie brzmi nie „co jest naukowo lepsze", tylko „dla kogo składam i czy stać mnie na to, żeby zrobić justowanie porządnie". Jeśli odpowiedź na drugą część brzmi „nie", to lepiej wyrównać do lewej, niż justować byle jak.

---

## Web to nie druk — i dlatego tu justowania unikamy

Cała powyższa dyskusja zakłada druk albo złożony PDF. W przeglądarce reguła jest znacznie prostsza i bardziej kategoryczna: **nie justuj**.

Powód jest techniczny, nie estetyczny. Justowanie wygląda dobrze tylko wtedy, gdy szerokość szpalty jest stała, a algorytm potrafi inteligentnie łamać i przenosić wyrazy. Na responsywnej stronie szerokość zmienia się z każdym urządzeniem — inna na monitorze, inna na telefonie — a silniki przeglądarek justowanie robią prymitywnie: rozpychają wyłącznie odstępy między słowami, bez sensownego przenoszenia. Efekt to gigantyczne dziury i przypadkowe rzeki, których nie da się ręcznie poprawić, bo układ jest płynny.

Do tego dochodzi ebook. Czytnik pozwala użytkownikowi zmieniać rozmiar czcionki, a przy każdej zmianie tekst przelewa się na nowo — justowanie, które ładnie wyglądało przy jednym ustawieniu, przy innym rozpada się na rzeki. Dlatego w składzie publikacji ekranowych domyślnie wybiera się wyrównanie do lewej; więcej o tych pułapkach piszemy przy okazji [składu ebooka w EPUB, MOBI i PDF](/blog/sklad-e-booka-epub-mobi-i-pdf-roznice-proces-i-pulapki/). Nie przypadkiem czołowe serwisy nastawione na czytanie — od aplikacji typu „read later" po duże tytuły prasowe online — konsekwentnie trzymają się lewego wyrównania. To domyślne zachowanie HTML-a, i to nie z lenistwa.

---

## Dlaczego w druku justowanie potrafi wygrać

Skoro tyle argumentów przeciw, dlaczego dobre książki wciąż są justowane? Bo w druku spełnione są dwa warunki, których web nie ma: szpalta ma **stałą** szerokość i można w spokoju dobrać przeniesienia wyrazów.

I tu wracamy do sedna, które postawił Schriver: liczy się nie sam przycisk „justuj", tylko jakość odstępów. A jakość odstępów w tekście justowanym zależy od trzech rzeczy działających razem:

- **dzielenie wyrazów (przenoszenie)** — bez niego wiersze byłyby albo bardzo ciasne, albo bardzo luźne;
- **algorytm łamania** — czy program optymalizuje cały akapit, czy tylko wiersz po wierszu;
- **mikroregulacja** odstępów między słowami i literami, tak by żaden wiersz nie odstawał.

Word i większość edytorów tekstu robi to naiwnie: decyzję o łamaniu podejmuje osobno dla każdego wiersza i słabo przenosi wyrazy — stąd „rzeki" i sklejone słowa, które kojarzymy ze złym justowaniem. Systemy składu podchodzą do tego inaczej: analizują akapit jako całość i szukają takiego zestawu przeniesień, który minimalizuje sumaryczne „naprężenie" wszystkich wierszy naraz. Różnicę w podejściu do samego dzielenia wyrazów dobrze pokazuje tekst [dzielenie wyrazów w polskim tekście — pułapki Worda](/blog/dzielenie-wyrazow-w-jezyku-polskim-pulapki-ktorych-nie-widzi-word/); w polszczyźnie, z jej długimi wyrazami i regułami przenoszenia, to właśnie tu rozstrzyga się, czy justowanie w ogóle ma prawo wyglądać dobrze.

To jest metoda, którą składamy my — profesjonalny skład w LaTeX-u traktuje justowanie jako problem optymalizacyjny: dobiera przeniesienia i odstępy dla całego akapitu tak, by odstępy były jak najbardziej wyrównane, a rzeki nie powstawały. Efekt to justowanie, które daje równą, „książkową" krawędź **bez** dziur — czyli dokładnie to, co autor miał na myśli, pisząc „jak w książce", nawet jeśli nie wiedział, że kryje się za tym poważna robota. Tę samą wrażliwość na detal opisujemy szerzej w tekście o [mikrotypografii](/blog/mikrotypografia-detale-ktore-odrozniaja-amatorski-sklad-od/), bo justowanie bez kontroli nad odstępami to tylko połowa rzemiosła.

---

## Jak zdecydować — praktyczna ściąga

Zamiast pytać „justować czy nie", zadaj sobie po kolei kilka konkretnych pytań:

| Sytuacja | Rekomendacja |
|---|---|
| Książka, monografia, druk, stała szpalta, porządne przenoszenie | Justowanie — daje spokojny, jednolity blok tekstu |
| Wąskie szpalty (kilka słów w wierszu), np. kolumny w gazetce | Wyrównanie do lewej — justowanie zrobi tu dziury |
| Ebook (EPUB/MOBI), tekst przelewalny | Wyrównanie do lewej |
| Strona WWW, treść responsywna | Wyrównanie do lewej |
| Odbiorca wrażliwy: dysleksja, dzieci, język obcy, dokumenty urzędowe | Wyrównanie do lewej |
| Nagłówki, podpisy, krótkie bloki (1–2 wiersze) | Wyrównanie do lewej; nie justuj i nie centruj dłuższych bloków |
| Justowanie „bo ładniej", ale bez kontroli nad przenoszeniem i odstępami | Wyrównaj do lewej — mniejsze ryzyko |

Reguła nadrzędna brzmi: **justuj tylko wtedy, gdy potrafisz to zrobić dobrze**. Justowanie to zobowiązanie — bierzesz na siebie pilnowanie odstępów, przeniesień i rzek w każdym akapicie. Jeśli tego zobowiązania nie dowieziesz, wyrównanie do lewej jest bezpieczniejszym, uczciwszym wyborem, który nikogo nie wyklucza i nie zostawia dziur.

I jeszcze jedno, o czym łatwo zapomnieć: wyrównanie zawsze rozpatruj razem z szerokością szpalty. Zbyt długi wiersz męczy oko niezależnie od wyrównania — przyjmuje się, że komfortowa długość to około 60–80 znaków w wierszu. Justowanie w za szerokiej albo za wąskiej szpalcie zawsze będzie wyglądać źle, choćby algorytm był najlepszy; ta zależność jest częścią szerszego tematu [marginesów i kanonu strony](/blog/marginesy-i-kanon-strony-proporcje-ktore-sprawiaja-ze-ksiazke-dobrze/).

---

Wróćmy do autora z początku, tego od maila „ma być jak w książce". Miał rację i nie miał jej jednocześnie. Rację miał w tym, że dobrze złożona książka rzeczywiście jest justowana i że ta równa krawędź to część jej spokojnego, uporządkowanego charakteru. Nie miał racji, myśląc, że wystarczy nacisnąć przycisk — bo to, co zobaczył w swoim pliku, nie było „jak w książce", tylko justowaniem bez rzemiosła, które za nim stoi. Różnica między jednym a drugim to nie ustawienie w menu, tylko algorytm łamania, dzielenie wyrazów i kontrola nad każdym odstępem. Dlatego prawdziwa odpowiedź na pytanie „justowanie czy wyrównanie do lewej" brzmi: najpierw zdecyduj, czy stać Cię na justowanie zrobione porządnie — a jeśli nie, wyrównaj do lewej i śpij spokojnie.