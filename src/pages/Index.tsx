
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Users, BookOpen, Trophy, Mail, MapPin, Clock, Star, Award, Target, Globe } from "lucide-react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const form = useForm({
    defaultValues: {
      name: "",
      email: "",
      grade: "",
      interests: ""
    }
  });

  const onSubmit = async (data: any) => {
    setIsSubmitting(true);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Interest form submitted!",
      description: "We'll be in touch with you soon about joining CHS FBLA.",
    });
    form.reset();
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-white to-red-50">
      {/* Navigation */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-amber-100 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="text-2xl font-bold bg-gradient-to-r from-red-900 to-amber-700 bg-clip-text text-transparent">
                CHS FBLA
              </div>
              <Badge variant="outline" className="text-red-900 border-red-900/20 bg-amber-50">
                Future Business Leaders of America
              </Badge>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-red-900 font-semibold px-3 py-2 rounded-lg bg-amber-100/50">Home</Link>
              <Link to="/competitions" className="text-gray-700 hover:text-red-900 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-amber-50">Competitions</Link>
              <Link to="/projects" className="text-gray-700 hover:text-red-900 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-amber-50">Projects</Link>
              <Link to="/people" className="text-gray-700 hover:text-red-900 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-amber-50">People</Link>
              <Link to="/achievements" className="text-gray-700 hover:text-red-900 transition-all duration-200 px-3 py-2 rounded-lg hover:bg-amber-50">Achievements</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative py-24 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl md:text-6xl font-bold text-red-900 mb-6 leading-tight">
                Cupertino High School
                <span className="block bg-gradient-to-r from-amber-600 to-yellow-500 bg-clip-text text-transparent">
                  FBLA Chapter
                </span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 max-w-2xl leading-relaxed">
                Developing the next generation of business leaders through competitive events, 
                community service, and professional development opportunities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Button size="lg" className="bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                  Join Our Chapter
                </Button>
                <Button size="lg" variant="outline" className="border-red-900 text-red-900 hover:bg-red-50 shadow-lg hover:shadow-xl transition-all duration-300">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="CHS FBLA Members"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-red-900/30 to-transparent"></div>
                <div className="absolute bottom-4 left-4 text-white">
                  <p className="font-semibold text-lg">Our Amazing Team</p>
                  <p className="text-sm opacity-90">Building tomorrow's leaders today</p>
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-br from-amber-400 to-yellow-500 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -top-6 -left-6 w-16 h-16 bg-gradient-to-br from-red-500 to-red-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About FBLA Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-900 to-amber-700 bg-clip-text text-transparent mb-4">
              About FBLA
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-900 to-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                Future Business Leaders of America (FBLA) is the largest business career 
                student organization in the world. Our mission is to inspire and prepare 
                students to become community-minded business leaders.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                At Cupertino High School, our FBLA chapter provides students with 
                opportunities to develop leadership skills, network with professionals, 
                compete in business-related events, and give back to our community.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <Badge className="bg-gradient-to-r from-red-100 to-red-50 text-red-900 border-red-200 p-3 text-center justify-center">
                  <Award className="w-4 h-4 mr-2" />
                  Leadership Development
                </Badge>
                <Badge className="bg-gradient-to-r from-amber-100 to-amber-50 text-amber-800 border-amber-200 p-3 text-center justify-center">
                  <Target className="w-4 h-4 mr-2" />
                  Business Skills
                </Badge>
                <Badge className="bg-gradient-to-r from-gray-100 to-gray-50 text-gray-800 border-gray-200 p-3 text-center justify-center">
                  <Globe className="w-4 h-4 mr-2" />
                  Community Service
                </Badge>
                <Badge className="bg-gradient-to-r from-red-100 to-red-50 text-red-900 border-red-200 p-3 text-center justify-center">
                  <Users className="w-4 h-4 mr-2" />
                  Networking
                </Badge>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-white">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Users className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-red-900 mb-1">50+</div>
                  <div className="text-sm text-gray-600 font-medium">Active Members</div>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-white">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-amber-700 mb-1">15+</div>
                  <div className="text-sm text-gray-600 font-medium">State Awards</div>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-red-50 to-white">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <BookOpen className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-red-900 mb-1">25+</div>
                  <div className="text-sm text-gray-600 font-medium">Competitive Events</div>
                </CardContent>
              </Card>
              
              <Card className="text-center hover:shadow-xl transition-all duration-300 border-0 bg-gradient-to-br from-amber-50 to-white">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-amber-700 mb-1">200+</div>
                  <div className="text-sm text-gray-600 font-medium">Service Hours</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-amber-50/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-900 to-amber-700 bg-clip-text text-transparent mb-4">
              What Our Members Say
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-900 to-amber-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:transform hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <CardTitle className="text-lg text-red-900">Sarah M., Senior</CardTitle>
                <CardDescription className="text-amber-700 font-medium">State Finalist in Business Presentation</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  "FBLA has given me confidence in public speaking and helped me develop 
                  leadership skills that I'll use throughout my life. The competitive 
                  events pushed me to excel."
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:transform hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <CardTitle className="text-lg text-red-900">Alex R., Junior</CardTitle>
                <CardDescription className="text-amber-700 font-medium">Regional Winner in Marketing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  "The networking opportunities in FBLA are incredible. I've met business 
                  professionals who have mentored me and helped me plan my future career."
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm hover:transform hover:scale-105">
              <CardHeader className="pb-4">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <CardTitle className="text-lg text-red-900">Maya P., Sophomore</CardTitle>
                <CardDescription className="text-amber-700 font-medium">Community Service Coordinator</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 leading-relaxed">
                  "Through FBLA's community service projects, I've learned the importance 
                  of giving back while developing project management and teamwork skills."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Interest Form Section */}
      <section className="py-20 px-4 bg-white/50 backdrop-blur-sm">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold bg-gradient-to-r from-red-900 to-amber-700 bg-clip-text text-transparent mb-4">
              Join CHS FBLA
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-red-900 to-amber-600 mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
              Ready to develop your business leadership skills? Fill out our interest form 
              and we'll get in touch with you about joining our chapter.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <Card className="border-0 bg-white/80 backdrop-blur-sm shadow-xl">
                <CardHeader className="text-center pb-6">
                  <CardTitle className="text-2xl bg-gradient-to-r from-red-900 to-amber-700 bg-clip-text text-transparent">Interest Form</CardTitle>
                  <CardDescription className="text-gray-600">
                    Tell us about yourself and your interest in joining FBLA
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-red-900 font-medium">Full Name</FormLabel>
                            <FormControl>
                              <Input placeholder="Enter your full name" {...field} className="border-gray-200 focus:border-red-900 focus:ring-red-900/20" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-red-900 font-medium">Email Address</FormLabel>
                            <FormControl>
                              <Input type="email" placeholder="Enter your email" {...field} className="border-gray-200 focus:border-red-900 focus:ring-red-900/20" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="grade"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-red-900 font-medium">Grade Level</FormLabel>
                            <FormControl>
                              <Input placeholder="9th, 10th, 11th, or 12th" {...field} className="border-gray-200 focus:border-red-900 focus:ring-red-900/20" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <FormField
                        control={form.control}
                        name="interests"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel className="text-red-900 font-medium">What interests you about FBLA?</FormLabel>
                            <FormControl>
                              <Input placeholder="Leadership, competitions, networking, etc." {...field} className="border-gray-200 focus:border-red-900 focus:ring-red-900/20" />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      
                      <Button 
                        type="submit" 
                        className="w-full bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Submit Interest Form"}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            
            <div className="space-y-6">
              <Card className="text-center border-0 bg-gradient-to-br from-red-50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Clock className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-red-900 mb-2 text-lg">Meeting Times</h3>
                  <p className="text-gray-600">Thursdays 3:15 PM - 4:15 PM</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-0 bg-gradient-to-br from-amber-50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-amber-600 to-amber-500 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <MapPin className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-red-900 mb-2 text-lg">Location</h3>
                  <p className="text-gray-600">Room 204, Business Wing</p>
                </CardContent>
              </Card>
              
              <Card className="text-center border-0 bg-gradient-to-br from-red-50 to-white shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="pt-8 pb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-900 to-red-700 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                    <Mail className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-red-900 mb-2 text-lg">Contact</h3>
                  <p className="text-gray-600">chsfbla@example.com</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-gray-900 to-red-900 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-3xl font-bold bg-gradient-to-r from-amber-400 to-yellow-300 bg-clip-text text-transparent mb-4">
            CHS FBLA
          </div>
          <p className="text-gray-300 mb-6 text-lg">
            Future Business Leaders of America - Cupertino High School Chapter
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-400 to-yellow-300 mx-auto rounded-full mb-6"></div>
          <p className="text-sm text-gray-400">
            © 2024 Cupertino High School FBLA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
