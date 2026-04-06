export function NikeFooter() {
  const year = new Date().getFullYear();
  const hostname =
    typeof window !== "undefined" ? window.location.hostname : "";
  const caffeineUrl = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(hostname)}`;

  return (
    <footer
      className="bg-[#0B0B0D] border-t border-white/10"
      data-ocid="footer.section"
    >
      <div className="max-w-7xl mx-auto px-6 py-10">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Nike mark */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <NikeSwooshSmall className="h-6 w-auto fill-white/80" />
            <p className="text-xs text-white/40 tracking-wider">
              &copy; {year} Nike, Inc. All Rights Reserved.
            </p>
          </div>

          {/* Footer links */}
          <nav className="flex flex-wrap justify-center md:justify-end gap-x-8 gap-y-2">
            {["Support", "Contact", "Legal", "Privacy", "Terms"].map((link) => (
              <a
                key={link}
                href={`/${link.toLowerCase()}`}
                className="text-xs font-semibold tracking-widest uppercase text-white/40 hover:text-white/80 transition-colors duration-200"
                data-ocid="footer.link"
              >
                {link}
              </a>
            ))}
          </nav>
        </div>

        {/* Caffeine attribution */}
        <div className="mt-8 pt-6 border-t border-white/5 text-center">
          <p className="text-xs text-white/25">
            &copy; {year}. Built with &hearts; using{" "}
            <a
              href={caffeineUrl}
              className="hover:text-white/50 transition-colors duration-200 underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
              data-ocid="footer.link"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function NikeSwooshSmall({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      viewBox="0 0 200 72"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-labelledby="nike-swoosh-footer-title"
    >
      <title id="nike-swoosh-footer-title">Nike</title>
      <path d="M190.4 0L55.9 55.1c-9.2 3.7-17.2 5.5-23.9 5.5-8.9 0-15.4-3.2-18.7-9.4-2.5-4.7-2.3-10.6.6-17.1 2.5-5.7 7-11.9 13.3-18.3L18 22C8.6 33.2 4 43.7 4 53.1c0 6.1 1.9 11.5 5.7 15.8 5.1 5.8 13.2 8.8 23.5 8.8 8.2 0 17.6-2.1 27.9-6.2L196 18.4 190.4 0z" />
    </svg>
  );
}
