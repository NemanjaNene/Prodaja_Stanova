# 🏢 Premium Residence - Luksuzni Stanovi

Ultra-profesionalan sajt za prodaju stanova sa virtuelnim turama, 3D prikazom zgrade i modernim dizajnom.

## ✨ Karakteristike

### 🎨 Dizajn

- **Moderna UI/UX** - Prelepi gradijenti, animacije i responsivan dizajn
- **Framer Motion** - Glatke animacije i tranzicije
- **Tailwind CSS** - Moderni utility-first CSS framework
- **Glassmorphism** efekti

### 🏠 Funkcionalnosti

#### Početna Stranica

- Impresivan hero section sa animacijama
- Statistika projekta
- Izdvojene karakteristike zgrade
- Featured stanovi
- Call-to-action sekcije

#### Stanovi

- **Napredni filteri** - po broju soba, spratu, ceni
- **Sortiranje** - različiti kriterijumi
- **Real-time pretraga** - trenutni rezultati
- Detaljni prikaz svakog stana

#### Detalji Stana

- **Galerija slika** sa fullscreen modom
- **Tab navigacija** - pregled, karakteristike, osnova, virtuelna tura
- **Kalkulator kredita** - orijentacioni proračun
- Kontakt sidebar
- Slični stanovi

#### Virtuelna Tura

- **Interaktivni 3D prikaz zgrade** (Three.js)
- Video ture različitih delova
- 360° panorame prostorija
- Mogućnost zakazivanja uživo obilaska

#### Kontakt

- **Moderni kontakt formular** sa validacijom
- Kontakt informacije sa ikonama
- Google Maps integracija
- Social media linkovi
- Emergency kontakt 24/7

#### O Projektu

- Vizija i misija
- Timeline razvoja projekta
- Karakteristike projekta
- Tim stručnjaka
- Vrednosti i sertifikati

### 🎯 Tehnologije

- **Next.js 14** - React framework sa App Router
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Framer Motion** - Animacije
- **Three.js / React Three Fiber** - 3D vizualizacije
- **React Icons** - Ikonice
- **Responsive Design** - Funkcionalno na svim uređajima

## 🚀 Pokretanje Projekta

### Instalacija

```bash
# Instaliraj zavisnosti
npm install
```

### Development

```bash
# Pokreni development server
npm run dev
```

Sajt će biti dostupan na [http://localhost:3000](http://localhost:3000)

### Build za Produkciju

```bash
# Build aplikacije
npm run build

# Pokreni production server
npm start
```

## 📁 Struktura Projekta

```
├── app/
│   ├── page.tsx                 # Početna stranica
│   ├── stanovi/
│   │   ├── page.tsx            # Lista stanova
│   │   └── [id]/page.tsx       # Detalji stana
│   ├── virtuelna-tura/
│   │   └── page.tsx            # 3D tura
│   ├── kontakt/
│   │   └── page.tsx            # Kontakt forma
│   ├── o-projektu/
│   │   └── page.tsx            # O projektu
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── Navbar.tsx              # Navigacija
│   ├── Footer.tsx              # Footer
│   ├── ImageGallery.tsx        # Galerija slika
│   └── Building3D.tsx          # 3D model zgrade
├── data/
│   └── apartments.ts           # Podaci o stanovima
└── public/                     # Statički fajlovi
```

## 🎨 Customizacija

### Boje

Boje se mogu promeniti u `tailwind.config.ts`:

```typescript
colors: {
  primary: { ... },  // Primarni ton (plavi)
  gold: { ... },     // Zlatni akcenat
}
```

### Podaci o Stanovima

Izmeni fajl `data/apartments.ts` da dodaš/izmeniš stanove:

```typescript
export const apartments: Apartment[] = [
  {
    id: 1,
    name: "Penthouse Lux",
    // ... ostali podaci
  },
];
```

### Slike

- Trenutno koristi Unsplash placeholder slike
- Zameni sa pravim slikama u `public/` folderu
- Ažuriraj putanje u kodu

## 🌟 Premium Funkcionalnosti

### 3D Prikaz Zgrade

- Interaktivni 3D model
- Klik na spratove za detalje
- Rotate, zoom, pan kontrole

### Virtuelna Tura

- Video prezentacije
- 360° panorame
- Fullscreen mod

### Galerija

- Lightbox prikaz
- Smooth navigacija
- Thumbnail pregled

### Responsive

- Mobile-first pristup
- Tablet optimizacija
- Desktop full experience

## 📱 Kontakt Info u Kodu

Izmeni kontakt informacije u komponentama:

- `components/Navbar.tsx`
- `components/Footer.tsx`
- `app/kontakt/page.tsx`

```typescript
// Primer
phone: "+381 64 123 4567";
email: "info@premiumresidence.rs";
address: "Bulevar Kralja Aleksandra 123, Beograd";
```

## 🎭 Animacije

Koristi Framer Motion za smooth animacije:

```typescript
<motion.div
  initial={{ opacity: 0, y: 30 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
  Content
</motion.div>
```

## 🚀 Deploy

### Vercel (Preporučeno)

```bash
# Login
vercel login

# Deploy
vercel
```

### Netlify

```bash
npm run build
# Upload build folder
```

## 📊 SEO Optimizacija

- Meta tagovi u `app/layout.tsx`
- Open Graph slike
- Sitemap i robots.txt (dodaj po potrebi)
- Structured data (dodaj po potrebi)

## 🔒 Bezbednost

- Input validacija u formama
- HTTPS za produkciju
- Environment varijable za API ključeve
- CORS politike

## 💡 Saveti

1. **Slike** - Optimizuj slike za web (WebP format)
2. **Performance** - Lazy load slike i komponente
3. **Analytics** - Dodaj Google Analytics
4. **Forms** - Integriši sa email servisom
5. **CMS** - Razmisli o Headless CMS-u za lakše upravljanje

## 📝 Licence

Dizajn i kod su vlasništvo tvojeg projekta.

---

## 🎉 Hvala!

Sajt je spreman! Uživaj u promociji svojih luksuznih stanova! 🏆

Za pitanja i podršku, kontaktiraj developera.

**Developed with 💛 for Premium Residence**
