import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RecommendationInput } from '@/pages/Index';

interface RecommendationFormProps {
  onSubmit: (input: RecommendationInput) => void;
  isLoading: boolean;
}

export const RecommendationForm = ({ onSubmit, isLoading }: RecommendationFormProps) => {
  const [formData, setFormData] = useState<RecommendationInput>({
    groupSize: 'solo',
    taste: 'sweet',
    budget: '1000-2000',
    alcoholType: 'whiskey'
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
  };

  const SelectionButton = ({ 
    label, 
    value, 
    selectedValue, 
    onChange, 
    icon 
  }: { 
    label: string; 
    value: string; 
    selectedValue: string; 
    onChange: (value: any) => void; 
    icon?: string;
  }) => (
    <button
      type="button"
      onClick={() => onChange(value)}
      className={`p-4 rounded-lg border-2 transition-all duration-300 text-left hover:shadow-glow ${
        selectedValue === value
          ? 'border-primary bg-primary/10 shadow-glow'
          : 'border-border bg-card hover:border-primary/50'
      }`}
    >
      <div className="flex items-center gap-3">
        {icon && <span className="text-2xl">{icon}</span>}
        <span className="font-medium">{label}</span>
      </div>
    </button>
  );

  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Find Your Perfect Drink</h2>
          <p className="text-muted-foreground text-lg">Tell us your preferences and we'll recommend the ideal alcoholic beverage for you</p>
        </div>

        <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
          <form onSubmit={handleSubmit} className="space-y-8">
            {/* Group Size */}
            <div>
              <Label className="text-lg font-semibold mb-4 block">Drinking Occasion</Label>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <SelectionButton
                  label="Solo Drinking"
                  value="solo"
                  selectedValue={formData.groupSize}
                  onChange={(value) => setFormData(prev => ({ ...prev, groupSize: value }))}
                  icon="🧘"
                />
                <SelectionButton
                  label="Party Time"
                  value="party"
                  selectedValue={formData.groupSize}
                  onChange={(value) => setFormData(prev => ({ ...prev, groupSize: value }))}
                  icon="🎉"
                />
              </div>
            </div>

            {/* Taste Preference */}
            <div>
              <Label className="text-lg font-semibold mb-4 block">Taste Preference</Label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <SelectionButton
                  label="Sweet"
                  value="sweet"
                  selectedValue={formData.taste}
                  onChange={(value) => setFormData(prev => ({ ...prev, taste: value }))}
                  icon="🍯"
                />
                <SelectionButton
                  label="Fruity"
                  value="fruity"
                  selectedValue={formData.taste}
                  onChange={(value) => setFormData(prev => ({ ...prev, taste: value }))}
                  icon="🍓"
                />
                <SelectionButton
                  label="Bitter"
                  value="bitter"
                  selectedValue={formData.taste}
                  onChange={(value) => setFormData(prev => ({ ...prev, taste: value }))}
                  icon="🌿"
                />
                <SelectionButton
                  label="Strong"
                  value="strong"
                  selectedValue={formData.taste}
                  onChange={(value) => setFormData(prev => ({ ...prev, taste: value }))}
                  icon="🔥"
                />
                <SelectionButton
                  label="Light"
                  value="light"
                  selectedValue={formData.taste}
                  onChange={(value) => setFormData(prev => ({ ...prev, taste: value }))}
                  icon="☁️"
                />
              </div>
            </div>

            {/* Budget */}
            <div>
              <Label className="text-lg font-semibold mb-4 block">Budget Range</Label>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
                <SelectionButton
                  label="₹500-1000"
                  value="500-1000"
                  selectedValue={formData.budget}
                  onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                  icon="💰"
                />
                <SelectionButton
                  label="₹1000-2000"
                  value="1000-2000"
                  selectedValue={formData.budget}
                  onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                  icon="💵"
                />
                <SelectionButton
                  label="₹2000-3000"
                  value="2000-3000"
                  selectedValue={formData.budget}
                  onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                  icon="💸"
                />
                <SelectionButton
                  label="₹3000-5000"
                  value="3000-5000"
                  selectedValue={formData.budget}
                  onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                  icon="💎"
                />
                <SelectionButton
                  label="₹5000+"
                  value="5000+"
                  selectedValue={formData.budget}
                  onChange={(value) => setFormData(prev => ({ ...prev, budget: value }))}
                  icon="👑"
                />
              </div>
            </div>

            {/* Alcohol Type */}
            <div>
              <Label className="text-lg font-semibold mb-4 block">Preferred Alcohol Type</Label>
              <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
                <SelectionButton
                  label="Whiskey"
                  value="whiskey"
                  selectedValue={formData.alcoholType}
                  onChange={(value) => setFormData(prev => ({ ...prev, alcoholType: value }))}
                  icon="🥃"
                />
                <SelectionButton
                  label="Beer"
                  value="beer"
                  selectedValue={formData.alcoholType}
                  onChange={(value) => setFormData(prev => ({ ...prev, alcoholType: value }))}
                  icon="🍺"
                />
                <SelectionButton
                  label="Rum"
                  value="rum"
                  selectedValue={formData.alcoholType}
                  onChange={(value) => setFormData(prev => ({ ...prev, alcoholType: value }))}
                  icon="🍹"
                />
                <SelectionButton
                  label="Wine"
                  value="wine"
                  selectedValue={formData.alcoholType}
                  onChange={(value) => setFormData(prev => ({ ...prev, alcoholType: value }))}
                  icon="🍷"
                />
                <SelectionButton
                  label="Gin"
                  value="gin"
                  selectedValue={formData.alcoholType}
                  onChange={(value) => setFormData(prev => ({ ...prev, alcoholType: value }))}
                  icon="🍸"
                />
                <SelectionButton
                  label="Cocktails"
                  value="cocktails"
                  selectedValue={formData.alcoholType}
                  onChange={(value) => setFormData(prev => ({ ...prev, alcoholType: value }))}
                  icon="🍹"
                />
              </div>
            </div>

            <div className="text-center pt-6">
              <Button 
                type="submit" 
                disabled={isLoading}
                variant="hero"
                size="lg"
                className="px-8 py-4 text-lg font-semibold"
              >
                {isLoading ? '🔮 Finding Your Perfect Drink...' : '🔮 Get My Recommendation'}
              </Button>
            </div>
          </form>
        </Card>
      </div>
    </section>
  );
};