---
title: "Case study: zeszyt ćwiczeń dla techników masażystów — od briefu klienta do 186 stron gotowych do druku"
description: "Jak powstał zeszyt ćwiczeń dla uczniów szkół policealnych na kierunku technik masażysta. Quarto + LaTeX, format A5 landscape, kolorowe środowiska zadaniowe, diagramy TikZ, klucz odpowiedzi i redakcja merytoryczna. Cały proces — od koncepcji po plik print-ready."
date: 2025-06-10
category: "Realizacje"
tags:
  - quarto
  - latex
  - zeszyt ćwiczeń
  - skład tekstu
  - case study
  - technik masażysta
  - szkoła policealna
  - materiały dydaktyczne
  - tcolorbox
  - tikz
  - print-ready PDF
---

Klient napisał: „Potrzebuję zeszytu ćwiczeń dla uczniów szkoły policealnej na kierunku technik masażysta". Brzmi prosto. W praktyce oznaczało to: zaprojektowanie struktury całego materiału dydaktycznego w oparciu o plan nauczania, napisanie surowego tekstu ćwiczeń na bazie wytycznych merytorycznych, złożenie 186 stron w formacie A5 landscape z kolorowymi środowiskami zadaniowymi, diagramami TikZ i tabelami — a na końcu przejście przez redakcję merytoryczną z wykwalifikowanym masażystą. Od pierwszego maila do gotowego pliku print-ready prowadziliśmy cały projekt: koncepcja, tekst, skład, redakcja, korekta.

Ten artykuł opisuje, jak to wyglądało krok po kroku — od strony organizacyjnej i merytorycznej po techniczną konfigurację Quarto i LaTeX-a.

---

## Zakres projektu — co dokładnie dostarczyliśmy

Zacznijmy od tego, co wchodziło w zakres naszej pracy, a co nie. Klient — szkoła policealna kształcąca techników masażystów — potrzebował kompletnego zeszytu ćwiczeń, który uczniowie dostaną na zajęciach. Nie pojedynczego rozdziału, nie szablonu do wypełnienia — gotowego materiału dydaktycznego pokrywającego cały program nauczania.

Odpowiadaliśmy za przygotowanie surowego tekstu ćwiczeń na podstawie wytycznych merytorycznych przesłanych przez klienta, za skład i łamanie tekstu, za koordynację redakcji merytorycznej z zewnętrznym ekspertem (doświadczonym i wykwalifikowanym masażystą) oraz za korektę językową. Nie odpowiadaliśmy jedynie za stronę tytułową, stronę potytułową i inne strony formalne — te przygotował klient we własnym zakresie.

Efekt końcowy: 186-stronicowy zeszyt ćwiczeń w formacie A5 landscape, podzielony na rozdziały odpowiadające przedmiotom z planu nauczania, z kluczem odpowiedzi na końcu. Plik gotowy do druku lub dystrybucji cyfrowej.

<div style="margin: 2.5rem 0; border: 1px solid var(--rule-light, #e0ddd5); border-radius: 4px; overflow: hidden; box-shadow: 0 4px 20px rgba(0,0,0,0.08);">
  <div style="display: flex; align-items: center; justify-content: space-between; padding: 0.6rem 1rem; background: var(--paper-warm, #faf8f4); border-bottom: 1px solid var(--rule-light, #e0ddd5);">
    <span style="font-family: var(--font-mono, monospace); font-size: 0.65rem; letter-spacing: 0.1em; text-transform: uppercase; color: var(--ink-faint, #999);">Podgląd · Zeszyt ćwiczeń · Technik masażysta</span>
    <span style="font-family: var(--font-mono, monospace); font-size: 0.65rem; color: var(--ink-faint, #999);">186 str.</span>
  </div>
  <iframe src="https://praca-magisterska-ebooks.s3.eu-central-1.amazonaws.com/masazysta_preview.pdf" style="width: 100%; height: 600px; border: none; display: block;" title="Podgląd zeszytu ćwiczeń dla techników masażystów"></iframe>
</div>

---

## Proces — od zapytania do pliku print-ready

Projekt przeszedł przez pięć wyraźnych faz, z których każda miała swój punkt akceptacji.

### Faza 1: Wzór i akceptacja

Po otrzymaniu zapytania przygotowaliśmy wzór 2–3 stron — fragment jednego rozdziału z przykładowymi ćwiczeniami, kolorowym środowiskiem zadaniowym, tabelą do uzupełnienia i diagramem. Wzór pokazywał klientowi dokładnie, jak będzie wyglądał gotowy materiał: układ strony, kolorystyka, typografia, rodzaje ćwiczeń. Po akceptacji wzoru przeszliśmy do pracy nad pełnym materiałem.

### Faza 2: Struktura i podział treści

Spis treści i struktura zeszytu nie powstały arbitralnie. Oparliśmy je na planie zajęć uczniów — liczba ćwiczeń i stron przypadających na każdy przedmiot była proporcjonalna do liczby godzin dydaktycznych przewidzianych w programie nauczania. Przedmiot z większą liczbą godzin dostawał więcej ćwiczeń i więcej miejsca. To gwarantowało, że zeszyt jest użyteczny jako narzędzie towarzyszące nauce — a nie zbiorem oderwanych zadań.

Ostateczna struktura obejmowała następujące przedmioty (rozdziały):

- Bezpieczeństwo i higiena pracy
- Podstawy masażu
- Podstawy masażu w medycynie
- Wykonywanie masażu w medycynie
- Wykonywanie masażu w sporcie
- Wykonywanie masażu prozdrowotnego
- Klucz odpowiedzi

### Faza 3: Przygotowanie tekstu

Klient przesyłał wytyczne merytoryczne — zakres tematyczny, wymagane zagadnienia, oczekiwane efekty kształcenia. Na tej podstawie pisaliśmy surowy tekst ćwiczeń. Każde ćwiczenie musiało sprawdzać konkretną wiedzę lub umiejętność, być jednoznaczne w interpretacji i nadawać się do rozwiązania na papierze (to zeszyt ćwiczeń, nie platforma e-learningowa).

Rodzaje ćwiczeń, które zastosowaliśmy: dopasowywanie opisów do pojęć, tabele do uzupełnienia, ocena prawdziwości stwierdzeń (prawda/fałsz), pytania otwarte z miejscem na odpowiedź (linie kropkowane), studia przypadków z poleceniami, schematy i diagramy do uzupełnienia (rysowane w TikZ), łączenie elementów strzałkami, wybór odpowiedzi wielokrotnych.

### Faza 4: Skład i łamanie tekstu

Gdy tekst był gotowy, zajęliśmy się składem. Tu wchodzimy w szczegóły techniczne, które opisuję w kolejnych sekcjach — Quarto jako system budowania książki, LaTeX jako silnik składu, niestandardowe środowiska zadaniowe, kolorystyka per rozdział, diagramy TikZ.

### Faza 5: Redakcja merytoryczna i korekta

Gotowy zeszyt — złożony, z pełną grafiką i formatowaniem — trafił do redaktora merytorycznego: doświadczonego i wykwalifikowanego masażysty, który zweryfikował cały materiał pod kątem poprawności merytorycznej. Sprawdził terminologię, poprawność opisów technik masażu, adekwatność wskazań i przeciwwskazań, realistyczność studiów przypadku. Po naniesieniu jego uwag przeszliśmy przez korektę językową i wygenerowaliśmy ostateczny plik.

---

## Quarto jako szkielet projektu

Projekt zbudowaliśmy w [Quarto](https://quarto.org/) — systemie publikacji naukowych i technicznych, który łączy markdown z silnikiem LaTeX-a. Quarto pozwala organizować wieloplikowe projekty książkowe z jednego pliku konfiguracyjnego, generując PDF-a przez LaTeX-a z pełną kontrolą nad typografią.

Dlaczego Quarto, a nie czysty LaTeX? Dwa powody. Po pierwsze, treść ćwiczeń pisaliśmy w plikach `.qmd` (Quarto Markdown), które mieszają prosty markdown z surowymi blokami LaTeX-a — szybciej się w nich pisze i łatwiej je edytować niż czyste pliki `.tex`. Po drugie, Quarto obsługuje projekt książkowy out of the box: jeden plik `_quarto.yml` definiuje kolejność rozdziałów, format wyjściowy, parametry strony i nagłówek LaTeX-owy.

Struktura katalogów projektu:

```
technik-masazysta/
├── _quarto.yml              # konfiguracja projektu
├── _header.tex              # preambula LaTeX — pakiety, środowiska
├── index.qmd                # strona tytułowa / wstęp
├── przedmioty/
│   ├── bhp.qmd              # Bezpieczeństwo i higiena pracy
│   ├── podstawy-masazu.qmd  # Podstawy masażu
│   ├── podstawy-masazu-w-medycynie.qmd
│   ├── wykonywanie-masazu-w-medycynie.qmd
│   ├── wykonywanie-masazu-w-sporcie.qmd
│   ├── wykonywanie-masazu-prozdrowotnego.qmd
│   └── klucz.qmd            # Klucz odpowiedzi
├── fonts/                   # fonty osadzone w projekcie
├── images/                  # grafiki
├── styles/                  # dodatkowe pliki stylów
└── docs/                    # katalog wyjściowy z PDF-em
```

Każdy przedmiot to osobny plik `.qmd` — analogicznie do zasady „jeden rozdział = jeden plik", którą opisujemy w artykule o [składzie podręcznika akademickiego w LaTeX-u](/blog/sklad-podrecznika-akademickiego/).

---

## Konfiguracja `_quarto.yml` — format A5 landscape ze spadami

Plik konfiguracyjny Quarto to serce projektu. Definiuje strukturę książki, format wyjściowy i wszystkie parametry strony:

```yaml
project:
  type: book
  output-dir: docs

book:
  chapters:
    - index.qmd
    - przedmioty/bhp.qmd
    - przedmioty/podstawy-masazu.qmd
    - przedmioty/podstawy-masazu-w-medycynie.qmd
    - przedmioty/wykonywanie-masazu-w-medycynie.qmd
    - przedmioty/wykonywanie-masazu-w-sporcie.qmd
    - przedmioty/wykonywanie-masazu-prozdrowotnego.qmd
    - przedmioty/klucz.qmd

format:
  pdf:
    toc: false
    number-sections: false
    documentclass: book
    classoption: openany
    papersize: a5
    geometry:
      - landscape
      - paperwidth=21.6cm # 21cm + 2×3mm spadu
      - paperheight=15.4cm # 14.8cm + 2×3mm spadu
      - asymmetric
      - left=1.3cm
      - right=1.3cm
      - top=1.8cm
      - bottom=1.8cm
      - includefoot
      - includehead
    include-in-header: _header.tex
```

Kilka decyzji wymaga komentarza.

**Format A5 landscape.** Zeszyt ćwiczeń to nie podręcznik do czytania ciągiem — to materiał roboczy, który uczeń kładzie na ławce i wypełnia długopisem. Format A5 w orientacji poziomej (landscape) daje szerszą, niższą stronę — wygodniejszą do tabel i schematów niż klasyczny portret. Szerokość 21 cm daje dużo miejsca na dwukolumnowe tabele, a wysokość 14,8 cm nie przytłacza — strona nie wygląda jak ściana tekstu.

**Spady.** Wymiary `paperwidth=21.6cm` i `paperheight=15.4cm` to docelowy format A5 landscape (21 × 14,8 cm) powiększony o 3 mm spadu na każdą krawędź. To standardowa konfiguracja pod druk, którą szczegółowo opisujemy w artykule o [przygotowaniu PDF-a do drukarni](/blog/pdf-do-drukarni/).

**`classoption: openany`.** Klasa `book` domyślnie wymusza rozpoczynanie rozdziałów na stronach nieparzystych (`openright`), wstawiając puste strony. W zeszycie ćwiczeń to marnotrawstwo papieru — `openany` pozwala rozdziałom zaczynać się na dowolnej stronie.

**`toc: false` i `number-sections: false`.** Zeszyt ćwiczeń nie potrzebuje automatycznego spisu treści ani numeracji sekcji generowanej przez LaTeX-a — mamy własny spis i własną numerację ćwiczeń, spójną z planem nauczania.

---

## Preambula LaTeX-a — niestandardowe środowiska i kolorystyka

Plik `_header.tex` to preambula LaTeX-owa ładowana przez Quarto. Tu zdefiniowaliśmy wszystko, co wykracza poza możliwości markdowna: kolorowe środowiska zadaniowe, style nagłówków, diagramy, niestandardowe formatowanie tabel.

### Kolory per przedmiot

Każdy rozdział (przedmiot) ma własny kolor przewodni. To nie kwestia estetyki — kolor pomaga uczniowi natychmiast zorientować się, w którym rozdziale się znajduje, bez czytania nagłówka. Kolory zdefiniowaliśmy w preambule i przełączaliśmy na początku każdego rozdziału:

```latex
\definecolor{bhpkolor}{RGB}{200,50,50}        % BHP — czerwony
\definecolor{podstawykolor}{RGB}{0,100,180}    % Podstawy — niebieski
\definecolor{medmasazkolor}{RGB}{32,125,137}   % Masaż w medycynie — morski
\definecolor{sportkolor}{RGB}{180,100,20}      % Masaż w sporcie — pomarańczowy
\definecolor{prozdrowkolor}{RGB}{60,160,60}    % Masaż prozdrowotny — zielony
\definecolor{kluczcolor}{RGB}{100,100,100}     % Klucz odpowiedzi — szary

% Aktywny kolor rozdziału — przełączany na początku każdego pliku .qmd
\colorlet{currentcolor}{bhpkolor}
```

Mechanizm `\colorlet{currentcolor}{...}` pozwala wszystkim środowiskom odwoływać się do jednej nazwy `currentcolor` — zmiana koloru na początku rozdziału automatycznie zmienia kolorystykę tabel, ramek, nagłówków i pasków w całym rozdziale. Zero ręcznego ustawiania kolorów w treści.

### Środowisko zadaniowe — `zadaniebox`

Kluczowy element wizualny zeszytu to ramka ćwiczenia. Każde ćwiczenie otoczone jest delikatną ramką z zaokrąglonymi rogami, z pionowym paskiem w kolorze rozdziału po lewej stronie. Zbudowaliśmy je z pakietu `tcolorbox`:

```latex
\usepackage[most]{tcolorbox}

\newtcolorbox{zadaniebox}{
  enhanced,
  breakable,                          % łamanie między stronami
  colback=white,
  colframe=currentcolor!40,
  leftrule=4pt,
  rightrule=0.5pt,
  toprule=0.5pt,
  bottomrule=0.5pt,
  arc=3pt,
  boxsep=5pt,
  left=8pt,
  right=8pt,
  top=6pt,
  bottom=6pt
}
```

Opcja `breakable` jest krytyczna — ćwiczenia potrafią być długie (studium przypadku z tabelą i pytaniami otwartymi zajmuje łatwo półtorej strony), a ramka musi się łamać między stronami bez utraty wizualnej spójności. Bez `breakable` LaTeX próbowałby zmieścić całe ćwiczenie na jednej stronie, generując ogromne puste przestrzenie.

Użycie w pliku `.qmd` wygląda tak — Quarto pozwala mieszać markdown z surowymi blokami LaTeX-a:

```
\begin{zadaniebox}
\textbf{Ćwiczenie 5. Diagnostyka stanu pacjenta
przed masażem prozdrowotnym}

\textbf{5.1. Uzupełnij listę elementów do oceny
w badaniu wstępnym:}

\renewcommand{\arraystretch}{1.3}
\begin{tabular}{|>{\columncolor{currentcolor!15}}
  p{0.24\textwidth}|p{0.67\textwidth}|}
\hline
\textbf{Element badania} & \textbf{Co należy ocenić} \\
\hline
Stan skóry & \dotfill \\
\hline
Napięcie mięśniowe & \dotfill \\
\hline
\end{tabular}
\end{zadaniebox}
```

### Tabele z kolorowymi nagłówkami

Tabele to najczęstszy element ćwiczeń — dopasowania, prawda/fałsz, wskazania/przeciwwskazania. Każda tabela ma nagłówek kolumny w kolorze rozdziału (delikatny, 15–20% nasycenia) i naprzemiennie kolorowane wiersze dla czytelności:

```latex
\renewcommand{\arraystretch}{1.4}
\begin{tabular}{|>{\columncolor{currentcolor!15}}
  p{0.6\textwidth}|p{0.02\textwidth}|p{0.02\textwidth}|}
\hline
\textbf{Stan} & \textbf{W} & \textbf{P} \\
\hline
Przewlekły stres i napięcia psychiczne & & \\
\hline
Gorączka i stany zapalne & & \\
\hline
\end{tabular}
```

Komenda `\columncolor{currentcolor!15}` koloruje pierwszą kolumnę na 15% nasycenia aktywnego koloru rozdziału. Efekt: tabela jest kolorystycznie spójna z resztą strony, ale kolor nie przeszkadza w czytaniu ani w pisaniu długopisem po wydruku.

### Linie kropkowane na odpowiedzi

Miejsca na odpowiedzi otwarte to linie kropkowane — `\dotfill` z odpowiednim odstępem pionowym:

```latex
\begin{tabular}{p{0.95\textwidth}}
1. \dotfill \\[3mm]
2. \dotfill \\[3mm]
3. \dotfill \\[1mm]
\end{tabular}
```

Proste, ale istotne: odstęp `[3mm]` między liniami daje wystarczająco miejsca na odręczne pismo, a `\dotfill` rozciąga kropki na całą dostępną szerokość. Uczeń widzi, ile miejsca ma na odpowiedź — co jest nieoczywistą, ale ważną wskazówką dydaktyczną.

---

## Diagramy TikZ — schematy do uzupełnienia

Część ćwiczeń wymaga od ucznia uzupełnienia brakujących elementów na schemacie — np. technik masażu profilaktycznego rozmieszczonych wokół centralnego bloku, lub etapów drenażu limfatycznego w sekwencji. Te schematy rysowaliśmy w TikZ bezpośrednio w kodzie LaTeX-a.

Przykład schematu z pustymi polami do uzupełnienia:

```latex
\begin{tikzpicture}[
  block/.style={draw, fill=currentcolor!10,
    text width=2.8cm, minimum height=1.5cm,
    align=center, rounded corners},
  empty-block/.style={draw, dashed, fill=white,
    text width=2.8cm, minimum height=1.5cm,
    align=center, rounded corners}
]

\node[block, fill=currentcolor!30] (center) at (0,0)
  {MASAŻ\\PROFILAKTYCZNY};

\node[block] (a1) at (-3,3) {1. Głaskanie\\powierzchowne};
\node[empty-block] (a2) at (0,3) {};
\node[block] (a3) at (3,3) {3. Rozcieranie};
\node[empty-block] (a4) at (-3,-3) {};
\node[block] (a5) at (0,-3) {5. Oklepywanie};
\node[empty-block] (a6) at (3,-3) {};

\draw[->, thick, currentcolor] (a1) -- (center);
\draw[->, thick, currentcolor] (a2) -- (center);
% ... pozostałe połączenia
\end{tikzpicture}
```

Kluczowy element: styl `empty-block` z `dashed` (linia przerywana) i `fill=white` wizualnie odróżnia pola do uzupełnienia od pól wypełnionych. Uczeń natychmiast widzi, gdzie ma wpisać odpowiedź. Strzałki i kolory (`currentcolor`) automatycznie dostosowują się do rozdziału.

Analogicznie rysowaliśmy schematy sekwencyjne — etapy procedur medycznych, kolejność czynności przy obsłudze urządzenia, schemat budowy układu limfatycznego. Bloki wypełnione i puste naprzemiennie, z numeracją i miejscem na wpisanie brakujących elementów pod schematem.

Dlaczego TikZ, a nie wklejone grafiki? Trzy powody: grafika wektorowa (skaluje się bez utraty jakości na druku), spójność kolorystyczna (kolory z `currentcolor` dopasowują się automatycznie) i edytowalność (zmiana treści bloku to zmiana jednej linii kodu, a nie edycja pliku w Illustratorze).

---

## Klucz odpowiedzi — zwarta typografia

Ostatni rozdział zeszytu to klucz odpowiedzi. Tu zmienialiśmy radykalnie typografię: z czytelnego, przestronnego układu ćwiczeń na maksymalnie zwartą, trzykolumnową kompozycję w rozmiarze 6/8 pt (rozmiar fontu/interlinia). Klucz nie jest materiałem do wypełniania — ma być kompaktowy, łatwy do szybkiego sprawdzenia odpowiedzi.

```latex
\thispagestyle{klucz}
\pagestyle{klucz}
\vspace*{-40mm}
\section*{\fontsize{12}{14}\selectfont
  Bezpieczeństwo i higiena pracy}
\begin{multicols}{3}
\fontsize{6}{8}\selectfont
\raggedright

\textbf{Ćwiczenie 1}\\
\textbf{1.1.} Kolejność etapów udzielania
pierwszej pomocy:\\
1 - Ocena bezpieczeństwa miejsca zdarzenia\\
2 - Sprawdzenie, czy poszkodowany oddycha\\
% ... dalsze odpowiedzi ...

\end{multicols}
```

Trzy kolumny w formacie A5 landscape dają około 6 cm szerokości na kolumnę — wystarczająco na krótkie odpowiedzi. Ujemny `\vspace*{-40mm}` eliminuje domyślny odstęp rozdziałowy klasy `book`, który przy kluczu odpowiedzi byłby marnotrawstwem przestrzeni. Klucz odpowiedzi dla całego zeszytu zmieścił się na kilkunastu stronach zamiast kilkudziesięciu.

---

## Studia przypadków — element wyróżniający

Każdy przedmiot w zeszycie zawiera przynajmniej jedno studium przypadku — opis fikcyjnego pacjenta z konkretnymi dolegliwościami, na podstawie którego uczeń musi zaproponować plan postępowania. To najtrudniejszy rodzaj ćwiczenia do napisania, bo wymaga realistycznego opisu klinicznego, jednoznacznych danych i otwartego pytania, które testuje umiejętność syntezy wiedzy.

Przykład z rozdziału o masażu prozdrowotnym:

> Klient, lat 42, pracuje jako programista, spędzając około 10 godzin dziennie przed komputerem. Zgłasza przewlekłe napięcia w okolicy karku i barków, okresowe bóle głowy oraz uczucie sztywności w nadgarstkach. Dodatkowo uskarża się na problemy ze snem, które przypisuje stresowi związanemu z pracą. Klient jest aktywny fizycznie — biega 2-3 razy w tygodniu po około 5 km.

Po opisie następuje polecenie: „Zaproponuj odpowiedni plan masażu prozdrowotnego dla powyższego klienta, uwzględniając dobór technik oraz częstotliwość zabiegów" — i linie kropkowane na odpowiedź.

Studia przypadków były jednym z elementów najściślej weryfikowanych przez redaktora merytorycznego. Opis pacjenta musiał być medycznie wiarygodny, proponowane techniki musiały odpowiadać aktualnej wiedzy z zakresu masażu, a pytania nie mogły prowadzić do niejednoznacznych odpowiedzi.

---

## Skala projektu w liczbach

Kilka danych, które oddają skalę tego, co dostarczyliśmy:

- **186 stron** gotowego materiału w formacie A5 landscape
- **6 przedmiotów** (rozdziałów merytorycznych) + klucz odpowiedzi
- **Ponad 150 ćwiczeń** różnych typów (dopasowania, prawda/fałsz, tabele, pytania otwarte, studia przypadków, schematy)
- **Kilkadziesiąt tabel** z kolorowymi nagłówkami i naprzemiennymi wierszami
- **Kilkanaście diagramów TikZ** — schematy procedur, mapy myśli, sekwencje etapów
- **Kompletny klucz odpowiedzi** w formacie trzykolumnowym
- **8 plików `.qmd`** w strukturze projektu Quarto
- **Jeden plik konfiguracyjny** `_quarto.yml` sterujący całą kompilacją

Cały projekt — od pierwszego maila z zapytaniem do przekazania gotowego pliku — trwał kilka tygodni. Najdłuższym etapem było pisanie surowego tekstu ćwiczeń i redakcja merytoryczna. Sam skład, gdy treść była gotowa i zatwierdzona, zajął ułamek tego czasu — dzięki przygotowanym środowiskom i automatyzacji Quarto.

---

## Dlaczego Quarto + LaTeX, a nie Word

Pytanie, które często słyszymy. Odpowiedź jest taka sama jak przy każdym materiale dydaktycznym o skali większej niż 20 stron.

**Spójność wizualna.** Środowisko `zadaniebox` gwarantuje, że każde ćwiczenie wygląda identycznie — te same marginesy, te same zaokrąglenia, ten sam kolor paska. W Wordzie utrzymanie spójności 150 ramek na 186 stronach wymaga żelaznej dyscypliny i ręcznego sprawdzania każdej. W LaTeX-u wystarczy zmienić definicję środowiska w jednym miejscu, a zmiana propaguje się na cały dokument.

**Kolory per rozdział.** Mechanizm `\colorlet{currentcolor}{...}` zmienia kolorystykę całego rozdziału jedną komendą. W Wordzie oznaczałoby to ręczne przefarbowywanie dziesiątek tabel, ramek i nagłówków przy każdej zmianie koncepcji kolorystycznej.

**Diagramy TikZ.** Schematy rysowane w kodzie są wektorowe, edytowalne i automatycznie kolorystycznie spójne. W Wordzie musielibyśmy rysować je w zewnętrznym programie, eksportować jako obrazki i wklejać — tracąc możliwość szybkiej edycji i spójność kolorów.

**Klucz odpowiedzi.** Trzykolumnowy layout z fontem 6 pt i setkami krótkich odpowiedzi to koszmar w Wordzie. W LaTeX-u — `\begin{multicols}{3}` i `\fontsize{6}{8}\selectfont`.

**Kompilacja do print-ready PDF.** Quarto generuje PDF przez LaTeX-a z pełną kontrolą nad spadami, marginesami i osadzaniem fontów. Konfiguracja spadów to trzy parametry w `_quarto.yml`. O przygotowaniu plików do druku pisaliśmy szczegółowo w artykule o [PDF-ach gotowych do drukarni](/blog/pdf-do-drukarni/).

---

## Czego nas ten projekt nauczył

Trzy wnioski, które przenosimy na kolejne projekty edukacyjne.

Po pierwsze, **wzór 2–3 stron na początku to inwestycja, nie strata czasu**. Klient widzi dokładnie, co dostanie, zanim zacznie się właściwa praca. Akceptacja wzoru eliminuje sytuację „to nie tak sobie to wyobrażałem" na etapie gotowego materiału.

Po drugie, **podział treści proporcjonalnie do planu nauczania** sprawia, że zeszyt jest natychmiast użyteczny. Nauczyciel nie musi wymyślać, które ćwiczenia pominąć, bo jest ich za dużo, ani szukać dodatkowych materiałów, bo jest ich za mało. Struktura zeszytu odzwierciedla strukturę zajęć.

Po trzecie, **redakcja merytoryczna przez eksperta dziedzinowego jest niezastępowalna**. Tekst ćwiczeń możemy napisać na podstawie wytycznych, skład możemy zrobić perfekcyjnie — ale weryfikacja, czy opisana technika masażu jest poprawna, czy wskazania i przeciwwskazania są aktualne, czy studium przypadku jest realistyczne — to wymaga doświadczenia praktycznego, którego żaden system składu nie zastąpi.

---

## Podsumowanie techniczne

Dla zainteresowanych stackiem technologicznym — zestawienie narzędzi i pakietów użytych w projekcie:

| Element          | Narzędzie / pakiet                   |
| ---------------- | ------------------------------------ |
| System budowania | Quarto (projekt typu `book`)         |
| Silnik składu    | LaTeX (pdfLaTeX)                     |
| Klasa dokumentu  | `book` z opcją `openany`             |
| Format strony    | A5 landscape ze spadami 3 mm         |
| Geometria        | `geometry` (asymmetric, landscape)   |
| Ramki ćwiczeń    | `tcolorbox` (enhanced, breakable)    |
| Diagramy         | `tikz` (shapes, arrows, positioning) |
| Tabele           | `tabularx`, `colortbl`, `array`      |
| Kolumny klucza   | `multicol`                           |
| Kolory           | `xcolor` z `\colorlet` per rozdział  |
| Kontrola wersji  | Git                                  |

---

## Potrzebujesz podobnego materiału?

Zeszyty ćwiczeń, materiały dydaktyczne, podręczniki do nauki zawodu — to projekty, które łączą kompetencje redakcyjne z technicznymi. Jeśli masz surowy materiał merytoryczny i potrzebujesz profesjonalnego zeszytu ćwiczeń gotowego do druku — od struktury i tekstu, przez skład, po redakcję i korektę — [napisz do nas](/kontakt/). Jeśli chcesz dowiedzieć się więcej o technologii, której używamy, zacznij od naszych artykułów o [LaTeX-u dla początkujących](/blog/latex-jak-zaczac/) i [konfiguracji środowiska](/blog/konfiguracja-instalacja-latex/).
