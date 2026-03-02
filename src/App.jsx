export default function Login() {
  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-stone-900 via-stone-800 to-stone-900">
      
      {/* Decorative background circles */}
      <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-emerald-400 opacity-10 rounded-full blur-3xl"></div>

      {/* Card */}
      <div className="relative z-10 w-full max-w-md mx-4 bg-stone-800 border border-stone-700 rounded-2xl shadow-2xl p-10">

        {/* Heading */}
        <h1 className="text-center text-3xl font-bold text-white mb-1 tracking-tight">
          Welcome back
        </h1>
        <p className="text-center text-stone-400 text-sm mb-8">
          Sign in to continue your journey
        </p>

        {/* Form */}
        <div className="space-y-5">

          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-stone-300 mb-1">
              Email
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl bg-stone-700 border border-stone-600 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex justify-between items-center mb-1">
              <label className="block text-sm font-medium text-stone-300">
                Password
              </label>
              <a href="#" className="text-xs text-blue-400 hover:text-blue-300 transition">
                Forgot password?
              </a>
            </div>
            <input
              type="password"
              placeholder="######"
              className="w-full px-4 py-3 rounded-xl bg-stone-700 border border-stone-600 text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition"
            />
          </div>

          {/* Submit Button */}
          <button className="w-full py-3 rounded-xl bg-blue-500 hover:bg-blue-400 text-white font-semibold text-sm tracking-wide transition duration-200 shadow-lg shadow-blue-900">
            Sign In
          </button>

        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-stone-700"></div>
          <span className="px-3 text-stone-500 text-xs">or</span>
          <div className="flex-1 h-px bg-stone-700"></div>
        </div>

        {/* Sign up link */}
        <p className="text-center text-stone-400 text-sm mt-6">
          Don't have an account?{" "}
          <a href="#" className="text-blue-400 hover:text-blue-300 font-medium transition">
            Sign up
          </a>
        </p>

      </div> {/* ✅ Card closes here */}
    </div>
  )
}