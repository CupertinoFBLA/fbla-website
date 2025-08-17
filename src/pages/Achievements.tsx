
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Trophy, Award, Medal, Star, Calendar, Users } from "lucide-react";
import { Link } from "react-router-dom";

const Achievements = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-yellow-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold text-red-800">CHS FBLA</Link>
              <Badge variant="outline" className="text-red-700 border-red-700">
                Future Business Leaders of America
              </Badge>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-700 hover:text-red-800 transition-colors">Home</Link>
              <Link to="/competitions" className="text-gray-700 hover:text-red-800 transition-colors">Competitions</Link>
              <Link to="/projects" className="text-gray-700 hover:text-red-800 transition-colors">Projects</Link>
              <Link to="/people" className="text-gray-700 hover:text-red-800 transition-colors">People</Link>
              <Link to="/achievements" className="text-red-800 font-semibold">Achievements</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-16 px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl font-bold text-red-900 mb-6">
            Our Achievements
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Celebrating the outstanding accomplishments of our FBLA chapter members 
            in competitions, community service, and leadership development.
          </p>
        </div>
      </section>

      {/* Recent Highlights */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">2024 Highlights</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-gradient-to-br from-red-900 to-red-800 text-white">
              <CardHeader>
                <Trophy className="h-12 w-12 text-yellow-400 mb-2" />
                <CardTitle className="text-yellow-400">State Competition</CardTitle>
                <CardDescription className="text-red-100">Outstanding Performance</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">5</div>
                <p className="text-sm text-red-100">
                  Members qualified for National Leadership Conference with top finishes 
                  in Business Presentation and Marketing events.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-yellow-600 to-yellow-500 text-white">
              <CardHeader>
                <Users className="h-12 w-12 text-white mb-2" />
                <CardTitle className="text-white">Community Impact</CardTitle>
                <CardDescription className="text-yellow-100">Making a Difference</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">250+</div>
                <p className="text-sm text-yellow-100">
                  Hours of community service through financial literacy workshops 
                  and technology assistance programs.
                </p>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-red-700 to-red-600 text-white">
              <CardHeader>
                <Award className="h-12 w-12 text-yellow-400 mb-2" />
                <CardTitle className="text-yellow-400">Chapter Growth</CardTitle>
                <CardDescription className="text-red-100">Expanding Impact</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-3xl font-bold mb-2">50%</div>
                <p className="text-sm text-red-100">
                  Increase in membership over the past year, making us one of the 
                  largest FBLA chapters in Northern California.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Competition Results */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">Competition Results</h2>
          
          {/* 2024 Results */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-800 mb-6">2024 State Leadership Conference</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="border-l-4 border-yellow-500">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Medal className="h-6 w-6 text-yellow-500" />
                    <CardTitle className="text-lg">1st Place</CardTitle>
                  </div>
                  <CardDescription>Business Presentation - Emily Chen</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-yellow-100 text-yellow-800">National Qualifier</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-gray-400">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Medal className="h-6 w-6 text-gray-400" />
                    <CardTitle className="text-lg">2nd Place</CardTitle>
                  </div>
                  <CardDescription>Marketing - Marcus Rodriguez</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-gray-100 text-gray-800">National Qualifier</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-orange-500">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Medal className="h-6 w-6 text-orange-500" />
                    <CardTitle className="text-lg">3rd Place</CardTitle>
                  </div>
                  <CardDescription>Website Design - Alex Thompson</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-orange-100 text-orange-800">National Qualifier</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-6 w-6 text-red-500" />
                    <CardTitle className="text-lg">Top 5</CardTitle>
                  </div>
                  <CardDescription>Business Plan - Team Rodriguez/Patel</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-red-100 text-red-800">National Qualifier</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-red-500">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Trophy className="h-6 w-6 text-red-500" />
                    <CardTitle className="text-lg">Top 5</CardTitle>
                  </div>
                  <CardDescription>Accounting - David Kim</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-red-100 text-red-800">National Qualifier</Badge>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-blue-500">
                <CardHeader>
                  <div className="flex items-center space-x-2">
                    <Star className="h-6 w-6 text-blue-500" />
                    <CardTitle className="text-lg">Top 10</CardTitle>
                  </div>
                  <CardDescription>Economics - Sarah Johnson</CardDescription>
                </CardHeader>
                <CardContent>
                  <Badge className="bg-blue-100 text-blue-800">Outstanding</Badge>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* 2023 Results */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-red-800 mb-6">2023 State Leadership Conference</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <Card className="text-center">
                <CardContent className="pt-4">
                  <Medal className="h-8 w-8 text-yellow-500 mx-auto mb-2" />
                  <div className="font-semibold">1st Place</div>
                  <div className="text-sm text-gray-600">Entrepreneurship</div>
                  <div className="text-xs text-gray-500">Jessica Liu</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-4">
                  <Medal className="h-8 w-8 text-gray-400 mx-auto mb-2" />
                  <div className="font-semibold">2nd Place</div>
                  <div className="text-sm text-gray-600">Digital Design</div>
                  <div className="text-xs text-gray-500">Team Project</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-4">
                  <Medal className="h-8 w-8 text-orange-500 mx-auto mb-2" />
                  <div className="font-semibold">3rd Place</div>
                  <div className="text-sm text-gray-600">Public Speaking</div>
                  <div className="text-xs text-gray-500">Maya Singh</div>
                </CardContent>
              </Card>

              <Card className="text-center">
                <CardContent className="pt-4">
                  <Trophy className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <div className="font-semibold">Top 10</div>
                  <div className="text-sm text-gray-600">Multiple Events</div>
                  <div className="text-xs text-gray-500">8 Members</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Awards & Recognition */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">Awards & Recognition</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-800">
                  <Award className="h-6 w-6 mr-2 text-yellow-600" />
                  Outstanding Chapter Award
                </CardTitle>
                <CardDescription>California FBLA State Office • 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Recognized for exceptional chapter management, member engagement, and 
                  community service contributions throughout the school year.
                </p>
                <Badge className="bg-yellow-100 text-yellow-800">State Recognition</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-800">
                  <Star className="h-6 w-6 mr-2 text-red-600" />
                  Gold Seal Chapter
                </CardTitle>
                <CardDescription>National FBLA • 2023-2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Achieved Gold Seal status for meeting all national standards for 
                  chapter excellence, including membership growth and achievement.
                </p>
                <Badge className="bg-red-100 text-red-800">National Status</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-800">
                  <Users className="h-6 w-6 mr-2 text-yellow-600" />
                  Community Service Award
                </CardTitle>
                <CardDescription>Cupertino Chamber of Commerce • 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Honored for outstanding community service efforts, particularly the 
                  Financial Literacy Workshop program for local elementary schools.
                </p>
                <Badge className="bg-yellow-100 text-yellow-800">Community Impact</Badge>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="flex items-center text-red-800">
                  <Trophy className="h-6 w-6 mr-2 text-red-600" />
                  Chapter of Excellence
                </CardTitle>
                <CardDescription>Regional FBLA • 2023, 2024</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-3">
                  Two consecutive years of regional recognition for outstanding performance 
                  in competitive events and chapter activities.
                </p>
                <Badge className="bg-red-100 text-red-800">Consecutive Years</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Achievement Statistics */}
      <section className="py-16 px-4 bg-red-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center mb-12">Achievement Statistics</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">23</div>
              <div className="text-xl mb-1">State Awards</div>
              <div className="text-sm text-red-200">Since 2020</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">12</div>
              <div className="text-xl mb-1">National Qualifiers</div>
              <div className="text-sm text-red-200">2024 Season</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">95%</div>
              <div className="text-xl mb-1">College Acceptance</div>
              <div className="text-sm text-red-200">Graduating Seniors</div>
            </div>
            
            <div>
              <div className="text-4xl font-bold text-yellow-400 mb-2">$15K</div>
              <div className="text-xl mb-1">Scholarships Won</div>
              <div className="text-sm text-red-200">By Members 2024</div>
            </div>
          </div>
        </div>
      </section>

      {/* Historical Timeline */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-red-900 mb-12">Achievement Timeline</h2>
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-red-800 rounded-full flex items-center justify-center">
                <Calendar className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold text-red-800">2024</div>
                <div className="text-gray-600">
                  • 5 National Qualifiers • Outstanding Chapter Award • 50+ Active Members
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center">
                <Trophy className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold text-red-800">2023</div>
                <div className="text-gray-600">
                  • Gold Seal Chapter Status • First State Championship • Chapter of Excellence
                </div>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-16 h-16 bg-red-600 rounded-full flex items-center justify-center">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <div className="text-lg font-semibold text-red-800">2022</div>
                <div className="text-gray-600">
                  • 3 National Qualifiers • Community Service Award • Student Store Launch
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="text-2xl font-bold text-red-400 mb-4">CHS FBLA</div>
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

export default Achievements;
