---
title: "Jak zacząć z LaTeX-em — praktyczny przewodnik dla początkujących"
description: "Kompletny poradnik wprowadzający do systemu LaTeX. Od pierwszego dokumentu, przez wzory matematyczne i tabele, po bibliografię i ilustracje. Wszystko, czego potrzebujesz, żeby zacząć składać profesjonalne dokumenty."
date: 2025-02-12
category: "Poradniki"
tags:
  [
    "latex",
    "poradnik",
    "początkujący",
    "tutorial",
    "wzory matematyczne",
    "pierwszy dokument",
    "tex live",
  ]
---

Słyszałeś, że LaTeX produkuje piękniejsze dokumenty niż Word. Widziałeś te perfekcyjnie złożone prace naukowe, podręczniki z idealnymi wzorami i spisy treści, które nigdy się nie rozjeżdżają. Chcesz spróbować — ale nie wiesz, od czego zacząć. Ten artykuł jest dla Ciebie. Przeprowadzimy Cię krok po kroku: od pustego pliku do gotowego PDF-a z tytułem, rozdziałami, wzorami, tabelą i bibliografią.

---

## Czym jest LaTeX (i czym nie jest)

LaTeX (wymowa: _la-tech_ lub _lej-tech_) to **system składu tekstu**, nie edytor. To ważne rozróżnienie. Word, Google Docs czy LibreOffice to edytory WYSIWYG (_What You See Is What You Get_) — formatujesz tekst wizualnie, widząc od razu efekt końcowy. LaTeX działa inaczej: piszesz **kod źródłowy** w pliku `.tex`, a następnie **kompilujesz** go do PDF-a.

Analogia dla programistów: LaTeX jest do dokumentów tym, czym HTML+CSS do stron internetowych. Definiujesz strukturę i treść, a system zajmuje się renderowaniem.

Analogia dla nie-programistów: wyobraź sobie, że zamiast ręcznie ustawiać marginesy, kroje pisma i odstępy, mówisz komputerowi _„to jest tytuł, to jest akapit, to jest wzór"_ — a on sam wie, jak to najlepiej wyglądać powinno.

LaTeX został stworzony przez Lesliego Lamporta w 1984 roku jako nakładka na system TeX Donalda Knutha (1978). Od ponad 40 lat jest **standardem** w wydawnictwach naukowych, uczelniach i firmach technologicznych na całym świecie.

---

## Czego potrzebujesz, żeby zacząć

Do pracy z LaTeX-em potrzebujesz dwóch rzeczy:

- **Dystrybucja TeX** — pakiet programów, które kompilują pliki `.tex` do PDF. Najpopularniejsze to TeX Live (multiplatformowa, rekomendowana), MiKTeX (Windows) i MacTeX (macOS — de facto TeX Live z GUI).
- **Edytor tekstu** — dowolny program, w którym napiszesz kod źródłowy. Może to być Notatnik, ale lepiej użyć czegoś z podświetlaniem składni i podglądem PDF.

### Dwie drogi na start

<div class="table-wrapper">

| Sposób                            | Opis                                                                          | Dla kogo                                   |
| --------------------------------- | ----------------------------------------------------------------------------- | ------------------------------------------ |
| **Overleaf** (online)             | Przeglądarkowy edytor — zero instalacji, konto za darmo, kompilacja w chmurze | Początkujący, studenci, szybkie projekty   |
| **Lokalnie** (TeX Live + VS Code) | Instalacja na komputerze (~8 GB), pełna kontrola, brak limitów                | Zaawansowani, duże projekty, praca offline |

</div>

**Rekomendacja na start:** zacznij od Overleaf — wejdź na [overleaf.com](https://overleaf.com), załóż konto i kliknij _„New Project → Blank Project"_. Za 30 sekund będziesz miał działające środowisko. Gdy poczujesz, że potrzebujesz więcej (dłuższy czas kompilacji, praca offline, Git), przejdź na instalację lokalną — opisaliśmy to szczegółowo w artykule [Overleaf vs lokalny LaTeX](/blog/overleaf-vs-lokalny-latex/).

---

## Twój pierwszy dokument

Oto najprostszy działający dokument LaTeX:

```
\documentclass[12pt, a4paper]{article}

\begin{document}

Witaj, świecie!

\end{document}
```

Wynik kompilacji:

![Wynik kompilacji pierwszego dokumentu LaTeX — „Witaj, świecie!"](/blog/jak-zaczac-z-latexem/01-pierwszy-dokument.jpg)

Trzy linie, trzy koncepty — to cała „ramka" każdego dokumentu LaTeX:

1. **`\documentclass`** — deklarujesz, jaki typ dokumentu tworzysz. Opcje w nawiasach kwadratowych (`12pt, a4paper`) to ustawienia globalne.
2. **`\begin{document}`** — tutaj zaczyna się właściwa treść.
3. **`\end{document}`** — tutaj się kończy. Wszystko poniżej LaTeX ignoruje.

Wszystko między `\documentclass` a `\begin{document}` to **preambula** — miejsce, gdzie ładujesz pakiety, definiujesz tytuł, autora i konfigurację dokumentu.

---

## Anatomia prawdziwego dokumentu

Rozbudujmy nasz przykład do czegoś użytecznego:

```
\documentclass[12pt, a4paper]{article}

% ── Preambula ──────────────────────────
\usepackage[utf8]{inputenc}      % kodowanie znaków
\usepackage[T1]{fontenc}         % kodowanie fontów
\usepackage[polish]{babel}       % dzielenie wyrazów, „cudzysłowy"
\usepackage{lmodern}             % font Latin Modern
\usepackage{microtype}           % optyczne wyrównanie marginesów
\usepackage{amsmath, amssymb}    % wzory matematyczne
\usepackage{graphicx}            % wstawianie ilustracji
\usepackage{booktabs}            % ładniejsze tabele
\usepackage{hyperref}            % hiperłącza w PDF

\title{Mój pierwszy dokument}
\author{Jan Kowalski}
\date{\today}

% ── Treść ──────────────────────────────
\begin{document}

\maketitle                       % generuje stronę tytułową
\tableofcontents                 % generuje spis treści
\newpage

\section{Wstęp}
To jest mój pierwszy dokument w systemie LaTeX.

\section{Metody}
Zastosowaliśmy analizę statystyczną opisaną
w rozdziale~\ref{sec:wyniki}.

\section{Wyniki}
\label{sec:wyniki}
Wyniki przedstawiono w tabeli~\ref{tab:dane}.

\section{Podsumowanie}
LaTeX jest prostszy, niż się wydaje.

\end{document}
```

Wynik kompilacji — gotowy PDF z tytułem, spisem treści, sekcjami i tabelą:

![Pełny dokument LaTeX — strona tytułowa, spis treści, sekcje i tabela z booktabs](/blog/jak-zaczac-z-latexem/02-pelny-dokument-str1.jpg)

Zwróć uwagę na kilka kluczowych mechanizmów:

- **`\usepackage{...}`** — ładuje pakiety rozszerzające funkcjonalność. Pakiety to największa siła LaTeX-a — jest ich ponad 4 000, na każdy problem znajdziesz gotowe rozwiązanie.
- **`\label` i `\ref`** — system cross-referencji. Oznaczasz element etykietą (`\label{sec:wyniki}`), a potem odwołujesz się do niego (`\ref{sec:wyniki}`). LaTeX sam wstawi właściwy numer. Dodasz nowy rozdział w środku? Cała reszta przenumerowuje się automatycznie.
- **`\tableofcontents`** — automatyczny spis treści. Generuje się na podstawie `\section`, `\subsection` itd. Zero ręcznej pracy.
- **`~`** (tylda) — niełamliwa spacja. Zapobiega rozdzieleniu słów na końcu wiersza: `w rozdziale~3` nigdy nie zostanie podzielone tak, że „3" znajdzie się na początku następnej linii.
- **`%`** — komentarz. Wszystko po znaku procenta do końca linii jest ignorowane.

---

## Klasy dokumentów — którą wybrać

Klasa dokumentu (to, co wpisujesz w `\documentclass{}`) definiuje strukturę i domyślne formatowanie. Oto najważniejsze klasy:

<div class="table-wrapper">

| Klasa     | Zastosowanie                      | Sekcjonowanie                     | Strona tytułowa |
| --------- | --------------------------------- | --------------------------------- | --------------- |
| `article` | Artykuły, raporty, zadania domowe | `\section` → `\subsection`        | W tekście       |
| `report`  | Dłuższe raporty, prace dyplomowe  | `\chapter` → `\section`           | Osobna strona   |
| `book`    | Książki, podręczniki, monografie  | `\part` → `\chapter` → `\section` | Osobna strona   |
| `beamer`  | Prezentacje (slajdy)              | `\frame`                          | —               |
| `letter`  | Listy formalne                    | —                                 | —               |
| `memoir`  | Uniwersalna, zaawansowana         | Wszystko z `book` + więcej        | Konfigurowalna  |

</div>

Tak wygląda hierarchia sekcjonowania w klasie `article`:

![Hierarchia sekcjonowania LaTeX — section, subsection, subsubsection, paragraph](/blog/jak-zaczac-z-latexem/06-klasy-dokumentow.jpg)

**Zasada kciuka:** jeśli nie wiesz, którą wybrać — zacznij od `article`. Gdy potrzebujesz rozdziałów (`\chapter`), przejdź na `report`. Gdy piszesz książkę z dedykacją, przedmową i indeksem — użyj `book` lub `memoir`.

---

## Wzory matematyczne — to, w czym LaTeX jest najlepszy

To jest **ta** funkcja, która sprawiła, że LaTeX stał się standardem w nauce. Wzory wpisuje się w dwóch trybach:

**Tryb inline** — wzór w tekście, otoczony znakami dolara:

```
Równanie Einsteina $E = mc^2$ zmieniło fizykę.
```

Wynik: równanie pojawia się wewnątrz zdania, dopasowując rozmiar do tekstu.

**Tryb display** — wzór wycentrowany w osobnej linii:

```
Rozkład normalny opisuje wzór:
\[
  f(x) = \frac{1}{\sigma\sqrt{2\pi}}
  \, e^{-\frac{1}{2}\left(\frac{x-\mu}{\sigma}\right)^2}
\]
```

A oto zestaw najczęściej używanych komend matematycznych — Twój minisłownik na start:

```
% Ułamki
\frac{licznik}{mianownik}         % np. \frac{a}{b}

% Potęgi i indeksy
x^{2}     x_{i}     x_{i}^{2}    % x², xᵢ, xᵢ²

% Pierwiastki
\sqrt{x}     \sqrt[3]{x}         % √x, ³√x

% Sumy, całki, iloczyny
\sum_{i=1}^{n} x_i               % Σ
\int_{a}^{b} f(x)\,dx            % ∫
\prod_{i=1}^{n} x_i              % Π

% Litery greckie
\alpha  \beta  \gamma  \delta     % α β γ δ
\Omega  \Sigma  \Phi  \Lambda     % Ω Σ Φ Λ

% Relacje i operatory
\leq  \geq  \neq  \approx        % ≤ ≥ ≠ ≈
\cdot  \times  \div  \pm          % · × ÷ ±
\infty  \partial  \nabla          % ∞ ∂ ∇

% Macierze (wymaga pakietu amsmath)
\begin{pmatrix}
  a & b \\
  c & d
\end{pmatrix}

% Równania warunkowe
f(x) = \begin{cases}
  x^2  & \text{dla } x > 0 \\
  0    & \text{w przeciwnym razie}
\end{cases}
```

Tak wyglądają te wzory po kompilacji — rozkład normalny, całka, szereg Taylora, macierz, równania warunkowe i równania Maxwella:

![Wzory matematyczne w LaTeX — od inline po równania Maxwella](/blog/jak-zaczac-z-latexem/03-wzory-matematyczne.jpg)

**Złota zasada:** tekst wewnątrz wzorów otaczaj komendą `\text{}` (wymaga pakietu `amsmath`). Bez tego LaTeX potraktuje litery jako zmienne i sformatuje je kursywą z dziwnymi odstępami.

---

## Tabele

Tabele w LaTeX-u wymagają trochę więcej uwagi, ale dają piękne rezultaty — szczególnie z pakietem `booktabs`:

```
\usepackage{booktabs}  % w preambule

\begin{table}[htbp]
  \centering
  \caption{Porównanie algorytmów sortowania}
  \label{tab:sortowanie}
  \begin{tabular}{lcc}
    \toprule
    Algorytm      & Złożoność średnia  & Stabilny \\
    \midrule
    Bubble sort   & $O(n^2)$           & Tak      \\
    Quick sort    & $O(n \log n)$      & Nie      \\
    Merge sort    & $O(n \log n)$      & Tak      \\
    \bottomrule
  \end{tabular}
\end{table}
```

Efekt — porównaj z tabelami w Wordzie:

![Tabele LaTeX z pakietem booktabs — algorytmy sortowania i pomiary laboratoryjne](/blog/jak-zaczac-z-latexem/04-tabela-booktabs.jpg)

Kluczowe elementy:

- **`{lcc}`** — definicja kolumn: `l` (wyrównanie do lewej), `c` (centrowanie), `r` (do prawej). Tyle liter, ile kolumn.
- **`\toprule`, `\midrule`, `\bottomrule`** — linie z pakietu `booktabs`. Nigdy nie używaj `\hline` — wynik wygląda amatorsko.
- **`&`** — separator kolumn.
- **`\\`** — koniec wiersza.
- **`[htbp]`** — sugestia dla LaTeX-a, gdzie umieścić tabelę: _here_, _top_, _bottom_, _page_. LaTeX sam wybiera optymalne miejsce.

---

## Ilustracje

Wstawianie grafik wymaga pakietu `graphicx`:

```
\usepackage{graphicx}  % w preambule

\begin{figure}[htbp]
  \centering
  \includegraphics[width=0.8\textwidth]{wykres.pdf}
  \caption{Zależność temperatury od czasu.}
  \label{fig:wykres}
\end{figure}
```

**Formaty plików:** LaTeX najlepiej radzi sobie z grafikami wektorowymi — **PDF** dla diagramów i wykresów, **PNG** dla zdjęć i screenshotów. Unikaj JPG dla wykresów (rozmycie) i EPS (przestarzały format).

Odwołanie do rysunku w tekście: `Jak widać na rysunku~\ref{fig:wykres}, temperatura rośnie liniowo.` — LaTeX sam wstawi właściwy numer.

---

## Bibliografia

Do zarządzania źródłami LaTeX używa systemu **BibTeX** (lub nowszego **Biber** z pakietem `biblatex`). Źródła przechowujesz w pliku `.bib`:

```
% plik: bibliografia.bib

@article{einstein1905,
  author  = {Albert Einstein},
  title   = {Zur Elektrodynamik bewegter Körper},
  journal = {Annalen der Physik},
  year    = {1905},
  volume  = {322},
  number  = {10},
  pages   = {891--921}
}

@book{knuth1984,
  author    = {Donald E. Knuth},
  title     = {The TeXbook},
  publisher = {Addison-Wesley},
  year      = {1984}
}
```

W dokumencie cytujesz źródło komendą `\cite{}`:

```
Teoria względności~\cite{einstein1905}
zmieniła fizykę XX wieku.

\bibliographystyle{plain}       % styl bibliografii
\bibliography{bibliografia}     % nazwa pliku .bib
```

Wynik — automatyczne cytowania i sformatowana lista źródeł:

![Bibliografia w LaTeX — cytowania numeryczne i lista References](/blog/jak-zaczac-z-latexem/05-bibliografia.jpg)

LaTeX automatycznie formatuje bibliografię zgodnie z wybranym stylem (plain, apa, ieee, chicago i wiele innych), numeruje źródła i tworzy hiperłącza.

**Skąd brać wpisy BibTeX?** Google Scholar — pod każdym wynikiem kliknij ikonkę cytowania ("), wybierz „BibTeX" i skopiuj gotowy wpis. Mendeley i Zotero też eksportują do `.bib`.

---

## 10 pakietów, które zainstaluj od razu

Oto pakiety, które powinny znaleźć się w preambule praktycznie każdego dokumentu:

- **`inputenc` + `fontenc`** — poprawne kodowanie znaków (UTF-8, T1). Bez nich polskie znaki nie będą działać.
- **`babel`** z opcją `[polish]` — poprawne dzielenie wyrazów po polsku, polskie nazwy („Spis treści" zamiast „Table of Contents"), cudzysłowy.
- **`lmodern`** — font Latin Modern — ulepszona wersja domyślnego Computer Modern z pełnym wsparciem polskich znaków.
- **`microtype`** — mikrotypografia: optyczne wyrównanie marginesów, rozciąganie znaków, lepsze dzielenie wyrazów. Jedna linia kodu, widoczna poprawa jakości.
- **`amsmath` + `amssymb`** — rozszerzone środowiska matematyczne (align, cases, pmatrix) i symbole.
- **`graphicx`** — wstawianie ilustracji (`\includegraphics`).
- **`booktabs`** — profesjonalne tabele z `\toprule`, `\midrule`, `\bottomrule`.
- **`hyperref`** — klikalny spis treści, hiperłącza, zakładki w PDF. **Zawsze ładuj jako ostatni** — ten pakiet modyfikuje wiele komend i może powodować konflikty, jeśli jest załadowany zbyt wcześnie.
- **`geometry`** — łatwa kontrola marginesów: `\usepackage[margin=2.5cm]{geometry}`.
- **`enumitem`** — zaawansowana konfiguracja list (numerowanych i nienumerowanych).

---

## Najczęstsze błędy początkujących

Po latach pracy z LaTeX-em wiem, na czym potykają się nowi użytkownicy. Oto lista najczęstszych problemów i ich rozwiązań:

- **Brak `$...$` wokół wzorów** — jeśli widzisz błąd _„Missing $ inserted"_, to znaczy, że gdzieś wpisałeś symbol matematyczny (np. `_`, `^`, `\frac`) poza trybem matematycznym. Otocz wzór dolarami.
- **Niezamknięty nawias klamrowy** — LaTeX wymaga dokładnej parności `{` i `}`. Jeden brakujący nawias może wygenerować kaskadę niezrozumiałych błędów. Porady: kompiluj często (po każdym akapicie), a w VS Code włącz podświetlanie par nawiasów.
- **Brakujący pakiet** — błąd _„Undefined control sequence"_ zwykle oznacza, że użyłeś komendy z pakietu, którego nie załadowałeś w preambule. Np. `\mathbb{R}` wymaga `amssymb`.
- **Kompilacja jednorazowa przy cross-referencjach** — jeśli widzisz `??` zamiast numeru rozdziału czy rysunku, skompiluj dokument **dwukrotnie**. Pierwsze uruchomienie tworzy etykiety, drugie je wypełnia.
- **Używanie `\\` do robienia akapitów** — w LaTeX-u nowy akapit tworzy się **pustą linią**, nie podwójnym backslashem. Komenda `\\` łamie linię _wewnątrz_ akapitu (co prawie nigdy nie jest tym, czego chcesz).
- **Używanie `$$...$$` zamiast `\[...\]`** — podwójny dolar to stara składnia TeX-a. Powoduje problemy z odstępami i pakietem `amsmath`. Zawsze używaj `\[...\]` dla wzorów wyświetlanych.

---

## Od zera do gotowego PDF-a — ćwiczenie praktyczne

Najlepszy sposób nauki to praktyka. Oto zadanie, które przeprowadzi Cię przez wszystkie opisane mechanizmy:

1. Otwórz Overleaf (lub VS Code z TeX Live).
2. Utwórz nowy projekt z klasą `article`.
3. Dodaj preambulę z pakietami: `babel`, `amsmath`, `graphicx`, `booktabs`, `hyperref`.
4. Dodaj tytuł, autora i datę. Wygeneruj stronę tytułową (`\maketitle`) i spis treści (`\tableofcontents`).
5. Utwórz 3 sekcje: Wstęp, Metody, Wyniki.
6. W sekcji Metody wstaw wzór inline i wzór display.
7. W sekcji Wyniki utwórz tabelę z `booktabs`.
8. Dodaj cross-referencję z Metod do Wyników (`\label` + `\ref`).
9. Skompiluj dwukrotnie (żeby referencje się wypełniły).
10. Sprawdź, czy spis treści jest poprawny i hiperłącza działają.

Jeśli wykonasz te 10 kroków, będziesz znał **90% tego, czego potrzebujesz** do codziennej pracy z LaTeX-em. Reszta to już kwestia odkrywania kolejnych pakietów i szlifowania warsztatu.

---

## Co dalej?

LaTeX to temat-rzeka. Gdy opanujesz podstawy, warto poznać:

- **TikZ / pgfplots** — rysowanie diagramów i wykresów bezpośrednio w kodzie LaTeX (wektory, nigdy się nie pikselizują).
- **Bibliografie z Biber/BibLaTeX** — nowoczesna alternatywa dla BibTeX-a z lepszą obsługą UTF-8, stylów i filtrowania.
- **Własne komendy i środowiska** — `\newcommand` i `\newenvironment` pozwalają tworzyć skróty i automatyzować powtarzalne wzorce.
- **Klasy KOMA-Script** (`scrartcl`, `scrreprt`, `scrbook`) — europejskie alternatywy dla standardowych klas z dużo większą konfigurowalnością.
- **Git + LaTeX** — wersjonowanie plików `.tex` to czysta przyjemność (w przeciwieństwie do plików `.docx`, które w Git są bezużyteczne).

Jeśli wolisz zlecić skład profesjonaliście zamiast uczyć się samodzielnie — [napisz do nas](/kontakt/). Przyjmujemy tekst w dowolnym formacie i dostarczamy gotowy PDF w jakości drukarskiej.
