---
title: "Skład ebooka: EPUB, MOBI i PDF — różnice i pułapki"
description: "Skład ebooka to nie eksport do PDF jednym kliknięciem. Wyjaśniamy różnice między EPUB, MOBI i PDF, kiedy tekst się przelewa, a kiedy stoi w miejscu, oraz gdzie najczęściej psuje się publikacja."
date: 2026-06-13
category: "Poradniki"
tags:
  ["skład ebooka", "epub", "mobi", "pdf", "reflowable", "fixed layout", "kindle", "publikacja cyfrowa"]
---

Autorka wysyła plik z prośbą: „proszę zrobić z tego ebooka, plik jest gotowy". W załączniku 240-stronicowy PDF złożony do druku — z marginesami pod oprawę, żywą paginą, twardymi przeniesieniami i obrazami osadzonymi dokładnie tam, gdzie mają być na papierze. Problem w tym, że na czytniku Kindle ten plik będzie wyglądał jak zeskanowana gazeta oglądana przez dziurkę od klucza: nieczytelny, zmuszający do ciągłego powiększania i przewijania w bok. To nie jest skład ebooka — to złożona do druku książka zapisana w niewłaściwym formacie.

**Skład ebooka** zaczyna się od decyzji, której w druku w ogóle nie podejmujemy: czy tekst ma się *przelewać* dopasowując się do ekranu czytelnika, czy *stać w miejscu* jak na papierze. Od tej jednej decyzji zależy wybór formatu, sposób pracy i lista pułapek, które będą nas czekać. W tym artykule rozkładamy na części trzy formaty — EPUB, MOBI i PDF — pokazujemy, czym naprawdę się różnią i gdzie publikacja psuje się najczęściej.

---

## Reflowable kontra fixed layout: prawdziwa linia podziału

![Porównanie układu przelewalnego i stałego: ten sam tekst dopasowuje łamanie linii do telefonu i tabletu, a obok zablokowana strona PDF wymagająca powiększania.](/blog/sklad-e-booka-epub-mobi-i-pdf-roznice-proces-i-pulapki/01-ilustracja.webp)

*Różnica między reflowable a fixed layout pokazana realnie, na stronie złożonej w LaTeX-u: po lewej ten sam tekst przelewa się do każdego ekranu, po prawej stała strona zmusza do powiększania i przewijania.*


Zanim padnie słowo „EPUB" czy „MOBI", trzeba zrozumieć rozróżnienie, które rządzi całym składem cyfrowym. Ebooki dzielą się na dwa typy układu, niezależnie od rozszerzenia pliku.

**Reflowable (przelewalny)** to format, w którym treść sama dopasowuje się do ekranu. Czytelnik może zmienić rozmiar czcionki, a strona po prostu reorganizuje się — łamania linii przesuwają się, tekst wyrównuje na nowo, obrazy skalują się do szerokości ekranu. To domyślny i właściwy układ dla większości publikacji: powieści, literatury faktu, biografii, poradników, raportów. Działa na *każdym* urządzeniu — telefonie, tablecie, czytniku e-ink, laptopie.

**Fixed layout (stały)** definiuje konkretne strony. Czcionka i obrazy stoją dokładnie tam, gdzie je umieszczono — jak w cyfrowym odbiciu papierowej strony. Czytelnik nie zmieni rozmiaru tekstu; może tylko powiększać i przewijać. Ten układ ma sens wyłącznie tam, gdzie pozycja elementów jest treścią: książki kucharskie, albumy, komiksy, książki dla dzieci, podręczniki techniczne z gęstą grafiką, mapy.

| Cecha | Reflowable | Fixed layout |
|---|---|---|
| Zmiana rozmiaru czcionki | Tak, przez czytelnika | Nie |
| Wsparcie urządzeń | Wszystkie | Ograniczone (źle na telefonach) |
| Rozmiar pliku | Mały | Duży |
| Koszt produkcji | Niższy | Wyższy |
| Najlepsze dla | Tekst ciągły | Treść silnie graficzna |
| Multi-kolumny | Nie | Tak |

Dominacja jednego z nich nie jest przypadkiem. Amazon — najważniejszy rynek ebooków — ma wyjątkowo słabą obsługę fixed layout, podczas gdy reflowable czytają bez problemu wszystkie urządzenia: Kindle, Apple Books, Nook, Kobo. Dlatego specjaliści odradzają fixed layout wszędzie tam, gdzie nie jest absolutnie konieczny. Reguła brzmi: **im mniej próbujesz kontrolować, tym lepiej wygląda ebook na większości urządzeń.** To dokładne odwrócenie filozofii składu drukarskiego — i jeśli wcześniej pracowałeś nad [PDF-em gotowym do drukarni](/blog/pdf-do-drukarni/), to przestawienie się bywa najtrudniejszą częścią całej pracy.

---

## Trzy formaty: EPUB, MOBI i PDF

Skoro znamy oś reflowable/fixed, przyjrzyjmy się konkretnym formatom plików.

### EPUB — standard branżowy

EPUB to otwarty standard publikacji cyfrowej, którego specyfikację utrzymuje International Digital Publishing Forum. Pod maską EPUB to w istocie spakowany zestaw plików HTML i CSS — ebook jest bliższy stronie internetowej niż dokumentowi. Obsługuje go cały świat poza Amazonem: Apple Books, Nook, Kobo, Google Play Books oraz dziesiątki aplikacji-czytników.

Aktualną wersją jest **EPUB3**, wstecznie kompatybilny z EPUB2. Jeśli nie robisz nic skomplikowanego, różnicy nie zauważysz — przewaga EPUB3 ujawnia się dopiero przy interaktywności i multimediach (np. osadzonym wideo). Warto wiedzieć, że nie wszystkie platformy obsługują EPUB3 w pełni; część czytników e-ink wciąż zostaje przy EPUB2.

### MOBI / AZW — świat Kindle

MOBI to historyczny format Kindle, na którym oparł się późniejszy AZW. Przez lata MOBI był jedynym plikiem, jaki Amazon przyjmował do swojego sklepu, i wciąż bywa preferowany nad surowym plikiem Worda — bo gdy Kindle automatycznie konwertuje dokument, wynik bywa nieprzewidywalny. Dziś Amazon przyjmuje także EPUB i konwertuje go we własnym łańcuchu produkcyjnym, ale zasada pozostaje ta sama: **plik dostarczony świadomie złożony jest bezpieczniejszy niż plik zdany na autokonwersję.** Kindle, z udziałem rzędu 72% rynku czytników, narzuca tu praktyczne reguły gry — pozostałe 10% to Nook, a reszta to aplikacje-czytniki.

### PDF — format, który nie jest ebookiem (zwykle)

PDF to z natury format o stałym układzie — cyfrowa kalka strony papierowej. Świetnie sprawdza się tam, gdzie liczy się wierne odwzorowanie: dokumentacja, raporty do druku, materiały, które ktoś realnie wydrukuje. Ale jako ebook czytany na telefonie PDF jest udręką: nie przelewa tekstu, zmusza do powiększania i przewijania, ignoruje preferencje czytelnika co do rozmiaru czcionki.

To nie znaczy, że PDF jest zły — znaczy, że odpowiada na inne pytanie. Jeśli publikacja ma żyć na ekranach o różnych rozmiarach, PDF jest złym wyborem. Jeśli ma zostać wydrukowana lub obejrzana na dużym monitorze w dokładnie zaprojektowanej formie, jest właściwym. Większość poważnych projektów wymaga *obu*: reflowable EPUB do dystrybucji cyfrowej i osobny PDF do druku — a to dwa różne procesy składu, nie jeden eksport.

---

## Ekonomia formatu: dlaczego to się opłaca robić dobrze

Ebooki to nie marginalna ciekawostka, tylko realny rynek o własnej ekonomii. Według danych z 2026 roku nowe bestsellery w twardej oprawie kosztują na Amazonie średnio 20,42 USD, a ich wersje cyfrowe 12,99 USD — różnica około 7,43 USD na korzyść ebooka. Dla porównania w 2021 roku ta różnica wynosiła tylko ok. 4 USD, a niektóre wydania Kindle bywały droższe od papieru. Przepaść cenowa rośnie, a wraz z nią opłacalność wydania cyfrowego.

Co istotne dla autorów: czytelnicy cyfrowi czytają *więcej*. Wśród nich 13% pochłania ponad 50 książek rocznie — wobec zaledwie 4% wśród czytelników papieru. To znaczy, że dobrze złożony ebook trafia do najbardziej aktywnej części rynku. Druk wciąż dominuje (w USA 46% dorosłych czyta papier wobec 24% cyfrowo, sprzedaż papieru bije cyfrę w proporcji 4:1), ale to nie jest gra o sumie zerowej — to dwa kanały, które warto obsłużyć równolegle.

Z drugiej strony nie każdą decyzję dyktuje wyłącznie cena pliku. Fixed layout jest droższy w produkcji i aktualizacji, bo wymaga więcej rąk i czasu — ale dla albumu czy komiksu nie ma alternatywy. To samo równanie, które omawialiśmy przy [kosztach składu tekstu](/blog/ile-kosztuje-sklad-tekstu/): cena wynika z liczby decyzji projektowych, a nie z liczby stron.

---

## Pułapki składu ebooka, których nie widać od razu

Tu zaczyna się prawdziwa praca — i prawdziwe rozczarowania osób przyzwyczajonych do druku. Rzeczy oczywiste w typografii drukarskiej w reflowable po prostu nie działają.

**Inicjały (dropcaps).** Wielką, ozdobną literę na początku rozdziału można w ebooku tylko *przybliżyć* hakując CSS — ale każde urządzenie wyświetli ją inaczej, a tam, gdzie czytelnik nadpisuje ustawienia tekstu, rozjedzie się całkowicie. W praktyce inicjały wyglądają źle na większości wyjść.

**Wcięcia wiszące (hanging indents).** Wymagają ujemnych wcięć lub paddingu, które czytniki obsługują fatalnie. Nie istnieje uniwersalny zapis CSS, który niezawodnie wymusi wcięcie wiszące — a tam, gdzie zadziała na jednym urządzeniu, padnie na drugim.

**Żywa pagina i stopki bieżące.** W reflowable nie ma pojęcia stałej „strony" — tekst przelewa się zależnie od urządzenia. Skoro nie ma stron, nie ma gdzie umieścić powtarzalnego nagłówka czy stopki. Element absolutnie naturalny w książce papierowej tu po prostu nie istnieje.

**Czcionki tekstu.** Kindle, iBooks i większość czytników daje użytkownikowi ustawienie własnej czcionki podstawowej. Możesz wymusić krój nagłówków, ale czcionkę tekstu głównego ostatecznie kontroluje czytelnik. To nie błąd — to z założenia jego prawo.

**Multimedia i odwołania zewnętrzne.** EPUB nie pozwala wołać do zewnętrznych serwerów. Nie osadzisz filmu z YouTube przez iframe — wideo musi fizycznie znaleźć się w pliku książki, inaczej nie zadziała. Najbezpieczniejsza praktyka to zrzut ekranu wideo podlinkowany do materiału hostowanego w sieci.

**Spis treści jest obowiązkowy.** Ponieważ w ebooku nie ma dotykowego poczucia, „gdzie się jest", nawigacja opiera się na spisie treści — i część platform *odrzuci* publikację bez niego. Nawet jednorozdziałowe opowiadanie potrzebuje spisu treści.

---

## Dlaczego skład ebooka to skład, a nie konwersja

Słowo „konwersja" sugeruje przycisk: weź plik, wciśnij, dostań ebooka. Tak to nie działa. Twórcy formatów wprost ostrzegają, że produkcja ebooka „potrafi wiązać się z dużą ilością cierpienia" — mnóstwem ręcznego stylowania i czyszczenia, nawet przy wyspecjalizowanym oprogramowaniu. Powód jest prosty: ebook to oprogramowanie czytane przez inne oprogramowanie, a każda platforma traktuje ten sam plik trochę inaczej. To, co działa w sieci, niekoniecznie działa w ebooku.

Dlatego skład ebooka jest dyscypliną z własnym warsztatem — bliższą tej, którą opisujemy w tekście [czym różni się skład od formatowania](/blog/sklad-a-formatowanie/), niż obsłudze edytora tekstu. Nie chodzi o to, żeby plik „się otworzył", lecz żeby otworzył się poprawnie na kilkudziesięciu urządzeniach o różnych ekranach, silnikach renderujących i kaprysach. To samo myślenie inżynierskie, które stoi za [profesjonalnym składem książki](/blog/sklad-ksiazki-krok-po-kroku-od-manuskryptu-do-gotowego-pliku-do-druku/) — z tą różnicą, że tu „strona" jest płynna.

W naszej pracowni do składu używamy LaTeX-a, bo daje precyzyjną, powtarzalną kontrolę nad strukturą dokumentu i pozwala z jednego, czysto rozdzielonego źródła wyprowadzić zarówno PDF do druku, jak i materiał wyjściowy pod ebooka. Ale narzędzie jest tu drugorzędne — liczy się intencja wynikowa: czy efektem ma być plik przelewalny dla czytnika, czy stały dla drukarni. Każdy z tych celów rządzi się innymi prawami i wymaga innej ścieżki, co opisujemy szerzej przy [usługach składu ebooków](/uslugi/ebooki/).

---

## Jak podejść do własnego projektu

Praktyczna kolejność decyzji wygląda tak. Najpierw odpowiedz na jedno pytanie: czy treść jest tekstem ciągłym, czy żyje z układu graficznego? Tekst ciągły → reflowable, i niemal na pewno EPUB jako format wyjściowy (z którego Amazon zrobi swoją wersję Kindle). Treść silnie graficzna → fixed layout, ze świadomością wyższego kosztu i gorszego wsparcia urządzeń.

Drugie pytanie: czy publikacja ma też istnieć na papierze lub być oglądana w dokładnie zaprojektowanej formie? Jeśli tak, potrzebujesz osobnego PDF-a — i to nie jest „ten sam plik w innym rozszerzeniu", tylko równoległy proces składu z własnymi regułami (spady, CMYK, marginesy pod oprawę).

Trzecia rzecz to higiena materiału źródłowego, która zaczyna się długo przed składem: jeden konsekwentny krój pisma, wcięcia ustawiane stylem akapitu zamiast tabulatorem, obrazy osadzane małe i lekkie zamiast wielkich grafik. To dokładnie te same nawyki, które opisujemy w poradniku [jak przygotować tekst do składu](/blog/jak-przygotowac-tekst-do-skladu/) — w świecie ebooków karzą za ich brak jeszcze surowiej, bo każde zaniedbanie mnoży się przez liczbę urządzeń, na których plik zostanie otwarty.

Skład ebooka nagradza pokorę wobec medium. Druk pozwala projektantowi powiedzieć ostatnie słowo o każdym milimetrze strony; ebook to ostatnie słowo oddaje czytelnikowi i jego urządzeniu. Im wcześniej przyjmiemy, że nie kontrolujemy wszystkiego, tym lepiej publikacja będzie wyglądać tam, gdzie naprawdę liczy się jej życie — na ekranie, którego nigdy nie zobaczymy.