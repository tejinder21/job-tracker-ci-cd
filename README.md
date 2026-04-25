# Job Tracker – modernin web-projektin kehitysteknologiat käytännössä

## Johdanto

Tämä projekti on seminaarityö kurssille **Ohjelmistokehityksen teknologia**. Työssä toteutettiin pieni **Job Tracker** -sovellus, jonka avulla käyttäjä voi seurata omia työpaikkahakemuksiaan.

Projektin päätavoitteena ei ollut rakentaa mahdollisimman laajaa sovellusta, vaan käyttää yksinkertaista sovellusta alustana modernien ohjelmistokehityksen teknologioiden opiskeluun käytännössä. Työssä keskityttiin erityisesti siihen, miten nykyaikainen web-projekti rakennetaan, testataan, automatisoidaan ja kontitetaan.

---

## Projektin tavoite

Työn tavoitteena oli perehtyä käytännössä seuraaviin aiheisiin:

- Next.js-projektin käynnistäminen ja rakenne
- TypeScriptin hyödyntäminen React-sovelluksessa
- käyttöliittymän toteuttaminen ja tyylittely
- koodin laadun varmistaminen ESLintillä ja Prettierillä
- käyttöliittymän automaattinen testaus Robot Frameworkilla
- CI-putken rakentaminen GitHub Actionsilla
- sovelluksen kontitus Dockerilla

---

## Käytetyt teknologiat

Projektissa käytettiin seuraavia teknologioita:

- **Next.js** – sovelluksen runko
- **TypeScript** – tyypitetty kehitys
- **Tailwind CSS / CSS** – käyttöliittymän tyylit
- **ESLint** – koodin laadun tarkistus
- **Prettier** – koodin automaattinen muotoilu
- **Robot Framework** – end-to-end testaus selaimessa
- **GitHub Actions** – jatkuva integraatio (CI)
- **Docker** – sovelluksen kontitus

---

## Sovelluksen ominaisuudet

Job Tracker -sovellukseen toteutettiin seuraavat toiminnot:

- uuden työhakemuksen lisääminen
- hakemuksen poistaminen
- hakemuksen muokkaaminen
- hakemuksen statuksen päivittäminen
- hakemusten hakeminen yrityksen tai position perusteella
- tietojen tallennus selaimen `localStorage`-muistiin

Sovellus pidettiin tarkoituksella yksinkertaisena, jotta työn painopiste voitiin pitää teknologioissa eikä liian laajassa liiketoimintalogiikassa.

---

## Projektin rakenne

Projektissa käytettiin Next.js App Router -rakennetta. Koodi jaettiin pienempiin osiin, jotta rakenne pysyy selkeänä ja helposti ylläpidettävänä.


```text
src/
 ├── app/
 │   ├── globals.css
 │   ├── layout.tsx
 │   └── page.tsx
 ├── components/
 │   ├── JobForm.tsx
 │   └── JobList.tsx
 └── types/
     └── jobs.ts
    
