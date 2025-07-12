import { SignIn } from '@clerk/clerk-react'

export default function LoginPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome Back</h1>
          <p className="text-gray-600">Sign in to your account</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8">
          <SignIn
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-indigo-600 hover:bg-indigo-700 text-sm normal-case",
                card: "shadow-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: 
                  "border border-gray-300 hover:bg-gray-50 text-gray-700",
                formFieldInput: 
                  "border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500",
                footerActionLink: "text-indigo-600 hover:text-indigo-700"
              }
            }}
            redirectUrl="/dashboard"
            signUpUrl="/signup"
          />
        </div>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Don't have an account?{' '}
            <a href="/signup" className="text-indigo-600 hover:text-indigo-700 font-medium">
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
