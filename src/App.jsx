import React from 'react';
import TechBackground from './components/TechBackground';
import RobotShowcase from './components/RobotShowcase';
import LoginCard from './components/LoginCard';
import HeaderBrand from './components/HeaderBrand';

function App() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <TechBackground />

      {/* Content */}
      <div className="relative z-10">
        <HeaderBrand />
        <main className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-4 px-4 pb-10 pt-2 md:px-8 lg:grid-cols-2 lg:gap-8">
          {/* Left: Robot + Title + Effects */}
          <RobotShowcase />

          {/* Right: Login Card */}
          <LoginCard />
        </main>
      </div>
    </div>
  );
}

export default App;
