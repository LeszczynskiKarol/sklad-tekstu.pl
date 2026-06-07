---
title: "Skład pracy doktorskiej — wymagania, proces i typowe błędy"
description: "Skład pracy doktorskiej to etap, który decyduje o tym, czy lata badań wypadną profesjonalnie czy amatorsko. Poznaj konkretne wymagania, typowe pułapki i sprawdzony proces od manuskryptu do druku."
date: 2026-06-07
category: "Poradniki"
tags:
  ["skład pracy doktorskiej", "rozprawa doktorska", "typografia akademicka", "wymagania edytorskie", "latex praca doktorska", "skład tekstu naukowego", "praca naukowa"]
---

Promotor zatwierdził ostatni rozdział. Obrona za sześć tygodni. Doktorant otwiera plik Worda, zagląda do wymogów edytorskich uczelni i zaczyna ręcznie poprawiać marginesy, numerować ryciny, wyrównywać nagłówki. Trzy doby później praca wygląda gorzej niż przed poprawkami — złamane tabele, osierocone litery na końcach wierszy, numeracja stron rozjeżdżona po zmianie oprawy. To klasyczny scenariusz.

Skład pracy doktorskiej nie jest problemem typograficznym — jest problemem inżynieryjnym. Wymagania formalne są szczegółowe, plik musi być odporny na późne zmiany, a wynikowy PDF powinien nadawać się bezpośrednio do introligatora. Poniżej znajdziesz konkretne wymagania, opis całego procesu i listę błędów, które powtarzają się najczęściej.

---

## Wymagania formalne — co i dlaczego

Każda uczelnia publikuje własny regulamin edytorski, jednak w praktyce polskie wydziały zbiegają się w kilku kluczowych parametrach. Różnice wynikają głównie z tradycji wydziałowej i formatu oprawy.

| Parametr | Typowy zakres | Uwaga |
|---|---|---|
| Format papieru | A4, druk dwustronny | Jednostronny dopuszczalny, ale marnotrawny |
| Margines wewnętrzny (oprawny) | 3,0–3,5 cm | Niezbędny na zszycie lub klej oprawy |
| Marginesy pozostałe | 2,0–2,5 cm | Lustrzane przy druku dwustronnym |
| Czcionka podstawowa | Times New Roman lub Calibri/Arial | Times New Roman to akademicki standard |
| Rozmiar tekstu głównego | 12 pkt | Stały wymóg niemal wszędzie |
| Interlinia | 1,5 wiersza | Dopuszczalna 1,0–1,5 |
| Rozmiar tytułu rozdziału | 16 pkt, pogrubiony | Tytuł poziomu I |
| Rozmiar tytułu podrozdziału | 14 pkt, pogrubiony | Poziom II |
| Numeracja stron | Stopka, prawa strona | Strona tytułowa bez numeru |
| Rozmiar przypisów | 10 pkt | Interlinia 1,0 |

Marginesy lustrzane — czyli asymetryczne, odwrócone na stronach parzystych i nieparzystych — są wymagane przy druku dwustronnym przez Politechnikę Łódzką i większość uczelni technicznych. Jeśli zlecasz druk offsetowy, introligator oczekuje właśnie takiego układu; symetryczne marginesy prowadzą do tego, że tekst ląduje zbyt blisko grzbietu na co drugiej stronie.

---

## Struktura dokumentu — hierarchia, nie estetyka

Praca doktorska ma ścisłą hierarchię części, a każda z nich niesie określone wymagania edytorskie. Typowa struktura wygląda następująco:

1. Strona tytułowa — układ ściśle według wzoru uczelni (nie tworzymy własnego)
2. Abstrakt w języku polskim i angielskim — max. 1400–2000 znaków ze spacjami
3. Spis treści — generowany automatycznie, wcięcia odpowiadające poziomom nagłówków
4. Wstęp — nie numerowany jako rozdział lub numerowany jako rozdział 1, zależy od regulaminu
5. Rozdziały merytoryczne z podrozdziałami (numeracja arabska: 1., 1.1., 1.1.1.)
6. Zakończenie
7. Bibliografia — układ alfabetyczny wg nazwisk autorów, min. kilkadziesiąt pozycji, w tym zagraniczne
8. Wykazy tabel i rycin
9. Aneksy

![Strona tytułowa rozprawy doktorskiej złożona w LaTeX-u — nazwa uczelni i wydziału wersalikami, autor, tytuł pracy, podtytuł, „Rozprawa doktorska", promotor i promotor pomocniczy, miejsce i rok](/blog/sklad-pracy-doktorskiej/01-strona-tytulowa.jpg)

*Strona tytułowa złożona w LaTeX-u — pełny układ wymagany przez uczelnię, krój Times, wyśrodkowana kompozycja.*

Tytuły rozdziałów piszemy w wersalikach (SMALL CAPS lub PEŁNE WERSALIKI zależnie od regulaminu), bez kropki na końcu. Tytuły podrozdziałów — normalny zapis, bez kropki. Każdy nowy rozdział główny zaczyna się od nowej strony — to wymóg formalny, nie estetyczny.

Akapity numerowane cyframi arabskimi zarezerwowane są wyłącznie dla struktury rozdziałów i podrozdziałów. Wyliczenia w tekście oznacza się kropką (pierwszy stopień) lub pauzą (drugi stopień).

Warto przeczytać [ogólne wprowadzenie do składu tekstu](/blog/co-to-jest-sklad-tekstu/), żeby rozumieć, dlaczego te decyzje mają znaczenie wykraczające poza estetykę.

---

## Tabele i ryciny — gdzie tkwi pułapka

Tabele i ryciny (rysunki, wykresy, schematy, zdjęcia — wszystko co nie jest tekstem i tabelą) rządzą się odwrotną logiką:

- **Tytuł tabeli** — nad tabelą
- **Tytuł ryciny** — pod ryciną
- **Źródło** — pod każdą tabelą i ryciną, kursywą, rozmiar 10 pkt

Numeracja prowadzona jest osobno dla tabel i rycin, przy czym większość regulaminów zaleca numerację w obrębie rozdziału: Tabela 3.2 oznacza drugą tabelę w rozdziale trzecim. Niektóre wydziały dopuszczają numerację ciągłą w całej pracy — wybór należy uzgodnić z promotorem i stosować konsekwentnie.

Błąd, który powtarza się nagminnie: tabela lub rycina bez podanego źródła. Nawet jeśli dane są własne, pod tabelą musi pojawić się „Opracowanie własne" lub „Źródło: badania własne". Brak tego zapisu to formalny mankament recenzji.

Czcionka w zawartości tabeli powinna wynosić 10 pkt — nie 12 jak tekst główny. Ogranicza to ryzyko łamania tabeli na dwie strony przy gęstych danych.

---

## Narzędzia: wybór ma konsekwencje

Dwa narzędzia dominują w polskiej akademii: Microsoft Word i LaTeX. Wybór narzędzia nie jest kwestią gustu — decyduje o kosztach pracy nad składem i odporności dokumentu na zmiany.

**Word** jest szybki na start, ale przy dokumencie liczącym 200+ stron zaczyna sprawiać kłopoty: spis treści wymaga ręcznej aktualizacji po każdej zmianie, numeracja krzyżowa (odwołania do rysunków: „patrz Rysunek 3.4") jest krucha, a zmiana marginesu potrafi przestawić strony z podwójnym tytułem. Do sprawnego zarządzania przy dużej pracy potrzebne są style akapitowe, sekcje i korespondencja seryjna — narzędzia, których większość doktorantów nigdy nie używała.

**LaTeX** rozwiązuje te problemy strukturalnie: numeracja rycin, tabeli i przypisów zarządzana jest automatycznie, spis treści generowany przez `\tableofcontents`, a marginesy lustrzane definiuje się jedną linią `\usepackage[twoside]{geometry}`. Koszt wejścia jest wyższy — trzeba nauczyć się składni — ale przy pracy 200–400 stron jest to inwestycja, która się zwraca.

Porównanie obu podejść omawiam szczegółowo w artykule [LaTeX vs Word — kiedy edytor tekstu to za mało](/blog/latex-vs-word/). Dla prac doktorskich z rozbudowanymi wzorami matematycznymi LaTeX jest de facto standardem.

Ci, którzy wybierają LaTeX, często stają przed pytaniem o środowisko pracy — szczegóły instalacji i konfiguracji opisuję w [przewodniku po instalacji lokalnej](/blog/konfiguracja-instalacja-latex/).

### Od kodu do strony — konkretny przykład

Nie chodzi o teorię. Poniższy fragment definiuje stronę pracy doktorskiej dokładnie według wymagań opisanych wyżej: margines oprawny 3,5 cm i lustrzane marginesy zewnętrzne, interlinię 1,5, eliminację sierot i wdów oraz tabelę z tytułem nad spodem i źródłem pod spodem rozmiarem 10 pkt.

```latex
\documentclass[12pt,a4paper,twoside]{report}
\usepackage[inner=3.5cm,outer=2.5cm,top=2.5cm,bottom=2.5cm]{geometry}
\usepackage{setspace}\onehalfspacing        % interlinia 1,5
\usepackage{booktabs}
\clubpenalty=10000 \widowpenalty=10000        % bez sierot, wdów i bękartów
% ...
\begin{table}
  \caption{Statystyki opisowe zmiennych modelu}   % TYTUŁ NAD tabelą
  \begin{tabular}{lrrrr}
    \toprule
    Zmienna & Średnia & Odch. std. & Min. & Maks. \\
    \midrule
    Produktywność pracy & 187,4 & 64,2 & 41,8 & 512,9 \\
    % ...
    \bottomrule
  \end{tabular}
  {\footnotesize\itshape Źródło: opracowanie własne.}  % ŹRÓDŁO POD, 10 pkt
\end{table}
```

A oto efekt — realna strona rozdziału, którą ten kod wygenerował (skompilowana w `pdflatex`):

![Strona treści pracy doktorskiej złożona w LaTeX-u — rozdział 3, tekst justowany z interlinią 1,5, Tabela 3.2 z tytułem nad i źródłem pod spodem, Rysunek 3.4 z wykresem, numeracja strony w stopce](/blog/sklad-pracy-doktorskiej/02-strona-tresci.jpg)

*Strona rozdziału złożona w LaTeX-u powyższym kodem — Times 12 pkt, interlinia 1,5, margines oprawny po lewej, Tabela 3.2 i Rysunek 3.4 ponumerowane w obrębie rozdziału, źródła pod elementami. Spis treści, numeracja i odwołania zaktualizowałyby się automatycznie po każdej zmianie.*

---

## Typowe błędy składu — lista kontrolna

Poniższe błędy trafiają do recenzji albo są zgłaszane przez promotora tuż przed oddaniem. Każdy da się wyeliminować przed wysłaniem do druku.

### Sieroty i wdowy

Sierota to pojedyncza litera (najczęściej spójnik: „i", „w", „z", „a") na końcu wiersza. Wdowa to krótka linijka (poniżej 5 wyrazów) zamykająca akapit na końcu strony lub łam. Bękart to pierwsza linijka akapitu zepchnięta na nową stronę samotnie.

W LaTeX-u eliminuje się je przez `\clubpenalty=10000` i `\widowpenalty=10000`. W Wordzie: Formatowanie akapitu → Podział wiersza i strony → Kontrola wdów i bękartów. Sieroty usuwa się przez twardą spację (Ctrl+Shift+Spacja w Wordzie, `~` w LaTeX-u).

### Wieloznaki i znaki interpunkcyjne

- Między inicjałami imion nie stawiamy spacji: K.W. Baran, nie K. W. Baran
- Dywiz (krótka kreska `-`) to łącznik w złożeniach: polsko-rosyjski
- Półpauza (`–`) ze spacją to myślnik; bez spacji — zakresy: 1974–2002, s. 19–20
- Pauza (`—`) rzadko używana w tekście polskim, spotykana w wyliczeniach wielostopniowych
- Cudzysłów w tekście polskim: „drukarski" („…"), nie "prostokątny"

### Numeracja stron przy sekcjach

Strona tytułowa nie nosi numeru, ale jest liczona jako strona 1. Spis treści zaczyna się od strony 3 lub 2 (zależnie od uczelni). Rozdziały merytoryczne kontynuują numerację arabską. Jeśli praca ma aneksy z własną numeracją (A1, A2…), przełączenie wymaga w Wordzie nowej sekcji, a w LaTeX-u restartu licznika `\setcounter{page}{1}` z odpowiednim prefixem.

### Tabele rozrywające się między stronami

Tabela przecięta między stronicami bywa akceptowalna (i wymagana dla dużych zestawień), ale wymaga powtórzenia nagłówka na drugiej stronie. W LaTeX-u służy do tego pakiet `longtable`. W Wordzie: zaznacz wiersze nagłówkowe → Właściwości tabeli → Wiersz → Powtarzaj jako wiersz nagłówka na każdej stronie.

### Odwołania do nieistniejących elementów

„Jak pokazano na Rysunku 4.5" — a Rysunek 4.5 nie istnieje, bo doktorant zmienił numerację w ostatniej chwili. W Wordzie zakładki i pola `REF` pomagają, ale są kruche. W LaTeX-u `\label` i `\ref` rozwiązują problem definitywnie — plik nie skompiluje się, jeśli odwołanie jest nierozwiązane.

---

## Przygotowanie PDF-u do druku

Skończony skład to jeszcze nie koniec. Plik PDF trafiający do introligatora lub drukarni musi spełniać wymagania produkcyjne. Najważniejsze:

- **Osadzenie czcionek** — sprawdzić w Acrobat Reader: Plik → Właściwości → Czcionki. Każda czcionka powinna mieć status „osadzona". LaTeX osadza czcionki domyślnie; Word wymaga eksportu przez „Zapisz jako PDF" z odpowiednimi ustawieniami.
- **Spady (bleed)** — przy pracach z pełnokolorowymi stronami tytułowymi drukowanymi do krawędzi: 3 mm po każdej stronie. Dla standardowej pracy akademickiej spady nie są wymagane.
- **Rozdzielczość grafik** — ryciny wektorowe (EPS, SVG, PDF) skalują się bez utraty jakości. Grafiki rastrowe (wykresy ze zrzutów ekranu) powinny mieć min. 300 DPI przy docelowym rozmiarze.

Szczegóły całego procesu przygotowania PDF-u opisuję w oddzielnym poradniku: [PDF gotowy do drukarni — CMYK, spady, crop marks i osadzanie fontów](/blog/pdf-do-drukarni/).

---

## Zlecenie składu — kiedy to ma sens

Część doktorantów decyduje się na profesjonalne [zlecenie składu pracy naukowej](/uslugi/prace-naukowe/). Jest to opłacalne przede wszystkim wtedy, gdy:

- praca zawiera złożoną matematykę lub chemię (wzory wymagające LaTeX-a, a doktorant go nie zna)
- regulamin uczelni jest szczegółowy i wymaga kilku iteracji korekt
- czas przed obroną jest krótki, a samodzielna nauka narzędzi jest nierealistyczna

Koszt profesjonalnego składu pracy doktorskiej zależy od objętości, stopnia skomplikowania materiału i standardu wyjściowego. Ogólny przegląd stawek znajdziesz w artykule [Ile kosztuje skład tekstu?](/blog/ile-kosztuje-sklad-tekstu/).

Dla tych, którzy wolą samodzielnie kontrolować plik, dobry punkt wyjścia to artykuł [jak przygotować tekst do składu](/blog/jak-przygotowac-tekst-do-skladu/) — opisuje, w jakiej formie oddać manuskrypt, żeby skrócić czas pracy własnej lub pracy składacza do minimum.

---

Skład pracy doktorskiej jest technicznie wykonalny samodzielnie — pod warunkiem że zacznie się go planować tydzień przed terminem, a nie dzień. Największe problemy nie biorą się z nieznajomości typografii, lecz z pośpiechu i z traktowania narzędzia jak nieistotnego dodatku do treści naukowej. Tymczasem komisja i recenzent czytają wydrukowaną pracę. To, co widzą, jest wynikiem składu.