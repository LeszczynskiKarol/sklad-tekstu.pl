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

**Rekomendacja na start:** zacznij od Overleaf — wejdź na [overleaf.com](https://overleaf.com), załóż konto i kliknij _„New Project → Blank Project"_. Za 30 sekund będziesz miał działające środowisko. Gdy poczujesz, że potrzebujesz więcej (dłuższy czas kompilacji, praca offline, Git), przejdź na instalację lokalną — szczegółowe porównanie znajdziesz w artykule [Overleaf czy lokalna instalacja LaTeX](/blog/overleaf_vs_local_latex/), a krok po kroku opisaliśmy to także w artykule [Overleaf vs lokalny LaTeX](/blog/overleaf-vs-lokalny-latex/).

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

**Zasada kciuka:** jeśli nie wiesz, którą wybrać — zacznij od `article`. Gdy po