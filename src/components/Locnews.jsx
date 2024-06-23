"use client";
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ThumbsUp } from 'lucide-react';

const NewsCard = ({ title, content }) => {
  const [upvotes, setUpvotes] = useState(0);

  const handleUpvote = () => {
    setUpvotes(prevUpvotes => prevUpvotes + 1);
  };

  const getCardStyle = () => {
    const scale = 1 + Math.floor(upvotes / 10) * 0.1; // Increase size by 10% every 10 upvotes
    const maxScale = 1.5; // Cap the maximum scale at 50% larger
    const actualScale = Math.min(scale, maxScale);
    
    const style = {
      transform: `scale(${actualScale})`,
      transition: 'transform 0.3s ease-in-out',
      zIndex: upvotes, // Ensure larger cards appear above smaller ones
    };

    if (actualScale === maxScale) {
      style.backgroundColor = 'rgba(255, 0, 0, 0.1)'; // Light red tint when max size is reached
    }

    return style;
  };

  return (
    <Card className="relative mb-4" style={getCardStyle()}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{content}</p>
        <Button 
          className="mt-2" 
          variant="outline" 
          size="sm" 
          onClick={handleUpvote}
        >
          <ThumbsUp className="w-4 h-4 mr-2" />
          Upvote ({upvotes})
        </Button>
      </CardContent>
    </Card>
  );
};

const LocalNewsHomepage = () => {
  const newsItems = [
    { title: "Local Park Renovation", content: "City council approves funding for central park upgrades" },
    { title: "New Restaurant Opening", content: "Famous chef brings gourmet experience to downtown" },
    { title: "School District Achievement", content: "Local high school ranks top in state standardized tests" },
    { title: "Community Clean-up Drive", content: "Volunteers gather for annual city-wide clean-up event" },
    { title: "Local Artist Exhibition", content: "Art museum showcases works of talented local artists" },
    { title: "Traffic Update", content: "Major intersection closed for repairs, expect delays" },
    { title: "Farmers Market Expansion", content: "Popular farmers market to open second location" },
    { title: "Youth Sports Tournament", content: "Little League championship brings teams from across the region" },
    { title: "New Tech Startup", content: "Local entrepreneur launches innovative app" },
  ];

  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">Local News</h1>
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Left column */}
        <div className="w-full space-y-4 md:w-1/4">
          {newsItems.slice(0, 3).map((item, index) => (
            <NewsCard key={index} title={item.title} content={item.content} />
          ))}
        </div>

        {/* Middle column */}
        <div className="w-full space-y-4 md:w-1/2">
          <Card className="mb-4 overflow-hidden">
            <img 
              src="moodyzee.jpeg" 
              alt="Featured local news" 
              className="object-cover w-full h-fit"
            />
            <CardHeader>
              <CardTitle>Featured: Community Festival</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Annual summer festival brings together local businesses and residents</p>
            </CardContent>
          </Card>
          {newsItems.slice(3, 6).map((item, index) => (
            <NewsCard key={index} title={item.title} content={item.content} />
          ))}
        </div>

        {/* Right column */}
        <div className="w-full space-y-4 md:w-1/4">
          {newsItems.slice(6).map((item, index) => (
            <NewsCard key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LocalNewsHomepage;