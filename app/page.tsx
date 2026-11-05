// app/page.tsx
export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-amber-50 via-white to-emerald-50 text-slate-900">
      <div className="mx-auto max-w-3xl px-6 py-20">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Coming Soon 👀
        </h1>

        <p className="mt-6 text-lg md:text-xl text-slate-700">
          Coming soon in Atlanta,
          <br />
          911 Market Place, Suite L, Cumming, GA 30041
          <br />
          Stay tuned for more updates.
        </p>

        <p className="mt-6 text-sm text-slate-600">
          Watch for the latest updates — all happening on Instagram.
        </p>

        <a
          href="https://instagram.com/chaibisket_eats"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-block font-semibold text-emerald-700 hover:underline"
        >
          Follow @chaibisket_eats →
        </a>

        <div className="mt-6">
          <a
            href="https://toast.app/r/chaibisketcumming/order/r-9f821d95-74d6-4406-bf49-314857348548?diningOption=takeout"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center rounded-xl bg-emerald-700 px-7 py-3 font-semibold text-white shadow-sm transition-colors hover:bg-emerald-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-700"
          >
            Order Online ↗
          </a>
        </div>
      </div>
    </main>
  );
}
