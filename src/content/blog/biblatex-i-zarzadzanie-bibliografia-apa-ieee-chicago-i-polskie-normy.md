---
title: "BibLaTeX i bibliografia — APA, IEEE, Chicago i normy PL"
description: "Jak ogarnąć bibliografię w LaTeX-u, żeby style APA, IEEE i Chicago nie były koszmarem. BibLaTeX i bibliografia to jedno źródło danych i przełączane style — bez ręcznego formatowania przypisów."
date: 2026-08-04
category: "LaTeX"
tags:
  ["biblatex bibliografia", "latex", "bibtex", "biber", "apa", "ieee", "chicago", "prace naukowe"]
---

Promotor odsyła rozdział z jedną uwagą: „proszę przejść na styl APA zamiast numerycznego". W Wordzie oznacza to kilka godzin przeklikiwania każdego przypisu, ręcznego przestawiania nazwisk i dat, i modlitwy, żeby nic się nie rozjechało. W dobrze przygotowanym dokumencie LaTeX-owym jest to zmiana **jednego słowa** w preambule i ponowna kompilacja. Cała reszta — kolejność, interpunkcja, kursywa tytułów, forma odsyłacza w tekście — przelicza się sama. Na tym polega przewaga, którą daje para **BibLaTeX i bibliografia** trzymana w osobnej bazie danych: rozdzielasz *treść* źródła od *sposobu jego wyświetlenia*.

Ten artykuł pokazuje, jak to zorganizować w praktyce — od pliku `.bib`, przez wybór między starym BibTeX-em a nowoczesnym BibLaTeX-em z backendem Biber, aż po konkretne style: APA, IEEE, Chicago i wymagania polskich uczelni.

---

## Dlaczego bibliografia to osobna baza danych, a nie lista na końcu

Największy błąd myślowy autorów przechodzących z edytora tekstu polega na traktowaniu bibliografii jak *tekstu do napisania na końcu*. W LaTeX-owym podejściu bibliografia to **baza danych** — plik z rozszerzeniem `.bib`, w którym każde źródło jest rekordem o ustalonych polach. Ten sam rekord raz opisany posłuży do wygenerowania odsyłacza w tekście, wpisu w spisie literatury i — jeśli trzeba — indeksu autorów.

Rekord w pliku `.bib` wygląda tak (przykłady z dokumentacji IIT):

```
@BOOK{HK,
   AUTHOR   = {H. Kopka and P. W. Daly},
   TITLE    = {A Guide to LaTeX},
   PUBLISHER= {Addison-Wesley},
   ADDRESS  = {Reading, MA},
   YEAR     = 1999
}

@ARTICLE{Pan,
   AUTHOR = {D. Pan},
   TITLE  = {A Tutorial on MPEG/Audio Compression},
   JOURNAL= {IEEE Multimedia},
   YEAR   = {1995},
   VOLUME = {2},
   PAGES  = {60-74}
}
```

Kluczowa jest część zaraz po nawiasie klamrowym — `HK`, `Pan`. To **klucz cytowania** (*cite key*): krótka nazwa, która nigdzie się nie drukuje, ale służy do przywołania źródła. W tekście piszesz po prostu `...w granicy \cite{Pan}` i LaTeX sam wstawi właściwy odsyłacz w formacie narzuconym przez wybrany styl. Typ rekordu (`@BOOK`, `@ARTICLE`, `@INPROCEEDINGS`) mówi systemowi, jakich pól oczekiwać i jak je poskładać — inaczej złoży się książkę, inaczej artykuł, a jeszcze inaczej referat konferencyjny.

Konsekwencja jest praktyczna: **jedno źródło opisujesz raz w życiu**. Jeśli budujesz taką bazę systematycznie przez cały okres pisania, na końcu nie ma etapu „składania bibliografii" — ona już istnieje. To samo podejście leży u podstaw [składu monografii naukowej](/blog/sklad-monografii-naukowej-struktura-bibliografia-indeks/), gdzie aparat naukowy potrafi liczyć setki pozycji.

---

## Trzy drogi: ręcznie, BibTeX, BibLaTeX

Historycznie bibliografię w LaTeX-u dało się zrobić na trzy sposoby, i warto rozumieć różnicę, bo w internecie krąży mnóstwo przykładów z każdej epoki.

**Ręcznie** — środowiskiem `thebibliography` z komendami `\bibitem`. Sam wpisujesz każdą pozycję i sam odpowiadasz za jej format oraz kolejność. Dokumentacja IIT stawia sprawę jasno: bez opcjonalnej etykiety `\bibitem` produkuje kolejny numer w nawiasach kwadratowych, a **posortowanie wpisów alfabetycznie jest obowiązkiem piszącego**. Przy kilku pozycjach do zaakceptowania, przy pracy dyplomowej — droga przez mękę.

**BibTeX** — osobny program, który czyta plik `.bib`, wybiera cytowane pozycje i formatuje je według stylu zapisanego w pliku `.bst`. To rozwiązanie, które przez lata było standardem i które opisuje większość starszych poradników (jak artykuł Kumara w *PracTEX Journal*, gdzie BibTeX „wstawia cytowania i dostarcza bibliografię niemal w dowolnym pożądanym formacie").

**BibLaTeX** — nowoczesny pakiet, który przejął rolę BibTeX-a. Sama logika sortowania i formatowania przeniesiona jest do LaTeX-a, a przetwarzanie danych obsługuje zewnętrzny backend **Biber**. To dziś domyślny wybór do każdej nowej pracy i pozostała część artykułu skupia się właśnie na nim.

| Cecha | `thebibliography` (ręcznie) | BibTeX | BibLaTeX + Biber |
|---|---|---|---|
| Źródło danych | wpisane w dokument | plik `.bib` | plik `.bib` |
| Definicja stylu | brak (robisz sam) | plik `.bst` | opcja `style=` w preambule |
| Sortowanie | ręczne | ograniczone | elastyczne, wielopoziomowe |
| Polskie znaki / UTF-8 | zależy od kodowania | problematyczne | natywne wsparcie |
| Zmiana stylu | przepisanie wszystkiego | podmiana `.bst` | zmiana jednego słowa |
| Rekomendacja 2026 | tylko awaryjnie | projekty utrzymywane | **nowe prace** |

Praktyczny wniosek: jeśli zaczynasz dziś, zaczynaj od BibLaTeX-a. Migracja z BibTeX-a w połowie pracy działa (te same pliki `.bib`), ale nie warto zaczynać od przestarzałego narzędzia. Jeśli dopiero [zaczynasz z LaTeX-em](/blog/latex-jak-zaczac/), potraktuj bibliografię jako jeden z pierwszych elementów do opanowania — porządek w źródłach oszczędza najwięcej nerwów pod koniec.

---

## Jak to zestawić w preambule

Minimalna konfiguracja BibLaTeX-a dla polskiego dokumentu sprowadza się do kilku linii. Ładujesz pakiet z wybranym stylem i backendem, wskazujesz plik z bazą, a w miejscu, gdzie ma się pojawić spis, wywołujesz jedną komendę:

```latex
\usepackage[backend=biber,
            style=ieee,
            sorting=none]{biblatex}
\addbibresource{moja-baza.bib}

% ...treść dokumentu, cytowania \cite{...}, \parencite{...}, \textcite{...}

\printbibliography
```

Trzy rzeczy warto tu wychwycić. Opcja `style=` decyduje o **wszystkim** — o wyglądzie odsyłacza w tekście i o formacie wpisu na liście. Opcja `sorting=` kontroluje kolejność (`none` = kolejność cytowania, typowa dla IEEE; `nyt` = nazwisko–rok–tytuł, typowa dla stylów autor–rok). A `\addbibresource` — inaczej niż stary `\bibliography` — wymaga podania nazwy pliku **razem z rozszerzeniem** `.bib`.

Do cytowania w tekście BibLaTeX daje osobne komendy zależnie od potrzeby: `\cite` wstawia goły odsyłacz, `\parencite` ujmuje go w nawias, a `\textcite` wplata nazwisko autora w zdanie („jak wykazał \textcite{...}"). Ta ostatnia jest bezcenna w stylach autor–rok, bo sama odmienia formę odsyłacza zależnie od kontekstu zdania.

Kompilacja przebiega w kilku przejściach — najpierw LaTeX, potem Biber, potem znów LaTeX (dwa razy, żeby ustaliły się odsyłacze). Ręczne pilnowanie tej sekwencji to strata czasu; służy do tego `latexmk`, który sam wykrywa, ile przejść potrzeba. Jak go ustawić razem z całym środowiskiem, opisuje osobny tekst o [instalacji i konfiguracji LaTeX-a lokalnie](/blog/konfiguracja-instalacja-latex/).

---

## Style w praktyce: APA, IEEE, Chicago

![Porównanie tej samej pozycji bibliograficznej złożonej w LaTeX-u w stylach IEEE, APA i Chicago, wraz ze wspólnym rekordem źródłowym z pliku .bib.](/blog/biblatex-i-zarzadzanie-bibliografia-apa-ieee-chicago-i-polskie-normy/01-ilustracja.webp)

*Jedno źródło w pliku `.bib`, trzy style bibliografii — realnie złożone w LaTeX-u: zmiana jednego słowa w preambule przelicza kolejność, kursywę tytułów i formę odsyłacza.*


Tu leży sedno całej wygody. Te same dane w pliku `.bib`, przełączane słowem w preambule, dają zupełnie różne konwencje. Poniżej co realnie oznacza każdy z trzech dominujących światów.

### IEEE — numerycznie, w kolejności cytowania

Styl inżynierski. Odsyłacz w tekście to numer w nawiasie kwadratowym `[1]`, a lista literatury jest **posortowana w kolejności pierwszego przywołania**, nie alfabetycznie. Dawniej realizował go plik `IEEEtranS.bst`; w BibLaTeX-ie to `style=ieee` z `sorting=none`. *IEEE Editorial Style Manual for Authors* (edycja 2024) to obszerny dokument z własnymi regułami także poza samą bibliografią — na przykład dla podpisów tabel każe numerować je cyframi rzymskimi (`TABLE I`, `TABLE II`) i składać podpis „odwróconą piramidą", a w kwestiach gramatyki nieujętych w manualu odsyła wprost do *The Chicago Manual of Style*. Warto o tym pamiętać, bo redakcja czasopisma sprawdza te detale.

### APA — autor–rok, alfabetycznie

Standard w naukach społecznych i humanistyce. Odsyłacz w tekście to `(Nazwisko, rok)`, a lista posortowana alfabetycznie po nazwisku. W BibLaTeX-ie realizuje go osobny pakiet `biblatex-apa` (`style=apa`), który dość wiernie odwzorowuje wymagania *Publication Manual*. To styl, w którym `\textcite` błyszczy — pozwala napisać „Schmidt i Buxmann (2010) wykazali…" zamiast doklejać nawias na końcu zdania.

### Chicago — dwa systemy w jednym

Tu jest pułapka, w którą wpadają autorzy nieświadomi, że „Chicago" to nie jeden styl. *The Chicago Manual of Style* (18. edycja, 2024) definiuje **dwa różne systemy**:

- **Notes–Bibliography** — cytowanie w **przypisach dolnych** (lub końcowych) plus pełna bibliografia. Dominuje w historii, literaturoznawstwie, sztuce. Przewodnik MacEwan pokazuje nawet, jak w tym systemie zapisać cytowanie z drugiej ręki: przypis podaje pełne dane *obu* źródeł, oryginału i tego, które go cytuje, spięte słowem „quoted in".
- **Author–Date** — cytowanie w nawiasie `(Nazwisko rok)` w tekście, jak w APA, plus lista literatury.

Wybór między nimi narzuca dyscyplina albo promotor — nie jest to kwestia gustu. W BibLaTeX-ie to dwa różne warianty: `style=chicago-notes` kontra `style=chicago-authordate`.

| Styl (opcja `style=`) | Odsyłacz w tekście | Sortowanie listy | Typowa dziedzina |
|---|---|---|---|
| `ieee` | `[1]` numerycznie | kolejność cytowania | inżynieria, informatyka |
| `apa` | `(Nazwisko, 2010)` | alfabetyczne | nauki społeczne |
| `chicago-notes` | przypis dolny¹ | alfabetyczne | humanistyka, historia |
| `chicago-authordate` | `(Nazwisko 2010)` | alfabetyczne | nauki przyrodnicze |
| `numeric` / `alphabetic` | `[1]` / `[Kop99]` | konfigurowalne | ogólne, techniczne |

Dwa ostatnie odpowiadają starym plikom `plain.bst` i `alpha.bst`: pierwszy numeruje pozycje w kolejności alfabetycznej, drugi zamiast numeru daje skrót nazwiska z rokiem — odwołanie do Smitha z 1987 wygląda jak `[Smi87]`.

---

## Polskie normy i pułapki, których nie widać od razu

Polskie uczelnie rzadko wymagają czystego APA czy IEEE — częściej mają **własne wytyczne wydziałowe** oparte luźno na normie PN-ISO 690, z lokalnymi decyzjami: czy „i" między autorami, czy „&"; jak zapisać „red." dla redaktora tomu; jak traktować dostęp online. BibLaTeX radzi sobie z tym lepiej niż BibTeX, bo style da się dostosowywać komendami `\DeclareBibliographyDriver` bez pisania osobnego pliku `.bst` od zera. W praktyce jednak większości piszących wystarczy wybrać najbliższy standardowy styl i dopieścić kilka detali.

Trzy rzeczy, które w polskim kontekście wykładają autorów najczęściej:

- **Kodowanie i sortowanie znaków diakrytycznych.** Nazwisko „Żółkiewski" musi trafić w polskim alfabecie na właściwe miejsce, a nie na koniec listy po „Z". Biber sortuje zgodnie z regułami językowymi, ale trzeba mu je wskazać (opcja `sortlocale`). To jeden z głównych powodów, dla których BibLaTeX wygrywa ze starym BibTeX-em przy tekstach po polsku.
- **Cudzysłowy i pauzy.** Tytuły w cudzysłowie powinny dostać polskie „…", a nie proste angielskie. Do bibliografii wchodzi tu pakiet `csquotes`, który BibLaTeX i tak zaleca. Reszta interpunkcji rządzi się regułami opisanymi w tekście o [poprawnym użyciu pauzy, półpauzy i dywizu](/blog/pauzy-polpauzy-i-dywizy-poprawne-uzycie-w-polskim-skladzie/) — zakres stron zapisuje się półpauzą, nie dywizem.
- **Długie URL-e i DOI.** Adresy internetowe potrafią rozpychać szpaltę i wychodzić na margines. Klasyczne poradniki (Kumar) rozwiązują to pakietem `url`; dziś BibLaTeX robi to sam, ale warto sprawdzić, czy odnośniki łamią się poprawnie, zwłaszcza w wąskiej kolumnie.

Osobna kwestia to **spójność opisu** w samej bazie. Norma nic nie da, jeśli połowa rekordów ma pełne imiona autorów, a połowa inicjały, albo część wydawnictw jest po polsku, a część po angielsku. Bazę `.bib` trzeba pilnować tak samo jak tekst — to część aparatu naukowego, którą recenzent czyta uważnie. Ta staranność jest jednym z kryteriów przy [składzie pracy doktorskiej](/blog/sklad-pracy-doktorskiej-wymagania-proces-i-typowe-bledy/), gdzie niekonsekwentna bibliografia potrafi zaważyć na ogólnym wrażeniu.

---

## Co z tego wynika dla piszącego pracę

Gdyby zebrać powyższe w jedną zasadę, brzmiałaby: **oddziel dane od formy, i zrób to od pierwszego dnia pisania**. Baza `.bib` budowana na bieżąco kosztuje kilka minut przy każdym nowym źródle, a oszczędza dni pod koniec, gdy okazuje się, że wydział chce innego stylu, niż zakładałeś. Numeryczny IEEE, alfabetyczny APA, dwa oblicza Chicago i lokalne wytyczne PN-ISO 690 przestają być czterema odrębnymi zadaniami, a stają się czterema ustawieniami tego samego mechanizmu.

To podejście najbardziej opłaca się tam, gdzie źródeł jest dużo i gdzie liczy się bezbłędny aparat — w monografiach, rozprawach, [pracach magisterskich i licencjackich](/blog/sklad-pracy-magisterskiej-i-licencjackiej-kiedy-sklad-a-kiedy/). Jednocześnie warto znać granicę własnych sił: konfiguracja BibLaTeX-a pod nietypowe wymagania wydziałowe, sortowanie diakrytyków, dopieszczenie łamania długich odsyłaczy i zestrojenie tego wszystkiego z resztą składu to praca, którą przy oddawanym w terminie dyplomie często rozsądniej [zlecić komuś, kto robi to na co dzień](/uslugi/prace-naukowe/). Bibliografia jest tą częścią dokumentu, w której amatorski skład najłatwiej rozpoznać — i tą, w której porządek widać od pierwszej strony spisu literatury.