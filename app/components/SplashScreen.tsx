'use client';

import { useState, useEffect } from 'react';
import clsx from 'clsx';

export default function SplashScreen() {
  const [isLoading, setIsLoading] = useState(true);
  const [isFading, setIsFading] = useState(false);

  useEffect(() => {
    // Start fade out after 2.5 seconds
    const fadeTimer = setTimeout(() => {
      setIsFading(true);
    }, 2500);

    // Remove splash screen after fade animation completes
    const removeTimer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div
      className={clsx(
        'fixed inset-0 z-[100] flex flex-col items-center justify-center',
        'bg-gradient-to-br from-teal-50 via-white to-teal-100',
        'transition-opacity duration-500 ease-out',
        isFading ? 'opacity-0 pointer-events-none' : 'opacity-100'
      )}
    >
      {/* Animated Heart Icon */}
      <div className="relative mb-8">
        {/* Pulse rings */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-teal-400/20 rounded-full animate-ping" />
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-teal-500/30 rounded-full animate-ping" style={{ animationDelay: '0.3s' }} />
        </div>
        
        {/* Main heart */}
        <div className="relative w-20 h-20 bg-teal-600 rounded-full flex items-center justify-center animate-pulse-soft">
          <svg 
            className="w-10 h-10 text-white" 
            fill="currentColor" 
            viewBox="0 0 24 24"
          >
            <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
          </svg>
        </div>
      </div>

      {/* Doctor Name */}
      <h1 className={clsx(
        'text-2xl md:text-3xl font-bold text-slate-800 mb-2',
        'animate-fade-in-up'
      )}>
        Dr. Michael Chen
      </h1>
      
      {/* Credentials */}
      <p className={clsx(
        'text-teal-600 font-medium mb-8',
        'animate-fade-in-up delay-100'
      )}>
        MD, FACC · Cardiologist
      </p>

      {/* ECG/Heartbeat Animation */}
      <div className="w-48 h-12 relative overflow-hidden">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 200 50" 
          preserveAspectRatio="none"
        >
          <path
            d="M0 25 L40 25 L50 25 L55 10 L60 40 L65 25 L70 25 L80 25 L90 25 L95 5 L100 45 L105 25 L115 25 L125 25 L135 25 L140 10 L145 40 L150 25 L160 25 L200 25"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="text-teal-600"
            style={{
              strokeDasharray: '300',
              strokeDashoffset: '300',
              animation: 'ecgDraw 2s ease-in-out infinite'
            }}
          />
        </svg>
      </div>

      {/* Loading text */}
      <p className={clsx(
        'text-slate-400 text-sm mt-6',
        'animate-pulse'
      )}>
        Loading...
      </p>

      {/* Add ECG animation keyframes */}
      <style jsx>{`
        @keyframes ecgDraw {
          0% {
            stroke-dashoffset: 300;
          }
          50% {
            stroke-dashoffset: 0;
          }
          100% {
            stroke-dashoffset: -300;
          }
        }
      `}</style>
    </div>
  );
}
