// import {
//   sendSignInLinkToEmail,
//   isSignInWithEmailLink,
//   signInWithEmailLink,
//   GoogleAuthProvider,
//   signInWithPopup,
// } from "firebase/auth";


// import React, { useState, useEffect } from "react";
// import { auth } from "../firebase/firebase"; // adjust path if needed
// // import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// // this for login welcome page below one line
// import { useNavigate } from "react-router-dom";



// // Main SignUp component
// const SignUpPage = () => {
//   const navigate = useNavigate(); 
//   // above line for login welcome page
//   const [email, setEmail] = useState("");
//   const [activeImageIndex, setActiveImageIndex] = useState(0);
//   const [isPaused, setIsPaused] = useState(false);
//   useEffect(() => {
//     if (isSignInWithEmailLink(auth, window.location.href)) {
//       let storedEmail = window.localStorage.getItem("emailForSignIn");
//       if (!storedEmail) {
//         storedEmail = window.prompt("Please enter your email again to confirm");
//       }

//       signInWithEmailLink(auth, storedEmail, window.location.href)
//         .then((result) => {
//           // alert(`Signed in as ${result.user.email}`);
//           navigate("/welcome");

//           window.localStorage.removeItem("emailForSignIn");
//           // TODO: Redirect to dashboard or update user state
//         })
//         .catch((error) => {
//           console.error("Error during sign-in:", error);
//           alert("Email sign-in failed.");
//         });
//     }
//   }, []);

//   const handleEmailLogin = async () => {
//     if (!email) {
//       alert("Please enter an email address.");
//       return;
//     }

//     const actionCodeSettings = {
//       url: "http://localhost:5173/signup", // Change for production
//       handleCodeInApp: true,
//     };

//     try {
//       await sendSignInLinkToEmail(auth, email, actionCodeSettings);
//       window.localStorage.setItem("emailForSignIn", email);
//       alert("Sign-in link sent to your email.");
//     } catch (error) {
//       console.error("Error sending email sign-in link:", error);
//       alert("Failed to send sign-in link.");
//     }
//   };

//   const rightImages = [
//     "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=500&h=400&fit=crop",
//     "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=400&fit=crop",
//   ];

//   // Firebase Google Sign-In
//   const handleGoogleSignIn = async () => {
//     const provider = new GoogleAuthProvider();
//     try {
//       const result = await signInWithPopup(auth, provider);
//       const user = result.user;
//       console.log("Signed in user:", user);
//       // alert(`Welcome, ${user.displayName}`);
//       navigate("/welcome");
//     } catch (err) {
//       console.error("Google Sign-In error:", err);
//       alert("Sign-in failed.");
//     }
//   };

//   useEffect(() => {
//     if (!isPaused) {
//       const interval = setInterval(() => {
//         setActiveImageIndex((prevIndex) =>
//           prevIndex === rightImages.length - 1 ? 0 : prevIndex + 1
//         );
//       }, 4000);
//       return () => clearInterval(interval);
//     }
//   }, [activeImageIndex, isPaused, rightImages.length]);

//   const handleDotClick = (index) => {
//     setActiveImageIndex(index);
//     setIsPaused(true);
//     setTimeout(() => {
//       setIsPaused(false);
//     }, 8000);
//   };

//   // Styles...
//   const containerStyle = {
//     minHeight: "100vh",
//     display: "flex",
//     fontFamily: "system-ui, -apple-system, sans-serif",
//   };
//   const leftSideStyle = {
//     width: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     backgroundColor: "#f8fafc",
//     padding: "3rem",
//   };
//   const signupCardStyle = {
//     backgroundColor: "white",
//     borderRadius: "20px",
//     padding: "3rem 2.5rem",
//     boxShadow:
//       "0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 0 0 1px rgba(59, 130, 246, 0.1)",
//     border: "2px solid transparent",
//     backgroundImage:
//       "linear-gradient(white, white), linear-gradient(135deg, #667eea 0%, #764ba2 50%, #f093fb 100%)",
//     backgroundOrigin: "border-box",
//     backgroundClip: "padding-box, border-box",
//     maxWidth: "450px",
//     width: "100%",
//     position: "relative",
//   };
//   const rightSideStyle = {
//     width: "50%",
//     background: "linear-gradient(to bottom right, #dbeafe, #e0e7ff)",
//     padding: "2rem",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//   };
//   const formContainerStyle = { width: "100%" };
//   const headerStyle = { textAlign: "center", marginBottom: "2rem" };
//   const titleStyle = {
//     fontSize: "2rem",
//     fontWeight: "bold",
//     color: "#111827",
//     marginBottom: "1rem",
//     lineHeight: "1.2",
//   };
//   const subtitleStyle = { color: "#6b7280", fontSize: "1.1rem" };
//   const buttonStyle = {
//     width: "100%",
//     padding: "12px 16px",
//     border: "1px solid #d1d5db",
//     borderRadius: "8px",
//     backgroundColor: "white",
//     cursor: "pointer",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: "1rem",
//     fontSize: "16px",
//   };
//   const primaryButtonStyle = {
//     ...buttonStyle,
//     backgroundColor: "#2563eb",
//     color: "white",
//     border: "none",
//   };
//   const inputStyle = {
//     width: "100%",
//     padding: "12px 16px",
//     border: "1px solid #d1d5db",
//     borderRadius: "8px",
//     fontSize: "16px",
//     marginBottom: "1rem",
//     boxSizing: "border-box",
//   };
//   const slideshowContainerStyle = {
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     maxWidth: "500px",
//     width: "100%",
//   };
//   const imageContainerStyle = {
//     position: "relative",
//     width: "100%",
//     height: "400px",
//     marginBottom: "2rem",
//     borderRadius: "16px",
//     overflow: "hidden",
//     boxShadow: "0 20px 40px -10px rgba(0, 0, 0, 0.2)",
//     cursor: "pointer",
//   };
//   const slideshowImageStyle = {
//     width: "100%",
//     height: "100%",
//     objectFit: "cover",
//     transition: "opacity 0.5s ease-in-out",
//   };
//   const dotsContainerStyle = {
//     display: "flex",
//     gap: "12px",
//     justifyContent: "center",
//     alignItems: "center",
//   };
//   const dotStyle = {
//     width: "12px",
//     height: "12px",
//     borderRadius: "50%",
//     cursor: "pointer",
//     transition: "all 0.3s ease",
//     border: "none",
//     padding: 0,
//   };
//   const activeDotStyle = {
//     ...dotStyle,
//     backgroundColor: "#2563eb",
//     transform: "scale(1.3)",
//     boxShadow: "0 0 0 2px rgba(37, 99, 235, 0.3)",
//   };
//   const inactiveDotStyle = {
//     ...dotStyle,
//     backgroundColor: "#cbd5e1",
//   };
//   const pauseIndicatorStyle = {
//     fontSize: "12px",
//     color: "#6b7280",
//     marginLeft: "12px",
//     opacity: isPaused ? 1 : 0,
//     transition: "opacity 0.3s ease",
//   };
//   const dividerStyle = {
//     textAlign: "center",
//     margin: "1rem 0",
//     position: "relative",
//     color: "#6b7280",
//   };
//   const logoStyle = {
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginBottom: "2rem",
//   };
//   const logoIconStyle = {
//     width: "32px",
//     height: "32px",
//     backgroundColor: "#f97316",
//     borderRadius: "50%",
//     display: "flex",
//     alignItems: "center",
//     justifyContent: "center",
//     marginRight: "12px",
//     color: "white",
//     fontWeight: "bold",
//   };

//   return (
//     <div style={containerStyle}>
//       {/* Left Side */}
//       <div style={leftSideStyle}>
//         <div style={signupCardStyle}>
//           <div style={formContainerStyle}>
//             <div style={logoStyle}>
//               <div style={logoIconStyle}>✦</div>
//               <h1
//                 style={{
//                   fontSize: "1.5rem",
//                   fontWeight: "600",
//                   color: "#111827",
//                   margin: 0,
//                 }}
//               >
//                 FinBot
//               </h1>
//             </div>

//             <div style={headerStyle}>
//               <h2 style={titleStyle}>
//                 Your Smarter Financial Journey
//                 <br />
//                 Starts Here
//               </h2>
//               <p style={subtitleStyle}>
//                 Privacy-conscious personal finance advisor
//               </p>
//             </div>

//             {/* 🔗 Google Button */}
//             <button style={buttonStyle} onClick={handleGoogleSignIn}>
//               <svg
//                 style={{ width: "20px", height: "20px", marginRight: "12px" }}
//                 viewBox="0 0 24 24"
//               >
//                 <path
//                   fill="#4285F4"
//                   d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
//                 />
//                 <path
//                   fill="#34A853"
//                   d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
//                 />
//                 <path
//                   fill="#FBBC05"
//                   d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
//                 />
//                 <path
//                   fill="#EA4335"
//                   d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
//                 />
//               </svg>
//               Continue with Google
//             </button>

//             <div style={dividerStyle}>or</div>

//             <input
//               type="email"
//               placeholder="Enter your email address"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               style={inputStyle}
//             />

//             <button style={primaryButtonStyle} onClick={handleEmailLogin}>Continue with Email →</button>

//             <div
//               style={{
//                 textAlign: "center",
//                 marginTop: "1rem",
//                 fontSize: "14px",
//                 color: "#6b7280",
//               }}
//             >
//               <a href="#" style={{ textDecoration: "none", color: "#6b7280" }}>
//                 Security & Privacy Policy
//               </a>
//               <span style={{ margin: "0 8px" }}>•</span>
//               <a href="#" style={{ textDecoration: "none", color: "#6b7280" }}>
//                 Learn more
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Right Side - Slideshow */}
//       <div style={rightSideStyle}>
//         <div style={slideshowContainerStyle}>
//           <div
//             style={imageContainerStyle}
//             onMouseEnter={() => setIsPaused(true)}
//             onMouseLeave={() => setIsPaused(false)}
//           >
//             <img
//               src={rightImages[activeImageIndex]}
//               alt={`Feature ${activeImageIndex + 1}`}
//               style={slideshowImageStyle}
//             />
//           </div>
//           <div style={dotsContainerStyle}>
//             {rightImages.map((_, index) => (
//               <button
//                 key={index}
//                 style={
//                   index === activeImageIndex ? activeDotStyle : inactiveDotStyle
//                 }
//                 onClick={() => handleDotClick(index)}
//                 onMouseEnter={(e) => {
//                   if (index !== activeImageIndex) {
//                     e.target.style.backgroundColor = "#94a3b8";
//                     e.target.style.transform = "scale(1.1)";
//                   }
//                 }}
//                 onMouseLeave={(e) => {
//                   if (index !== activeImageIndex) {
//                     e.target.style.backgroundColor = "#cbd5e1";
//                     e.target.style.transform = "scale(1)";
//                   }
//                 }}
//               />
//             ))}
//             <span style={pauseIndicatorStyle}>{isPaused ? "⏸️" : ""}</span>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;


import React, { useState } from 'react';
import { Eye, EyeOff, TrendingUp } from 'lucide-react';

const LoginPage = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = () => {
    console.log('Login attempt:', formData);
    
    // Add your authentication logic here
    // Example: API call to your Express backend
    /*
    fetch('/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
      if (data.success) {
        // Redirect to dashboard or update auth state
        console.log('Login successful');
      } else {
        // Handle login error
        console.error('Login failed:', data.message);
      }
    })
    .catch(error => {
      console.error('Error:', error);
    });
    */
    
    alert('Login form submitted! Check console for form data.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-20 h-20 bg-purple-500/10 rounded-full animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-16 h-16 bg-blue-500/10 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-indigo-500/10 rounded-full animate-pulse delay-2000"></div>
      </div>

      {/* Market Ticker */}
      <div className="absolute top-4 right-4 bg-white/10 backdrop-blur-md rounded-xl px-4 py-2 border border-white/20">
        <div className="flex items-center space-x-2 text-green-400 font-semibold text-sm">
          <TrendingUp className="w-4 h-4" />
          <span>S&P 500 +0.8% | NASDAQ +1.2%</span>
        </div>
      </div>

      {/* Main Login Container */}
      <div className="bg-white/95 backdrop-blur-xl rounded-3xl p-8 w-full max-w-md shadow-2xl border border-white/20 relative z-10 transform hover:scale-[1.02] transition-transform duration-300">
        {/* Logo Section */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl mb-4 relative overflow-hidden group">
            <div className="text-white text-3xl font-bold">₿</div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </div>
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-2">
            FinBot
          </h1>
          <p className="text-gray-600 text-lg">Your AI-Powered Financial Advisor</p>
        </div>

        {/* Login Form */}
        <div className="space-y-6">
          {/* Username Field */}
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-2">
              Username
            </label>
            <input
              type="text"
              id="username"
              name="username"
              value={formData.username}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-200 bg-white/80 backdrop-blur-sm"
              placeholder="Enter your username"
              required
            />
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-200 bg-white/80 backdrop-blur-sm"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Field */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="w-full px-4 py-3 pr-12 border-2 border-gray-200 rounded-xl focus:border-purple-500 focus:ring-4 focus:ring-purple-500/10 transition-all duration-200 bg-white/80 backdrop-blur-sm"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-purple-600 transition-colors duration-200"
              >
                {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
              </button>
            </div>
          </div>

          {/* Login Button */}
          <button
            type="button"
            onClick={handleSubmit}
            className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-semibold py-3 px-6 rounded-xl transition-all duration-200 transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/25 focus:outline-none focus:ring-4 focus:ring-purple-500/50"
          >
            Sign In to FinBot
          </button>
        </div>

        {/* Divider */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-4 text-gray-500 text-sm">or continue with</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* Social Login Buttons */}
        <div className="flex space-x-4 mb-6">
          <button className="flex-1 flex items-center justify-center py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-gray-50 transition-all duration-200 group">
            <span className="text-2xl mr-2">🔗</span>
            <span className="font-medium text-gray-700 group-hover:text-purple-600">Google</span>
          </button>
          <button className="flex-1 flex items-center justify-center py-3 px-4 border-2 border-gray-200 rounded-xl hover:border-purple-500 hover:bg-gray-50 transition-all duration-200 group">
            <span className="text-2xl mr-2">📱</span>
            <span className="font-medium text-gray-700 group-hover:text-purple-600">Apple</span>
          </button>
        </div>

        {/* Footer Links */}
        <div className="text-center text-sm text-gray-600 space-y-2">
          <p>
            Don't have an account?{' '}
            <a href="#signup" className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200">
              Sign up
            </a>
          </p>
          <a href="#forgot" className="text-purple-600 hover:text-purple-700 font-medium transition-colors duration-200">
            Forgot your password?
          </a>
        </div>
      </div>

      {/* Additional Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/20 to-transparent pointer-events-none"></div>
    </div>
  );
};

export default LoginPage;
