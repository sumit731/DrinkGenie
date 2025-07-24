import heroImage from '@/assets/hero-image.jpg';

export const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-hero opacity-80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
          DrinkGenie
        </h1>
        <p className="text-xl md:text-2xl text-foreground/90 mb-8 max-w-2xl mx-auto leading-relaxed">
          Your AI-powered bartender for discovering the perfect Indian alcoholic drinks tailored to your taste, budget, and mood.
        </p>
        <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base text-muted-foreground">
          <span className="px-4 py-2 bg-card/50 rounded-lg backdrop-blur-sm">🥃 Premium Whiskey</span>
          <span className="px-4 py-2 bg-card/50 rounded-lg backdrop-blur-sm">🍺 Craft Beer</span>
          <span className="px-4 py-2 bg-card/50 rounded-lg backdrop-blur-sm">🍷 Fine Wine</span>
          <span className="px-4 py-2 bg-card/50 rounded-lg backdrop-blur-sm">🍹 Cocktails</span>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};