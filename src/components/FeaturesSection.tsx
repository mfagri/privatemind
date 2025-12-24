import { Shield, Zap, Mic, Wifi, Lock, Cpu } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const features = [
  {
    icon: Shield,
    title: "100% Private",
    description: "All AI processing happens entirely on your device. Your conversations, ideas, and data never leave your phone.",
    gradient: "gradient-border-teal",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
  },
  {
    icon: Zap,
    title: "Blazing Fast",
    description: "Optimized local AI models deliver instant responses without network latency. Experience AI at the speed of thought.",
    gradient: "gradient-border-purple",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
  },
  {
    icon: Mic,
    title: "Voice Enabled",
    description: "Speak naturally to your AI assistant. Voice recognition works offline, keeping your conversations completely private.",
    gradient: "gradient-border-orange",
    iconBg: "bg-orange/10",
    iconColor: "text-orange",
  },
  {
    icon: Wifi,
    title: "Works Offline",
    description: "No internet required. Use PrivateMind anywhere — on flights, in remote areas, or when you want to disconnect.",
    gradient: "gradient-border-green",
    iconBg: "bg-green/10",
    iconColor: "text-green",
  },
  {
    icon: Lock,
    title: "Zero Data Collection",
    description: "We can't see your data because we never receive it. True privacy by design, not just by policy.",
    gradient: "gradient-border-teal",
    iconBg: "bg-teal/10",
    iconColor: "text-teal",
  },
  {
    icon: Cpu,
    title: "Multiple AI Models",
    description: "Choose from various AI models optimized for different tasks. From ultra-fast responses to more detailed analysis.",
    gradient: "gradient-border-purple",
    iconBg: "bg-purple/10",
    iconColor: "text-purple",
  },
];

const FeaturesSection = () => {
  const { ref: headerRef, isVisible: headerVisible } = useScrollAnimation();
  const { ref: gridRef, isVisible: gridVisible } = useScrollAnimation({ threshold: 0.05 });

  return (
    <section id="features" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div
          ref={headerRef}
          className={`text-center max-w-3xl mx-auto mb-16 md:mb-20 transition-all duration-700 ${
            headerVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            AI That Respects Your{" "}
            <span className="text-gradient-primary">Privacy</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            PrivateMind combines powerful AI capabilities with uncompromising privacy protection. Everything runs locally on your device.
          </p>
        </div>

        {/* Features grid */}
        <div ref={gridRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`${feature.gradient} p-6 md:p-8 group hover:scale-[1.02] transition-all duration-500 ${
                gridVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative z-10">
                <div className={`w-14 h-14 rounded-xl ${feature.iconBg} flex items-center justify-center mb-6`}>
                  <feature.icon className={`w-7 h-7 ${feature.iconColor}`} />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">{feature.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
