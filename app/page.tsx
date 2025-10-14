
"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Clock, Phone, Instagram, Utensils, Leaf, Coffee, Sandwich } from "lucide-react";

/**
 * Chai Bisket — Single‑file Landing Page
 * Tech: Next.js + Tailwind + local UI + Framer Motion
 */

const heroBg = `
  radial-gradient(1200px 600px at 10% -10%, rgba(255, 214, 153, 0.35), transparent 60%),
  radial-gradient(1000px 500px at 90% 0%, rgba(189, 255, 200, 0.30), transparent 60%),
  linear-gradient(180deg, rgba(255,255,255,0.9), rgba(255,255,255,0.75))
`;

const bananaLeafSvg = (
  <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice">
    <defs>
      <pattern id="leafs" width="200" height="200" patternUnits="userSpaceOnUse">
        <path d="M20,100 C60,20 140,20 180,100 C140,180 60,180 20,100 Z" fill="none" stroke="#3BAA6B" strokeWidth="1.2" />
        <path d="M20,100 C60,60 140,60 180,100" fill="none" stroke="#74C69D" strokeWidth="0.8" />
      </pattern>
    </defs>
    <rect width="100%" height="100%" fill="url(#leafs)" />
  </svg>
);

const Section = ({ id, children, className = "" }: { id?: string, children: React.ReactNode, className?: string }) => (
  <section id={id} className={`relative py-16 md:py-24 ${className}`}>{children}</section>
);

const Container = ({ children, className = "" }: { children: React.ReactNode, className?: string }) => (
  <div className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
);

// Local inline SVG artwork (data URIs) so no external requests are needed
const toDataUri = (svg: string) => `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
const art = {
  heroChai: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'>
    <defs><linearGradient id='g' x1='0' y1='0' x2='1' y2='1'><stop stop-color='#fde68a' offset='0'/><stop stop-color='#a7f3d0' offset='1'/></linearGradient></defs>
    <rect fill='url(#g)' width='1200' height='900'/>
    <g fill='none' stroke='#059669' stroke-width='14'><rect x='280' y='240' rx='32' width='480' height='340'/><path d='M760 320 h80 a80 80 0 0 1 0 160 h-80'/></g>
    <g stroke='#10b981' stroke-width='6'><path d='M420 220 c40 -60 40 -60 0 -120'/><path d='M500 220 c40 -60 40 -60 0 -120'/><path d='M580 220 c40 -60 40 -60 0 -120'/></g>
    <text x='60' y='840' font-family='sans-serif' font-size='48' fill='#065f46'>Masala Chai</text>
  </svg>`),
  thumb1: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#fff7ed'/><circle cx='400' cy='320' r='180' fill='#fde68a' stroke='#f59e0b' stroke-width='10'/><ellipse cx='400' cy='360' rx='220' ry='60' fill='none' stroke='#16a34a' stroke-width='8'/></svg>`),
  thumb2: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#ecfeff'/><path d='M160 380 q240 -220 480 0' fill='#fcd34d' stroke='#f59e0b' stroke-width='10'/><path d='M160 380 q240 120 480 0' fill='#16a34a' opacity='0.25'/></svg>`),
  thumb3: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#f0fdf4'/><rect x='220' y='260' width='360' height='120' rx='60' fill='#fff' stroke='#10b981' stroke-width='8'/></svg>`),
  iraniChai: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#fffbeb'/><rect x='260' y='180' width='280' height='220' rx='24' fill='#fde68a' stroke='#f59e0b' stroke-width='10'/><path d='M540 220 h60 a60 60 0 0 1 0 120 h-60' fill='none' stroke='#d97706' stroke-width='10'/></svg>`),
  biscuits: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#fff1f2'/><rect x='220' y='240' width='160' height='120' rx='18' fill='#fde68a' stroke='#f59e0b' stroke-width='8'/><rect x='420' y='260' width='160' height='120' rx='18' fill='#fde68a' stroke='#f59e0b' stroke-width='8'/></svg>`),
  biryani: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#ecfeff'/><circle cx='400' cy='320' r='180' fill='#fef3c7' stroke='#f59e0b' stroke-width='8'/><path d='M240 320 q160 -120 320 0' fill='none' stroke='#16a34a' stroke-width='8'/></svg>`),
  bunMaska: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#f0fdf4'/><rect x='200' y='260' width='400' height='120' rx='60' fill='#fff' stroke='#10b981' stroke-width='8'/></svg>`),
  vadaPav: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#fefce8'/><rect x='200' y='250' width='400' height='80' rx='18' fill='#fde68a' stroke='#f59e0b' stroke-width='8'/><circle cx='400' cy='330' r='46' fill='#fbbf24' stroke='#d97706' stroke-width='8'/><rect x='200' y='330' width='400' height='80' rx='18' fill='#fde68a' stroke='#f59e0b' stroke-width='8'/></svg>`),
  chicken65: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 600'><rect width='800' height='600' fill='#fff1f2'/><circle cx='300' cy='320' r='60' fill='#f87171'/><circle cx='400' cy='360' r='60' fill='#ef4444'/><circle cx='500' cy='320' r='60' fill='#dc2626'/></svg>`),
  monuments: toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1200 900'><rect width='1200' height='900' fill='#ecfeff'/><path d='M160 700 h240 v-200 h-240 z' fill='#a7f3d0'/><path d='M520 700 h200 v-240 l-100 -80 -100 80 z' fill='#fef3c7'/><path d='M820 700 h220 v-160 h-220 z' fill='#fde68a'/></svg>`),
  gallery: [
    toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'><rect width='800' height='800' fill='#ecfeff'/><circle cx='400' cy='400' r='220' fill='#a7f3d0'/></svg>`),
    toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'><rect width='800' height='800' fill='#fef3c7'/><rect x='140' y='260' width='520' height='280' fill='#f59e0b' opacity='0.35'/></svg>`),
    toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'><rect width='800' height='800' fill='#f0fdf4'/><path d='M120 560 q280 -360 560 0' fill='none' stroke='#10b981' stroke-width='16'/></svg>`),
    toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'><rect width='800' height='800' fill='#fff7ed'/><g fill='#fbbf24'><circle cx='280' cy='420' r='60'/><circle cx='400' cy='360' r='60'/><circle cx='520' cy='420' r='60'/></g></svg>`),
    toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'><rect width='800' height='800' fill='#ecfccb'/><rect x='220' y='300' width='360' height='200' rx='30' fill='#84cc16'/></svg>`),
    toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'><rect width='800' height='800' fill='#e0f2fe'/><polygon points='150,620 650,620 400,220' fill='#38bdf8'/></svg>`),
    toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'><rect width='800' height='800' fill='#fff1f2'/><circle cx='400' cy='400' r='200' fill='#f472b6' opacity='0.7'/></svg>`),
    toDataUri(`<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 800 800'><rect width='800' height='800' fill='#fef2f2'/><rect x='200' y='280' width='400' height='240' fill='#ef4444' opacity='0.3'/></svg>`),
  ],
};

const Placeholder = ({ label = "Image" }: { label?: string }) => (
  <div className="w-full h-full grid place-items-center bg-gradient-to-br from-emerald-100 via-amber-100 to-white text-emerald-900">
    <div className="text-center p-4">
      <div className="text-xs uppercase tracking-wide opacity-70">{label}</div>
      <div className="text-2xl font-extrabold">Chai Bisket</div>
    </div>
  </div>
);

const SafeImage = ({ src, alt, className = "", label }: { src: string, alt?: string, className?: string, label?: string }) => {
  const [broken, setBroken] = React.useState(false);
  return (
    <div className={className}>
      {!broken ? (
        <img
          src={src}
          alt={alt || ""}
          loading="lazy"
          referrerPolicy="no-referrer"
          className="h-full w-full object-cover"
          onError={() => setBroken(true)}
        />
      ) : (
        <Placeholder label={label || alt} />
      )}
    </div>
  );
};
// --- Robust ContactForm (paste above the default export in app/page.tsx) ---
function ContactForm() {
  const [status, setStatus] = React.useState<"idle"|"sending"|"ok"|"error">("idle");
  const [errorMsg, setErrorMsg] = React.useState<string>("");

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setErrorMsg("");
    const formEl = e.currentTarget;
    const fd = new FormData(formEl);
    const payload = {
      name: String(fd.get("name") || ""),
      email: String(fd.get("email") || ""),
      phone: String(fd.get("phone") || ""),
      message: String(fd.get("message") || ""),
    };

    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let data: any = {};
      try { data = await res.json(); } catch { /* ignore parse errors */ }

      if (!res.ok || !data?.ok) {
        throw new Error(data?.error || `Request failed (${res.status})`);
      }

      setStatus("ok");
      formEl.reset(); // clear fields on success
    } catch (err: any) {
      setErrorMsg(err?.message || "Unknown error");
      setStatus("error");
    }
  };

  return (
    <form className="grid gap-4" onSubmit={onSubmit}>
      <input name="name" className="border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Your name" required />
      <input name="email" type="email" className="border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Email" required />
      <input name="phone" className="border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Phone" />
      <input name="website" className="hidden" tabIndex={-1} autoComplete="off" />
      <textarea name="message" rows={4} className="border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-emerald-300" placeholder="Tell us about your event or question" required />
      <Button className="bg-emerald-700 hover:bg-emerald-800" type="submit" disabled={status==="sending"}>
        {status==="sending" ? "Sending..." : "Send Message"}
      </Button>
      {status==="ok" && <div className="text-sm text-emerald-700">Thanks! We’ll get back to you shortly.</div>}
      {status==="error" && <div className="text-sm text-red-600">Something went wrong. Please try again. {errorMsg && <span className="opacity-70">({errorMsg})</span>}</div>}
    </form>
  );
}


export default function Page() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50 text-slate-800">
      {/* NAVBAR */}
      <header className="sticky top-0 z-50 backdrop-blur bg-white/70 border-b border-amber-100">
        <Container className="flex items-center justify-between py-3">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-full bg-emerald-600 grid place-items-center text-white font-bold">CB</div>
            <div>
              <div className="text-lg font-semibold tracking-tight">Chai Bisket LLC</div>
              <div className="text-[12px] text-slate-500">an Indian eatery</div>
            </div>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a href="#menu" className="hover:text-emerald-700">Menu</a>
            <a href="#story" className="hover:text-emerald-700">Our Story</a>
            <a href="#location" className="hover:text-emerald-700">Location & Hours</a>
            <a href="#gallery" className="hover:text-emerald-700">Gallery</a>
            <a href="#contact" className="hover:text-emerald-700">Contact</a>
          </nav>
          <div className="flex items-center gap-3">
            <Button asChild className="hidden sm:inline-flex bg-emerald-600 hover:bg-emerald-700">
              <a href="#order">Order Online</a>
            </Button>
            <Button variant="outline" asChild className="border-emerald-600 text-emerald-700 hover:bg-emerald-50">
              <a href="https://instagram.com/chaibisket_eats" target="_blank" rel="noreferrer" className="flex items-center gap-2">
                <Instagram className="h-4 w-4" /> @chaibisket_eats
              </a>
            </Button>
          </div>
        </Container>
      </header>

      {/* HERO */}
      <Section id="home" className="pt-12">
        <div className="absolute inset-0 -z-10" style={{ background: heroBg, backgroundSize: 'cover', backgroundPosition: 'center' }} />
        {bananaLeafSvg}
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <span className="inline-flex items-center gap-2 text-[12px] font-medium uppercase tracking-wider text-emerald-800 bg-emerald-100/70 px-3 py-1 rounded-full">
                <Leaf className="h-3 w-3" /> Authentic • Street‑style • Hyderabadi Vibe
              </span>
              <h1 className="mt-4 text-4xl md:text-6xl font-extrabold leading-tight">
                Biryani is an <span className="text-emerald-700">emotion</span>, chai is for <span className="text-amber-700">mood</span>.
              </h1>
              <p className="mt-4 text-lg md:text-xl text-slate-700 max-w-prose">
                From samosa to Irani chai, from buns to biscuits — we bring the flavors of India to Cumming with
                a modern, cozy twist. Pull up a chair, sip, snack, and savor.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Button className="bg-emerald-700 hover:bg-emerald-800">
                  <a href="#menu" aria-label="Explore our menu" className="flex items-center"><Utensils className="mr-2 h-5 w-5"/>Explore Menu</a>
                </Button>
                <Button variant="outline" className="border-amber-500 text-amber-700 hover:bg-amber-50">
                  <a href="#order">Order Pickup / Delivery</a>
                </Button>
              </div>
              <div className="mt-6 flex items-center gap-6 text-sm text-slate-600">
                <div className="flex items-center gap-2"><Coffee className="h-4 w-4"/> Freshly brewed chai</div>
                <div className="flex items-center gap-2"><Sandwich className="h-4 w-4"/> Buns, biscuits & more</div>
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }}>
              <Card className="rounded-3xl shadow-xl border-emerald-100 bg-white/80">
                <CardContent className="p-4 md:p-6">
                  <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl">
                    <SafeImage
                      src={art.heroChai}
                      alt="Masala chai being poured into cups"
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="grid grid-cols-3 gap-3 mt-3">
                    {[art.thumb1, art.thumb2, art.thumb3].map((src, i) => (
                      <SafeImage key={i} src={src} alt="Signature dishes" className="h-28 w-full object-cover rounded-xl" />
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* MARQUEE */}
      <div className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-transparent to-white"/>
        <div className="whitespace-nowrap animate-[marquee_30s_linear_infinite] py-3 text-sm font-medium text-emerald-800">
          <span className="mx-8">Irani Chai</span>
          <span className="mx-8">Osmania Biscuits</span>
          <span className="mx-8">Hyderabadi Biryani</span>
          <span className="mx-8">Samosa & Cutlets</span>
          <span className="mx-8">Bun Maska</span>
          <span className="mx-8">Vada Pav</span>
          <span className="mx-8">Chicken 65</span>
          <span className="mx-8">Kulfi & Falooda</span>
        </div>
      </div>

      {/* MENU PREVIEW */}
      <Section id="menu" className="bg-white/70">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Signature Menu</h2>
            <p className="mt-3 text-slate-600">Street‑style favorites with a modern twist. 100% vibe, 100% flavor.</p>
          </div>

          <div className="mt-10 grid md:grid-cols-3 gap-6">
            {[
              { title: "Irani Chai", desc: "Slow‑brewed, aromatic, soul‑warming.", price: "$3.49", img: art.iraniChai },
              { title: "Osmania Biscuits", desc: "Crisp, buttery, perfect with chai.", price: "$4.99", img: art.biscuits },
              { title: "Hyderabadi Biryani", desc: "Long‑grain basmati, rich masala, royal aroma.", price: "$14.99", img: art.biryani },
              { title: "Bun Maska", desc: "Pillow‑soft bun, lashings of butter.", price: "$5.99", img: art.bunMaska },
              { title: "Vada Pav", desc: "Mumbai’s favorite — fiery & fun.", price: "$6.99", img: art.vadaPav },
              { title: "Chicken 65", desc: "Crispy, tangy, dangerously addictive.", price: "$12.99", img: art.chicken65 },
            ].map(({ title, desc, price, img }) => (
              <Card key={title} className="group overflow-hidden rounded-3xl border-emerald-100 hover:border-emerald-200 hover:shadow-lg transition-all">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span>{title}</span>
                    <span className="text-emerald-700 font-semibold">{price}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-slate-600">{desc}</p>
                  <div className="mt-4 aspect-[4/3] rounded-2xl overflow-hidden">
                    <SafeImage src={img} alt={title} className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button variant="outline" className="border-slate-300 hover:bg-white">
              <a href="#order">View Full Menu & Prices</a>
            </Button>
          </div>
        </Container>
      </Section>

      {/* STORY */}
      <Section id="story" className="bg-gradient-to-b from-emerald-50 to-amber-50">
        {bananaLeafSvg}
        <Container>
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Our Story</h2>
              <p className="mt-4 text-slate-700 leading-relaxed">
                Born from Hyderabadi passion and Indian street‑food nostalgia, Chai Bisket blends the warmth of
                traditional <em>chai addas</em> with a fresh, contemporary vibe. Think banana leaves, coastal breezes,
                and the timeless silhouettes of Charminar, Gateway of India, and the Taj — all on your plate, in your city.
              </p>
              <ul className="mt-6 grid sm:grid-cols-2 gap-3 text-sm">
                <li className="bg-white/70 rounded-xl p-3 border border-emerald-100">• House‑blend masalas</li>
                <li className="bg-white/70 rounded-xl p-3 border border-emerald-100">• Fresh, local ingredients</li>
                <li className="bg-white/70 rounded-xl p-3 border border-emerald-100">• Vegetarian & non‑veg favorites</li>
                <li className="bg-white/70 rounded-xl p-3 border border-emerald-100">• Chai & biscuit pairings</li>
              </ul>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-lg ring-1 ring-emerald-100">
                <SafeImage src={art.monuments} alt="Indian monuments collage" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow p-4 border border-amber-100">
                <div className="text-sm font-semibold">“Mass & class — same glass.”</div>
                <div className="text-xs text-slate-500">— Hyderabadi proverb (our vibe)</div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* LOCATION & HOURS */}
      <Section id="location" className="bg-white">
        <Container>
          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <Card className="rounded-3xl border-emerald-100">
              <CardHeader>
                <CardTitle className="text-2xl">Visit Us</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-slate-700">
                <div className="flex items-start gap-3">
                  <MapPin className="h-5 w-5 text-emerald-700 mt-1" />
                  <div>
                    <div className="font-medium">911 Market Pl Blvd, Suite L</div>
                    <div>Cumming, GA 30041</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Clock className="h-5 w-5 text-emerald-700 mt-1" />
                  <div>
                    <div className="font-medium">Hours</div>
                    <div>Mon–Thu: 11:00 AM – 9:30 PM</div>
                    <div>Fri–Sat: 11:00 AM – 10:30 PM</div>
                    <div>Sun: 11:00 AM – 9:00 PM</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Phone className="h-5 w-5 text-emerald-700 mt-1" />
                  <div>
                    <div className="font-medium">Call</div>
                    <div>(770) 555‑0123</div>
                  </div>
                </div>
                <div className="pt-2 flex gap-3">
                  <Button className="bg-emerald-700 hover:bg-emerald-800"><a href="#order">Order Online</a></Button>
                  <Button variant="outline" className="border-slate-300 hover:bg-emerald-50"><a href="#contact">Catering Inquiries</a></Button>
                </div>
              </CardContent>
            </Card>
            <div className="rounded-3xl overflow-hidden shadow-lg ring-1 ring-emerald-100 min-h-[320px] bg-slate-100">
              <div className="w-full h-full grid place-items-center bg-slate-200 text-slate-700">
                <div className="text-center p-6">
                  <div className="font-semibold mb-1">Map preview</div>
                  <a className="inline-block mt-2 px-4 py-2 rounded-lg bg-emerald-700 text-white" href="https://www.google.com/maps/search/?api=1&query=911+Market+Pl+Blvd+Suite+L,+Cumming,+GA+30041" target="_blank" rel="noreferrer">Open in Google Maps</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      {/* GALLERY */}
      <Section id="gallery" className="bg-amber-50/60">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Moments & Mood</h2>
            <p className="mt-3 text-slate-600">Swipe through the vibe — tag us on Instagram to get featured!</p>
          </div>
          <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-3">
            {art.gallery.map((src, i) => (
              <div key={i} className="aspect-square overflow-hidden rounded-2xl">
                <SafeImage
                  src={src}
                  alt={`Chai Bisket gallery ${i+1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-6">
            <Button variant="outline" className="border-slate-300">
              <a href="https://instagram.com/chaibisket_eats" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Instagram className="mr-2 h-4 w-4"/>Follow @chaibisket_eats
              </a>
            </Button>
          </div>
        </Container>
      </Section>

      {/* CONTACT / CATERING */}
      <Section id="contact" className="bg-white">
        <Container>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <Card className="rounded-3xl border-emerald-100">
              <CardHeader>
                <CardTitle>Contact & Catering</CardTitle>
              </CardHeader>
              <CardContent>

                <ContactForm />
              </CardContent>
            </Card>
            <div className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white rounded-3xl p-8 shadow-xl relative overflow-hidden">
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-white/10 rounded-full"/>
              <h3 className="text-2xl font-semibold">Hosting a Party?</h3>
              <p className="mt-3 text-emerald-50">From chai counters to biryani bars — we cater birthdays, office events, and desi celebrations.</p>
              <ul className="mt-4 space-y-2 text-emerald-100 text-sm">
                <li>• Customizable menus</li>
                <li>• Bulk chai, biscuits & snacks</li>
                <li>• On‑site live stations</li>
              </ul>
              <Button variant="secondary" className="mt-6 text-emerald-900 bg-white hover:bg-emerald-50">
                <a href="#contact">Get a Catering Quote</a>
              </Button>
            </div>
          </div>
        </Container>
      </Section>

      {/* FOOTER */}
      <footer className="bg-emerald-950 text-emerald-50">
        <Container className="py-10 grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-semibold">Chai Bisket LLC</div>
            <div className="text-emerald-200 text-sm">an Indian eatery</div>
            <p className="mt-3 text-emerald-200 text-sm max-w-sm">
              Light, emotional, and full of passion & food — welcome to your new chai adda in Cumming.
            </p>
          </div>
          <div>
            <div className="font-semibold mb-3">Quick Links</div>
            <ul className="space-y-2 text-emerald-200 text-sm">
              <li><a href="#menu" className="hover:text-white">Menu</a></li>
              <li><a href="#story" className="hover:text-white">Our Story</a></li>
              <li><a href="#location" className="hover:text-white">Location & Hours</a></li>
              <li><a href="#contact" className="hover:text-white">Catering</a></li>
            </ul>
          </div>
          <div>
            <div className="font-semibold mb-3">Find Us</div>
            <div className="text-sm text-emerald-200 flex items-start gap-2"><MapPin className="h-4 w-4 mt-1"/> 911 Market Pl Blvd, Suite L, Cumming, GA 30041</div>
            <div className="text-sm text-emerald-200 mt-2">Phone: (770) 555‑0123</div>
            <a href="https://instagram.com/chaibisket_eats" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 mt-4 text-emerald-100 hover:text-white">
              <Instagram className="h-4 w-4"/> Follow @chaibisket_eats
            </a>
          </div>
        </Container>
        <div className="border-t border-emerald-800">
          <Container className="py-4 text-xs text-emerald-300 flex flex-wrap items-center justify-between">
            <span>© {new Date().getFullYear()} Chai Bisket LLC. All rights reserved.</span>
            <span>Made with ❤ chai & biscuits.</span>
          </Container>
        </div>
      </footer>

      {/* KEYFRAMES */}
      <style>{`
        @keyframes marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
      `}</style>
    </div>
  );
}
