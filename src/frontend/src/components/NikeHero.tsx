import { useEffect, useState } from "react";

const streakData = [
  {
    id: "s1",
    top: "20%",
    left: "5%",
    width: "35%",
    delay: "0s",
    duration: "3.2s",
    opacity: 0.7,
  },
  {
    id: "s2",
    top: "32%",
    left: "2%",
    width: "28%",
    delay: "0.4s",
    duration: "2.8s",
    opacity: 0.5,
  },
  {
    id: "s3",
    top: "45%",
    left: "8%",
    width: "42%",
    delay: "0.8s",
    duration: "3.5s",
    opacity: 0.65,
  },
  {
    id: "s4",
    top: "55%",
    left: "0%",
    width: "22%",
    delay: "1.2s",
    duration: "2.6s",
    opacity: 0.45,
  },
  {
    id: "s5",
    top: "65%",
    left: "4%",
    width: "38%",
    delay: "0.2s",
    duration: "3.8s",
    opacity: 0.6,
  },
  {
    id: "s6",
    top: "75%",
    left: "1%",
    width: "25%",
    delay: "1.6s",
    duration: "3s",
    opacity: 0.35,
  },
  {
    id: "s7",
    top: "18%",
    right: "5%",
    left: "auto",
    width: "20%",
    delay: "0.6s",
    duration: "4s",
    opacity: 0.3,
  },
  {
    id: "s8",
    top: "40%",
    right: "2%",
    left: "auto",
    width: "15%",
    delay: "1s",
    duration: "3.3s",
    opacity: 0.25,
  },
];

export function NikeHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), 50);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center overflow-hidden hero-bg pt-16"
      data-ocid="hero.section"
    >
      {/* Geometric red shard accents */}
      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
        style={{
          background:
            "radial-gradient(ellipse 60% 70% at 20% 60%, oklch(0.38 0.2 25 / 0.45) 0%, transparent 60%)",
        }}
      />

      {/* Motion streaks */}
      <div className="motion-streaks" aria-hidden="true">
        {streakData.map((streak) => (
          <div
            key={streak.id}
            className="streak"
            style={{
              top: streak.top,
              left: streak.left,
              right: streak.right,
              width: streak.width,
              opacity: streak.opacity,
              animationDelay: streak.delay,
              animationDuration: streak.duration,
            }}
          />
        ))}
        {/* Diagonal shard lines */}
        <svg
          role="presentation"
          aria-hidden="true"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          style={{ opacity: 0.15 }}
        >
          <line
            x1="0"
            y1="30%"
            x2="40%"
            y2="10%"
            stroke="oklch(0.52 0.22 25)"
            strokeWidth="1"
          />
          <line
            x1="0"
            y1="50%"
            x2="30%"
            y2="25%"
            stroke="oklch(0.52 0.22 25)"
            strokeWidth="0.5"
          />
          <line
            x1="0"
            y1="70%"
            x2="45%"
            y2="45%"
            stroke="oklch(0.52 0.22 25)"
            strokeWidth="1"
          />
          <line
            x1="5%"
            y1="85%"
            x2="35%"
            y2="60%"
            stroke="oklch(0.52 0.22 25)"
            strokeWidth="0.5"
          />
          <line
            x1="60%"
            y1="15%"
            x2="100%"
            y2="5%"
            stroke="oklch(0.52 0.22 25)"
            strokeWidth="0.5"
          />
          <line
            x1="70%"
            y1="30%"
            x2="100%"
            y2="20%"
            stroke="oklch(0.52 0.22 25)"
            strokeWidth="0.5"
          />
        </svg>
      </div>

      {/* Runner image — right side, absolute positioned */}
      <div
        className={`absolute bottom-0 right-0 h-full max-w-xs md:max-w-sm lg:max-w-md xl:max-w-lg pointer-events-none z-10 ${
          mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
        }`}
        style={{ transition: "opacity 1s ease, transform 1s ease" }}
        aria-hidden="true"
      >
        <img
          src="/assets/generated/nike-runner-transparent.dim_600x800.png"
          alt="Nike athlete sprinting"
          className="h-full w-auto object-contain object-bottom"
          style={{ filter: "drop-shadow(0 0 30px oklch(0.52 0.22 25 / 0.3))" }}
        />
      </div>

      {/* Hero content — centered */}
      <div className="relative z-20 w-full max-w-5xl mx-auto px-6 py-20 flex flex-col items-center text-center">
        {/* Kicker */}
        <p
          className={`text-xs md:text-sm font-semibold tracking-[0.3em] uppercase text-white/80 mb-6 transition-all duration-700 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ fontFamily: "'General Sans', sans-serif" }}
        >
          Exclusive Limited Giveaway
        </p>

        {/* Main Headline */}
        <h1
          className={`font-anton text-5xl sm:text-7xl md:text-8xl lg:text-9xl uppercase text-white leading-none tracking-tight mb-4 transition-all duration-700 delay-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
        >
          Win A <span style={{ color: "oklch(0.58 0.24 25)" }}>$1000</span>
          <br />
          Nike Gift Card
        </h1>

        {/* Subheadline */}
        <p
          className={`text-sm md:text-base font-semibold tracking-[0.15em] uppercase text-white/85 mb-10 transition-all duration-700 delay-200 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Enter now for your chance to win.{" "}
          <span className="font-bold" style={{ color: "oklch(0.58 0.24 25)" }}>
            Only 10 Days Left.
          </span>
        </p>

        {/* Gift Card Image */}
        <div
          className={`relative mb-10 transition-all duration-700 delay-300 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="animate-float-card animate-glow-pulse rounded-2xl overflow-hidden"
            style={{
              boxShadow:
                "0 0 40px 12px oklch(0.58 0.24 25 / 0.45), 0 0 100px 30px oklch(0.52 0.22 25 / 0.22), 0 20px 60px rgba(0,0,0,0.7)",
            }}
          >
            <img
              src="/assets/generated/nike-gift-card-transparent.dim_800x500.png"
              alt="Nike $1000 Gift Card"
              className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg object-contain"
            />
          </div>
        </div>

        {/* CTA Button */}
        <button
          type="button"
          className={`animate-cta-glow font-anton text-base md:text-lg tracking-widest uppercase px-12 py-4 text-white transition-all duration-200 hover:scale-105 active:scale-100 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{
            background: "oklch(0.52 0.22 25)",
            boxShadow:
              "0 4px 20px oklch(0.52 0.22 25 / 0.5), 0 2px 0 oklch(0.38 0.2 25)",
            borderRadius: "2px",
            transitionProperty: "transform, box-shadow, background",
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "oklch(0.58 0.24 25)";
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLButtonElement).style.background =
              "oklch(0.52 0.22 25)";
          }}
          data-ocid="hero.primary_button"
        >
          Claim Now
        </button>

        {/* Entry count social proof */}
        <p className="mt-5 text-xs tracking-widest uppercase text-white/40 font-semibold">
          12,847 entries so far &middot; Drawing ends April 15, 2026
        </p>
      </div>
    </section>
  );
}
