---
title: "Instalacja, konfiguracja i uruchomienie LaTeX-a lokalnie — TeX Live, VS Code i latexmk od zera"
description: "Krok po kroku: instalacja TeX Live 2025 na Windows, macOS i Linux, konfiguracja VS Code z LaTeX Workshop, receptury kompilacji, SyncTeX, zarządzanie pakietami przez tlmgr i profesjonalna struktura projektu z Gitem."
date: 2025-02-13
category: "Poradniki"
tags:
  [
    "tex live",
    "vs code",
    "latex workshop",
    "latexmk",
    "tlmgr",
    "konfiguracja",
    "instalacja",
    "git",
  ]
---

W artykule [Jak zacząć z LaTeX-em](/blog/jak-zaczac-z-latexem/) poznałeś podstawy składni i strukturę dokumentu. Jeśli zaczynałeś od Overleaf — świetnie, to najszybsza droga na start. Ale prędzej czy później trafisz na ścianę: limit kompilacji 10 sekund, brak pracy offline, ograniczona kontrola nad fontami i pakietami. Czas postawić LaTeX-a na własnym komputerze. Ten artykuł przeprowadzi Cię przez cały proces — od instalacji dystrybucji TeX, przez konfigurację edytora, po profesjonalny workflow z Gitem.

---

## Co dokładnie instalujemy i dlaczego

Lokalne środowisko LaTeX składa się z trzech warstw:

1. **Dystrybucja TeX** — silnik kompilacji + tysiące pakietów. To jest „backend", który zamienia plik `.tex` w PDF. Standard branżowy to **TeX Live** (multiplatformowy, aktualizowany co roku). Na macOS funkcjonuje pod nazwą **MacTeX** (TeX Live + narzędzia GUI specyficzne dla macOS). Alternatywa na Windows to **MiKTeX** — lżejszy, instaluje pakiety „na żądanie", ale ma mniej przewidywalne zachowanie przy dużych projektach.
2. **Edytor kodu** — miejsce, gdzie piszesz `.tex`. Rekomendacja: **Visual Studio Code** z rozszerzeniem **LaTeX Workshop** (autor: James Yu). Daje podgląd PDF, IntelliSense, SyncTeX, automatyczną kompilację i nawigację po strukturze dokumentu.
3. **Narzędzie kompilacji** — program, który wie, ile razy i w jakiej kolejności uruchomić pdfLaTeX, BibTeX, makeindex itd. Standard: **latexmk** (dołączony do TeX Live). To ten sam program, którego używa Overleaf pod maską.

---

## Krok 1 — Instalacja TeX Live 2025

### Windows

Pobierz instalator ze strony TUG (_TeX Users Group_):

```
# Pobierz install-tl-windows.exe (~20 MB)
# https://www.tug.org/texlive/acquire-netinstall.html

# Uruchom instalator i wybierz "scheme-full"
# Instalacja pobiera ~8.6 GB i trwa 30–90 min
# Domyślna ścieżka: C:\texlive\2025
```

Instalator automatycznie dodaje TeX Live do zmiennej `PATH` — po instalacji otwórz nowy terminal (PowerShell lub cmd) i zweryfikuj:

```
pdflatex --version
# pdfTeX 3.141592653-2.6-1.40.26 (TeX Live 2025)

latexmk --version
# Latexmk, John Collins, ...
```

Jeśli komendy nie są rozpoznawane, zrestartuj komputer — Windows czasem wymaga restartu, żeby przeładować zmienne środowiskowe.

**Alternatywa: MiKTeX.** Jeśli nie chcesz pobierać 8+ GB od razu, MiKTeX instaluje minimalny zestaw (~500 MB) i doinstalowuje pakiety przy pierwszej kompilacji. Pobierz z [miktex.org](https://miktex.org). Uwaga: MiKTeX wymaga osobnej instalacji Perla (np. Strawberry Perl), bo `latexmk` jest skryptem perlowym.

### macOS

Najprosztsza droga to **MacTeX** przez Homebrew:

```
# Instalacja MacTeX (pełna dystrybucja, ~5 GB)
brew install --cask mactex

# LUB wersja bez GUI (bez TeXShop, BibDesk itp.)
brew install --cask mactex-no-gui
```

Po instalacji zaktualizuj pakiety:

```
sudo tlmgr update --self
sudo tlmgr update --all
```

Na macOS `tlmgr` wymaga `sudo`, bo MacTeX instaluje się do `/usr/local/texlive/2025/` (katalog systemowy).

**Weryfikacja:**

```
which pdflatex
# /Library/TeX/texbin/pdflatex

pdflatex --version
# pdfTeX 3.141592653-2.6-1.40.26 (TeX Live 2025)
```

### Linux (Ubuntu / Debian)

```
# Opcja A: z repozytorium systemowego (szybka, ale
# może być starsza wersja TeX Live)
sudo apt update && sudo apt install texlive-full

# Opcja B: bezpośrednia instalacja z TUG (najnowsza wersja)
cd /tmp
wget https://mirror.ctan.org/systems/texlive/tlnet/install-tl-unx.tar.gz
tar xzf install-tl-unx.tar.gz
cd install-tl-*
sudo perl ./install-tl --paper=a4 --scheme=full
```

Przy opcji B dodaj TeX Live do `PATH` — instalator podaje dokładne ścieżki:

```
# Dodaj do ~/.bashrc lub ~/.zshrc:
export PATH="/usr/local/texlive/2025/bin/x86_64-linux:$PATH"
export MANPATH="/usr/local/texlive/2025/texmf-dist/doc/man:$MANPATH"
```

Przeładuj shell (`source ~/.bashrc`) i gotowe.

---

## Krok 2 — VS Code + LaTeX Workshop

### Instalacja rozszerzenia

Otwórz VS Code, naciśnij `Ctrl+Shift+X` (panel rozszerzeń) i zainstaluj:

- **LaTeX Workshop** (James Yu) — rdzeń: kompilacja, podgląd, snippety, SyncTeX
- **LTeX+** (opcjonalnie) — sprawdzanie gramatyki i ortografii z obsługą składni LaTeX (działa offline, wspiera polski)

### Konfiguracja `settings.json`

Otwórz ustawienia użytkownika: `Ctrl+Shift+P` → _Preferences: Open User Settings (JSON)_ i dodaj:

```json
{
  // ── LaTeX Workshop — kompilacja ────────────────
  "latex-workshop.latex.autoBuild.run": "onSave",
  "latex-workshop.latex.recipe.default": "first",

  "latex-workshop.latex.recipes": [
    {
      "name": "latexmk (pdfLaTeX)",
      "tools": ["latexmk"]
    },
    {
      "name": "latexmk (LuaLaTeX)",
      "tools": ["lualatexmk"]
    },
    {
      "name": "latexmk (XeLaTeX)",
      "tools": ["xelatexmk"]
    }
  ],

  "latex-workshop.latex.tools": [
    {
      "name": "latexmk",
      "command": "latexmk",
      "args": [
        "-synctex=1",
        "-interaction=nonstopmode",
        "-file-line-error",
        "-pdf",
        "-outdir=%OUTDIR%",
        "%DOC%"
      ],
      "env": {}
    },
    {
      "name": "lualatexmk",
      "command": "latexmk",
      "args": [
        "-synctex=1",
        "-interaction=nonstopmode",
        "-file-line-error",
        "-lualatex",
        "-outdir=%OUTDIR%",
        "%DOC%"
      ],
      "env": {}
    },
    {
      "name": "xelatexmk",
      "command": "latexmk",
      "args": [
        "-synctex=1",
        "-interaction=nonstopmode",
        "-file-line-error",
        "-xelatex",
        "-outdir=%OUTDIR%",
        "%DOC%"
      ],
      "env": {}
    }
  ],

  // ── Podgląd PDF ────────────────────────────────
  "latex-workshop.view.pdf.viewer": "tab",
  "latex-workshop.view.pdf.internal.synctex.keybinding": "double-click",

  // ── Czyszczenie plików pomocniczych ────────────
  "latex-workshop.latex.autoClean.run": "onBuilt",
  "latex-workshop.latex.clean.fileTypes": [
    "*.aux",
    "*.bbl",
    "*.blg",
    "*.idx",
    "*.ind",
    "*.lof",
    "*.lot",
    "*.out",
    "*.toc",
    "*.acn",
    "*.acr",
    "*.alg",
    "*.glg",
    "*.glo",
    "*.gls",
    "*.fls",
    "*.log",
    "*.fdb_latexmk",
    "*.snm",
    "*.nav",
    "*.dvi",
    "*.synctex.gz"
  ],

  // ── Porządek w eksplorerze plików ──────────────
  "files.associations": {
    "*.sty": "latex",
    "*.cls": "latex"
  },
  "files.exclude": {
    "**/*.fdb_latexmk": true,
    "**/*.synctex.gz": true,
    "**/*.fls": true,
    "**/*.run.xml": true,
    "**/*.blg": true
  },

  // ── Edytor — ustawienia dla .tex ──────────────
  "[latex]": {
    "editor.wordWrap": "on",
    "editor.tabSize": 2,
    "editor.formatOnSave": false
  }
}
```

### Co robi każde ustawienie

<div class="table-wrapper">

| Ustawienie                   | Co robi                                                                                              |
| ---------------------------- | ---------------------------------------------------------------------------------------------------- |
| `autoBuild.run: "onSave"`    | Automatycznie kompiluje dokument przy każdym zapisie (`Ctrl+S`)                                      |
| `recipe.default: "first"`    | Używa pierwszej receptury z listy (pdfLaTeX) jako domyślnej                                          |
| `"-synctex=1"`               | Włącza SyncTeX — pozwala klikać w PDF i przeskakiwać do odpowiedniego miejsca w kodzie (i odwrotnie) |
| `"-interaction=nonstopmode"` | Kompilacja nie zatrzymuje się na błędach — przechodzi do końca i raportuje wszystko naraz            |
| `"-file-line-error"`         | Błędy wyświetlane z dokładną nazwą pliku i numerem linii                                             |
| `"-pdf"`                     | Generuje PDF (zamiast DVI)                                                                           |
| `view.pdf.viewer: "tab"`     | Podgląd PDF otwiera się jako zakładka obok kodu w VS Code                                            |
| `autoClean.run: "onBuilt"`   | Po udanej kompilacji automatycznie kasuje pliki pomocnicze (`.aux`, `.log`, `.toc` itd.)             |

</div>

### SyncTeX — nawigacja kod ↔ PDF

SyncTeX to mechanizm, który łączy pozycje w kodzie źródłowym z odpowiednimi miejscami w PDF-ie. Dzięki niemu:

- **PDF → Kod:** dwuklik w podglądzie PDF przenosi kursor do odpowiedniej linii w pliku `.tex`
- **Kod → PDF:** `Ctrl+Alt+J` (lub z palety komend: _SyncTeX from cursor_) podświetla odpowiednie miejsce w PDF

To nieocenione przy dużych dokumentach — zamiast przewijać 200-stronicowy PDF, klikasz dwukrotnie i od razu widzisz odpowiadający fragment kodu.

---

## Krok 3 — latexmk i plik `.latexmkrc`

**latexmk** to skrypt Perla, który automatycznie zarządza procesem kompilacji. Wie, ile razy trzeba uruchomić pdfLaTeX (zwykle 2–3 razy), kiedy włączyć BibTeX/Biber, kiedy przebudować indeks. Nie musisz o tym myśleć — `latexmk` robi to za Ciebie.

### Podstawowe komendy

```
# Kompilacja do PDF
latexmk -pdf main.tex

# Kompilacja z LuaLaTeX (np. dla fontów OpenType)
latexmk -lualatex main.tex

# Tryb ciągły — obserwuje pliki i rekompiluje przy zmianach
latexmk -pdf -pvc main.tex

# Czyszczenie plików pomocniczych
latexmk -c            # usuwa .aux, .log, .toc itd.
latexmk -C            # j.w. + usuwa wygenerowany PDF

# Podgląd co zostanie skompilowane (bez kompilacji)
latexmk -pdf -n main.tex
```

### Plik `.latexmkrc` — konfiguracja per projekt

Umieść plik `.latexmkrc` w katalogu głównym projektu, żeby dostosować zachowanie latexmk:

```perl
# .latexmkrc — konfiguracja latexmk dla projektu

# Kompilator: pdflatex (domyślny)
$pdf_mode = 1;           # 1 = pdflatex, 4 = lualatex, 5 = xelatex

# Katalog na pliki wynikowe (porządek!)
$out_dir = 'build';
$aux_dir = 'build';

# Automatycznie uruchom biber zamiast bibtex
$bibtex_use = 2;         # 0 = nigdy, 1 = bibtex, 2 = biber

# SyncTeX
$synctex = 1;

# Dodatkowe pliki do czyszczenia
$clean_ext = 'run.xml bbl bcf synctex.gz';

# Podgląd PDF (Linux)
# $pdf_previewer = 'evince %S';

# Podgląd PDF (macOS)
# $pdf_previewer = 'open -a Preview %S';
```

Gdy w katalogu istnieje `.latexmkrc`, wystarczy wpisać `latexmk` — bez żadnych flag. Plik konfiguracyjny przejmuje kontrolę.

---

## Krok 4 — Zarządzanie pakietami (tlmgr)

**tlmgr** (_TeX Live Manager_) to menedżer pakietów TeX Live — odpowiednik `apt` dla Ubuntu czy `npm` dla Node.js. Jeśli zainstalowałeś `scheme-full`, masz na dysku ponad 4 000 pakietów i prawdopodobnie nigdy nie będziesz musiał doinstalowywać niczego ręcznie. Ale warto znać podstawowe komendy:

```
# ── Aktualizacja ──────────────────────────────────
tlmgr update --self               # aktualizuj sam tlmgr
tlmgr update --all                # aktualizuj wszystkie pakiety
tlmgr update --list               # pokaż, co by się zaktualizowało

# ── Instalacja / usuwanie ─────────────────────────
tlmgr install fontspec             # zainstaluj pakiet fontspec
tlmgr remove fontspec              # usuń pakiet
tlmgr install collection-langpolish  # polska kolekcja językowa

# ── Wyszukiwanie ──────────────────────────────────
tlmgr search --global booktabs    # szukaj pakietu po nazwie
tlmgr search --file titling.sty   # szukaj pakietu po pliku

# ── Informacje ────────────────────────────────────
tlmgr info booktabs               # szczegóły pakietu
tlmgr info --list --only-installed # lista zainstalowanych pakietów
tlmgr --version                    # wersja TeX Live i tlmgr

# ── Konfiguracja ──────────────────────────────────
tlmgr paper a4                     # domyślny format papieru
```

**Uwaga na macOS:** komendy `tlmgr` wymagają `sudo` (np. `sudo tlmgr update --all`), bo MacTeX instaluje się do katalogu systemowego.

**Uwaga na Linux (apt):** jeśli zainstalowałeś TeX Live z repozytorium systemowego (`sudo apt install texlive-full`), to `tlmgr` może nie być dostępny lub wskazywać na wersję zarządzaną przez `apt`. W takim wypadku pakiety doinstalowujesz przez `apt` (`sudo apt install texlive-science`), a nie `tlmgr`.

---

## Krok 5 — Struktura projektu i Git

### Rekomendowana struktura katalogów

```
projekt/
├── main.tex                  % plik główny
├── preamble.tex              % preambula (pakiety, komendy)
├── chapters/
│   ├── 01-wstep.tex
│   ├── 02-metody.tex
│   └── 03-wyniki.tex
├── figures/
│   ├── wykres-01.pdf         % grafiki wektorowe
│   └── zdjecie-01.png
├── tables/
│   └── dane.tex              % tabele w osobnych plikach
├── bibliography.bib          % baza bibliograficzna
├── .latexmkrc                % konfiguracja latexmk
├── .gitignore                % ignorowanie plików LaTeX
└── build/                    % katalog wyjściowy (generowany)
    ├── main.pdf
    ├── main.aux
    └── ...
```

Dlaczego warto rozbijać dokument na pliki? Bo `\input{chapters/01-wstep}` pozwala pracować nad jednym rozdziałem bez przeładowywania całego dokumentu. W pliku `main.tex` masz tylko szkielet:

```
\documentclass[12pt, a4paper]{report}
\input{preamble}

\begin{document}
\maketitle
\tableofcontents

\input{chapters/01-wstep}
\input{chapters/02-metody}
\input{chapters/03-wyniki}

\bibliographystyle{plain}
\bibliography{bibliography}
\end{document}
```

### `.gitignore` dla LaTeX-a

```
# ── Pliki kompilacji LaTeX ────────────────────────
build/
*.aux
*.bbl
*.bcf
*.blg
*.fdb_latexmk
*.fls
*.log
*.out
*.run.xml
*.synctex.gz
*.toc
*.lof
*.lot
*.idx
*.ind
*.ilg
*.nav
*.snm
*.vrb

# ── Pliki systemowe ──────────────────────────────
.DS_Store
Thumbs.db
```

### Workflow Git + LaTeX

W odróżnieniu od plików `.docx` (które są archiwami ZIP z binarnym XML), pliki `.tex` to **czysty tekst**. Git śledzi zmiany linia po linii, daje czytelne diffy i umożliwia pełne porównanie wersji:

```
git init
git add -A
git commit -m "Inicjalizacja projektu"

# Praca nad rozdziałem 2
# ... edycja chapters/02-metody.tex ...
git add chapters/02-metody.tex
git commit -m "Dodano opis metodologii badań"

# Przegląd zmian
git diff HEAD~1 -- chapters/02-metody.tex

# Cofnięcie do poprzedniej wersji rozdziału
git checkout HEAD~1 -- chapters/02-metody.tex
```

To jest **ogromna** przewaga nad Wordem: pełna historia zmian, możliwość rozgałęziania (branche dla różnych wersji artykułu), porównywanie wersji wiersz po wierszu. Backup na GitHubie lub GitLabie daje dodatkowe bezpieczeństwo — i to za darmo na prywatnym repozytorium.

---

## Kompilatory — który wybrać

TeX Live zawiera kilka kompilatorów. Oto ich porównanie:

<div class="table-wrapper">

| Kompilator   | Flaga latexmk | Fonty               | Prędkość      | Kiedy używać                                                                                   |
| ------------ | ------------- | ------------------- | ------------- | ---------------------------------------------------------------------------------------------- |
| **pdfLaTeX** | `-pdf`        | Type1 (CM, LM)      | Najszybszy    | Dokumenty z fontami Computer Modern / Latin Modern, standardowy wybór                          |
| **XeLaTeX**  | `-xelatex`    | OpenType / TrueType | Średnia       | Gdy potrzebujesz fontów systemowych (np. Calibri, Garamond) lub obsługi Unicode bez `inputenc` |
| **LuaLaTeX** | `-lualatex`   | OpenType / TrueType | Najwolniejszy | Zaawansowane skrypty Lua, automatyczne tagowanie PDF (dostępność), font shaping                |

</div>

**Zasada kciuka:** zacznij od **pdfLaTeX**. Przejdź na XeLaTeX lub LuaLaTeX dopiero gdy potrzebujesz fontów OpenType (pakiet `fontspec`) lub specyficznych funkcji Unicode. Dla 90% dokumentów pdfLaTeX jest optymalny.

Zmiana kompilatora to kwestia jednej linii w `.latexmkrc`:

```perl
$pdf_mode = 1;    # pdfLaTeX
# $pdf_mode = 4;  # LuaLaTeX
# $pdf_mode = 5;  # XeLaTeX
```

---

## Rozwiązywanie problemów

### „`pdflatex` nie jest rozpoznawany" (Windows)

TeX Live nie został dodany do `PATH`. Otwórz _Ustawienia systemu → Zmienne środowiskowe → PATH_ i dodaj:

```
C:\texlive\2025\bin\windows
```

Zrestartuj terminal (lub cały komputer).

### „Package `xyz` not found"

Pakiet nie jest zainstalowany. Rozwiązanie zależy od dystrybucji:

- **TeX Live (scheme-full):** wszystkie pakiety CTAN powinny być zainstalowane. Zaktualizuj: `tlmgr update --all`
- **TeX Live (mniejszy schemat):** doinstaluj pakiet: `tlmgr install xyz`
- **MiKTeX:** przy pierwszej kompilacji MiKTeX zaproponuje automatyczną instalację. Jeśli nie — otwórz MiKTeX Console → Packages → wyszukaj i zainstaluj.

### Kompilacja się zawiesza / nie kończy

Najczęstsza przyczyna: interaktywny tryb LaTeX-a czeka na input użytkownika po błędzie. Rozwiązanie: flaga `-interaction=nonstopmode` (już jest w naszej konfiguracji). Jeśli problem się powtarza — włącz `Stop on first error` w LaTeX Workshop: `Ctrl+Shift+P` → _LaTeX Workshop: Build with recipe → Stop on first error_.

### SyncTeX nie działa

Upewnij się, że kompilacja używa flagi `-synctex=1` (jest w naszej konfiguracji). Jeśli używasz katalogu wyjściowego (`-outdir`), plik `.synctex.gz` musi być tam, gdzie LaTeX Workshop go szuka. Przy domyślnej konfiguracji (z `%OUTDIR%`) powinno działać automatycznie.

### Polskie znaki nie wyświetlają się poprawnie

Upewnij się, że plik `.tex` jest zapisany w kodowaniu **UTF-8** (VS Code domyślnie zapisuje w UTF-8). W preambule dodaj:

```
\usepackage[utf8]{inputenc}   % dla pdfLaTeX
\usepackage[T1]{fontenc}
\usepackage[polish]{babel}
\usepackage{lmodern}
```

Jeśli używasz XeLaTeX lub LuaLaTeX — `inputenc` i `fontenc` nie są potrzebne (obsługa UTF-8 jest wbudowana). Zamiast tego użyj pakietu `fontspec`.

---

## Checklist — od zera do działającego środowiska

Na koniec — skondensowana lista kroków. Wydrukuj ją lub zapisz jako TODO:

- ☐ Zainstaluj TeX Live 2025 (`scheme-full`) lub MacTeX
- ☐ Zweryfikuj instalację: `pdflatex --version` i `latexmk --version`
- ☐ Zainstaluj VS Code + rozszerzenie LaTeX Workshop
- ☐ Skopiuj konfigurację `settings.json` z tego artykułu
- ☐ Utwórz testowy plik `hello.tex`, zapisz i sprawdź, czy PDF się generuje
- ☐ Przetestuj SyncTeX: dwuklik w PDF → kursor skacze do kodu
- ☐ Utwórz `.latexmkrc` z `$out_dir = 'build'`
- ☐ Utwórz `.gitignore` i zainicjalizuj repozytorium Git
- ☐ Zaktualizuj pakiety: `tlmgr update --self && tlmgr update --all`
- ☐ Skompiluj przykładowy dokument z bibliografią i cross-referencjami

Jeśli wszystkie punkty są odhaczone — masz profesjonalne środowisko LaTeX, które nie ustępuje niczym Overleaf, a w wielu aspektach go przewyższa.

---

## Co dalej?

Masz działające środowisko. Czas je wykorzystać. Polecam te artykuły na naszym blogu:

- [Jak zacząć z LaTeX-em](/blog/jak-zaczac-z-latexem/) — jeśli jeszcze nie znasz składni
- [Overleaf vs lokalny LaTeX](/blog/overleaf-vs-lokalny-latex/) — kiedy który wybrać

Jeśli potrzebujesz gotowego środowiska skonfigurowanego pod Twój projekt albo chcesz zlecić skład dokumentu — [napisz do nas](/kontakt/). Konfigurujemy workflow LaTeX od lat i pomożemy Ci uniknąć typowych pułapek.
