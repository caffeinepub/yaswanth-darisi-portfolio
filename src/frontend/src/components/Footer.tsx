import { Heart } from "lucide-react";

export function Footer() {
  const year = new Date().getFullYear();
  const utmLink = `https://caffeine.ai?utm_source=caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(
    typeof window !== "undefined" ? window.location.hostname : "",
  )}`;

  return (
    <footer className="py-8 px-4 border-t">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
        <p className="font-mono">
          © {year}{" "}
          <span className="text-foreground font-medium">Darisi Yaswanth</span>.
          All rights reserved.
        </p>
        <p className="flex items-center gap-1.5">
          Built with <Heart className="h-3.5 w-3.5 text-primary fill-primary" />{" "}
          using{" "}
          <a
            href={utmLink}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline font-medium"
          >
            caffeine.ai
          </a>
        </p>
      </div>
    </footer>
  );
}
