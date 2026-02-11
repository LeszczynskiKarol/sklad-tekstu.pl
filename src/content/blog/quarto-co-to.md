---
title: "Quarto — system publikacji technicznych, który łączy markdown z LaTeX-em, Pythonem i wieloma formatami wyjściowymi"
description: "Czym jest Quarto, jak działa, do czego się nadaje i kiedy warto z niego skorzystać zamiast czystego LaTeX-a lub Worda. Architektura, formaty wyjściowe, projekty książkowe, rozszerzenia, cytowania, odnośniki krzyżowe i integracja z kodem — kompletny przewodnik po systemie publikacji od Posit."
date: 2025-06-17
category: "Narzędzia"
tags:
  - quarto
  - latex
  - markdown
  - pandoc
  - skład tekstu
  - publikacje techniczne
  - książki
  - PDF
  - narzędzia
  - system publikacji
---

Quarto to system publikacji technicznych i naukowych, który pozwala pisać treść w markdownie, osadzać kod w Pythonie, R, Julii lub JavaScripcie, a następnie generować z jednego źródła dokumenty w kilkunastu formatach — PDF przez LaTeX-a, HTML, Word, ePub, prezentacje Reveal.js i inne. Brzmi jak obietnica, która musi gdzieś się załamać. W praktyce — działa, i to zaskakująco dobrze, choć nie bez ograniczeń.

Ten artykuł wyjaśnia, czym dokładnie jest Quarto, jak wygląda jego architektura, w jakich scenariuszach się sprawdza, a kiedy lepiej zostać przy czystym LaTeX-u. Opisujemy konkretne mechanizmy: projekty książkowe, odnośniki krzyżowe, cytowania, rozszerzenia, treść warunkową i konfigurację PDF-a z pełną kontrolą nad typografią. Jeśli pracujesz z dokumentami technicznymi, materiałami dydaktycznymi lub publikacjami naukowymi — ten tekst jest dla Ciebie.

---

## Czym jest Quarto i skąd się wzięło

Quarto to open-source'owy system publikacji zbudowany na Pandocu — uniwersalnym narzędziu do konwersji dokumentów. Rozwijany jest przez firmę Posit (dawniej RStudio), tę samą, która stworzyła R Markdown. Quarto można traktować jako następcę R Markdown, ale z jedną fundamentalną różnicą: nie jest powiązane z żadnym konkretnym językiem programowania. R Markdown wymagał R-a. Quarto działa z R, Pythonem, Julią, JavaScriptem — albo w ogóle bez kodu, jako czysty system składu tekstu.

Licencja: MIT (pełny open source). Kod źródłowy dostępny na GitHubie. Instalacja: osobny program CLI (`quarto render`, `quarto preview`), niezależny od żadnego IDE, choć ma świetną integrację z VS Code, RStudio, Positron i JupyterLab.

Kluczowe elementy architektury Quarto:

Pandoc stanowi rdzeń systemu — odpowiada za parsowanie markdowna i konwersję między formatami. Quarto dodaje do Pandoca warstwę rozszerzeń specyficznych dla pisania technicznego: odnośniki krzyżowe, panele z figurami, callouty, zaawansowany układ strony i system cytowań. Do tego dochodzi system projektów (książka, strona internetowa, blog), mechanizm rozszerzeń (Lua) i integracja z silnikami wykonywania kodu (knitr dla R, Jupyter dla Pythona).

Plik źródłowy Quarto ma rozszerzenie `.qmd` (Quarto Markdown). W środku to zwykły markdown z nagłówkiem YAML i opcjonalnymi blokami kodu. Quarto przetwarza go w pipeline: parsowanie YAML → wykonanie kodu (jeśli jest) → konwersja Pandocem → silnik wyjściowy (LaTeX dla PDF, przeglądarka dla HTML, itd.).

---

## Formaty wyjściowe — jeden plik źródłowy, wiele wyników

To główna obietnica Quarto i jednocześnie jego największa przewaga nad czystym LaTeX-em. Z jednego pliku `.qmd` możesz wygenerować:

PDF przez LaTeX-a (z pełną kontrolą nad typografią, klasą dokumentu, preambuła, pakietami), HTML (artykuł, strona, blog, dashboard), Microsoft Word (.docx), prezentacje Reveal.js, ePub (książki elektroniczne), Typst (nowy silnik składu, alternatywa dla LaTeX-a), AsciiDoc, format manuskryptu naukowego z szablonami czasopism i wiele innych obsługiwanych przez Pandoca.

Konfiguracja formatów wyjściowych jest deklaratywna — odbywa się w nagłówku YAML:

```yaml
title: "Tytuł dokumentu"
author: "Autor"
format:
  pdf:
    documentclass: scrbook
    papersize: a5
    geometry:
      - landscape
      - left=1.3cm
      - right=1.3cm
    include-in-header: _header.tex
  html:
    theme: cosmo
    toc: true
  docx:
    reference-doc: szablon.docx
```

Jedna komenda `quarto render` generuje wszystkie zdefiniowane formaty. Albo konkretny: `quarto render dokument.qmd --to pdf`.

To rozwiązanie eliminuje jeden z najczęstszych problemów przy publikacjach — konieczność utrzymywania równoległych wersji tego samego dokumentu w różnych formatach. Opisujesz treść raz, konfigurujesz formaty w YAML, a Quarto zajmuje się resztą.

---

## Projekty książkowe — jeden `_quarto.yml` zamiast kilkunastu konfiguracji

Quarto obsługuje natywnie kilka typów projektów: `default` (pojedynczy dokument), `website` (strona z nawigacją), `book` (książka z rozdziałami) i `manuscript` (manuskrypt naukowy). Każdy typ ma dedykowane ustawienia i zachowania.

Typ `book` jest szczególnie istotny dla składu materiałów dydaktycznych i podręczników. Książka Quarto to zbiór plików `.qmd` zdefiniowanych w pliku `_quarto.yml`, renderowanych jako jeden dokument z numeracją rozdziałów, spisem treści i odnośnikami krzyżowymi między rozdziałami.

Przykład konfiguracji projektu książkowego — ten sam schemat, którego używaliśmy przy składzie [zeszytu ćwiczeń dla techników masażystów](/blog/zeszyt-cwiczen-case-study/):

```yaml
project:
  type: book
  output-dir: docs

book:
  title: "Tytuł książki"
  author: "Autor"
  chapters:
    - index.qmd
    - rozdzial-01.qmd
    - rozdzial-02.qmd
    - rozdzial-03.qmd
    - references.qmd

format:
  pdf:
    documentclass: book
    classoption: openany
    papersize: a5
    toc: true
    number-sections: true
    include-in-header: _header.tex
  html:
    theme: cosmo
```

Zasada „jeden rozdział = jeden plik" utrzymuje projekt czytelnym i edytowalnym nawet przy setkach stron. To ten sam wzorzec, który opisujemy w artykule o [składzie podręcznika akademickiego](/blog/sklad-podrecznika-akademickiego/) — tyle że z Quarto konfiguracja jest prostsza.

Renderowanie: `quarto render` kompiluje wszystkie rozdziały w jeden PDF i jednocześnie generuje stronę HTML z nawigacją między rozdziałami. Książki HTML mają wbudowaną wyszukiwarkę, nawigację boczną, linki do pobrania PDF-a i ePuba — bez żadnej dodatkowej konfiguracji.

---

## Quarto + LaTeX — jak to współgra

To kluczowy punkt dla osób pracujących ze składem profesjonalnym. Quarto nie zastępuje LaTeX-a — używa go jako silnika do generowania PDF-ów. Pipeline wygląda tak: `.qmd` → Pandoc → `.tex` → pdfLaTeX / LuaLaTeX / XeLaTeX → `.pdf`.

Oznacza to, że masz pełny dostęp do ekosystemu LaTeX-a: pakietów, klas dokumentów, preambuły, niestandardowych środowisk. Wszystko, co działa w LaTeX-u, działa w Quarto — wystarczy osadzić surowy blok LaTeX-a w pliku `.qmd`:

```
Tekst w markdownie...

\begin{tcolorbox}[colback=blue!5, colframe=blue!50]
To jest ramka z pakietu tcolorbox, osadzona bezpośrednio
w pliku Quarto.
\end{tcolorbox}

...kontynuacja w markdownie.
```

Preambułę LaTeX-ową dołączasz przez opcję `include-in-header` w YAML. To tam definiujesz pakiety, niestandardowe środowiska, kolory, style nagłówków — dokładnie tak samo, jak w czystym projekcie LaTeX-owym. Szczegóły konfiguracji LaTeX-a od podstaw opisujemy w artykule [LaTeX — jak zacząć](/blog/latex-jak-zaczac/).

Quarto domyślnie używa klas KOMA-Script (`scrartcl`, `scrreprt`, `scrbook`) — nowoczesnych zamienników standardowych klas LaTeX-owych z lepszą typografią. Możesz je zmienić na dowolną klasę dostępną w Twojej dystrybucji TeX-a.

Domyślny silnik PDF to LuaLaTeX (z natywną obsługą Unicode). Możesz przełączyć na pdfLaTeX lub XeLaTeX:

```yaml
format:
  pdf:
    pdf-engine: xelatex
    mainfont: "TeX Gyre Termes"
```

Konfiguracja geometrii strony, spadów, marginesów — wszystko odbywa się przez pakiet `geometry` w YAML-u, dokładnie tak samo jak w czystym LaTeX-u. O przygotowaniu PDF-ów z odpowiednią geometrią do druku pisaliśmy w artykule o [plikach print-ready](/blog/pdf-do-drukarni/).

---

## Markdown z supermocami — co Quarto dodaje do składni

Podstawowa składnia Quarto to Pandoc Markdown, rozszerzony o mechanizmy specyficzne dla pisania technicznego. Najważniejsze z nich:

### Odnośniki krzyżowe (cross-references)

Quarto automatycznie numeruje figury, tabele, równania, sekcje i listingi kodu, tworząc klikalne odnośniki. Składnia jest prosta — element wymaga etykiety (prefiksu `#fig-`, `#tbl-`, `#eq-`, `#sec-`), a odwołanie używa składni `@`:

```markdown
![Diagram procesu](diagram.png){#fig-proces}

Jak pokazano na @fig-proces, kolejność etapów jest następująca...
```

Quarto zamieni `@fig-proces` na „Rysunek 1" (lub „Figure 1" zależnie od ustawień języka) z hiperłączem. W projektach książkowych numer zawiera automatycznie numer rozdziału: „Rysunek 3.2".

To znacząca przewaga nad czystym markdownem, gdzie numeracja figur i tabel wymaga ręcznego zarządzania.

### Cytowania i bibliografia

Quarto obsługuje pliki `.bib` (BibLaTeX, BibTeX) i ponad 8500 stylów cytowań CSL. Cytowanie w tekście: `[@knuth1984]` lub `@knuth1984`. Integracja z Zotero działa natywnie w edytorze wizualnym.

```yaml
bibliography: references.bib
csl: apa.csl
```

Dla PDF-ów możesz przełączyć na natywny BibLaTeX lub natbib zamiast domyślnego citeproc:

```yaml
format:
  pdf:
    cite-method: biblatex
```

### Callouty (bloki wyróżniające)

Pięć typów: `note`, `tip`, `warning`, `caution`, `important`. Renderują się odpowiednio do formatu — kolorowe ramki w HTML, stylizowane bloki w PDF, cytaty blokowe w Wordzie:

```markdown
::: {.callout-warning}

## Uwaga na spady

Pamiętaj o dodaniu 3 mm spadu na każdą krawędź przy
przygotowywaniu pliku do drukarni.
:::
```

### Treść warunkowa

Możliwość wyświetlania różnej treści w zależności od formatu wyjściowego:

```markdown
::: {.content-visible when-format="html"}
Interaktywna wersja tego wykresu dostępna jest poniżej.
:::

::: {.content-visible when-format="pdf"}
Pełny wykres — patrz Załącznik A.
:::
```

To pozwala utrzymywać jeden plik źródłowy, który generuje optymalny wynik dla każdego formatu.

---

## Osadzanie kodu — figury generowane z danych

To funkcja, która odróżnia Quarto od klasycznych systemów składu. Bloki kodu w plikach `.qmd` mogą być wykonywalne — Quarto uruchamia je i osadza wynik (wykres, tabelę, tekst) bezpośrednio w dokumencie.

```python
#| label: fig-wyniki
#| fig-cap: "Rozkład wyników egzaminu"

import matplotlib.pyplot as plt
import numpy as np

wyniki = np.random.normal(65, 12, 200)
plt.hist(wyniki, bins=20, edgecolor='black')
plt.xlabel('Punkty')
plt.ylabel('Liczba uczniów')
plt.show()
```

Quarto wykona ten kod przez Jupyter, wygeneruje wykres i osadzi go jako figurę z podpisem i etykietą do odnośnika krzyżowego. Zmiana danych = zmiana wykresu przy kolejnym renderowaniu. Zero ręcznego eksportowania grafik.

Obsługiwane silniki wykonywania: Jupyter (Python, Julia, R), knitr (R), Observable (JavaScript). Opcje kodu kontrolujesz komentarzami YAML (`#|`):

```python
#| echo: false          # nie pokazuj kodu w dokumencie
#| warning: false        # ukryj ostrzeżenia
#| fig-width: 8          # szerokość figury w calach
#| fig-height: 4         # wysokość figury
#| code-fold: true       # zwijany blok kodu (tylko HTML)
```

Jeśli nie używasz kodu — Quarto działa równie dobrze jako czysty system składu tekstu. Wystarczy pominąć bloki kodu i pracować z markdownem i LaTeX-em.

---

## Rozszerzenia — system wtyczek

Quarto ma mechanizm rozszerzeń oparty na filtrach Lua i szablonach Pandoca. Rozszerzenia mogą dodawać nowe formaty (np. szablony czasopism naukowych), shortcody (skróty do osadzania treści), filtry (modyfikacja AST dokumentu) i niestandardowe szablony.

Instalacja rozszerzenia:

```bash
quarto add quarto-journals/jss
```

Przykłady zastosowań: szablony artykułów naukowych (Journal of Statistical Software, PNAS, Elsevier, ACM), niestandardowe formaty prezentacji, kolorowanie tekstu w wielu formatach jednocześnie, licznik słów i wiele innych.

Pełna lista rozszerzeń: [Awesome Quarto](https://github.com/mcanouil/awesome-quarto) na GitHubie.

Tworzenie własnych rozszerzeń wymaga znajomości Lua — to jednocześnie zaleta (potężne możliwości) i ograniczenie (próg wejścia wyższy niż YAML).

---

## Edytor wizualny — pisanie bez kodu

Quarto oferuje edytor wizualny w RStudio i Positron (IDE od Posit). To tryb WYSIWYG, w którym widzisz sformatowany tekst zamiast surowego markdowna — z podglądem równań, cytatami z Zotero, wstawianiem odnośników krzyżowych przez GUI i autouzupełnianiem opcji YAML.

Edytor wizualny obniża próg wejścia dla osób, które nie chcą pisać w surowym markdownie, ale potrzebują funkcji Quarto. Przełączanie między trybem wizualnym a kodem źródłowym jest natychmiastowe — edytor nie modyfikuje struktury pliku.

---

## Kiedy Quarto, a kiedy czysty LaTeX

To pytanie, które zadaje sobie każdy, kto pracuje z profesjonalnym składem tekstu. Odpowiedź zależy od projektu.

### Quarto ma przewagę, gdy:

Potrzebujesz wielu formatów wyjściowych z jednego źródła — PDF do druku i HTML na stronę internetową. Pracujesz nad książką lub materiałem dydaktycznym, gdzie struktura projektu (rozdziały, odnośniki, bibliografia) jest ważniejsza niż mikrokontrola nad każdą stroną. Integrujesz kod z treścią — raporty z danymi, materiały z wykresami generowanymi z kodu, dokumentacja techniczna. Chcesz prostszej składni dla typowych operacji — cytowania, odnośniki, callouty, tabele w markdownie zamiast LaTeX-a. Projektujesz stronę internetową lub blog techniczny (jak ten, na którym właśnie czytasz ten artykuł). Współpracujesz z osobami, które nie znają LaTeX-a — markdown jest prostszy do nauki.

### Czysty LaTeX ma przewagę, gdy:

Potrzebujesz pełnej kontroli nad układem każdej strony — mikrokorekty łamania tekstu, ręczne pozycjonowanie elementów, zaawansowane środowiska tcolorbox z wieloma zagnieżdżeniami. Projekt jest czysto PDF-owy i nie przewidujesz potrzeby generowania HTML-a. Istniejący szablon LaTeX-owy (klasa dokumentu, preambuła) jest na tyle złożony, że warstwa abstrakcji Quarto przeszkadza zamiast pomagać. Pracujesz z wysoce niestandardową typografią — wielokolumnowe klucze odpowiedzi w foncie 6pt, schematy TikZ z dziesiątkami węzłów, skomplikowane tabele z `\multicolumn` i `\multirow`. Potrzebujesz bezpośredniego dostępu do pliku `.tex` na każdym etapie pracy.

W naszej praktyce oba podejścia się uzupełniają. Przy [zeszycie ćwiczeń dla techników masażystów](/blog/zeszyt-cwiczen-case-study/) użyliśmy Quarto jako szkieletu projektu (struktura książki, kompilacja), ale cała treść ćwiczeń — ramki `zadaniebox`, tabele z kolorowymi nagłówkami, diagramy TikZ — była pisana w surowym LaTeX-u osadzonym w plikach `.qmd`. Quarto dało nam organizację projektu i konfigurację strony w jednym `_quarto.yml`, a LaTeX dał pełną kontrolę nad wizualnym detalem.

Ogólna zasada: jeśli Twój projekt wymaga więcej niż 30% surowego LaTeX-a w plikach źródłowych, prawdopodobnie wygodniej będzie Ci pracować w czystym LaTeX-u. Jeśli markdown z okazjonalnymi wstawkami LaTeX-a pokrywa 70–80% potrzeb — Quarto upraszcza workflow.

---

## Porównanie z innymi narzędziami

### Quarto vs R Markdown

Quarto to oficjalny następca R Markdown. Różnice: Quarto jest narzędziem CLI (nie pakietem R), obsługuje wiele języków programowania, ma ujednoliconą konfigurację (jeden `_quarto.yml` zamiast osobnych plików `_bookdown.yml`, `_output.yml`), wbudowane typy projektów (książka, strona, blog) zamiast osobnych pakietów (bookdown, blogdown, distill). R Markdown nadal działa i jest wspierane — nie musisz migrować. Ale nowe projekty warto zaczynać w Quarto.

### Quarto vs Word

Porównanie analogiczne do [LaTeX vs Word](/blog/latex-vs-word/) — z tą różnicą, że Quarto łączy prostotę markdowna z mocą LaTeX-a. Word jest interaktywny i natychmiastowy. Quarto jest deklaratywne i reprodukowalne. Przy dokumentach powyżej 20–30 stron z numerowanymi figurami, tabelami i cytowaniami — Quarto (jak LaTeX) wygrywa spójnością i automatyzacją.

### Quarto vs Typst

Typst to nowy silnik składu (od 2022), który Quarto obsługuje jako alternatywę dla LaTeX-a. Kompiluje się błyskawicznie, ma czytelniejszą składnię i lepsze komunikaty błędów. Ograniczenia: młody ekosystem, mniej pakietów, słabsza obsługa zaawansowanych wzorów matematycznych. Quarto pozwala przełączać między LaTeX-em a Typstem jedną zmianą w YAML-u.

---

## Instalacja i pierwsze kroki

Instalacja Quarto: pobierz ze strony [quarto.org](https://quarto.org/), dostępne pakiety dla Windows, macOS i Linuxa. Do generowania PDF-ów potrzebujesz dystrybucji TeX-a — Quarto rekomenduje TinyTeX:

```bash
quarto install tinytex
```

O instalacji i konfiguracji pełnego środowiska LaTeX-owego piszemy szczegółowo w artykule o [konfiguracji i instalacji LaTeX-a](/blog/konfiguracja-instalacja-latex/). Jeśli wahasz się między Overleafem a lokalną instalacją, przeczytaj nasze [porównanie Overleafa z lokalnym LaTeX-em](/blog/overleaf_vs_local_latex/).

Pierwszy dokument:

```bash
# utwórz nowy projekt książkowy
quarto create project book moja-ksiazka

# podgląd na żywo (przeglądarka)
cd moja-ksiazka
quarto preview

# renderowanie do PDF
quarto render --to pdf
```

Quarto automatycznie tworzy szkielet projektu z przykładowymi rozdziałami i konfiguracją. Edytujesz pliki `.qmd`, renderujesz jedną komendą — to cały workflow.

---

## Ograniczenia i problemy, o których warto wiedzieć

Quarto nie jest narzędziem idealnym. Oto problemy, na które natrafiasz w praktyce.

Warstwa abstrakcji nad LaTeX-em bywa frustrująca, gdy potrzebujesz precyzyjnej kontroli. Pandoc konwertując markdown na LaTeX podejmuje własne decyzje o strukturze kodu `.tex` — czasem niezgodne z Twoimi intencjami. Opcja `keep-tex: true` pozwala sprawdzić wygenerowany plik `.tex`, ale ręczna modyfikacja tego pliku jest nadpisywana przy każdym renderowaniu.

Debugowanie błędów LaTeX-a przez Quarto jest trudniejsze niż w czystym LaTeX-u. Błąd kompilacji LaTeX-a przechodzi przez kilka warstw (Quarto → Pandoc → LaTeX) i komunikat nie zawsze wskazuje właściwe miejsce w pliku `.qmd`.

Rozszerzenia wymagają znajomości Lua. Proste shortcody to kilka linii kodu, ale niestandardowe formaty czy filtry modyfikujące AST dokumentu wymagają znaczącej inwestycji w naukę Lua.

Niektóre zaawansowane operacje LaTeX-owe nie mają odpowiedników w markdownie Quarto. `\multicolumn`, `\multirow`, złożone zagnieżdżenia `tcolorbox`, zaawansowane pozycjonowanie TikZ — to nadal wymaga surowych bloków LaTeX-a. Quarto to umożliwia, ale tracisz wtedy przenośność między formatami (surowy LaTeX nie renderuje się w HTML).

System projektów jest sztywny w pewnych aspektach. Na przykład książka Quarto wymaga pliku `index.qmd`, a kolejność rozdziałów jest zdefiniowana wyłącznie w `_quarto.yml`. To sensowne ograniczenia, ale mogą kolidować z istniejącymi konwencjami projektu.

---

## Podsumowanie techniczne

| Element           | Opis                                                     |
| ----------------- | -------------------------------------------------------- |
| Twórca            | Posit (dawniej RStudio)                                  |
| Licencja          | MIT (open source)                                        |
| Silnik            | Pandoc + knitr / Jupyter / Observable                    |
| Formaty wyjściowe | PDF, HTML, Word, ePub, Reveal.js, Typst, AsciiDoc i inne |
| Typy projektów    | document, book, website, manuscript                      |
| Języki kodu       | R, Python, Julia, JavaScript (Observable)                |
| Składnia          | Pandoc Markdown + YAML + surowy LaTeX/HTML               |
| Klasy LaTeX       | KOMA-Script domyślnie, dowolne dostępne                  |
| Silniki PDF       | LuaLaTeX (domyślny), pdfLaTeX, XeLaTeX                   |
| Cytowania         | citeproc, BibLaTeX, natbib; 8500+ stylów CSL             |
| Rozszerzenia      | Lua (filtry, shortcody, formaty)                         |
| IDE               | VS Code, RStudio, Positron, JupyterLab, Neovim           |
| Kontrola wersji   | Git-friendly (pliki tekstowe)                            |
| Publikacja        | Quarto Pub, GitHub Pages, Netlify, Confluence            |

---

## Kiedy Quarto jest właściwym wyborem dla Twojego projektu

Quarto sprawdza się najlepiej jako warstwa organizacyjna nad LaTeX-em — szczególnie w projektach wieloplikowych (książki, materiały dydaktyczne, podręczniki), gdzie potrzebujesz struktury projektu, automatycznej numeracji, odnośników krzyżowych i opcjonalnie wielu formatów wyjściowych. Nie zastępuje LaTeX-a — wykorzystuje go, jednocześnie upraszczając to, co w czystym LaTeX-u wymaga ręcznej konfiguracji.

Jeśli dopiero zaczynasz z profesjonalnym składem tekstu i zastanawiasz się, od czego zacząć — przeczytaj najpierw nasz artykuł [LaTeX — jak zacząć](/blog/latex-jak-zaczac/). Jeśli masz już doświadczenie z LaTeX-em i chcesz usprawnić workflow przy większych projektach — Quarto jest warte wypróbowania. Jeśli natomiast potrzebujesz kompletnego materiału dydaktycznego przygotowanego do druku — od koncepcji, przez tekst, po profesjonalny skład — [napisz do nas](/kontakt/).
