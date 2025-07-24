import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  Users,
  Award,
  BookOpen,
  Calculator,
  Star,
  Quote,
  GraduationCap,
  MessageCircle,
} from "lucide-react";
import { Link } from "react-router-dom";
import ChatBot from "@/components/ChatBot";
import EnrollmentForm from "@/components/EnrollmentForm";

export default function Index() {
  const [isEnrollmentFormOpen, setIsEnrollmentFormOpen] = useState(false);

  const openEnrollmentForm = () => setIsEnrollmentFormOpen(true);
  const closeEnrollmentForm = () => setIsEnrollmentFormOpen(false);
  const courses = [
    { name: "GST Accounting with Placement", popular: true },
    { name: "Tally Prime", popular: true },
    { name: "Tally ERP 9", popular: false },
    { name: "Basic Computer", popular: false },
    { name: "Typing Practice (Hindi/English)", popular: false },
  ];

    const features = [
    {
      icon: Users,
      title: "Expert Training",
      desc: "Learn from experienced professionals with practical education",
    },
    {
      icon: Award,
      title: "Placement Assistance",
      desc: "Connect with top companies and firms through our placement support",
    },
    {
      icon: BookOpen,
      title: "Flexible Learning",
      desc: "Online and offline courses to accommodate diverse learning preferences",
    },
    {
      icon: Calculator,
      title: "Professional Services",
      desc: "Bookkeeping, financial statements, tax planning & payroll management",
    },
  ];

  const testimonials = [
    {
      name: "Yogesh Uikey",
      role: "Student",
      image: "YU",
      rating: 5,
      review:
        "I had an excellent learning experience at Vision Accounting – Tally Training. The course was structured in a clear and practical way, making it easy to grasp even the most detailed accounting concepts. The instructor's depth of knowledge and ability to explain Tally features with real-world examples truly made the difference.",
      course: "Tally Training",
      timeAgo: "a week ago",
    },
    {
      name: "Manoj Kumar Bhate",
      role: "Employer",
      image: "MB",
      rating: 5,
      review:
        "We hired one ex student of vision accounting classes and found his knowledge about Tally was good. Wish you all the best",
      course: "Tally Training",
      timeAgo: "a year ago",
    },
    {
      name: "Deepak Tanwar",
      role: "Student",
      image: "DT",
      rating: 5,
      review: "Sabse best Accounting coaching ❤️😍💯💯100 percent placement",
      course: "Accounting with Placement",
      timeAgo: "a year ago",
    },
    {
      name: "Manish Geharwal",
      role: "Local Guide",
      image: "MG",
      rating: 5,
      review:
        "Best accounting classes in Central Indore. Practical and manually learning experience, Also theoretically excellent teaching.",
      course: "Accounting Classes",
      timeAgo: "11 months ago",
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <div>
                <h1 className="text-xl font-bold leading-tight">
                  <span className="text-vision-yellow">Vision Accounting</span>
                                    <span className="text-gray-800">
                    {" "}
                    - Tally Training <br />
                    &nbsp; &nbsp; &nbsp; & Accounting Services
                  </span>
                </h1>
                
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                About
              </a>
              <a
                href="#courses"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                Courses
              </a>
              <Link
                to="/schedule"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                Schedule
              </Link>
              <a
                href="#testimonials"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                Reviews
              </a>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-vision-yellow transition-colors font-medium"
              >
                Contact
              </Link>
              <Link
                to="/educational"
                className="text-white bg-gray-900 hover:bg-gray-800 transition-colors font-medium px-4 py-2 rounded-lg"
              >
                Institute View
              </Link>
              <Button
                onClick={openEnrollmentForm}
                className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold px-6"
              >
                Enroll Now
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="bg-vision-gray min-h-[80vh] flex justify-center flex-col bg-cover bg-center bg-no-repeat shadow-lg relative"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80)",
          boxShadow: "1px 1px 3px 0px rgba(0, 0, 0, 1)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Master Tally
              <br />
              Accounting with
              <br />
              <span className="text-vision-yellow">Vision Accounting</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-10 max-w-2xl">
              Unlock your potential with our expert-led courses and hands-on
              training.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <Button
                size="lg"
                onClick={openEnrollmentForm}
                className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold px-8 py-4 text-lg"
              >
                Explore Courses
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 text-lg font-semibold"
              >
                Contact Us
              </Button>
            </div>

            {/* Social Proof */}
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-vision-yellow rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-gray-900 font-bold text-sm">😊</span>
                </div>
                <div className="w-10 h-10 bg-blue-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white font-bold text-sm">👨</span>
                </div>
                <div className="w-10 h-10 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                  <span className="text-white font-bold text-sm">👩</span>
                </div>
              </div>
              <p className="text-gray-300 font-medium">
                                    Joined by 70+ students this year
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card
                key={index}
                className="text-center border-gray-100 hover:border-vision-yellow/30 transition-colors"
              >
                <CardContent className="p-8">
                  <div className="w-16 h-16 bg-vision-yellow/10 rounded-full flex items-center justify-center mx-auto mb-6">
                    <feature.icon className="w-8 h-8 text-vision-yellow" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Educational Layout Promotion */}
      <section className="py-16 bg-gradient-to-r from-gray-900 to-gray-800 text-white">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="w-20 h-20 bg-vision-yellow rounded-full flex items-center justify-center mx-auto mb-6">
              <GraduationCap className="w-10 h-10 text-gray-900" />
            </div>
            <h2 className="text-4xl font-bold mb-6">
              Experience Our{" "}
              <span className="text-vision-yellow">Educational Institute</span>{" "}
              Layout
            </h2>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Discover our comprehensive academic programs, distinguished
              faculty, and world-class facilities in our specially designed
              educational institute interface.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="text-center">
                <BookOpen className="w-8 h-8 text-vision-yellow mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Academic Programs</h3>
                <p className="text-sm text-gray-300">
                  Comprehensive diploma and certificate courses
                </p>
              </div>
              <div className="text-center">
                <Users className="w-8 h-8 text-vision-yellow mx-auto mb-3" />
                <h3 className="font-semibold mb-2">Distinguished Faculty</h3>
                <p className="text-sm text-gray-300">
                  Industry experts and experienced educators
                </p>
              </div>
              <div className="text-center">
                <Award className="w-8 h-8 text-vision-yellow mx-auto mb-3" />
                <h3 className="font-semibold mb-2">World-Class Facilities</h3>
                <p className="text-sm text-gray-300">
                  Modern infrastructure and learning resources
                </p>
              </div>
            </div>
            <Link
              to="/educational"
              className="inline-flex items-center px-8 py-4 bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold rounded-lg transition-colors"
            >
              <GraduationCap className="w-5 h-5 mr-2" />
              View Educational Institute Layout
            </Link>
          </div>
        </div>
      </section>

      {/* Courses Section */}
      <section id="courses" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Course Description
            </h2>
            <p className="text-xl text-gray-600">
              Professional training programs designed for your success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {courses.map((course, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 overflow-hidden"
              >
                <CardContent className="p-8">
                  <div className="flex items-start justify-between mb-6">
                    <h3 className="font-semibold text-xl group-hover:text-vision-yellow transition-colors">
                      {course.name}
                    </h3>
                    {course.popular && (
                      <Badge className="bg-vision-yellow text-gray-900 font-semibold">
                        Popular
                      </Badge>
                    )}
                  </div>
                  <p className="text-gray-600 mb-6">
                    Comprehensive training with hands-on practice and
                    industry-relevant curriculum
                  </p>
                  <Button
                    onClick={openEnrollmentForm}
                    className="w-full bg-gray-900 hover:bg-vision-yellow hover:text-gray-900 transition-colors font-semibold"
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Student Reviews Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Student Reviews
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear what our successful students have to say about their learning
              journey with Vision Accounting
            </p>
          </div>

          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets%2Fe4620f5f714740b9bf9aaa967b901231%2Fed4eb126e84340a5b5ae7595e54e92ad?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2Fe4620f5f714740b9bf9aaa967b901231%2Fed4eb126e84340a5b5ae7595e54e92ad?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2Fe4620f5f714740b9bf9aaa967b901231%2Fed4eb126e84340a5b5ae7595e54e92ad?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2Fe4620f5f714740b9bf9aaa967b901231%2Fed4eb126e84340a5b5ae7595e54e92ad?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2Fe4620f5f714740b9bf9aaa967b901231%2Fed4eb126e84340a5b5ae7595e54e92ad?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2Fe4620f5f714740b9bf9aaa967b901231%2Fed4eb126e84340a5b5ae7595e54e92ad?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2Fe4620f5f714740b9bf9aaa967b901231%2Fed4eb126e84340a5b5ae7595e54e92ad?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2Fe4620f5f714740b9bf9aaa967b901231%2Fed4eb126e84340a5b5ae7595e54e92ad"
            className="w-full mt-5 aspect-[1.34] object-contain object-center min-h-[20px] min-w-[20px] overflow-hidden"
          />

          {/* Stats Section */}
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-4xl font-bold text-vision-yellow mb-2">
                49
              </div>
              <div className="text-gray-600">Google Reviews</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vision-yellow mb-2">
                5.0
              </div>
              <div className="text-gray-600">Star Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vision-yellow mb-2">
                100%
              </div>
              <div className="text-gray-600">Placement Support</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-vision-yellow mb-2">
                5+
              </div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Welcome Section */}
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                ✨ Welcome to Vision Accounting - Tally Training & Accounting
                Services
              </h2>
              
              <p className="text-2xl text-vision-yellow font-semibold mb-6">
                Your Success is Our Vision
              </p>
              <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
                At Vision Accounting, we empower individuals with the essential
                skills to thrive in today's accounting landscape. Based in
                Indore, we specialize in{" "}
                <strong className="text-vision-yellow">
                  Tally training and professional accounting services
                </strong>{" "}
                designed to help you build a successful career with confidence
                and clarity.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
              {/* What We Offer */}
              <Card className="border-l-4 border-l-vision-yellow">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    🎓 What We Offer
                  </h3>
                  <p className="text-lg text-gray-600 mb-6">
                    Our training programs are tailored for practical learning
                    and career advancement:
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-vision-yellow flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          GST Accounting with Placement Support
                        </h4>
                        <p className="text-gray-600">
                          Hands-on skills for real-world application.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-vision-yellow flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          Tally Prime & Tally ERP 9
                        </h4>
                        <p className="text-gray-600">
                          Industry-standard tools taught by experienced
                          professionals.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-vision-yellow flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          Basic Computer Training
                        </h4>
                        <p className="text-gray-600">
                          Build your digital foundation for accounting success.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-3">
                      <CheckCircle className="w-6 h-6 text-vision-yellow flex-shrink-0 mt-1" />
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          Typing Practice (Hindi & English)
                        </h4>
                        <p className="text-gray-600">
                          Sharpen speed and accuracy for documentation tasks.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Why Choose Us */}
              <Card className="border-l-4 border-l-vision-yellow">
                <CardContent className="p-8">
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">
                    👨‍🏫 Why Choose Vision Accounting?
                  </h3>
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-vision-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Users className="w-6 h-6 text-vision-yellow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          Expert Guidance
                        </h4>
                        <p className="text-gray-600">
                          From seasoned professionals with real industry
                          experience.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-vision-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Award className="w-6 h-6 text-vision-yellow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          Career-Focused Training
                        </h4>
                        <p className="text-gray-600">
                          With placement assistance to help you land your dream
                          job.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-vision-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen className="w-6 h-6 text-vision-yellow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          Interactive Sessions
                        </h4>
                        <p className="text-gray-600">
                          Practical learning that boost confidence and skills.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-vision-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Calculator className="w-6 h-6 text-vision-yellow" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-lg text-gray-900">
                          Personalized Support
                        </h4>
                        <p className="text-gray-600">
                          Help every student achieve their individual goals.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Instructor Section */}
            <div className="bg-gray-50 rounded-2xl p-12 text-center">
              <h3 className="text-3xl font-bold text-gray-900 mb-8">
                Meet Your Expert Instructor
              </h3>
              <div className="max-w-3xl mx-auto">
                <div className="w-24 h-24 bg-vision-yellow rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-gray-900 font-bold text-3xl">DP</span>
                </div>
                <h4 className="text-2xl font-bold text-gray-900 mb-2">
                  Mr. Dhananjay Patidar
                </h4>
                <p className="text-xl text-vision-yellow mb-6">
                  Expert Accounting Trainer
                </p>
                <p className="text-lg text-gray-700 leading-relaxed">
                  With years of experience in accounting and training, Mr.
                  Patidar specializes in Tally software, GST compliance, and
                  practical accounting solutions. Dedicated to providing quality
                  education and ensuring student success through comprehensive
                  training and placement support.
                </p>

                {/* Contact Info */}
                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-xl font-semibold text-gray-900 mb-4">
                    📍 Contact Information
                  </h4>
                                                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 text-sm">
                                        <div>
                      <p className="font-semibold text-gray-900">📞 Phone</p>
                      <p className="text-gray-600">+91 9009232649</p>
                      <p className="text-gray-600">+91 9179632649</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">💬 WhatsApp</p>
                      <a
                        href="https://wa.me/919179632649"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors"
                      >
                        +91 9179632649
                      </a>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">📧 Email</p>
                      <p className="text-gray-600">Visionaccounting@myyahoo.com</p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">📍 Address</p>
                      <p className="text-gray-600">
                        3rd Floor, Advocate Chamber, 301,
                        <br />6 Sikh Mohalla Main Road,
                        <br />Near Central Camera Repairing,
                        <br />Indore GPO, Indore - 452007
                      </p>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">🕒 Business Hours</p>
                      <p className="text-gray-600">Monday - Sunday</p>
                      <p className="text-gray-600">8:00 AM - 8:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Get In Touch
            </h2>
            <p className="text-xl text-gray-600">
              Ready to start your accounting journey? Contact us today!
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <div className="space-y-8">
              <Card className="border-l-4 border-l-vision-yellow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vision-yellow/10 rounded-full flex items-center justify-center">
                      <Phone className="w-6 h-6 text-vision-yellow" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Phone Numbers</h3>
                      <p className="text-gray-600">+91 9009232649</p>
                      <p className="text-gray-600">+91 9179632649</p>
                    </div>
                  </div>
                                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-green-500">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-green-500/10 rounded-full flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-green-500" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">WhatsApp</h3>
                      <a
                        href="https://wa.me/919179632649"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-600 hover:text-green-700 transition-colors font-medium"
                      >
                        +91 9179632649
                      </a>
                      <p className="text-gray-500 text-sm mt-1">Click to chat instantly</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-vision-yellow">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-vision-yellow/10 rounded-full flex items-center justify-center">
                      <Mail className="w-6 h-6 text-vision-yellow" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Email</h3>
                      <p className="text-gray-600">Visionaccounting@myyahoo.com</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-vision-yellow">
                <CardContent className="p-8">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-vision-yellow/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-6 h-6 text-vision-yellow" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">Address</h3>
                      <p className="text-gray-600">
                        301 (3rd Floor) Advocate Chamber,
                        <br />
                        6 Sikkha Mohalla Main Road
                        <br />
                        Indore
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-gray-900 text-white">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">
                  Ready to Start Learning?
                </h3>
                <p className="text-gray-300 mb-8">
                  Join Vision Accounting - Tally Training & Accounting Services
                  and take the first step towards a successful career in
                  accounting.
                </p>
                <div className="space-y-4">
                  <Button
                    onClick={openEnrollmentForm}
                    className="w-full bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 py-3 font-semibold"
                  >
                    Enroll Today
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full border-white text-white hover:bg-white hover:text-gray-900 py-3 font-semibold"
                  >
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div>
                <h3 className="text-lg font-bold mb-2">
                  <span className="text-vision-yellow">Vision Accounting</span>
                  <span className="text-white">
                    {" "}
                    - Tally Training & Accounting Services
                  </span>
                </h3>
                
                <p className="text-gray-400">Your Success is Our Vision</p>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-vision-yellow transition-colors"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    href="#courses"
                    className="text-gray-400 hover:text-vision-yellow transition-colors"
                  >
                    Courses
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-vision-yellow transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <p className="text-gray-400 text-sm">
                301 (3rd Floor) Advocate Chamber
                <br />6 Sikkha Mohalla Main Road, Indore
              </p>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center">
            <p className="text-gray-400">
              © 2024 Vision Accounting - Tally Training & Accounting Services.
              All rights reserved.
            </p>
          </div>
        </div>
      </footer>

            {/* ChatBot */}
      <ChatBot />

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/919179632649"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-20 z-40 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
        title="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6" />
      </a>

      {/* Enrollment Form */}
      <EnrollmentForm
        isOpen={isEnrollmentFormOpen}
        onClose={closeEnrollmentForm}
      />
    </div>
  );
}
