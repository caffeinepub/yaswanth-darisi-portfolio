import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";
import {
  AlertCircle,
  CheckCircle2,
  Github,
  Linkedin,
  Loader2,
  Mail,
  MapPin,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import { useSubmitMessage } from "../hooks/useQueries";

const SOCIAL_LINKS = [
  {
    label: "Email",
    href: "mailto:yaswanth.d1768@gmail.com",
    display: "yaswanth.d1768@gmail.com",
    icon: Mail,
    ocid: "contact.email_link",
    color: "oklch(0.72 0.175 58)",
  },
  {
    label: "GitHub",
    href: "https://github.com/yaswanth1768",
    display: "github.com/yaswanth1768",
    icon: Github,
    ocid: "contact.github_link",
    color: "oklch(0.65 0 0)",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/darisi-yaswanth",
    display: "linkedin.com/in/darisi-yaswanth",
    icon: Linkedin,
    ocid: "contact.linkedin_link",
    color: "oklch(0.55 0.15 235)",
  },
];

const INFO_ITEMS = [
  {
    label: "Phone",
    display: "+91 9390019949",
    icon: Phone,
    ocid: "contact.phone_link",
    color: "oklch(0.62 0.15 200)",
  },
  {
    label: "Location",
    display: "Chennai, Tamil Nadu, India",
    icon: MapPin,
    ocid: "contact.location_link",
    color: "oklch(0.68 0.18 155)",
  },
];

export function ContactSection() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const { mutate, isPending, isSuccess, isError, reset } = useSubmitMessage();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !message.trim()) return;
    mutate(
      { name: name.trim(), email: email.trim(), message: message.trim() },
      {
        onSuccess: () => {
          setName("");
          setEmail("");
          setMessage("");
        },
      },
    );
  };

  return (
    <section
      id="contact"
      className="py-24 px-4 sm:px-6"
      style={{ backgroundColor: "var(--section-alt)" }}
    >
      <div className="max-w-5xl mx-auto">
        <div className="section-hidden">
          <p className="text-primary font-mono text-sm tracking-widest uppercase mb-3">
            Let's connect
          </p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-3 geo-line">
            Contact Me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Left: Info */}
          <div className="section-hidden space-y-6">
            <p className="text-muted-foreground leading-relaxed text-base">
              I'm always excited to discuss new projects, creative ideas, or
              opportunities to collaborate. Whether you have a question or just
              want to say hi — feel free to reach out!
            </p>

            {/* Social links */}
            <div className="space-y-3">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel={
                    link.href.startsWith("http")
                      ? "noopener noreferrer"
                      : undefined
                  }
                  data-ocid={link.ocid}
                  className="flex items-center gap-4 p-4 rounded-xl border bg-card hover:border-primary/40 transition-all duration-200 group card-hover"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-200 group-hover:scale-110"
                    style={{ background: `${link.color}22` }}
                  >
                    <link.icon
                      className="h-5 w-5"
                      style={{ color: link.color }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {link.label}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {link.display}
                    </p>
                  </div>
                </a>
              ))}

              {/* Non-clickable info rows */}
              {INFO_ITEMS.map((item) => (
                <div
                  key={item.label}
                  data-ocid={item.ocid}
                  className="flex items-center gap-4 p-4 rounded-xl border bg-card"
                >
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0"
                    style={{ background: `${item.color}22` }}
                  >
                    <item.icon
                      className="h-5 w-5"
                      style={{ color: item.color }}
                    />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-foreground">
                      {item.label}
                    </p>
                    <p className="text-xs text-muted-foreground truncate">
                      {item.display}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="section-hidden">
            <form
              onSubmit={handleSubmit}
              className="space-y-5 p-6 rounded-2xl border bg-card"
              noValidate
            >
              {/* Name */}
              <div className="space-y-1.5">
                <Label htmlFor="contact-name" className="text-sm font-medium">
                  Name
                </Label>
                <Input
                  id="contact-name"
                  type="text"
                  placeholder="Your full name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  autoComplete="name"
                  data-ocid="contact.input"
                  className="rounded-xl"
                  disabled={isPending || isSuccess}
                />
              </div>

              {/* Email */}
              <div className="space-y-1.5">
                <Label htmlFor="contact-email" className="text-sm font-medium">
                  Email
                </Label>
                <Input
                  id="contact-email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  autoComplete="email"
                  data-ocid="contact.email_input"
                  className="rounded-xl"
                  disabled={isPending || isSuccess}
                />
              </div>

              {/* Message */}
              <div className="space-y-1.5">
                <Label
                  htmlFor="contact-message"
                  className="text-sm font-medium"
                >
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  placeholder="What's on your mind?"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={4}
                  data-ocid="contact.textarea"
                  className="rounded-xl resize-none"
                  disabled={isPending || isSuccess}
                />
              </div>

              {/* Submit */}
              <Button
                type="submit"
                className="w-full rounded-xl gap-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
                disabled={
                  isPending ||
                  isSuccess ||
                  !name.trim() ||
                  !email.trim() ||
                  !message.trim()
                }
                data-ocid="contact.submit_button"
              >
                {isPending ? (
                  <>
                    <Loader2
                      className="h-4 w-4 animate-spin"
                      data-ocid="contact.loading_state"
                    />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4" />
                    Send Message
                  </>
                )}
              </Button>

              {/* Success state */}
              {isSuccess && (
                <output
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl border text-sm",
                    "bg-green-500/10 border-green-500/30 text-green-600 dark:text-green-400",
                  )}
                  aria-live="polite"
                  data-ocid="contact.success_state"
                >
                  <CheckCircle2 className="h-4 w-4 flex-shrink-0" />
                  <span>Message sent! I'll get back to you soon.</span>
                  <button
                    type="button"
                    onClick={reset}
                    className="ml-auto text-xs underline opacity-70 hover:opacity-100"
                  >
                    Send another
                  </button>
                </output>
              )}

              {/* Error state */}
              {isError && (
                <div
                  className={cn(
                    "flex items-center gap-3 p-3 rounded-xl border text-sm",
                    "bg-destructive/10 border-destructive/30 text-destructive",
                  )}
                  role="alert"
                  aria-live="assertive"
                  data-ocid="contact.error_state"
                >
                  <AlertCircle className="h-4 w-4 flex-shrink-0" />
                  <span>
                    Something went wrong. Please try again or reach out via
                    email.
                  </span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
