import { Search, ShoppingBag } from "lucide-react";

export function NikeNavbar() {
  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 nav-blur"
      style={{
        background: "rgba(11,11,13,0.92)",
        borderBottom: "1px solid rgba(255,255,255,0.08)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Left: Nike Swoosh */}
        <div className="flex items-center gap-10">
          <a href="/" className="flex-shrink-0" data-ocid="nav.link">
            <NikeSwoosh className="h-8 w-auto fill-white" />
          </a>
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="/giveaways"
              className="text-xs font-semibold tracking-widest uppercase text-white hover:text-nike-red transition-colors duration-200"
              data-ocid="nav.link"
            >
              Giveaways
            </a>
            <a
              href="/partners"
              className="text-xs font-semibold tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-200"
              data-ocid="nav.link"
            >
              Partners
            </a>
          </nav>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-5">
            <a
              href="/signin"
              className="text-xs font-semibold tracking-widest uppercase text-white/70 hover:text-white transition-colors duration-200"
              data-ocid="nav.link"
            >
              Sign In
            </a>
            <a
              href="/signup"
              className="text-xs font-semibold tracking-widest uppercase text-white hover:text-nike-red transition-colors duration-200"
              data-ocid="nav.link"
            >
              Create Account
            </a>
          </div>
          <button
            type="button"
            className="text-white/70 hover:text-white transition-colors duration-200"
            aria-label="Search"
            data-ocid="nav.button"
          >
            <Search size={18} />
          </button>
          <button
            type="button"
            className="text-white/70 hover:text-white transition-colors duration-200"
            aria-label="Cart"
            data-ocid="nav.button"
          >
            <ShoppingBag size={18} />
          </button>
        </div>
      </div>
    </header>
  );
}

function NikeSwoosh({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 200 72"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-labelledby="nike-swoosh-title"
    >
      <title id="nike-swoosh-title">Nike</title>
      <path d="M190.4 0L55.9 55.1c-9.2 3.7-17.2 5.5-23.9 5.5-8.9 0-15.4-3.2-18.7-9.4-2.5-4.7-2.3-10.6.6-17.1 2.5-5.7 7-11.9 13.3-18.3L18 22C8.6 33.2 4 43.7 4 53.1c0 6.1 1.9 11.5 5.7 15.8 5.1 5.8 13.2 8.8 23.5 8.8 8.2 0 17.6-2.1 27.9-6.2L196 18.4 190.4 0z" />
    </svg>
  );
}
