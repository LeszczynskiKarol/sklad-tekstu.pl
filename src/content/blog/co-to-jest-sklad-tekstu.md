---
title: "Co to jest skład i łamanie tekstu — kompletny przewodnik po sztuce, która jest niewidoczna"
description: "Czym jest skład tekstu, na czym polega łamanie tekstu, jak działa kerning, leading, tracking i algorytm Knutha-Plassa. Różnica między składem a typografią. Historia, narzędzia, proces i błędy typograficzne — wdowy, sieroty, rzeki, szewcy. Praktyczny przewodnik od A do Z."
date: 2025-02-28
category: "Poradniki"
tags:
  [
    "skład tekstu",
    "łamanie tekstu",
    "typografia",
    "kerning",
    "leading",
    "tracking",
    "wdowy i sieroty",
    "mikrotypografia",
    "algorytm Knutha-Plassa",
    "latex",
    "DTP",
  ]
---

Otwierasz książkę. Czytasz stronę za stroną, nie zastanawiając się ani przez sekundę, dlaczego tekst jest akurat tej szerokości, dlaczego między literami „A" i „V" jest nieco mniej miejsca niż między „H" i „I", dlaczego akapity nie kończą się pojedynczym słowem zawieszonym na ostatniej linii. Nie zauważasz, że marginesy wewnętrzne są szersze od zewnętrznych. Nie widzisz, że znaki interpunkcyjne na brzegu kolumny delikatnie wystają poza jej krawędź, żeby margines _wyglądał_ prosto, choć technicznie prosto nie jest. Po prostu czytasz — płynnie, bez irytacji, bez wysiłku. To właśnie jest skład tekstu: praca, której nikt nie powinien zauważyć. Jeśli ją zauważasz — znaczy, że została wykonana źle.

Ten artykuł wyjaśnia, czym dokładnie jest skład i łamanie tekstu, na czym polega różnica między składem a typografią, jakie mechanizmy decydują o jakości złożonego dokumentu i dlaczego profesjonalny skład nie jest luksusem, ale warunkiem koniecznym każdej poważnej publikacji.

---

## Definicja — czym jest skład tekstu

**Skład tekstu** (_typesetting_) to proces przekształcania surowego tekstu w gotową do druku lub publikacji cyfrowej stronę — z precyzyjnie dobranymi krojami pisma, wielkością fontu, interlinią, marginesami, wcięciami, nagłówkami, numeracją, tabelami, ilustracjami i wszystkimi innymi elementami wizualnymi dokumentu. Słownik Merriam-Webster definiuje typesetting jako _„the process of setting material in type or into a form to be used in printing"_ — i dodaje: _„the process of producing graphic matter (as through a computer system)"_.

**Łamanie tekstu** to polskie określenie tego samego procesu, ze szczególnym naciskiem na dzielenie tekstu na wiersze i strony (_line breaking_ i _page breaking_). W praktyce wydawniczej „skład" i „łamanie" używane są wymiennie, choć „łamanie" historycznie odnosi się do fizycznego rozmieszczania czcionek w ramie drukarskiej — „łamaniu" tekstu na kolumny i strony.

W kontekście cyfrowym skład tekstu obejmuje wszystkie decyzje, które wpływają na wygląd i czytelność dokumentu: od wyboru fontu, przez ustawienie marginesów, po eliminację błędów typograficznych takich jak wdowy i sieroty. To nie jest „formatowanie" w rozumieniu Worda, gdzie klikasz przycisk „Pogrubienie". To precyzyjna, wielowarstwowa praca, w której każdy milimetr na stronie ma znaczenie.

---

## Skład tekstu a typografia — to nie to samo

Oba terminy bywają używane zamiennie, ale opisują różne rzeczy. Rozumienie tej różnicy jest kluczowe, żeby wiedzieć, za co tak naprawdę płacisz, zlecając profesjonalny skład.

**Typografia** (_typography_) to szersza dyscyplina — sztuka i technika projektowania komunikacji wizualnej za pomocą tekstu. Obejmuje projektowanie krojów pisma (tworzenie nowych fontów), dobór kroju do kontekstu, hierarchię typograficzną (wielkości nagłówków, podtytułów, tekstu głównego), wybór kolorystyki tekstu i tła. Typografia odpowiada na pytanie: _jak powinien wyglądać tekst, żeby komunikować zamierzony przekaz?_

**Skład tekstu** (_typesetting_) to proces techniczny — konkretna realizacja decyzji typograficznych na stronie. Obejmuje ustawianie tekstu w kolumnach, dzielenie na wiersze i strony, regulację odstępów między literami (kerning), między słowami (word spacing), między wierszami (interlinia/leading), eliminację błędów typograficznych, umieszczanie ilustracji, tabel i przypisów. Skład odpowiada na pytanie: _jak ułożyć tekst na stronie, żeby był czytelny, estetyczny i technicznie poprawny?_

Analogia: typografia to projekt architektoniczny budynku — proporcje, materiały, styl. Skład tekstu to praca ekipy budowlanej, która ten projekt realizuje cegła po cegle, z dokładnością do milimetra.

W praktyce wydawniczej te dwie dyscypliny się przenikają. Osoba składająca podręcznik akademicki podejmuje zarówno decyzje typograficzne (jaki font na twierdzenia, jaki na przykłady), jak i decyzje składowe (jak złamać ten akapit, żeby nie zostawić wdowy na następnej stronie). Ale warto pamiętać, że to odrębne kompetencje — projektant typograficzny i zecer (składacz tekstu) to historycznie dwie różne profesje.

---

## Od ruchomej czcionki do ekranu — krótka historia składu tekstu

Zrozumienie historii składu tekstu nie jest akademickim luksusem — to klucz do zrozumienia, dlaczego pewne zasady obowiązują do dziś i dlaczego niektóre narzędzia są lepsze od innych.

### Skład ręczny — od Gutenberga do XIX wieku

Około 1040 roku w Chinach Bi Sheng wynalazł ruchomą czcionkę z ceramiki. Ale to Johannes Gutenberg, konstruując swoją prasę drukarską z metalową czcionką ruchomą około 1440 roku, wywołał rewolucję, która zmieniła cywilizację. Przed Gutenbergiem książki kopiowano ręcznie — produkcja jednego egzemplarza zajmowała miesiące. Po Gutenbergu świat przeszedł z około 30 000 istniejących książek do milionów w ciągu kilku dekad.

Proces ręcznego składu wyglądał tak: zecer (_compositor_) wybierał prawą ręką poszczególne czcionki z kaszty zecerskiej (_type case_) i układał je od lewej do prawej w wierszowniku (_composing stick_), trzymanym w lewej ręce. Tekst w wierszowniku wyglądał jak odbicie lustrzane — do góry nogami. Po złożeniu wiersza zecer dodawał materiał justunkowy (metalowe klocki regulujące odstępy między słowami), żeby wiersz miał dokładnie zadaną szerokość. Gotowe wiersze przenosił na ramę zecerską (_chase_), gdzie składał je w pełne strony.

To stąd pochodzi terminologia, której używamy do dziś. „Wielkie litery" (_upper case_) leżały w górnej kaszcie, „małe litery" (_lower case_) w dolnej. „Leading" (interlinia) pochodzi od ołowianych listewek (_lead strips_) wkładanych między wiersze, żeby je od siebie odsunąć. „Justowanie" (_justification_) oznaczało wyrównywanie wierszy do obu marginesów za pomocą materiału justunkowego.

### Skład maszynowy — Linotype i Monotype

W 1886 roku Ottmar Mergenthaler wynalazł Linotype — maszynę, która rewolucyjnie przyspieszyła skład. Operator wpisywał tekst na klawiaturze, a maszyna automatycznie składała matryce liter w jeden metalowy wiersz (_line of type_ — stąd nazwa). Po wydrukowaniu wiersz mógł być przetopiony i metal użyty ponownie. Równolegle powstał Monotype — system dwuczęściowy, gdzie klawiatura produkowała taśmę perforowaną, a oddzielna odlewnica odlewała poszczególne litery na jej podstawie.

Te maszyny dominowały przez prawie sto lat — od lat 80. XIX wieku do lat 70. XX wieku. Skład gazet, książek, katalogów — wszystko przechodziło przez gorący metal.

### Fotoskład — era światła i filmu

W latach 60. i 70. XX wieku gorący metal ustąpił miejsca fotoskładowi (_phototypesetting_). Zamiast odlewać litery z metalu, maszyna rzucała wiązkę światła przez negatyw z kształtem litery na papier fotograficzny. Tekst składany był w pojedyncze kolumny, które następnie wycinano i przyklejano na makiecie strony (_paste-up_). Z gotowej makiety robiono negatyw fotograficzny, z którego powstawała forma drukarska.

Fotoskład był szybszy i tańszy od gorącego metalu, ale sam proces montażu stron (wycinanie i klejenie kolumn tekstu) był żmudny i podatny na błędy.

### DTP i skład cyfrowy — od 1985 do dziś

W 1985 roku zbiegły się trzy przełomy: komputer Apple Macintosh, program Aldus PageMaker i język PostScript firmy Adobe. Razem stworzyły to, co nazwano _desktop publishing_ (DTP) — skład tekstu na komputerze osobistym. Nagle każdy, kto miał Maca i drukarkę laserową, mógł produkować dokumenty o jakości porównywalnej z profesjonalnym drukiem.

Równolegle, w świecie akademickim, Donald Knuth tworzył system TeX (1978) i jego rozszerzenie LaTeX (Leslie Lamport, 1984) — narzędzia, które zamiast interfejsu WYSIWYG stosowały język znaczników, dając bezprecedensową kontrolę nad każdym aspektem składu. O różnicach między tymi podejściami pisaliśmy szczegółowo w artykule [LaTeX vs Word](/blog/latex-vs-word/).

Dziś skład tekstu odbywa się niemal wyłącznie cyfrowo, ale zasady wypracowane przez 500 lat ręcznego i maszynowego składu obowiązują nadal. Zmienił się nośnik — nie zmieniły się reguły.

---

## Elementy składu tekstu — anatomia dobrze złożonej strony

Skład tekstu to nie jedna czynność, ale orkiestracja kilkudziesięciu parametrów, które muszą ze sobą współgrać. Oto najważniejsze z nich — w kolejności od najdrobniejszych (na poziomie liter) do najszerszych (na poziomie strony).

### Kerning — odstęp między parami liter

Kerning to regulacja odstępu między dwiema konkretnymi literami w słowie. Niektóre pary liter — na przykład „AV", „To", „Wa" — wymagają zmniejszenia odstępu, bo ich kształty tworzą naturalne „kieszenie" białej przestrzeni. Bez korrectury kerningu słowo „WAVE" wygląda, jakby litery się od siebie odpychały, a „To" — jakby między „T" a „o" był dodatkowy spacja.

Dobre fonty mają wbudowane tablice kerningowe (_kerning pairs_) — instrukcje, o ile zmniejszyć lub zwiększyć odstęp dla setek par liter. Ale automatyczny kerning nie zawsze wystarcza, szczególnie w nagłówkach, logotypach i dużych rozmiarach fontu, gdzie niedoskonałości są widoczne gołym okiem.

### Tracking — odstęp między wszystkimi literami

Tracking (rozstrzelenie liter, _letter-spacing_) to jednolita regulacja odstępów między **wszystkimi** literami w bloku tekstu — w odróżnieniu od kerningu, który dotyczy konkretnych par. Tracking wpływa na gęstość tekstu: mniejszy tracking zagęszcza tekst (więcej znaków w wierszu), większy — rozrzedza.

Tracking ma kilka typowych zastosowań. Tekst złożony wersalikami (WIELKIMI LITERAMI) wymaga zwiększonego trackingu, bo wersaliki bez dodatkowej przestrzeni wyglądają na stłoczone. Drobna regulacja trackingu pomaga też wyeliminować wdowy i sieroty — zamiast przenosić samotne słowo na nową stronę, delikatne ściśnięcie trackingu w kilku wierszach potrafi „wciągnąć" je z powrotem.

### Leading (interlinia) — odstęp między wierszami

Leading (_line spacing_) to odległość między linią bazową (_baseline_) jednego wiersza a linią bazową wiersza następnego. Nazwa pochodzi od ołowianych listewek (_lead_), które zecerzy wkładali między wiersze metalowej czcionki.

Zbyt mała interlinia powoduje, że wiersze „zlepiają się" — czytelnik ma trudność z śledzeniem wzrokiem właściwego wiersza. Zbyt duża interlinia rozbija tekst — oko traci ciągłość między wierszami, a strona wygląda na pustą.

Ogólna zasada: interlinia powinna wynosić 120–145% wielkości fontu. Dla tekstu 10 pt interlinia 12 pt (zapisywana jako 10/12) to klasyczny standard typograficzny. Dla podręczników, gdzie czytelność jest krytyczna, stosuje się interlinię 150% — stąd popularność ustawienia `\onehalfspacing` w LaTeX-u.

### Justowanie i wyrównanie tekstu

Justowanie (_justification_) to wyrównywanie tekstu jednocześnie do lewego i prawego marginesu. Osiąga się je przez regulację odstępów między słowami — rozciąganie lub ściskanie ich tak, żeby każdy wiersz miał dokładnie taką samą szerokość.

Problem z justowaniem polega na tym, że nierównomiernie rozciągnięte odstępy międzywyrazowe tworzą białe plamy, które zakłócają „kolor" tekstu (równomierność szarości bloku tekstu patrzonego z dystansu). W skrajnych przypadkach powstają tak zwane „rzeki" — ciągi białych przestrzeni, które tworzą widoczne pionowe lub ukośne linie przebiegające przez akapit.

<div class="table-wrapper">

| Wyrównanie                   | Angielska nazwa           | Charakterystyka                              | Zastosowanie                      |
| ---------------------------- | ------------------------- | -------------------------------------------- | --------------------------------- |
| Do lewej (chorągiewka prawa) | Flush left / ragged right | Równomierne odstępy, nierówny prawy margines | Strony www, materiały nieformalne |
| Do prawej (chorągiewka lewa) | Flush right / ragged left | Nierówny lewy margines                       | Elementy dekoracyjne, podpisy     |
| Justowanie obustronne        | Justified                 | Oba marginesy proste, zmienne odstępy        | Książki, podręczniki, gazety      |
| Centrowanie                  | Centered                  | Tekst na osi, obie krawędzie nierówne        | Tytuły, dedykacje, krótkie teksty |

</div>

Profesjonalny skład tekstu justowanego wymaga dzielenia wyrazów (_hyphenation_), żeby zminimalizować rozciąganie odstępów. Właśnie dlatego reguły dzielenia wyrazów specyficzne dla danego języka są tak ważne — LaTeX z pakietem `babel` i opcją `polish` stosuje polskie zasady dzielenia, w tym rozróżnienie między „prze-twa-rza-nie" a „przetw-arzanie". Word tego nie robi lub robi to niepoprawnie.

### Długość wiersza — ile znaków na linię

Długość wiersza (_line length_ lub _measure_) bezpośrednio wpływa na czytelność. Zbyt krótkie wiersze powodują częste przeskoki wzroku na nową linię, co męczy. Zbyt długie wiersze utrudniają śledzenie powrotu wzroku z końca jednej linii na początek następnej — oko „gubi się".

Klasyczna typografia zaleca 45–75 znaków na wiersz (wliczając spacje), z optimum około 66 znaków. Ta zasada pochodzi z badań czytelności prowadzonych od lat 40. XX wieku i potwierdzona została przez współczesne badania nad typografią ekranową. Przy projektowaniu makiety podręcznika w formacie B5 (176 × 250 mm) z marginesami 2–3 cm szerokość kolumny tekstu daje naturalnie około 60–70 znaków na wiersz przy foncie 10–11 pt — dokładnie w optymalnym zakresie.

### Wcięcia i odstępy między akapitami

Dwa sposoby sygnalizowania nowego akapitu: wcięcie pierwszego wiersza (_first-line indent_) lub odstęp pionowy przed akapitem (_paragraph spacing_). Tradycyjna typografia książkowa stosuje wcięcie — zwykle o szerokość litery „M" (1 em). Typografia ekranowa i nowoczesne layouty częściej stosują odstęp pionowy (zwykle 50–100% interlinii).

Ważna zasada: **nie łączy się obu metod jednocześnie**. Wcięcie + odstęp to typograficzny faux pas — jak pas i szelki jednocześnie. Pierwszy akapit po nagłówku nie powinien mieć wcięcia (bo nagłówek sam wystarczająco sygnalizuje początek nowej myśli). LaTeX z pakietem `indentfirst` pozwala kontrolować to automatycznie.

---

## Wdowy, sieroty, szewcy i rzeki — grzechy typograficzne

Profesjonalny skład to nie tylko wybór fontu i marginesów — to eliminacja błędów, które wydawcy traktują jako oznakę amatorszczyzny. Oto katalog najczęstszych „grzechów typograficznych" z ich precyzyjnymi definicjami.

### Wdowa (_widow_)

Ostatni wiersz akapitu, który „ucieka" na początek następnej strony lub kolumny. Pojedyncze słowo lub krótka fraza samotnie otwierająca nową stronę — otoczona białą pustką — to jeden z najbardziej rażących błędów składu. Wdowa psuje „kolor" strony i zakłóca rytm czytania.

### Sierota (_orphan_)

Pierwszy wiersz akapitu, który zostaje samotnie na dole strony, podczas gdy reszta akapitu przechodzi na stronę następną. Sierota „obiecuje" kontynuację, której nie ma — czytelnik musi przewrócić stronę, żeby przeczytać dalszy ciąg myśli.

**Uwaga terminologiczna:** definicje wdowy i sieroty nie są jednolite w literaturze — niektóre źródła odwracają znaczenia. W polskiej tradycji wydawniczej spotyka się też termin „bękart" na określenie jednego z tych błędów. Niezależnie od nazewnictwa — oba są niedopuszczalne w profesjonalnym składzie.

### Szewc (_runt_ / _short line_)

Ostatni wiersz akapitu, który składa się z pojedynczego krótkiego słowa (lub resztki podzielonego wyrazu). Szewc tworzy wrażenie „niedokończonego" akapitu i marnuje przestrzeń. Minimalna długość ostatniego wiersza akapitu powinna wynosić co najmniej 1/3 szerokości kolumny — a w idealnym przypadku przynajmniej tyle, ile wynosi wcięcie następnego akapitu.

### Rzeki (_rivers_)

Pionowe lub ukośne ciągi białych przestrzeni, które powstają, gdy odstępy między słowami w kolejnych wierszach przypadkowo się nakładają. Rzeki są szczególnie widoczne w tekście justowanym o krótkich wierszach i bez dzielenia wyrazów. Najłatwiej je dostrzec, patrząc na stronę pod ostrym kątem lub mrużąc oczy — prawidłowo złożony tekst powinien wyglądać jak jednolity szary prostokąt.

### Chorągiewka (_rag_)

Nierówna krawędź tekstu wyrównanego do jednej strony. Dobra chorągiewka ma „organiczny", łagodny kształt — wiersze mają zróżnicowaną, ale nieprzewidywalną długość. Zła chorągiewka tworzy widoczne kształty geometryczne (schodki, kliny, odwrócone piramidy) lub ma gwałtowne skoki długości między sąsiednimi wierszami.

<div class="table-wrapper">

| Błąd            | Angielska nazwa   | Gdzie występuje               | Jak naprawić                         |
| --------------- | ----------------- | ----------------------------- | ------------------------------------ |
| Wdowa           | Widow             | Początek strony/kolumny       | Regulacja trackingu, łamanie strony  |
| Sierota         | Orphan            | Koniec strony/kolumny         | Regulacja trackingu, łamanie strony  |
| Szewc           | Runt / short line | Ostatni wiersz akapitu        | Ściśnięcie/rozciągnięcie akapitu     |
| Rzeki           | Rivers            | Wewnątrz tekstu justowanego   | Dzielenie wyrazów, korekta trackingu |
| Zła chorągiewka | Bad rag           | Prawa krawędź tekstu do lewej | Ręczne łamanie wierszy, ściśnięcie   |

</div>

LaTeX radzi sobie z większością tych problemów automatycznie. Komendy `\widowpenalty=10000` i `\clubpenalty=10000` eliminują wdowy i sieroty, nakładając na nie maksymalną „karę" — algorytm łamania wierszy zrobi wszystko, żeby ich uniknąć. Ale rzeki i szewcy wymagają ręcznej interwencji — nawet najlepszy algorytm nie widzi wszystkiego.

---

## Makrotypografia vs mikrotypografia — dwa poziomy precyzji

Profesjonalny skład tekstu operuje na dwóch poziomach: makro i mikro. Zrozumienie tej dychotomii wyjaśnia, dlaczego dokument złożony w LaTeX-u wygląda lepiej niż ten sam tekst w Wordzie — nawet jeśli na pierwszy rzut oka nie potrafisz wskazać różnicy.

### Makrotypografia — struktura widoczna gołym okiem

Makrotypografia obejmuje decyzje, które widzi każdy czytelnik: układ strony, marginesy, wielkość fontu, hierarchię nagłówków, położenie ilustracji, układ kolumn. To „architektura" dokumentu — proporcje, symetria, białe przestrzenie. Makrotypografia jest widoczna — i dlatego zwykle poświęca się jej najwięcej uwagi.

Elementy makrotypografii to między innymi: format strony (A4, B5, niestandardowy), marginesy (wewnętrzne, zewnętrzne, górne, dolne), podział na kolumny, wielkości i style nagłówków, rozmieszczenie ilustracji i tabel, nagłówki i stopki stron (_running heads_), numeracja stron i spis treści.

### Mikrotypografia — subtelności, których nie zauważasz

Mikrotypografia to zestaw technik poprawiających czytelność i estetykę tekstu na poziomie, który jest „subliminalny" — czytelnik nie zauważa poszczególnych zabiegów, ale _odczuwa_ ich zbiorczy efekt. Hàn Thế Thành, twórca pdfTeX-a, napisał w swojej rozprawie doktorskiej: _„Micro-typography is the art of enhancing the appearance and readability of a document while exhibiting a minimum degree of visual obtrusion."_

Główne techniki mikrotypograficzne to:

**Protruzja znaków** (_character protrusion_, _margin kerning_, _hanging punctuation_) — drobne znaki interpunkcyjne (kropki, przecinki, łączniki) i litery o zaokrąglonym kształcie (np. „o", „e") na krawędzi kolumny są wysuwane poza geometryczną linię marginesu. Efekt: margines _wygląda_ na prostszy niż jest w rzeczywistości, bo ludzkie oko ocenia prostoliniowość na podstawie kształtów optycznych, nie geometrycznych. Gutenberg stosował tę technikę już w Biblii 42-wierszowej z 1455 roku — ręcznie.

**Rozszerzanie i zwężanie fontów** (_font expansion_) — delikatna (1–2%) zmiana szerokości znaków w poszczególnych wierszach, dzięki której odstępy międzywyrazowe mogą być bardziej równomierne. W wierszu „luźnym" (z dużymi odstępami) font jest lekko rozszerzany, w wierszu „ciasnym" — lekko zwężany. Różnica jest niewidoczna gołym okiem, ale „kolor" tekstu staje się znacząco bardziej jednolity.

**Regulacja odstępów międzywyrazowych i kerningowa** — mikrotypografia koryguje nie tylko tracking globalny, ale indywidualne pary znaków w kontekście konkretnego wiersza.

W LaTeX-u mikrotypografię włącza jedna linia:

```latex
\usepackage{microtype}
```

Pakiet `microtype` automatycznie aktywuje protruzję i rozszerzanie fontów. Efekt jest uderzający — ten sam tekst, z tym samym fontem i marginesami, wygląda wyraźnie lepiej po dodaniu tej jednej linii. Żaden edytor WYSIWYG nie oferuje odpowiednika tej funkcjonalności na porównywalnym poziomie. Adobe InDesign ma opcję _Optical Margin Alignment_, która realizuje protruzję, ale rozszerzanie fontów na poziomie poszczególnych wierszy — to domena TeX-a.

![Mikrotypografia — porównanie tekstu bez i z pakietem microtype](/blog/sklad-i-lamanie-tekstu/02-mikrotypografia.jpg)

---

## Algorytm Knutha-Plassa — dlaczego LaTeX łamie tekst lepiej

To jest serce różnicy między profesjonalnym składem a „formatowaniem" w edytorze tekstu. I żeby ją zrozumieć, musisz wiedzieć, jak programy dzielą tekst na wiersze.

### Algorytm zachłanny — jak łamie Word

Edytory WYSIWYG (Word, Google Docs, LibreOffice) stosują algorytm zachłanny (_greedy algorithm_): przetwarzają tekst słowo po słowie od lewej do prawej. Gdy następne słowo nie mieści się w wierszu, łamią wiersz w tym miejscu i przechodzą do następnego. Każdy wiersz jest optymalizowany osobno — bez jakiejkolwiek wiedzy o tym, co będzie dalej.

Problem? Decyzja podjęta w wierszu 3 wpływa na wygląd wiersza 4, 5, 6 i wszystkich kolejnych. Algorytm zachłanny nie potrafi tego uwzględnić. Wynik: niektóre wiersze mają ogromne odstępy między słowami (bo jest mało słów i wiele miejsca), a sąsiednie wiersze są ściśnięte. Tekst wygląda nierówno — „plamisty".

### Algorytm Knutha-Plassa — jak łamie LaTeX

Donald Knuth i Michael Plass w 1981 roku opublikowali przełomową pracę _„Breaking Paragraphs into Lines"_, w której zaproponowali zupełnie inne podejście. Ich algorytm nie łamie tekstu wiersz po wierszu — analizuje **cały akapit naraz** i znajduje taki zestaw punktów łamania, który minimalizuje globalną „brzydotę" (_total demerits_) całego akapitu.

Algorytm modeluje akapit jako sekwencję trzech typów elementów: „pudełek" (_boxes_) — niezmienialne fragmenty treści (litery, słowa), „kleju" (_glue_) — elastyczne odstępy, które można rozciągać i ściskać (spacje), oraz „kar" (_penalties_) — miejsc, w których łamanie jest niepożądane (np. dzielenie wyrazu) lub wymuszone (koniec akapitu).

Dla każdego możliwego zestawu punktów łamania algorytm oblicza funkcję kosztu — „badness" — która mierzy, jak bardzo odstępy w każdym wierszu odbiegają od ideału. Następnie za pomocą programowania dynamicznego znajduje zestaw punktów łamania, który minimalizuje sumę kosztów w całym akapicie.

Efekt: LaTeX „wie", że zmiana łamania w wierszu 3 poprawi wygląd wierszy 4, 5 i 6 — i podejmuje tę decyzję. Word tego nie potrafi, bo analizuje każdy wiersz osobno.

Porównanie wyników jest uderzające. Ten sam akapit złożony algorytmem zachłannym ma duże wahania odstępów międzywyrazowych — jeden wiersz jest ciasny, następny luźny, kolejny znów ciasny. Ten sam akapit złożony algorytmem Knutha-Plassa ma niemal identyczne odstępy w każdym wierszu. Często algorytm Knutha-Plassa potrzebuje też mniej wierszy na ten sam tekst — bo lepsze rozmieszczenie słów pozwala „upakować" więcej treści.

<div class="table-wrapper">

| Cecha                  | Algorytm zachłanny (Word) | Algorytm Knutha-Plassa (LaTeX) |
| ---------------------- | ------------------------- | ------------------------------ |
| Zasięg analizy         | Jeden wiersz              | Cały akapit                    |
| Metoda                 | Zachłanna (greedy)        | Programowanie dynamiczne       |
| Równomierność odstępów | Niska — duże wahania      | Wysoka — minimalne wahania     |
| Dzielenie wyrazów      | Osobny mechanizm          | Zintegrowane z łamaniem        |
| Jakość justowania      | Akceptowalna              | Profesjonalna                  |
| Czas obliczeń          | Natychmiastowy            | Milisekundy (niezauważalny)    |

</div>

Algorytm Knutha-Plassa to jedna z głównych przyczyn, dla których tekst złożony w LaTeX-u wygląda lepiej niż tekst z Worda — nawet przy identycznych fontach, marginesach i interlinii. To nie magia — to matematyka zastosowana do typografii.

---

## Narzędzia do składu tekstu — InDesign, LaTeX, Word

Trzy narzędzia, trzy filozofie, trzy zastosowania. Wybór zależy od typu dokumentu, wymagań jakościowych i skali projektu.

### Adobe InDesign — profesjonalny DTP

InDesign to standard branży DTP (_desktop publishing_). Interfejs WYSIWYG, pełna kontrola nad każdym elementem strony, zaawansowane narzędzia typograficzne (kerning optyczny, justowanie wielowierszowe, optyczne wyrównanie marginesów). Najlepszy do materiałów o złożonym layoutcie — katalogów, magazynów, broszur, plakatów.

Słabe strony: ręczna praca nad dużymi dokumentami (każdą stronę trzeba „złożyć" w interfejsie), brak automatyzacji cross-referencji i bibliografii na poziomie LaTeX-a, format zamknięty (pliki `.indd` nie są czytelne poza InDesignem), licencja subskrypcyjna.

### LaTeX — skład programistyczny

LaTeX to system, w którym skład jest kodem. Zamiast przeciągać elementy myszką, piszesz instrukcje: `\section{Tytuł}`, `\begin{equation}`, `\cite{kowalski2025}`. LaTeX sam oblicza marginesy, łamie tekst algorytmem Knutha-Plassa, generuje spisy treści, numeruje wzory, formatuje bibliografię i tworzy indeksy.

Najlepszy do: podręczników, prac naukowych, artykułów z wzorami matematycznymi, dokumentów wielorozdziałowych, publikacji z indeksami i bibliografiami. Wszędzie tam, gdzie automatyzacja, powtarzalność i jakość typograficzna są ważniejsze niż graficzna swoboda layoutu. O tym, jak zacząć pracę z LaTeX-em, pisaliśmy w artykule [Jak zacząć z LaTeX-em](/blog/latex-jak-zaczac/).

### Microsoft Word — edytor tekstu

Word jest edytorem tekstu z funkcjami DTP, nie narzędziem do profesjonalnego składu. Przy krótkich dokumentach (prace zaliczeniowe, raporty, listy) jest wystarczający. Przy dokumentach powyżej 100 stron — z wzorami, cross-referencjami, bibliografią i indeksem — zaczyna się załamywać: automatyczna numeracja się „gubi", tabele przeskakują między stronami, wzory zmieniają formatowanie po otwarciu na innym komputerze. Szczegółowe porównanie opisaliśmy w artykule [LaTeX vs Word](/blog/latex-vs-word/).

<div class="table-wrapper">

| Kryterium                    | InDesign                     | LaTeX                            | Word                          |
| ---------------------------- | ---------------------------- | -------------------------------- | ----------------------------- |
| Typ interfejsu               | WYSIWYG                      | Kod źródłowy                     | WYSIWYG                       |
| Algorytm łamania             | Wielowierszowy (Adobe)       | Knuth-Plass (cały akapit)        | Zachłanny (wiersz po wierszu) |
| Automatyzacja                | Średnia                      | Maksymalna                       | Niska                         |
| Wzory matematyczne           | Ograniczone                  | Najlepsza w branży               | Equation Editor (podstawowy)  |
| Bibliografia/indeks          | Wymaga wtyczek               | Wbudowane (BibLaTeX, imakeidx)   | Wbudowane (ograniczone)       |
| Stabilność dużych dokumentów | Wysoka                       | Najwyższa (czysty tekst)         | Niska (uszkodzenia plików)    |
| Koszt                        | Subskrypcja (~290 zł/mies.)  | Darmowy (open source)            | Subskrypcja lub jednorazowy   |
| Krzywa uczenia               | Średnia                      | Stroma                           | Niska                         |
| Najlepszy dla                | Katalogi, magazyny, broszury | Podręczniki, nauka, dokumentacja | Krótkie dokumenty, raporty    |

</div>

---

## Proces składu tekstu — od manuskryptu do gotowego dokumentu

Profesjonalny skład tekstu to nie jednorazowa czynność, lecz uporządkowany proces składający się z kilku etapów. Oto sekwencja, którą stosujemy przy każdym zleceniu.

### Etap 1: Analiza materiału źródłowego

Autor dostarcza tekst — najczęściej w Wordzie, PDF-ie, Markdownie lub czystym tekście. Na tym etapie oceniamy: objętość tekstu (liczba stron, słów), strukturę (ile rozdziałów, poziomów nagłówków, tabel, ilustracji), wymagania specjalne (wzory matematyczne, indeks, bibliografia, glosariusz), docelowy format (A4, B5, niestandardowy) i przeznaczenie (druk, PDF ekranowy, e-book).

### Etap 2: Projekt makiety

Przed składem całości projektujemy próbną makietę: wybieramy krój pisma, definiujemy hierarchię nagłówków, ustawiamy marginesy, interlinię, style akapitów. W LaTeX-u oznacza to napisanie preambuli — konfiguracji pakietów i klas dokumentu. Makieta jest zatwierdzana przez klienta, zanim przystąpimy do właściwego składu.

### Etap 3: Skład właściwy

Tekst trafia do systemu składu. Konwertujemy go do `.tex` (za pomocą Pandoc lub ręcznie), przenosimy wzory do trybu matematycznego, wstawiamy ilustracje w odpowiednich formatach (wektorowe tam, gdzie to możliwe), formatujemy tabele, definiujemy środowiska (twierdzenia, definicje, przykłady). Szczegóły tego procesu dla podręczników opisujemy w artykule [Skład podręcznika akademickiego w LaTeX](/blog/sklad-podrecznika-latex/).

### Etap 4: Cross-referencje, indeks, bibliografia

Oznaczamy etykiety (`\label`), wstawiamy odsyłacze (`\cref`), oznaczamy hasła indeksowe (`\index`), kompletujemy plik bibliograficzny `.bib`. To najżmudniejszy etap — wymaga przeczytania całego tekstu i zrozumienia jego struktury.

### Etap 5: Korekta typograficzna

Gotowy PDF przechodzi korektę typograficzną: sprawdzamy wdowy, sieroty, szewców, rzeki, przenoszenia wyrazów, poprawność cross-referencji, spójność formatowania, pozycjonowanie ilustracji. Poprawki nanoszone są w plikach `.tex`, śledzone w systemie kontroli wersji (Git).

### Etap 6: Finalizacja

Po zatwierdzeniu treści generujemy wersję finalną — PDF ekranowy (z hiperłączami, zakładkami, kolorami RGB) i/lub PDF drukarni (CMYK, spady, znaczniki cięcia, osadzone fonty). Szczegóły przygotowania PDF-a do druku opisujemy w artykule [PDF gotowy do drukarni](/blog/pdf-do-drukarni/).

---

## Skład tekstu w LaTeX-u — dlaczego go wybieramy

Nie każde narzędzie nadaje się do każdego zadania. Ale w przypadku publikacji naukowych, podręczników akademickich, dokumentacji technicznej i każdego dokumentu zawierającego wzory matematyczne — LaTeX nie ma realnej konkurencji. Oto powody.

### Automatyzacja na poziomie strukturalnym

Spis treści, spisy rysunków i tabel, numeracja rozdziałów i wzorów, cross-referencje, indeks rzeczowy, glosariusz, bibliografia — wszystko generowane automatycznie z jednego źródła. Dodajesz nowy rozdział w środku dokumentu? Cała numeracja się przelicza. Cytujesz nowe źródło? Bibliografia się aktualizuje. Zmieniasz styl cytowań z numerycznego na autor-rok? Jedna linia w preambule.

### Jakość typograficzna

Algorytm Knutha-Plassa do łamania akapitów, pakiet `microtype` do mikrotypografii, algorytm `xindy` do sortowania indeksu z polskimi znakami diakrytycznymi, BibLaTeX z Biberem do wielojęzycznej bibliografii — to mechanizmy, które działają automatycznie i produkują wynik na poziomie profesjonalnego wydawnictwa.

### Stabilność i powtarzalność

Plik `.tex` to czysty tekst. Nie ulega uszkodzeniu, nie akumuluje ukrytych metadanych, nie zmienia formatowania po otwarciu na innym komputerze. 500-stronicowy podręcznik kompiluje się tak samo niezawodnie jak 5-stronicowa notatka. Ten sam plik skompilowany za 10 lat da identyczny PDF.

### Kontrola wersji

Pliki `.tex` działają z Gitem tak naturalnie jak kod źródłowy. Każda zmiana jest widoczna w `git diff`. Recenzje, poprawki, korekty — wszystko śledzone, porównywalne, odwracalne. O Gicie w kontekście składu pisaliśmy w artykule o [składzie podręcznika](/blog/sklad-podrecznika-latex/).

---

## Kiedy potrzebujesz profesjonalnego składu

Nie każdy dokument wymaga profesjonalnego składu. Notatka służbowa, raport wewnętrzny, prezentacja na spotkanie — Word wystarczy. Ale są sytuacje, w których profesjonalny skład to nie luksus, lecz konieczność.

**Podręcznik akademicki** — setki stron, wzory, indeks, bibliografia, cross-referencje. Bez profesjonalnego składu będzie chaotyczny i trudny w użyciu.

**Praca doktorska lub habilitacyjna** — wymogi formalne uczelni, recenzenci, komisja. Estetyka dokumentu wpływa na odbiór treści — świadomie lub nie.

**Publikacja naukowa** — wydawnictwa (Springer, Elsevier, Cambridge University Press) dostarczają własne klasy LaTeX-owe i oczekują manuskryptów przygotowanych w LaTeX-u.

**Dokumentacja techniczna** — instrukcje obsługi, specyfikacje, procedury. Czytelność i precyzja layoutu bezpośrednio wpływają na bezpieczeństwo użytkowania.

**Katalog produktowy** — materiał marketingowy, który ma reprezentować firmę. Profesjonalny skład to inwestycja w wizerunek.

**Materiały dydaktyczne** — zeszyty ćwiczeń, arkusze egzaminacyjne, karty pracy. Czytelny skład bezpośrednio wpływa na efektywność nauki. Opisywaliśmy ten proces w naszym [case study zeszytu ćwiczeń](/blog/zeszyt-cwiczen-case-study/).

---

## Co dalej?

Skład tekstu to dyscyplina, w której każdy detal ma znaczenie — od kerningu między literami po marginesy na spadach drukarskich. Jeśli chcesz dowiedzieć się więcej o konkretnych aspektach składu w LaTeX-u, polecamy nasze pozostałe artykuły: [Jak zacząć z LaTeX-em](/blog/latex-jak-zaczac/) dla początkujących, [LaTeX vs Word](/blog/latex-vs-word/) dla porównania narzędzi, [Skład podręcznika akademickiego](/blog/sklad-podrecznika-latex/) dla pełnego pipeline'u wydawniczego i [PDF gotowy do drukarni](/blog/pdf-do-drukarni/) dla przygotowania plików do druku.

Jeśli masz tekst, który potrzebuje profesjonalnego składu — od surowego manuskryptu w Wordzie do gotowego PDF-a w jakości drukarskiej — [napisz do nas](/kontakt/). Skład tekstu to nasza codzienność.
