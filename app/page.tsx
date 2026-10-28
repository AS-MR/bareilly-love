"use client";

import {
  ArrowDownIcon,
  ArrowTopRightOnSquareIcon,
  HeartIcon,
  MapPinIcon,
  SparklesIcon,
} from "@heroicons/react/24/outline";

const places = [
  {
    title: "Ala Hazrat Dargah",
    label: "Faith & heritage",
    copy: "One of Bareilly's best-known spiritual landmarks, tied to scholar and Sufi Ahmad Raza Khan Barelwi.",
    image: "https://upload.wikimedia.org/wikipedia/commons/a/a2/Gumbad_Of_Dargah_Aala_Hazrat_5.jpg",
  },
  {
    title: "Bareilly College",
    label: "Colonial character",
    copy: "A red-brick landmark that adds old-world academic character to the city's visual identity.",
    image: "https://www.collegebatch.com/static/clg-gallery/bareilly-college-bareilly-215192.webp",
  },
  {
    title: "The Jhumka",
    label: "A little icon",
    copy: "Bareilly's famous jhumka has become one of the city's most playful modern symbols—and an irresistible photo stop.",
    image: "https://static.newstrack.com/h-upload/2024/02/27/1680580-bareilly.jpg",
  },
  {
    title: "Bareilly Junction",
    label: "Arrivals & reunions",
    copy: "For millions of journeys, this is where Bareilly begins: a station connecting the city in every direction.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Bareilly_Junction_railway_station_02.jpg",
  },
];

const facts = [
  ["Region", "Rohilkhand"],
  ["Known as", "Nath Nagri · Zari Nagari"],
  ["Population", "44,48,359 (2011)"],
  ["Area", "4,120 km²"],
];

export default function Home() {
  return (
    <main className="noise min-h-screen overflow-hidden">
      <nav className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-7xl items-center justify-between px-5 py-5 md:px-8">
        <a href="#top" className="rounded-full border border-white/30 bg-[#2b2118]/55 px-4 py-2 text-sm font-semibold tracking-[0.22em] text-white backdrop-blur-md">
          BAREILLY
        </a>
        <div className="hidden items-center gap-1 rounded-full border border-white/25 bg-[#2b2118]/45 p-1 text-sm text-white backdrop-blur-md md:flex">
          <a href="#story" className="rounded-full px-4 py-2 hover:bg-white/10">The city</a>
          <a href="#places" className="rounded-full px-4 py-2 hover:bg-white/10">Places</a>
          <a href="#note" className="rounded-full px-4 py-2 hover:bg-white/10">One more reason</a>
        </div>
      </nav>

      <section id="top" className="relative flex min-h-[94vh] items-end">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('https://upload.wikimedia.org/wikipedia/commons/d/d3/Bareilly_Junction_railway_station_02.jpg')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#1c1712] via-[#1c1712]/45 to-[#1c1712]/25" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_18%,rgba(245,213,168,.20),transparent_28%)]" />

        <div className="relative z-10 mx-auto w-full max-w-7xl px-5 pb-16 pt-32 text-white md:px-8 md:pb-24">
          <div className="mb-5 flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.28em] text-white/70">
            <MapPinIcon className="h-4 w-4" /> Uttar Pradesh, India
          </div>
          <h1 className="max-w-5xl font-serif text-6xl leading-[0.92] tracking-[-0.04em] md:text-8xl lg:text-[8.5rem]">
            Bareilly,
            <span className="block italic text-[#f2c7c8]">worth falling for.</span>
          </h1>
          <div className="mt-8 flex max-w-3xl flex-col gap-7 md:flex-row md:items-end md:justify-between">
            <p className="max-w-xl text-base leading-7 text-white/78 md:text-lg">
              A city of old stories, sacred corners, zari craft, bustling streets and journeys toward the Kumaon hills. And for me, one very personal reason to remember its name.
            </p>
            <a href="#story" className="group flex shrink-0 items-center gap-3 text-sm font-semibold uppercase tracking-[0.18em] text-white/85">
              Discover Bareilly
              <span className="grid h-10 w-10 place-items-center rounded-full border border-white/30 transition group-hover:bg-white group-hover:text-[#2b2118]">
                <ArrowDownIcon className="h-4 w-4" />
              </span>
            </a>
          </div>
        </div>
      </section>

      <section id="story" className="mx-auto grid max-w-7xl gap-14 px-5 py-24 md:grid-cols-[.85fr_1.15fr] md:px-8 md:py-32">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.25em] text-[#8d4145]">More than a pin on the map</p>
          <h2 className="font-serif text-5xl leading-[1.02] tracking-[-0.035em] md:text-7xl">Ancient soul.<br /><span className="italic text-[#8d4145]">Living city.</span></h2>
        </div>
        <div className="flex flex-col justify-between gap-10">
          <p className="text-xl leading-9 text-[#51483f] md:text-2xl md:leading-10">
            Bareilly sits in Rohilkhand, roughly between Lucknow and Delhi. The district describes the city through many identities: <strong className="font-semibold text-[#2b2118]">Nath Nagri</strong>, <strong className="font-semibold text-[#2b2118]">Bareilly Sharif</strong>, and <strong className="font-semibold text-[#2b2118]">Zari Nagari</strong>—a place where temples, dargahs, education, craft and modern city life overlap.
          </p>
          <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-[#ded4c8] bg-[#ded4c8] sm:grid-cols-4">
            {facts.map(([k, v]) => (
              <div key={k} className="bg-[#fbf6ee] p-5">
                <div className="text-xs uppercase tracking-[0.2em] text-[#7c7166]">{k}</div>
                <div className="mt-2 font-serif text-lg font-semibold">{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="places" className="bg-[#2b2118] py-24 text-white md:py-32">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="mb-12 flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#d9a2a4]">Four glimpses</p>
              <h2 className="max-w-3xl font-serif text-5xl leading-none tracking-[-0.035em] md:text-7xl">A city with many moods.</h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-white/60">Sacred, historic, playful, familiar—Bareilly's character is better felt in contrasts than reduced to a single postcard.</p>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {places.map((place, i) => (
              <article key={place.title} className={`group relative min-h-[430px] overflow-hidden rounded-[2rem] ${i === 0 || i === 3 ? "md:min-h-[560px]" : ""}`}>
                <div className="absolute inset-0 bg-cover bg-center transition duration-700 group-hover:scale-105" style={{ backgroundImage: `url('${place.image}')` }} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-7 md:p-9">
                  <div className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-white/60">{place.label}</div>
                  <h3 className="font-serif text-4xl md:text-5xl">{place.title}</h3>
                  <p className="mt-3 max-w-lg text-sm leading-6 text-white/70 md:text-base">{place.copy}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-24 md:px-8 md:py-32">
        <div className="grid items-center gap-12 rounded-[2.5rem] border border-[#e0d5c9] bg-white/55 p-7 shadow-soft backdrop-blur-sm md:grid-cols-2 md:p-12 lg:p-16">
          <div>
            <SparklesIcon className="mb-7 h-8 w-8 text-[#b86063]" />
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#8d4145]">A city to experience slowly</p>
            <h2 className="mt-4 font-serif text-5xl leading-[1.02] tracking-[-0.035em] md:text-6xl">From heritage to <span className="italic text-[#8d4145]">everyday life.</span></h2>
            <p className="mt-6 max-w-xl text-lg leading-8 text-[#63594f]">
              The official tourism pages describe Bareilly as a gateway to Kumaon, with temples, dargahs, museums, universities, parks and shopping woven into one busy city. Its zardozi, bamboo work and furniture traditions add another layer to the story.
            </p>
            <a
              href="https://bareilly.nic.in/tourism/"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-flex items-center gap-2 rounded-full bg-[#2b2118] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5"
            >
              Official tourism page <ArrowTopRightOnSquareIcon className="h-4 w-4" />
            </a>
          </div>
          <div className="relative min-h-[480px] overflow-hidden rounded-[2rem] bg-[url('https://static.newstrack.com/h-upload/2024/02/27/1680580-bareilly.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-gradient-to-t from-[#2b2118]/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/25 bg-black/20 p-5 text-white backdrop-blur-md">
              <div className="text-xs uppercase tracking-[0.2em] text-white/70">Bareilly's playful side</div>
              <div className="mt-1 font-serif text-2xl">Jhumka gira re… and the city kept the story.</div>
            </div>
          </div>
        </div>
      </section>

      <section id="note" className="relative overflow-hidden bg-[#8d4145] px-5 py-28 text-white md:px-8 md:py-40">
        <div className="absolute -right-20 -top-24 h-96 w-96 rounded-full border border-white/10" />
        <div className="absolute -bottom-32 -left-20 h-[32rem] w-[32rem] rounded-full border border-white/10" />
        <div className="relative mx-auto max-w-5xl text-center">
          <HeartIcon className="mx-auto mb-8 h-8 w-8" />
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.28em] text-white/65">And then there is my reason</p>
          <h2 className="text-balance font-serif text-5xl leading-[1.05] tracking-[-0.04em] md:text-8xl">
            Bareilly has thousands of stories.
            <span className="mt-2 block italic text-[#ffd8d9]">My favourite one lives there.</span>
          </h2>
          <p className="mx-auto mt-8 max-w-2xl text-base leading-8 text-white/72 md:text-lg">
            Maybe that is why a railway station feels a little more romantic, a city name feels a little more familiar, and a place I haven't fully discovered yet already feels important.
          </p>
        </div>
      </section>

      <footer className="bg-[#211a14] px-5 py-10 text-white/55 md:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 text-sm md:flex-row md:items-center md:justify-between">
          <p>Made with affection for Bareilly, Uttar Pradesh.</p>
          <p>City facts adapted from the official Bareilly district website.</p>
        </div>
      </footer>
    </main>
  );
}
