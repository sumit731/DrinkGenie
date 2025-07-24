import { useState } from 'react';
import { HeroSection } from '@/components/HeroSection';
import { RecommendationForm } from '@/components/RecommendationForm';
import { DrinkResults } from '@/components/DrinkResults';
import { getDrinkRecommendations } from '@/lib/drinkDatabase';

export interface RecommendationInput {
  groupSize: 'solo' | 'party';
  taste: 'sweet' | 'fruity' | 'bitter' | 'strong' | 'light';
  budget: '500-1000' | '1000-2000' | '2000-3000' | '3000-5000' | '5000+';
  alcoholType: 'whiskey' | 'beer' | 'rum' | 'wine' | 'gin' | 'cocktails';
}

const Index = () => {
  const [recommendations, setRecommendations] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleRecommendation = async (input: RecommendationInput) => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const results = getDrinkRecommendations(input);
    setRecommendations(results);
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <RecommendationForm onSubmit={handleRecommendation} isLoading={isLoading} />
      {recommendations.length > 0 && (
        <DrinkResults recommendations={recommendations} />
      )}
    </div>
  );
};

export default Index;