
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Users, BookOpen, Presentation, Calculator, Palette } from "lucide-react";
import { Link } from "react-router-dom";

const Competitions = () => {
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
              <Link to="/competitions" className="text-red-900 font-semibold">Competitions</Link>
              <Link to="/projects" className="text-gray-700 hover:text-red-900 transition-colors">Projects</Link>
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
            Competitive Events
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            FBLA offers over 60 competitive events designed to test business knowledge, 
            presentation skills, and leadership abilities. Our members compete at regional, 
            state, and national levels.
          </p>
        </div>
      </section>

      {/* Event Categories */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">Event Categories</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Presentation className="h-12 w-12 text-red-900 mb-4" />
                <CardTitle className="text-red-900">Business Presentation</CardTitle>
                <CardDescription>Individual and team presentation events</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Impromptu Speaking</li>
                  <li>• Business Presentation</li>
                  <li>• Sales Presentation</li>
                  <li>• Public Speaking</li>
                  <li>• Interview Skills</li>
                </ul>
                <Badge className="mt-4 bg-red-100 text-red-900">Presentation Skills</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <BookOpen className="h-12 w-12 text-amber-600 mb-4" />
                <CardTitle className="text-red-900">Business Knowledge</CardTitle>
                <CardDescription>Testing business acumen and skills</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Business Law</li>
                  <li>• Economics</li>
                  <li>• Accounting</li>
                  <li>• Marketing</li>
                  <li>• Management</li>
                </ul>
                <Badge className="mt-4 bg-amber-100 text-amber-800">Knowledge Tests</Badge>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Palette className="h-12 w-12 text-red-900 mb-4" />
                <CardTitle className="text-red-900">Production Events</CardTitle>
                <CardDescription>Create business materials and plans</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="text-sm text-gray-600 space-y-2">
                  <li>• Business Plan</li>
                  <li>• Website Design</li>
                  <li>• Graphic Design</li>
                  <li>• Digital Video Production</li>
                  <li>• Social Media Campaign</li>
                </ul>
                <Badge className="mt-4 bg-red-100 text-red-900">Creative Projects</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Popular Events */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">Popular Events at CHS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-red-900">Business Presentation</CardTitle>
                <CardDescription>Individual Event</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Present a business solution to a realistic business challenge. 
                  Participants have 10 minutes to present and 5 minutes for Q&A.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-red-100 text-red-900">10 min presentation</Badge>
                  <Badge className="bg-amber-100 text-amber-800">5 min Q&A</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-900">Marketing</CardTitle>
                <CardDescription>Individual Event</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Test knowledge of marketing principles including market research, 
                  consumer behavior, product development, and promotional strategies.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-red-100 text-red-900">100 questions</Badge>
                  <Badge className="bg-amber-100 text-amber-800">60 minutes</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-900">Website Design</CardTitle>
                <CardDescription>Individual Event</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Create a website for a fictional business using HTML, CSS, and 
                  JavaScript. Judged on design, functionality, and adherence to guidelines.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-red-100 text-red-900">Pre-production</Badge>
                  <Badge className="bg-amber-100 text-amber-800">Technical skills</Badge>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-red-900">Business Plan</CardTitle>
                <CardDescription>Team Event</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Develop a comprehensive business plan for a new venture. Teams 
                  present their plan to a panel of judges acting as potential investors.
                </p>
                <div className="flex gap-2 flex-wrap">
                  <Badge className="bg-red-100 text-red-900">Team of 2-3</Badge>
                  <Badge className="bg-amber-100 text-amber-800">15 min presentation</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competition Timeline */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-red-900 mb-12">Competition Timeline</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <CardTitle className="text-red-900">Regional Competition</CardTitle>
                <CardDescription>February</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Compete against other FBLA chapters in our region. Top finishers 
                  advance to state competition.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-amber-600 mx-auto mb-4" />
                <CardTitle className="text-red-900">State Competition</CardTitle>
                <CardDescription>March</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  State-level competition held in Sacramento. Winners qualify for 
                  the National Leadership Conference.
                </p>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <Trophy className="h-12 w-12 text-red-900 mx-auto mb-4" />
                <CardTitle className="text-red-900">National Conference</CardTitle>
                <CardDescription>June</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  The ultimate FBLA experience with competitions, workshops, and 
                  networking with students nationwide.
                </p>
              </CardContent>
            </Card>
          </div>
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

export default Competitions;
