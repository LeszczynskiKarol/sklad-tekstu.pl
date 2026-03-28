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

Konfiguracja geometrii strony, spadów, marginesów — wszystko odbywa się przez pakiet `geometry` w YAML-u, dokładnie tak samo jak w czystym LaTeX-u. O przygotowaniu PDF-ów z odpowiednią geometrią do druku pisaliśmy w artykule o [plikach print-ready](/blog/pdf-do-drukarni/). Jeśli zastanawiasz się, czy pisać projekt LaTeX-owy lokalnie czy w chmurze, przeczytaj porównanie [Overleaf vs lokalna instalacja LaTeX](/blog/overleaf_vs_local_latex/) — te same decyzje dotyczą projektów Quarto generujących PDF przez LaTeX-a.

---

## Markdown z supermocami — co Quarto dodaje do składni

Podstawowa składnia Quarto to Pandoc Markdown, rozszerzony o mechanizmy specyficzne dla pisania technicznego. Najważniejsze z ni