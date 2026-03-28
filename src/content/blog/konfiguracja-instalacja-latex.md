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

W artykule [Jak zacząć z LaTeX-em](/blog/jak-zaczac-z-latexem/) poznałeś podstawy składni i strukturę dokumentu. Jeśli zaczynałeś od Overleaf — świetnie, to najszybsza droga na start. Ale prędzej czy później trafisz na ścianę: limit kompilacji 10 sekund, brak pracy offline, ograniczona kontrola nad fontami i pakietami. Czas postawić LaTeX-a na własnym komputerze. Jeśli zastanawiasz się, czy warto — przeczytaj najpierw [Overleaf vs lokalna instalacja LaTeX](/blog/overleaf_vs_local_latex/). Ten artykuł przeprowadzi Cię przez cały proces — od instalacji dystrybucji TeX, przez konfigurację edytora, po profesjonalny workflow z Gitem.

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
| `"-interaction=nonstopmode"` | Kompilacja nie zatrzymuje się na błędach — przechodzi do końca i raport