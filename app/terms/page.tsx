'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h1 className="text-5xl font-display font-bold text-gray-900 mb-8">
            Uslovi <span className="gold-gradient-text">Korišćenja</span>
          </h1>
          
          <div className="bg-white rounded-2xl p-8 shadow-lg space-y-6">
            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">1. Prihvatanje Uslova</h2>
              <p className="text-gray-700 leading-relaxed">
                Korišćenjem web sajta Premium Residence, prihvatate ove uslove korišćenja u potpunosti. 
                Ako se ne slažete sa bilo kojim delom ovih uslova, molimo vas da ne koristite naš sajt.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">2. Intelektualna Svojina</h2>
              <p className="text-gray-700 leading-relaxed">
                Sav sadržaj na ovom sajtu, uključujući tekstove, slike, logotipe, dizajn i softver, 
                je vlasništvo Premium Residence i zaštićen je zakonima o autorskim pravima.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">3. Korišćenje Sajta</h2>
              <p className="text-gray-700 leading-relaxed mb-3">
                Obavezujete se da:
              </p>
              <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
                <li>Koristite sajt samo u zakonite svrhe</li>
                <li>Ne narušavate funkcionisanje sajta</li>
                <li>Ne pokušavate da neovlašćeno pristupite sistemu</li>
                <li>Pružate tačne i ažurne informacije</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">4. Informacije o Stanovima</h2>
              <p className="text-gray-700 leading-relaxed">
                Sve informacije o stanovima, cenama i dostupnosti su date sa namerom da budu tačne, 
                ali su podložne promenama bez prethodne najave. Preporučujemo da kontaktirate naš tim 
                za najnovije informacije.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">5. Rezervacije i Kupovina</h2>
              <p className="text-gray-700 leading-relaxed">
                Proces rezervacije i kupovine stanova podleže dodatnim uslovima koji će vam biti 
                predstavljeni tokom procesa. Svi ugovori moraju biti potpisani u prisustvu pravnog 
                zastupnika.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">6. Ograničenje Odgovornosti</h2>
              <p className="text-gray-700 leading-relaxed">
                Premium Residence ne preuzima odgovornost za bilo kakvu štetu koja može nastati 
                korišćenjem ovog sajta ili nemogućnošću pristupa sajtu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">7. Izmene Uslova</h2>
              <p className="text-gray-700 leading-relaxed">
                Zadržavamo pravo da izmenimo ove uslove u bilo kom trenutku. Izmene stupaju na snagu 
                objavljivanjem na sajtu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">8. Primenljivo Pravo</h2>
              <p className="text-gray-700 leading-relaxed">
                Ovi uslovi se tumače u skladu sa zakonima Republike Srbije. Svaki spor će se rešavati 
                pred nadležnim sudom u Beogradu.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">9. Kontakt</h2>
              <p className="text-gray-700 leading-relaxed">
                Za pitanja u vezi sa uslovima korišćenja, kontaktirajte nas na:{' '}
                <a href="mailto:legal@premiumresidence.rs" className="text-gold-600 hover:underline">
                  legal@premiumresidence.rs
                </a>
              </p>
            </section>

            <div className="pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Poslednje ažuriranje: Oktobar 2025
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

