import { Button } from "@/components/ui/button";
import { Apple, Star } from "lucide-react";

const DownloadSection = () => {
  return (
    <section id="download" className="py-20 md:py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          {/* Rating */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-card border border-border mb-8">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 text-orange fill-orange" />
              ))}
            </div>
            <span className="text-sm text-muted-foreground">Loved by privacy-conscious users</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
            Ready to Take Your{" "}
            <span className="text-gradient-primary">Privacy Back</span>?
          </h2>
          
          <p className="mt-6 text-lg md:text-xl text-muted-foreground max-w-xl mx-auto">
            Download PrivateMind today and experience the freedom of AI that truly respects your privacy.
          </p>

          {/* Download button */}
          <div className="mt-10">
            <Button variant="appStore" size="xl" asChild className="text-lg px-12">
              <a 
                href="https://apps.apple.com/us/app/private-mind-offline-ai-chat/id6754819594" 
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
          <div className="mt-12 flex flex-wrap justify-center gap-8 text-sm text-muted-foreground">
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
