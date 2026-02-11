---
title: "Overleaf vs lokalny LaTeX — gdzie składać dokumenty w 2025 roku"
description: "Szczegółowe porównanie Overleaf i lokalnej instalacji LaTeX (TeX Live + VS Code). Limity kompilacji, prywatność danych, koszty, wydajność i workflow — praktyczny przewodnik dla autorów, naukowców i wydawców."
date: 2025-02-11
category: "Narzędzia"
tags:
  [
    "overleaf",
    "tex live",
    "vs code",
    "latex workshop",
    "workflow",
    "porównanie",
    "narzędzia",
  ]
---

Jeśli pracujesz z LaTeX-em, w pewnym momencie stajesz przed pytaniem: **Overleaf czy instalacja lokalna?** Odpowiedź nie jest oczywista — zależy od wielkości dokumentów, sposobu współpracy, wymagań dotyczących prywatności i budżetu. W tym artykule rozkładamy oba podejścia na czynniki pierwsze, żebyś mógł wybrać świadomie.

---

## Overleaf — czym jest i jak działa

Overleaf to przeglądarkowy edytor LaTeX, który powstał z połączenia dwóch wcześniejszych projektów — WriteLaTeX i ShareLaTeX — w 2017 roku. Działa w modelu SaaS (_Software as a Service_): logujesz się, tworzysz projekt, piszesz kod `.tex` w edytorze webowym, a kompilacja odbywa się na serwerach Overleaf za pomocą dystrybucji TeX Live.

Dla wielu użytkowników — zwłaszcza studentów i początkujących — Overleaf jest pierwszym kontaktem z LaTeX-em. I słusznie: eliminuje największą barierę wejścia, czyli **instalację i konfigurację środowiska**. Nie musisz wiedzieć, czym jest `latexmk`, jak dodać TeX Live do zmiennej `PATH` ani dlaczego `biber` nie widzi pliku `.bib`. Overleaf ukrywa tę złożoność za przyciskiem „Recompile".

### Co Overleaf robi dobrze

Platforma ma kilka autentycznie silnych stron, które trudno odtworzyć w środowisku lokalnym:

- **Współpraca w czasie rzeczywistym** — wielu autorów może jednocześnie edytować ten sam plik `.tex`, widząc kursory pozostałych użytkowników, komentarze i zmiany. Dla zespołów badawczych piszących artykuł wspólnie z trzema recenzentami na dwóch kontynentach to ogromne ułatwienie.
- **Zero konfiguracji** — rejestracja, nowy projekt, kompilacja. Trzy kliknięcia od pustej strony do gotowego PDF-a. Wszystkie pakiety z TeX Live 2025 są zainstalowane na serwerze — nie musisz niczego dogrywać przez `tlmgr`.
- **Biblioteka szablonów** — ponad 5 000 gotowych szablonów: artykuły IEEE, Springer, Elsevier, szablony prac dyplomowych polskich uczelni, CV w stylu moderncv, postery konferencyjne. Zaczynasz od działającego szkieletu zamiast od pustego pliku.
- **Wbudowany podgląd PDF** — kompilacja uruchamia się automatycznie przy zapisie, a podgląd wyświetla się obok kodu. Pętla _edycja → podgląd_ jest bardzo krótka.

---

## Limity darmowego planu Overleaf

Tu zaczyna się mniej optymistyczna część opowieści. W 2023 roku Overleaf drastycznie skrócił czas kompilacji na darmowym planie — początkowo do 20 sekund, a pod koniec 2025 roku do zaledwie **10 sekund**. To fundamentalna zmiana, która sprawia, że darmowy Overleaf przestaje nadawać się do poważnych projektów.

Poniższa tabela zestawia najważniejsze limity:

<div class="table-wrapper">

|                           | **Plan darmowy** | **Plany premium**       |
| ------------------------- | ---------------- | ----------------------- |
| Czas kompilacji           | 10 sekund        | 240 sekund (4 min)      |
| Współpracownicy / projekt | 1 osoba          | 6–∞ (zależnie od planu) |
| Historia wersji           | 24 godziny       | Pełna historia          |
| Track changes             | ✗                | ✓                       |
| Integracja Git / GitHub   | ✗                | ✓                       |
| Sync z Dropbox            | ✗                | ✓                       |
| Mendeley / Zotero         | ✗                | ✓                       |
| Priorytetowe wsparcie     | ✗                | ✓                       |
| Cena                      | 0 zł             | od ~30 zł/mies.         |

</div>

**10 sekund** brzmi abstrakcyjnie, więc przełóżmy to na praktykę. Prosta kompilacja artykułu z kilkoma wzorami i jednym rysunkiem zajmuje 3–5 sekund — mieścisz się. Ale:

- Podręcznik 200+ stron z indeksem, spisem treści i bibliografią BibTeX? **20–60 sekund.**
- Dokument z grafikami TikZ lub pgfplots? **30–120 sekund.**
- Projekt z wieloma plikami `\input{}` i pakietem `minted` (kolorowanie składni)? **15–45 sekund.**
- Praca doktorska z cross-referencjami i `hyperref`? **25–90 sekund.**

Każdy z tych scenariuszy przekracza limit darmowego planu. W efekcie kompilacja zostaje **przerwana** — nie dostajesz PDF-a, widzisz komunikat o timeout, i musisz albo zapłacić, albo szukać alternatywy.

---

## Lokalny LaTeX — pełna kontrola nad środowiskiem

Alternatywą jest instalacja LaTeX-a na własnym komputerze. Współczesny setup jest znacznie prostszy niż 10 lat temu i sprowadza się do dwóch elementów:

1. **Dystrybucja TeX** — najczęściej TeX Live (Linux, macOS, Windows) lub MiKTeX (Windows). TeX Live w wersji `scheme-full` zawiera ponad 4 000 pakietów i zajmuje **ok. 8–12 GB** dysku.
2. **Edytor kodu** — Visual Studio Code z rozszerzeniem **LaTeX Workshop** (autor: James Yu) to dziś najpopularniejsze połączenie. Daje podgląd PDF w czasie rzeczywistym, IntelliSense dla komend LaTeX, nawigację po strukturze dokumentu i automatyczną kompilację przy zapisie.

### Instalacja krok po kroku

**Windows:**

```
# Pobierz i zainstaluj TeX Live 2025 (scheme-full, ~8.6 GB)
# https://www.tug.org/texlive/windows.html

# W VS Code zainstaluj rozszerzenie:
ext install James-Yu.latex-workshop
```

**macOS:**

```
brew install --cask mactex-no-gui
sudo tlmgr update --self && sudo tlmgr update --all
```

**Linux (Ubuntu/Debian):**

```
sudo apt update && sudo apt install texlive-full
```

Po instalacji TeX Live i rozszerzenia LaTeX Workshop otwierasz plik `.tex` w VS Code, naciskasz `Ctrl+Alt+B` (kompilacja) — i gotowe. Podgląd PDF wyświetla się w zakładce obok. Jeśli pakiet nie jest zainstalowany, `tlmgr install <pakiet>` załatwia sprawę w kilka sekund.

---

## Porównanie punkt po punkcie

Zestawiamy oba podejścia w najważniejszych kategoriach:

<div class="table-wrapper">

| Kryterium              | **Overleaf**                     | **Lokalny LaTeX**                    |
| ---------------------- | -------------------------------- | ------------------------------------ |
| Czas kompilacji        | 10 s (free) / 240 s (premium)    | **Bez limitu** — zależy od CPU       |
| Praca offline          | ✗ Wymaga internetu               | ✓ Pełna funkcjonalność               |
| Prywatność danych      | Pliki na serwerach Overleaf (UK) | **Pliki nigdy nie opuszczają dysku** |
| Współpraca real-time   | ✓ Wbudowana                      | ✗ Wymaga Git + zewn. narzędzi        |
| Kontrola wersji (Git)  | Tylko plany premium              | ✓ Pełna integracja (bezpłatna)       |
| Własne fonty           | Ograniczone (upload do projektu) | ✓ Dowolne fonty systemowe            |
| Własne pakiety / klasy | Upload do projektu               | ✓ `TEXMFLOCAL` — pełna swoboda       |
| Automatyzacja (CI/CD)  | ✗                                | ✓ GitHub Actions, Makefile           |
| Kompilator             | pdfLaTeX, XeLaTeX, LuaLaTeX      | **Dowolny** + pełna konfiguracja     |
| Koszt roczny           | 0 zł (z limitami) / ~360 zł+     | 0 zł (open source)                   |
| Konfiguracja wstępna   | Zerowa                           | 15–30 min (jednorazowo)              |

</div>

---

## Kiedy Overleaf ma sens

Overleaf pozostaje świetnym narzędziem w określonych scenariuszach. Warto z niego korzystać, gdy:

- Piszesz **krótki dokument** (artykuł, CV, list motywacyjny) — kompilacja trwa kilka sekund, mieścisz się w limicie darmowego planu.
- Pracujesz **w zespole rozproszonym geograficznie** i potrzebujecie wspólnego edytora w czasie rzeczywistym bez konfigurowania Git-a.
- Jesteś **na początku przygody z LaTeX-em** i chcesz eksperymentować bez instalowania kilku gigabajtów oprogramowania.
- Twoja uczelnia ma **licencję instytucjonalną** Overleaf Premium — wtedy limity kompilacji i brak integracji Git-a nie są problemem.

---

## Kiedy wybrać instalację lokalną

Lokalny LaTeX jest **jedynym sensownym wyborem** w następujących sytuacjach:

- **Duże projekty** — podręczniki, monografie, prace doktorskie powyżej 100 stron. Kompilacja trwa 30–120 sekund i nie zmieści się w limicie Overleaf.
- **Dokumenty z grafikami generowanymi w kodzie** — TikZ, pgfplots, `minted`, `forest`, diagramy Feynmana. Każdy z tych pakietów dramatycznie wydłuża kompilację.
- **Poufne dane** — dokumentacja medyczna, prawna, finansowa, prace objęte NDA. Przechowywanie takich plików na zewnętrznych serwerach może naruszać RODO/GDPR.
- **Profesjonalny workflow** — jeśli składasz dokumenty komercyjnie (a więc np. prowadzisz usługę składu tekstu), potrzebujesz pełnej kontroli nad fontami, profilami kolorów, automatyzacją i wersjonowaniem.
- **Praca offline** — w pociągu, w samolocie, w dowolnym miejscu bez stabilnego internetu.

---

## Jak wygląda profesjonalny workflow lokalny

Na co dzień pracuję z LaTeX-em lokalnie i przez lata wypracowałem workflow, który łączy szybkość z pełną kontrolą. Oto jego szkielet:

**Struktura projektu:**

```
projekt/
├── main.tex              % plik główny
├── preamble.tex          % preambula z pakietami
├── chapters/
│   ├── 01-wstep.tex
│   ├── 02-metody.tex
│   └── 03-wyniki.tex
├── figures/
│   ├── wykres-01.pdf
│   └── schemat-tikz.tex
├── bibliography.bib      % baza bibliograficzna
├── sklad-tekstu.cls      % własna klasa dokumentu
├── latexmkrc             % konfiguracja latexmk
├── .gitignore
└── Makefile
```

**Kompilacja za pomocą `latexmk`:**

```
# Kompilacja z automatycznym wykrywaniem zmian
latexmk -pdf -interaction=nonstopmode main.tex

# Tryb ciągły — rekompilacja przy każdym zapisie
latexmk -pdf -pvc main.tex

# Czyszczenie plików pomocniczych
latexmk -c
```

Narzędzie `latexmk` (domyślnie dołączone do TeX Live) automatycznie uruchamia tyle przebiegów kompilacji, ile potrzeba — pdfLaTeX, BibTeX/Biber, makeindex — aż wszystkie referencje, cytowania i indeksy się zgadzają. To ten sam program, którego używa Overleaf pod maską.

**Konfiguracja VS Code (`settings.json`):**

```json
{
  "latex-workshop.latex.autoBuild.run": "onSave",
  "latex-workshop.latex.recipes": [
    {
      "name": "latexmk (LuaLaTeX)",
      "tools": ["lualatexmk"]
    },
    {
      "name": "latexmk (pdfLaTeX)",
      "tools": ["latexmk"]
    }
  ],
  "latex-workshop.view.pdf.viewer": "tab"
}
```

Zapis pliku → automatyczna kompilacja → podgląd PDF odświeża się w sąsiedniej zakładce. Cykl edycji jest identyczny jak w Overleaf — z tą różnicą, że nie ma żadnych limitów czasowych.

---

## Kwestia prywatności i RODO

To aspekt, o którym rzadko się mówi, a który ma duże znaczenie prawne. Overleaf przechowuje pliki projektów na serwerach w Wielkiej Brytanii. Jeśli składasz dokument zawierający dane osobowe (np. praca naukowa z danymi pacjentów, dokumentacja firmowa z danymi pracowników, materiały objęte tajemnicą przedsiębiorstwa), musisz rozważyć, czy przechowywanie tych danych na zewnętrznym serwerze jest zgodne z polityką prywatności Twojej organizacji i wymogami RODO/GDPR.

Przy instalacji lokalnej pliki **nigdy nie opuszczają Twojego dysku**. Możesz je dodatkowo zabezpieczyć szyfrowaniem (BitLocker, FileVault, LUKS) i kontrolować dostęp na poziomie systemu operacyjnego.

---

## Podejście hybrydowe — to, co stosuję w praktyce

Nie musisz wybierać wyłącznie jednego narzędzia. Wiele osób — w tym ja — stosuje podejście hybrydowe:

- **Skład produkcyjny** — lokalny TeX Live + VS Code + Git. Pełna kontrola nad kompilacją, fontami, profilami kolorów. Wersjonowanie w Git, backup na prywatnym repozytorium.
- **Szybkie prototypy i konsultacje** — Overleaf. Gdy klient chce zobaczyć próbną makietę, wysyłam link do projektu Overleaf. Klient komentuje bezpośrednio w dokumencie.
- **Współpraca z autorami** — Overleaf jako „frontend" dla autorów, którzy nie znają Git-a. Po zakończeniu edycji pobieram pliki i kończę skład lokalnie.

**Synchronizacja między środowiskami:**

```
# Pobranie projektu z Overleaf do lokalnego repo
git clone https://git.overleaf.com/XXXXXX projekt-overleaf

# Praca lokalna + push zmian z powrotem do Overleaf
cd projekt-overleaf
# ... edycja plików ...
git add -A && git commit -m "Korekta rozdziału 3"
git push origin master
```

Integracja Git z Overleaf wymaga planu premium, ale jeśli pracujesz komercyjnie, to koszt ~30 zł/miesiąc za tę wygodę jest uzasadniony.

---

## Alternatywy warte uwagi

Rynek edytorów LaTeX w 2025 roku jest bogatszy niż kiedykolwiek. Oprócz Overleaf i klasycznego setupu lokalnego, warto znać:

- **Papeeria** — lekka, przeglądarkowa alternatywa dla Overleaf z integracją Git. Dłuższe czasy kompilacji na darmowym planie niż Overleaf.
- **TeXstudio** — klasyczny, desktopowy edytor LaTeX z bardzo dobrym IntelliSense, podpowiedziami pakietów i wbudowanym podglądem PDF. Dobry wybór, jeśli nie chcesz używać VS Code.
- **Overleaf Community Edition** — samohosting Overleaf na własnym serwerze (Docker). Brak limitów kompilacji, pełna kontrola nad danymi. Wymaga wiedzy administracyjnej.
- **Typst** — nowy system składu tekstu, który aspiruje do zastąpienia LaTeX-a. Kompilacja niemal natychmiastowa, czysta składnia, ale ekosystem pakietów jest wciąż młody i brakuje wielu specjalistycznych klas dokumentów.

---

## Podsumowanie

Overleaf to **znakomite narzędzie do nauki LaTeX-a, szybkich projektów i współpracy w zespole** — pod warunkiem, że mieścisz się w limitach darmowego planu lub masz dostęp do licencji instytucjonalnej.

Dla profesjonalnego składu tekstu — podręczników, monografii, dokumentacji technicznej, katalogów — **instalacja lokalna jest standardem branżowym**. Brak limitów kompilacji, pełna kontrola nad fontami i konfiguracją, możliwość automatyzacji, prywatność danych i zerowy koszt dystrybucji TeX Live to argumenty, których trudno zignorować.

Najlepsze podejście? **Hybrydowe.** Używaj Overleaf tam, gdzie świeci najjaśniej (współpraca, prototypy, nauka), a lokalnego LaTeX-a tam, gdzie liczy się precyzja, wydajność i kontrola.

Jeśli potrzebujesz pomocy przy konfiguracji środowiska LaTeX lub chcesz zlecić profesjonalny skład dokumentu — [napisz do nas](/kontakt/). Pomożemy wybrać optymalny workflow dla Twojego projektu.
