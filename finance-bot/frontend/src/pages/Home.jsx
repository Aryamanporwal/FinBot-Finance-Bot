import React, { useState, useEffect } from 'react';

const FinBotHomepage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState('individual');
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleGetStarted = () => {
    window.location.href = '/auth';
  };

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <img src="/public/logo.png" alt="FinBot" className="h-13 w-13 mr-2" />
              <span className="text-xl font-medium text-gray-900">FinBot</span>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">Features</a>
              <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">Pricing</a>
              <a href="#faq" className="text-gray-600 hover:text-gray-900 transition-colors">FAQ</a>
              <button 
                onClick={handleGetStarted}
                className="bg-black text-white px-5 py-2 rounded-md hover:bg-gray-800 transition-colors text-sm font-medium"
              >
                Get started
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 pb-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="max-w-xl">
              <h1 className="text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
                Your ideas,<br />
                <span className="font-light">amplified</span>
              </h1>
              <p className="text-xl text-gray-600 mb-10">
                Privacy-first AI that helps you create in confidence.
              </p>
              
              {/* Login Options */}
              <div className="space-y-4 max-w-sm">
                <button className="w-full flex items-center justify-center px-4 py-3 border border-gray-300 rounded-lg bg-white hover:bg-gray-50 transition-colors">
                  <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  Continue with Google
                </button>
                
                <div className="text-center text-gray-500 text-sm">or</div>
                
                <div>
                  <input 
                    type="email" 
                    placeholder="Enter your personal or work email"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent mb-3"
                  />
                  <button 
                    onClick={handleGetStarted}
                    className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition-colors font-medium"
                  >
                    Continue with email
                  </button>
                </div>
              </div>
              
              <button className="mt-8 text-gray-600 hover:text-gray-900 flex items-center transition-colors">
                Learn more
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
            </div>
            
            {/* Code Demo */}
            <div className="relative">
              <div className="bg-gray-50 rounded-xl p-6 shadow-lg">
                <div className="text-sm text-gray-600 mb-3">
                  FinBot, can you help me find any performance improvements in this code?
                </div>
                <div className="text-sm text-gray-800 mb-4 font-medium">
                  All set. Here's the optimized code:
                </div>
                <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-xs overflow-x-auto">
                  <div className="text-purple-400">import</div> <span className="text-white">pandas</span>
                  <br />
                  <div className="text-blue-400">class</div> <span className="text-yellow-300">Reader</span><span className="text-white">:</span>
                  <br />
                  <span className="text-white ml-4">def __init__(self, csv_file):</span>
                  <br />
                  <span className="text-white ml-8">self.data = pd.read_csv(csv_file)</span>
                  <br />
                  <br />
                  <span className="text-white">def</span> <span className="text-yellow-300">calculate</span><span className="text-white">(self, input):</span>
                  <br />
                  <span className="text-white ml-4">optimized = input * 2 if input &lt; 3 else input</span>
                  <br />
                  <span className="text-white ml-4">result = self.data.sum().optimize()</span>
                  <br />
                  <br />
                  <div className="text-blue-400">class</div> <span className="text-yellow-300">NewReader</span><span className="text-white">(Reader):</span>
                  <br />
                  <span className="text-white ml-4">def __init__(self, csv_file, num_hidden):</span>
                  <br />
                  <span className="text-white ml-8">super().__init__(csv_file)</span>
                </div>
                <div className="flex items-center mt-4 text-sm text-gray-500">
                  <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center mr-2">
                    <span className="text-orange-600 text-xs">F</span>
                  </div>
                  Reply to FinBot...
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Meet FinBot Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-5xl font-light text-gray-900 mb-6">Meet FinBot</h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            FinBot is a next generation AI assistant built by Anthropic and trained to be safe, accurate, and secure to help you do your best work.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Demo Interface */}
            <div className="bg-gray-50 rounded-xl p-8">
              <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <div className="font-medium text-gray-900 mb-2">Analyze the relationship between page performance and user engagement.</div>
                    <div className="text-sm text-gray-600">Here's a scatter plot to visualize the relationship between page load times and user engagement scores.</div>
                  </div>
                </div>
              </div>
              
              <div className="bg-gray-900 rounded-lg p-6 mb-6">
                <div className="grid grid-cols-12 grid-rows-8 gap-1 h-40">
                  {Array.from({ length: 96 }).map((_, i) => (
                    <div 
                      key={i} 
                      className="bg-blue-400 rounded-sm opacity-60"
                      style={{
                        opacity: Math.random() * 0.8 + 0.2,
                        backgroundColor: i % 3 === 0 ? '#60a5fa' : i % 3 === 1 ? '#34d399' : '#fbbf24'
                      }}
                    />
                  ))}
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-8 h-8 bg-orange-100 rounded-full flex items-center justify-center mr-3">
                  <span className="text-orange-600 text-sm font-medium">F</span>
                </div>
                <span className="text-gray-500">Reply to FinBot...</span>
              </div>
            </div>
            
            {/* Features List */}
            <div className="space-y-10">
              <div>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-gray-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  <h3 className="text-2xl font-medium text-gray-900">Create with FinBot</h3>
                </div>
                <p className="text-gray-600 text-lg">
                  Draft and iterate on websites, graphics, documents, and code alongside your chat with Artifacts.
                </p>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-gray-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                  <h3 className="text-2xl font-medium text-gray-900">Bring your knowledge</h3>
                </div>
              </div>
              
              <div>
                <div className="flex items-center mb-4">
                  <svg className="w-6 h-6 text-gray-700 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367 2.684 3 3 0 00-5.367-2.684z" />
                  </svg>
                  <h3 className="text-2xl font-medium text-gray-900">Share and collaborate with your team</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-gray-50 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-5xl font-light text-gray-900 mb-8">Explore plans</h2>
            <div className="flex justify-center space-x-8 border-b border-gray-200 max-w-md mx-auto">
              <button 
                className={`pb-4 px-4 font-medium transition-colors ${
                  activeTab === 'individual' 
                    ? 'text-gray-900 border-b-2 border-orange-500' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('individual')}
              >
                Individual
              </button>
              <button 
                className={`pb-4 px-4 font-medium transition-colors ${
                  activeTab === 'team' 
                    ? 'text-gray-900 border-b-2 border-orange-500' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
                onClick={() => setActiveTab('team')}
              >
                Team & Enterprise
              </button>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Free Plan */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="mb-8">
                <h3 className="text-3xl font-light text-gray-900 mb-2">Free</h3>
                <p className="text-gray-600">Try FinBot</p>
              </div>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Chat on web, iOS, and Android',
                  'Generate code and visualize data',
                  'Write, edit, and iterate with Artifacts',
                  'Analyze text and images',
                  'Ability to search the web'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-4xl font-light text-gray-900 mb-2">$0</div>
              <p className="text-gray-600 mb-6">Free for everyone</p>
              
              <button 
                onClick={handleGetStarted}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg transition-colors font-medium"
              >
                Get started
              </button>
            </div>

            {/* Pro Plan */}
            <div className="bg-white rounded-xl p-8 shadow-lg border-2 border-orange-200 relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-medium">Popular</span>
              </div>
              
              <div className="mb-8">
                <h3 className="text-3xl font-light text-gray-900 mb-2">Pro</h3>
                <p className="text-gray-600">For everyday productivity</p>
              </div>
              
              <div className="text-sm font-medium text-gray-900 mb-4">Everything in Free, plus:</div>
              
              <ul className="space-y-4 mb-8">
                {[
                  'More usage*',
                  'Access FinBot Code directly in your terminal',
                  'Access to Unlimited Projects',
                  'Access to Artifacts',
                  'Connect Google Workspace',
                  'Connect any context through Integrations',
                  'Extended thinking for complex work',
                  'Ability to use more FinBot models'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-4xl font-light text-gray-900 mb-2">$17</div>
              <p className="text-gray-600 mb-6">Per month billed annually</p>
              
              <button 
                onClick={handleGetStarted}
                className="w-full bg-black hover:bg-gray-800 text-white py-3 rounded-lg transition-colors font-medium"
              >
                Get started
              </button>
            </div>

            {/* Max Plan */}
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100">
              <div className="mb-8">
                <h3 className="text-3xl font-light text-gray-900 mb-2">Max</h3>
                <p className="text-gray-600">5-20x more usage than Pro</p>
              </div>
              
              <div className="text-sm font-medium text-gray-900 mb-4">Everything in Pro, plus:</div>
              
              <ul className="space-y-4 mb-8">
                {[
                  'Choose 5x or 20x more usage than Pro*',
                  'Higher output limits for all tasks',
                  'Early access to enhanced FinBot features',
                  'Priority access at high traffic times'
                ].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="text-4xl font-light text-gray-900 mb-2">From $100</div>
              <p className="text-gray-600 mb-6">Per month billed monthly</p>
              
              <button 
                onClick={handleGetStarted}
                className="w-full bg-gray-100 hover:bg-gray-200 text-gray-900 py-3 rounded-lg transition-colors font-medium"
              >
                Get started
              </button>
            </div>
          </div>
          
          <p className="text-center text-sm text-gray-500 mt-8">
            Prices shown do not include applicable tax. *usage limits apply.
          </p>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 px-6">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-5xl font-light text-gray-900 text-center mb-16">Frequently asked questions</h2>
          
          <div className="space-y-6">
            {[
              {
                question: "What is FinBot and how does it work?",
                answer: "FinBot is an AI assistant that helps with various tasks including writing, analysis, coding, and creative projects. It uses advanced language models to understand and respond to your queries."
              },
              {
                question: "What should I use FinBot for?",
                answer: "You can use FinBot for writing assistance, data analysis, coding help, research, creative projects, and much more. It's designed to be a versatile AI companion for work and personal tasks."
              },
              {
                question: "How much does it cost to use?",
                answer: "FinBot offers multiple pricing tiers: Free (basic features), Pro ($17/month), and Max (from $100/month). Each tier offers different usage limits and features."
              }
            ].map((faq, index) => (
              <div key={index} className="border-b border-gray-200 pb-6">
                <button 
                  className="flex justify-between items-center w-full text-left py-4"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="text-xl font-medium text-gray-900 pr-8">{faq.question}</span>
                  <svg 
                    className={`w-6 h-6 text-gray-500 transform transition-transform ${
                      openFaq === index ? 'rotate-45' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </button>
                {openFaq === index && (
                  <div className="pb-4">
                    <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-6">
                <div>
                  <img src="/public/logo.png" alt="FinBot" className="h-13 w-13 mr-2" />
                </div>
                <span className="text-xl font-medium">FinBot</span>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-white">Product</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Research</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Company</a></li>
                <li><a href="#" className="hover:text-white transition-colors">News</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-medium mb-4 text-white">Legal</h4>
              <ul className="space-y-3 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Terms of service</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Privacy policy</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Your privacy choices</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Compliance</a></li>
              </ul>
            </div>
            
            <div>
              <p className="text-xs text-gray-500 leading-relaxed">
                This site is protected by reCAPTCHA Enterprise. The Google Privacy Policy and Terms of Service apply.
              </p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8">
            <p className="text-center text-gray-500 text-sm">
              © 2025 FinBot. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FinBotHomepage;