"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import type { Metadata } from "next";

const faqs = [
  {
    q: "Boli li IPL epilacija?",
    a: "Malo. Osjećaj je kao lagano peckanje ili udaranje gumenom trakom. Uz modele s hlađenjem (kao Ice Cool linija) — puno manje nego kod starijih aparata. Osjetljive zone (prepone, lice) su malo intenzivnije od nogu. Teška bol nije normalna — smanjite intenzitet.",
  },
  {
    q: "Radi li IPL na svim tipovima kože?",
    a: "Ne. IPL radi optimalno na koži tona I–IV po Fitzpatrick skali (bijela do mediteranski ten). Na tamnijoj koži postoji rizik od iritacije jer koža sama apsorbuje previše energije. Pro MAX model ima širi raspon, ali ograničenja i dalje postoje.",
  },
  {
    q: "Radi li na plavoj, riđoj ili sijedoj dlaci?",
    a: "Slabo ili nimalo. IPL ovisi o melaninu u dlaci. Bez melanina nema apsorpcije. Elektroliza je jedina trajna opcija za svijetle dlake.",
  },
  {
    q: "Koliko tretmana treba?",
    a: "Za vidljive rezultate: 6–10 tretmana (6–10 sedmica pri tjednom tretmanu). Za dugotrajne trajne rezultate: 3–4 mjeseca redovnog tretmana + povremeno osvježenje jednom u 4–6 sedmica.",
  },
  {
    q: "Mogu li koristiti IPL na licu?",
    a: "Da — ali uz oprez. Nikad bliže od 1 cm od očiju. Uvijek zaštitne naočale. Niži intenzitet. Gornja usna, brada i obrazi su OK zone.",
  },
  {
    q: "Mogu li koristiti IPL tokom menstruacije?",
    a: "Da — nema kontraindikacija. Neke žene primjećuju povećanu osjetljivost u to doba, pa počnite s nižim intenzitetom.",
  },
  {
    q: "Što ako imam PCOS?",
    a: "IPL radi i uz PCOS, ali sporije i s potrebom duljeg tretmana. Hormoni stimuliraju rast dlake — IPL usporava taj rast, ali ne može potpuno pobijediti hormone. Mnoge žene s PCOS imaju koristi od IPL-a uz hormonalnu terapiju. Konzultujte se s ginekologom.",
  },
  {
    q: "Mogu li koristiti IPL tokom trudnoće?",
    a: "Ne. Nema dovoljno podataka o sigurnosti. Savjet je da ne koristite tokom trudnoće i dojenja.",
  },
  {
    q: "Koliko dugo traju rezultati?",
    a: "Uz redovan tretman: trajno uz povremeno osvježenje jednom u 2–3 mjeseca. Bez osvježenja: dlake se mogu polako vraćati u tanjem obliku, posebno uz hormonalne promjene.",
  },
  {
    q: "Mogu li koristiti IPL na tetoviranoj koži?",
    a: "Ne. Tinte u tetovaži apsorbiraju energiju — rizik od iritacije ili oštećenja tetovaže. Zaobiđite tetoviranom zonom.",
  },
  {
    q: "Što ako vidim crvenilo nakon tretmana?",
    a: "Blago crvenilo 1–2 sata je normalno. Nanesite aloeveru ili blagi hidratantni losion. Crvenilo dulje od 24h, mjehurići ili bol — prestanite i konzultirajte se s dermatologom.",
  },
  {
    q: "Zašto moram brijati prije tretmana, a ne koristiti vosak?",
    a: "Vosak izvlači folikul iz kože — onda nema šta IPL da tretira. Brijač reže dlaku ali ostavlja folikul na mjestu. IPL tada precizno pogađa folikul.",
  },
  {
    q: "Prvih nekoliko sedmica ne vidim ništa — je li normalno?",
    a: "Potpuno normalno. IPL radi ispod površine, u ciklusima rasta dlake. Svega 20–30% dlaka je u aktivnoj fazi u bilo kojem trenutku. Rezultati se tipično vide od 4.–6. sedmice. Strpljenje je ključno.",
  },
  {
    q: "Koji model odabrati — Lite, Pro ili Pro MAX?",
    a: "Lite: za fine dlake ili mali broj zona. Pro: best seller, za većinu žena s tipičnim potrebama. Pro MAX: za guste tamne dlake, veće tijelo ili tamniju kožu. Svi modeli su dostupni na aurorashop.ba.",
  },
  {
    q: "Gdje kupiti Ice Cool aparat u BiH?",
    a: "Jedini zvanični prodavač u BiH je Aurora Shop (aurorashop.ba) — dostava unutar 24h, plaćanje pouzećem, 14 dana povrat.",
  },
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-gray-100">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-4 text-left gap-4"
      >
        <span className="font-semibold text-gray-800 text-sm sm:text-base">
          {q}
        </span>
        <ChevronDown
          size={18}
          className={`shrink-0 text-[#c9756a] transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <p className="pb-4 text-sm text-gray-600 leading-relaxed">{a}</p>
      )}
    </div>
  );
}

export default function FaqPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 sm:px-6 py-10">
      <div className="mb-8">
        <p className="text-xs uppercase tracking-widest text-[#c9756a] font-semibold mb-2">
          Sve na jednom mjestu
        </p>
        <h1
          className="text-3xl font-bold text-gray-900"
          style={{ fontFamily: "Georgia, serif" }}
        >
          Pitanja i odgovori o IPL epilaciji
        </h1>
        <p className="text-gray-500 mt-2 text-sm">
          15 najčešćih pitanja koja nam čitatelji postavljaju — iskreni odgovori
          bez marketinškog jezika.
        </p>
      </div>

      <div>
        {faqs.map((faq, i) => (
          <FaqItem key={i} q={faq.q} a={faq.a} />
        ))}
      </div>

      <div className="mt-10 bg-[#faf8f6] rounded-xl p-6 text-center">
        <p className="text-sm font-semibold text-gray-700 mb-1">
          Imate pitanje koje nije ovdje?
        </p>
        <p className="text-xs text-gray-500 mb-4">
          Posjetite stranicu Aurora Shop-a ili ih kontaktirajte direktno.
        </p>
        <a
          href="https://aurorashop.ba"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2.5 rounded-full text-sm font-semibold text-white transition-colors"
          style={{ backgroundColor: "#c9756a" }}
        >
          aurorashop.ba →
        </a>
      </div>
    </div>
  );
}
