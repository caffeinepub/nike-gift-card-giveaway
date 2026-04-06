import { Facebook, Instagram, Twitter } from "lucide-react";

const steps = [
  {
    num: "01",
    title: "Enter Your Details",
    desc: "Fill out the entry form with your name and email to secure your spot.",
  },
  {
    num: "02",
    title: "Share With Friends",
    desc: "Boost your chances by sharing the giveaway with your network.",
  },
  {
    num: "03",
    title: "Winner Announced",
    desc: "The lucky winner is announced live on April 15th, 2026.",
  },
];

const products = [
  {
    name: "Air Max 270",
    category: "Running",
    price: "$189",
  },
  {
    name: "React Infinity",
    category: "Training",
    price: "$159",
  },
  {
    name: "Pegasus 40",
    category: "Road Running",
    price: "$134",
  },
];

const testimonials = [
  {
    initials: "KM",
    name: "Kayla M.",
    color: "#E10600",
    quote:
      "Won last year's giveaway! The Air Max 270s are incredible — thank you Nike!",
    location: "Portland, OR",
  },
  {
    initials: "JR",
    name: "James R.",
    color: "#2563EB",
    quote: "Used my gift card on a full running kit. Best birthday gift ever.",
    location: "Austin, TX",
  },
  {
    initials: "ST",
    name: "Sofia T.",
    color: "#059669",
    quote: "Entered on a whim and won $1000! Don't miss this chance.",
    location: "Miami, FL",
  },
];

const STARS = [1, 2, 3, 4, 5];

export function NikeContentBand() {
  return (
    <section
      className="relative bg-[#F2F3F5] diagonal-band pt-24 pb-16"
      data-ocid="content.section"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-8">
          {/* Column 1: How It Works */}
          <div data-ocid="howit.panel">
            <h2
              className="font-anton text-xl tracking-widest uppercase text-[#0B0B0D] mb-8 pb-3 border-b-2"
              style={{ borderColor: "oklch(0.52 0.22 25)" }}
            >
              How It Works
            </h2>
            <div className="space-y-6">
              {steps.map((step, i) => (
                <div
                  key={step.num}
                  className="flex items-start gap-4"
                  data-ocid={`howit.item.${i + 1}`}
                >
                  <div
                    className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-white text-sm font-bold"
                    style={{ background: "oklch(0.52 0.22 25)" }}
                  >
                    {step.num}
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm uppercase tracking-wider text-[#0B0B0D] mb-1">
                      {step.title}
                    </h3>
                    <p className="text-sm text-[#555] leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Entry form teaser */}
            <div
              className="mt-8 p-5 rounded border border-[#D9DDE3]"
              style={{ background: "#fff" }}
              data-ocid="entry.panel"
            >
              <p className="text-xs font-bold tracking-widest uppercase text-[#0B0B0D] mb-3">
                Quick Entry
              </p>
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2.5 text-sm border border-[#D9DDE3] rounded-sm text-[#0B0B0D] bg-[#F9F9FA] focus:outline-none mb-3"
                data-ocid="entry.input"
              />
              <button
                type="button"
                className="w-full py-2.5 text-xs font-bold tracking-widest uppercase text-white rounded-sm transition-all duration-200 hover:scale-[1.02]"
                style={{
                  background: "oklch(0.52 0.22 25)",
                  boxShadow: "0 2px 10px oklch(0.52 0.22 25 / 0.35)",
                }}
                data-ocid="entry.submit_button"
              >
                Enter Giveaway
              </button>
            </div>
          </div>

          {/* Column 2: Featured Nike Gear */}
          <div data-ocid="featured.panel">
            <h2
              className="font-anton text-xl tracking-widest uppercase text-[#0B0B0D] mb-8 pb-3 border-b-2"
              style={{ borderColor: "oklch(0.52 0.22 25)" }}
            >
              Featured Nike Gear
            </h2>

            {/* Shoes image */}
            <div className="mb-6 rounded overflow-hidden bg-white border border-[#D9DDE3]">
              <img
                src="/assets/generated/nike-shoes-transparent.dim_900x500.png"
                alt="Nike running shoes collection"
                className="w-full object-cover"
              />
            </div>

            {/* Product tiles */}
            <div className="grid grid-cols-3 gap-3">
              {products.map((p, i) => (
                <div
                  key={p.name}
                  className="bg-white rounded border border-[#D9DDE3] p-3 text-center hover:shadow-md transition-shadow duration-200 cursor-pointer"
                  data-ocid={`featured.item.${i + 1}`}
                >
                  <div
                    className="w-8 h-8 rounded-full mx-auto mb-2 flex items-center justify-center"
                    style={{ background: "oklch(0.52 0.22 25 / 0.1)" }}
                  >
                    <span
                      style={{ color: "oklch(0.52 0.22 25)", fontSize: "16px" }}
                      role="img"
                      aria-label="shoe"
                    >
                      &#128095;
                    </span>
                  </div>
                  <p className="text-xs font-bold text-[#0B0B0D] leading-tight">
                    {p.name}
                  </p>
                  <p className="text-[10px] text-[#888] mt-0.5">{p.category}</p>
                  <p
                    className="text-xs font-bold mt-1"
                    style={{ color: "oklch(0.52 0.22 25)" }}
                  >
                    {p.price}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-4 text-xs text-[#888] text-center">
              Use your $1,000 gift card on any Nike product
            </p>
          </div>

          {/* Column 3: Success Stories */}
          <div data-ocid="stories.panel">
            <h2
              className="font-anton text-xl tracking-widest uppercase text-[#0B0B0D] mb-8 pb-3 border-b-2"
              style={{ borderColor: "oklch(0.52 0.22 25)" }}
            >
              Success Stories
            </h2>
            <div className="space-y-5">
              {testimonials.map((t, i) => (
                <div
                  key={t.name}
                  className="bg-white rounded border border-[#D9DDE3] p-4 hover:shadow-md transition-shadow duration-200"
                  data-ocid={`stories.item.${i + 1}`}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0"
                      style={{ background: t.color }}
                    >
                      {t.initials}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-[#0B0B0D]">
                        {t.name}
                      </p>
                      <p className="text-xs text-[#888]">{t.location}</p>
                    </div>
                    <div className="ml-auto flex gap-0.5" aria-label="5 stars">
                      {STARS.map((n) => (
                        <span
                          key={n}
                          style={{ color: "#F59E0B", fontSize: "12px" }}
                          aria-hidden="true"
                        >
                          &#9733;
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="text-sm text-[#444] leading-relaxed italic">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                </div>
              ))}
            </div>

            {/* Social icons */}
            <div className="mt-8 pt-6 border-t border-[#D9DDE3]">
              <p className="text-xs font-bold tracking-widest uppercase text-[#888] mb-4">
                Follow Us
              </p>
              <div className="flex items-center gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0B0B0D] flex items-center justify-center text-white hover:bg-[#E10600] transition-colors duration-200"
                  aria-label="Instagram"
                  data-ocid="social.link"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0B0B0D] flex items-center justify-center text-white hover:bg-[#E10600] transition-colors duration-200"
                  aria-label="Twitter / X"
                  data-ocid="social.link"
                >
                  <Twitter size={14} />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#0B0B0D] flex items-center justify-center text-white hover:bg-[#E10600] transition-colors duration-200"
                  aria-label="Facebook"
                  data-ocid="social.link"
                >
                  <Facebook size={14} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
