"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Phone, Send, MessageSquare, MapPin, Building, User, Briefcase } from "lucide-react";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import CustomPhoneInput from "@/components/PhoneInput";
import StateDistrictSelect from "@/components/StateDistrictSelect";

export default function ContactPage() {
  const [isIndianNumber, setIsIndianNumber] = useState(true);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedDistrict, setSelectedDistrict] = useState('');
  const [fullAddress, setFullAddress] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    designation: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const addressData = isIndianNumber 
      ? { state: selectedState, district: selectedDistrict }
      : { fullAddress };
    
    console.log({
      ...formData,
      phoneNumber,
      ...addressData
    });
    // Handle form submission here
  };

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
            <form onSubmit={handleSubmit} className="bg-white p-8 rounded-xl shadow-lg">
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
                          placeholder="your name"
                          className="pl-10"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
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
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                        />
                        <Mail className="h-4 w-4 absolute left-3 top-3 text-gray-400" />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <CustomPhoneInput
                        value={phoneNumber}
                        onChange={setPhoneNumber}
                        onCountryChange={setIsIndianNumber}
                      />
                    </div>

                    {isIndianNumber ? (
                      <div className="space-y-2">
                        <StateDistrictSelect
                          onStateChange={setSelectedState}
                          onDistrictChange={setSelectedDistrict}
                          showDistrict={true}
                        />
                      </div>
                    ) : (
                      <div className="col-span-2 space-y-2">
                        <Label htmlFor="address">Full Address</Label>
                        <Textarea
                          id="address"
                          placeholder="Please provide your complete address including country"
                          value={fullAddress}
                          onChange={(e) => setFullAddress(e.target.value)}
                          className="min-h-[100px]"
                          required
                        />
                      </div>
                    )}
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
                          value={formData.organization}
                          onChange={handleInputChange}
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
                          value={formData.designation}
                          onChange={handleInputChange}
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
                    <Input 
                      id="subject" 
                      placeholder="What is this regarding?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      placeholder="Type your message here..."
                      className="min-h-[150px] resize-none"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
                </div>

                <Button type="submit" size="lg" className="w-full bg-orange-600 hover:bg-orange-700">
                  <Send className="mr-2 h-4 w-4" />
                  Send Message
                </Button>
              </div>
            </form>
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
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white h-12 text-base font-medium">
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