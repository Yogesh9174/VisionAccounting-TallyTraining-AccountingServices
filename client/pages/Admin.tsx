import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  User, 
  Mail, 
  Phone, 
  MapPin, 
  GraduationCap, 
  Calendar,
  Download,
  RefreshCw
} from "lucide-react";

interface Enrollment {
  id: string;
  fullName: string;
  email: string;
  phone: string;
  address: string;
  selectedCourse: string;
  preferredTiming: string;
  previousExperience: string;
  motivation: string;
  submittedAt: string;
}

export default function Admin() {
  const [enrollments, setEnrollments] = useState<Enrollment[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchEnrollments = async () => {
    try {
      setLoading(true);
      const response = await fetch('/api/enrollments');
      const result = await response.json();
      
      if (result.success) {
        setEnrollments(result.enrollments);
        setError(null);
      } else {
        setError(result.message || 'Failed to fetch enrollments');
      }
    } catch (err) {
      setError('Failed to fetch enrollments');
      console.error('Error fetching enrollments:', err);
    } finally {
      setLoading(false);
    }
  };

  const downloadCSV = async () => {
    try {
      const response = await fetch('/api/enrollments/download');
      
      if (response.ok) {
        const blob = await response.blob();
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.style.display = 'none';
        a.href = url;
        a.download = `enrollments_${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
      } else {
        alert('Failed to download CSV file');
      }
    } catch (err) {
      console.error('Error downloading CSV:', err);
      alert('Failed to download CSV file');
    }
  };

  useEffect(() => {
    fetchEnrollments();
  }, []);

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const getTimingLabel = (timing: string) => {
    const timings = {
      morning: "Morning (9:00 AM - 11:00 AM)",
      afternoon: "Afternoon (2:00 PM - 4:00 PM)", 
      evening: "Evening (6:00 PM - 8:00 PM)"
    };
    return timings[timing as keyof typeof timings] || timing;
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-4xl font-bold text-gray-900">
              Enrollment <span className="text-vision-yellow">Dashboard</span>
            </h1>
            <p className="text-gray-600 mt-2">
              Manage and view student enrollments
            </p>
          </div>
          
          <div className="flex gap-3">
            <Button 
              onClick={fetchEnrollments}
              variant="outline"
              className="flex items-center gap-2"
            >
              <RefreshCw className="w-4 h-4" />
              Refresh
            </Button>
            <Button 
              onClick={downloadCSV}
              className="bg-vision-yellow hover:bg-vision-yellow-dark text-gray-900 font-semibold flex items-center gap-2"
            >
              <Download className="w-4 h-4" />
              Download CSV
            </Button>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Total Enrollments</p>
                  <p className="text-3xl font-bold text-gray-900">{enrollments.length}</p>
                </div>
                <User className="w-8 h-8 text-vision-yellow" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-3xl font-bold text-gray-900">
                    {enrollments.filter(e => 
                      new Date(e.submittedAt).getMonth() === new Date().getMonth()
                    ).length}
                  </p>
                </div>
                <Calendar className="w-8 h-8 text-vision-yellow" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-600">Most Popular Course</p>
                  <p className="text-lg font-bold text-gray-900">
                    {enrollments.length > 0 
                      ? Object.entries(
                          enrollments.reduce((acc, e) => {
                            acc[e.selectedCourse] = (acc[e.selectedCourse] || 0) + 1;
                            return acc;
                          }, {} as Record<string, number>)
                        ).sort(([,a], [,b]) => b - a)[0]?.[0] || 'N/A'
                      : 'N/A'
                    }
                  </p>
                </div>
                <GraduationCap className="w-8 h-8 text-vision-yellow" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Enrollments List */}
        {loading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-vision-yellow mx-auto"></div>
            <p className="text-gray-600 mt-4">Loading enrollments...</p>
          </div>
        ) : error ? (
          <Card className="border-red-200 bg-red-50">
            <CardContent className="p-6 text-center">
              <p className="text-red-600">{error}</p>
              <Button 
                onClick={fetchEnrollments}
                className="mt-4 bg-red-600 hover:bg-red-700 text-white"
              >
                Try Again
              </Button>
            </CardContent>
          </Card>
        ) : enrollments.length === 0 ? (
          <Card>
            <CardContent className="p-12 text-center">
              <GraduationCap className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">No Enrollments Yet</h3>
              <p className="text-gray-600">
                Student enrollments will appear here once they submit the form.
              </p>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-6">
            {enrollments.map((enrollment) => (
              <Card key={enrollment.id} className="hover:shadow-lg transition-shadow">
                <CardHeader className="pb-3">
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-gray-900">
                        {enrollment.fullName}
                      </CardTitle>
                      <p className="text-sm text-gray-500 mt-1">
                        Enrolled on {formatDate(enrollment.submittedAt)}
                      </p>
                    </div>
                    <Badge className="bg-vision-yellow text-gray-900 font-semibold">
                      {enrollment.selectedCourse}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Contact Information */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Contact Info</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <Mail className="w-4 h-4 mr-2" />
                          <a href={`mailto:${enrollment.email}`} className="hover:text-vision-yellow">
                            {enrollment.email}
                          </a>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Phone className="w-4 h-4 mr-2" />
                          <a href={`tel:${enrollment.phone}`} className="hover:text-vision-yellow">
                            {enrollment.phone}
                          </a>
                        </div>
                        {enrollment.address && (
                          <div className="flex items-start text-gray-600">
                            <MapPin className="w-4 h-4 mr-2 mt-0.5" />
                            <span>{enrollment.address}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Course Details */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Course Details</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex items-center text-gray-600">
                          <GraduationCap className="w-4 h-4 mr-2" />
                          <span>{enrollment.selectedCourse}</span>
                        </div>
                        <div className="flex items-center text-gray-600">
                          <Calendar className="w-4 h-4 mr-2" />
                          <span>{getTimingLabel(enrollment.preferredTiming)}</span>
                        </div>
                        {enrollment.previousExperience && (
                          <div className="text-gray-600">
                            <span className="font-medium">Experience: </span>
                            <span className="capitalize">{enrollment.previousExperience}</span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Motivation */}
                    {enrollment.motivation && (
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Goals & Motivation</h4>
                        <p className="text-sm text-gray-600 line-clamp-3">
                          {enrollment.motivation}
                        </p>
                      </div>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
