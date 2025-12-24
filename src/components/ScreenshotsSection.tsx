import { useState } from "react";
import { ChevronLeft, ChevronRight, MessageSquare, Wrench, Mic, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";

import screenshotChat from "@/assets/screenshot-chat.png";
import screenshotSettings from "@/assets/screenshot-settings.png";
import screenshotTools from "@/assets/screenshot-tools.png";
import screenshotVoice from "@/assets/screenshot-voice.png";

const screenshots = [
  {
    id: 1,
    image: screenshotChat,
    title: "Smart AI Chat",
    description: "Have natural conversations with your private AI assistant. Get instant answers without internet.",
    icon: MessageSquare,
    color: "teal",
  },
  {
    id: 2,
    image: screenshotTools,
    title: "Powerful AI Tools",
    description: "Access specialized tools like Summarizer, Translator, Rewriter, and Email Generator.",
    icon: Wrench,
    color: "orange",
  },
  {
    id: 3,
    image: screenshotVoice,
    title: "Voice Input",
    description: "Speak naturally to your AI. Voice recognition works entirely offline for complete privacy.",
    icon: Mic,
    color: "purple",
  },
  {
    id: 4,
    image: screenshotSettings,
    title: "Multiple AI Models",
    description: "Choose from various AI models optimized for different tasks and device capabilities.",
    icon: Settings,
    color: "green",
  },
];

const ScreenshotsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  const activeScreenshot = screenshots[activeIndex];
  const IconComponent = activeScreenshot.icon;

  const colorClasses = {
    teal: { bg: "bg-teal/10", text: "text-teal", border: "border-teal/30" },
    orange: { bg: "bg-orange/10", text: "text-orange", border: "border-orange/30" },
    purple: { bg: "bg-purple/10", text: "text-purple", border: "border-purple/30" },
    green: { bg: "bg-green/10", text: "text-green", border: "border-green/30" },
  };

  const colors = colorClasses[activeScreenshot.color as keyof typeof colorClasses];

  return (
    <section className="py-20 md:py-32 bg-muted/20 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">App Preview</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            See PrivateMind in{" "}
            <span className="text-gradient-primary">Action</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Explore the intuitive interface and powerful features that make PrivateMind your perfect offline AI companion.
          </p>
        </div>

        {/* Carousel */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Phone mockup */}
          <div className="relative flex justify-center order-1 lg:order-1">
            <div className="relative">
              {/* Phone frame */}
              <div className="relative w-[280px] sm:w-[320px] mx-auto">
                {/* Glow effect */}
                <div className={`absolute inset-0 ${colors.bg} blur-3xl scale-125 opacity-50`} />
                
                {/* Phone bezel */}
                <div className="relative bg-card rounded-[3rem] p-3 border-2 border-border shadow-2xl">
                  {/* Dynamic island */}
                  <div className="absolute top-6 left-1/2 -translate-x-1/2 w-24 h-7 bg-background rounded-full z-10" />
                  
                  {/* Screen */}
                  <div className="relative rounded-[2.5rem] overflow-hidden bg-background">
                    <img
                      src={activeScreenshot.image}
                      alt={activeScreenshot.title}
                      className="w-full h-auto transition-opacity duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Feature badge */}
              <div className={`absolute -bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} border ${colors.border} backdrop-blur-sm`}>
                <IconComponent className={`w-4 h-4 ${colors.text}`} />
                <span className={`text-sm font-medium ${colors.text}`}>{activeScreenshot.title}</span>
              </div>
            </div>
          </div>

          {/* Content & Controls */}
          <div className="space-y-8 order-2 lg:order-2">
            {/* Feature info */}
            <div className="text-center lg:text-left">
              <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-full ${colors.bg} border ${colors.border} mb-6`}>
                <IconComponent className={`w-5 h-5 ${colors.text}`} />
                <span className={`font-semibold ${colors.text}`}>{activeScreenshot.title}</span>
              </div>
              
              <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-4">
                {activeScreenshot.title}
              </h3>
              <p className="text-lg text-muted-foreground max-w-md mx-auto lg:mx-0">
                {activeScreenshot.description}
              </p>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center lg:justify-start gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="w-12 h-12 rounded-full"
              >
                <ChevronLeft className="w-5 h-5" />
              </Button>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      index === activeIndex
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="w-12 h-12 rounded-full"
              >
                <ChevronRight className="w-5 h-5" />
              </Button>
            </div>

            {/* Thumbnail previews */}
            <div className="flex justify-center lg:justify-start gap-3">
              {screenshots.map((screenshot, index) => {
                const thumbColors = colorClasses[screenshot.color as keyof typeof colorClasses];
                return (
                  <button
                    key={screenshot.id}
                    onClick={() => setActiveIndex(index)}
                    className={`w-16 h-16 rounded-xl overflow-hidden border-2 transition-all duration-300 ${
                      index === activeIndex
                        ? `${thumbColors.border} scale-110`
                        : "border-border/50 opacity-50 hover:opacity-80"
                    }`}
                  >
                    <img
                      src={screenshot.image}
                      alt={screenshot.title}
                      className="w-full h-full object-cover object-top"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ScreenshotsSection;
