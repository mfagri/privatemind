import { FileText, Pencil, Globe, Mail, CheckCircle, ImageIcon } from "lucide-react";

const tools = [
  {
    icon: FileText,
    title: "Summarizer",
    description: "Condense long text into key points instantly",
    gradient: "gradient-border-teal",
    iconBg: "bg-card",
    borderAccent: "border-l-teal",
  },
  {
    icon: Pencil,
    title: "Rewriter",
    description: "Improve writing tone and clarity effortlessly",
    gradient: "gradient-border-purple",
    iconBg: "bg-card",
    borderAccent: "border-l-purple",
  },
  {
    icon: Globe,
    title: "Translator",
    description: "Translate text to multiple languages offline",
    gradient: "gradient-border-green",
    iconBg: "bg-card",
    borderAccent: "border-l-green",
  },
  {
    icon: Mail,
    title: "Email Generator",
    description: "Generate professional email responses",
    gradient: "gradient-border-orange",
    iconBg: "bg-card",
    borderAccent: "border-l-orange",
  },
  {
    icon: CheckCircle,
    title: "Task Planner",
    description: "Organize and prioritize your tasks",
    gradient: "gradient-border-teal",
    iconBg: "bg-card",
    borderAccent: "border-l-teal",
  },
  {
    icon: ImageIcon,
    title: "Image Analysis",
    description: "Describe and analyze images privately",
    gradient: "gradient-border-purple",
    iconBg: "bg-card",
    borderAccent: "border-l-purple",
  },
];

const ToolsSection = () => {
  return (
    <section id="tools" className="py-20 md:py-32 bg-muted/30 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,hsl(var(--border))_1px,transparent_0)] bg-[size:40px_40px] opacity-30" />
      
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">AI Tools</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Powerful Utilities at Your{" "}
            <span className="text-gradient-purple">Fingertips</span>
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            PrivateMind comes packed with specialized AI tools designed to boost your productivity — all working completely offline.
          </p>
        </div>

        {/* Tools grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, index) => (
            <div
              key={tool.title}
              className="group bg-card border border-border rounded-xl overflow-hidden hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="p-6">
                <div className="flex items-start gap-4">
                  <div className={`w-12 h-12 rounded-xl ${tool.iconBg} border border-border flex items-center justify-center shrink-0 group-hover:border-primary/30 transition-colors`}>
                    <tool.icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-1">{tool.title}</h3>
                    <p className="text-sm text-muted-foreground">{tool.description}</p>
                  </div>
                </div>
              </div>
              <div className="px-6 pb-4">
                <div className="flex items-center gap-2 text-primary text-sm font-medium group-hover:gap-3 transition-all">
                  <span>Available offline</span>
                  <span className="w-2 h-2 rounded-full bg-green animate-pulse" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ToolsSection;
