'use client'

import { useState } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle, Zap, Target, DollarSign, Sparkles, Menu } from "lucide-react"
import Link from "next/link"

import '../app/gradient-animation.css';

export function LandingPageComponent() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setMessage('');
    try {
      const response = await fetch(
        'https://formspree.io/f/xdknrbeb', // Replace with your Formspree endpoint
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email }),
        }
      );
      
      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
      } else {
        setMessage('An error occurred. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      setMessage('An error occurred. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen animated-gradient text-white">
      <header className="px-6 lg:px-8 py-4 flex items-center justify-between">
        <Link className="flex items-center justify-center" href="#">
          <Sparkles className="h-6 w-6 mr-2" />
          <span className="font-bold text-lg">AIDAffiliator</span>
        </Link>
        <nav className="hidden md:flex gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#features">
            Features
          </Link>
          {/* <Link className="text-sm font-medium hover:underline underline-offset-4" href="#testimonials">
            Testimonials
          </Link> */}
        </nav>
        
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-6 w-6" />
        </Button>
      </header>
      <main className="flex-1 w-full">
        <section className="w-full py-24 md:py-32 lg:py-48">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <Badge variant="secondary" className="px-3 py-1 text-lg">
                🚀 Coming Soon: AIDAffiliator
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl/none max-w-4xl">
                Turn Clicks into Ka-Ching with AI-Powered Affiliate Marketing
              </h1>
              <p className="mx-auto max-w-2xl text-gray-300 text-xl md:text-2xl">
                Join the waitlist for your cheeky AI sidekick that crafts high-converting affiliate blog posts.
              </p>
              <div className="w-full max-w-md space-y-4">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                  <Input 
                    className="text-lg py-6" 
                    placeholder="Enter your email" 
                    type="email" 
                    name="email" // Add this for Formspree
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full text-lg py-6">Get Early Access</Button>
                  {message && <p className="text-sm text-center">{message}</p>}
                </form>
                <p className="text-sm text-gray-500">
                  Be the first to know when we launch. No spam, we promise!
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="w-full py-24 md:py-32 bg-gray-100" id="features">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16">
              Why You'll Love AIDAffiliator
            </h2>
            <div className="grid gap-16 sm:grid-cols-2 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <Zap className="h-14 w-14 mb-4 text-primary" />
                  <CardTitle>AIDA on Steroids</CardTitle>
                </CardHeader>
                <CardContent>
                  Attention, Interest, Desire, Action - all juiced up with AI to make your posts irresistible.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Target className="h-14 w-14 mb-4 text-primary" />
                  <CardTitle>Bullseye Targeting</CardTitle>
                </CardHeader>
                <CardContent>
                  Hit your audience's sweet spot with content so relevant, they'll think you're psychic.
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <DollarSign className="h-14 w-14 mb-4 text-primary" />
                  <CardTitle>Conversion Catalyst</CardTitle>
                </CardHeader>
                <CardContent>
                  Turn casual readers into buying machines faster than you can say "cha-ching!"
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/*<section className="w-full py-24 md:py-32 animated-gradient" id="testimonials">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-16 text-white">
              What Early Testers Are Saying
            </h2>
            <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>From Zero to Hero</CardTitle>
                </CardHeader>
                <CardContent>
                  "I went from affiliate zero to conversion hero in just a month! My bank account is doing a happy dance!" - Jane D., Blogging Newbie
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Laugh All the Way to the Bank</CardTitle>
                </CardHeader>
                <CardContent>
                  "AIDAffiliator's cheeky style had me in stitches, but it's my competitors who are crying now!" - Mike S., Affiliate Marketer
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>My Secret Weapon</CardTitle>
                </CardHeader>
                <CardContent>
                  "Shh, don't tell anyone, but AIDAffiliator is my secret weapon for dominating the affiliate game!" - Sarah L., Digital Nomad
                </CardContent>
              </Card>
            </div>
          </div>
        </section>*/}
        
        <section className="w-full py-24 md:py-32 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col items-center space-y-8 text-center">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl max-w-2xl">
                Be the First to Skyrocket Your Affiliate Earnings
              </h2>
              <p className="mx-auto max-w-[700px] text-gray-400 text-xl">
                Join the AIDAffiliator waitlist and get ready to revolutionize your affiliate marketing game!
              </p>
              <div className="w-full max-w-md space-y-4">
                <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
                  <Input 
                    className="text-lg py-6" 
                    placeholder="Enter your email" 
                    type="email" 
                    name="email" // Add this for Formspree
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <Button type="submit" className="w-full text-lg py-6">Join the Waitlist</Button>
                  {message && <p className="text-sm text-center">{message}</p>}
                </form>
                <p className="text-sm text-gray-400">
                  Early birds get special launch offers. Don't miss out!
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500">© 2023 AIDAffiliator. All rights reserved. No affiliates were harmed in the making of this software.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}