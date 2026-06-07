---
title: "Skład książki krok po kroku — od manuskryptu do druku"
description: "Skład książki to etap, na którym tekst z Worda zmienia się w plik gotowy do maszyny drukarskiej. Przeprowadzamy Cię przez cały proces — od przygotowania manuskryptu, przez łamanie i korektę, po plik produkcyjny."
date: 2026-06-07
category: "Poradniki"
tags:
  ["skład książki", "dtp", "self-publishing", "przygotowanie do druku", "łamanie tekstu", "korekta po składzie", "manuskrypt"]
---

Masz w komputerze plik `ksiazka_FINAL_v7.docx`. Tekst jest skończony, przeszedł redakcję, może nawet korektę. A jednak to wciąż nie jest książka — to surowiec. Między tym dokumentem a egzemplarzem, który czytelnik weźmie z półki, leży etap, o którym wielu autorów dowiaduje się dopiero wtedy, gdy drukarnia odrzuca ich plik z komunikatem o braku spadów albo o profilu RGB zamiast CMYK. Tym etapem jest **skład książki** — moment, w którym tekst dostaje ostateczny, fizyczny kształt.

W tym poradniku przeprowadzimy Cię przez cały proces krok po kroku: od przygotowania manuskryptu, przez makietę i łamanie, aż po wygenerowanie pliku, którego maszyna drukarska nie odrzuci. Pokażemy też, gdzie najczęściej coś idzie nie tak i ile realnie zajmuje każdy z etapów.

---

## Czym jest skład książki (i czym nie jest)

Zacznijmy od rozwiania nieporozumienia, które kosztuje autorów najwięcej nerwów. **Skład książki to nie to samo co formatowanie tekstu w edytorze.** Pogrubienie nagłówków, ustawienie marginesów i wstawienie numerów stron w Wordzie to formatowanie — czynność, którą wykonuje autor. Skład zaczyna się tam, gdzie ta praca się kończy: tekst zostaje przelany do programu profesjonalnego (Adobe InDesign, LaTeX, Quarto) i ułożony zgodnie z regułami typografii — z kontrolą nad łamaniem, dzieleniem wyrazów, justowaniem, światłem między wierszami i hierarchią elementów.

Różnica jest fundamentalna, bo dotyczy celu. Formatowanie ma sprawić, że dokument *da się czytać na ekranie*. Skład ma sprawić, że książka *będzie się dobrze czytało na papierze* — przez 300 stron, bez zmęczenia, bez sierot i bękartów rozbijających rytm. Jeśli chcesz głębiej zrozumieć to rozgraniczenie, opisaliśmy je osobno w tekście [czym różni się skład od formatowania](/blog/sklad-a-formatowanie/), a samo pojęcie składu rozkładamy na czynniki pierwsze w przewodniku [co to jest skład i łamanie tekstu](/blog/co-to-jest-sklad-tekstu/).

Dobry skład ma jedną paradoksalną cechę: **jest niewidoczny**. Czytelnik nie zauważa układu — skupia się na treści. Amatorskie łamanie działa odwrotnie. Zbyt ciasna interlinia, jednoliterowe spójniki wiszące na końcach wierszy, nierówne wcięcia akapitów — to wszystko podświadomie obniża odbieraną wartość publikacji i, co gorsza, autora.

![Strona powieści złożona w LaTeX-u — żywa pagina z tytułem książki i numerem strony, inicjał na początku rozdziału, tekst justowany z przenoszeniem wyrazów, książkowe proporcje strony](/blog/sklad-ksiazki/01-strona-ksiazki.webp)

*Strona powieści złożona realnie w LaTeX-u: inicjał otwierający rozdział, żywa pagina, justowanie z dzieleniem wyrazów, książkowe proporcje. Tak wygląda skład, którego czytelnik „nie zauważa".*

---

## Etap 1: przygotowanie manuskryptu

Składacz pracuje na tekście, który mu dostarczysz — i im czystszy ten tekst, tym szybciej i taniej pójdzie praca. Najlepszym formatem wyjściowym jest zwykły plik Worda (lub jego darmowy odpowiednik). Nie InDesign, nie PDF, nie Canva — surowy tekst, który składacz wleje do programu graficznego i tam dopiero nada mu marginesy, kroje pisma i nagłówki.

Zanim oddasz manuskrypt, warto go uporządkować:

- **Oznacz konsekwentnie hierarchię** — rozdziały, podrozdziały, śródtytuły jednym, powtarzalnym stylem (np. style nagłówków Worda), a nie ręcznym pogrubieniem różnej wielkości.
- **Wyczyść tekst z „brudu”** — podwójnych spacji, twardych enterów (Shift+Enter) w środku akapitów, tabulatorów udających wcięcia. To właśnie te niewidoczne znaki powodują złe przełamania po wczytaniu do programu DTP.
- **Zbierz materiały graficzne osobno** — zdjęcia i ilustracje w pełnej rozdzielczości (minimum 300 dpi do druku), w osobnym folderze, opisane tak, by było wiadomo, gdzie trafiają.
- **Zapanuj nad formatowaniem znakowym** — kursywy i wytłuszczenia zostaw tam, gdzie mają znaczenie, ale nie używaj ich jako dekoracji.

Rozpisaliśmy ten etap szczegółowo w osobnym [poradniku o przygotowaniu tekstu do składu](/blog/jak-przygotowac-tekst-do-skladu/) — to lektura, która potrafi zaoszczędzić kilka dni pracy i sporo pieniędzy, bo każda godzina, której składacz nie traci na sprzątanie po edytorze, to godzina przeznaczona na to, za co naprawdę mu płacisz.

Pamiętaj o jednej kolejności: **redakcja i korekta językowa idą przed składem.** Wprowadzanie zmian merytorycznych w gotowym składzie to przepis na chaos — jedno dodane zdanie potrafi przesunąć tekst na kilkunastu kolejnych stronach.

---

## Etap 2: makieta i próbny skład

To etap, którego nie wolno przyspieszać. Zanim ktokolwiek złoży choćby jeden rozdział, ustala się fundamenty:

- **format książki** — najczęściej A5 (148×210 mm) lub B5, czasem niestandardowy, np. 145×205 mm obsługiwany jednocześnie przez Empik Selfpublishing i Amazon KDP;
- **siatka i marginesy** — w tym wewnętrzny margines na oprawę;
- **krój i stopień pisma tekstu głównego oraz interlinia**;
- **wygląd pagin, żywej paginy, stron rozdziałowych, przypisów**.

Na tej podstawie składacz przygotowuje **próbny skład** — kilka–kilkanaście stron pokazujących, jak będzie wyglądała cała książka. To moment na decyzje, bo po złożeniu całości zmiana czcionki tekstu głównego, wielkości marginesów czy formatu oznacza często przerabianie publikacji od nowa — z opóźnieniami i dodatkowymi kosztami.

Branża nieprzypadkowo porównuje ten etap do gry w ping-ponga: składacz proponuje, autor reaguje, projekt krąży tam i z powrotem. Im sprawniejsza komunikacja i im lepiej autor wie, czego chce, tym krócej to trwa. Warto się tu nie spieszyć — to inwestycja, która zwraca się na każdej kolejnej stronie.

---

## Etap 3: właściwy skład i łamanie tekstu

Po zatwierdzeniu makiety zaczyna się główna praca. Tekst zostaje wczytany do programu, a składacz nadaje poszczególnym fragmentom przygotowane wcześniej style akapitowe i znakowe, układa kolumny, oblewa tekstem zdjęcia, tabele i wykresy, a następnie poluje na błędy typograficzne, których oko laika zwykle nie wyłapuje.

Oto błędy, które profesjonalny skład eliminuje:

| Błąd | Co to znaczy |
|------|--------------|
| **Sierota** | Jednoliterowy spójnik (`i`, `w`, `z`, `a`) pozostawiony na końcu wiersza — przerzuca się go do następnej linii |
| **Wdowa** | Krótki, samotny wyraz lub fragment kończący akapit |
| **Bękart** | Pierwszy wiersz akapitu, który sam zostaje u dołu kolumny |
| **Szewc** | Ostatni wiersz akapitu przeniesiony na początek nowej kolumny |
| **Złe justowanie** | Zbyt duże lub zbyt małe światła między wyrazami („rzeki” bieli w akapicie) |
| **Dywizy zamiast półpauz** | Niewłaściwa kreska w zakresach liczb i wtrąceniach |

W przypadku tekstów technicznych, naukowych czy podręczników dochodzą jeszcze wzory matematyczne, numeracja ilustracji, przypisy i bibliografia — i tu metoda składu zaczyna mieć znaczenie. W naszej pracowni do publikacji o złożonej strukturze (przypisy, wzory, krzyżowe odwołania, indeksy) sięgamy po LaTeX, bo automatyzuje to, co w ręcznym składzie jest najbardziej żmudne i podatne na błędy. Jak wygląda taki proces od początku do końca, pokazaliśmy na przykładzie [składu podręcznika akademickiego w LaTeX-u](/blog/sklad-podrecznika-latex/). Dla powieści czy prostej prozy narzędzie ma mniejsze znaczenie — liczy się typografia, nie silnik.

Niezależnie od programu efekt ma być ten sam: spójny, czytelny, estetyczny układ, w którym nic nie rozprasza i nic nie zgrzyta.

---

## Etap 4: korekta po składzie

Wbrew intuicji skład nie kończy pracy nad tekstem — otwiera kolejną korektę. Na złożonych stronach ujawniają się rzeczy niewidoczne w Wordzie: zawieszone spójniki, nieszczęśliwe dzielenia wyrazów na granicy stron, literówki, które przetrwały wcześniejsze etapy, błędy w numeracji ilustracji czy spisie treści.

Autor (lub korektor) dostaje plik PDF — nieedytowalny, więc poprawki nanosi się jako komentarze i zaznaczenia. Lista wraca do składacza, ten wprowadza zmiany w programie i eksportuje nowego PDF-a. I tu znów rytm zależy od skali: 200 literówek poprawia się szybko, ale 600 zmian, z czego połowa to dodawanie i usuwanie akapitów, to nawet kilka dni pracy — bo każda taka zmiana przesuwa tekst dalej.

Kluczowy, często pomijany krok: **po naniesieniu poprawek ktoś musi sprawdzić, czy wprowadzono je poprawnie.** Pominięcie tej weryfikacji to najprostsza droga do błędu w wersji finalnej — tej, którą zobaczy już tylko czytelnik.

---

## Etap 5: plik produkcyjny do druku

Korektorski ping-pong dobiegł końca, układ jest zatwierdzony. Zostaje rzecz, na której kończy się najwięcej amatorskich projektów: przygotowanie pliku, którego drukarnia nie odrzuci. Druk rządzi się własnymi prawami i plik, który świetnie wygląda na ekranie, może być bezużyteczny dla maszyny.

Profesjonalny plik produkcyjny to przede wszystkim:

- **przestrzeń barw CMYK**, nie RGB — ekran świeci, papier odbija światło, i to są dwa różne światy koloru;
- **spady** (zwykle 3–5 mm) — naddatek tła wychodzący poza format, żeby po przycięciu na krawędzi nie pojawił się biały pasek;
- **znaczniki cięcia (crop marks)** informujące introligatora, gdzie przyciąć arkusz;
- **osadzone fonty** — żeby drukarnia nie podmieniła kroju na swój;
- **poprawnie wyliczona grubość grzbietu** okładki, zależna od liczby stron i gramatury papieru.

Każdy z tych elementów rozkładamy na czynniki pierwsze w osobnym tekście o [PDF-ie gotowym do drukarni](/blog/pdf-do-drukarni/). To właśnie na tym etapie najczęściej dochodzi do odrzutów: brak spadów, profil RGB, grzbiet rozjechany o milimetr. Doświadczona drukarnia czy platforma POD takiego pliku po prostu nie przyjmie — a jeśli przyjmie i wydrukuje, błąd ujawni się dopiero na całym nakładzie, kiedy nic już nie da się cofnąć.

Warto pamiętać, że e-book to osobna ścieżka. Tu zamiast CMYK i spadów liczy się responsywność, a formaty EPUB i MOBI skalują się do ekranu czytnika lepiej niż sztywny PDF. Często z tego samego składu powstają dwie wersje: produkcyjny PDF do druku i osobno przygotowany plik elektroniczny.

---

## Ile to trwa i ile kosztuje

Nie ma jednej odpowiedzi, bo czas i cena zależą od złożoności materiału. Orientacyjnie:

| Czynnik | Wpływ na tempo i koszt |
|---------|------------------------|
| **Sam tekst (proza)** | ok. 4 arkusze wydawnicze dziennie; najtaniej |
| **Tekst ze zdjęciami/tabelami** | wolniej; dopłata za każdy element |
| **E-book graficzny** | nawet 1 arkusz dziennie |
| **Liczba i obszerność poprawek** | od kilku godzin do kilku dni |
| **Częstość konsultacji z autorem** | im więcej, tym dłużej |

Jednostką rozliczeniową w branży jest **arkusz wydawniczy** — 40 000 znaków ze spacjami. Stawki za skład wahają się zwykle od ok. 70 zł netto za arkusz prostej prozy do 100–150 zł za pozycję naukową z przypisami, tabelami i grafikami, przy czym za każde wstawione zdjęcie czy tabelę często dolicza się kilkanaście złotych. Cały cykl składowy książki to najczęściej od jednego do czterech tygodni — ale wszystko zależy od tekstu i sprawności współpracy. Pełniejsze widełki i to, co konkretnie podbija cenę, zebraliśmy w analizie [ile kosztuje skład tekstu](/blog/ile-kosztuje-sklad-tekstu/).

Dla porównania skali całego przedsięwzięcia: skład to tylko jeden z wielu kosztów wydania książki. Gdy dietetyk Michał Wrzosek rozliczył self-publishing swojej książki *Projekt: Zdrowe życie*, projekt i skład kosztowały 6000 zł — przy całkowitym budżecie ponad 108 700 zł i ponad 1256 godzinach pracy. Skład jest więc ułamkiem kosztu, ale ułamkiem, który decyduje o tym, czy reszta inwestycji wygląda profesjonalnie, czy „jakby składał ją ósmoklasista w paincie”.

---

## Co warto zapamiętać

Skład książki to nie jeden klik „eksportuj do PDF”, lecz uporządkowany ciąg etapów, w którym każdy następny zależy od jakości poprzedniego. Czysty manuskrypt przyspiesza łamanie. Dobrze przemyślana makieta oszczędza przeróbek. Staranna korekta po składzie ratuje przed błędem w nakładzie. A poprawnie przygotowany plik produkcyjny decyduje o tym, czy drukarnia w ogóle przyjmie Twoją książkę.

Można przejść tę drogę samodzielnie — pod warunkiem, że ma się czas na naukę programu, podstawy typografii i nerwy na żargon drukarni. Można też oddać techniczną stronę w ręce kogoś, kto robi to na co dzień, i skupić się na tym, co tylko autor potrafi zrobić: napisać dobrą treść. Jeśli skłaniasz się ku tej drugiej opcji, zobacz, jak wygląda u nas [skład książek od strony usługi](/uslugi/ksiazki/) — od surowego pliku Worda po gotowy plik, który maszyna drukarska przyjmie bez uwag.