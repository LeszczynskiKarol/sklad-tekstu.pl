---
title: "Interlinia i światło — jak wpływają na czytelność"
description: "Interlinia i światło to najczęściej lekceważone parametry składu, a to one decydują, czy oko czyta bez wysiłku. Wyjaśniamy, jak dobrać interlinię, by czytelność strony rosła, a nie spadała."
date: 2026-07-23
category: "Typografia"
tags:
  ["interlinia czytelność", "interlinia", "światło w typografii", "leading", "czytelność tekstu", "skład tekstu", "typografia"]
---

Autor przysyła gotowy plik i prosi o „drobne wyrównanie przed drukiem". Tekst merytorycznie bez zarzutu, font przyzwoity, marginesy w normie — a mimo to strona męczy. Po dwóch akapitach oko się gubi, wraca do już przeczytanego wiersza, traci wątek. Diagnoza w dziewięciu przypadkach na dziesięć jest ta sama: wiersze stoją zbyt ciasno albo zbyt luźno. Nie chodzi o krój pisma ani o stopień. Chodzi o interlinię i o światło — dwa parametry, których nikt nie zauważa, dopóki są dobrane poprawnie, i które natychmiast rzucają się w oczy, gdy są złe.

To jeden z najlepiej udokumentowanych obszarów typografii: związek **interlinia–czytelność** badano eksperymentalnie od lat trzydziestych XX wieku aż po współczesne testy okulograficzne. Poniżej zbieramy to, co z tych badań wynika dla realnego składu — książki, pracy naukowej, raportu — i pokazujemy, jak nie zepsuć strony na etapie, na którym najłatwiej ją zepsuć.

---

## Interlinia i światło — o czym właściwie mówimy

**Interlinia** (ang. *leading*, w CSS *line-height*) to pionowa odległość między liniami bazowymi dwóch sąsiednich wierszy — a nie, jak się często sądzi, „odstęp między tekstem". Linia bazowa to niewidzialna linia, na której „siedzą" litery. Nazwa nie jest przypadkowa: w składzie metalowym zecerzy wsuwali między wiersze cienkie paski ołowiu (*lead*), żeby je od siebie odsunąć. Grubość tego paska to była interlinia w najbardziej dosłownym sensie.

**Światło** to szersze pojęcie: cała biel wokół i wewnątrz tekstu — między literami, między wyrazami, między wierszami, wokół kolumny. Typografowie mówią też o „barwie" (ang. *color*, *value*) akapitu: o tym, jak ciemna albo jasna wydaje się plama tekstu, gdy zmrużyć oczy. Ciasny skład wygląda ciemno i zbito; skład z generacyjnym światłem — jasno i lekko. Interlinia jest głównym regulatorem tej barwy: zwiększ ją, a szara plama tekstu rozjaśni się i „odetchnie".

Zapis interlinii ma w druku klasyczną notację. „12/14" znaczy: pismo stopnia 12 punktów złożone na 14 punktach interlinii — czyli z 2 punktami światła. Złożenie 20/20, gdzie interlinia równa się stopniowi pisma, jest niemal zawsze błędem: znaki z sąsiednich wierszy niemal się stykają, a akapit robi się nieczytelnie gęsty. To pierwsza zasada, od której wszystko się zaczyna — interlinia musi być **większa** niż stopień pisma. Pozostaje pytanie: o ile.

---

## Co mówią badania

Historia eksperymentów jest tu zaskakująco spójna. Paterson i Tinker, badając druk na próbie 400 studentów (test szybkości czytania Chapman–Cook), wykazali, że większa interlinia — 1,2 i 1,4 w porównaniu z ciasnym 1,1 — daje **szybsze czytanie**. Innymi słowy: dorzucenie odrobiny światła między wiersze realnie przyspiesza odbiór tekstu.

Współczesne badanie okulograficzne Rello, Pielota i Marcos (CHI 2016) poszło dalej. 104 uczestników czytało artykuły z Wikipedii, śledzono ruch ich gałek ocznych. Porównano stopnie pisma od 10 do 26 punktów oraz cztery interlinie: 0,8, 1,0, 1,4 i 1,8. Wniosek dotyczący interlinii jest subtelny, ale ważny: jej wpływ jest **mniejszy niż wpływ stopnia pisma**, ale wyraźny na skrajnościach — zarówno 0,8 (za ciasno), jak i 1,8 (za luźno) pogarszały czytelność i rozumienie tekstu. Optimum leżało pośrodku, przy interlinii bliskiej domyślnej.

Kluczowy jest tu mechanizm samego czytania. Oko nie sunie po wierszu płynnie — porusza się skokami (*sakadami*) i zatrzymaniami (*fiksacjami*), podczas których faktycznie rozpoznaje słowa. Na końcu wiersza musi wykonać sakadę powrotną: skoczyć w dół i w lewo, do początku następnej linii. I właśnie ten powrót jest miejscem, w którym interlinia decyduje o czytelności. Za mało światła — oko nie odróżnia wiersza, do którego wraca, od tego, który właśnie opuściło, i „przeskakuje" albo czyta ten sam wiersz dwa razy. Za dużo światła — powrót staje się długim, niepewnym skokiem przez pustkę, a rytm czytania się rwie.

Stąd praktyczny konsensus, powtarzany od klasycznych podręczników po wytyczne dostępności: dla tekstu głównego interlinia w okolicy **od 1,3 do 1,6** stopnia pisma. Standard sieciowy WCAG (kryterium 1.4.12) wymaga, by tekst pozostawał czytelny przy interlinii co najmniej **1,5×** stopnia — i ta sama liczba pojawia się w klasycznych zaleceniach druku. Nie jest to magiczna stała, lecz środek bezpiecznego przedziału.

---

## Interlinia to nie parametr osobny

Największy błąd początkujących to traktowanie interlinii jak niezależnego pokrętła. W rzeczywistości tworzy ona **trójkąt** ze stopniem pisma i szerokością szpalty (tzw. *miarą*, ang. *measure*). Zmiana jednego wierzchołka wymusza korektę pozostałych.

Reguła jest prosta i sięga wieków praktyki drukarskiej: **im szersza szpalta, tym większa potrzebna interlinia.** Uzasadnienie wynika wprost z mechaniki sakady powrotnej — im dłuższą drogę oko przebywa w poziomie, tym łatwiej pomyli wiersz przy skoku w dół, więc potrzebuje wyraźniejszego pionowego rozdzielenia. Dlatego szeroka kolumna złożona z ciasną interlinią czyta się fatalnie, a ta sama interlinia w wąskiej szpalcie może być w sam raz.

Drugą stroną tego trójkąta jest **długość wiersza**. Tu badania są wyjątkowo zgodne: optymalny wiersz tekstu ciągłego to **50–75 znaków** ze spacjami (szwajcarski typograf Emil Ruder podawał 50–60; wytyczne dostępności WCAG za górną granicę uznają 80). Za sweet spot uchodzi około 66 znaków. Wiersz za długi męczy oko i utrudnia trafienie w początek następnej linii; wiersz za krótki zmusza do zbyt częstych powrotów i rwie rytm. Szerokość szpalty i interlinię dobiera się więc razem, nie osobno — a decyduje o nich układ marginesów, o czym więcej piszemy w tekście o [marginesach i kanonie strony](/blog/marginesy-i-kanon-strony-proporcje-ktore-sprawiaja-ze-ksiazke-dobrze/).

Trzeci, najczęściej pomijany czynnik to sam krój pisma — a konkretnie jego **wysokość x** (ang. *x-height*), czyli wysokość korpusu małych liter, takich jak „x", „a", „e". Font o dużej wysokości x wygląda na większy przy tym samym stopniu i „zjada" światło między wierszami — więc potrzebuje **hojniejszej** interlinii, by nie sprawiał wrażenia zbitego. Badania nad rozpoznawaniem liter (Cooreman i Beier, 2024) potwierdzają, że wysokość x istotnie wpływa na legibilność, i to ona bardziej niż nominalny stopień decyduje o postrzeganej wielkości pisma. Dwa kroje „12 punktów" mogą więc wymagać dwóch różnych interlinii. Dlatego dobór interlinii zaczyna się od świadomego [doboru kroju pisma](/blog/kroje-pisma-w-publikacjach-naukowych-jak-dobrac-font-do-dokumentu/), a nie po nim.

---

## Ile interlinii — wartości praktyczne

Poniższa tabela zbiera punkty wyjścia dla najczęstszych sytuacji. To wartości startowe, które zawsze weryfikuje się na wydruku próbnym — nie stałe do przepisania w ciemno.

| Kontekst | Interlinia (× stopień) | Uwagi |
|---|---|---|
| Tekst główny książki, druk | 1,2–1,45 | zależnie od kroju i szerokości szpalty; przy szerokim składzie bliżej górnej granicy |
| Praca naukowa / dokument A4 | 1,5 („półtora") | szeroka szpalta A4 wymusza więcej światła; często wymóg formalny uczelni |
| Tekst na ekranie (web) | 1,5–1,6 | domyślne 1,0 w przeglądarce ≈ 120% stopnia; minimum dostępności WCAG to 1,5 |
| Nagłówki, tytuły | 1,0–1,2 | krótkie, duże — nadmiar światła je rozbija |
| Przypisy, podpisy (małe pismo) | 1,4–1,6 | im mniejszy stopień, tym proporcjonalnie więcej światła |
| Cytat blokowy, motto | 1,15–1,3 | ciaśniej niż tekst główny, dla kontrastu faktury |

Zwróć uwagę na ostatnią, kontrintuicyjną prawidłowość: **im mniejsze pismo, tym proporcjonalnie większa interlinia.** Drobny druk jest już z natury trudniejszy do czytania, więc odbieranie mu światła podwójnie mu szkodzi. To dlatego przypisy złożone „na styk" są jednym z najczęstszych grzechów amatorskiego składu — obok innych detali, które omawiamy w tekście o [mikrotypografii](/blog/mikrotypografia-detale-ktore-odrozniaja-amatorski-sklad-od/).

---

## Światło poza interlinią

Interlinia to najważniejszy, ale nie jedyny rodzaj światła, który steruje czytelnością. Warto znać cały zestaw:

- **Światło międzywyrazowe** (odstępy między słowami) — kluczowe zwłaszcza przy justowaniu, gdzie skład rozpycha spacje, by wyrównać wiersz do prawej. Zbyt szerokie odstępy tworzą pionowe „rzeki" bieli przecinające akapit. To główny argument w odwiecznym sporze [justowanie kontra wyrównanie do lewej](/blog/justowanie-czy-wyrownanie-do-lewej-co-wybrac-i-dlaczego/).
- **Światło akapitowe** — odstęp między akapitami. WCAG zaleca co najmniej 2× stopień pisma. W druku alternatywą jest wcięcie pierwszego wiersza; łączenie obu (wcięcie *i* odstęp) to nadmiar, jedno wyklucza drugie.
- **Marginesy** — biel wokół kolumny nie jest „zmarnowanym miejscem". Rama ze światła pomaga oku znaleźć koniec wiersza i wykonać sakadę powrotną. Tekst dobity do krawędzi kartki czyta się gorzej, niezależnie od interlinii.

Warto tu odnotować, że wytyczne dostępności (WCAG 1.4.12) formułują minima dla światła jako krotności stopnia pisma: interlinia ≥ 1,5, odstęp międzyakapitowy ≥ 2, światło międzyliterowe ≥ 0,12, światło międzywyrazowe ≥ 0,16. To nie są wartości „docelowe" ładnego składu, lecz **progi, poniżej których tekst staje się barierą** dla części czytelników — w tym osób z dysleksją i słabowidzących. Dobry skład zaczyna się tam, gdzie kończą się te minima.

---

## Dlaczego robimy to w LaTeX-u

W naszej pracowni skład powstaje w LaTeX-u — i akurat przy interlinii ma to konkretne znaczenie, wykraczające poza estetykę. LaTeX liczy odległości między liniami bazowymi w sposób powtarzalny i utrzymuje **rytm pionowy** (ang. *vertical rhythm*): wszystkie wiersze na sąsiednich stronach stoją na tej samej siatce, dzięki czemu prześwit spod jednej kolumny nie „przebija" krzywo na drugą. Ręczne dopychanie odstępów w edytorze WYSIWYG tego nie gwarantuje — jeden wtrącony wzór albo przypis potrafi rozjechać całą siatkę.

To zarazem powód, dla którego interlinii nie ustawia się „raz na cały dokument". Tekst główny, przypisy, cytaty blokowe, podpisy pod ilustracjami — każdy z tych strumieni ma własną, świadomie dobraną interlinię, a system pilnuje, by mimo to trzymały się wspólnego rytmu. Efektem jest strona, która wygląda na spokojną i uporządkowaną, nawet jeśli czytelnik nie umie nazwać, dlaczego. Narzędzie jest tu środkiem; celem jest publikacja, która się dobrze czyta — czy to [książka](/uslugi/ksiazki/), czy [praca naukowa](/uslugi/prace-naukowe/).

---

## Typowe błędy, które psują czytelność

![Porównanie tego samego akapitu złożonego z interlinią równą stopniowi pisma (za ciasno) i z interlinią 1,5× (poprawnie).](/blog/interlinia-i-swiatlo-w-tekscie-jak-wplywaja-na-czytelnosc/01-ilustracja.webp)

*Ten sam akapit realnie złożony w LaTeX-u przy dwóch interliniach — po lewej wiersze na styk (12/12), po prawej z pełnym światłem (12/17).*


Na koniec lista rzeczy, które najczęściej widujemy w plikach przysyłanych „do drobnej korekty":

- **Interlinia równa stopniowi pisma** (20/20) — akapit gęsty, ciemny, wiersze się zlepiają.
- **Domyślne 1,5 wiersza z Worda przeniesione na wąską szpaltę książki** — na A4 to standard, na stronie 130 × 200 mm robi się dziurawo i „rozlewa".
- **Ciasny druk przypisów** — tekst główny dopieszczony, a przypisy na styk, choć to one wymagają *więcej* światła.
- **Interlinia dobrana bez oglądania kroju** — font o dużej wysokości x złożony z interlinią liczoną „jak dla Times New Roman" wygląda na zbity.
- **Za szeroki wiersz przy ciasnej interlinii** — najgorsza z możliwych kombinacji trójkąta: oko gubi się przy każdym powrocie.

Wszystkie mają wspólny mianownik: interlinię potraktowano jak liczbę do wpisania raz, zamiast jak parametr wynikający ze stopnia pisma, kroju i szerokości szpalty naraz.

---

Interlinia i światło nie są kosmetyką dodawaną na końcu — są konstrukcją, na której trzyma się cały akapit. Ich zadaniem nie jest zwrócić na siebie uwagę, lecz zniknąć: sprawić, by czytelnik przeszedł przez tekst, nie zauważywszy w ogóle, że jego oko było prowadzone. Kiedy strona jest dobrze złożona, nikt nie chwali interlinii — po prostu czyta się do końca bez zmęczenia. I właśnie ta niewidzialność, o której więcej piszemy w tekście o [tym, czym jest skład tekstu](/blog/co-to-jest-sklad-tekstu/), jest miarą, że światło rozłożono dobrze.