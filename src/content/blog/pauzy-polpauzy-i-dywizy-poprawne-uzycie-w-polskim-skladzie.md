---
title: "Pauza, półpauza i dywiz — poprawne użycie w składzie"
description: "Pauza, półpauza, dywiz — trzy poziome kreski, które w polskim składzie znaczą co innego. Wyjaśniamy, kiedy której użyć, jak stawiać wokół nich spacje i gdzie tekst najczęściej się sypie."
date: 2026-07-13
category: "Typografia"
tags:
  ["pauza półpauza dywiz", "myślnik", "półpauza", "dywiz", "interpunkcja", "typografia", "skład tekstu", "korekta"]
---

Autor przysyła gotowy manuskrypt do składu. Otwieramy plik i już w pierwszym akapicie widać to samo, co w dziewięciu tekstach na dziesięć: wszystkie poziome kreski są takie same. „Konferencja odbędzie się w dniach 12-14 maja”, „Kraków-Warszawa w dwie godziny”, „To był – jak sądzę - dobry pomysł”. Jeden krótki znak z klawiatury, wciśnięty odruchowo, obsługuje trzy zupełnie różne funkcje. Dla oka czytelnika to drobiazg. Dla tekstu, który ma trafić do druku albo do porządnej publikacji online — usterka, którą trzeba wyłapać w każdym zdaniu.

Pauza, półpauza, dywiz to trzy odrębne znaki o różnej długości i różnym przeznaczeniu. Mylenie ich nie jest błędem „kosmetycznym” — bywa błędem interpunkcyjnym, ortograficznym albo edytorskim, w zależności od tego, którą kreskę i gdzie postawiono. Ten tekst porządkuje całość: co jest czym, kiedy której używać i jak nie zwariować przy przedziałach liczbowych, które są największym polem do pomyłek.

---

## Trzy kreski, trzy długości, trzy funkcje

![Porównanie trzech poziomych kresek — pauzy, półpauzy i dywizu — narysowanych w tej samej skali względem firetu, z przykładami błędnego i poprawnego użycia.](/blog/pauzy-polpauzy-i-dywizy-poprawne-uzycie-w-polskim-skladzie/01-ilustracja.webp)

*Trzy kreski w skali firetu wraz z przykładami „źle → dobrze" — fragment złożony realnie w LaTeX-u.*


Zacznijmy od tego, że znaki różnicujemy przede wszystkim po długości. Punktem odniesienia jest **firet** — kwadratowa jednostka justunku o szerokości równej stopniowi pisma, tradycyjnie kojarzona z szerokością wielkiej litery „M”. Pauza ma długość mniej więcej firetu, półpauza — około jego połowy, dywiz jest jeszcze krótszy. Wszystkie trzy mają w danym kroju identyczną grubość; różni je wyłącznie rozciągłość i położenie względem linii pisma.

| Znak | Nazwy | Długość | Funkcja | Kod (Windows) | Unicode |
|---|---|---|---|---|---|
| — | pauza, myślnik, em dash | ~1 firet („M”) | znak interpunkcyjny (wtrącenia, dialog) | Alt+0151 | U+2014 |
| – | półpauza, en dash | ~½ firetu („n”) | myślnik i separator zakresów | Alt+0150 | U+2013 |
| - | dywiz, łącznik | najkrótszy | znak ortograficzny (łączy wyrazy) | klawisz przy „0” | U+002D |

Kluczowe rozróżnienie jest funkcjonalne, nie długościowe. **Pauza i półpauza to graficzne postacie myślnika — znaku interpunkcyjnego, który stoi między wyrazami.** **Dywiz to znak ortograficzny, który działa wewnątrz wyrazu i łączy jego człony.** Innymi słowy: myślnik rozdziela, dywiz spaja. Jeśli zapamiętasz tylko to jedno zdanie, unikniesz większości pomyłek.

Warto dodać kontekst historyczny, bo tłumaczy dzisiejszy bałagan. Półpauza jest w polskiej typografii nowością — do połowy lat 70. XX wieku w ogóle jej nie stosowano. Przywędrowała do nas z typografii anglosaskiej razem z cyfrowym składem tekstu, w którym była zadomowiona od dawna. Stąd dwutorowość: tradycja mówi „pauza”, praktyka coraz częściej stawia półpauzę.

---

## Dywiz (łącznik) — znak, który łączy

Dywiz jest najprostszy, bo ma jasno opisane, „ortograficzne” zastosowania i nigdy nie otacza się go spacjami. Używamy go m.in. w:

- **złożeniach równorzędnych**: `biało-czerwony`, profil `biologiczno-chemiczny`, `murarz-tynkarz`;
- **dwuczłonowych nazwach własnych**: `Bielsko-Biała`, `Kędzierzyn-Koźle`, `Polanica-Zdrój`;
- **nazwiskach dwuczłonowych**: `Skłodowska-Curie`, `Nowak-Jeziorański`, `Korwin-Mikke`;
- **połączeniach liczby z wyrazem**: `20-letni`, `XIX-wieczny`, `10-osobowy`;
- **odmianie skrótowców**: `ZUS-u`, `NIP-u`, `PiS-owi`;
- **członach `niby-` i `quasi-`** oraz przedrostkach z nazwą własną: `quasi-nauka`, `pseudo-Polak`;
- **dzieleniu wyrazów** na końcu wiersza (o tym niżej).

Ponieważ dywiz jest znakiem wewnątrzwyrazowym, jego reguły opisano w słownikach ortograficznych w części o pisowni, a nie o interpunkcji. Niewłaściwe użycie łącznika to formalnie błąd ortograficzny — inny kaliber niż potknięcie stylistyczne.

Jest jeden przypadek, w którym przy dywizie pojawia się spacja: gdy zawiesza on urwany człon, jak w `dwu-, trzy- lub czteroosobowy`. Kreska symbolizuje tu pominięty fragment złożenia, więc spacja po niej jest konieczna. To wyjątek, nie reguła.

Osobna, pożyteczna sprawa dla składu to **dywiz nierozdzielający** (U+2011). Wygląda identycznie jak zwykły łącznik, ale nie pozwala złamać wyrazu w tym miejscu — dzięki temu `S-800` czy `IP-6` nie rozjadą się na dwa wiersze. To jeden z tych detali, o których automat sam nie pomyśli, a które odróżniają staranny [skład od amatorskiego formatowania](/blog/mikrotypografia-detale-ktore-odrozniaja-amatorski-sklad-od/).

---

## Myślnik: pauza czy półpauza?

Tu zaczyna się terytorium interpunkcji. Myślnik to znak, który wprowadza pauzę w wypowiedzi, wydziela wtrącenie, sygnalizuje elipsę (opuszczone słowo) albo otwiera kwestię dialogową. Graficznie może przybrać postać pauzy lub półpauzy — i to jest wybór konwencji, nie poprawności.

Typowe zastosowania myślnika:

- **wtrącenia** ujęte w dwie kreski: „Ten projekt — choć początkowo budził wątpliwości — okazał się trafny”;
- **dopowiedzenia i puenty**: „Miał tylko jedno hobby — czcionki”;
- **elipsa**, czyli pominięcie powtarzającego się orzeczenia: „Autor wybrał Minion, redaktor — Times”;
- **definicje**, gdzie myślnik zastępuje „to” lub „jest”: „Firet — kwadratowa jednostka justunku”;
- **dialogi**: każda wypowiedź zaczyna się od myślnika w nowym wierszu.

Która postać? Tradycja dziełowa i beletrystyka trzymają się pełnej pauzy, szczególnie w dialogach. Teksty użytkowe, prasowe i większość publikacji internetowych coraz częściej sięgają po półpauzę — jest optycznie lżejsza i nie rozpycha wąskiego łamu. Powód jest praktyczny: przy wąskiej kolumnie pełna pauza wygląda ciężko, a w powieści, gdzie co druga linia zaczyna się myślnikiem dialogowym, robi się z tego gąszcz czarnych kresek. Doświadczeni składacze często idą w stronę propozycji sformułowanej jeszcze w latach 90. w środowisku GUST: w składzie tekstowym stosować półpauzę w funkcji myślnika, a pełną pauzę zostawić na dialogi i wyliczenia.

Reguła nadrzędna brzmi jednak inaczej i jest bezwzględna: **w obrębie jednej publikacji stosuj jeden wybrany wariant konsekwentnie.** Mieszanie pauzy i półpauzy w tej samej roli to najczęstszy zarzut, jaki pada podczas [kontroli jakości gotowego PDF-a](/blog/jak-sprawdzic-jakosc-skladu-lista-kontrolna-dla-klienta-odbierajacego/).

Jeszcze jeden detal, o którym łatwo zapomnieć: myślnik nie powinien rozpoczynać wiersza w tekście ciągłym — zwłaszcza w beletrystyce, gdzie zostałby odczytany jako kreska dialogowa. Zostawiamy go na końcu poprzedniej linii.

---

## Spacje wokół kresek — żelazna reguła

Ta jedna zasada rozwiązuje połowę wątpliwości:

- **Dywiz** — nigdy nie otaczamy spacjami (`biało-czerwony`, `Bielsko-Biała`). Wyjątek: zawieszony człon (`dwu- i trzytomowy`).
- **Myślnik** (pauza lub półpauza w jego funkcji) — otaczamy spacjami z obu stron, bo stoi między osobnymi wyrazami.
- **Półpauza w przedziale liczbowym** — bez spacji (`1914–1918`).

Innymi słowy: kreska między osobnymi wyrazami dostaje spacje, kreska będąca częścią złożenia — nie. W profesjonalnym składzie spacje wokół myślnika w tekście są zwykle węższe niż zwykły odstęp międzywyrazowy (rzędu ćwierci firetu), a w dialogu po myślniku stawia się **odstęp o stałej szerokości**, który przy justowaniu nie rozciąga się razem z resztą wiersza. To niuans, którego edytor tekstu sam nie zapewni, a który decyduje o równości „rynny” przy lewym marginesie dialogu.

---

## Przedziały liczbowe — największe pole do błędów

Tu ląduje większość realnych pomyłek, bo reguły są rozproszone, a źródła bywają rozbieżne. Uporządkujmy to.

Zgodnie z zasadami pisowni myślnik występuje między liczbami oznaczającymi wartość przybliżoną („przybyło 30 — 35 tysięcy widzów”) oraz zastępuje określenie „od — do” („w latach 1756 — 1763”). Ale słowniki ortograficzne dodają istotny wyjątek dla druku: **liczby arabskie oznaczające przedział „od–do” rozdziela się półpauzą bez spacji**, np. `1914–1918`, `s. 10–15`, `13:00–15:00`. Ten sam zapis stosuje się dziś także w tekstach elektronicznych.

| Zapis | Poprawność | Uwaga |
|---|---|---|
| `1914–1918` | tak | półpauza bez spacji — standard w druku |
| `1914 – 1918` | dopuszczalne | myślnik ze spacjami; lepszy przy długich zapisach |
| `1914-1918` | raczej nie | dywiz w tej funkcji uchodzi za niestaranny |
| `w latach od 1914–1918` | błąd | „od” i kreska znaczą to samo — podwojenie |

Dywiz w przedziałach nie jest jednoznacznie zakazany — poradnie językowe bywają w tej sprawie niekonsekwentne — ale w profesjonalnym składzie się go unika. Przy dłuższych zapisach, jak `08.2008 – 12.2009`, myślnik ze spacjami czyta się optycznie lepiej niż zbita półpauza. I pamiętaj o jednolitym formacie po obu stronach kreski: `1.11.2002 – 1.11.2003`, nie `1.11.2002 – 2003`, bo drugi zapis jest po prostu niejednoznaczny.

Osobny przypadek to **relacje i zestawienia**, gdzie kreska zastępuje „a”, „kontra” albo „między”: `mecz Polska–Anglia`, `trasa Wrocław–Poznań`, `pakt Ribbentrop–Mołotow`. Tu półpauza ma dodatkową zaletę — odróżnia relację od złożenia z dywizem. Porównaj: `pociąg relacji Warszawa–Bielsko-Biała`. Gdyby wszystkie kreski były łącznikami, nie dałoby się odczytać, gdzie kończy się nazwa `Bielsko-Biała`, a gdzie zaczyna relacja. Półpauza rozwiązuje ten węzeł jednym znakiem.

---

## Jak to robi profesjonalny skład

W dobrze prowadzonym warsykacie te znaki nie są wstawiane ręcznie znak po znaku — obsługuje je system składu. Nasza metoda opiera się na LaTeX-u, w którym kresek nie wpisuje się bezpośrednio: pojedynczy `-` daje dywiz, `--` kompiluje się na półpauzę, a `---` na pełną pauzę. Dzięki temu w źródle widać intencję („to jest przedział”, „to jest myślnik”), a wygląd znaku jest zawsze spójny w całym dokumencie. Ta sama logika, którą [porządkuje edytor akademicki, a której brakuje w zwykłym procesorze tekstu](/blog/latex-vs-word/), pilnuje, żeby raz przyjęta konwencja obowiązywała od pierwszej do ostatniej strony.

Jest przy tym pułapka, o której trzeba wiedzieć: system składu **nie dodaje sam spacji ani nie zna kontekstu językowego**. To znaczy, że o polskie odstępy wokół myślnika, o stały odstęp w dialogu i o zamianę dywizu na półpauzę w przedziałach nadal dba człowiek albo świadomie napisane reguły. Automat zdejmuje z barków powtarzalność, ale nie zwalnia z decyzji.

Rozróżnianie kresek zazębia się zresztą z innymi detalami mikrotypografii — z [poprawnym dzieleniem wyrazów](/blog/dzielenie-wyrazow-w-jezyku-polskim-pulapki-ktorych-nie-widzi-word/), przy którym dywiz przenoszenia miesza się z dywizem złożenia, oraz z [walką o wdowy, sieroty i bękarty](/blog/typografia-polska-wdowy-sieroty-i-bekarty-grzechy-skladu-i-jak-ich/). To wszystko jeden pakiet: rzeczy niewidoczne, dopóki są zrobione dobrze.

---

## Szybka checklista redakcyjna

Zanim tekst pójdzie dalej, warto przejechać go pod kątem samych kresek:

| Kontekst | Prawidłowy znak | Spacje |
|---|---|---|
| Złożenie, nazwa dwuczłonowa, nazwisko | dywiz `-` | bez spacji |
| Liczba + wyraz (`XIX-wieczny`) | dywiz `-` | bez spacji |
| Wtrącenie, dopowiedzenie, elipsa | myślnik (pół)pauza | ze spacjami |
| Dialog | pauza (lub półpauza) | odstęp po znaku |
| Przedział liczbowy (`1914–1918`) | półpauza | bez spacji |
| Relacja (`Polska–Anglia`) | półpauza | zwykle bez spacji |

Do tego dwa pytania kontrolne: czy w całym dokumencie myślnik ma jedną, konsekwentną postać? I czy nigdzie zwykły dywiz z klawiatury nie udaje myślnika? Jeśli obie odpowiedzi brzmią „tak”, tekst jest pod tym względem czysty.

---

Rozróżnienie trzech kresek wygląda na drobiazg dla purystów, ale w praktyce działa dokładnie odwrotnie niż większość detali typografii: nie zauważa się go, gdy jest zrobione dobrze, za to natychmiast rzuca się w oczy, gdy jest zrobione źle. Czytelnik nie powie „tu jest dywiz zamiast półpauzy” — poczuje tylko, że tekst jest niechlujny, choć nie będzie umiał wskazać dlaczego. I na tym polega cała rzecz. Pauza, półpauza i dywiz to nie egzamin z interpunkcji, lecz jeden z tych sygnałów, po których widać, że nad publikacją ktoś naprawdę usiadł — czy to nad [książką](/uslugi/ksiazki/), czy nad pracą, która ma wyglądać poważnie.