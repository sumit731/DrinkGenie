import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface DrinkRecommendation {
  id: string;
  name: string;
  brand: string;
  type: string;
  taste: string[];
  price: string;
  description: string;
  pairings: string[];
  mixRecipes?: string[];
  alcohol_content: string;
  best_for: string;
  image_emoji: string;
}

interface DrinkResultsProps {
  recommendations: DrinkRecommendation[];
}

export const DrinkResults = ({ recommendations }: DrinkResultsProps) => {
  return (
    <section className="py-20 px-4 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Your Perfect Drink Matches</h2>
          <p className="text-muted-foreground text-lg">Curated recommendations based on your preferences</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {recommendations.map((drink) => (
            <Card key={drink.id} className="group p-6 bg-card/70 backdrop-blur-sm border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-card hover:-translate-y-2">
              {/* Drink Header */}
              <div className="text-center mb-4">
                <div className="text-6xl mb-3">{drink.image_emoji}</div>
                <h3 className="text-2xl font-bold text-foreground mb-1">{drink.name}</h3>
                <p className="text-primary font-semibold">{drink.brand}</p>
                <div className="flex justify-center gap-2 mt-2">
                  <Badge variant="secondary" className="text-xs">{drink.type}</Badge>
                  <Badge variant="outline" className="text-xs">{drink.alcohol_content}</Badge>
                </div>
              </div>

              {/* Price */}
              <div className="text-center mb-4">
                <span className="text-2xl font-bold text-accent">{drink.price}</span>
              </div>

              {/* Description */}
              <p className="text-muted-foreground text-sm mb-4 leading-relaxed">
                {drink.description}
              </p>

              {/* Taste Profile */}
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Taste Profile:</h4>
                <div className="flex flex-wrap gap-1">
                  {drink.taste.map((taste, index) => (
                    <Badge key={index} variant="outline" className="text-xs bg-primary/10">
                      {taste}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* Best For */}
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Perfect For:</h4>
                <p className="text-muted-foreground text-sm">{drink.best_for}</p>
              </div>

              {/* Pairings */}
              <div className="mb-4">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Great With:</h4>
                <p className="text-muted-foreground text-sm">{drink.pairings.join(', ')}</p>
              </div>

              {/* Mix Recipes */}
              {drink.mixRecipes && drink.mixRecipes.length > 0 && (
                <div className="mb-4">
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Try These Mixes:</h4>
                  <ul className="text-muted-foreground text-sm space-y-1">
                    {drink.mixRecipes.map((recipe, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <span className="text-accent">•</span>
                        <span>{recipe}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Action Button */}
              <div className="pt-4 border-t border-border/50">
                <Button 
                  variant="hero" 
                  className="w-full font-medium"
                >
                  Find Near Me 📍
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Fun Fact */}
        <div className="text-center mt-12 p-6 bg-card/30 backdrop-blur-sm rounded-lg border border-border/50">
          <p className="text-muted-foreground">
            <span className="text-accent font-semibold">Fun Fact:</span> These recommendations are based on popular Indian preferences and curated by our AI bartender! 🤖🍻
          </p>
        </div>
      </div>
    </section>
  );
};