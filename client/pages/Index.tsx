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
        <svg className="transform -rotate-90 drop-shadow-lg" width={size} height={size}>
          <defs>
            <linearGradient id="purpleGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#7B2CBF" />
              <stop offset="50%" stopColor="#9D4EDD" />
              <stop offset="100%" stopColor="#C77DFF" />
            </linearGradient>
          </defs>
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
            stroke="url(#purpleGradient)"
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-500 drop-shadow-sm"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{value}</span>
          <span className="text-xs text-gray-500 font-medium">/{max}</span>
        </div>
      </div>
      <span className="text-sm text-gray-600 mt-2 text-center font-medium">{label}</span>
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
    orange: "stroke-orange-500",
    blue: "stroke-blue-500",
  };

  const gradientIds = {
    orange: "orangeGradient",
    blue: "blueGradient",
  };

  return (
    <div className="flex flex-col items-center">
      <div className="relative w-28 h-28">
        <svg className="transform -rotate-90 w-full h-full drop-shadow-lg">
          <defs>
            <linearGradient id="orangeGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f97316" />
              <stop offset="100%" stopColor="#ea580c" />
            </linearGradient>
            <linearGradient id="blueGradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#1d4ed8" />
            </linearGradient>
          </defs>
          <circle
            cx="56"
            cy="56"
            r="35"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-gray-200"
          />
          <circle
            cx="56"
            cy="56"
            r="35"
            stroke={`url(#${gradientIds[color]})`}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="drop-shadow-sm"
          />
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-2xl font-bold text-gray-900">{score}</span>
          <span className="text-xs text-gray-500 font-medium">/10</span>
        </div>
      </div>
      <span className="text-xs text-gray-600 mt-2 text-center font-medium">{label}</span>
    </div>
  );
};

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-8 relative">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-bl from-purple-100/30 to-transparent rounded-full -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-gradient-to-tr from-blue-100/20 to-transparent rounded-full -ml-24 -mb-24 pointer-events-none"></div>
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10">
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
            <div className="bg-gradient-to-br from-upkraft-purple via-purple-600 to-purple-800 rounded-2xl p-6 text-white relative overflow-hidden shadow-2xl hover:shadow-3xl transition-all duration-300 group">
              <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <h3 className="text-xl font-bold mb-3 text-white">Refer and Earn</h3>
                <p className="text-sm text-purple-100 mb-6 leading-relaxed">
                  Get up to <span className="font-bold text-yellow-300">20% commission</span> for every successful referral
                </p>
                <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-6 py-3 rounded-xl text-sm font-bold hover:from-yellow-300 hover:to-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                  Refer Now →
                </button>
              </div>
              <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-yellow-400 rounded-full opacity-10"></div>
              <div className="absolute -right-2 -bottom-2 w-20 h-20 bg-yellow-500 rounded-full opacity-15"></div>
              <div className="absolute top-4 right-4 w-2 h-2 bg-yellow-300 rounded-full animate-pulse"></div>
              <div className="absolute top-8 right-8 w-1 h-1 bg-yellow-200 rounded-full animate-pulse delay-300"></div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 relative z-10">
          {/* Upcoming Lessons Table */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="p-6 border-b border-gray-100 bg-gradient-to-r from-gray-50 to-white rounded-t-2xl">
                <div className="flex justify-between items-center">
                  <h3 className="text-xl font-bold text-gray-800">Upcoming Lessons</h3>
                  <button className="text-upkraft-purple text-sm font-semibold hover:bg-purple-50 px-3 py-1 rounded-lg transition-colors">
                    View All
                  </button>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gradient-to-r from-gray-50 to-gray-100">
                    <tr>
                      <th className="text-left p-3 lg:p-4 text-xs lg:text-sm font-bold text-gray-700 uppercase tracking-wide">
                        Date
                      </th>
                      <th className="text-left p-3 lg:p-4 text-xs lg:text-sm font-bold text-gray-700 uppercase tracking-wide">
                        Time
                      </th>
                      <th className="text-left p-3 lg:p-4 text-xs lg:text-sm font-bold text-gray-700 uppercase tracking-wide hidden sm:table-cell">
                        Course
                      </th>
                      <th className="text-left p-3 lg:p-4 text-xs lg:text-sm font-bold text-gray-700 uppercase tracking-wide">
                        Student
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {upcomingLessons.map((lesson, index) => (
                      <tr key={index} className="border-t border-gray-50 hover:bg-gradient-to-r hover:from-purple-25 hover:to-blue-25 transition-colors group">
                        <td className="p-3 lg:p-4 text-xs lg:text-sm font-medium text-gray-900 group-hover:text-purple-900">
                          <span className="inline-flex items-center px-2 py-1 rounded-full bg-purple-100 text-purple-800 font-medium">
                            {lesson.date}
                          </span>
                        </td>
                        <td className="p-3 lg:p-4 text-xs lg:text-sm text-gray-700 font-medium group-hover:text-gray-900">
                          {lesson.time}
                        </td>
                        <td className="p-3 lg:p-4 text-xs lg:text-sm text-gray-700 font-medium hidden sm:table-cell group-hover:text-gray-900">
                          {lesson.course}
                        </td>
                        <td className="p-3 lg:p-4 text-xs lg:text-sm text-gray-900 font-medium">
                          <span className="inline-flex items-center">
                            <div className="w-6 h-6 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full mr-2 flex items-center justify-center text-white text-xs font-bold">
                              {lesson.student.split(" ")[0][0]}
                            </div>
                            {lesson.student.split(" &")[0]}
                          </span>
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
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold mb-6 text-center text-gray-800">
                Overall Course Performance
              </h3>
              <div className="flex justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-100 to-yellow-100 rounded-full opacity-20"></div>
                <ScoreCircle score={7.6} label="" color="orange" />
              </div>
              <div className="text-center mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-orange-100 text-orange-800 text-xs font-medium">
                  Excellent Performance
                </span>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold mb-6 text-center text-gray-800">
                Overall Student Performance
              </h3>
              <div className="flex justify-center relative">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-cyan-100 rounded-full opacity-20"></div>
                <ScoreCircle score={6.6} label="" color="blue" />
              </div>
              <div className="text-center mt-4">
                <span className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-medium">
                  Good Progress
                </span>
              </div>
            </div>

            {/* Feedback Pending */}
            <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300">
              <h3 className="text-lg font-bold mb-6 text-center text-gray-800">
                Feedback Pending
              </h3>
              <div className="flex justify-center mb-6 relative">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full opacity-20"></div>
                <CircularProgress value={12} max={20} label="" size={80} />
              </div>
              <div className="text-center">
                <button className="bg-gradient-to-r from-upkraft-purple to-purple-600 text-white px-6 py-3 rounded-xl text-sm font-bold hover:from-purple-600 hover:to-purple-700 transition-all duration-300 w-full shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
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
