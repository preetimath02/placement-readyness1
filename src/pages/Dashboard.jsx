function Dashboard() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Problems Solved</h3>
          <p className="text-3xl font-bold text-primary">0</p>
          <p className="text-sm text-gray-500 mt-1">Keep practicing!</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Mock Interviews</h3>
          <p className="text-3xl font-bold text-primary">0</p>
          <p className="text-sm text-gray-500 mt-1">Schedule your first one</p>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Current Streak</h3>
          <p className="text-3xl font-bold text-primary">0 days</p>
          <p className="text-sm text-gray-500 mt-1">Start your streak today</p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
