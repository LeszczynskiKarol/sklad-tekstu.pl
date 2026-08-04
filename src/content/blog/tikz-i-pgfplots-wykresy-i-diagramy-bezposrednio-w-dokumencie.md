---
title: "TikZ i pgfplots: wykresy wektorowe prosto w dokumencie"
description: "Jak składać wykresy i diagramy bezpośrednio w LaTeX-u zamiast wklejać obrazki. TikZ pgfplots wykresy dają spójne fonty, ostrość wektorową i dane, które nie rozjeżdżają się z tekstem."
date: 2026-08-04
category: "LaTeX"
tags:
  ["tikz pgfplots wykresy", "latex", "pgfplots", "tikz", "wizualizacja danych", "skład naukowy", "wykresy wektorowe", "dtp"]
---

Recenzent odsyła monografię z jedną uwagą przy rysunku 12: „wykres nieczytelny, opisy osi w innym foncie niż tekst, przy powiększeniu widać piksele". Autor wygenerował go w arkuszu kalkulacyjnym, zapisał jako PNG i wkleił. Font wykresu to domyślny krój arkusza, tekst książki składa się w innym kroju, a rozdzielczość bitmapy była dobra na ekranie i beznadziejna w druku 300 dpi. To najczęstszy powód, dla którego skądinąd porządna praca wygląda na złożoną „po amatorsku" — nie treść wykresu, tylko jego niespójność z resztą strony.

TikZ i pgfplots rozwiązują ten problem u źródła: **wykres nie jest importowanym obrazkiem, tylko fragmentem dokumentu**. Osie, opisy i legenda dziedziczą font i rozmiar z tekstu, całość jest wektorowa (ostra przy każdym powiększeniu), a dane trzymasz w pliku, a nie w zamrożonej bitmapie. Poniżej pokazuję, jak `tikz pgfplots wykresy` działają w praktyce, gdzie się opłacają, a gdzie są przerostem formy nad treścią.

---

## Dlaczego wykres w dokumencie bije wklejony obrazek

Różnica nie jest kosmetyczna. Wklejona grafika rastrowa ma trzy wady, których nie da się naprawić bez powrotu do narzędzia źródłowego:

- **Font.** Bitmapa niesie własny krój, wypalony w piksele. Nie dopasujesz go do tekstu po fakcie. Wykres wektorowy składany w LaTeX-u używa dokładnie tego samego fontu co akapit obok — kwestia doboru kroju do całego dokumentu przestaje dotyczyć „tekstu osobno i rysunków osobno".
- **Rozdzielczość.** PNG czy JPG mają skończoną liczbę pikseli. Powiększysz w druku — zobaczysz schodki. Grafika wektorowa TikZ jest opisana matematycznie, więc renderuje się ostro w każdej skali.
- **Rozjazd danych i podpisu.** Jeśli zmienią się liczby, obrazek trzeba wygenerować od nowa w zewnętrznym programie i podmienić. W pgfplots zmieniasz plik z danymi i rekompilujesz — podpis, numeracja i odwołania w tekście aktualizują się same.

To dokładnie ta filozofia, która sprawia, że LaTeX nadaje się do długich, modularnych prac: treść oddzielona od formy, a spójność wymuszona przez system, nie przez czujność autora. Przegląd metod wizualizacji w komunikacji naukowej (Wójcik, 2017) zwraca uwagę, że w drukowanych artykułach wykresy wciąż zbyt często reprodukuje się w niskiej jakości i w czerni-bieli — wektorowy skład bezpośrednio w dokumencie usuwa przynajmniej problem jakości.

Jeśli dopiero zaczynasz, kolejność jest naturalna: najpierw [uruchom LaTeX-a lokalnie](/blog/konfiguracja-instalacja-latex/) albo w chmurze, przejdź [pierwszy dokument](/blog/latex-jak-zaczac/), a wykresy dołóż, gdy podstawy siedzą.

---

## TikZ i pgfplots — dwa poziomy tej samej maszyny

Warto od razu rozdzielić role, bo nazwy bywają mylone.

**TikZ** (autorstwa Tilla Tantaua, wołany jednym `\usepackage{tikz}`) to niskopoziomowy język rysowania w LaTeX-u. Operujesz współrzędnymi, ścieżkami, węzłami: „narysuj linię od (0,0) do (2,3)", „postaw węzeł z etykietą tutaj". Wszystko dzieje się wewnątrz środowiska `tikzpicture`. TikZ nie wie, czym jest „oś Y" ani „słupek" — zna tylko geometrię.

**pgfplots** to nadbudowa nad TikZ wyspecjalizowana w wykresach 2D i 3D. Tu myślisz już kategoriami danych: „narysuj funkcję", „wczytaj tabelę", „dodaj słupki", „postaw legendę". pgfplots sam liczy zakresy osi, rozstawia znaczniki i skaluje dane. Aktualna wersja manuala to 1.18.2 (Christian Feuersänger, 2025).

Podział praktyczny wygląda tak:

| Zadanie | Narzędzie | Dlaczego |
|---|---|---|
| Wykres funkcji, dane z tabeli, słupki, osie | pgfplots | liczy osie i skalę za ciebie |
| Diagram, schemat, automat, drzewo | TikZ | pełna kontrola nad geometrią |
| Struktura chemiczna | chemfig (na TikZ) | konwencje zapisu cząsteczek |
| Adnotacja *na* wykresie (strzałka, opis) | TikZ w środku pgfplots | oba się mieszają swobodnie |

Ostatni wiersz jest kluczowy: opcje TikZ i pgfplots można mieszać wewnątrz jednego środowiska `axis`. Prefiksy `/tikz/` i `/pgfplots/` są sprawdzane automatycznie, więc po prostu ich nie piszesz — dopisujesz `font=\Large` (opcja TikZ) obok `legend columns=3` (opcja pgfplots) i działa.

---

## pgfplots w praktyce: od funkcji do gotowej osi

![Wektorowy wykres funkcji cosinus z punktami pomiarowymi i pionowymi słupkami błędu, złożony w TikZ-u tym samym krojem co tekst.](/blog/tikz-i-pgfplots-wykresy-i-diagramy-bezposrednio-w-dokumencie/01-ilustracja.webp)

*Wykres funkcji z punktami pomiarowymi i słupkami błędu, złożony realnie w LaTeX-u (TikZ) — osie i opisy dziedziczą krój dokumentu, całość jest wektorowa.*


Najprostszy wykres funkcji to kilka linii. W preambule ustawiasz wersję zgodności i szerokość:

```
\pgfplotsset{width=7cm, compat=1.18}
```

`compat` to nie kosmetyka — to deklaracja, pod którą wersję pgfplots piszesz. Bez niej pakiet zachowuje starsze, zaskakujące domyślne ustawienia. Dopiero od `compat=1.11` domyślnym układem współrzędnych jest `axis cs` (czyli `\draw (1,2) -- (2,2)` odnosi się do danych, nie do centymetrów na stronie). Od `compat=1.12` włącza się backend Lua i estymatory boxplotów. Zasada: **ustaw `compat` na wersję swojego pgfplots i trzymaj się jej**, żeby dokument sprzed roku kompilował się tak samo.

Sam wykres:

```
\begin{tikzpicture}
\begin{axis}
  \addplot {4*cos(deg(x))};
\end{axis}
\end{tikzpicture}
```

`\addplot {wyrażenie}` próbkuje funkcję (domyślną liczbę razy, sterowaną przez `samples`) i rysuje krzywą. Zauważ `deg(x)` — pgfplots liczy trygonometrię w stopniach, więc kąt trzeba przeliczyć. To typowa pułapka pierwszego wykresu.

---

## Dane zewnętrzne, słupki błędu i legenda, która się nie rozjeżdża

Prawdziwa siła zaczyna się przy danych z pliku. pgfplots czyta kolumny tabeli, a `\thisrow{nazwa}` wyciąga wartość konkretnej kolumny — dane trzymasz w jednym miejscu, wykres jest tylko widokiem na nie. To ta sama logika, która stoi za automatyzacją raportów: w tutorialu składania raportów farmakometrycznych (Frank i in., 2021) cały sens polegał na tym, że tabele i wykresy back-tracują do aktualnych danych z analizy, zamiast być ręcznie podmienianymi obrazkami.

Wykres z punktami pomiarowymi i słupkami błędu wygląda tak:

```
\addplot+ [
  only marks,
  samples=15,
  error bars/y dir=both,
  error bars/y fixed=2.5,
] {3*x + 2.5*rand};
```

`error bars/y dir=both` rysuje wąsy w obie strony, `error bars/y fixed=2.5` ustawia ich długość. Dla danych naukowych to standard, którego w arkuszu klika się przez pół okna dialogowego.

Osobno warto znać mechanizm `\label`/`\ref` w legendach. pgfplots pozwala zapamiętać wygląd jednej serii przez `\label{...}` i przywołać ją w tekście przez `\ref{...}` — dostajesz miniaturę tej samej krzywej wprost w zdaniu albo w podpisie rysunku:

> „Obraz pokazuje estymacje \ref{pgfplots:label1}, obarczone szumem. Wygląda na to, że model \ref{pgfplots:label2} dobrze dopasowuje dane."

Legenda przestaje być osobnym prostokątem w rogu, a staje się częścią narracji — czytelnik nie musi skakać wzrokiem między opisem a kolorem. To detal, który odróżnia skład przemyślany od domyślnego. Jeśli budujesz [monografię naukową](/blog/sklad-monografii-naukowej-struktura-bibliografia-indeks/), takie odwołania spinają się z resztą aparatu — numeracją rysunków, spisem ilustracji i [bibliografią w BibLaTeX](/blog/biblatex-i-zarzadzanie-bibliografia-apa-ieee-chicago-i-polskie-normy/) — w jeden spójny system referencji.

---

## Diagramy: automaty, schematy, cząsteczki

pgfplots kończy się tam, gdzie zaczynają się rysunki bez osi. Tu wraca czysty TikZ i jego biblioteki.

**Automaty skończone.** Biblioteka `automata` daje węzły typu `state` i krawędzie z etykietami. Definiujesz stany i przejścia niemal słownie:

```
\node[state, initial] (q0) {$q_0$};
\node[state, right=of q0] (q1) {$q_1$};
\draw (q0) edge node[above]{a} (q1)
      (q1) edge[loop right] node{a} (q1);
```

Opcje `loop`, `bend`, `above/right` sterują tym, gdzie wychodzi strzałka i pętla. Co ważne — TikZ pozwala łączyć te definicje z pętlami `\foreach` i warunkami `\ifthenelse`, więc diagram automatu dla całej rodziny języków generujesz programowo, zamiast rysować każdy stan ręcznie (opisał to Igor Borja w *TUGboat*). Rysunek staje się kodem, który się skaluje.

**Struktury chemiczne.** Pakiet `chemfig`, zbudowany na TikZ, rysuje cząsteczki i mechanizmy reakcji zgodnie z konwencjami chemii. Warsztat na IV EPEMA (Cruz, 2024) pokazywał to jako jeden ekosystem: figury geometryczne i wykresy funkcji w TikZ, wzory strukturalne w chemfig — bez wychodzenia do zewnętrznego edytora graficznego.

**Animacje w PDF.** Niszowo, ale realnie: pakiet `animate` łączy klatki TikZ w animację osadzoną wprost w PDF-ie. Bezerra (2024, 2025) używa go do „dowodów bez słów" twierdzenia Pitagorasa i praw trygonometrycznych. Haczyk: animacja działa tylko w czytnikach, które ją obsługują — Adobe Acrobat Reader, KDE Okular, PDF-XChange czy Foxit; w przeglądarkowym podglądzie zwykle nie ruszy. Do druku bezużyteczne, do materiałów dydaktycznych ciekawe.

---

## Kiedy to się opłaca, a kiedy nie

TikZ i pgfplots nie są odpowiedzią na każdy wykres. Uczciwy bilans:

| Sytuacja | Wektorowy skład w LaTeX-u | Import obrazka |
|---|---|---|
| Kilka wykresów, spójność z tekstem krytyczna | tak | — |
| Dane wciąż się zmieniają | tak (jeden plik danych) | uciążliwe |
| Druk, wysoka jakość, powiększenia | tak (wektor) | ryzyko pikseli |
| Setki wykresów generowanych masowo | raczej skrypt + eksport | często wygodniej |
| Jednorazowy zrzut, byle był | przerost formy | wystarczy |
| Interaktywność, zoom, filtrowanie | nie (statyczny PDF) | narzędzie webowe |

Główna cena to **czas nauki i czas kompilacji**. Składnia pgfplots jest logiczna, ale gęsta; badanie percepcji przyszłych nauczycieli matematyki (Castillo i Sánchez, 2025) wskazało, że najtrudniej oceniano właśnie rozumienie dokumentacji i debugowanie błędów — nie samą ideę. To realna bariera wejścia i nie ma sensu jej ukrywać.

Ciekawostka na horyzoncie: projekt AutomaTikZ (ICLR 2024) trenował modele językowe do generowania kodu TikZ z opisu słownego, na zbiorze DaTikZ liczącym 119 789 przykładów. Kierunek jest jasny — „opisz wykres, dostań kod" — ale na dziś to wsparcie, nie zamiennik zrozumienia, jak działa oś i współrzędne.

---

## Pułapki, które warto znać zawczasu

- **Wolna kompilacja.** Każdy wykres pgfplots liczy się przy każdym przebiegu. Przy dziesiątkach wykresów dokument zwalnia. Rozwiązanie: mechanizm *externalize* — pgfplots kompiluje każdy wykres raz do osobnego PDF-a i przy kolejnych przebiegach wstawia gotowca. Bez tego praca doktorska z 40 wykresami potrafi kompilować się minutami.
- **`compat` to kontrakt.** Kolejne wersje zmieniają domyślne zachowania (obsługę map kolorów, skalowanie danych, słupki). Ustaw `compat` raz i nie ruszaj — inaczej dokument sprzed roku wyrenderuje się inaczej niż wtedy.
- **Zakres danych i skalowanie.** pgfplots wewnętrznie skaluje dane, żeby zmieścić się w arytmetyce zmiennoprzecinkowej TikZ (jednostka FPU, domyślnie włączona). Przy mieszaniu współrzędnych TikZ i pgfplots — np. adnotacji `anchor=origin, at={(0,0)}` — trzeba świadomie ustawić `xmin/xmax/ymin/ymax`, inaczej kotwica zostanie ucięta do najbliższego punktu w zakresie.
- **Trygonometria w stopniach.** `sin(x)` liczy w stopniach; dla radianów opakuj kąt w `deg(...)`. Pierwszy „dziwnie płaski" wykres sinusa to prawie zawsze to.

Gdy wykresy trafiają do druku, obowiązują te same reguły co dla reszty pliku — [przygotowanie PDF-a do drukarni](/blog/pdf-do-drukarni/) (osadzone fonty, właściwa przestrzeń barw) dotyczy wektorowych wykresów tak samo jak tekstu. To akurat zaleta: skoro font wykresu jest tym samym osadzonym krojem co font akapitu, nie ma osobnego źródła problemów z kolorem czy literami.

---

Wektorowy wykres składany wprost w dokumencie to nie efekciarstwo, tylko konsekwencja jednej decyzji: żeby rysunek był częścią tekstu, a nie doklejonym do niego ciałem obcym. Dla jednorazowego zrzutu ekranu to armata na muchę. Ale w pracy, która ma trafić do druku, żyć latami i aktualizować się razem z danymi — spójny font, wektorowa ostrość i wykres opisany kodem zwracają zainwestowany czas z nawiązką. Jeśli wolisz oddać ten fragment specjaliście, składem wykresów i diagramów w [pracach naukowych](/uslugi/prace-naukowe/) zajmujemy się właśnie tą metodą — tak, żeby recenzent nie miał już uwagi do rysunku 12.