---
title: "Skład podręcznika akademickiego w LaTeX — od manuskryptu do druku"
description: "Kompletny przewodnik po procesie tworzenia podręcznika w LaTeX-u. Struktura książki, rozdziały, indeksy, glosariusze, spisy treści, bibliografie, ilustracje, środowiska dydaktyczne i przygotowanie PDF-a do druku. Dlaczego LaTeX jest standardem wydawnictw naukowych."
date: 2025-02-14
category: "Poradniki"
tags:
  [
    "latex",
    "podręcznik",
    "skład tekstu",
    "wydawnictwo naukowe",
    "book class",
    "indeks",
    "bibliografia",
    "druk",
    "print-ready PDF",
  ]
---

Dostajesz od autora 400 stron manuskryptu w Wordzie. Dwanaście rozdziałów, 200 wzorów, 80 rysunków, 35-stronicowa bibliografia i wymóg: „indeks rzeczowy na końcu". Otwierasz plik — a tam trzy różne style nagłówków, ręcznie wpisane numery rozdziałów, bibliografia sformatowana „na oko" i wzory wstawione jako screenshoty z tablicy. Znasz ten scenariusz. My też — i dlatego każdy podręcznik, który składamy, robimy w LaTeX-u. Ten artykuł pokazuje cały proces: od surowego tekstu autora do gotowego PDF-a w jakości drukarskiej, z każdym mechanizmem opisanym tak, żebyś mógł go użyć od razu.

---

## Dlaczego LaTeX jest standardem wydawnictw naukowych

To nie jest kwestia mody ani przyzwyczajenia. LaTeX dominuje w wydawnictwach akademickich z powodów czysto technicznych, które przy skali podręcznika stają się krytyczne.

Springer, Cambridge University Press, MIT Press, Oxford University Press, Elsevier, Princeton University Press — wszystkie te wydawnictwa dostarczają autorom własne klasy LaTeX-owe (pliki `.cls`) i makra do przygotowywania manuskryptów. MIT Press na swojej stronie pisze wprost: _„We strongly recommend their use"_. Cambridge University Press w swoim przewodniku dla autorów zaleca pakiet MakeIndex do tworzenia indeksów i BibTeX do bibliografii — jeszcze na etapie pisania, nie składu.

Powody są konkretne. Po pierwsze, **stabilność na dużych dokumentach** — plik `.tex` to czysty tekst, który nie akumuluje ukrytych metadanych i nie ulega uszkodzeniu. 500-stronicowy podręcznik kompiluje się tak samo niezawodnie jak 5-stronicowa notatka. Po drugie, **automatyzacja** — spis treści, numeracja rozdziałów, wzorów, tabel, rysunków, cross-referencje, indeks i bibliografia generują się automatycznie z jednego źródła. Po trzecie, **powtarzalność** — ten sam plik `.tex` skompilowany za 10 lat da identyczny PDF. Po czwarte, **jakość typograficzna** — algorytm Knutha-Plassa, mikrotypografia, precyzyjny skład wzorów matematycznych — to mechanizmy, które opisaliśmy szczegółowo w artykule [LaTeX vs Word](/blog/latex-vs-word/).

Word przy podręczniku akademickim nie jest „trudniejszy". On jest **niewystarczający** — strukturalnie nie radzi sobie z zadaniami, które w LaTeX-u są trywialne.

---

## Architektura projektu — jak zorganizować 400 stron

Podręcznik akademicki to nie jeden plik. To projekt składający się z dziesiątek plików `.tex`, plików graficznych, bazy bibliograficznej i plików konfiguracyjnych. Dobrze zorganizowana struktura katalogów to fundament, bez którego praca nad dużym dokumentem zamienia się w chaos.

Oto sprawdzona struktura, której używamy w produkcji:

```
podrecznik/
├── main.tex              % plik główny — szkielet książki
├── preambula.tex          % wszystkie pakiety i konfiguracja
├── front/
│   ├── tytulowa.tex       % strona tytułowa
│   ├── dedykacja.tex      % opcjonalna dedykacja
│   ├── przedmowa.tex      % przedmowa autora
│   └── symbole.tex        % spis oznaczeń i symboli
├── rozdzialy/
│   ├── 01-wstep.tex
│   ├── 02-podstawy.tex
│   ├── 03-metody.tex
│   ├── ...
│   └── 12-podsumowanie.tex
├── dodatki/
│   ├── A-dowody.tex
│   ├── B-tablice.tex
│   └── C-rozwiazania.tex
├── bib/
│   └── bibliografia.bib   % baza źródeł BibTeX
├── img/
│   ├── roz01/             % grafiki pogrupowane rozdziałami
│   ├── roz02/
│   └── ...
└── sty/
    └── podrecznik.sty     % własny pakiet ze stylami
```

Kluczowa zasada: **jeden rozdział = jeden plik**. Plik główny `main.tex` jest tylko szkieletem, który łączy wszystko w całość za pomocą komend `\include{}`.

---

## Plik główny — szkielet książki

Plik `main.tex` podręcznika wygląda zupełnie inaczej niż plik artykułu. Klasa `book` (lub jej odpowiednik z rodziny KOMA-Script — `scrbook`) wprowadza trójdzielną strukturę, której nie mają klasy `article` ani `report`: **frontmatter**, **mainmatter** i **backmatter**.

```
\documentclass[12pt, a4paper, twoside, openright]{book}

\input{preambula}          % ładuje pakiety i konfigurację

\begin{document}

% ── Frontmatter ────────────────────────
\frontmatter               % numeracja rzymska (i, ii, iii...)
                            % rozdziały nienumerowane
\include{front/tytulowa}
\include{front/dedykacja}
\include{front/przedmowa}

\tableofcontents
\listoffigures
\listoftables

\include{front/symbole}

% ── Mainmatter ─────────────────────────
\mainmatter                % numeracja arabska (1, 2, 3...)
                            % rozdziały numerowane
\include{rozdzialy/01-wstep}
\include{rozdzialy/02-podstawy}
\include{rozdzialy/03-metody}
% ... kolejne rozdziały ...
\include{rozdzialy/12-podsumowanie}

% ── Backmatter ─────────────────────────
\backmatter                % numeracja ciągła, rozdziały
                            % nienumerowane

\appendix
\include{dodatki/A-dowody}
\include{dodatki/B-tablice}
\include{dodatki/C-rozwiazania}

\printbibliography[heading=bibintoc]
\printindex

\end{document}
```

Trzy komendy — `\frontmatter`, `\mainmatter`, `\backmatter` — robią za kulisami więcej, niż się wydaje:

- **`\frontmatter`** — przełącza numerację stron na cyfry rzymskie (i, ii, iii…), wyłącza numerację rozdziałów, ale zachowuje ich tytuły w spisie treści. Tutaj trafia wszystko, co poprzedza właściwą treść: strona tytułowa, dedykacja, przedmowa, spisy.
- **`\mainmatter`** — resetuje licznik stron, przełącza na cyfry arabskie (1, 2, 3…) i włącza numerację rozdziałów. To rdzeń podręcznika.
- **`\backmatter`** — kontynuuje bieżącą numerację stron, ale ponownie wyłącza numerację rozdziałów. Tutaj trafiają dodatki, bibliografia i indeks.

Opcje klasy `book` w pierwszej linii też mają znaczenie. `twoside` aktywuje układ dwustronny z różnymi marginesami na stronach parzystych i nieparzystych (margines wewnętrzny — przy grzbiecie — jest szerszy niż zewnętrzny). `openright` wymusza rozpoczynanie każdego rozdziału na stronie nieparzystej (prawej) — standard w profesjonalnych podręcznikach.

![Struktura podręcznika LaTeX — frontmatter, mainmatter, backmatter z numeracją stron](/blog/sklad-podrecznika-akademickiego/01-struktura-ksiazki.jpg)

---

## Preambula podręcznika — pakiety i konfiguracja

Preambula podręcznika jest znacznie obszerniejsza niż preambula artykułu. Wydzielamy ją do osobnego pliku `preambula.tex`, żeby plik główny pozostał czytelny. Oto konfiguracja, której używamy w produkcji:

```
% ── Kodowanie i język ──────────────────
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[polish]{babel}
\usepackage{lmodern}

% ── Układ strony ───────────────────────
\usepackage[
  top=2.5cm,
  bottom=2.5cm,
  inner=3cm,           % margines przy grzbiecie (szerszy)
  outer=2cm,           % margines zewnętrzny
  bindingoffset=5mm    % dodatkowy offset na oprawę
]{geometry}

% ── Typografia ─────────────────────────
\usepackage{microtype}
\usepackage{setspace}
\onehalfspacing            % interlinia 1.5 (standard wydawniczy)

% ── Nagłówki i stopki ─────────────────
\usepackage{fancyhdr}
\pagestyle{fancy}
\fancyhf{}
\fancyhead[LE]{\thepage\quad\textsc{\nouppercase{\leftmark}}}
\fancyhead[RO]{\textsc{\nouppercase{\rightmark}}\quad\thepage}
\renewcommand{\headrulewidth}{0.4pt}

% ── Matematyka ─────────────────────────
\usepackage{amsmath, amssymb, amsthm}
\usepackage{mathtools}

% ── Ilustracje i tabele ───────────────
\usepackage{graphicx}
\graphicspath{{img/}}
\usepackage{booktabs}
\usepackage{float}
\usepackage{subcaption}    % podrysunki (a), (b), (c)

% ── Kolorowe ramki i środowiska ───────
\usepackage[most]{tcolorbox}

% ── Bibliografia ───────────────────────
\usepackage[
  backend=biber,
  style=numeric-comp,
  sorting=nyt,
  maxbibnames=99
]{biblatex}
\addbibresource{bib/bibliografia.bib}

% ── Indeks ─────────────────────────────
\usepackage{makeidx}
\makeindex

% ── Glosariusz ─────────────────────────
\usepackage[acronym, toc]{glossaries}
\makeglossaries

% ── Hiperłącza (zawsze ostatni!) ──────
\usepackage[
  colorlinks=true,
  linkcolor=blue!60!black,
  citecolor=green!50!black,
  urlcolor=blue!70!black
]{hyperref}
\usepackage[nameinlink]{cleveref}  % inteligentne referencje
```

Kilka elementów wymaga komentarza.

**Margines wewnętrzny (`inner`) jest szerszy od zewnętrznego (`outer`)** — to nie błąd, to standard. Strony podręcznika po oprawieniu „wchodzą" w grzbiet. Jeśli marginesy byłyby symetryczne, tekst przy grzbiecie byłby nieczytelny. Opcja `bindingoffset` dodaje dodatkowe milimetry na samą oprawę.

**`fancyhdr` z nagłówkami `LE` i `RO`** — `LE` oznacza _Left Even_ (lewa strona na stronach parzystych), `RO` oznacza _Right Odd_ (prawa strona na stronach nieparzystych). Na stronach parzystych w nagłówku pojawia się numer strony i nazwa rozdziału, na nieparzystych — nazwa sekcji i numer strony. To klasyczny układ podręcznikowy, który pozwala czytelnikowi na szybką orientację.

**`cleveref` ładowany po `hyperref`** — pakiet `cleveref` automatycznie dodaje typ elementu do referencji. Zamiast pisać `Rysunek~\ref{fig:wykres}` wystarczy `\cref{fig:wykres}` — LaTeX sam wstawi „Rysunek 3.7" lub „Rysunki 3.7–3.9" (w liczbie mnogiej, jeśli podasz kilka etykiet). Ogromna oszczędność czasu przy podręczniku z setkami odsyłaczy.

---

## Klasa `book` vs KOMA-Script vs `memoir` — co wybrać

Wybór klasy dokumentu to jedna z pierwszych decyzji przy projekcie podręcznika. Oto porównanie trzech najczęściej stosowanych klas:

<div class="table-wrapper">

| Cecha                | `book`                             | `scrbook` (KOMA-Script)              | `memoir`                          |
| -------------------- | ---------------------------------- | ------------------------------------ | --------------------------------- |
| Pochodzenie          | Standard LaTeX                     | Markus Kohm (Europa)                 | Peter Wilson                      |
| Konfigurowalność     | Podstawowa — wymaga wielu pakietów | Wysoka — wbudowane opcje             | Najwyższa — zastępuje pakiety     |
| Marginesy            | Przez `geometry`                   | Algorytm DIV/BCOR                    | Wbudowany system                  |
| Nagłówki/stopki      | Wymaga `fancyhdr`                  | Wbudowany `scrlayer-scrpage`         | Wbudowany system                  |
| Style rozdziałów     | Wymaga `titlesec`                  | Wbudowane `\RedeclareSectionCommand` | Wbudowane `\chapterstyle`         |
| Zgodność z pakietami | Maksymalna                         | Konflikty z `titlesec`, `fancyhdr`   | Konflikty z `titlesec`, `caption` |
| Dokumentacja         | Uniwersalna                        | Doskonała, 600+ stron                | Doskonała, 600+ stron             |
| Najlepsza dla        | Projekty z wieloma pakietami       | Książki europejskie, naukowe         | Pełna kontrola, jeden pakiet      |

</div>

**Nasza rekomendacja:** dla podręczników akademickich najczęściej stosujemy `scrbook` z rodziny KOMA-Script. Powód: algorytm `DIV` automatycznie oblicza proporcje marginesów na podstawie rozmiaru papieru i wielkości fontu, a opcja `BCOR` (_Binding CORrection_) precyzyjnie kompensuje utratę marginesu przy oprawie — bez potrzeby ładowania pakietu `geometry`.

```
\documentclass[
  11pt,
  twoside,
  open=right,
  chapterprefix=true,       % "Rozdział 3" nad tytułem
  numbers=endperiod,         % "3.1." zamiast "3.1"
  bibliography=totoc,        % bibliografia w spisie treści
  listof=totoc,              % spisy rysunków/tabel w ToC
  index=totoc                % indeks w spisie treści
]{scrbook}

\KOMAoptions{
  paper=B5,                  % popularny format podręcznikowy
  DIV=12,                    % obliczanie marginesów
  BCOR=12mm                  % korekcja na oprawę
}
```

Klasa `memoir` jest równie potężna, ale filozofia jest inna — zamiast ładować 15 pakietów, `memoir` wbudowuje ich funkcjonalność. Problem pojawia się, gdy potrzebujesz pakietu, który koliduje z wbudowanymi mechanizmami. Dla zespołów, gdzie każdy członek ładuje swoje ulubione pakiety, `memoir` potrafi generować niespodziewane konflikty.

Standardowa klasa `book` to bezpieczny wybór, gdy potrzebujesz maksymalnej kompatybilności z pakietami — ale wymaga więcej pracy konfiguracyjnej na starcie.

---

## Hierarchia sekcjonowania — `\part`, `\chapter`, `\section`

Klasa `book` oferuje najgłębszą hierarchię sekcjonowania w LaTeX-u. To kluczowe dla podręcznika, który musi logicznie organizować złożony materiał:

<div class="table-wrapper">

| Poziom | Komenda               | Typowe zastosowanie                  | Numeracja przykładowa |
| ------ | --------------------- | ------------------------------------ | --------------------- |
| -1     | `\part{...}`          | Część I, Część II — grupy rozdziałów | Część I               |
| 0      | `\chapter{...}`       | Rozdział — główna jednostka          | Rozdział 3            |
| 1      | `\section{...}`       | Podrozdział                          | 3.1                   |
| 2      | `\subsection{...}`    | Podpodrozdział                       | 3.1.2                 |
| 3      | `\subsubsection{...}` | Drobniejszy podział                  | 3.1.2.1               |
| 4      | `\paragraph{...}`     | Akapit nazwany (bez numeru)          | —                     |
| 5      | `\subparagraph{...}`  | Podakapit nazwany (bez numeru)       | —                     |

</div>

W praktyce podręcznikowej rzadko schodzimy poniżej poziomu `\subsection`. Trzy poziomy numeracji (3.1.2) to maksimum, które czytelnik jest w stanie śledzić bez dezorientacji. Jeśli potrzebujesz głębszej struktury, to sygnał, że rozdział wymaga reorganizacji — nie głębszego zagnieżdżenia.

Komenda `\part` jest szczególna — nie resetuje numeracji rozdziałów (Rozdział 5 w Części II dalej jest Rozdziałem 5, nie Rozdziałem 1) i tworzy osobną stronę działową. Używamy jej, gdy podręcznik ma wyraźne bloki tematyczne, np. „Część I: Teoria", „Część II: Metody", „Część III: Zastosowania".

```
\part{Podstawy teoretyczne}

\chapter{Algebra liniowa}
\label{chap:algebra}

\section{Przestrzenie wektorowe}
\label{sec:przestrzenie}
Niech $V$ będzie przestrzenią wektorową nad ciałem~$\mathbb{R}$.
Mówimy, że zbiór wektorów $\{v_1, v_2, \ldots, v_n\}$ jest
\textbf{liniowo niezależny}\index{liniowa niezależność}, jeśli...

\subsection{Baza i wymiar}
\label{subsec:baza}
```

Zwróć uwagę na trzy mechanizmy użyte w tym fragmencie: `\label{}` do cross-referencji (odwołasz się do tego rozdziału komendą `\cref{chap:algebra}`), `\textbf{}` do wyróżnienia definiowanego terminu (konwencja typograficzna w podręcznikach) i `\index{}` do oznaczenia hasła indeksowego (o czym szerzej w dalszej części artykułu).

---

## Strona tytułowa i strony frontmatteru

Profesjonalny podręcznik ma rozbudowaną część początkową. W klasie `book` strona tytułowa generowana przez `\maketitle` jest zbyt prosta — tworzymy ją ręcznie:

```
% plik: front/tytulowa.tex

\begin{titlepage}
  \centering

  \vspace*{2cm}

  {\Huge\bfseries Analiza matematyczna\par}
  \vspace{0.5cm}
  {\Large\itshape Podręcznik dla studentów kierunków
   technicznych\par}

  \vspace{2cm}

  {\Large Jan Kowalski\par}
  {\large Uniwersytet Warszawski\par}

  \vfill

  \includegraphics[width=3cm]{img/logo-wydawnictwa.pdf}

  \vspace{1cm}

  {\large Wydawnictwo Akademickie\par}
  {\large Warszawa 2025\par}

\end{titlepage}

% ── Strona redakcyjna (verso tytułowej) ──
\thispagestyle{empty}
\vspace*{\fill}
\noindent Copyright \copyright\ 2025 Jan Kowalski\\[0.5em]
\noindent Wszelkie prawa zastrzeżone. Żadna część tej
publikacji nie może być reprodukowana bez pisemnej zgody
wydawcy.\\[1em]
\noindent ISBN: 978-83-000-0000-0\\[0.5em]
\noindent Wydanie pierwsze\\[0.5em]
\noindent Skład i łamanie tekstu: \LaTeX\\[0.5em]
\noindent Druk: Drukarnia Akademicka, Kraków
\vspace*{\fill}
\clearpage
```

Pełna sekwencja stron frontmatteru w profesjonalnym podręczniku wygląda tak:

1. **Strona przedtytułowa** (_half-title page_) — tylko tytuł, bez autora i wydawcy. Tradycja wydawnicza, nie wymóg techniczny.
2. **Verso przedtytułowej** — pusta lub z informacją o serii.
3. **Strona tytułowa** — pełny tytuł, podtytuł, autor, afiliacja, logo i nazwa wydawcy.
4. **Strona redakcyjna** — copyright, ISBN, informacja o wydaniu, nota prawna.
5. **Dedykacja** — opcjonalna, zwykle krótki tekst wycentrowany na stronie.
6. **Spis treści** — `\tableofcontents`.
7. **Spis rysunków** — `\listoffigures` (jeśli jest dużo ilustracji).
8. **Spis tabel** — `\listoftables` (jeśli są liczne tabele).
9. **Przedmowa** — tekst autora o genezie i przeznaczeniu podręcznika.
10. **Spis oznaczeń** — lista symboli matematycznych używanych w książce.

Każda z tych stron to osobny plik `.tex` — krótki, łatwy do edycji i niezaśmiecający pliku głównego.

![Strony frontmatteru podręcznika — tytułowa, redakcyjna, spis treści, przedmowa](/blog/sklad-podrecznika-akademickiego/02-frontmatter.jpg)

---

## Środowiska dydaktyczne — twierdzenia, definicje, przykłady, zadania

To, co odróżnia podręcznik od monografii, to **elementy dydaktyczne**: kolorowe ramki z twierdzeniami, wyróżnione definicje, ponumerowane przykłady, zadania na końcu rozdziału i rozwiązania w dodatku. LaTeX daje pełną kontrolę nad tymi elementami dzięki pakietom `amsthm` i `tcolorbox`.

### Podstawowe środowiska z `amsthm`

Pakiet `amsthm` definiuje trzy style: `plain` (kursywa — dla twierdzeń i lemmatów), `definition` (prosta czcionka — dla definicji i przykładów) i `remark` (mniejsza czcionka — dla uwag).

```
% w preambule:
\theoremstyle{plain}
\newtheorem{twierdzenie}{Twierdzenie}[chapter]
\newtheorem{lemat}[twierdzenie]{Lemat}

\theoremstyle{definition}
\newtheorem{definicja}{Definicja}[chapter]
\newtheorem{przyklad}{Przykład}[chapter]

\theoremstyle{remark}
\newtheorem*{uwaga}{Uwaga}          % * = bez numeracji
```

Użycie w tekście:

```
\begin{definicja}[Ciągłość funkcji]
\label{def:ciaglosc}
Funkcję $f \colon \mathbb{R} \to \mathbb{R}$ nazywamy
\textbf{ciągłą}\index{ciągłość} w punkcie $x_0$, jeśli
\[
  \forall_{\varepsilon > 0}\;
  \exists_{\delta > 0}\;
  \forall_{x \in \mathbb{R}}\colon\;
  |x - x_0| < \delta
  \implies |f(x) - f(x_0)| < \varepsilon.
\]
\end{definicja}

\begin{twierdzenie}[Weierstrassa]
\label{tw:weierstrass}
Każda funkcja ciągła na przedziale domkniętym $[a, b]$
osiąga swoją wartość największą i najmniejszą.
\end{twierdzenie}

\begin{proof}
Dowód opiera się na twierdzeniu Bolzana-Weierstrassa
o podciągach zbieżnych...
\end{proof}

\begin{przyklad}
Zbadajmy ciągłość funkcji $f(x) = x^2$ w punkcie
$x_0 = 2$, korzystając z definicji~\ref{def:ciaglosc}.
\end{przyklad}
```

### Zaawansowane środowiska z `tcolorbox`

Gdy potrzebujesz kolorowych ramek, ikon, podziału na treść i rozwiązanie — `amsthm` nie wystarczy. Pakiet `tcolorbox` z biblioteką `theorems` pozwala tworzyć wizualnie wyróżnione środowiska, które łamią się między stronami:

```
\usepackage[most]{tcolorbox}
\tcbuselibrary{theorems, breakable, skins}

% ── Definicja ──────────────────────────
\newtcbtheorem[number within=chapter]{defn}{Definicja}{
  enhanced,
  breakable,
  colback=blue!5!white,
  colframe=blue!60!black,
  fonttitle=\bfseries,
  separator sign none,
  description delimiters parenthesis,
  terminator sign={.}
}{def}

% ── Twierdzenie ────────────────────────
\newtcbtheorem[number within=chapter]{thm}{Twierdzenie}{
  enhanced,
  breakable,
  colback=red!5!white,
  colframe=red!60!black,
  fonttitle=\bfseries,
  separator sign none,
  description delimiters parenthesis,
  terminator sign={.}
}{thm}

% ── Przykład ───────────────────────────
\newtcbtheorem[number within=chapter]{exmp}{Przykład}{
  enhanced,
  breakable,
  colback=green!5!white,
  colframe=green!50!black,
  fonttitle=\bfseries,
  separator sign none,
  terminator sign={.}
}{exmp}

% ── Uwaga (bez numeracji) ─────────────
\newtcolorbox{uwaga}{
  enhanced,
  breakable,
  colback=yellow!10!white,
  colframe=orange!70!black,
  fonttitle=\bfseries,
  title=Uwaga,
  leftrule=4pt,
  rightrule=0pt,
  toprule=0pt,
  bottomrule=0pt,
  arc=0pt
}
```

Użycie:

```
\begin{defn}{Ciągłość funkcji}{ciaglosc}
Funkcję $f$ nazywamy ciągłą w punkcie $x_0$, jeśli...
\end{defn}

Jak wynika z Definicji~\ref{def:ciaglosc}, ciągłość
wymaga spełnienia warunku epsilon-delta.
```

![Środowiska dydaktyczne w podręczniku — definicja, twierdzenie, przykład, uwaga](/blog/sklad-podrecznika-akademickiego/03-srodowiska-dydaktyczne.jpg)

### Zadania z rozwiązaniami w dodatku

Podręcznik akademicki potrzebuje zadań na końcu każdego rozdziału i rozwiązań w dodatku. Pakiet `answers` lub ręczne podejście z `\newwrite` pozwalają automatycznie zbierać rozwiązania do osobnego pliku:

```
\usepackage{answers}

% w preambule:
\Newassociation{rozwiazanie}{Rozwiazanie}{rozwiazania}
\newcounter{zadanie}[chapter]
\renewcommand{\thezadanie}{\thechapter.\arabic{zadanie}}

\newenvironment{zadanie}{%
  \refstepcounter{zadanie}%
  \paragraph{Zadanie \thezadanie}%
}{}

% w main.tex, przed \begin{document}:
\Opensolutionfile{rozwiazania}[dodatki/rozwiazania-auto]

% na końcu rozdziału:
\section*{Zadania}

\begin{zadanie}\label{zad:pochodna}
Oblicz pochodną funkcji $f(x) = x^3 \sin x$.
\begin{rozwiazanie}
  Stosując regułę iloczynu:
  $f'(x) = 3x^2 \sin x + x^3 \cos x$.
\end{rozwiazanie}
\end{zadanie}

% w main.tex, przed \end{document}:
\Closesolutionfile{rozwiazania}

% w dodatku C:
\chapter{Rozwiązania zadań}
\input{dodatki/rozwiazania-auto}
```

Mechanizm działa tak: środowisko `rozwiazanie` wewnątrz `zadanie` zapisuje treść do zewnętrznego pliku, a nie wyświetla jej w miejscu zadania. W dodatku `\input` wczytuje zebrane rozwiązania, automatycznie posortowane i ponumerowane.

---

## Indeks rzeczowy — `makeidx` i `imakeidx`

Indeks rzeczowy to element, którego ręczne tworzenie jest koszmarem — i element, w którym LaTeX błyszczy. System jest dwuetapowy: w tekście oznaczasz hasła komendą `\index{}`, a program `makeindex` (lub `xindy` dla języków z diakrytykami) sortuje je, łączy numery stron i generuje gotowy indeks.

### Oznaczanie haseł w tekście

Komendy `\index{}` wstawiasz w tekście obok terminu, który ma pojawić się w indeksie. Komenda nie produkuje żadnego widocznego wyjścia — tylko zapisuje hasło i numer strony do pliku `.idx`:

```
Funkcję nazywamy \textbf{ciągłą}\index{ciągłość}
w punkcie $x_0$, jeśli...

Warunek \textbf{Lipschitza}\index{Lipschitz!warunek}
jest silniejszy niż zwykła ciągłość.

Twierdzenie to sformułował
Weierstrass\index{Weierstrass, Karl} w 1860 roku.
```

Składnia `\index{}` obsługuje kilka formatów:

<div class="table-wrapper">

| Składnia                                       | Wynik w indeksie                | Zastosowanie                        |
| ---------------------------------------------- | ------------------------------- | ----------------------------------- |
| `\index{ciągłość}`                             | ciągłość, 42                    | Proste hasło                        |
| `\index{Lipschitz!warunek}`                    | Lipschitz — warunek, 57         | Podhasło                            |
| `\index{Lipschitz!warunek!jednostronny}`       | &nbsp;&nbsp;jednostronny, 63    | Podpodhasło                         |
| `\index{epsilon-delta@$\varepsilon$-$\delta$}` | ε-δ, 42                         | Sortowanie inne niż wyświetlanie    |
| `\index{ciągłość\|textbf}`                     | ciągłość, **42**                | Numer strony pogrubiony (definicja) |
| `\index{ciągłość\|see{funkcja ciągła}}`        | ciągłość, _zob._ funkcja ciągła | Odsyłacz „zobacz"                   |

</div>

**Konwencja typograficzna:** numer strony, na której termin jest **definiowany**, wyróżniamy pogrubieniem (`\index{ciągłość|textbf}`). Pozostałe wystąpienia mają zwykły numer. Dzięki temu czytelnik od razu wie, gdzie szukać definicji.

### Kompilacja indeksu

Indeks wymaga dodatkowego kroku kompilacji. Pełna sekwencja wygląda tak:

```
pdflatex main.tex          % 1. generuje main.idx
makeindex main.idx         % 2. sortuje → main.ind
pdflatex main.tex          % 3. wczytuje main.ind
pdflatex main.tex          % 4. poprawia referencje
```

Dla polskich znaków diakrytycznych lepiej użyć programu `xindy` zamiast `makeindex` — `xindy` poprawnie sortuje ą, ć, ę, ł, ń, ó, ś, ź, ż. Z pakietem `imakeidx` (ulepszona wersja `makeidx`) możesz zautomatyzować wywołanie `xindy`:

```
\usepackage[xindy]{imakeidx}
\makeindex[intoc, options={-L polish -C utf8}]
```

Opcja `intoc` dodaje indeks do spisu treści, a `-L polish -C utf8` ustawia sortowanie polskie z kodowaniem UTF-8.

![Indeks rzeczowy w podręczniku — hasła główne, podhasła, odsyłacze, numery pogrubione](/blog/sklad-podrecznika-akademickiego/04-indeks-rzeczowy.jpg)

---

## Glosariusz i spis oznaczeń

Podręcznik z zakresu nauk ścisłych potrzebuje spisu symboli i oznaczeń. Pakiet `glossaries` (lub jego rozszerzona wersja `glossaries-extra`) pozwala zarządzać zarówno glosariuszem terminów, jak i listą symboli matematycznych z jednego źródła.

```
% w preambule:
\usepackage[acronym, symbols, toc]{glossaries-extra}
\makeglossaries

% ── Terminy ────────────────────────────
\newglossaryentry{ips}{
  name={Iloczyn skalarny},
  description={Operacja dwuliniowa przypisująca parze
    wektorów liczbę rzeczywistą, oznaczana
    $\langle \cdot, \cdot \rangle$},
  sort={iloczyn skalarny}
}

% ── Symbole ────────────────────────────
\glsxtrnewsymbol[
  description={Zbiór liczb rzeczywistych}
]{sym:R}{\ensuremath{\mathbb{R}}}

\glsxtrnewsymbol[
  description={Norma wektora $x$}
]{sym:norm}{\ensuremath{\|x\|}}

\glsxtrnewsymbol[
  description={Pochodna cząstkowa funkcji $f$
    po zmiennej $x_i$}
]{sym:partial}{\ensuremath{\frac{\partial f}{\partial x_i}}}

% ── Akronimy ──────────────────────────
\newacronym{rdo}{RDO}{równanie różniczkowe
  o pochodnych cząstkowych}
```

W tekście odwołujesz się do terminu komendą `\gls{ips}` — przy pierwszym użyciu LaTeX wyświetli pełną formę, przy kolejnych skróconą. Polecenie `\printglossary[type=symbols]` wydrukuje tabelę symboli w frontmatterze.

Kompilacja glosariusza, podobnie jak indeksu, wymaga dodatkowego kroku:

```
pdflatex main.tex
makeglossaries main
pdflatex main.tex
```

---

## Bibliografia — BibLaTeX z Biberem

Przy podręczniku z setkami pozycji bibliograficznych, stary BibTeX ustępuje miejsca pakietowi `biblatex` z procesorem `biber`. Różnica jest szczególnie widoczna przy polskich znakach, sortowaniu wielojęzycznym i zaawansowanym filtrowaniu źródeł.

### Plik `.bib` — baza źródeł

Wpisy bibliograficzne tworzy się raz i używa wielokrotnie we wszystkich projektach:

```
% plik: bib/bibliografia.bib

@book{kolmogorov1975,
  author    = {Andrey N. Kolmogorov and Sergei V. Fomin},
  title     = {Elementy teorii funkcji i analizy
               funkcjonalnej},
  publisher = {PWN},
  year      = {1975},
  address   = {Warszawa},
  edition   = {2}
}

@article{nash1950,
  author  = {John F. Nash},
  title   = {Equilibrium points in n-person games},
  journal = {Proceedings of the National Academy
             of Sciences},
  year    = {1950},
  volume  = {36},
  number  = {1},
  pages   = {48--49},
  doi     = {10.1073/pnas.36.1.48}
}

@online{overleaf2025,
  author  = {{Overleaf}},
  title   = {Learn LaTeX in 30 Minutes},
  year    = {2025},
  url     = {https://www.overleaf.com/learn/
             latex/Learn_LaTeX_in_30_minutes},
  urldate = {2025-02-10}
}
```

### Cytowanie i drukowanie bibliografii

W tekście cytujesz źródła komendami `\cite{}`, `\textcite{}` lub `\parencite{}`:

```
Twierdzenie to pochodzi z podręcznika
Kołmogorowa i Fomina~\parencite{kolmogorov1975}.

\textcite{nash1950} wykazał istnienie punktów równowagi
w grach $n$-osobowych.
```

Styl bibliografii definiujesz jedną opcją w preambule. Zmiana `style=numeric-comp` na `style=authoryear` zamienia numeryczne cytowania [1, 2, 3] na styl autor-rok (Kołmogorow i Fomin, 1975) — w całym 500-stronicowym dokumencie, jedną linijką:

<div class="table-wrapper">

| Styl `biblatex`      | Wygląd cytowania | Typowe zastosowanie               |
| -------------------- | ---------------- | --------------------------------- |
| `numeric`            | [1]              | Nauki ścisłe, inżynieria          |
| `numeric-comp`       | [1–3, 7]         | Nauki ścisłe (kompresja zakresów) |
| `authoryear`         | (Kowalski, 2025) | Nauki społeczne, humanistyka      |
| `apa`                | (Kowalski, 2025) | Psychologia (styl APA 7)          |
| `ieee`               | [1]              | Informatyka, elektronika          |
| `chicago-authordate` | (Kowalski 2025)  | Humanistyka (Chicago Manual)      |

</div>

Kompilacja bibliografii z Biberem:

```
pdflatex main.tex
biber main
pdflatex main.tex
pdflatex main.tex
```

![Bibliografia w podręczniku — styl numeryczny, cytowania w tekście, lista References](/blog/sklad-podrecznika-akademickiego/05-bibliografia.jpg)

---

## Ilustracje — od wykresu do schematu

Podręcznik akademicki zawiera trzy typy ilustracji: wykresy (generowane z danych), schematy/diagramy (rysowane) i zdjęcia/screenshoty. Każdy typ wymaga innego podejścia.

### Formaty plików graficznych

Złota zasada: **grafiki wektorowe tam, gdzie to możliwe** — PDF dla diagramów i wykresów, PNG tylko dla zdjęć i screenshotów. Grafika wektorowa skaluje się do dowolnego rozmiaru bez utraty jakości, co jest krytyczne przy druku.

<div class="table-wrapper">

| Format | Typ       | Zastosowanie                | Uwagi                           |
| ------ | --------- | --------------------------- | ------------------------------- |
| PDF    | Wektorowy | Wykresy, diagramy, schematy | Najlepszy wybór dla druku       |
| PNG    | Rastrowy  | Zdjęcia, screenshoty        | Min. 300 DPI dla druku          |
| SVG    | Wektorowy | Export z narzędzi webowych  | Konwertuj do PDF przed użyciem  |
| JPG    | Rastrowy  | Zdjęcia z kompresją         | Unikaj dla wykresów (artefakty) |
| EPS    | Wektorowy | Stare pliki                 | Przestarzały, konwertuj do PDF  |

</div>

### Wykresy z `pgfplots` — bezpośrednio w kodzie

Pakiet `pgfplots` (zbudowany na TikZ) pozwala rysować wykresy funkcji, dane eksperymentalne i histogramy bezpośrednio w kodzie LaTeX-a. Grafika jest wektorowa, automatycznie dopasowuje się do fontu dokumentu i nigdy nie traci jakości:

```
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}

\begin{figure}[htbp]
  \centering
  \begin{tikzpicture}
    \begin{axis}[
      width=0.75\textwidth,
      xlabel={$x$},
      ylabel={$f(x)$},
      legend pos=north west,
      grid=major,
      grid style={dashed, gray!30}
    ]
      \addplot[blue, thick, domain=-2:4, samples=100]
        {x^3 - 3*x^2 + 2};
      \addlegendentry{$f(x) = x^3 - 3x^2 + 2$}

      \addplot[red, thick, domain=-2:4, samples=100]
        {3*x^2 - 6*x};
      \addlegendentry{$f'(x) = 3x^2 - 6x$}
    \end{axis}
  \end{tikzpicture}
  \caption{Funkcja $f(x) = x^3 - 3x^2 + 2$
    i jej pochodna.}
  \label{fig:pochodna}
\end{figure}
```

### Diagramy z TikZ

Dla schematów blokowych, drzew decyzyjnych, automatów i diagramów przepływu — TikZ nie ma konkurencji. Diagram jest częścią kodu źródłowego, więc wersjonuje się w Gicie jak każda inna linia tekstu:

```
\usetikzlibrary{arrows.meta, positioning}

\begin{figure}[htbp]
  \centering
  \begin{tikzpicture}[
    block/.style={
      rectangle, draw, fill=blue!10,
      minimum height=2.5em, minimum width=6em,
      text centered, rounded corners
    },
    arrow/.style={
      -Stealth, thick
    }
  ]
    \node[block] (dane) {Dane};
    \node[block, right=2cm of dane] (model) {Model};
    \node[block, right=2cm of model] (wynik) {Predykcja};

    \draw[arrow] (dane) -- node[above] {trening} (model);
    \draw[arrow] (model) -- node[above] {wnioskowanie}
      (wynik);
  \end{tikzpicture}
  \caption{Schemat procesu uczenia maszynowego.}
  \label{fig:schemat-ml}
\end{figure}
```

### Podrysunki z `subcaption`

Gdy potrzebujesz kilku powiązanych grafik obok siebie — np. porównanie wyników dla różnych parametrów — pakiet `subcaption` tworzy podrysunki (a), (b), (c) wewnątrz jednego środowiska `figure`:

```
\begin{figure}[htbp]
  \centering
  \begin{subfigure}[b]{0.45\textwidth}
    \includegraphics[width=\textwidth]{img/roz03/wynik-a.pdf}
    \caption{$\alpha = 0.1$}
    \label{fig:wynik-a}
  \end{subfigure}
  \hfill
  \begin{subfigure}[b]{0.45\textwidth}
    \includegraphics[width=\textwidth]{img/roz03/wynik-b.pdf}
    \caption{$\alpha = 0.5$}
    \label{fig:wynik-b}
  \end{subfigure}
  \caption{Wpływ parametru $\alpha$ na zbieżność
    algorytmu.}
  \label{fig:porownanie-alpha}
\end{figure}
```

Odwołanie w tekście: `Na rysunku~\ref{fig:porownanie-alpha} porównano wyniki dla dwóch wartości parametru — rysunek~\ref{fig:wynik-a} odpowiada...`

![Ilustracje w podręczniku — wykres pgfplots, diagram TikZ, podrysunki subcaption](/blog/sklad-podrecznika-akademickiego/06-ilustracje.jpg)

---

## Tabele — `booktabs`, `longtable`, `tabularx`

Tabele w podręcznikach akademickich muszą spełniać dwa wymagania: być czytelne i obsługiwać duże zestawy danych. Trzy pakiety rozwiązują trzy różne problemy:

- **`booktabs`** — profesjonalne linie (`\toprule`, `\midrule`, `\bottomrule`). Obowiązkowy w każdym dokumencie.
- **`longtable`** — tabele przekraczające jedną stronę, z powtarzanym nagłówkiem na każdej stronie.
- **`tabularx`** — tabele dopasowujące się do szerokości tekstu z automatycznym łamaniem treści kolumn.

Połączenie tych trzech pakietów daje tabelę, która wygląda profesjonalnie, łamie się między stronami i dopasowuje do marginesów:

```
\usepackage{booktabs, longtable, tabularx}

\begin{longtable}{lp{5cm}cc}
  \caption{Metody optymalizacji — przegląd}
  \label{tab:optymalizacja} \\

  \toprule
  Metoda & Opis & Złożoność & Typ \\
  \midrule
  \endfirsthead

  \multicolumn{4}{c}%
  {\tablename~\thetable\ — ciąg dalszy} \\[0.5em]
  \toprule
  Metoda & Opis & Złożoność & Typ \\
  \midrule
  \endhead

  \midrule
  \multicolumn{4}{r}{Ciąg dalszy na następnej stronie...}
  \endfoot

  \bottomrule
  \endlastfoot

  Gradient prosty & Schodzi wzdłuż ujemnego gradientu
    funkcji celu & $O(n)$ & I rzędu \\
  Newton & Wykorzystuje hesjan do wyznaczenia kierunku
    i długości kroku & $O(n^3)$ & II rzędu \\
  BFGS & Aproksymuje odwrotność hesjanu, unikając
    jego jawnego obliczania & $O(n^2)$ & Quasi-Newton \\
  Adam & Adaptacyjna metoda momentów, łącząca
    momentum i RMSProp & $O(n)$ & Adaptacyjna \\
  % ... kolejne wiersze ...
\end{longtable}

```

![Tabele w podręczniku — booktabs z profesjonalnymi liniami, tabularx z porównaniem klas](/blog/sklad-podrecznika-akademickiego/09-tabele-booktabs.jpg)

Nagłówek `\endfirsthead` pojawia się na pierwszej stronie, `\endhead` na kolejnych (z informacją „ciąg dalszy"), `\endfoot` u dołu stron pośrednich, a `\endlastfoot` na ostatniej stronie tabeli. Pięć komend — i tabela dowolnej długości jest w pełni profesjonalna.

---

## Cross-referencje — `\label`, `\ref`, `\cref`

Podręcznik z 200 wzorami, 80 rysunkami i 12 rozdziałami generuje setki odsyłaczy. Ręczne wpisywanie numerów byłoby szaleństwem — szczególnie że dodanie jednego rozdziału w środku przenumerowuje całą resztę.

System cross-referencji w LaTeX-u opiera się na trzech komendach:

```
% 1. Oznaczasz element etykietą:
\begin{equation}
  E = mc^2
  \label{eq:einstein}
\end{equation}

% 2. Odwołujesz się w tekście:
Równanie~\ref{eq:einstein} opisuje...

% 3. Albo lepiej — z cleveref:
\cref{eq:einstein} opisuje...
% → „Równanie (2.7) opisuje..."

\cref{eq:einstein,eq:maxwell,eq:schrodinger}
% → „Równania (2.7), (2.8) i (2.9)"
```

**Konwencja nazewnictwa etykiet** to kwestia, którą warto ustalić na początku projektu. Oto schemat, który się sprawdza:

<div class="table-wrapper">

| Prefiks | Element     | Przykład                  |
| ------- | ----------- | ------------------------- |
| `chap:` | Rozdział    | `\label{chap:algebra}`    |
| `sec:`  | Sekcja      | `\label{sec:macierze}`    |
| `eq:`   | Równanie    | `\label{eq:einstein}`     |
| `fig:`  | Rysunek     | `\label{fig:wykres}`      |
| `tab:`  | Tabela      | `\label{tab:wyniki}`      |
| `def:`  | Definicja   | `\label{def:ciaglosc}`    |
| `thm:`  | Twierdzenie | `\label{thm:weierstrass}` |
| `zad:`  | Zadanie     | `\label{zad:pochodna}`    |

</div>

Przy podręczniku z 12 rozdziałami i setkami etykiet ta systematyka chroni przed chaosem. Gdy piszesz `\cref{thm:weierstrass}`, od razu wiesz, że to twierdzenie, a nie sekcja ani rysunek.

---

## Kompilacja podręcznika — pełna sekwencja

Kompilacja podręcznika wymaga więcej kroków niż kompilacja artykułu. Każdy dodatkowy mechanizm (bibliografia, indeks, glosariusz) dodaje jeden etap. Pełna sekwencja dla dokumentu ze wszystkimi opisanymi elementami:

```
pdflatex main.tex          % 1. pierwsze przejście — etykiety
biber main                 % 2. sortowanie bibliografii
makeindex -L polish -C utf8 main.idx   % 3. sortowanie indeksu
makeglossaries main        % 4. sortowanie glosariusza
pdflatex main.tex          % 5. drugie przejście — wypełnia ref.
pdflatex main.tex          % 6. trzecie przejście — naprawia ToC
```

W praktyce automatyzujemy to skryptem `Makefile` lub `latexmk`:

```
# plik: latexmkrc
$pdf_mode = 1;
$pdflatex = 'pdflatex -interaction=nonstopmode %O %S';
$biber = 'biber %O %S';
$makeindex = 'makeindex -L polish -C utf8 %O -o %D %S';
@generated_exts = qw(idx ind ilg glo gls glg acn acr alg);
add_cus_dep('glo', 'gls', 0, 'makeglossaries');
sub makeglossaries {
  system("makeglossaries $_[0]");
}
```

Jedno polecenie `latexmk main.tex` uruchamia całą sekwencję — tyle razy, ile potrzeba — i zatrzymuje się, gdy wynik jest stabilny. To jedyny rozsądny sposób pracy przy dużym projekcie.

---

## Przygotowanie PDF-a do druku — od cyfrowego do fizycznego

Gotowy podręcznik musi przejść jeszcze jedną transformację: z PDF-a ekranowego na **PDF-a drukarskiego** (_print-ready PDF_). To nie to samo. Drukarnia potrzebuje pliku, który zawiera informacje niedostępne w zwykłym PDF-ie: znaczniki cięcia, spady, profil kolorów i odpowiednią rozdzielczość.

### Rozmiar strony, spady i marginesy bezpieczeństwa

**Spad** (_bleed_) to obszar 3–5 mm wychodzący poza krawędź docelowej strony. Elementy graficzne sięgające krawędzi muszą „wychodzić" poza nią o tę wartość, żeby po obcięciu arkusza nie pojawiła się biała linia na krawędzi. Tekst i istotne elementy muszą znajdować się wewnątrz **marginesu bezpieczeństwa** (_safety margin_), minimum 5 mm od linii cięcia.

LaTeX obsługuje spady za pomocą pakietu `geometry` lub `crop`:

```
\usepackage[
  paperwidth=176mm,        % B5 + 2×3mm spadu
  paperheight=256mm,        % B5 + 2×3mm spadu
  layout=b5paper,
  layoutoffset={3mm, 3mm},
  top=2.5cm,
  bottom=2.5cm,
  inner=3cm,
  outer=2cm
]{geometry}
```

### Znaczniki cięcia

Pakiet `crop` dodaje krzyżyki i narożniki pokazujące drukarni, gdzie ciąć arkusz:

```
\usepackage[
  cam,                     % narożnikowe znaczniki cięcia
  center,                  % centrowanie strony na arkuszu
  width=182mm,             % szerokość arkusza
  height=262mm             % wysokość arkusza
]{crop}
```

### Profil kolorów — CMYK

Monitory wyświetlają kolory w modelu RGB (Red, Green, Blue). Drukarki drukują w modelu CMYK (Cyan, Magenta, Yellow, Key/Black). Konwersja nie jest trywialna — niektóre kolory RGB nie mają odpowiednika w CMYK.

Dla podręcznika, który idzie do druku, grafiki powinny być dostarczone w CMYK, a fonty osadzone w PDF-ie. Pakiet `xcolor` z opcją `cmyk` wymusza model kolorów CMYK w całym dokumencie:

```
\usepackage[cmyk]{xcolor}
```

### Osadzanie fontów

PDF drukarni musi mieć **100% osadzonych fontów**. Bez tego drukarnia zastąpi brakujące fonty domyślnymi, co zniszczy skład. Kompilacja przez `pdflatex` domyślnie osadza fonty — ale warto to zweryfikować:

```bash
pdffonts main.pdf
```

Polecenie wyświetli listę fontów i kolumnę „emb" (embedded). Każdy font powinien mieć „yes".

### Rozdzielczość grafik

Minimalna rozdzielczość grafik rastrowych (PNG, JPG) dla druku to **300 DPI**. Dla grafik liniowych (np. schematy z cienkimi liniami) — **600 DPI**. Grafiki wektorowe (PDF, EPS) nie mają tego problemu — skalują się bez utraty jakości.

Pełną specyfikację techniczną zawsze uzgadniaj z drukarnią przed rozpoczęciem pracy. Każda drukarnia ma własne wymagania dotyczące profili kolorów, spadów i formatów plików.

![PDF drukarni — spad, znaczniki cięcia, margines bezpieczeństwa, profil CMYK](/blog/sklad-podrecznika-akademickiego/07-print-ready-pdf.jpg)

---

## Kontrola wersji — Git i LaTeX

Podręcznik akademicki powstaje miesiącami, a często latami. Autorzy zmieniają zdanie, recenzenci wracają z uwagami, redaktor nanosi poprawki. Bez kontroli wersji śledzenie zmian w 400-stronicowym dokumencie jest niemożliwe.

Pliki `.tex` to czysty tekst — działają z Gitem tak samo naturalnie jak kod źródłowy. Każda zmiana jest widoczna w `git diff` jako konkretna modyfikacja konkretnej linii. Oto zasady, które sprawdzają się w praktyce:

**Jedna linia = jedno zdanie.** Zamiast pisać cały akapit w jednej linii, zawijaj tekst co zdanie. Git śledzi zmiany linia po linii — jeśli poprawisz jedno słowo w akapicie zapisanym w jednej linii, `git diff` pokaże zmianę całego akapitu. Przy jednym zdaniu na linię diff jest precyzyjny:

```
Funkcja $f$ jest ciągła w punkcie $x_0$.
Warunek ciągłości wymaga, by dla każdego
$\varepsilon > 0$ istniało takie $\delta > 0$,
że $|x - x_0| < \delta$ implikuje
$|f(x) - f(x_0)| < \varepsilon$.
```

**Plik `.gitignore` dla LaTeX-a** — kompilacja generuje dziesiątki plików tymczasowych. Oto `.gitignore`, który rekomendujemy:

```
# pliki tymczasowe LaTeX
*.aux
*.log
*.out
*.toc
*.lof
*.lot
*.idx
*.ind
*.ilg
*.bbl
*.bcf
*.blg
*.run.xml
*.glo
*.gls
*.glg
*.acn
*.acr
*.alg
*.fdb_latexmk
*.fls
*.synctex.gz

# skompilowany PDF (generujemy go z CI/CD)
main.pdf
```

**Branch na każdy rozdział / recenzenta** — autor rozdziału 5 pracuje na branchu `roz-05`, recenzent na branchu `recenzja-roz-05`. Po zatwierdzeniu merge do `main`. Konflikty w czystym tekście LaTeX-a rozwiązuje się tak samo jak konflikty w kodzie — ręcznie, ale z pełną kontrolą.

---

## Automatyzacja kompilacji — CI/CD dla podręcznika

Skoro mamy Git, możemy skonfigurować automatyczną kompilację. GitHub Actions z obrazem Docker `texlive/texlive:latest` kompiluje podręcznik przy każdym pushu:

```yaml
# .github/workflows/kompilacja.yml

name: Kompilacja podręcznika
on: [push, pull_request]

jobs:
  build:
    runs-on: ubuntu-latest
    container:
      image: texlive/texlive:latest

    steps:
      - uses: actions/checkout@v4

      - name: Kompilacja
        run: latexmk -pdf main.tex

      - name: Upload PDF
        uses: actions/upload-artifact@v4
        with:
          name: podrecznik
          path: main.pdf
```

Każdy push generuje artefakt — gotowy PDF. Recenzent klika w artefakt i widzi aktualną wersję podręcznika. Zero maili z załącznikami „FINAL_v3_poprawiony_LAST.pdf".

---

## Pełny pipeline — od manuskryptu do druku

Podsumujmy cały proces w formie sekwencji kroków, które powtarzamy przy każdym projekcie podręcznikowym:

**Etap 1: Przygotowanie manuskryptu.** Autor dostarcza tekst (najczęściej w Wordzie). Konwertujemy go do `.tex` za pomocą Pandoc, czyścimy formatowanie, przenosimy wzory do trybu matematycznego, normalizujemy strukturę. Na tym etapie powstaje architektura projektu — pliki, katalogi, preambula.

**Etap 2: Skład i formatowanie.** Definiujemy środowiska (twierdzenia, definicje, przykłady, zadania). Wstawiamy grafiki — konwertujemy rastrowe do odpowiedniej rozdzielczości, rysujemy diagramy w TikZ, generujemy wykresy w pgfplots. Formatujemy tabele z `booktabs`. Konfigurujemy nagłówki, stopki, układ strony.

**Etap 3: Cross-referencje i indeksowanie.** Oznaczamy etykiety (`\label`), wstawiamy odsyłacze (`\cref`). Oznaczamy hasła indeksowe (`\index`) — to najżmudniejszy etap, wymagający przeczytania całego tekstu i wybrania kluczowych terminów.

**Etap 4: Bibliografia.** Kompletujemy plik `.bib`, weryfikujemy wpisy, ustawiamy styl cytowań zgodny z wymogami wydawcy.

**Etap 5: Spisy i glosariusz.** Generujemy spis treści, rysunków, tabel. Tworzymy spis oznaczeń i glosariusz terminów.

**Etap 6: Korekta i recenzja.** PDF trafia do autora i recenzenta. Poprawki nanoszone w `.tex`, śledzone w Gicie. Cykl korekta → kompilacja → przegląd powtarza się 2–4 razy.

**Etap 7: Print-ready PDF.** Ustawiamy spady, znaczniki cięcia, profil CMYK. Weryfikujemy osadzenie fontów, rozdzielczość grafik, marginesy bezpieczeństwa. Generujemy ostateczny PDF i wysyłamy do drukarni.

![Pipeline składu podręcznika — 7 etapów od manuskryptu do druku](/blog/sklad-podrecznika-akademickiego/08-pipeline.jpg)

---

## Pakiety kluczowe dla podręcznika — zestawienie

Na zakończenie — lista wszystkich pakietów wymienionych w artykule, pogrupowanych funkcjonalnie:

<div class="table-wrapper">

| Funkcja            | Pakiety                                     | Rola                                  |
| ------------------ | ------------------------------------------- | ------------------------------------- |
| Język i kodowanie  | `inputenc`, `fontenc`, `babel`, `lmodern`   | Polskie znaki, dzielenie wyrazów      |
| Układ strony       | `geometry`, `fancyhdr`                      | Marginesy, nagłówki, stopki           |
| Typografia         | `microtype`, `setspace`                     | Mikrotypografia, interlinia           |
| Matematyka         | `amsmath`, `amssymb`, `amsthm`, `mathtools` | Wzory, symbole, twierdzenia           |
| Grafika            | `graphicx`, `subcaption`, `float`           | Rysunki, podrysunki                   |
| Wykresy i diagramy | `pgfplots`, `tikz`                          | Wykresy z kodu, schematy              |
| Tabele             | `booktabs`, `longtable`, `tabularx`         | Profesjonalne, wielostronicowe tabele |
| Kolorowe ramki     | `tcolorbox`                                 | Definicje, twierdzenia, zadania       |
| Bibliografia       | `biblatex` + `biber`                        | Cytowania, lista źródeł               |
| Indeks             | `imakeidx` lub `makeidx`                    | Indeks rzeczowy                       |
| Glosariusz         | `glossaries-extra`                          | Terminy, symbole, akronimy            |
| Hiperłącza         | `hyperref`, `cleveref`                      | Klikalny PDF, inteligentne referencje |
| Druk               | `geometry`/`crop`, `xcolor[cmyk]`           | Spady, znaczniki, profil kolorów      |

</div>

---

## Co dalej?

Skład podręcznika akademickiego to projekt wymagający doświadczenia w typografii, znajomości konwencji wydawniczych i biegłości w LaTeX-u. Jeśli dopiero zaczynasz przygodę z LaTeX-em — zacznij od naszego [praktycznego przewodnika dla początkujących](/blog/jak-zaczac-z-latexem/), a różnice między LaTeX-em a Wordem opisujemy w artykule [LaTeX vs Word](/blog/latex-vs-word/).

Jeśli masz gotowy manuskrypt i potrzebujesz profesjonalnego składu — od surowego tekstu do print-ready PDF-a — [napisz do nas](/kontakt/). Podręczniki akademickie to nasza specjalność.
