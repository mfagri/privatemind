import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    id: 1,
    name: "Sarah M.",
    role: "Privacy Advocate",
    rating: 5,
    quote: "Finally, an AI assistant that respects my privacy! I can brainstorm sensitive work ideas without worrying about data leaks. This is how AI should be.",
    highlight: "respects my privacy",
  },
  {
    id: 2,
    name: "James T.",
    role: "Frequent Traveler",
    rating: 5,
    quote: "I use PrivateMind on long flights all the time. No Wi-Fi needed, instant responses. It's become my go-to travel companion for notes and translations.",
    highlight: "No Wi-Fi needed",
  },
  {
    id: 3,
    name: "Dr. Emily Chen",
    role: "Healthcare Professional",
    rating: 5,
    quote: "Patient confidentiality is paramount in my field. PrivateMind lets me use AI assistance without any compliance concerns. Absolutely brilliant.",
    highlight: "no compliance concerns",
  },
  {
    id: 4,
    name: "Marcus L.",
    role: "Software Developer",
    rating: 5,
    quote: "The speed is incredible. Responses are instant because everything runs locally. Plus, I love being able to choose different AI models based on my needs.",
    highlight: "Responses are instant",
  },
  {
    id: 5,
    name: "Anna K.",
    role: "Journalist",
    rating: 5,
    quote: "As a journalist, source protection is critical. PrivateMind gives me AI capabilities without exposing my research or contacts. Game changer.",
    highlight: "source protection",
  },
  {
    id: 6,
    name: "David R.",
    role: "Student",
    rating: 5,
    quote: "The voice input feature is amazing for taking notes during lectures. Works perfectly offline in my campus basement where there's no signal!",
    highlight: "voice input feature is amazing",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-32 relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />

      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Testimonials</span>
          <h2 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold text-foreground">
            Loved by{" "}
            <span className="text-gradient-primary">Privacy-Conscious</span> Users
          </h2>
          <p className="mt-6 text-lg text-muted-foreground">
            Join thousands of users who have taken back control of their privacy while enjoying powerful AI assistance.
          </p>
        </div>

        {/* Testimonials grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className="group bg-card border border-border rounded-2xl p-6 hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote icon */}
              <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center opacity-50 group-hover:opacity-100 transition-opacity">
                <Quote className="w-5 h-5 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-orange fill-orange" />
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-foreground mb-6 leading-relaxed">
                "{testimonial.quote.split(testimonial.highlight).map((part, i, arr) => (
                  <span key={i}>
                    {part}
                    {i < arr.length - 1 && (
                      <span className="text-primary font-semibold">{testimonial.highlight}</span>
                    )}
                  </span>
                ))}"
              </blockquote>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-sm font-bold text-foreground">
                    {testimonial.name.split(" ").map(n => n[0]).join("")}
                  </span>
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { value: "10K+", label: "Happy Users" },
            { value: "4.9", label: "App Store Rating" },
            { value: "100%", label: "Private & Secure" },
            { value: "0", label: "Data Collected" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl md:text-4xl font-bold text-gradient-primary">{stat.value}</p>
              <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
