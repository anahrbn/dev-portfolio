import { useState } from 'react';

function Card({ children }) {
  return (
    <div className="border border-gray-200 rounded-2xl bg-white shadow-md hover:shadow-lg transition-shadow duration-300">
      {children}
    </div>
  );
}

export default function Portfolio() {
  return (
    <main className="bg-[#fdfcfa] text-[#1a1a1a] min-h-screen font-sans">
      <header className="p-6 md:p-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Hi, I'm Anastasia</h1>
        <p className="text-lg md:text-xl text-gray-700 leading-relaxed">
          Front-end developer exploring BI and analytics. I build websites, interfaces, and dashboards.
        </p>
      </header>

      <section className="bg-[#fff6f0] py-14 px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-semibold mb-8">Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">AI Chat Assistant</h3>
                <p className="text-sm text-gray-700 mb-4">React app integrated with GPT API.</p>
                <a href="#" className="text-blue-600 font-medium hover:underline">Live demo →</a>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Qlik Dashboard</h3>
                <p className="text-sm text-gray-700 mb-4">Interactive BI dashboard for analyzing users and sales.</p>
                <a href="#" className="text-blue-600 font-medium hover:underline">Screenshots →</a>
              </div>
            </Card>

            <Card>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">Financial Tracker</h3>
                <p className="text-sm text-gray-700 mb-4">Simple tool to track expenses (React + Firebase).</p>
                <a href="#" className="text-blue-600 font-medium hover:underline">GitHub →</a>
              </div>
            </Card>
          </div>
        </div>
      </section>

      <section className="bg-[#fefefe] py-14 px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-semibold mb-6">Contact</h2>
          <div className="space-y-2">
            <p>Email: <a href="mailto:anastasia@example.com" className="text-blue-600 hover:underline">anastasia@example.com</a></p>
            <p>GitHub: <a href="https://github.com/anastasia" className="text-blue-600 hover:underline">github.com/anastasia</a></p>
            <p>LinkedIn: <a href="https://linkedin.com/in/anastasia" className="text-blue-600 hover:underline">linkedin.com/in/anastasia</a></p>
          </div>
        </div>
      </section>
    </main>
  );
}
