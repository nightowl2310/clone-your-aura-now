import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { MessageSquare, Phone, Film, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { API_BASE_URL } from "../lib/config";
import fluenceailogo from "../assets/logo_fluenceai.png" ;
import website_image_1 from '../assets/website_image_1.png';
import agi1 from '../assets/agi1.png';
import gdgoc from '../assets/gdgoc hd logo squared.jpg';
import y_covers from '..//assets/y_covers.jpg';





fetch(`${API_BASE_URL}/getallMedia/101`)
  .then((res) => res.json())
  .then((data) => console.log(data));

const Index = () => {
  return (
    <div className="min-h-screen bg-[#1A1F2C] text-white">
      {/* Navigation */}
      <nav className="container mx-auto py-6 flex justify-between items-center">
        {" "}
        <div className=" flex">
          <img
            src={fluenceailogo}
            alt="Fluence AI Logo"
            className="h-8 w-8 mr-2"
          />
          <span className="text-xl font-bold bg-gradient-to-r from-[#33C3F0] to-[#3B34DC] bg-clip-text text-transparent">
            Fluence AI
          </span>
        </div>
        <div className="space-x-4 hidden md:block">
          <a href="#features">
            <Button variant="ghost" className="text-white hover:text-[#9b87f5]">
              Features
            </Button>
          </a>

          <a href="#Pricing">
            <Button variant="ghost" className="text-white hover:text-[#9b87f5]">
              Pricing
            </Button>
          </a>

          <a href="#Testimonials">
            <Button variant="ghost" className="text-white hover:text-[#9b87f5]">
              Testimonials
            </Button>
          </a>
          <Button variant="ghost" className="text-white hover:text-[#9b87f5]">
            FAQ
          </Button>
        </div>
        
        <div>
          <Link to="/login">
            <Button className="mr-2 border-[#9b87f5] text-white hover:bg-[#9b87f5]/10">
              Login
            </Button>
          </Link>
          <Button className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto py-20 flex flex-col md:flex-row items-center md:gap-x-12">
        <div className="md:w-1/2 mb-10 md:mb-0">
          <h1 className="text-5xl md:text-5xl font-bold mb-6 mr-2 leading-tight">Turn Every  
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] bg-clip-text text-transparent"> Comment </span>
            into a 
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] bg-clip-text text-transparent"> Customer </span>
            

            
          </h1>
          <p className="text-2xl text-gray-300 mb-8">
            Auto-engage with fans 24/7 via comments, DMs, and stories—
            <span className="bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] bg-clip-text text-transparent">
               and watch your leads grow on autopilot.
            </span>
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-[#9b87f5] hover:bg-[#7E69AB] border-gray-900 text-gray-900"
              asChild
            >
              <Link to="/Automations">Create Your Clone</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#33C3F0] text-[#103f4e] hover:bg-[#33C3F0]/10"
              asChild
            >
              <a href="tel:+91 7828115995">Contact Us</a>
            </Button>

          </div>
        </div>
        <div className="md:w-1/2 relative ">
          <div className="bg-[#222222] rounded-lg p-6  shadow-[0_0_30px_rgba(155,135,245,0.3)]">
            <div className="flex items-center mb-6 " >
              <div className="w-10 h-10 rounded-full mr-4">
                <img
                  src={y_covers}
                  alt="Website preview"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div>
                <p className="font-bold">_ycovers_</p>
                <p className="text-sm text-gray-400">Original Creator</p>
              </div>
            </div>
            <div className="mb-4 ">
              <p className="text-sm text-gray-300 text-left padding">Replying to @fan_username</p>
              <p className="text-left">
                Thanks for watching my latest video! The camera setup details
                are in the description. Let me know if you have other questions!
              </p>
            </div>
            <div className="flex items-center text-gray-400 text-sm">
              <div className="flex items-center mr-4">
                <span className="bg-[#9b87f5] px-2 py-1 rounded text-xs mr-2">
                  ...
                </span>
                <span>2m ago</span>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -right-4 bg-[#222222] rounded-lg p-4 shadow-[0_0_20px_rgba(30,174,219,0.3)]">
            <p className="text-xs text-[#33C3F0]">
              Replying with your voice & style, 24/7
            </p>
          </div>
        </div>
      </section>
    
    <section className="">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <span className="md:w-1/2 mb-10 md:mb-0">
                <h1
                  className="text-6xl md:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(to right,  #33C3F0, #9b87f5)",
                  }}
                >
                  Over 2.4K+ Accounts Engaged
                </h1>
              </span>

              <span className="md:w-1/2 flex justify-center">
                <img
                  src={agi1}
                  alt="Website preview"
                  className="w-full max-w-md h-auto object-contain"
                />
              </span>
            </div>



    </section>


      {/* Features */}
<section className="container mx-auto py-20">
        <h2
          id="features"
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
      Features
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Everything you need to scale your creator presence and engage with
          your audience.
        </p>

 <div className="w-full md:w-1/2 lg:w-full px-4">
    <div className="flex flex-wrap justify-center gap-8">
      {/* Card 1 */}
      <div className="transition-all duration-300 transform hover:scale-110 hover:z-10">
        <Card className="bg-[#121212] rounded-2xl p-6 shadow-md border border-gray-700 hover:bg-[#1f1f1f] w-[300px]">
          <h3 className="text-white text-lg font-semibold mb-2">
            Auto-reply to <span className="text-[#9b87f5]">Comments</span> instantly
          </h3>
        </Card>
      </div>

      {/* Card 2 */}
      <div className="transition-all duration-300 transform hover:scale-110 hover:z-10">
        <Card className="bg-[#121212] rounded-2xl p-6 shadow-md border border-gray-700 hover:bg-[#1f1f1f] w-[300px]">
          <h3 className="text-white text-lg font-semibold mb-2">
            Put Instagram growth on <span className="text-[#9b87f5]">autopilot</span>
          </h3>
        </Card>
      </div>

      {/* Card 3 */}
      <div className="transition-all duration-300 transform hover:scale-110 hover:z-10">
        <Card className="bg-[#121212] rounded-2xl p-6 shadow-md border border-gray-700 hover:bg-[#1f1f1f] w-[300px]">
          <h3 className="text-white text-lg font-semibold mb-2">
            Smart DM replies for your <span className="text-[#9b87f5]">Customers</span>
          </h3>
        </Card>
      </div>

      {/* Card 4 */}
      <div className="transition-all duration-300 transform hover:scale-110 hover:z-10">
        <Card className="bg-[#121212] rounded-2xl p-6 shadow-md border border-gray-700 hover:bg-[#1f1f1f] w-[300px]">
          <h3 className="text-white text-lg font-semibold mb-2">
            Designed for Creators Who <span className="text-[#9b87f5]">Sell Digitally</span>
          </h3>
        </Card>
      </div>

      {/* Card 5 */}
      <div className="transition-all duration-300 transform hover:scale-110 hover:z-10">
        <Card className="bg-[#121212] rounded-2xl p-6 shadow-md border border-gray-700 hover:bg-[#1f1f1f] w-[300px]">
          <h3 className="text-white text-lg font-semibold mb-2">
            Your <span className="text-[#9b87f5]">Content Trains the AI</span> — No Extra Work 
          </h3>
        </Card>
      </div>

      {/* Card 6 */}
      <div className="transition-all duration-300 transform hover:scale-110 hover:z-10">
        <Card className="bg-[#121212] rounded-2xl p-6 shadow-md border border-gray-700 hover:bg-[#1f1f1f] w-[300px]">
          <h3 className="text-white text-lg font-semibold mb-2">
            Boost <span className="text-[#9b87f5]">Trust</span> With Instant Replies 
          </h3>
        </Card>
      </div>
    </div>
  </div>

      
      
      </section>

      <section>     {/* image */}

      <div className="w-full">
        <img
          src={website_image_1}
          alt="Website preview"
          className="w-full h-auto object-contain"
        />
      </div>

      
      </section>
      
{/* the four cards       */}
      <section>
        <br></br><br></br><br></br>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <Card className="bg-[#222222] border-[#333333]">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#33C3F0] flex items-center justify-center mb-4">
                <MessageSquare className="text-white" />
              </div>
              <CardTitle className="text-white">
                Works while you sleep
              </CardTitle>
              <CardDescription className="text-gray-400">
                {/* Let AI handle the replies — you stay in the spotlight. */}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400" justify-content="jus">
                Auto-respond to comments, DMs, and story mentions in your tone. 
                No breaks. No missed comments. Your brand engages 24/7 — even when you’re offline or live.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="text-[#9b87f5] p-0 hover:text-[#33C3F0] hover:bg-transparent"
              >
                Learn more <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-[#222222] border-[#333333]">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#9b87f5] to-[#D946EF] flex items-center justify-center mb-4">
                <Phone className="text-white" />
              </div>
              <CardTitle className="text-white">
                Always On-Brand
              </CardTitle>
              <CardDescription className="text-gray-400">
                {/* Your AI twin, your voice — now always available. */}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                AI that sounds like you — not like a bot. It learns your tone, values, and boundaries, so every reply feels personal, intentional, and true to your voice.
              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="text-[#9b87f5] p-0 hover:text-[#D946EF] hover:bg-transparent"
              >
                Learn more <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>
          <Card className="bg-[#222222] border-[#333333] flex flex-col h-full">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#33C3F0] to-[#9b87f5] flex items-center justify-center mb-4">
                  <Film className="text-white" />
                </div>
                <CardTitle className="text-white">Engage. Grow. Repeat</CardTitle>
                <CardDescription className="text-gray-400">
                  {/* Optional description */}
                </CardDescription>
              </CardHeader>

              <CardContent className="text-gray-400">
                <p>
                  Turn every interaction into a lead. Boost engagement. Win the algorithm. Watch your followers turn into buyers.
                </p>
              </CardContent>

              {/* Push footer to bottom */}
              <CardFooter className="mt-auto">
                <Button
                  variant="ghost"
                  className="text-[#9b87f5] p-0 hover:text-[#D946EF] hover:bg-transparent"
                >
                  Learn more <ArrowRight size={16} className="ml-2" />
                </Button>
              </CardFooter>
          </Card>

          <Card className="bg-[#222222] border-[#333333]">
            <CardHeader>
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#D946EF] to-[#33C3F0] flex items-center justify-center mb-4">
                <Shield className="text-white" />
              </div>
              <CardTitle className="text-white"> Smart Analytics Dashboard</CardTitle>
              <CardDescription className="text-gray-400">
                {/* Always-On AI Protection */}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-gray-400">
                See what’s working in real time. Track replies, link clicks, conversions, and engagement — all in one clean dashboard.              </p>
            </CardContent>
            <CardFooter>
              <Button
                variant="ghost"
                className="text-[#9b87f5] p-0 hover:text-[#D946EF] hover:bg-transparent"
              >
                Learn more <ArrowRight size={16} className="ml-2" />
              </Button>
            </CardFooter>
          </Card>

          

        </div>
        <br></br><br></br><br></br>
      </section>
      {/* Product Overview */}
      
      <section className="bg-[#222222] py-20">
        <div className="container mx-auto">
          {/* <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            How FluenceAI Works
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            Your AI clone learns your voice, style, and knowledge to engage with
            your audience across platforms.
          </p> */}


          <div className="flex flex-col md:flex-row justify-between items-center mb-20">
            <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
              <h1 className="text-5xl font-bold mb-4 text-[#9b87f5]">
                Train Your AI Clone 
              </h1>
              <h2 className="text-gray-400 mr-2 text-2xl ">
                FluenceAI analyzes your Existed content, Tags, and response patterns to create an accurate digital copy of your online persona.
              </h2>
              <br></br><br></br>
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
                    <div
                      className="bg-gradient-to-r from-[#9b87f5] to-[#33C3F0] h-2 rounded-full"
                      style={{ width: "75%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="order-2 md:order-1 md:w-1/2 bg-[#222222] rounded-lg p-6 ">
              <div className="bg-[#1A1F2C] rounded-lg p-4 mb-4 shadow-lg " >
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full">
                    <img
                      src={agi1}
                      alt="Website preview"
                      className="w-full h-auto object-cover rounded-full"
                    />
                  </div>
                  <p className="ml-3">Your AI Clone</p> {/* ← adds spacing between image and text */}
                </div>

                <p className="mt-2">
                  Thanks for reaching out! I'd love to collaborate on your
                  project. Let me check my schedule and get back to you with
                  some ideas.
                </p>
              </div>
              {/* <div className="bg-[#2d2d2d] rounded-lg p-4">
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
                  <div
                    className="bg-[#33C3F0] h-1 rounded-full"
                    style={{ width: "60%" }}
                  ></div>
                </div>
              </div> */}
            </div>
            <div className="order-1 md:order-2 md:w-1/2 mb-10 md:mb-0 md:pl-8">
                <h3 className="text-2xl font-bold mb-4 text-[#D946EF] text-left">
                  Engage Across Platforms
                </h3>
                <p className="text-gray-300 mb-4 text-left">
                  Your AI clone responds to comments, DMs, and even takes calls
                  with your voice and personality.
                </p>
                <div className="space-y-4 max-w-md"> 
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#222222] flex-shrink-0 flex items-center justify-center mr-4">
                      <MessageSquare className="text-[#D946EF]" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-left">YouTube Comments</p>
                      <p className="text-sm text-gray-400 mt-1 text-left">
                        Reply to thousands of Followers automatically
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#222222] flex-shrink-0 flex items-center justify-center mr-4">
                      <MessageSquare className="text-[#D946EF]" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-left">Instagram & Twitter DMs</p>
                      <p className="text-sm text-gray-400 mt-1 text-left">
                        Never miss a message from Followers
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <div className="w-10 h-10 rounded-full bg-[#222222] flex-shrink-0 flex items-center justify-center mr-4">
                      <Phone className="text-[#D946EF]" size={20} />
                    </div>
                    <div>
                      <p className="font-semibold text-white text-left">Voice Calls & Messages</p>
                      <p className="text-sm text-gray-400 mt-1 text-left">
                        Personal connection at scale
                      </p>
                    </div>
                  </div>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      

      {/* Testimonials */}
      <section className="bg-[#222222] py-20">
        <div className="container mx-auto">
          <h2
            id="Testimonials"
            className="text-3xl md:text-4xl font-bold text-center mb-4"
          >
            Creator Testimonials
          </h2>
          <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
            See how other creators are scaling their engagement with
            FluenceAI
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#1A1F2C] to-[#000000e6] p-1 rounded-lg">
              <div className="bg-[#1A1F2C] rounded-lg p-6 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#333333] mr-4">
                    <img
                      src={y_covers}
                      alt="Website preview"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">@_ycovers_</p>
                    <p className="text-sm text-gray-400">1K Followers</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "Replied to 500+ comments on my dance reel that hit 2M views — saw 18% growth in 2 days. Super happy with the results!"
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-[#9b87f5]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#1A1F2C] to-[#000000e6] p-1 rounded-lg">
              <div className="bg-[#1A1F2C] rounded-lg p-6 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#333333] mr-4">
                    <img
                      src={gdgoc}
                      alt="Website preview"
                      className="w-full h-full object-cover rounded-full"
                    />
                  </div>
                  <div>
                    <p className="font-bold">@gdgoc.ietdavv</p>
                    <p className="text-sm text-gray-400">1.5K Followers</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "As a community, we need to grow and engage. This tool allows us to be
                  present without being present. I can focus on"
                </p>
                <div className="flex">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-[#9b87f5]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                </div>
              </div>
            </div>

            {/* <div className="bg-gradient-to-br from-[#1A1F2C] to-[#000000e6] p-1 rounded-lg">
              <div className="bg-[#1A1F2C] rounded-lg p-6 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[#333333] mr-4"></div>
                  <div>
                    <p className="font-bold">@TechBurnerBot</p>
                    <p className="text-sm text-gray-400">Beta Tester</p>
                  </div>
                </div>
                <p className="text-gray-300 mb-4">
                  "I've scaled engagement 10x without being online all day. My
                  clone handles the routine questions while I focus on the
                  personal connections."
                </p>
                <div className="flex">
                  {[1, 2, 3, 4].map((star) => (
                    <svg
                      key={star}
                      className="w-5 h-5 text-[#9b87f5]"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                    </svg>
                  ))}
                  <svg
                    className="w-5 h-5 text-gray-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
                  </svg>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </section>

      {/* Pricing */}
      {/* <section className="container mx-auto py-20">
        <h2
          id="Pricing"
          className="text-3xl md:text-4xl font-bold text-center mb-4"
        >
          Simple, Transparent Pricing
        </h2>
        <p className="text-gray-300 text-center mb-16 max-w-2xl mx-auto">
          Choose the plan that fits your creator journey.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          <Card className="bg-[#1A1F2C] border-[#333333] relative">
            <CardHeader>
              <CardTitle className="text-white">Free Plan</CardTitle>
              <CardDescription className="text-gray-400">
                Get started with basic features
              </CardDescription>
              <div className="mt-4">
                <p className="text-white">
                  <span className="text-4xl font-bold">$0</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </p>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">10 AI comment replies per day</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">Basic comment AI training</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">Standard moderation</p>
              </div>
              <div className="flex items-center text-gray-500">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                <p className="text-white">No voice cloning</p>
              </div>
              <div className="flex items-center text-gray-500">
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
                <p className="text-white">No multi-channel support</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#222222] hover:bg-[#333333] text-white">
                Start Free
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#1A1F2C] border-[#9b87f5] relative overflow-hidden">
            <div className="absolute top-0 right-0 bg-[#9b87f5] text-white py-1 px-3 text-xs font-bold">
              POPULAR
            </div>
            <CardHeader>
              <CardTitle className="text-white">Creator Plan</CardTitle>
              <CardDescription className="text-gray-400">
                For serious content creators
              </CardDescription>
              <div className="mt-4">
                <p className="text-white">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </p>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">Unlimited comment replies</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">Full voice clone technology</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">Advanced content training</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">YouTube & Instagram integration</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">Enhanced AI moderation</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#9b87f5] hover:bg-[#7E69AB] text-white">
                Start Creator Plan
              </Button>
            </CardFooter>
          </Card>

          <Card className="bg-[#1A1F2C] border-[#333333] relative">
            <CardHeader>
              <CardTitle className="text-white">Studio Plan</CardTitle>
              <CardDescription className="text-gray-400">
                For agencies & large creators
              </CardDescription>
              <div className="mt-4">
                <p className="text-white">
                  <span className="text-4xl font-bold">$99</span>
                  <span className="text-gray-400 ml-2">/month</span>
                </p>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">Everything in Creator Plan</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">Multi-channel AI deployment</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">Advanced analytics dashboard</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">Multiple AI clone profiles</p>
              </div>
              <div className="flex items-center">
                <svg
                  className="w-5 h-5 text-[#9b87f5] mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M5 13l4 4L19 7"
                  ></path>
                </svg>
                <p className="text-white">Priority support & onboarding</p>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full bg-[#222222] hover:bg-[#333333] text-white">
                Contact Sales
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section> */}

      {/* CTA Footer */}
      <footer className="bg-[#222222] py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Scale Your Creator Presence?
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto mb-8">
            Join thousands of creators who are saving time and delighting their
            audience with AI clones.
          </p>
          <div className="flex justify-center gap-4">
            <Button
              size="lg"
              className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white"
              asChild
            >
              <Link to="/dashboard">Get Started Free</Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#33C3F0] text-[#103f4e] hover:bg-[#33C3F0]/10"
              asChild
            >
              <a href="tel:+91 7828115995">Contact Us</a>
            </Button>
          </div>
        </div>
      </footer>

      {/* Footer */}
      <footer className="bg-[#1A1F2C] py-12">
        <div className="container mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
            <div>
              <h3 className="text-xl font-bold mb-4 text-white">
                FluenceAI
              </h3>
              <p className="text-gray-400 mb-4">
                Scale your creator presence with AI that sounds just like you.
              </p>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"></path>
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Product</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                    Features
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                    Demo
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                    Roadmap
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">
                Resources
              </h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                    Tutorials
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4 text-white">Company</h3>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-[#9b87f5]">
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-[#333333] pt-8">
            <p className="text-center text-gray-400">
              © {new Date().getFullYear()} FluenceAI All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
