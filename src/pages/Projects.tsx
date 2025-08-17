
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Heart, Lightbulb, Calendar, Target, DollarSign } from "lucide-react";
import { Link } from "react-router-dom";

const Projects = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 to-red-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-red-900">CHS FBLA</Link>
              <Badge variant="outline" className="text-red-900 border-red-900">
                Future Business Leaders of America
              </Badge>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-red-900 transition-colors">Home</Link>
              <Link to="/competitions" className="text-gray-700 hover:text-red-900 transition-colors">Competitions</Link>
              <Link to="/projects" className="text-red-900 font-semibold">Projects</Link>
              <Link to="/people" className="text-gray-700 hover:text-red-900 transition-colors">People</Link>
              <Link to="/achievements" className="text-gray-700 hover:text-red-900 transition-colors">Achievements</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-red-900 mb-6">
            Our Projects
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            From community service initiatives to business ventures, our FBLA chapter 
            is actively involved in projects that make a difference in our school and community.
          </p>
        </div>
      </section>

      {/* Project Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">Project Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-red-900 mb-4" />
                <CardTitle className="text-red-900">Community Service</CardTitle>
                <CardDescription>Giving back to our local community</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Projects focused on helping local organizations, supporting causes, 
                  and making a positive impact in our community.
                </p>
                <Badge className="bg-red-100 text-red-900">Service Learning</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Lightbulb className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle className="text-red-900">Business Ventures</CardTitle>
                <CardDescription>Real-world business experience</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Student-led business initiatives that provide hands-on experience 
                  in entrepreneurship and business management.
                </p>
                <Badge className="bg-amber-100 text-amber-800">Entrepreneurship</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Users className="h-12 w-12 text-red-900 mb-4" />
                <CardTitle className="text-red-900">Educational Outreach</CardTitle>
                <CardDescription>Sharing knowledge with others</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Programs designed to teach business and financial literacy skills 
                  to younger students and community members.
                </p>
                <Badge className="bg-red-100 text-red-900">Education</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Current Projects */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">Current Projects</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-900">Financial Literacy Workshops</CardTitle>
                <CardDescription>Educational Outreach • Ongoing</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Teaching elementary and middle school students about budgeting, saving, 
                  and basic financial concepts through interactive workshops and games.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <Badge className="bg-red-100 text-red-900">15 workshops</Badge>
                  <Badge className="bg-amber-100 text-amber-800">300+ students reached</Badge>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  Monthly workshops at local elementary schools
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-900">CHS Student Store</CardTitle>
                <CardDescription>Business Venture • Active</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Student-operated store selling school supplies, snacks, and spirit wear. 
                  Provides hands-on retail and inventory management experience.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <Badge className="bg-red-100 text-red-900">Daily operations</Badge>
                  <Badge className="bg-amber-100 text-amber-800">$5,000+ revenue</Badge>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Target className="h-4 w-4 mr-2" />
                  Profits support chapter activities and scholarships
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-900">Senior Citizen Technology Help</CardTitle>
                <CardDescription>Community Service • Weekly</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Volunteers help senior citizens at local community centers learn to use 
                  smartphones, tablets, and computers for everyday tasks.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <Badge className="bg-red-100 text-red-900">Weekly sessions</Badge>
                  <Badge className="bg-amber-100 text-amber-800">25 volunteers</Badge>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Heart className="h-4 w-4 mr-2" />
                  Partnership with Cupertino Community Center
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-900">Entrepreneurship Fair</CardTitle>
                <CardDescription>Educational Outreach • Annual</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Annual event showcasing student businesses and featuring guest speakers 
                  from the local business community. Open to all CHS students.
                </p>
                <div className="flex gap-2 flex-wrap mb-4">
                  <Badge className="bg-red-100 text-red-900">50+ booths</Badge>
                  <Badge className="bg-amber-100 text-amber-800">500+ attendees</Badge>
                </div>
                <div className="flex items-center text-sm text-gray-500">
                  <Calendar className="h-4 w-4 mr-2" />
                  Next event: Spring 2024
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Past Projects */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">Past Projects</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-900">Holiday Toy Drive</CardTitle>
                <CardDescription>Winter 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  Collected and distributed toys to local families in need during the holiday season.
                </p>
                <Badge className="bg-red-100 text-red-900 text-xs">200+ toys collected</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-900">Business Plan Competition</CardTitle>
                <CardDescription>Spring 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  School-wide competition where students pitched business ideas to local entrepreneurs.
                </p>
                <Badge className="bg-amber-100 text-amber-800 text-xs">30 participants</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg text-red-900">Environmental Audit</CardTitle>
                <CardDescription>Fall 2023</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-gray-600 mb-2">
                  Conducted sustainability audit of school operations and presented recommendations.
                </p>
                <Badge className="bg-red-100 text-red-900 text-xs">Eco-friendly</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Get Involved */}
      <section className="py-16 px-4 bg-red-900 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-8">Get Involved</h2>
          <p className="text-xl mb-8">
            Have an idea for a project? Want to lead an initiative? 
            FBLA members are encouraged to propose and lead their own projects.
          </p>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Lightbulb className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Propose a Project</h3>
                <p className="text-sm">
                  Submit your project idea to the leadership team for consideration and support.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-white/10 border-white/20 text-white">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 mx-auto mb-4" />
                <h3 className="font-semibold mb-2">Join a Team</h3>
                <p className="text-sm">
                  Volunteer for existing projects and gain valuable experience working with teams.
                </p>
              </CardContent>
            </Card>
          </div>
          <Button size="lg" className="bg-white text-red-900 hover:bg-gray-100">
            Contact Project Coordinators
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-amber-400 mb-4">CHS FBLA</div>
          <p className="text-gray-400 mb-4">
            Future Business Leaders of America - Cupertino High School Chapter
          </p>
          <p className="text-sm text-gray-500">
            © 2024 Cupertino High School FBLA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Projects;
