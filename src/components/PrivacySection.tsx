import { Shield, Server, Eye, Database, Cloud, Lock } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const PrivacySection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();
  const { ref: visualRef, isVisible: visualVisible } = useScrollAnimation();

  return (
    <section id="privacy" className="py-20 md:py-32 relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            ref={contentRef}
            className={`space-y-8 transition-all duration-700 ${
              contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
            }`}
          >
            <div>
              <span className="text-primary font-semibold text-sm uppercase tracking-wider">Privacy First</span>
              <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
                Your Data Stays{" "}
                <span className="text-gradient-primary">Yours</span>
              </h2>
              <p className="mt-6 text-lg text-muted-foreground">
                Unlike cloud-based AI tools, Meo AI Art runs entirely on your device. We built it this way because we believe your creations and data are private — period.
              </p>
            </div>

            <div className="space-y-6">
              {/* Privacy points */}
              <div
                className={`flex gap-4 transition-all duration-500 ${
                  contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "100ms" }}
              >
                <div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center shrink-0">
                  <Server className="w-6 h-6 text-teal" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">No Cloud Servers</h3>
                  <p className="text-muted-foreground">All AI processing happens locally. No data is ever sent to external servers.</p>
                </div>
              </div>

              <div
                className={`flex gap-4 transition-all duration-500 ${
                  contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "200ms" }}
              >
                <div className="w-12 h-12 rounded-xl bg-purple/10 flex items-center justify-center shrink-0">
                  <Eye className="w-6 h-6 text-purple" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">No Third-Party Access</h3>
                  <p className="text-muted-foreground">We can't read your conversations — and neither can anyone else.</p>
                </div>
              </div>

              <div
                className={`flex gap-4 transition-all duration-500 ${
                  contentVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-8"
                }`}
                style={{ transitionDelay: "300ms" }}
              >
                <div className="w-12 h-12 rounded-xl bg-green/10 flex items-center justify-center shrink-0">
                  <Database className="w-6 h-6 text-green" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-1">No Data Collection</h3>
                  <p className="text-muted-foreground">Zero analytics, zero tracking, zero data mining. Your privacy is not for sale.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Visual */}
          <div
            ref={visualRef}
            className={`relative transition-all duration-700 delay-200 ${
              visualVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
          >
            <div className="relative bg-card border border-border rounded-2xl p-8 md:p-12">
              {/* Shield icon */}
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-primary/10 rounded-2xl flex items-center justify-center glow-primary">
                <Shield className="w-12 h-12 text-primary" />
              </div>

              <div className="space-y-8">
                {/* Comparison */}
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-foreground flex items-center gap-2">
                    <Lock className="w-5 h-5 text-primary" />
                    Meo AI Art
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["On-device AI", "No internet needed", "Zero data sent", "100% private"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-green/20 flex items-center justify-center">
                          <span className="text-green text-xs">✓</span>
                        </div>
                        <span className="text-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="h-px bg-border" />

                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-muted-foreground flex items-center gap-2">
                    <Cloud className="w-5 h-5" />
                    Cloud AI Services
                  </h3>
                  <div className="grid grid-cols-2 gap-3">
                    {["Data on servers", "Requires internet", "Data collection", "Privacy policies"].map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm">
                        <div className="w-5 h-5 rounded-full bg-destructive/20 flex items-center justify-center">
                          <span className="text-destructive text-xs">✗</span>
                        </div>
                        <span className="text-muted-foreground">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
