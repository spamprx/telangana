"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, MessageSquare, MapPin, Building, User, Briefcase } from "lucide-react";
import Link from "next/link";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="text-gray-800 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Have questions about Telangana? We're here to help! Fill out the form below and we'll get back to you as soon as possible.
          </p>
        </div>
      </div>

      <div className="container mx-auto py-12 px-4">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-8 pb-4 border-b">Send us a Message</h2>
              
              <div className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800">Personal Information</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <div className="relative">
                        <Input 
                          id="name" 
                          placeholder="John Doe"
                          className="pl-10" 
                        />
                        <User className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address</Label>
                      <div className="relative">
                        <Input 
                          id="email" 
                          type="email" 
                          placeholder="you@example.com"
                          className="pl-10" 
                        />
                        <Mail className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <div className="relative">
                        <Input 
                          id="phone" 
                          type="tel" 
                          placeholder="+91 XXXXX XXXXX"
                          className="pl-10" 
                        />
                        <Phone className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="district">District</Label>
                      <Select>
                        <SelectTrigger id="district">
                          <SelectValue placeholder="Select district" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="adilabad">Adilabad</SelectItem>
                          <SelectItem value="bhadradri">Bhadradri Kothagudem</SelectItem>
                          <SelectItem value="hyderabad">Hyderabad</SelectItem>
                          <SelectItem value="jagtial">Jagtial</SelectItem>
                          <SelectItem value="jangaon">Jangaon</SelectItem>
                          <SelectItem value="jayashankar">Jayashankar Bhupalpally</SelectItem>
                          <SelectItem value="jogulamba">Jogulamba Gadwal</SelectItem>
                          <SelectItem value="kamareddy">Kamareddy</SelectItem>
                          <SelectItem value="karimnagar">Karimnagar</SelectItem>
                          <SelectItem value="khammam">Khammam</SelectItem>
                          <SelectItem value="kumuram-bheem">Kumuram Bheem Asifabad</SelectItem>
                          <SelectItem value="mahabubabad">Mahabubabad</SelectItem>
                          <SelectItem value="mahabubnagar">Mahabubnagar</SelectItem>
                          <SelectItem value="mancherial">Mancherial</SelectItem>
                          <SelectItem value="medak">Medak</SelectItem>
                          <SelectItem value="medchal">Medchal-Malkajgiri</SelectItem>
                          <SelectItem value="mulugu">Mulugu</SelectItem>
                          <SelectItem value="nagarkurnool">Nagarkurnool</SelectItem>
                          <SelectItem value="nalgonda">Nalgonda</SelectItem>
                          <SelectItem value="narayanpet">Narayanpet</SelectItem>
                          <SelectItem value="nirmal">Nirmal</SelectItem>
                          <SelectItem value="nizamabad">Nizamabad</SelectItem>
                          <SelectItem value="peddapalli">Peddapalli</SelectItem>
                          <SelectItem value="rajanna">Rajanna Sircilla</SelectItem>
                          <SelectItem value="rangareddy">Ranga Reddy</SelectItem>
                          <SelectItem value="sangareddy">Sangareddy</SelectItem>
                          <SelectItem value="siddipet">Siddipet</SelectItem>
                          <SelectItem value="suryapet">Suryapet</SelectItem>
                          <SelectItem value="vikarabad">Vikarabad</SelectItem>
                          <SelectItem value="wanaparthy">Wanaparthy</SelectItem>
                          <SelectItem value="warangal">Warangal</SelectItem>
                          <SelectItem value="yadadri">Yadadri Bhuvanagiri</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>

                {/* Organization Details */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800">Organization Details (Optional)</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="organization">Organization Name</Label>
                      <div className="relative">
                        <Input 
                          id="organization" 
                          placeholder="Company/Organization"
                          className="pl-10" 
                        />
                        <Building className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="designation">Designation</Label>
                      <div className="relative">
                        <Input 
                          id="designation" 
                          placeholder="Your role"
                          className="pl-10" 
                        />
                        <Briefcase className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-4">
                  <h3 className="text-lg font-medium text-gray-800">Your Message</h3>
                  <div className="space-y-2">
                    <Label htmlFor="subject">Subject</Label>
                    <Input id="subject" placeholder="What is this regarding?" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      className="min-h-[150px] resize-none"
                    />
                  </div>
                </div>

                <Button size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 pb-4 border-b">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Phone className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-600">+91 94407 25957</p>
                    <p className="text-gray-600">+91 94407 25957</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <Mail className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600">jaitelangana2028@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="bg-orange-100 p-3 rounded-full">
                    <MapPin className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Address</h3>
                    <p className="text-gray-600">
                      IIT Hyderadabad
                      <br />
                      Sangareddy, Telangana 502001
                      <br />
                      India
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h2 className="text-2xl font-semibold mb-6 pb-4 border-b">Quick Connect</h2>
              <div className="space-y-6">
                <Link href="https://wa.me/919440725957" target="_blank" className="block">
                  <Button className="w-full bg-green-500 hover:bg-green-600 text-white h-12 text-base font-medium">
                    <MessageSquare className="mr-3 h-5 w-5" />
                    Chat on WhatsApp
                  </Button>
                </Link>
                
                <Link href="mailto:jaitelangana2028@gmail.com" className="block">
                  <Button variant="outline" className="w-full h-12 text-base font-medium border-2">
                    <Mail className="mr-3 h-5 w-5" />
                    Send Email
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 