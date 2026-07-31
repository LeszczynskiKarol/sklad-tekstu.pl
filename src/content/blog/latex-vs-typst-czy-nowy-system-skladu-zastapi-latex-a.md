---
title: "Skład dokumentów: LaTeX vs Typst — kto wygra pojedynek?"
description: "Pojedynek latex vs typst rozgrzewa środowisko składu. Typst kusi prostotą i szybkością, LaTeX broni 40 lat dojrzałości i jakości druku. Sprawdzamy, kiedy który system faktycznie się opłaca."
date: 2026-07-31
category: "LaTeX"
tags:
  ["latex vs typst", "typst", "latex", "skład tekstu", "typesetting", "publikacje naukowe", "narzędzia dtp"]
---

Student otwiera szablon pracy dyplomowej na Overleaf. Edytuje jedno zdanie na dwunastej stronie, klika *kompiluj* i odruchowo przełącza kartę w przeglądarce — bo wie, że przez najbliższe dwie, trzy minuty nic się nie wydarzy. Po tygodniu takiej pracy złapał już błąd przekroczenia limitu pamięci, przez pół dnia odpluskwiał konflikt pakietów bibliograficznych i zaczął kwestionować wszystkie decyzje, które doprowadziły go na te studia. To autentyczny scenariusz opisany przez inżyniera piszącego dyplom w 2026 roku — i to właśnie on napędza dyskusję **latex vs typst**, która od trzech lat nie schodzi z forów technicznych.

Typst to napisany w Ruście system składu, który reklamuje się jako „nowy fundament dla dokumentów". Pytanie brzmi: czy młodszy pretendent naprawdę wyprze sprawdzonego weterana z warsztatu składacza — czy raczej zajmie własną niszę obok niego? W tym pojedynku LaTeX pozostaje **naszą** metodą profesjonalnego składu, ale warto uczciwie zważyć argumenty obu stron.

---

## Skąd w ogóle wziął się Typst

LaTeX ma za sobą blisko 40 lat rozwoju. To nie jest zaleta marketingowa, tylko realna dojrzałość: microtype, biblatex, TikZ, LuaTeX, warstwa L3 — cała infrastruktura, którą osadza się w składzie książek, monografii i prac naukowych. Cena tej dojrzałości to jednak złożoność. Programowanie w makrach TeX-a bywa udręką, kompilacja potrafi trwać minutami, a początkujący gubi się w tysiącach pakietów, z których część wzajemnie się wyklucza.

Typst powstał jako odpowiedź na te bolączki — projekt zaczęty od zera, bez zobowiązania do wstecznej kompatybilności. Repozytorium ma dziś ponad 55 tysięcy gwiazdek na GitHubie i ponad 400 współtwórców, a społeczność w ekosystemie Typst Universe udostępnia ponad 1450 pakietów i szablonów. To nie jest już eksperyment akademika — to system, którego używają członkowie ponad 3500 uczelni i ponad tysiąca firm.

Zanim jednak przejdziemy do argumentów, warto pamiętać, o czym tak naprawdę mówimy. Wybór narzędzia to środek, a nie cel — celem jest gotowa, poprawnie złożona publikacja. Jeśli nie masz jasności, czym różni się [skład od zwykłego formatowania](/blog/sklad-a-formatowanie/), różnica między LaTeX-em a Typst-em będzie drugorzędna.

---

## Szybkość i wygoda pracy — tu Typst błyszczy

Największa przewaga Typst-a jest wymierna i odczuwalna od pierwszej minuty. To jeden samodzielny plik wykonywalny (kilkanaście–kilkadziesiąt MB), bez łańcucha zależności i bez gigabajtowej instalacji TeX Live. Kompilator jest inkrementalny — przelicza tylko to, co się zmieniło.

W praktyce liczby wyglądają tak:

| Kryterium                    | LaTeX / Overleaf        | Typst                     |
|------------------------------|-------------------------|---------------------------|
| Czas kompilacji dokumentu    | 2–4 min (duży szablon)  | 200–400 ms                |
| Rozmiar instalacji           | ~3 GB (TeX Live)        | ~15–40 MB (jeden plik)    |
| Komunikaty o błędach         | kryptyczne              | jasne, ze wskazówką       |
| Praca offline                | pełna                   | pełna                     |
| Dojrzałość ekosystemu        | CTAN (ogromny)          | Universe (rośnie szybko)  |

Najlepiej skalę różnicy pokazuje przypadek brokera Zerodha: 2000-stronicowe zestawienie transakcji kompiluje się w Typst-cie w około minutę, podczas gdy w lualatex-u zajmowało to 18 minut. Firma generuje dzięki temu 1,5 miliona PDF-ów na noc przy 6% dotychczasowego kosztu. Podobnie SciPy Proceedings po przejściu na Typst w 2024 roku raportuje generowanie PDF-ów 5–10× szybsze niż w LaTeX-u, przy rzadszych i łatwiejszych do zdiagnozowania awariach.

Druga rzecz to komunikaty błędów. Klasyczne `! Undefined control sequence` potrafi wskazać wygenerowany plik pomocniczy, którego nigdy nie tknąłeś. Typst wskazuje dokładną linię, nazywa problem i podpowiada poprawkę (`did you mean 'title'?`). Dla kogoś, kto dopiero [zaczyna z LaTeX-em](/blog/latex-jak-zaczac/), to różnica między godziną frustracji a dziesięcioma sekundami.

Wreszcie składnia. Zapis matematyki bywa wskazywany jako sztandarowa zaleta — zamiast `\frac{3}{2} \in \mathbb{Q}` piszemy po prostu `3/2 in QQ`. Nagłówki jak w Markdownie (`= Rozdział`), wbudowany, spójny język skryptowy z regułami `set` i `show`, funkcje bez efektów ubocznych — to wszystko obniża próg wejścia.

---

## Gdzie Typst wciąż przegrywa z LaTeX-em

Uroda składni nie decyduje o tym, czy plik nadaje się do druku i archiwizacji. A tu młodość Typst-a wychodzi na jaw.

**Duże dokumenty.** Sam model „wszystko ma zasięg lokalny" jest elegancki, ale idiomatyczny podział długiej publikacji na front/main/backmatter opiera się na owijaniu treści w funkcje lub reguły `show` — użytkownicy skarżą się, że dla setek stron bywa to nieintuicyjne, a niektóre podstawy (numeracja stron typu „1 / 9" per rozdział, bibliografia osobno dla każdego rozdziału) wymagają obejść lub pakietów firm trzecich.

**Rozmiar PDF i CJK.** Dokumenty z fontami CJK potrafią puchnąć drastycznie — użytkownicy raportowali proporcje rzędu 1:44 (53 KiB w LuaLaTeX kontra 2,3 MiB w Typst) przy tej samej treści, a dołożenie japońskiej linijki potrafiło wydłużyć kompilację o kilka sekund. LaTeX przez dwie dekady optymalizowano pod kątem drobnego, gęstego kodu PDF — Typst dopiero to nadrabia.

**Dostępność i formaty archiwalne.** Jeszcze niedawno był to poważny zarzut: Typst 0.11 nie eksportował do PDF/A (naprawione w 0.12), a strukturę potrzebną do tagowanego, dostępnego PDF-a kompilator początkowo gubił. Dopiero Typst 0.14 dodał dostępność i wsparcie PDF/UA-1 „z pudełka". LaTeX ma dane semantyczne od 30 lat — co, uczciwie mówiąc, wcale nie czyni produkcji dostępnego PDF-a trywialną w żadnym z systemów.

**Grafika wektorowa.** TikZ nie ma jeszcze pełnego odpowiednika — CeTZ i Fletcher są obiecujące, ale mniej dojrzałe. Drobny, ale bolesny szczegół: Typst nie osadza plików PDF, trzeba je najpierw zamienić na SVG.

---

## Sprawa, która przesądza: publikacja i ekosystem

Dla profesjonalnego składu najważniejsze pytanie nie brzmi „co przyjemniej się pisze", tylko „co redakcja, drukarnia i wydawca faktycznie przyjmą". I tu LaTeX ma miażdżącą przewagę wynikającą z inercji.

arXiv wymaga źródeł w TeX-u. Większość czasopism nie akceptuje nawet manuskryptów wymagających LuaTeX-a zamiast pdfTeX-a — o Typst-cie nie ma więc na razie mowy. Publikowanie akademickie porusza się wolno; realistycznie mówimy o latach po osiągnięciu przez Typst pełnej stabilności. Konwersja Typst → LaTeX przez Pandoc czy MiTeX istnieje, ale jest stratna i wymaga ręcznych poprawek — dokładnie w momencie cyklu życia pracy, gdy autor widział już każdy wzór pięćset razy i przestał cokolwiek zauważać.

Pojawiają się wyłomy: SciPy Proceedings składają się od 2024 roku w Typst-cie, część uczelni ma społecznościowe szablony. Ale największy zarzut projektowi bywa fundamentalny — brak kompatybilności z LaTeX-em. Co zrobić z archiwami tysięcy istniejących dokumentów? Wieloletni użytkownik nie porzuci własnych pakietów i klas dla samej szybkości kompilacji.

Dla porównania obu światów w kontekście, w którym najczęściej się o tym decyduje, warto zajrzeć do naszego zestawienia [LaTeX vs Word](/blog/latex-vs-word/) oraz [LaTeX vs InDesign](/blog/latex-vs-indesign-dwa-swiaty-profesjonalnego-dtp/) — bo realny wybór narzędzia rzadko jest dwustronny. W tym samym nurcie warto rozważyć [Quarto](/blog/quarto-co-to/), które łączy Markdown z LaTeX-em i wieloma formatami wyjściowymi.

---

## Kiedy który system wybrać — praktycznie

Zamiast ogłaszać zwycięzcę, warto dopasować narzędzie do zadania.

| Sytuacja                                          | Rekomendacja           |
|--------------------------------------------------|------------------------|
| Praca dyplomowa bez wymogu szablonu LaTeX        | Warto rozważyć Typst   |
| Uczelnia narzuca szablon `.cls` / czasopismo TeX | LaTeX (bez dyskusji)   |
| Setki dokumentów generowanych automatycznie      | Typst (szybkość)       |
| Monografia, książka, złożona bibliografia        | LaTeX (dojrzałość)     |
| Praca w toku, już zaawansowana w LaTeX-u         | Dokończ w LaTeX-u      |
| Nauka składu od zera, prywatne notatki           | Typst (niższy próg)    |

Jeśli zaczynasz nowy dyplom i nie krępuje Cię szablon — spróbuj najpierw Typst-a; szybsza pętla informacji zwrotnej realnie zmienia komfort pisania. Jeśli instytucja wymaga konkretnej klasy LaTeX albo składasz [pracę doktorską](/blog/sklad-pracy-doktorskiej-wymagania-proces-i-typowe-bledy/) czy [monografię naukową](/blog/sklad-monografii-naukowej-struktura-bibliografia-indeks/) z rozbudowaną bibliografią i indeksem — LaTeX pozostaje bezpieczniejszym wyborem. A jeśli chcesz mieć środowisko LaTeX pod kontrolą lokalnie, mamy osobny przewodnik po [instalacji i konfiguracji](/blog/konfiguracja-instalacja-latex/).

---

## Co z tego wynika dla jakości składu

![Fragment strony pracy naukowej złożonej w LaTeX-u z inicjałem, wyjustowanym akapitem, wzorem na demerity łamania Knutha–Plassa i tabelą booktabs.](/blog/latex-vs-typst-czy-nowy-system-skladu-zastapi-latex-a/01-ilustracja.webp)

*Tak wygląda strona realnie złożona w LaTeX-u — wyjustowany „drukarski" akapit, wzór i tabela dzielą ten sam algorytm łamania, o którym mówi artykuł.*


Warto zachować dystans do samego pojedynku narzędzi. Oba systemy dzielą to, co w składzie najważniejsze: algorytm łamania akapitu w stylu Knutha–Plassa, który daje równomierny, „drukarski" tekst — coś, czego ani Word, ani HTML z JavaScriptem nie osiągają. Różnice dotyczą wygody autora, szybkości i dojrzałości ekosystemu, a nie fundamentu typograficznego.

Praktyka pokazuje jednak coś jeszcze: żaden z tych systemów nie sprawdzi za Ciebie, czy tekst jest naprawdę dobrze złożony. Automatyczna walidacja wychwyci błąd składni, ale nie wychwyci wdowy na końcu rozdziału, źle dobranego kroju ani rozjechanego światła. To wciąż zostaje po stronie człowieka i doświadczonego oka — niezależnie od tego, czy pod spodem pracuje 40-letni weteran, czy pretendent z Rusta.

Dlatego przy poważnej publikacji — książce, podręczniku, pracy naukowej — samo narzędzie to dopiero początek. Jeśli zależy Ci na efekcie na poziomie wydawnictwa, a nie tylko na skompilowanym PDF-ie, warto oddać skład w ręce kogoś, kto pracuje z LaTeX-em na co dzień; przy [pracach naukowych](/uslugi/prace-naukowe/) to zwykle różnica między „gotowym plikiem" a „gotowym do druku".

Odpowiedź na pytanie z tytułu jest więc mniej efektowna, niż chciałyby fora: Typst prawdopodobnie nie zastąpi LaTeX-a w najbliższych latach, ale zmusił go do ruchu — i już dziś jest realnym wyborem tam, gdzie liczy się szybkość i niski próg wejścia. Weteran i pretendent będą przez jakiś czas pracować obok siebie, a wygrywa na tym ten, kto potrzebuje złożonego tekstu.