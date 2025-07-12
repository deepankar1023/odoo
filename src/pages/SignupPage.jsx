import { SignUp } from '@clerk/clerk-react'

export default function SignupPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-pink-100 flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Create Account</h1>
          <p className="text-gray-600">Join us today and get started</p>
        </div>
        
        <div className="bg-white rounded-lg shadow-xl p-8">
          <SignUp
            appearance={{
              elements: {
                formButtonPrimary: 
                  "bg-purple-600 hover:bg-purple-700 text-sm normal-case",
                card: "shadow-none",
                headerTitle: "hidden",
                headerSubtitle: "hidden",
                socialButtonsBlockButton: 
                  "border border-gray-300 hover:bg-gray-50 text-gray-700",
                formFieldInput: 
                  "border border-gray-300 rounded-md focus:ring-2 focus:ring-purple-500 focus:border-purple-500",
                footerActionLink: "text-purple-600 hover:text-purple-700"
              }
            }}
            redirectUrl="/dashboard"
            signInUrl="/login"
          />
        </div>
        
        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account?{' '}
            <a href="/login" className="text-purple-600 hover:text-purple-700 font-medium">
              Sign in
            </a>
          </p>
        </div>
      </div>
    </div>
  )
}
