---
title: "Kroje pisma w publikacjach naukowych — jak dobrać font"
description: "Serif czy bezszeryfowy? Co naprawdę mówią badania czytelności i wymogi wydawnictw. Praktyczny przewodnik, jak dobrać kroje pisma do publikacji naukowej — od tekstu głównego po rysunki i PDF."
date: 2026-07-10
category: "Typografia"
tags:
  ["kroje pisma publikacje naukowe", "typografia", "font naukowy", "serif vs sans serif", "skład tekstu", "czytelność", "publikacje naukowe"]
---

# Kroje pisma w publikacjach naukowych — jak dobrać font

Recenzent zwraca artykuł z adnotacją, że „układ wygląda nieprofesjonalnie”. Autor sprawdza — treść bez zarzutu, przypisy na miejscu, bibliografia zgodna ze stylem. Problem okazuje się banalny: praca złożona jest krojem, który w danym środowisku po prostu „nie brzmi” jak publikacja naukowa. W innym przypadku redakcja odsyła rysunek, bo podpisy osi ustawiono szeryfowym Times zamiast czystej Helvetiki. To nie są wymysły — dobór **kroju pisma w publikacjach naukowych** rządzi się własnymi regułami, które łączą trzy porządki: badania nad czytelnością, wymogi konkretnego wydawnictwa oraz technikę składu i eksportu do PDF. Poniżej rozkładam te trzy porządki na czynniki pierwsze i pokazuję, jak podjąć decyzję świadomie, a nie z przyzwyczajenia.

---

## Serif kontra bezszeryfowy — co naprawdę mówią badania

Najpopularniejszy spór — szeryfowy (antykwa, np. Times New Roman) czy bezszeryfowy (grotesk, np. Arial, Calibri) — jest w praktyce znacznie mniej rozstrzygający, niż sugeruje branżowa mitologia. Klasyczne przekonanie, powtarzane w podręcznikach typografii, mówi że szeryfy „prowadzą oko wzdłuż wiersza” i zwiększają czytelność. Współczesne badania tego nie potwierdzają.

Fundamentalna praca Ariesa Arditiego i Jianny Cho (*Vision Research*, 2005) rozstrzyga sprawę czyściej niż wcześniejsze eksperymenty, bo autorzy zaprojektowali własne kroje różniące się **wyłącznie** obecnością i rozmiarem szeryfów — a nie, jak w typowych badaniach porównujących Times z Arialem, dziesiątkami innych cech naraz. Wynik: przy pomiarze prędkości czytania (zarówno metodą RSVP, jak i ciągłego czytania) szeryfy **nie dały żadnej różnicy**. Minimalny wzrost czytelności przy najmniejszych rozmiarach dało się przypisać nie samym szeryfom, lecz temu, że ich dodanie nieznacznie zwiększa odstępy między literami. To odstęp — a nie ozdobnik na końcu kreski — okazał się czynnikiem decydującym (efekt tzw. crowdingu był w danych wielokrotnie silniejszy niż efekt szeryfu).

Nowsze prace potwierdzają ten obraz. Zespół Vecino i in. (*PeerJ Computer Science*, 2022) porównał serif i sans w obrębie **tej samej rodziny** (Roboto vs Roboto Serif) na 246 uczestnikach — brak wpływu na prędkość czytania i brak istotnej różnicy w preferencjach (jedynie płeć okazała się predyktorem: kobiety częściej wybierały wersję szeryfową). Przegląd 18 badań na ponad 1500 osobach z wadami wzroku wskazał z kolei, że dla czytelników słabowidzących **lepiej sprawdzają się kroje bezszeryfowe** (Arial, Helvetica). Podobnie dla osób z dysleksją — badanie Rello i Baezy-Yatesa wskazało bezszeryfowe i „romańskie” kroje jako poprawiające czytanie, przy czym to, co pomaga dyslektykom, pomaga też pozostałym czytelnikom.

Wniosek jest praktyczny, nie ideologiczny: **na poziomie tekstu głównego wybór serif/sans nie jest kwestią „lepiej/gorzej”**, lecz kwestią kontekstu, konwencji i grupy odbiorców. Dlatego warto przestać traktować go jak decyzję inżynierską, a zacząć jak decyzję redakcyjną.

---

## Co naprawdę decyduje o czytelności

Skoro nie szeryfy, to co? Bruno Maag, projektant kroju BBC Reith i współtwórca The Readability Group, sprowadza to do kilku konkretów, które warto traktować jak checklistę przy doborze fontu do publikacji:

| Cecha kroju | Dlaczego istotna w publikacji naukowej |
|---|---|
| Wystarczający odstęp międzyliterowy | To on, a nie szeryf, realnie poprawia rozpoznawalność liter — litery nie mogą się „zlewać” |
| Umiarkowany kontrast kreski | Unikać krojów o dużej różnicy grubości (Bodoni, ale też — zaskakująco — Times New Roman ma wysoki kontrast); lekki kontrast jest optymalny |
| Otwarte kształty liter | Małe „c” nie może być mylone z „o”; ma to znaczenie przy skrótach i symbolach |
| Rozróżnialne znaki | Wielkie „I”, małe „l” i cyfra „1” muszą być odróżnialne; „p” i „q” nie powinny być lustrzanym odbiciem |
| Kontrast tekstu z tłem | Jasnoszary na białym jest niedostępny — w pracach naukowych obowiązuje czerń |
| Rozmiar o punkt większy, niż się wydaje | Prosty zabieg poprawiający dostępność dla słabszego wzroku |

W kontekście naukowym dochodzi jeszcze jeden, często pomijany wymóg: krój musi mieć **kompletny repertuar znaków** — litery z diakrytykami (polskie ogonki i kreski), kursywę wyraźnie kontrastującą z odmianą prostą (do nazw gatunków, tytułów, oznaczeń zmiennych), a przy tekstach ścisłych — dobrze współgrający zestaw matematyczny. To dlatego w składzie ścisłym Palatino zestawia się z fontem matematycznym Euler, a Computer Modern jest domyślnym wyborem w LaTeX-u: gwarantuje spójność tekstu i wzorów. Te detale to domena mikrotypografii — pisałem o niej szerzej w tekście o [detalach profesjonalnego składu](/blog/mikrotypografia-detale-ktore-odrozniaja-amatorski-sklad-od/).

---

## Kontekst rządzi: tekst główny to nie to samo co rysunek

Największy błąd w doborze kroju to traktowanie całego dokumentu jako jednej powierzchni. Publikacja naukowa ma kilka warstw i każda ma inne wymagania.

**Tekst główny (długi ciąg).** Tu panuje konwencja antykwy. Przez pięć stuleci większość książek składano krojami szeryfowymi i to one kojarzą się z autorytetem — w badaniach postrzegania (Shaikh, Chaparro, Fox) kroje szeryfowe odbierane były jako „formalne, dojrzałe, praktyczne, stabilne”. Gdy grupie dwunastolatków pokazano tekst w Times New Roman, skojarzyli go z „encyklopediami i słownikami”. Dla ciągłego czytania serif jest bezpiecznym, konwencjonalnym wyborem — nie dlatego, że mierzalnie czyta się go szybciej, lecz dlatego, że **spełnia oczekiwania odbiorcy** co do tego, jak wygląda rzetelny tekst.

**Rysunki, wykresy, schematy.** Tu konwencja jest odwrotna. Redaktorka naczelna *Chemistry of Materials* Jillian Buriak w redakcyjnym „Which Font Looks Best in a Figure?” formułuje to bez ogródek: „Arial albo Helvetica, zawsze”. Kroje bezszeryfowe dają czystszy obraz w gęstej grafice, na osiach, w opisach struktur chemicznych — szeryfowy Times w takim otoczeniu bywa odbierany jako irytujący i zaśmiecający. To praktyczna zasada: **tekst ciągły — antykwa; etykiety i grafika — grotesk.**

**Ekran kontra druk.** Na dzisiejszych ekranach o wysokiej rozdzielczości dawna przewaga bezszeryfowych krojów zniknęła — teza, że szeryfy „rozmywają się” na monitorze, dotyczyła epoki niskiej rozdzielczości. Dziś to raczej kwestia hintingu i wygładzania (aliasingu) niż samej obecności szeryfów. Jeżeli publikacja ma żyć głównie jako PDF czytany na ekranie i drukowany, warto krój sprawdzić w obu trybach — zagadnienie to omawiam też przy okazji [przygotowania PDF-a do drukarni](/blog/pdf-do-drukarni/), gdzie osadzanie i renderowanie fontu jest krytyczne.

---

## Ton też się liczy — krój niesie znaczenie

Czytelność to nie wszystko. Krój pisma nadaje tekstowi ton, i w publikacji naukowej ma to konsekwencje. Eksperyment Errola Morrisa przeprowadzony z „The New York Times” pokazał, że ten sam tekst wzbudzał **większe zaufanie**, gdy złożono go krojem szeryfowym (Baskerville) niż bezszeryfowym; Comic Sans wypadł najgorzej. Badanie Juniego i Gross (2008) wykazało, że artykuł w Times New Roman odbierano jako bardziej satyryczny — „śmieszniejszy i bardziej zjadliwy” — niż ten sam tekst w Arialu. Type foundry Monotype wspólnie z firmą Neurons wykazało, że sam wybór kroju potrafi podnieść pozytywny odbiór treści nawet o 13%.

Dla autora naukowego płynie z tego ostrzeżenie: to nie jest neutralna decyzja estetyczna. Krój, który w danym środowisku sygnalizuje „powaga i rzetelność”, buduje wiarygodność zanim czytelnik przeczyta pierwsze zdanie. To dlatego niepokojąca zmiana kroju w znanym czasopiśmie natychmiast wywołuje wrażenie, że „coś jest nie tak” — spójność wizualna jest częścią komunikatu.

Ciekawostka pokazująca, że sprawa jest realna także instytucjonalnie: amerykański Departament Stanu wycofał Times New Roman na rzecz bezszeryfowego Calibri, uzasadniając to czytelnością i dostępnością; brytyjskie Home Office i Sąd Najwyższy zrobiły podobny ruch rok wcześniej. Symbolika była wyraźna — zmiana z antykwy na grotesk to zmiana tonu z „tradycyjnego” na „nowoczesny”.

---

## Czego wymagają wydawnictwa i uczelnie

W praktyce autora najczęściej wyręcza szablon. Gdy wydawnictwo lub uczelnia narzuca krój — dyskusja się kończy, stosujemy wskazany font i tyle. Kluczowe jest, by nie improwizować tam, gdzie obowiązuje wzorzec. Oto reprezentatywny przegląd wymagań:

| Instytucja / wydawca | Wymóg krojowy | Rozmiar tekstu głównego |
|---|---|---|
| AAS (czasopisma astronomiczne) | Szablon: Courier New; dozwolone też Times New Roman lub bezszeryfowy Calibri | 10–12 pt |
| Elsevier | Własny krój wydawniczy (Gulliver) — narzucony przez skład redakcji | wg szablonu |
| IEEE | Times New Roman, układ dwuszpaltowy | wg szablonu |
| MLA (styl) | „Łatwo czytelny krój, np. Times New Roman”, kursywa wyraźnie odróżnialna | 12 pt |
| Rackham (Univ. of Michigan) | Times / Times New Roman (serif) albo Arial (sans), czerń, **fonty osadzone** | 12 pt |
| WSU (dysertacje) | Jedna profesjonalna rodzina; sugestie: Baskerville, Georgia, Calibri, Merriweather, Century, Palatino, Computer Modern, Times New Roman | 10–12 pt |

Dwie zasady wynikają z tej tabeli. Po pierwsze — **jeśli istnieje szablon, jest on nadrzędny** wobec wszystkich preferencji, także wobec wytycznych stylu dyscypliny. Po drugie — tam, gdzie krój jest „wolny” (część dysertacji, preprinty bez szablonu), instytucje i tak zawężają wybór do kilku sprawdzonych, konserwatywnych rodzin. W środowisku LaTeX-owym działa dodatkowo silna norma: domyślny Computer Modern jest tak zakorzeniony, że odejście od niego bywa odbierane jako „nieprofesjonalne”. Więcej o wymaganiach formalnych prac dyplomowych i naukowych piszę przy [składzie pracy doktorskiej](/blog/sklad-pracy-doktorskiej-wymagania-proces-i-typowe-bledy/) oraz [monografii naukowej](/blog/sklad-monografii-naukowej-struktura-bibliografia-indeks/).

---

## Osadzanie fontów i spójność — techniczne minimum

Nawet najlepiej dobrany krój zniweczy publikację, jeśli nie zostanie **osadzony w PDF**. Wymóg embedowania fontów pojawia się w wytycznych praktycznie każdego repozytorium (Rackham stawia go wprost) i drukarni — bez tego dokument u odbiorcy renderuje się zastępczym krojem, psując skład, łamanie i pozycje znaków specjalnych. To pierwsza rzecz do sprawdzenia przed wysłaniem.

Druga zasada to spójność. Jedna rodzina w tekście głównym, konsekwentnie ta sama odmiana dla nagłówków tego samego poziomu, ten sam krój dla numerów stron. Symbole i zmienne w tekście muszą być składane tym samym fontem matematycznym co we wzorach — mieszanie („epsilon” w jednym miejscu z jednego kroju, w drugim z innego) to typowy błąd amatorskiego składu. Rozmiary też są regulowane: tekst główny zwykle 10–12 pt, przypisy, podpisy rysunków i tabel mogą być mniejsze, ale nie poniżej 9 pt.

To właśnie warstwa, w której LaTeX pokazuje przewagę nad edytorem tekstu: konsekwentnie zarządza rodziną krojów, wersalikami w nagłówkach, spacjowaniem i osadzaniem — automatycznie, bez ręcznego pilnowania każdej strony. Różnice między podejściem „ręcznym” a systemowym rozbieram w tekście [LaTeX vs Word](/blog/latex-vs-word/).

---

## Praktyczny dobór — od czego zacząć

Jeśli masz wolną rękę, poniższa krótka mapa upraszcza decyzję. Kroje pisma a publikacje naukowe to zawsze kompromis między konwencją dyscypliny, czytelnością i dostępnością:

| Sytuacja | Rekomendacja |
|---|---|
| Tekst główny, humanistyka/druk | Antykwa o umiarkowanym kontraście: Palatino, EB Garamond, Century Schoolbook, Georgia, Merriweather |
| Tekst ścisły z matematyką | Computer Modern (LaTeX) lub Palatino + Euler — spójny zestaw tekst/wzory |
| Publikacja głównie ekranowa | Kroje projektowane pod ekran: Georgia (serif), Verdana/Calibri (sans) |
| Rysunki, wykresy, opisy osi | Zawsze grotesk: Arial lub Helvetica |
| Odbiorca słabowidzący / dostępność | Bezszeryfowy, otwarte kształty, hojne spacjowanie, rozmiar o punkt większy |
| Narzucony szablon wydawcy/uczelni | Stosuj dokładnie to, co w szablonie — bez wyjątków |

Reguła nadrzędna brzmi: **najpierw sprawdź, czy masz wolny wybór.** W większości przypadków wydawnictwo, czasopismo albo regulamin uczelni już zdecydowały za Ciebie, a rolą autora jest tego nie psuć. Tam, gdzie wybór faktycznie należy do Ciebie, kieruj się nie modą na serif czy sans, lecz trzema pytaniami: co czyta mój odbiorca (ekran czy druk, wzrok sprawny czy słabszy), jakiej konwencji oczekuje moja dyscyplina i czy krój ma komplet znaków, których potrzebuję — z polskimi diakrytykami i wyraźną kursywą włącznie.

Krój pisma jest w publikacji naukowej narzędziem niewidocznym z założenia — ma zniknąć, żeby czytelnik widział treść, nie literę. Paradoks polega na tym, że najlepiej znika wtedy, gdy dobrano go z rozmysłem: dopasowany do nośnika, zgodny z konwencją, technicznie osadzony i spójny na każdej stronie. Wtedy nikt go nie zauważy — a o to właśnie w składzie tekstu chodzi. Jeśli publikacja jest ważna, a decyzje krojowe wykraczają poza gotowy szablon, warto oddać ten etap w ręce kogoś, kto robi to na co dzień — od tego są [usługi składu prac naukowych](/uslugi/prace-naukowe/).