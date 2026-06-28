---
title: "Jak sprawdzić jakość składu — checklista odbioru PDF"
description: "Odbierasz gotowy PDF od składacza i nie wiesz, na co patrzeć? Pokazujemy, jak sprawdzić jakość składu krok po kroku — od sierot i bękartów po spady, CMYK i osadzone fonty."
date: 2026-06-28
category: "Poradniki"
tags:
  ["jak sprawdzić jakość składu", "skład tekstu", "kontrola pdf", "przygotowanie do druku", "typografia", "korekta składu", "pdf do drukarni"]
---

Dostajesz mejla: „W załączniku finalny PDF, proszę o akcept do druku”. Otwierasz plik, przewijasz kilka stron na ekranie telefonu, wszystko wygląda ładnie — odpisujesz „OK, drukujemy”. Trzy tygodnie później kurier przywozi paletę z 500 egzemplarzami, w których na stronie 47 logo jest ucięte, czcionka w przypisach „rozjechała się” na inną, a tło okładki ma na krawędzi cienki biały pasek. Reklamacji nie ma — zaakceptowałeś plik.

To najczęstszy scenariusz, w którym klient płaci za cudzy błąd, bo nie wiedział, **jak sprawdzić jakość składu** przed wysłaniem pliku na maszynę. Akceptacja PDF to nie formalność — to moment, w którym przejmujesz odpowiedzialność za to, co wyjdzie z drukarni. Ten artykuł to lista kontrolna, którą możesz przejść samodzielnie, nawet bez wiedzy poligraficznej. Nie zastąpi ona profesjonalnego [składu i łamania tekstu](/blog/co-to-jest-sklad-tekstu/), ale pozwoli wyłapać te błędy, które kosztują najwięcej.

---

## Najpierw zrozum, co właściwie odbierasz

Skład to nie to samo co napisanie tekstu ani jego korekta. Tekst może być bezbłędny językowo, a złożony fatalnie — i odwrotnie. Jeśli nie masz pewności, gdzie kończy się jedno, a zaczyna drugie, warto wiedzieć, że [korekta, redakcja i skład to trzy różne etapy](/blog/korekta-redakcja-i-sklad-czym-sie-roznia-i-w-jakiej-kolejnosci/), wykonywane w określonej kolejności. Odbierając PDF, oceniasz **wyłącznie skład** — czyli to, jak tekst i grafika zostały rozmieszczone na stronie i przygotowane do reprodukcji.

Dobry plik do druku ma dwie warstwy jakości, które sprawdza się osobno:

- **warstwę typograficzną** — to, co widać gołym okiem: łamanie, odstępy, spójność, hierarchia;
- **warstwę techniczną** — to, czego *nie* widać na ekranie, a co decyduje o tym, czy plik w ogóle nadaje się na maszynę: spady, przestrzeń barwna, rozdzielczość, osadzenie fontów.

Klienci niemal zawsze sprawdzają tylko pierwszą. Drukarze — niemal zawsze tylko drugą (i to nie zawsze). Ty musisz przejść obie, bo jesteś jedyną osobą, której zależy na całości.

---

## Warstwa pierwsza: typografia, czyli to, co widać

![Porównanie tego samego akapitu przed korektą składu (z zaznaczonymi na czerwono sierotami, prostymi cudzysłowami i podwójną spacją) i po niej.](/blog/jak-sprawdzic-jakosc-skladu-lista-kontrolna-dla-klienta-odbierajacego/01-ilustracja.webp)

*Te same dwa zdania złożone w LaTeX-u: po lewej realnie widoczne grzechy łamania (sieroty, proste cudzysłowy, podwójna spacja), po prawej ten sam tekst po korekcie składu.*


Tutaj nie potrzebujesz żadnego programu — wystarczą oczy i trochę cierpliwości. Najlepiej **wydrukuj plik na zwykłej domowej drukarce** (choćby w czerni) albo przeglądaj go na dużym ekranie w skali 100%, strona po stronie. Błędy składu są praktycznie niewidoczne, gdy przewijasz dokument na telefonie.

### Sieroty, wdowy, bękarty i szewcy

To klasyczne „grzechy łamania”, które natychmiast zdradzają, czy tekstem zajmował się profesjonalista, czy ktoś wyeksportował go z Worda. Nazewnictwo bywa myląco stosowane, więc trzymajmy się ustalonych definicji:

| Błąd | Co to jest | Dlaczego to problem |
|------|-----------|---------------------|
| **Sierota** | Pojedyncza litera (najczęściej spójnik „i”, „w”, „a”, „z”, „o”) zostawiona na końcu wiersza | Wisi samotnie, łamie rytm czytania; w polskim składzie traktowana jako błąd |
| **Wdowa** | Bardzo krótki, jednowyrazowy wiersz na końcu akapitu | Zostawia „dziurę” i psuje równowagę kolumny |
| **Bękart** | Ostatni wiersz akapitu, który „uciekł” na początek nowej strony/łamu | Czytelnik gubi kontekst akapitu |
| **Szewc** | Pierwszy wiersz akapitu zostawiony na samym dole strony | Zaczyna myśl, której ciąg dalszy jest dopiero na kolejnej stronie |

W profesjonalnym składzie sierot po prostu **nie ma** — usuwa się je twardą spacją albo regułami GREP, automatycznie przenoszącymi wiszące spójniki do następnego wiersza. Jeśli na losowo otwartych stronach widzisz samotne „i” czy „w” na końcach wersów, to pierwszy sygnał, że plik nie przeszedł przez ręce składacza. Więcej o tej rodzinie błędów znajdziesz we wpisie o [wdowach, sierotach i bękartach](/blog/typografia-polska-wdowy-sieroty-i-bekarty-grzechy-skladu-i-jak-ich/).

### Znaki, które łatwo przeoczyć

- **Cudzysłowy.** W polskim tekście dolny otwierający i górny zamykający: „takie”. Proste cudzysłowy maszynowe (`"takie"`) to błąd.
- **Myślniki.** Półpauza (–) do wtrąceń i zakresów, a nie dywiz/łącznik (-). Częsty błąd to myślnik tam, gdzie powinna być półpauza.
- **Spacje.** Żadnych podwójnych spacji, żadnego wyrównywania tekstu spacjami zamiast tabulatorów.
- **Dzielenie wyrazów.** Sprawdź, czy na końcach wierszy nie ma absurdalnych podziałów ani trzech-czterech dywizów pod sobą.

### Spójność i hierarchia

Przejrzyj cały dokument pod kątem **konsekwencji**. Czy wszystkie nagłówki tego samego poziomu wyglądają tak samo? Czy odstępy przed i po nagłówkach są równe? Czy numeracja stron jest ciągła i w tym samym miejscu? Czy podpisy pod ilustracjami mają jeden format? Niespójność to najczęstszy objaw składu „na kolanie”. Dobrze złożony dokument jest przewidywalny — oko czytelnika nigdy nie jest zaskakiwane.

Jeśli odbierasz [książkę składaną krok po kroku](/blog/sklad-ksiazki-krok-po-kroku-od-manuskryptu-do-gotowego-pliku-do-druku/), zwróć dodatkowo uwagę na żywą paginę (nagłówki z tytułem rozdziału), spis treści zgodny z numeracją stron oraz to, czy rozdziały zaczynają się konsekwentnie — np. zawsze na stronie nieparzystej.

---

## Warstwa druga: technika, czyli to, czego nie widać

Tu zaczyna się część, której nie wychwycisz wzrokiem — a która najczęściej kładzie nakład. Do większości tych sprawdzeń wystarczy **darmowy Adobe Acrobat Reader** (lub jego płatna wersja Pro do głębszej kontroli). To samo dotyczy [pliku PDF gotowego do drukarni](/blog/pdf-do-drukarni/), o którym piszemy osobno i szczegółowo.

### Spady (bleed)

Gilotyna w drukarni tnie stosy papieru z tolerancją ok. 0,5–1 mm. Jeśli grafika lub tło dochodzą równo do krawędzi formatu, przy najmniejszym przesunięciu noża na wydruku pojawi się biały pasek. Dlatego elementy „na zero” muszą wychodzić poza format docelowy — to właśnie **spad**, standardowo **2 lub 3 mm z każdej strony**.

Jak to sprawdzić: wizytówka netto 90×50 mm ze spadem 2 mm powinna mieć w pliku format 94×54 mm, a tło ma sięgać do samej zewnętrznej krawędzi. Jeśli widzisz, że zdjęcie kończy się dokładnie na linii cięcia — to błąd.

### Przestrzeń barwna: CMYK, nie RGB

Monitor świeci (RGB), papier odbija światło (CMYK), a przestrzeń CMYK jest węższa. Plik przygotowany w RGB i wysłany do druku przechodzi automatyczną konwersję, która „gasi” najbardziej nasycone kolory — szczególnie jaskrawe zielenie, pomarańcze i błękity. Efekt: na ekranie neon, na papierze przygaszona, brudnawa barwa.

Profesjonalnie złożony plik do druku offsetowego jest **w CMYK**. W Acrobacie Pro sprawdzisz to przez podgląd wyjścia (Output Preview). Jeśli odbierasz materiał do publikacji ekranowej, reguły są inne — [ebook w EPUB, MOBI i PDF](/blog/sklad-e-booka-epub-mobi-i-pdf-roznice-proces-i-pulapki/) rządzi się własnymi prawami i tam RGB jest poprawne.

### Rozdzielczość: 300 DPI dla małego formatu

Grafika pobrana z internetu ma zwykle 72 DPI — na ekranie wygląda dobrze, w druku zamienia się w „pikselozę”. Standard dla druku małego formatu (książki, ulotki, wizytówki) to **300 DPI w skali 1:1**. Dla wielkiego formatu (banery oglądane z dystansu) wystarcza często 150 DPI lub mniej.

Szybki test bez narzędzi: powiększ PDF na ekranie do 300–400%. Tekst wektorowy pozostaje idealnie ostry przy każdym powiększeniu; zdjęcia powinny być wyraźne, bez widocznych kwadratów pikseli i poszarpanych krawędzi.

### Osadzone fonty

To błąd, który najczęściej rujnuje skład „po cichu”. Jeśli fonty nie są **osadzone (embedded)** w pliku, komputer w drukarni podstawi pod nie domyślny krój (zwykle Arial) — i cały układ tekstu się rozjedzie, litery zmienią kształt, łamanie przestanie się zgadzać.

Jak sprawdzić w Acrobacie: `Plik → Właściwości → Czcionki`. Przy każdym foncie powinno widnieć „(Osadzony)” lub „(Osadzony podzbiór)”. Alternatywą stosowaną w grafikach i logach jest **zamiana tekstu na krzywe** (outlines) — wtedy litery stają się kształtami wektorowymi i nie zależą od żadnego fontu. W składzie wielostronicowym preferuje się jednak osadzanie, by tekst pozostał wyszukiwalny.

| Co sprawdzasz | Gdzie / jak | Co jest poprawne |
|---------------|-------------|------------------|
| Spady | Wizualnie na krawędziach | Tło wychodzi 2–3 mm poza format |
| Przestrzeń barwna | Acrobat Pro → Output Preview | CMYK dla druku offsetowego |
| Rozdzielczość | Zoom 300–400% | Zdjęcia ostre, bez pikseli |
| Fonty | Właściwości → Czcionki | „Osadzony” przy każdym kroju |
| Format/wymiar | Właściwości → Opis | Zgodny z zamówieniem + spad |

---

## Pułapki, o których klienci nie wiedzą

Kilka błędów technicznych jest na tyle podstępnych, że warto wymienić je osobno — przechodzą przez wzrokową kontrolę bez śladu.

**Biały tekst z włączonym nadrukiem (overprint).** Funkcja overprint sprawia, że obiekt nie „wycina” tła pod sobą, tylko się na nie nakłada. Przy białym tekście oznacza to katastrofę: biel z nadrukiem staje się **przezroczysta** i napis po prostu znika w druku, choć na ekranie jest doskonale widoczny. To klasyczna pułapka, którą wyłapuje dopiero podgląd nadruku (Overprint Preview) w Acrobacie Pro.

**Czerń tekstu vs czerń tła.** Drobny tekst powinien być w czystej czerni (C:0 M:0 Y:0 K:100). Gdyby był złożony z wszystkich czterech farb, najmniejsze przesunięcie maszyny rozmaże litery i staną się nieostre. Odwrotnie z dużymi czarnymi plamami — czyste 100% K w druku wygląda jak ciemny grafit, a „smolistą” czerń daje dopiero tzw. głęboka czerń (rich black), np. C:40 M:40 Y:40 K:100. Jeśli na okładce czarne tło wygląda blado-szaro, zapytaj składacza o czerń.

**Pliki z Worda, Canvy i PowerPointa.** To źródła podwyższonego ryzyka. Word nie obsługuje CMYK ani spadów. Canva domyślnie generuje PDF w RGB pod ekrany — do druku trzeba wybrać opcję „Druk PDF” ze znacznikami przycięcia i spadem, a profil CMYK jest dostępny dopiero w wersji płatnej. Jeśli dostajesz „gotowy do druku” plik z tych narzędzi, traktuj go z większą podejrzliwością.

---

## Co jeszcze sprawdzić zależnie od typu publikacji

Lista kontrolna ma stałą część i część zależną od tego, co odbierasz.

- **Książka, monografia, podręcznik.** Sprawdź stronę tytułową, stopkę redakcyjną i numer ISBN — [co dokładnie musi zawierać wydana książka](/blog/isbn-stopka-redakcyjna-i-strona-tytulowa-co-musi-zawierac-wydana/), opisaliśmy osobno. Zweryfikuj spis treści, numerację stron, ewentualny indeks i bibliografię. W [monografii naukowej](/blog/sklad-monografii-naukowej-struktura-bibliografia-indeks/) szczególnie ważna jest spójność przypisów i odsyłaczy.
- **Praca dyplomowa.** Zgodność z wymaganiami uczelni: marginesy (często szerszy wewnętrzny na oprawę), interlinia, format przypisów. Tu granica między składem a formatowaniem bywa płynna — warto wiedzieć, [kiedy potrzebny jest skład, a kiedy wystarczy formatowanie](/blog/sklad-pracy-magisterskiej-i-licencjackiej-kiedy-sklad-a-kiedy/).
- **Katalog, broszura, materiał reklamowy.** Najważniejsze są kolory (zgodność z identyfikacją wizualną marki), jakość zdjęć produktowych i spady przy grafikach pełnostronicowych.

W każdym z tych przypadków pomocne jest porównanie pliku z briefem, który sam dostarczyłeś — czy wszystkie wymagania zostały spełnione. Jeśli sam przygotowujesz materiały wejściowe, zajrzyj wcześniej do poradnika, [jak przygotować tekst do składu](/blog/jak-przygotowac-tekst-do-skladu/) — czysty materiał na wejściu to mniej błędów na wyjściu.

---

## Twoja minimalna lista kontrolna do druku

Jeśli masz zapamiętać tylko jedno, niech to będzie ta sekwencja pytań, którą przechodzisz przed każdym „akceptuję do druku”:

1. **Typografia** — czy nie ma sierot na końcach wierszy, podwójnych spacji, prostych cudzysłowów i niespójnych nagłówków?
2. **Spady** — czy tła i grafiki wychodzą 2–3 mm poza format docelowy?
3. **Kolory** — czy plik jest w CMYK (dla druku), a głębokie czernie nie wyglądają blado?
4. **Rozdzielczość** — czy po powiększeniu do 300% zdjęcia są ostre?
5. **Fonty** — czy we Właściwościach pliku każdy krój jest osadzony?
6. **Zgodność z zamówieniem** — czy format, liczba stron i wymagania z briefu się zgadzają?

Przejście tych sześciu punktów zajmuje kilkanaście minut, a ratuje cały nakład. Warto przy tym pamiętać o granicy odpowiedzialności: **samodzielna kontrola wyłapuje błędy techniczne i ewidentne potknięcia typograficzne, ale nie zastąpi oceny merytorycznej ani profesjonalnego oka**. Drukarnia sprawdza, czy plik wejdzie na maszynę — nie czy treść jest poprawna. Składacz odpowiada za układ — nie za to, czy w tekście nie ma błędu rzeczowego.

Dlatego najlepszą polisą nie jest checklista odbioru, lecz powierzenie składu komuś, kto te wszystkie reguły ma w nawykach, zanim w ogóle wyśle Ci PDF. Wtedy lista kontrolna z tego artykułu zmienia się z narzędzia ratunkowego w zwykłe potwierdzenie tego, co i tak zostało zrobione dobrze — a Ty akceptujesz plik z poczuciem, że wiesz, co właśnie zatwierdzasz.