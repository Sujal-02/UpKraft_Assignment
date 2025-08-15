import DashboardLayout from "@/components/DashboardLayout";
import {
  Calendar,
  Clock,
  Users,
  TrendingUp,
  Star,
  ChevronRight,
} from "lucide-react";

// Mock data for the dashboard
const statsData = [
  { label: "Total Active Students", value: "30", color: "text-blue-600" },
  { label: "Total Active Students", value: "30", color: "text-purple-600" },
  { label: "Total CSAT Score", value: "80%", color: "text-blue-600" },
  { label: "Total CSAT Score", value: "80%", color: "text-purple-600" },
  { label: "Assignment Completion Rate", value: "15%", color: "text-blue-600" },
  {
    label: "Assignment Completion Rate",
    value: "15%",
    color: "text-purple-600",
  },
];

const upcomingLessons = [
  {
    date: "21 July",
    time: "2:00 - 3:00 Pm",
    course: "Introduction to Piano",
    student: "Eunice Braid & Arnold Hayes",
  },
  {
    date: "22 July",
    time: "4:00 - 5:00 Pm",
    course: "Finger Dexterity",
    student: "Eunice Braid & Arnold Hayes",
  },
  {
    date: "23 July",
    time: "3:00 - 4:00 Pm",
    course: "Basic Chords",
    student: "Eunice Braid & Arnold Hayes",
  },
  {
    date: "24 July",
    time: "5:00 - 6:00 Pm",
    course: "Rhythm Basics",
    student: "Eunice Braid & Arnold Hayes",
  },
  {
    date: "25 July",
    time: "2:00 - 3:00 Pm",
    course: "Simple Melodies",
    student: "Eunice Braid & Arnold Hayes",
  },
  {
    date: "26 July",
    time: "6:00 - 7:00 Pm",
    course: "Hand Coordination",
    student: "Eunice Braid & Arnold Hayes",
  },
  {
    date: "24 July",
    time: "1:00 - 4:00 Pm",
    course: "Rhythm Basics",
    student: "Eunice Braid & Arnold Hayes",
  },
  {
    date: "22 July",
    time: "4:00 - 5:00 Pm",
    course: "Finger Warmups",
    student: "Eunice Braid & Arnold Hayes",
  },
];

const CircularProgress = ({
  value,
  max,
  label,
  size = 120,
}: {
  value: number;
  max: number;
  label: string;
  size?: number;
}) => {
  const percentage = (value / max) * 100;
  const circumference = 2 * Math.PI * (size / 3);
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="transform -rotate-90" width={size} height={size}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 3}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200"
          />
          <circle
            cx={size / 2}
            cy={size / 2}
            r={size / 3}
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className="text-upkraft-purple transition-all duration-300"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{value}</span>
          <span className="text-xs text-gray-500">/{max}</span>
        </div>
      </div>
      <span className="text-sm text-gray-600 mt-2 text-center">{label}</span>
    </div>
  );
};

const ScoreCircle = ({
  score,
  label,
  color = "orange",
}: {
  score: number;
  label: string;
  color?: string;
}) => {
  const percentage = score * 10; // Convert 7.6 to 76%
  const circumference = 2 * Math.PI * 35;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  const colorClasses = {
    orange: "text-orange-500",
    blue: "text-blue-500",
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-24 h-24">
        <svg className="transform -rotate-90 w-full h-full">
          <circle
            cx="48"
            cy="48"
            r="35"
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            className="text-gray-200"
          />
          <circle
            cx="48"
            cy="48"
            r="35"
            stroke="currentColor"
            strokeWidth="6"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            className={colorClasses[color]}
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-xl font-bold text-gray-900">{score}</span>
          <span className="text-xs text-gray-500">/10</span>
        </div>
      </div>
      <span className="text-xs text-gray-600 mt-2 text-center">{label}</span>
    </div>
  );
};

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {/* Profile Card */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-semibold mb-4 text-gray-800">Profile</h3>
              <div className="flex flex-col items-center text-center">
                <div className="relative w-16 lg:w-20 h-16 lg:h-20 mb-4">
                  <div className="w-full h-full bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg">
                    <img
                      src="/api/placeholder/80/80"
                      alt="Sherry Wolf"
                      className="w-12 lg:w-16 h-12 lg:h-16 rounded-full object-cover border-2 border-white"
                    />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                  </div>
                </div>
                <h4 className="font-bold text-gray-900 text-lg">Sherry Wolf</h4>
                <p className="text-sm text-gray-600 mb-4 font-medium">Piano Tutor</p>
                <div className="flex flex-col sm:flex-row items-center gap-2 lg:gap-4 text-xs">
                  <span className="flex items-center gap-1 bg-blue-50 px-2 py-1 rounded-full text-blue-700">
                    <Users className="w-3 h-3" />
                    Students 30
                  </span>
                  <span className="flex items-center gap-1 bg-purple-50 px-2 py-1 rounded-full text-purple-700">
                    <Calendar className="w-3 h-3" />
                    Course 6
                  </span>
                  <span className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full text-yellow-700">
                    <Star className="w-3 h-3 fill-current" />
                    Rating 5
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="md:col-span-2 lg:col-span-2">
            <div className="grid grid-cols-2 gap-3 lg:gap-4 h-full">
              {statsData.map((stat, index) => (
                <div
                  key={index}
                  className="bg-white rounded-2xl p-4 lg:p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col justify-center relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full -mr-10 -mt-10 opacity-50 group-hover:opacity-70 transition-opacity"></div>
                  <div
                    className={`text-2xl lg:text-3xl font-bold ${stat.color} mb-2 relative z-10`}
                  >
                    {stat.value}
                  </div>
                  <div className="text-xs lg:text-sm text-gray-600 leading-tight font-medium relative z-10">
                    {stat.label}
                  </div>
                  <div className="absolute bottom-2 right-2 w-8 h-8 rounded-full bg-gradient-to-br from-gray-100 to-gray-200 opacity-20"></div>
                </div>
              ))}
            </div>
          </div>

          {/* Refer and Earn */}
          <div className="md:col-span-2 lg:col-span-1">
            <div className="bg-gradient-to-br from-upkraft-purple to-purple-700 rounded-xl p-6 text-white relative overflow-hidden">
              <h3 className="text-lg font-semibold mb-2">Refer and Earn</h3>
              <p className="text-sm text-purple-100 mb-4">
                Get up to 20% commission for every successful referral
              </p>
              <button className="bg-yellow-400 text-gray-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-yellow-300 transition-colors">
                Refer Now →
              </button>
              <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-yellow-400 rounded-full opacity-20"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-6">
          {/* Upcoming Lessons Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl border border-gray-200">
              <div className="p-6 border-b border-gray-200">
                <div className="flex justify-between items-center">
                  <h3 className="text-lg font-semibold">Upcoming Lessons</h3>
                  <button className="text-upkraft-purple text-sm font-medium hover:underline">
                    View All
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="text-left p-2 lg:p-4 text-xs lg:text-sm font-medium text-gray-600">
                        Date
                      </th>
                      <th className="text-left p-2 lg:p-4 text-xs lg:text-sm font-medium text-gray-600">
                        Time
                      </th>
                      <th className="text-left p-2 lg:p-4 text-xs lg:text-sm font-medium text-gray-600 hidden sm:table-cell">
                        Course
                      </th>
                      <th className="text-left p-2 lg:p-4 text-xs lg:text-sm font-medium text-gray-600">
                        Student
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingLessons.map((lesson, index) => (
                      <tr key={index} className="border-t border-gray-100">
                        <td className="p-2 lg:p-4 text-xs lg:text-sm text-gray-900">
                          {lesson.date}
                        </td>
                        <td className="p-2 lg:p-4 text-xs lg:text-sm text-gray-900">
                          {lesson.time}
                        </td>
                        <td className="p-2 lg:p-4 text-xs lg:text-sm text-gray-900 hidden sm:table-cell">
                          {lesson.course}
                        </td>
                        <td className="p-2 lg:p-4 text-xs lg:text-sm text-gray-900">
                          {lesson.student.split(" &")[0]}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Right Side Widgets */}
          <div className="space-y-4 lg:space-y-6">
            {/* Performance Widgets */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Overall Course Performance
              </h3>
              <div className="flex justify-center">
                <ScoreCircle score={7.6} label="" color="orange" />
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Overall Student Performance
              </h3>
              <div className="flex justify-center">
                <ScoreCircle score={6.6} label="" color="blue" />
              </div>
            </div>

            {/* Feedback Pending */}
            <div className="bg-white rounded-xl p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-4 text-center">
                Feedback Pending
              </h3>
              <div className="flex justify-center mb-4">
                <CircularProgress value={12} max={20} label="" size={80} />
              </div>
              <div className="text-center">
                <button className="bg-upkraft-purple text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-upkraft-purple-dark transition-colors w-full">
                  Give Feedback →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
}
