---
title: "PDF gotowy do drukarni — CMYK, spady, crop marks i osadzanie fontów"
description: "Co musi zawierać PDF, żeby drukarnia go przyjęła bez problemów. Profile kolorów ICC, TrimBox, BleedBox, MediaBox, standardy PDF/X-1a i PDF/X-4. Jak LaTeX generuje pliki print-ready — pakiety geometry, crop, pdfx i xcolor."
date: 2025-02-21
category: "Poradniki"
tags:
  [
    "latex",
    "print-ready PDF",
    "CMYK",
    "spady",
    "bleed",
    "crop marks",
    "znaczniki cięcia",
    "osadzanie fontów",
    "PDF/X",
    "drukarnia",
    "prepress",
    "ICC",
    "TrimBox",
    "BleedBox",
  ]
---

Wysyłasz PDF do drukarni. Dostajesz maila: „Brak spadów, fonty nie osadzone, kolory w RGB — prosimy o poprawkę". Poprawiasz. Drugi mail: „TrimBox nie ustawiony, brakuje znaczników cięcia". Poprawiasz znowu. Trzeci mail: „Plik nie jest zgodny z PDF/X-1a". W tym momencie zastanawiasz się, czy nie było łatwiej po prostu zanieść manuskrypt do drukarni i poprosić, żeby sami to złożyli. Znamy ten scenariusz — i dlatego ten artykuł tłumaczy krok po kroku, co dokładnie musi zawierać PDF, żeby drukarnia przyjęła go bez jednej poprawki. A na końcu pokazujemy, jak LaTeX generuje takie pliki niemal automatycznie.

---

## Czym jest „PDF print-ready"

„Print-ready" to nie cecha samego formatu PDF — to zestaw wymagań, które plik musi spełnić, żeby przejść przez proces prepressu bez interwencji operatora. Zwykły PDF, który wyświetla się poprawnie na ekranie, prawie nigdy nie nadaje się do druku bez modyfikacji.

Drukarnia potrzebuje pliku, który zawiera cztery kategorie informacji niedostępnych w typowym PDF-ie ekranowym. Po pierwsze, **informację geometryczną** — gdzie dokładnie kończy się strona po obcięciu i jak daleko poza tę krawędź sięga grafika (spady). Po drugie, **informację kolorystyczną** — w jakim modelu kolorów zapisane są elementy i jaki profil ICC opisuje zamierzone odwzorowanie barw. Po trzecie, **kompletność zasobów** — czy wszystkie fonty są osadzone w pliku, a nie tylko ich nazwy. Po czwarte, **odpowiednią rozdzielczość** — czy grafiki rastrowe mają wystarczającą liczbę pikseli na cal, żeby druk był ostry.

Brak któregokolwiek z tych elementów oznacza odrzucenie pliku na etapie preflightu — automatycznej kontroli jakości, którą drukarnia wykonuje przed przekazaniem pliku na maszynę.

---

## Pięć „pudełek" PDF-a — MediaBox, CropBox, BleedBox, TrimBox, ArtBox

Zanim przejdziemy do spadów i znaczników cięcia, musisz zrozumieć mechanizm, który stoi za nimi w strukturze pliku PDF. Każda strona PDF-a może mieć zdefiniowanych do pięciu prostokątnych obszarów — tak zwanych _page boxes_. To one mówią drukarni, co jest czym na stronie.

### MediaBox — cała strona fizyczna

MediaBox definiuje pełne wymiary strony w pliku. Dla druku jest to najszerszy prostokąt — zawiera nie tylko treść i spady, ale też przestrzeń na znaczniki cięcia, paski kolorów i informacje techniczne (nazwa pliku, data). MediaBox to jedyny box, który jest **obowiązkowy** w każdym PDF-ie — bez niego plik nie jest prawidłowy.

### TrimBox — docelowy rozmiar strony

TrimBox definiuje wymiary **gotowej, obciętej strony** — to, co czytelnik dostaje do ręki. Jeśli drukujesz książkę w formacie B5 (176 × 250 mm), TrimBox ma dokładnie 176 × 250 mm. To najważniejszy box dla drukarni — oprogramowanie do impozycji (rozkładania stron na arkuszu drukarskim) używa właśnie TrimBoxa do pozycjonowania stron.

### BleedBox — obszar spadów

BleedBox definiuje prostokąt nieco większy od TrimBoxa — typowo o 3–5 mm na każdej krawędzi. To obszar, do którego muszą sięgać elementy graficzne dotykające krawędzi strony. Po wydrukowaniu arkusz jest obcinany wzdłuż linii TrimBoxa, ale ponieważ gilotyna nigdy nie trafia idealnie, spad zapewnia, że na krawędzi nie pojawi się biały pasek niezadrukowanego papieru.

### CropBox — podgląd na ekranie

CropBox definiuje obszar wyświetlany przez przeglądarkę PDF (Acrobat, Foxit, Preview). Dla prepressu jest praktycznie nieistotny — stowarzyszenie GWG (Ghent Workgroup), które definiuje standardy dla branży poligraficznej, zaleca w ogóle go nie ustawiać. Domyślnie CropBox równa się MediaBoxowi.

### ArtBox — strefa bezpieczeństwa

ArtBox to przypadek szczególny. Pierwotnie miał oznaczać obszar pokryty grafiką, ale w praktyce bywa używany do definiowania _safety zone_ — strefy bezpieczeństwa, w której powinien znajdować się tekst i istotne elementy graficzne. W standardach PDF/X-1a i PDF/X-3 jest **zabroniony** (pliki mogą zawierać TrimBox albo ArtBox, ale nie oba).

### Wzajemne relacje

Rozmiary boxów tworzą hierarchię — od największego do najmniejszego:

```
MediaBox  ⊇  CropBox  ⊇  BleedBox  ⊇  TrimBox  ⊇  ArtBox
```

Dla typowej strony B5 z 3 mm spadami i 10 mm miejsca na znaczniki, wymiary wyglądają tak:

<div class="table-wrapper">

| Box      | Szerokość | Wysokość | Opis                                    |
| -------- | --------- | -------- | --------------------------------------- |
| MediaBox | 196 mm    | 270 mm   | Pełna strona + spady + znaczniki cięcia |
| BleedBox | 182 mm    | 256 mm   | TrimBox + 3 mm spadu na każdą stronę    |
| TrimBox  | 176 mm    | 250 mm   | Docelowy format B5                      |
| ArtBox   | 166 mm    | 240 mm   | Strefa bezp. (5 mm od krawędzi cięcia)  |

</div>

W pliku PDF te wartości zapisane są w punktach typograficznych (1 pt = 1/72 cala ≈ 0,353 mm). Strona B5 w TrimBoxie to `[0 0 498.90 708.66]` punktów.

Weryfikacja boxów w istniejącym PDF-ie jest prosta. Na Linuxie polecenie `pdfinfo -box plik.pdf` (z pakietu Poppler) wyświetli wartości wszystkich zdefiniowanych boxów. W Acrobat Pro ta sama informacja dostępna jest w Print Production → Preflight.

![Pięć page boxes PDF-a — MediaBox, CropBox, BleedBox, TrimBox, ArtBox z wymiarami](/blog/pdf-gotowy-do-drukarni/01-page-boxes.jpg)

---

## Spady — 3 milimetry, które ratują druk

Spad (_bleed_) to najczęstszy powód odrzucenia pliku przez drukarnię. Mechanizm jest prosty: arkusz papieru po wydrukowaniu trafia na gilotynę, która obcina go do docelowego rozmiaru. Gilotyna ma tolerancję — nawet najlepsza maszyna może „zjechać" o ułamek milimetra. Bez spadów taki przeskok oznacza cienki biały pasek na krawędzi gotowej strony.

### Jak duży musi być spad

Standardowy spad w europejskich drukarniach to **3 mm** na każdą krawędź. Amerykański standard to **⅛ cala** (3,175 mm) — praktycznie to samo. Niektóre drukarnie wielkoformatowe wymagają 5 mm, a specjalistyczne zastosowania (opakowania, etykiety) mogą wymagać nawet więcej. Zawsze potwierdź wymagania z konkretną drukarnią przed rozpoczęciem pracy.

### Co „sięga" do spadu, a co nie

Elementy graficzne, które w projekcie dotykają krawędzi strony — tła, zdjęcia, kolorowe paski, ornamenty — muszą być rozciągnięte poza krawędź o wartość spadu. Tekst, loga i istotne elementy graficzne muszą znajdować się **wewnątrz** strefy bezpieczeństwa — minimum 5 mm od linii cięcia. Umieszczenie tekstu w spadzie gwarantuje, że zostanie obcięty.

### Margines bezpieczeństwa

Między linią cięcia (TrimBox) a pierwszym istotnym elementem powinna znajdować się strefa bezpieczeństwa (_safety zone_) o szerokości 3–5 mm. Dla książek, gdzie strony są zszywane, margines wewnętrzny (przy grzbiecie) powinien być jeszcze szerszy — 12–15 mm — bo oprawiony papier „wchodzi" w grzbiet.

Podsumowując: spad sięga **na zewnątrz** od krawędzi cięcia, strefa bezpieczeństwa sięga **do wewnątrz**. Razem tworzą bufor, który chroni druk przed niedokładnościami procesu produkcyjnego.

![Anatomia strony drukarskiej — spad, linia cięcia, strefa bezpieczeństwa z wymiarami](/blog/pdf-gotowy-do-drukarni/02-spad-anatomia.jpg)

---

## Znaczniki cięcia — instrukcje dla gilotyny

Znaczniki cięcia (_crop marks_) to krótkie linie umieszczone w narożnikach strony, wskazujące operatorowi gilotyny dokładne miejsce cięcia. Drukowane są poza obszarem spadu, w przestrzeni MediaBoxa, i oczywiście nie pojawiają się na gotowym produkcie.

### Rodzaje znaczników

W profesjonalnym prepressie występuje kilka rodzajów znaczników, choć nie wszystkie są wymagane w każdym projekcie:

<div class="table-wrapper">

| Znacznik             | Angielska nazwa         | Funkcja                                               |
| -------------------- | ----------------------- | ----------------------------------------------------- |
| Znaczniki cięcia     | Crop marks / Trim marks | Wskazują narożniki docelowej strony (TrimBox)         |
| Znaczniki spadów     | Bleed marks             | Wskazują granicę obszaru spadu (BleedBox)             |
| Znaczniki pasowania  | Registration marks      | Krzyżyki celownicze do wyrównania kolorów na maszynie |
| Paski kolorów        | Color bars              | Próbki kolorów do kontroli nasycenia i gęstości       |
| Informacja o stronie | Page information        | Nazwa pliku, data, numer separacji                    |

</div>

**Uwaga praktyczna:** wiele drukarni woli, żebyś **nie** umieszczał własnych znaczników pasowania i pasków kolorów — nakładają swoje, dopasowane do konkretnej maszyny. Znaczniki cięcia (crop marks) są natomiast wymagane prawie zawsze.

### Odległość znaczników od strony

Znaczniki cięcia nie mogą dotykać krawędzi spadu — między końcem spadu a początkiem znacznika powinno być 3–5 mm odstępu. W przeciwnym razie linia cięcia mogłaby przeciąć znacznik, a atrament ze znacznika mógłby przedostać się na gotowy produkt. Typowy układ: 3 mm spadu + 3 mm odstępu = znaczniki zaczynają się 6 mm od krawędzi TrimBoxa.

---

## CMYK vs RGB — dlaczego ekran kłamie

To jeden z najczęstszych problemów w prepressie. Monitor wyświetla kolory w modelu RGB (Red, Green, Blue) — mieszając światło trzech barw podstawowych. Drukarka natomiast nakłada na papier cztery farby: Cyan, Magenta, Yellow i Key (Black) — model CMYK. Te dwa modele mają różne _gamuty_ (zakresy odwzorowalnych kolorów).

### Problem gamutów

Gamut RGB jest szerszy niż gamut CMYK. Oznacza to, że pewne kolory widoczne na ekranie — intensywne niebieskie, neonowe zielone, głębokie purpurowe — **nie mają odpowiednika w CMYK**. Przy konwersji z RGB do CMYK takie kolory są „ściskane" do najbliższej wartości CMYK, co powoduje przytłumienie i zmianę odcienia. Jeśli konwersję wykona automatycznie RIP drukarni (bez Twojej kontroli), wynik może nie odpowiadać zamierzeniom projektowym.

### Profile ICC

Konwersja RGB → CMYK nie jest jednoznaczna — zależy od konkretnego procesu druku i rodzaju papieru. Druk offsetowy na papierze powlekanym (_coated_) odwzorowuje kolory inaczej niż druk cyfrowy na papierze niepowlekanym (_uncoated_). Profile ICC (International Color Consortium) opisują precyzyjnie, jak dany proces druku przekształca wartości CMYK na kolory na papierze.

Najczęściej stosowane profile w Europie:

<div class="table-wrapper">

| Profil ICC                | Zastosowanie                            | Standard    |
| ------------------------- | --------------------------------------- | ----------- |
| Coated FOGRA39            | Offset, papier powlekany (błyszczący)   | ISO 12647-2 |
| Uncoated FOGRA47          | Offset, papier niepowlekany (matowy)    | ISO 12647-2 |
| PSO Coated v3             | Offset, papier powlekany (nowszy)       | ISO 12647-2 |
| PSO Uncoated v3 (FOGRA52) | Offset, papier niepowlekany (nowszy)    | ISO 12647-2 |
| GRACoL 2013               | Offset, papier powlekany (standard USA) | GRACoL      |

</div>

Profile te wchodzą w skład tak zwanego _Output Intent_ — deklaracji w PDF-ie, która mówi: „ten plik został przygotowany z myślą o takim procesie druku". Drukarnia używa Output Intent do kalibracji maszyny.

### CMYK w praktyce

Dla podręczników akademickich i książek naukowych (czyli typowego materiału, który składamy) sprawa jest prostsza niż się wydaje. Tekst to czarny (K=100, CMY=0). Linie, ramki, nagłówki — jeśli są kolorowe — definiujemy bezpośrednio w CMYK. Jedyny kłopot to grafiki rastrowe (zdjęcia, screenshoty), które autorzy dostarczają niemal zawsze w RGB. Te trzeba skonwertować ręcznie — w Photoshopie, GIMP-ie lub za pomocą narzędzia `ghostscript` — z odpowiednim profilem ICC.

**Czarny tekst a CMYK:** istnieje subtelna, ale ważna różnica między „czystym" czarnym (K=100, C=0, M=0, Y=0) a „bogatym" czarnym (_rich black_: np. C=40, M=30, Y=30, K=100). Czysty czarny jest wystarczający dla tekstu — drukowany jest jedną farbą, więc nie wymaga idealnego pasowania kolorów. Bogaty czarny daje głębszy kolor na dużych powierzchniach (tła, duże nagłówki), ale przy małym tekście powoduje rozmycie wynikające z niedokładności pasowania.

---

## Osadzanie fontów — 100% albo odrzucenie

PDF drukarni musi mieć **wszystkie fonty osadzone w pliku** — w całości lub jako podzbiór (_subset_). Bez osadzenia drukarnia zastąpi brakujący font domyślnym, co zniszczy skład: zmienią się szerokości znaków, kerning, łamanie linii i stronicowanie. 500 stron podręcznika przeleje się na 520 — lub skurczy do 480.

### Osadzanie pełne vs podzbiór

Podzbiór (_subset_) to osadzenie tylko tych glifów (znaków), które faktycznie występują w dokumencie. Jeśli dokument używa 200 z 3000 glifów fontu, osadzany jest tylko te 200 — co zmniejsza rozmiar pliku. W nazwie fontu w PDF-ie podzbior jest oznaczany przedrostkiem z sześcioma wielkimi literami (np. `ABCDEF+TimesNewRoman`).

Drukarnie akceptują oba tryby, ale podzbior jest preferowany ze względu na mniejszy rozmiar pliku. Standard PDF/X wymaga osadzenia, ale nie narzuca trybu.

### Fonty systemowe i licencje

Nie wszystkie fonty mogą być osadzone — niektóre licencje zabraniają embeddingu. W LaTeX-u problem ten praktycznie nie istnieje: fonty z rodziny Computer Modern, Latin Modern, TeX Gyre i większość fontów open-source pozwala na osadzanie. W pdfLaTeX-u fonty są osadzane domyślnie — ale warto to zweryfikować.

### Weryfikacja osadzenia

Polecenie `pdffonts` z pakietu Poppler (Xpdf) wyświetla listę fontów i kolumnę „emb" (embedded):

```
$ pdffonts main.pdf
name                  type       emb sub uni
--------------------- ---------- --- --- ---
BKHTMV+CMR10          Type 1     yes yes yes
IXJDVF+CMBX12         Type 1     yes yes yes
WAEQLT+CMMI10         Type 1     yes yes yes
DNPOFA+CMSY10         Type 1     yes yes yes
```

Każdy font musi mieć „yes" w kolumnie „emb". Jeśli choć jeden ma „no" — plik nie przejdzie preflightu.

---

## Rozdzielczość grafik rastrowych

Druk offset operuje z rozdzielczością rastra (_screen ruling_) rzędu 150–175 lpi (lines per inch). Żeby grafika rastrowa drukowała się ostro, potrzebuje rozdzielczości **co najmniej dwukrotnie większej** niż liniatura rastra — stąd standard **300 DPI** (dots per inch) dla zdjęć i grafik tonalnych.

<div class="table-wrapper">

| Typ grafiki                  | Minimalna rozdzielczość | Uwagi                                    |
| ---------------------------- | ----------------------- | ---------------------------------------- |
| Zdjęcia, grafiki tonalne     | 300 DPI                 | Standard dla druku offsetowego           |
| Grafiki liniowe (1-bitowe)   | 600–1200 DPI            | Cienkie linie, tekst rastrowy            |
| Grafiki wektorowe (PDF, EPS) | —                       | Skalują się bez utraty jakości           |
| Screenshoty UI               | 150 DPI wystarczy       | Przy druku w skali 1:1, bez powiększania |

</div>

**Kluczowa zasada:** rozdzielczość mierzy się **w skali druku**, nie w skali oryginału. Zdjęcie o rozdzielczości 300 DPI przy szerokości 10 cm, powiększone w dokumencie do 20 cm, ma efektywną rozdzielczość 150 DPI — i nie przejdzie preflightu.

Grafiki wektorowe (PDF, EPS, SVG skonwertowane do PDF) nie mają tego problemu — skalują się do dowolnego rozmiaru bez utraty ostrości. Dlatego wykresy (pgfplots), diagramy (TikZ) i schematy powinny **zawsze** być w formacie wektorowym.

---

## Standardy PDF/X — gwarancja akceptacji

PDF/X to rodzina standardów ISO (ISO 15930) zdefiniowanych specjalnie dla wymiany plików w branży poligraficznej. Plik zgodny z PDF/X daje drukarni gwarancję, że zawiera wszystko, czego potrzebuje — bez niespodzianek.

### PDF/X-1a — konserwatywny pewniaczek

PDF/X-1a (ISO 15930-4) to najstarszy i najbardziej restrykcyjny standard. Wymaga:

- Wszystkie kolory w **CMYK lub skali szarości** (bez RGB, bez kolorów kalibrowanych ICC)
- Wszystkie fonty **osadzone**
- **TrimBox i BleedBox** zdefiniowane (ArtBox zabroniony)
- **Output Intent** z profilem ICC (np. Coated FOGRA39)
- Brak przezroczystości (_transparency_) — musi być spłaszczona
- Brak JavaScript, formularzy, multimediów, szyfrowania
- Brak hiperłączy i zakładek (bookmarks)

PDF/X-1a jest oparty na PDF 1.3 (wersja 2001) lub PDF 1.4 (wersja 2003). Jego siła to **absolutna przewidywalność** — plik wygląda identycznie na każdym RIP-ie, bo nie ma nic do interpretacji. Wada: wymaga konwersji wszystkich kolorów do CMYK przed eksportem i spłaszczenia przezroczystości, co może generować duże pliki i tracić szczegóły.

### PDF/X-4 — nowoczesny standard

PDF/X-4 (ISO 15930-7) to nowszy standard oparty na PDF 1.6, który rozwiązuje ograniczenia PDF/X-1a:

- Kolory mogą być w **CMYK, RGB, Lab lub ICC** — konwersję do CMYK wykonuje RIP drukarni
- Obsługuje **przezroczystość** (_live transparency_) — bez spłaszczania
- Obsługuje **warstwy** (_optional content groups_)
- Fonty muszą być osadzone
- TrimBox lub ArtBox wymagany (nie oba jednocześnie)
- Output Intent wymagany

PDF/X-4 jest preferowanym standardem w nowoczesnych drukarniach. Pliki są mniejsze (bo przezroczystość nie jest rasteryzowana), kolory dokładniejsze (bo konwersja odbywa się z profilem drukarni, nie autora), a workflow elastyczniejszy.

### Który wybrać?

<div class="table-wrapper">

| Kryterium            | PDF/X-1a                  | PDF/X-4                           |
| -------------------- | ------------------------- | --------------------------------- |
| Kolory               | Tylko CMYK + szarość      | CMYK, RGB, Lab, ICC               |
| Przezroczystość      | Spłaszczona               | Natywna (_live_)                  |
| Rozmiar pliku        | Większy (rasteryzacja)    | Mniejszy (wektory zachowane)      |
| Kompatybilność z RIP | Maksymalna (każdy RIP)    | Wymaga nowoczesnego RIP-a         |
| Rekomendacja         | Legacy, starsze drukarnie | Standard 2025, większość drukarni |
| Wersja bazowa PDF    | PDF 1.3 / 1.4             | PDF 1.6                           |

</div>

**Nasza rekomendacja:** zapytaj drukarnię, czego wymaga. Jeśli nie ma preferencji — wybierz **PDF/X-4**. Jeśli drukarnia wyraźnie prosi o PDF/X-1a — dostosuj się. Jeśli nie wiesz i nie możesz zapytać — PDF/X-1a jest bezpieczniejszym wyborem, bo działa wszędzie.

---

## Jak LaTeX generuje pliki print-ready

LaTeX, w przeciwieństwie do programów graficznych jak InDesign czy Affinity Publisher, nie ma przycisku „Eksportuj jako print-ready PDF". Zamiast tego składasz poprawny plik z pakietów, z których każdy odpowiada za inny aspekt wymagań drukarskich: geometrię strony, spady, znaczniki cięcia, model kolorów, osadzenie fontów i zgodność ze standardem PDF/X.

### Krok 1: Rozmiar strony i spady — `geometry`

Pakiet `geometry` kontroluje wymiary strony i marginesy. Dla pliku z spadami definiujesz dwa rozmiary: **fizyczny rozmiar strony** (z uwzględnieniem spadów) i **docelowy layout** (rozmiar po obcięciu):

```latex
\usepackage[
  paperwidth=182mm,          % B5 (176mm) + 2×3mm spadu
  paperheight=256mm,          % B5 (250mm) + 2×3mm spadu
  layout=b5paper,            % docelowy rozmiar po obcięciu
  layoutoffset={3mm,3mm},    % przesunięcie layoutu (= spad)
  top=2.5cm,
  bottom=2.5cm,
  inner=3cm,                 % margines przy grzbiecie
  outer=2cm
]{geometry}
```

Mechanizm: `paperwidth` i `paperheight` ustawiają MediaBox — pdfLaTeX tworzy stronę o tych wymiarach. `layout=b5paper` mówi, że treść ma się mieścić w formacie B5. `layoutoffset` przesuwa layout o 3 mm w prawo i 3 mm w dół — zostawiając 3 mm spadu po lewej stronie i u góry. Elementy graficzne rozciągnięte do krawędzi `paperwidth/paperheight` pokryją cały spad.

Alternatywna składnia, bardziej czytelna:

```latex
\usepackage[
  b5paper,                   % bazowy rozmiar B5
  includeheadfoot,
  top=2.5cm,
  bottom=2.5cm,
  inner=3cm,
  outer=2cm,
  bleed=3mm                  % geometry ≥5.9: automatyczny spad
]{geometry}
```

Opcja `bleed` jest dostępna od wersji 5.9 pakietu `geometry` (2020) i automatycznie powiększa rozmiar papieru, przesuwając layout.

### Krok 2: Znaczniki cięcia — `crop`

Pakiet `crop` dodaje wizualne znaczniki na stronach PDF-a, wskazujące drukarni linię cięcia:

```latex
\usepackage[
  cam,                       % narożnikowe znaczniki (L-kształtne)
  center,                    % centrowanie strony na arkuszu
  width=192mm,               % szerokość arkusza drukarskiego
  height=266mm               % wysokość arkusza drukarskiego
]{crop}
```

Opcja `cam` rysuje klasyczne narożnikowe znaczniki (_camera marks_). Inne dostępne style to `cross` (krzyżyki), `frame` (ramka wokół strony) i `off` (brak znaczników — przydatne do wersji ekranowej).

Wymiary `width` i `height` definiują rozmiar arkusza, na którym drukowane są znaczniki. Muszą być większe od rozmiaru strony z spadami — różnica to przestrzeń na same znaczniki (typowo 5–10 mm na każdą stronę).

**Uwaga:** pakiety `crop` i `geometry` muszą współpracować. `geometry` ustawia rozmiar logiczny strony (z spadami), a `crop` osadza tę stronę na większym arkuszu ze znacznikami. Kolejność ładowania ma znaczenie — `geometry` powinien być załadowany **przed** `crop`.

```latex
% Kompletna konfiguracja: B5 + 3mm spady + crop marks
\usepackage[
  paperwidth=182mm,
  paperheight=256mm,
  layout=b5paper,
  layoutoffset={3mm,3mm},
  top=2.5cm, bottom=2.5cm,
  inner=3cm, outer=2cm
]{geometry}

\usepackage[
  cam,
  center,
  width=200mm,              % arkusz z marginesem na znaczniki
  height=274mm
]{crop}
```

### Krok 3: Model kolorów — `xcolor`

Pakiet `xcolor` z opcją `cmyk` wymusza model kolorów CMYK w całym dokumencie:

```latex
\usepackage[cmyk]{xcolor}

% Teraz definiowane kolory są automatycznie w CMYK:
\definecolor{naglowek}{cmyk}{0.90, 0.55, 0, 0.35}
\definecolor{ramka}{cmyk}{0, 0, 0, 0.15}

% Czysty czarny (registration black — dla tekstu NIE używać):
% C=100, M=100, Y=100, K=100 — to registration black
% Dla tekstu wystarczy: K=100 (czysty czarny)
```

Opcja `cmyk` wpływa na kolory definiowane w dokumencie — nie konwertuje jednak automatycznie osadzonych grafik rastrowych. Zdjęcia PNG/JPG w RGB pozostaną w RGB. Dlatego grafiki rastrowe trzeba konwertować osobno, przed włączeniem ich do dokumentu.

### Krok 4: Zgodność z PDF/X — `pdfx`

Pakiet `pdfx` to narzędzie do generowania plików zgodnych z PDF/X i PDF/A bezpośrednio z pdfLaTeX-a, XeLaTeX-a lub LuaLaTeX-a:

```latex
% WAŻNE: pdfx powinien być ładowany jako jeden z pierwszych pakietów

\documentclass[12pt, twoside]{book}
\usepackage[x-1a]{pdfx}     % generuj PDF/X-1a:2003
% lub:
% \usepackage[x-4]{pdfx}    % generuj PDF/X-4
```

Pakiet wymaga pliku metadanych `.xmpdata` (XMP — Extensible Metadata Platform) o tej samej nazwie co plik główny. Plik `main.xmpdata` zawiera informacje o dokumencie:

```
\Title{Analiza matematyczna — podręcznik}
\Author{Jan Kowalski}
\Subject{Podręcznik akademicki z analizy matematycznej}
\Keywords{analiza\sep matematyka\sep podręcznik}
\Publisher{Wydawnictwo Akademickie}
```

Pakiet `pdfx` automatycznie:

- Osadza profil ICC (dla PDF/X-1a: CMYK profil `coated_FOGRA39L_argl.icc` dostarczany z pakietem)
- Ustawia Output Intent
- Konfiguruje metadane XMP
- Wyłącza hiperłącza (zabronione w PDF/X)
- Ustawia wersję PDF na odpowiednią dla standardu

### Krok 5: Osadzanie fontów — konfiguracja pdfTeX-a

pdfLaTeX domyślnie osadza fonty — ale domyślna konfiguracja może pomijać 14 „bazowych" fontów PDF (Times, Helvetica, Courier itp.), zakładając, że każda przeglądarka je ma. Drukarnia nie podziela tego założenia.

Żeby wymusić osadzenie **wszystkich** fontów, dodaj do pliku konfiguracyjnego `updmap.cfg`:

```
pdftexDownloadBase14 true
```

Lub w preambule dokumentu:

```latex
\pdfmapfile{=pdftex35.map}
```

Weryfikacja po kompilacji:

```bash
pdffonts main.pdf | grep -v "yes"
```

Jeśli polecenie nie zwróci żadnych linii (poza nagłówkiem) — wszystkie fonty są osadzone.

### Krok 6: Ustawianie TrimBox i BleedBox

Pakiet `pdfx` automatycznie ustawia TrimBox i BleedBox na podstawie rozmiaru strony. Można też ustawić je ręcznie za pomocą prymitywów pdfTeX-a:

```latex
% Ręczne ustawianie boxów (rzadko potrzebne przy pdfx)
\pdfpageattr{
  /TrimBox [8.504 8.504 507.40 717.17]
  /BleedBox [0 0 515.91 725.67]
}
```

Wartości podane w punktach typograficznych. Zwykle nie musisz tego robić ręcznie — pakiety `pdfx` i `zwpagelayout` obliczają boxy automatycznie.

![Konfiguracja LaTeX — współpraca pakietów geometry, crop, xcolor, pdfx](/blog/pdf-gotowy-do-drukarni/03-latex-konfiguracja.jpg)

---

## Kompletna konfiguracja — od preambuly do gotowego pliku

Oto pełna preambula podręcznika akademickiego przygotowanego do druku offsetowego na papierze powlekanym w formacie B5:

```latex
\documentclass[11pt, twoside, openright]{scrbook}

% ── PDF/X (ładujemy jako pierwszy!) ────
\usepackage[x-4]{pdfx}

% ── Rozmiar strony i spady ────────────
\usepackage[
  paperwidth=182mm,
  paperheight=256mm,
  layout=b5paper,
  layoutoffset={3mm, 3mm},
  top=2.5cm,
  bottom=2.5cm,
  inner=3cm,
  outer=2cm,
  bindingoffset=3mm
]{geometry}

% ── Znaczniki cięcia ──────────────────
\usepackage[cam, center, width=200mm, height=274mm]{crop}

% ── Kodowanie i język ─────────────────
\usepackage[utf8]{inputenc}
\usepackage[T1]{fontenc}
\usepackage[polish]{babel}
\usepackage{lmodern}

% ── Kolory w CMYK ─────────────────────
\usepackage[cmyk]{xcolor}

% ── Typografia ─────────────────────────
\usepackage{microtype}
\usepackage{setspace}
\onehalfspacing

% ── Matematyka ─────────────────────────
\usepackage{amsmath, amssymb, amsthm, mathtools}

% ── Grafika i tabele ──────────────────
\usepackage{graphicx}
\graphicspath{{img/}}
\usepackage{booktabs, longtable, tabularx}
\usepackage{subcaption}

% ── Bibliografia ──────────────────────
\usepackage[
  backend=biber,
  style=numeric-comp,
  sorting=nyt,
  maxbibnames=99
]{biblatex}
\addbibresource{bib/bibliografia.bib}

% ── Indeks ────────────────────────────
\usepackage[xindy]{imakeidx}
\makeindex[intoc, options={-L polish -C utf8}]

% ── Wykresy i diagramy ───────────────
\usepackage{pgfplots}
\pgfplotsset{compat=1.18}
\usepackage{tikz}
```

Kompilacja:

```bash
pdflatex main.tex
biber main
makeindex main.idx
pdflatex main.tex
pdflatex main.tex
```

Po kompilacji — weryfikacja:

```bash
# Sprawdź page boxes
pdfinfo -box main.pdf

# Sprawdź osadzenie fontów
pdffonts main.pdf

# Sprawdź wersję PDF i zgodność
pdfinfo main.pdf | grep -E "PDF version|Tagged"
```

---

## Preflight — automatyczna kontrola jakości

Przed wysłaniem pliku do drukarni warto przepuścić go przez preflight — automatyczny audyt zgodności z wymaganiami produkcyjnymi. Preflight sprawdza dziesiątki parametrów jednocześnie: boxy, fonty, rozdzielczość grafik, przestrzenie kolorów, przezroczystości, overprint i wiele innych.

### Narzędzia do preflightu

Profesjonalnym standardem jest **Adobe Acrobat Pro** z modułem Preflight (Print Production → Preflight), który zawiera gotowe profile walidacji dla PDF/X-1a i PDF/X-4. Darmowe alternatywy:

<div class="table-wrapper">

| Narzędzie              | Platforma        | Funkcje                                    |
| ---------------------- | ---------------- | ------------------------------------------ |
| Adobe Acrobat Pro      | Win/Mac          | Pełny preflight, naprawa, konwersja        |
| callas pdfToolbox      | Win/Mac/Linux    | Profesjonalny preflight, automatyzacja     |
| Enfocus PitStop        | Plugin Acrobat   | Edycja i naprawa PDF na poziomie prepressu |
| `pdfinfo` + `pdffonts` | Linux (Poppler)  | Podstawowa weryfikacja boxów i fontów      |
| verapdf                | Java (darmowy)   | Walidacja PDF/A (nie PDF/X)                |
| Ghostscript            | Wieloplatformowy | Konwersja kolorów, weryfikacja             |

</div>

### Checklist przed wysłaniem do drukarni

Zanim wyślesz plik, przejdź przez tę listę kontrolną:

1. **TrimBox** ustawiony na docelowy rozmiar strony
2. **BleedBox** ustawiony na TrimBox + 3 mm (lub wg wymagań drukarni)
3. **Spady** — elementy graficzne sięgające krawędzi rozciągnięte poza TrimBox
4. **Strefa bezpieczeństwa** — tekst minimum 5 mm od krawędzi TrimBoxa
5. **Fonty** — 100% osadzone (podzbiór lub pełne)
6. **Kolory** — CMYK + szarość (dla PDF/X-1a) lub z profilem ICC (PDF/X-4)
7. **Rozdzielczość grafik** — minimum 300 DPI w skali druku
8. **Znaczniki cięcia** — obecne, nie nachodzące na spad
9. **Output Intent** — profil ICC odpowiedni dla procesu druku
10. **Zgodność PDF/X** — plik przechodzi walidację wybranego standardu

![Checklist preflightu — weryfikacja pliku przed wysyłką do drukarni](/blog/pdf-gotowy-do-drukarni/04-preflight-checklist.jpg)

---

## Najczęstsze błędy — i jak ich unikać

Po latach przygotowywania plików do druku widzimy te same problemy wciąż na nowo. Oto ranking najczęstszych przyczyn odrzucenia pliku:

### 1. Brak spadów

Najczęstszy błąd. Projektant tworzy dokument w docelowym rozmiarze (np. A4) i nie dodaje spadów. Nawet jeśli żaden element graficzny nie dotyka krawędzi, drukarnia i tak wymaga spadów — bo BleedBox musi być większy od TrimBoxa, a brak definicji boxów oznacza odrzucenie na preflighcie.

**Rozwiązanie w LaTeX:** użyj `geometry` z `bleed=3mm` lub ręcznym `paperwidth`/`paperheight` powiększonym o 2×3 mm.

### 2. Fonty nie osadzone

Autor używa fontu komercyjnego, którego licencja blokuje embedding. Albo pdfLaTeX pomija fonty bazowe PDF. Plik wyświetla się poprawnie na komputerze autora (bo font jest zainstalowany systemowo), ale drukarnia widzi zamiennik.

**Rozwiązanie:** zawsze weryfikuj osadzenie poleceniem `pdffonts`. W LaTeX-u użyj `\pdfmapfile{=pdftex35.map}` lub sprawdź konfigurację `updmap.cfg`.

### 3. Kolory w RGB

Autor dostarcza zdjęcia w RGB, a plik nie przechodzi preflightu PDF/X-1a. Albo kolory przechodzą automatyczną konwersję na maszynach, dając nieoczekiwane odcienie.

**Rozwiązanie:** `\usepackage[cmyk]{xcolor}` dla kolorów dokumentu. Grafiki rastrowe konwertuj w edytorze graficznym z odpowiednim profilem ICC.

### 4. Za niska rozdzielczość grafik

Autor wkleja zdjęcie z internetu (72 DPI) i skaluje je do pełnej szerokości strony. Na ekranie wygląda akceptowalnie — w druku to pikselowa kaszanka.

**Rozwiązanie:** wymagaj od autorów grafik w minimum 300 DPI przy docelowej wielkości druku. Wykresy i diagramy rób wektorowo (TikZ, pgfplots).

### 5. Bogaty czarny na tekście

Projektant definiuje czarny kolor tekstu jako C=60, M=40, Y=40, K=100 — żeby był „głębszy". Przy drukowaniu tekst jest rozmyty, bo cztery farby muszą idealnie do siebie przylegać, a przy małych znakach to niemożliwe.

**Rozwiązanie:** tekst zawsze w czystym czarnym K=100 (C=0, M=0, Y=0). Bogaty czarny tylko na dużych powierzchniach tła.

### 6. Zbyt cienkie linie

Linia o grubości 0,1 pt (0,035 mm) jest widoczna na ekranie, ale na papierze może zniknąć — farba nie jest w stanie odwzorować tak cienkiej kreski. Minimalna grubość linii dla druku to **0,25 pt** (0,088 mm).

**Rozwiązanie:** w TikZ ustaw minimalną grubość: `\tikzset{every path/.style={line width=0.4pt}}`. W tabelach `booktabs` grubości linii (`\heavyrulewidth`, `\lightrulewidth`) są już dostosowane do druku.

---

## Wersja ekranowa vs wersja drukowa — dwa pliki z jednego źródła

Profesjonalny workflow zakłada generowanie **dwóch wersji** PDF-a z tego samego źródła LaTeX-owego: wersji ekranowej (z hiperłączami, kolorami RGB, bez spadów i znaczników) i wersji drukarskiej (CMYK, spady, crop marks, PDF/X). LaTeX ułatwia to za pomocą kompilacji warunkowej:

```latex
\newif\ifprintversion
\printversiontrue             % ustaw na \printversionfalse
                               % dla wersji ekranowej

\ifprintversion
  \usepackage[x-4]{pdfx}
  \usepackage[cmyk]{xcolor}
  \usepackage[cam,center,width=200mm,height=274mm]{crop}
\else
  \usepackage[
    colorlinks=true,
    linkcolor=blue!60!black,
    citecolor=green!50!black
  ]{hyperref}
  \usepackage{xcolor}
\fi
```

Jeden plik źródłowy, jedna zmiana flagi, dwa kompletnie różne PDF-y. Wersja ekranowa trafia do autora i recenzentów, wersja drukowa do drukarni.

---

## Komunikacja z drukarnią — co ustalić przed rozpoczęciem pracy

Zanim napiszesz pierwszą linijkę konfiguracji, wyślij do drukarni maila z pytaniami. Oto lista, którą wysyłamy przy każdym nowym projekcie:

1. **Format docelowy** — jaki rozmiar gotowej strony? (A4, B5, niestandardowy?)
2. **Wielkość spadów** — 3 mm czy inna wartość?
3. **Standard PDF** — PDF/X-1a, PDF/X-4, czy „wystarczy poprawny PDF"?
4. **Profil ICC** — Coated FOGRA39, PSO Coated v3, czy profil własny drukarni?
5. **Znaczniki cięcia** — czy je dodać, czy drukarnia nakłada swoje?
6. **Kolory** — CMYK obowiązkowy, czy akceptują RGB z profilem?
7. **Rozdzielczość grafik** — 300 DPI wystarczy, czy wymagają 600?
8. **Oprawianie** — klejone, szyte, spirala? (wpływa na margines wewnętrzny)
9. **Korekta kolorów** — czy drukarnia wykonuje proof cyfrowy przed drukiem?

Odpowiedzi na te pytania determinują konfigurację `geometry`, `crop`, `xcolor` i `pdfx`. Ustalenie ich **przed** rozpoczęciem składu oszczędza godziny przeróbek na końcu projektu.

---

## Co dalej?

Przygotowanie PDF-a do druku to ostatni etap pipeline'u wydawniczego — ale kluczowy. Jeśli interesuje Cię cały proces składu podręcznika akademickiego w LaTeX-u, od struktury projektu przez środowiska dydaktyczne po indeksy i bibliografie, przeczytaj nasz [kompletny przewodnik po składzie podręcznika](/blog/sklad-podrecznika-akademickiego/). Różnice między LaTeX-em a Wordem w kontekście profesjonalnego składu omawiamy w artykule [LaTeX vs Word](/blog/latex-vs-word/).

Jeśli masz gotowy manuskrypt i potrzebujesz print-ready PDF-a — od surowego tekstu do pliku akceptowanego przez drukarnię bez poprawek — [napisz do nas](/kontakt/). Przygotowanie dokumentów do druku to nasza codzienność.
