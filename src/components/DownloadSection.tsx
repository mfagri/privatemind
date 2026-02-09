import { Button } from "@/components/ui/button";
import { Apple, Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const DownloadSection = () => {
  const { ref: contentRef, isVisible: contentVisible } = useScrollAnimation();

  return (
    <section id="download" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={contentRef}
          className={`max-w-3xl mx-auto text-center transition-all duration-700 ${
            contentVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          {/* Rating */}
          <div
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8 transition-all duration-500 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-orange fill-orange" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Loved by privacy-conscious users</span>
          </div>

          <h2
            className={`text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground transition-all duration-500 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            Ready to Take Your{" "}
            <span className="text-gradient-primary">Privacy Back</span>?
          </h2>
          
          <p
            className={`mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto transition-all duration-500 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "300ms" }}
          >
            Download Meo AI Art today and start creating stunning AI-generated artwork.
          </p>

          {/* Download button */}
          <div
            className={`mt-10 transition-all duration-500 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "400ms" }}
          >
            <Button variant="appStore" size="xl" asChild className="text-lg px-12">
              <a 
                href="https://apps.apple.com/us/app/meo-ai-art-image-generator/id6755818360" 
                target="_blank" 
                rel="noopener noreferrer"
                className="gap-3"
              >
                <Apple className="w-7 h-7" />
                Download on App Store
              </a>
            </Button>
          </div>

          {/* Trust badges */}
          <div
            className={`mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground transition-all duration-500 ${
              contentVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
            style={{ transitionDelay: "500ms" }}
          >
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-green" />
              Free to Download
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-teal" />
              No Account Required
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full bg-purple" />
              Works Offline
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadSection;
