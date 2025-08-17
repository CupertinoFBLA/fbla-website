
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Mail, Calendar, GraduationCap } from "lucide-react";
import { Link } from "react-router-dom";

const People = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-card/80 backdrop-blur-xl border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <Link to="/" className="text-2xl font-bold gradient-text">CHS FBLA</Link>
              <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">
                Future Business Leaders of America
              </Badge>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link to="/" className="text-muted-foreground hover:text-primary transition-colors font-medium">Home</Link>
              <Link to="/competitions" className="text-muted-foreground hover:text-primary transition-colors font-medium">Competitions</Link>
              <Link to="/projects" className="text-muted-foreground hover:text-primary transition-colors font-medium">Projects</Link>
              <Link to="/people" className="text-primary font-semibold relative">
                People
                <div className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-primary to-accent rounded-full"></div>
              </Link>
              <Link to="/achievements" className="text-muted-foreground hover:text-primary transition-colors font-medium">Achievements</Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header Section */}
      <section className="py-20 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
        <div className="max-w-4xl mx-auto relative">
          <h1 className="text-6xl font-bold gradient-text mb-8 animate-slide-up">
            Our People
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed max-w-2xl mx-auto">
            Meet the dedicated students, officers, advisors, and alumni who make 
            our FBLA chapter a thriving community of future business leaders.
          </p>
          <div className="flex justify-center">
            <div className="w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary rounded-full"></div>
          </div>
        </div>
      </section>

      {/* Officer Team */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">2024-2025 Officer Team</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {/* President */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Thejas Anoop Kumar</CardTitle>
                <CardDescription>President</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Leadership</Badge>
              </CardContent>
            </Card>

            {/* VP Competitions */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Tanish Savla</CardTitle>
                <CardDescription>VP of Competitions</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent/10 text-accent text-xs">Competitions</Badge>
              </CardContent>
            </Card>

            {/* VP Projects */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Jiansh Goel</CardTitle>
                <CardDescription>VP of Projects</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Projects</Badge>
              </CardContent>
            </Card>

            {/* VP Operations */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Vaishnavi Kamulaiahghari</CardTitle>
                <CardDescription>VP of Operations</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent/10 text-accent text-xs">Operations</Badge>
              </CardContent>
            </Card>

            {/* VP Fundraising */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Utkarsh Mahajan</CardTitle>
                <CardDescription>VP of Fundraising & Financials</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Fundraising</Badge>
              </CardContent>
            </Card>

            {/* Team Members */}
            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Paarth Varshney</CardTitle>
                <CardDescription>Lead of Objective Testing</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent/10 text-accent text-xs">Testing Events</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Stephen Lin</CardTitle>
                <CardDescription>Deputy of Objective Testing</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Testing Events</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Jaden Wang</CardTitle>
                <CardDescription>Co-Lead Presentation Events</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent/10 text-accent text-xs">Presentations</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Avani Bheemaiah</CardTitle>
                <CardDescription>Co-Lead Presentation Events</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Presentations</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Junlan Wang</CardTitle>
                <CardDescription>Lead of Logistics</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent/10 text-accent text-xs">Logistics</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Arnav Daga</CardTitle>
                <CardDescription>Deputy of Logistics</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Logistics</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Amrutha Gundamalla</CardTitle>
                <CardDescription>Lead of Community Service</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent/10 text-accent text-xs">Community Service</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Jessica Gee</CardTitle>
                <CardDescription>Deputy of Community Service</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Community Service</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Akshita Goel</CardTitle>
                <CardDescription>Lead of Event Planning</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent/10 text-accent text-xs">Event Planning</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Calendar className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Siddhant Jain</CardTitle>
                <CardDescription>Event Planning</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Event Planning</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Manav Chotai</CardTitle>
                <CardDescription>Lead of Annual Business Report</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent/10 text-accent text-xs">Business Report</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Nirvaan Vira</CardTitle>
                <CardDescription>Deputy of Annual Business Report</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Business Report</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Shriya Ganesh</CardTitle>
                <CardDescription>Lead of Meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent/10 text-accent text-xs">Meetings</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Rayna Shah</CardTitle>
                <CardDescription>Deputy of Meetings</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Meetings</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Aarav Mehta</CardTitle>
                <CardDescription>Lead of Outreach</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent/10 text-accent text-xs">Outreach</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Anish Phansalkar</CardTitle>
                <CardDescription>Deputy of Outreach</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Outreach</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Claire Dong</CardTitle>
                <CardDescription>Lead of Marketing</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent/10 text-accent text-xs">Marketing</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Mail className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Surya Rajkumar</CardTitle>
                <CardDescription>Deputy of Marketing</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Marketing</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-10 w-10 text-accent" />
                </div>
                <CardTitle className="text-lg text-primary">Zainab Fatima</CardTitle>
                <CardDescription>Lead of Fundraising</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-accent/10 text-accent text-xs">Fundraising</Badge>
              </CardContent>
            </Card>

            <Card className="text-center hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-20 h-20 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Award className="h-10 w-10 text-primary" />
                </div>
                <CardTitle className="text-lg text-primary">Hang Doan</CardTitle>
                <CardDescription>Deputy of Fundraising</CardDescription>
              </CardHeader>
              <CardContent>
                <Badge className="bg-primary/10 text-primary text-xs">Fundraising</Badge>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Advisors */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-primary mb-12">Faculty Advisors</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Ms. Jennifer Wong</CardTitle>
                <CardDescription>Primary Advisor • Business Department</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Teaching business and economics for 8 years at CHS. Former FBLA state officer 
                  and passionate about developing student leadership skills.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-primary/10 text-primary">Business Education</Badge>
                  <Badge className="bg-accent/10 text-accent">FBLA Alumni</Badge>
                </div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-accent/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-accent" />
                </div>
                <CardTitle className="text-xl text-primary">Mr. Robert Chen</CardTitle>
                <CardDescription>Co-Advisor • Technology Department</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Computer science teacher supporting technology-focused competitive events. 
                  Helps students with website design and digital production projects.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-primary/10 text-primary">Technology</Badge>
                  <Badge className="bg-accent/10 text-accent">Web Design</Badge>
                </div>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardHeader>
                <div className="w-24 h-24 bg-primary/10 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <GraduationCap className="h-12 w-12 text-primary" />
                </div>
                <CardTitle className="text-xl text-primary">Mr. Aiden Hill</CardTitle>
                <CardDescription>Club Advisor • Business Department</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Teacher of Principles of Business and International Business. 
                  Provides valuable guidance and mentorship to chapter members.
                </p>
                <div className="flex flex-wrap gap-2 justify-center">
                  <Badge className="bg-primary/10 text-primary">Principles of Business</Badge>
                  <Badge className="bg-accent/10 text-accent">International Business</Badge>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Membership Stats */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-primary mb-12">Our Chapter by the Numbers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="text-center">
              <CardContent className="pt-6">
                <Users className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">25</div>
                <div className="text-sm text-muted-foreground">Total Officers</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <GraduationCap className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-accent">4.2</div>
                <div className="text-sm text-muted-foreground">Average GPA</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Award className="h-8 w-8 text-primary mx-auto mb-2" />
                <div className="text-3xl font-bold text-primary">5</div>
                <div className="text-sm text-muted-foreground">Vice Presidents</div>
              </CardContent>
            </Card>
            
            <Card className="text-center">
              <CardContent className="pt-6">
                <Calendar className="h-8 w-8 text-accent mx-auto mb-2" />
                <div className="text-3xl font-bold text-accent">3</div>
                <div className="text-sm text-muted-foreground">Faculty Advisors</div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-primary via-primary/90 to-accent py-12 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        <div className="max-w-6xl mx-auto text-center relative">
          <div className="text-3xl font-bold text-primary-foreground mb-4 gradient-text">CHS FBLA</div>
          <p className="text-primary-foreground/80 mb-6 text-lg">
            Future Business Leaders of America - Cupertino High School Chapter
          </p>
          <div className="w-16 h-0.5 bg-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-sm text-primary-foreground/60">
            © 2024 Cupertino High School FBLA. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default People;
