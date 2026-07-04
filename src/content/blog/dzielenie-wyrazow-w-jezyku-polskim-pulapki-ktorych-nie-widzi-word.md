---
title: "Dzielenie wyrazów w polskim tekście — pułapki Worda"
description: "Dzielenie wyrazów w języku polskim opiera się nie na sylabach, lecz na budowie słowa — i właśnie dlatego Word tak często dzieli źle. Pokazujemy pułapki i sposoby na poprawny skład."
date: 2026-07-04
category: "Typografia"
tags:
  ["dzielenie wyrazów polski", "typografia", "skład tekstu", "twarda spacja", "latex", "word", "przenoszenie wyrazów"]
---

Redaktorka odbiera od autora plik Worda z włączonym automatycznym dzieleniem. Wygląda schludnie — do momentu, aż na stronie 40 znajduje podział „gałą-zka”, a dwie linijki niżej „grzą-dce”. Word rozciął oba wyrazy dokładnie tam, gdzie słyszymy granicę sylaby — i oba pomylił. Poprawnie jest bowiem „gałąz-ka” i „grząd-ka”, bo w polszczyźnie o miejscu podziału nie decyduje ucho, tylko budowa słowa. To nie jest wyjątek ani drobiazg: to reguła, której edytor tekstu z zasady nie egzekwuje.

Dzielenie wyrazów w języku polskim wygląda na temat błahy, a jest jednym z najczęstszych źródeł błędów w składzie. Poniżej rozkładamy je na czynniki pierwsze: pokazujemy, gdzie Word się myli, dlaczego zawodowy skład się nie myli, i co z tego wynika dla każdego, kto chce wydać porządny tekst.

---

## Dwa kryteria: dlaczego ucho nie wystarcza

Polska ortografia opiera przenoszenie wyrazów na **dwóch kryteriach**: fonetycznym i morfologicznym. Fonetyczne każe dzielić zgodnie z podziałem na sylaby (*bu-rza*, *do-mek*, *ma-ma*). Morfologiczne każe dzielić zgodnie z budową wyrazu — oddzielając przedrostek od rdzenia, a w wyrazach złożonych łamiąc w miejscu złożenia (*roz-łąka*, *od-dźwięk*, *noc-leg*).

Kluczowa zasada, sformułowana już w słowniku ortograficznym Szymczaka i powtarzana przez Poradnię Językową PWN, brzmi: **kryterium morfologiczne jest nadrzędne wobec fonetycznego**. Gdy oba wskazują różne miejsca, wygrywa budowa słowa. Dlatego „gałąz-ka” (rdzeń *gałąz-* + przyrostek *-ka*), a nie sylabiczne „gałą-zka”. Dlatego „wy-ssać”, a nie „wys-sać” — mimo że reguła rozdzielania dwóch jednakowych liter sama w sobie sugerowałaby coś innego.

Word tego rozróżnienia nie zna. Jego automat operuje na wzorcach dopasowanych do brzmienia, nie do morfologii, więc systematycznie faworyzuje podział fonetyczny — czyli ten słabszy. W tekście ciągłym, wyjustowanym, taki błąd potrafi się powtórzyć kilkadziesiąt razy, zanim ktokolwiek go zauważy.

---

## Czego nie wolno rozdzielać

Zanim przejdziemy do niuansów, warto zapamiętać krótką listę **jednostek niepodzielnych**. Nie dzielimy:

- **wyrazów jednosylabowych** — *gra*, *ból*, *nos*, *dąb*, *łoś*;
- **połączeń liter oznaczających jedną głoskę** — *sz*, *rz*, *cz*, *ch*, *dz*, *dź*, *dż* oraz *dzi* (dlatego *du-szek*, nie *dus-zek*);
- **połączenia spółgłoski, litery „i” zmiękczającej i samogłoski** — *dzie-ci*, *pie-nią-dze*, nie *dzi-eci*;
- **dwugłosek w obrębie sylaby** — *au*, *eu* (*astro-nau-ta*, *Eu-ro-pa*, *pau-za*).

To reguły, które człowiek zna intuicyjnie, a program potrafi złamać — zwłaszcza przy wyrazach obcych i nazwach własnych, gdzie brzmienie rozjeżdża się z pisownią.

---

## Podwójne litery, grupy spółgłosek i inne miny

Najwięcej pułapek kryje się w grupach spółgłoskowych i w wyrazach złożonych. Poniżej najważniejsze przypadki zebrane razem:

| Przypadek | Reguła | Poprawnie | Błędnie |
|---|---|---|---|
| Dwie jednakowe litery | Rozdzielamy — po jednej na wiersz | *man-na*, *get-to*, *net-to* | *ma-nna* |
| …ale morfologia ma pierwszeństwo | Przedrostek/rdzeń wygrywa | *wy-ssać*, *ode-ssie* | *wys-sać* |
| Grupa spółgłosek | Przeniesiona część musi móc zaczynać polski wyraz | *ocem-brować* | *oce-mbrować* |
| Przedrostek | Oddzielamy w miejscu złożenia | *roz-weselić*, *pod-płomyk*, *nad-chodzić* | *ro-zweselić* |
| Wyraz złożony | Łamiemy w miejscu złożenia | *noc-leg*, *Wielka-noc*, *kraj-obraz* | *no-cleg* |
| Wrostek łączący -o-/-i-/-y- | Zostaje przy pierwszym członie | *deko-rolka*→*desko-rolka*, *szaro-bury* | *szar-obury* |

Dwie rzeczy warto podkreślić. Po pierwsze, reguła „przeniesiona cząstka musi móc rozpocząć polski wyraz” — w polszczyźnie nie ma słów zaczynających się od *mbr*, więc *oce-mbrować* jest wykluczone. Po drugie, morfologia bywa nieoczywista nawet dla człowieka: klasyczny przykład to *ode-ssie* (rozbiór na przedrostek) kontra *Odessie* (miejscownik od *Odessa*), gdzie o podziale decyduje wyłącznie znaczenie zdania. Podobnie *podróżować*, *odziewać*, *podrobić* czy *narwali* — te same litery, dwa różne rozbiory, a rozstrzyga kontekst semantyczny. Żaden algorytm tego nie „usłyszy”.

Do tego dochodzą wyrazy z łącznikiem. W polszczyźnie *biało-czerwony* przenosimy inaczej niż w angielskim: łącznik **powtarzamy na początku nowego wiersza** — `biało-` / `-czerwony`. Angielskie *machine-oriented* dzieli się bez powtórki. Ta drobna różnica to jeden z najczęstszych błędów w tekstach składanych narzędziem z ustawionym niepolskim językiem.

---

## Sieroty, twarda spacja i granica wiersza

Osobna kategoria to nie tyle *dzielenie* wyrazów, co **niedopuszczanie do złego zawieszenia** ich na granicy wiersza. Polska Norma i praktyka wydawnicza zakazują zostawiania na końcu linii jednoliterowych spójników i przyimków — *a*, *i*, *o*, *u*, *w*, *z*. To tak zwane **sieroty** (wiszące spójniki). Uwaga: wyrazy dwuliterowe — *we*, *na*, *za*, *po* — sierotami nie są i mogą stać na końcu wiersza.

Poza sierotami norma odradza rozdzielanie całych bloków, które tworzą logiczną całość:

- inicjały przed nazwiskiem — *J. Nowak*, *A. Kowalska*;
- tytuły przed nazwiskiem — *prof.*, *mgr*, *inż.*;
- liczby i jednostki — *50 km/h*, *10 zł/kg*, *8 000 000*, skala *1:25 000*;
- daty, skrótowce (*PAN*, *WIBOR*), zestawienia typu *II wojna światowa* czy *Karol XVI Gustaw*.

Narzędziem obrony jest **twarda spacja** (spacja nierozdzielająca) — w Wordzie `Ctrl+Shift+spacja`, w HTML `&nbsp;`, w kodzie znaku `Alt+0160`. Skleja ona spójnik z następnym wyrazem tak, że nie da się ich rozdzielić na granicy wiersza.

Tu jednak zaczyna się problem, o którym niewielu autorów wie. Twarda spacja wymusza **stałą** odległość między połączonymi wyrazami, podczas gdy resztę wiersza justowanie rozciąga elastycznie. Efekt: jeden odstęp krótszy od pozostałych, zaburzony rytm — szczególnie brzydki, gdy sklejona para trafia na początek justowanej linii. Dlatego doświadczeni składacze przestrzegają, by twardych spacji nie wsypywać hurtem przez „Zamień wszystko” w całym dokumencie, tylko wstawiać je świadomie na końcu redakcji, a w razie potrzeby korygować światło. Ręczne protezy w rodzaju wciskania Entera są jeszcze gorsze: po najmniejszej zmianie tekstu, czcionki czy marginesu taki „miękki Enter” ląduje w środku wiersza i psuje skład.

Sieroty to jeden z całej rodziny „grzechów łamania” — obok wdów, bękartów i szewców. Rozpisujemy je szerzej w tekście [Wdowy, sieroty i bękarty — grzechy składu w typografii](/blog/typografia-polska-wdowy-sieroty-i-bekarty-grzechy-skladu-i-jak-ich/).

---

## Dlaczego Word się myli, a zawodowy skład nie

![Porównanie tego samego akapitu z błędnym dzieleniem fonetycznym Worda i poprawnym dzieleniem morfologicznym w profesjonalnym składzie.](/blog/dzielenie-wyrazow-w-jezyku-polskim-pulapki-ktorych-nie-widzi-word/01-ilustracja.webp)

*Ten sam akapit realnie złożony w LaTeX-u: po lewej podziały fonetyczne (jak w Wordzie), po prawej poprawne morfologiczne.*


Skąd bierze się przewaga profesjonalnych systemów składu? Z zupełnie innego podejścia do problemu. TeX — silnik, na którym opiera się większość poważnego składu naukowego i książkowego — używa **algorytmu Lianga** (rozprawa doktorska, Stanford 1983). Zamiast zaszywać reguły w kodzie, TeX operuje na zbiorze **wzorców**: krótkich ciągów liter i cyfr, gdzie cyfra nieparzysta oznacza dozwolone miejsce podziału. Słowo *odkaszlnąć* algorytm rozkłada na wzorce i wychodzi mu *od-kaszl-nąć* — dwa poprawne punkty.

Siła tej metody polega na tym, że wzorców dostarczają językoznawcy, a nie programiści, i że można je dowolnie zagęszczać. Dla polszczyzny H. Kołodziejska opublikowała w 1987 roku listę **2168 wzorców**; po latach testów rozrosła się ona do ponad **4053** — dla porównania standardowy zestaw amerykański liczy 4447 wzorców, francuski 804, a włoski zaledwie 88. Ta liczba sama w sobie mówi, jak bardzo dzielenie wyrazów w polskim jest nieregularne.

Że to nie teoria, pokazują stare testy porównawcze programów DTP (praca magisterska W. Puzy, Politechnika Warszawska):

| System / program | Odsetek błędnych podziałów |
|---|---|
| Cyfroset, TeX | ok. 10% |
| Dywiz (dla QuarkXPress) | powyżej 20% |
| Bizon, VP Commander | powyżej 50% |

Nawet najlepszy silnik nie schodzi do zera — bo istnieją podziały rozstrzygalne wyłącznie znaczeniowo. Dlatego dobrze zaprojektowany system pozwala człowiekowi **ingerować**: wskazać dodatkowe miejsce podziału (*discretionary hyphen*, w Wordzie `Ctrl+-`), zabronić dzielenia konkretnego słowa albo dopisać wyjątek. TeX domyślnie nie podzieli też wyrazu krótszego niż pięć liter, nie zostawi na początku mniej niż dwóch, a na końcu mniej niż trzech liter — ograniczenia, które w Wordzie trzeba ustawiać ręcznie, o ile w ogóle się o nich pamięta.

To właśnie ta różnica — silnik naprawdę rozumiejący morfologię plus kontrola człowieka — sprawia, że skład zawodowy wygląda inaczej niż tekst „z Worda”. Szerzej zestawiamy oba światy w artykule [LaTeX vs Word — kiedy edytor tekstu to za mało](/blog/latex-vs-word/), a samą istotę pracy nad łamaniem opisujemy w tekście [Co to jest skład i łamanie tekstu](/blog/co-to-jest-sklad-tekstu/).

---

## Ile podziałów pod rząd wolno? Norma PN-83

Poprawność pojedynczego podziału to jedno; estetyka całej kolumny to drugie. Polska Norma **PN-83/P-55366** („Zasady składania tekstów w języku polskim”) ogranicza liczbę **kolejnych przeniesień** w zależności od długości wiersza:

| Długość wiersza (znaki) | Maks. kolejnych przeniesień |
|---|---|
| poniżej 25 | 5 (zalecane 4) |
| 25–50 | 4 (zalecane 3) |
| 51–60 | 3 (zalecane 2) |
| powyżej 60 | 2 |

Logika jest prosta: im więcej dopuszczalnych przeniesień, tym łatwiej zrównoważyć odstępy międzywyrazowe (to samo pokazuje suwak *Lepsze odstępy / Mniej dywizów* w Adobe InDesign). Ale ciąg dzielonych wierszy jeden pod drugim obniża czytelność i wygląda brzydko — stąd górny limit. Norma dorzuca dodatkowe zakazy: nie dzielimy wyrazów dwusylabowych, nie zostawiamy końcowej sylaby *li*, nie rozrywamy liczb ani skrótów pisanych wersalikami.

Warto pamiętać, że PN-83 powstała w czasach składu zecerskiego. Współczesne silniki lepiej komponują akapit, więc wielu typografów uważa, że dopuszczalną liczbę przeniesień można dziś jeszcze obniżyć. To dobra ilustracja szerszej prawdy: nawet twarde reguły są w składzie **kompromisem** między poprawnością ortograficzną a estetyką kolumny. Jan Tschichold szedł tak daleko, że dopuszczał łamanie zasad ortograficznych na rzecz „ciasnego” składania na trzeciankę — choć jego postulaty dotyczyły niemieckiego, w którym wyrazy są dłuższe niż w polszczyźnie.

---

## Co z tym zrobić przy realnej publikacji

Praktyczny wniosek nie brzmi „porzuć Worda”, tylko „wiedz, czego od niego oczekiwać”. Kilka reguł ratujących skład:

1. **Sprawdź język dokumentu.** Automatyczne dzielenie działa poprawnie tylko wtedy, gdy tekst jest oznaczony jako polski. Fragment wklejony z ustawionym angielskim będzie dzielony według obcych wzorców — i to jest jedna z najczęstszych przyczyn błędów w pracach dyplomowych.
2. **Nie ufaj automatowi w miejscach morfologicznych.** Przedrostki, wyrazy złożone, dwie jednakowe litery, nazwy własne i słowa obce przejrzyj ręcznie. To tam Word najczęściej wybiera podział fonetyczny zamiast morfologicznego.
3. **Twarde spacje wstawiaj świadomie, na końcu.** Po sierotach — tak; hurtem przez cały dokument — nie, bo popsują rytm justowania.
4. **Przy publikacji, na której naprawdę Ci zależy, wyjdź poza edytor.** Książka, monografia, skrypt czy raport składany w profesjonalnym systemie (u nas najczęściej LaTeX) dostają polski algorytm dzielenia z tysiącami wzorców, kontrolę wdów i bękartów oraz możliwość ręcznej ingerencji tam, gdzie rozstrzyga znaczenie.

Zanim odbierzesz gotowy plik, warto go przekartkować pod tym właśnie kątem — poprawność podziałów to jeden z punktów, które łatwo zweryfikować samodzielnie; zebraliśmy je w tekście [Jak sprawdzić jakość składu — checklista odbioru PDF](/blog/jak-sprawdzic-jakosc-skladu-lista-kontrolna-dla-klienta-odbierajacego/). A jeśli publikacją jest książka lub praca naukowa, to właśnie na etapie [składu książek](/uslugi/ksiazki/) dzielenie wyrazów przestaje być loterią, a staje się przewidywalną, kontrolowaną częścią procesu.

Dzielenie wyrazów to pozornie trywialny problem, który — jak pokazała już historia polskich programów DTP — okazuje się twardym orzechem do zgryzienia. Word nie jest tu wrogiem; jest po prostu narzędziem, które nie zna morfologii polszczyzny i nie udaje, że zna. Świadomość, gdzie kończą się jego kompetencje, to pierwszy krok do tekstu, w którym żaden „gałą-zka” nie zdradzi, że nikt tak naprawdę na skład nie spojrzał.