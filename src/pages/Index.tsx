import React from 'react';
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageSquare, Phone, Film, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center">        <div className="flex items-center">
          <img src="/lovable-uploads/83b6ed76-491d-4cee-96e2-c8e5f35ed908.png" alt="Fluence AI Logo" className="h-8 w-8 mr-2" />
          <span className="text-xl font-bold bg-gradient-to-r from-[#33C3F0] to-[#3B34DC] bg-clip-text text-transparent">
            Fluence AI
          </span>
        </div>
        <div className="space-x-4 hidden md:block">
          <Button variant="ghost" className="text-white hover:text-[#9b87f5]">Features</Button>
          <Button variant="ghost" className="text-white hover:text-[#9b87f5]">Pricing</Button>
          <Button variant="ghost" className="text-white hover:text-[#9b87f5]">Testimonials</Button>
          <Button variant="ghost" className="text-white hover:text-[#9b87f5]">FAQ</Button>
        </div>
        <div>
          <Button variant="outline" className="mr-2 border-[#9b87f5] text-white hover:bg-[#9b87f5]/10">Login</Button>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">Sign Up</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-20 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Let Your AI Clone Talk to Your Fans — 
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] bg-clip-text text-transparent">
              Even When You Can't.
            </span>
          </h1>
          <p className="text-xl text-gray-300 mb-8">
            Scale your voice, replies, and personality across comments, DMs, and calls — effortlessly.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white" asChild>
              <Link to="/dashboard">Create Your Clone</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-[#33C3F0] text-[#33C3F0] hover:bg-[#33C3F0]/10" asChild>
              <Link to="/dashboard">Video Guide</Link>
            </Button>
          </div>
        </div>
        <div className="md:w-1/2 relative">
          <div className="bg-[#222222] rounded-lg p-6 shadow-[0_0_30px_rgba(155,135,245,0.3)]">
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] mr-3"></div>
              <div>
                <p className="font-bold">Tech Burner</p>
                <p className="text-sm text-gray-400">Original Creator</p>
              </div>
            </div>
            <div className="mb-4">
              <p className="text-sm text-gray-300">Replying to @fan_username</p>
              <p>Thanks for watching my latest video! The camera setup details are in the description. Let me know if you have other questions!</p>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <div className="flex items-center mr-4">
                <span className="bg-[#9b87f5] px-2 py-1 rounded text-xs mr-2">AI</span>
                <span>2m ago</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-[#222222] rounded-lg p-4 shadow-[0_0_20px_rgba(30,174,219,0.3)]">
            <p className="text-xs text-[#33C3F0]">Replying with your voice & style, 24/7</p>
          </div>
        </div>
      </section>

      {/* Product Overview */}
      <section className="bg-[#222222] py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">How CreatorClone Works</h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Your AI clone learns your voice, style, and knowledge to engage with your audience across platforms.
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h3 className="text-2xl font-bold mb-4 text-[#9b87f5]">Train Your AI Clone</h3>
              <p className="text-gray-300 mb-4">
                Our system analyzes your content, voice patterns, and response style to create an accurate digital copy of your online persona.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center">
                  <Film className="text-[#33C3F0] mr-2" />
                  <span>Video Content</span>
                </div>
                <div className="flex items-center">
                  <MessageSquare className="text-[#33C3F0] mr-2" />
                  <span>Past Comments</span>
                </div>
                <div className="flex items-center">
                  <Phone className="text-[#33C3F0] mr-2" />
                  <span>Voice Samples</span>
                </div>
                <div className="flex items-center">
                  <Shield className="text-[#33C3F0] mr-2" />
                  <span>Safe & Private</span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 bg-[#1A1F2C] rounded-lg p-6 shadow-lg">
              <div className="w-full h-64 bg-gradient-to-br from-[#1A1F2C] to-[#000000e6] rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] mx-auto mb-4 flex items-center justify-center">
                    <Film className="text-white" size={32} />
                  </div>
                  <p className="text-[#9b87f5]">AI Learning in Progress</p>
                  <div className="w-full bg-[#222222] h-2 rounded-full mt-4">
                    <div className="bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] h-2 rounded-full" style={{width: '75%'}}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="order-2 md:order-1 md:w-1/2 bg-[#1A1F2C] rounded-lg p-6 shadow-lg">
              <div className="bg-[#222222] rounded-lg p-4 mb-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] mr-2"></div>
                  <p>Your AI Clone</p>
                </div>
                <p className="mt-2">Thanks for reaching out! I'd love to collaborate on your project. Let me check my schedule and get back to you with some ideas.</p>
              </div>
              <div className="bg-[#2d2d2d] rounded-lg p-4">
                <div className="flex items-center mb-2">
                  <Phone className="text-[#33C3F0] mr-2" size={16} />
                  <p className="text-sm">Voice Call</p>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-6 h-6 rounded-full bg-gray-600 mr-2"></div>
                    <p className="text-sm">Fan Call</p>
                  </div>
                  <p className="text-xs text-gray-400">2:34</p>
                </div>
                <div className="w-full bg-[#1A1F2C] h-1 rounded-full mt-2">
                  <div className="bg-[#33C3F0] h-1 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>
            <div className="order-1 md:order-2 md:w-1/2 mb-10 md:mb-0 md:pl-8">
              <h3 className="text-2xl font-bold mb-4 text-[#D946EF]">Engage Across Platforms</h3>
              <p className="text-gray-300 mb-4">
                Your AI clone responds to comments, DMs, and even takes calls with your voice and personality.
              </p>
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center mr-4">
                    <MessageSquare className="text-[#D946EF]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">YouTube Comments</p>
                    <p className="text-sm text-gray-400">Reply to thousands of fans automatically</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center mr-4">
                    <MessageSquare className="text-[#D946EF]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Instagram & Twitter DMs</p>
                    <p className="text-sm text-gray-400">Never miss a message from fans</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-[#222222] flex items-center justify-center mr-4">
                    <Phone className="text-[#D946EF]" size={20} />
                  </div>
                  <div>
                    <p className="font-semibold">Voice Calls & Messages</p>
                    <p className="text-sm text-gray-400">Personal connection at scale</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Key Features</h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Everything you need to scale your creator presence and engage with your audience.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-[#222222] border-[#333333]">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#33C3F0] flex items-center justify-center mb-4">
                <MessageSquare className="text-white" />
              </div>
              <CardTitle className="text-white">AI Replies</CardTitle>
              <CardDescription className="text-gray-400">YouTube Comments & DMs</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Automatically reply to comments and messages in your voice and style, with contextual awareness of your content.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-[#9b87f5] p-0 hover:text-[#33C3F0] hover:bg-transparent">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-[#222222] border-[#333333]">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#D946EF] flex items-center justify-center mb-4">
                <Phone className="text-white" />
              </div>
              <CardTitle className="text-white">Voice Cloning</CardTitle>
              <CardDescription className="text-gray-400">Fan Calls & Voice Messages</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Your AI clone can talk to fans with your voice, creating personalized audio messages and taking calls.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-[#9b87f5] p-0 hover:text-[#D946EF] hover:bg-transparent">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-[#222222] border-[#333333]">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#33C3F0] to-[#9b87f5] flex items-center justify-center mb-4">
                <Film className="text-white" />
              </div>
              <CardTitle className="text-white">Memory Training</CardTitle>
              <CardDescription className="text-gray-400">From Past Videos & Tweets</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Your clone is trained on your content history, ensuring it has deep knowledge of your opinions and expertise.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-[#9b87f5] p-0 hover:text-[#33C3F0] hover:bg-transparent">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-[#222222] border-[#333333]">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D946EF] to-[#33C3F0] flex items-center justify-center mb-4">
                <Shield className="text-white" />
              </div>
              <CardTitle className="text-white">Safe & Moderated</CardTitle>
              <CardDescription className="text-gray-400">Always-On AI Protection</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-300">
                Advanced moderation ensures your AI clone always stays on brand and responds appropriately.
              </p>
            </CardContent>
            <CardFooter>
              <Button variant="ghost" className="text-[#9b87f5] p-0 hover:text-[#D946EF] hover:bg-transparent">
                Learn more <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-[#222222] py-20">
        <div className="container mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Creator Testimonials</h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            See how other creators are scaling their engagement with CreatorClone.ai.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1A1F2C] to-[#000000e6] p-1 rounded-lg">
              <div className="bg-[#1A1F2C] rounded-lg p-6 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#333333] mr-4"></div>
                  <div>
                    <p className="font-bold">@CodeWithAryan</p>
                    <p className="text-sm text-gray-400">100K Subscribers</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "My AI clone now replies to 90% of my comments. Game changer! I can focus on creating while still maintaining high engagement."
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#9b87f5]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A1F2C] to-[#000000e6] p-1 rounded-lg">
              <div className="bg-[#1A1F2C] rounded-lg p-6 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#333333] mr-4"></div>
                  <div>
                    <p className="font-bold">@DesignGuru</p>
                    <p className="text-sm text-gray-400">250K Followers</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "Fans loved hearing my AI voice reply to them. It's surreal. The personalized touch keeps my community super engaged."
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#9b87f5]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-[#1A1F2C] to-[#000000e6] p-1 rounded-lg">
              <div className="bg-[#1A1F2C] rounded-lg p-6 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#333333] mr-4"></div>
                  <div>
                    <p className="font-bold">@TechBurnerBot</p>
                    <p className="text-sm text-gray-400">Beta Tester</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "I've scaled engagement 10x without being online all day. My clone handles the routine questions while I focus on the personal connections."
                </p>
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <svg key={star} className="w-5 h-5 text-[#9b87f5]" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="container mx-auto py-20">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">Simple, Transparent Pricing</h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Choose the plan that fits your creator journey.
        </p>
        
        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-[#1A1F2C] border-[#333333] relative">
            <CardHeader>
              <CardTitle className="text-white">Free Plan</CardTitle>
              <CardDescription className="text-gray-400">Get started with basic features</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$0</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>10 AI comment replies per day</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>Basic comment AI training</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>Standard moderation</p>
              </div>
              <div className="flex items-center text-gray-500">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <p>No voice cloning</p>
              </div>
              <div className="flex items-center text-gray-500">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                <p>No multi-channel support</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#222222] hover:bg-[#333333] text-white">Start Free</Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-[#1A1F2C] border-[#9b87f5] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#9b87f5] text-white py-1 px-3 text-xs font-bold">
              POPULAR
            </div>
            <CardHeader>
              <CardTitle className="text-white">Creator Plan</CardTitle>
              <CardDescription className="text-gray-400">For serious content creators</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>Unlimited comment replies</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>Full voice clone technology</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>Advanced content training</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>YouTube & Instagram integration</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>Enhanced AI moderation</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white">Start Creator Plan</Button>
            </CardFooter>
          </Card>
          
          <Card className="bg-[#1A1F2C] border-[#333333] relative">
            <CardHeader>
              <CardTitle className="text-white">Studio Plan</CardTitle>
              <CardDescription className="text-gray-400">For agencies & large creators</CardDescription>
              <div className="mt-4">
                <span className="text-4xl font-bold">$99</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>Everything in Creator Plan</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>Multi-channel AI deployment</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>Advanced analytics dashboard</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>Multiple AI clone profiles</p>
              </div>
              <div className="flex items-center">
                <svg className="w-5 h-5 text-[#9b87f5] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                </svg>
                <p>Priority support & onboarding</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#222222] hover:bg-[#333333] text-white">Contact Sales</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* CTA Footer */}
      <footer className="bg-[#222222] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Scale Your Creator Presence?</h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of creators who are saving time and delighting their audience with AI clones.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white" asChild>
              <Link to="/dashboard">Get Started Free</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <a href="#pricing">View Pricing</a>
            </Button>
          </div>
        </div>
      </footer>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">CreatorClone.ai</h3>
              <p className="text-gray-400 mb-4">
                Scale your creator presence with AI that sounds just like you.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Features</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Pricing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Demo</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Roadmap</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Documentation</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Tutorials</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Support</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Privacy Policy</a></li>
                <li><a href="#" className="text-gray-400 hover:text-[#9b87f5]">Terms of Service</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333333] pt-8">
            <p className="text-center text-gray-400">© {new Date().getFullYear()} CreatorClone.ai. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
