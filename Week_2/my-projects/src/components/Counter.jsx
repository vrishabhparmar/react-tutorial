import React, { useState } from "react";

export default function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-text-light dark:text-text-dark min-h-screen w-full flex flex-col">
      {/* Header */}
      <header className="flex items-center justify-center border-b border-border-light dark:border-border-dark px-10 py-4">
        <div className="flex items-center gap-3 text-text-light dark:text-text-dark">
          <div className="size-6 text-primary">
            <svg fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H17.3334V17.3334H30.6666V30.6666H44V44H4V4Z" fill="currentColor" />
            </svg>
          </div>
          <h2 className="text-xl font-bold tracking-tight">Counter App</h2>
        </div>
      </header>

      {/* Main */}
      <main className="flex flex-1 justify-center py-10 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center max-w-2xl w-full space-y-8">
          {/* Display Panel */}
          <div className="w-full max-w-md bg-card-light dark:bg-card-dark border border-border-light dark:border-border-dark rounded-xl shadow-sm p-8 text-center flex flex-col items-center justify-center">
            <h1 className="tracking-tight text-8xl font-bold leading-tight">{count}</h1>
          </div>

          {/* Buttons */}
          <div className="w-full max-w-md flex flex-col items-center space-y-4">
            <div className="w-full flex gap-4">
            <button
                onClick={() => setCount(count + 1)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg h-14 px-6 bg-background-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-lg font-bold shadow-sm transition-transform active:scale-95 hover:bg-border-light dark:hover:bg-border-dark"
              >
                <span className="material-symbols-outlined">+</span>
                <span className="truncate">Increment</span>
              </button>

              <button
                onClick={() => setCount(count - 1)}
                className="flex flex-1 items-center justify-center gap-2 rounded-lg h-14 px-6 bg-background-light dark:bg-card-dark border border-border-light dark:border-border-dark text-text-light dark:text-text-dark text-lg font-bold shadow-sm transition-transform active:scale-95 hover:bg-border-light dark:hover:bg-border-dark"
              >
                <span className="material-symbols-outlined">-</span>
                <span className="truncate">Decrement</span>
              </button>
            </div>

            {/* Reset */}
            <div className="w-full flex justify-center pt-2">
              <button
                onClick={() => setCount(0)}
                className="flex min-w-[84px] max-w-xs cursor-pointer items-center justify-center gap-2 rounded-lg h-12 px-6 bg-transparent text-text-secondary-light dark:text-text-secondary-dark text-base font-bold hover:bg-border-light dark:hover:bg-card-dark transition-colors"
              >
                <span className="material-symbols-outlined">refresh</span>
                <span className="truncate">Reset</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="flex flex-col gap-6 px-5 py-10 text-center border-t border-border-light dark:border-border-dark">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
          <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary" href="#">About</a>
          <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary" href="#">Privacy Policy</a>
          <a className="text-text-secondary-light dark:text-text-secondary-dark hover:text-primary dark:hover:text-primary" href="#">Contact</a>
        </div>
        <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">© 2024 Counter App. All rights reserved.</p>
      </footer>
    </div>
  );
}
