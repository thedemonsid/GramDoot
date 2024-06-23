import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const NationalNewsHomepage = () => {
  return (
    <div className="container px-4 py-8 mx-auto">
      <h1 className="mb-8 text-4xl font-bold text-center">National News</h1>
      <div className="flex flex-col gap-6 md:flex-row">
        {/* Left column */}
        <div className="w-full space-y-4 md:w-1/4">
          <Card>
            <CardHeader>
              <CardTitle>Breaking News</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Major policy change announced by government</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Weather Update</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Unexpected heatwave to hit coastal regions</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Scientists discover potential cure for common cold</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Scientists discover potential cure for common cold</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Scientists discover potential cure for common cold</p>
            </CardContent>
          </Card>
          
        </div>

        {/* Middle column */}
        <div className="w-full space-y-6 md:w-1/2">
          <Card className="overflow-hidden">
            <img 
              src="moodyzee.jpeg" 
              alt="Featured news" 
              className="object-cover w-screen h-fit"
            />
            <CardHeader>
              <CardTitle>Featured Story: Economic Summit</CardTitle>
            </CardHeader>
            <CardContent>
              <p>World leaders gather to discuss global economic challenges</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Technology</CardTitle>
            </CardHeader>
            <CardContent>
              <p>New breakthrough in renewable energy storage</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Scientists discover potential cure for common cold</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Scientists discover potential cure for common cold</p>
            </CardContent>
          </Card>
        </div>

        {/* Right column */}
        <div className="w-full space-y-4 md:w-1/4">
        <Card>
            <CardHeader>
              <CardTitle>Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Scientists discover potential cure for common cold</p>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle>Sports</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Underdog team wins national championship</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Entertainment</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Anticipated blockbuster breaks box office records</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Scientists discover potential cure for common cold</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Health</CardTitle>
            </CardHeader>
            <CardContent>
              <p>Scientists discover potential cure for common cold</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default NationalNewsHomepage;