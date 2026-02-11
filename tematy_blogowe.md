# Blog sklad-tekstu.pl — Lista tematów artykułów

Tematy dobrane pod kątem:

- SEO (frazy wpisywane przez potencjalnych klientów)
- Edukacja klientów (zrozumienie wartości usługi)
- Budowanie autorytetu eksperta
- Evergreen content (treści aktualne latami)
- Tematy aktualne (accessibility, AI, nowe standardy)

---

## §1 — LaTeX vs inne narzędzia (porównania)

Cel: Klient szuka informacji, porównuje opcje — trafia na Twoją stronę.

            GOTOWE
            1.  **LaTeX vs Word — kiedy edytor tekstu to za mało**
                Algorytm Knutha-Plassa vs łamanie linijka-po-linijce. Wzory, stabilność, automatyzacja. Kiedy Word wystarcza, a kiedy jest barierą.

2.  **LaTeX vs InDesign — dwa światy profesjonalnego DTP**
    Porównanie podejść: programistyczne (LaTeX) vs wizualne (InDesign). Kiedy wybrać co. Dlaczego dla dokumentów technicznych LaTeX wygrywa, a dla magazynów — InDesign.

3.  **LaTeX vs Typst — czy nowy system składu zastąpi LaTeX-a?**
    Typst jako nowoczesna alternatywa. Co robi lepiej, czego mu brakuje. Dlaczego LaTeX wciąż dominuje w wydawnictwach naukowych.

            GOTOWE
            **4. Overleaf vs lokalny LaTeX — gdzie składać dokumenty?**
            Porównanie pracy w chmurze vs na własnym komputerze. Limity Overleaf, zalety wersjonowania Git, kiedy warto mieć eksperta.
            GOTOWE

4.  **Google Docs, Canva, Word — dlaczego „wystarczająco dobre" to za mało dla Twojej publikacji**
    Różnica między formatowaniem tekstu a składem tekstu. Dlaczego narzędzia biurowe nie zastąpią profesjonalnego DTP.

---

## §2 — Typografia i jakość składu (edukacja)

Cel: Budowanie świadomości, dlaczego profesjonalny skład jest wart swojej ceny.

6.  **Algorytm Knutha-Plassa — dlaczego Twój dokument wygląda „jakoś nie tak"**
    Jak LaTeX łamie akapity inaczej niż Word. Rzeki białych plam, nierówne odstępy, złe dzielenie wyrazów — i jak tego uniknąć.

         GOTOWE
         7. **Mikrotypografia — detale, które odróżniają amatorski skład od profesjonalnego**
         Protrusion, expansion, kerning optyczny, ligatory. Pakiet microtype w LaTeX. Dlaczego te „niewidoczne" poprawki zmieniają odbiór całego dokumentu.

7.  **Dzielenie wyrazów w języku polskim — pułapki, których nie widzi Word**
    Reguły dzielenia wyrazów polskich. Problemy z prefiksami, zrostkami, spółgłoskami. Jak LaTeX z pakietem babel/polyglossia radzi sobie z polszczyzną.

8.  **Typografia polska — wdowy, sieroty, bękarty i inne grzechy składu**
    Pojedyncze litery na końcu wiersza (i, a, w, z), wdowy, sieroty, szpalty. Normy typograficzne PN. Jak LaTeX automatycznie eliminuje te błędy.

9.  **Kroje pisma w publikacjach naukowych — jak dobrać font do dokumentu**
    Serif vs sans-serif w tekście głównym. Fonty matematyczne. Kroje optymalizowane do druku vs ekranu. Latin Modern, STIX, Libertinus — przegląd.

10. **Czym różni się skład tekstu od formatowania tekstu?**
    Definicja składu (typesetting) vs formatowanie (formatting). Dlaczego „ładne Wordowe" to jeszcze nie profesjonalny skład. Czego klient może oczekiwać od usługi składu.

---

## §3 — Zastosowania LaTeX-a (branżowe)

Cel: Klient szuka rozwiązania dla konkretnego typu dokumentu — trafia na Twój blog.

        GOTOWE
        12. **Skład podręcznika akademickiego w LaTeX — od manuskryptu do druku**
            Proces tworzenia podręcznika: struktura rozdziałów, indeksy, spisy treści, bibliografie, ilustracje. Dlaczego LaTeX jest standardem wydawnictw naukowych.

        13. **Praca doktorska w LaTeX — jak spełnić wymagania uczelni**
            Wymagania formatowe polskich uczelni. Szablony LaTeX. Automatyczne spisy, bibliografia BibLaTeX, cross-referencje. Dlaczego doktoranci wybierają LaTeX.

14. **Zeszyty ćwiczeń i arkusze egzaminacyjne — automatyzacja z klasą exam.cls**
    Jak LaTeX automatyzuje tworzenie wariantów egzaminów. Numeracja zadań, klucze odpowiedzi, tabele punktacji. Oszczędność czasu nauczycieli i wydawnictw.

15. **Dokumentacja techniczna w LaTeX — instrukcje obsługi, procedury, specyfikacje**
    Cross-referencje, hiperłącza, indeks pojęć, wersjonowanie. Dlaczego firmy technologiczne i produkcyjne wybierają LaTeX do manuali.

16. **Katalogi produktowe i broszury — precyzja LaTeX-a w layoutach wielokolumnowych**
    Pakiety multicol, flowfram, tcolorbox. Jak LaTeX obsługuje layout katalogowy z grafiką, tabelami cen i specyfikacjami technicznymi.

17. **Prezentacje naukowe Beamer — postery konferencyjne i slajdy wykładowe**
    Alternatywa dla PowerPointa w nauce. Wzory w prezentacjach, postery A0, eksport do wektorowego PDF.

18. **E-booki z LaTeX-a — konwersja do EPUB, MOBI i interaktywnego PDF**
    Pandoc, tex4ht, lwarp. Jak z jednego źródła .tex wygenerować książkę drukowaną, PDF ekranowy i e-booka.

---

## §4 — Aspekty techniczne (know-how)

Cel: Treści eksperckie budujące autorytet. Trafiają do osób, które znają LaTeX lub szukają szczegółów.

        GOTOWE
        19. **PDF gotowy do drukarni — CMYK, spady, crop marks i osadzanie fontów**
            Co musi zawierać PDF, żeby drukarnia go przyjęła bez problemów. Profile kolorów, trimbox, bleedbox. Jak LaTeX generuje pliki print-ready.

20. **BibLaTeX i zarządzanie bibliografią — APA, IEEE, Chicago i polskie normy**
    Automatyczne formatowanie bibliografii. Integracja z Mendeley/Zotero. Polskie normy bibliograficzne a standardy międzynarodowe.

21. **TikZ i pgfplots — wykresy i diagramy bezpośrednio w dokumencie**
    Dlaczego wektorowe wykresy generowane w LaTeX-u są lepsze od wklejonych obrazków. Przykłady: wykresy funkcji, diagramy przepływu, schematy.

22. **XeLaTeX vs LuaLaTeX vs pdfLaTeX — który silnik wybrać?**
    Porównanie trzech głównych silników LaTeX-a. Unicode, fonty OpenType, wydajność, kompatybilność z pakietami. Rekomendacje dla różnych typów projektów.

23. **Automatyzacja dokumentów z LaTeX — generowanie raportów z danych**
    LaTeX + Python/R jako pipeline do automatycznego generowania raportów, faktur, certyfikatów. Szablony z dynamiczną zawartością.

24. **Wersjonowanie dokumentów z Git — jak zarządzać wieloautorskimi projektami**
    Pliki .tex jako plain text = idealne do Git. Porównywanie zmian, gałęzie, merge. Dlaczego binarny .docx przegrywa z tekstowym .tex.

---

## §5 — Dostępność i standardy (aktualności)

Cel: Tematy „na czasie" — nowe regulacje, które generują ruch i budują pozycję eksperta.

25. **European Accessibility Act 2025 — co oznacza dla Twoich dokumentów PDF**
    Nowe wymagania UE dotyczące dostępności dokumentów cyfrowych. PDF/UA, WCAG 2.1, tagi w PDF. Kary za niezgodność. Kto musi się dostosować i kiedy.

26. **Tagged PDF z LaTeX-a — jak tworzyć dostępne dokumenty w TeX Live 2025**
    LaTeX Tagging Project. DocumentMetadata, MathML w PDF, kompatybilność z czytnikami ekranowymi. Praktyczny poradnik krok po kroku.

27. **PDF/UA vs PDF/A — czym się różnią i kiedy potrzebujesz którego standardu**
    Archiwizacja (PDF/A) vs dostępność (PDF/UA). Kiedy stosować oba jednocześnie. Wymagania wydawnictw, uczelni i instytucji publicznych.

28. **Jak przygotować dokument spełniający wymagania polskich uczelni**
    Przegląd wymagań formatowych polskich uniwersytetów. Szablony LaTeX dla polskich prac dyplomowych. Typowe błędy i jak ich uniknąć.

---

## §6 — Praktyczne poradniki (how-to)

Cel: Treści poradnikowe odpowiadające na konkretne pytania = ruch z long-tail SEO.

29. **Jak przygotować tekst do profesjonalnego składu — poradnik dla autorów**
    Co dostarczyć składaczowi: format pliku, struktura, ilustracje, bibliografia. Czego unikać, żeby skład poszedł sprawnie i tanio.

30. **Ile kosztuje skład tekstu LaTeX? Jak wyceniamy projekty**
    Czynniki wpływające na cenę: objętość, złożoność (wzory, tabele, indeksy), format docelowy, liczba rewizji. Orientacyjne widełki cenowe.

31. **Jak wygląda współpraca ze składaczem tekstu — krok po kroku**
    Od pierwszego maila, przez makietę, skład, korekty, aż do finalnego PDF. Czego klient może się spodziewać na każdym etapie.

32. **Jak sprawdzić jakość składu — na co zwrócić uwagę w PDF-ie**
    Checklist: dzielenie wyrazów, wdowy/sieroty, konsystencja nagłówków, marginesy, spis treści, hiperłącza. Poradnik dla klienta odbierającego pracę.

33. **Word to LaTeX — jak przenieść dokument bez utraty struktury**
    Narzędzia: Pandoc, Writer2LaTeX, ręczna konwersja. Typowe problemy (style, tabele, obrazki) i jak je rozwiązać.

34. **Markdown to LaTeX — szybki workflow dla autorów technicznych**
    Pisanie w Markdown, kompilacja przez Pandoc do LaTeX/PDF. Idealne dla programistów i autorów dokumentacji.

---

## §7 — Studia przypadków i realizacje

Cel: Social proof — pokazanie konkretnych efektów pracy.

35. **Case study: Podręcznik medyczny — 206 stron, 150 ilustracji, 3 tygodnie**
    Opis projektu od A do Z. Wyzwania, rozwiązania, efekt końcowy. Z linkiem do podglądu PDF.

        35.1.**Case study: zeszyty ćwiczeń dla przyszłych masażystów**
            projekt zeszytu cwiczen dla uczniów szkół policealnych na kierunku technik masażysta. Wklejam wynikowe pliki, strukturę projektu i korespondencję z klientem

36. **Case study: Instrukcja obsługi stołów anatomicznych — wielojęzyczny skład techniczny**
    Projekt dwujęzyczny, specjalistyczna terminologia, cross-referencje, diagramy techniczne.

37. **Case study: Katalog aplikacji VR — kiedy LaTeX spotyka nowoczesny design**
    Łączenie precyzji LaTeX-a z nowoczesnymi layoutami. Grafika pełnoekranowa, typografia minimalistyczna.

---

## §8 — LaTeX i AI (trendy)

Cel: Tematy „gorące" — przyciągają ruch z aktualnych trendów.

38. **AI i LaTeX — czy sztuczna inteligencja zastąpi składacza tekstu?**
    Co AI potrafi (generowanie kodu LaTeX, korekta), czego nie potrafi (typograficzna wrażliwość, layout). Dlaczego AI to narzędzie, nie zamiennik.

39. **ChatGPT/Claude jako asystent LaTeX — jak wykorzystać AI do przyspieszenia składu**
    Praktyczne zastosowania: generowanie tabel, konwersja formatów, pisanie makr, szablony TikZ. Limity i pułapki.

40. **Automatyczne generowanie dokumentów z AI + LaTeX — przyszłość raportów i publikacji**
    Pipeline: dane → AI (treść) → LaTeX (skład) → PDF. Zastosowania: raporty cykliczne, certyfikaty, dokumentacja produktowa.

---

## Podsumowanie — priorytety

### Faza 1 (pierwsze 5 artykułów — fundament):

1. LaTeX vs Word (#1) — najważniejszy traffic driver
2. Czym się różni skład od formatowania (#11) — edukacja klientów
3. Jak przygotować tekst do składu (#29) — poradnik dla klientów
4. Ile kosztuje skład tekstu (#30) — fraza komercyjna
5. Typografia polska — wdowy, sieroty, bękarty (#9) — SEO niche

### Faza 2 (kolejne 5 — rozbudowa):

6. European Accessibility Act (#25) — gorący temat
7. Skład podręcznika akademickiego (#12) — branżowy
8. PDF gotowy do drukarni (#19) — techniczny
9. Algorytm Knutha-Plassa (#6) — ekspertowy
10. Case study: Podręcznik medyczny (#35) — social proof

### Faza 3 i dalej — po 2-3 artykuły miesięcznie z różnych kategorii.
