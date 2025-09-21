/**
 * Counter utility for animating number increments
 * Includes fallback for when JavaScript is disabled
 */

type CounterOptions = {
  start?: number;
  end: number;
  duration?: number;
  onUpdate: (value: number) => void;
  onComplete?: () => void;
};

export class Counter {
  private animationFrameId: number | null = null;
  private startTime: number = 0;
  private startValue: number;
  private endValue: number;
  private duration: number;
  private onUpdate: (value: number) => void;
  private onComplete?: () => void;
  private isRunning: boolean = false;

  constructor(options: CounterOptions) {
    this.startValue = options.start ?? 0;
    this.endValue = options.end;
    this.duration = options.duration ?? 2000; // Default 2 seconds
    this.onUpdate = options.onUpdate;
    this.onComplete = options.onComplete;
  }

  start() {
    if (this.isRunning) return;
    
    this.isRunning = true;
    this.startTime = performance.now();
    
    const animate = (currentTime: number) => {
      if (!this.isRunning) return;
      
      const elapsed = currentTime - this.startTime;
      const progress = Math.min(elapsed / this.duration, 1);
      
      // Ease-out function
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      
      const currentValue = Math.floor(
        this.startValue + (this.endValue - this.startValue) * easedProgress
      );
      
      this.onUpdate(currentValue);
      
      if (progress < 1) {
        this.animationFrameId = requestAnimationFrame(animate);
      } else if (this.onComplete) {
        this.onComplete();
        this.isRunning = false;
      }
    };
    
    this.animationFrameId = requestAnimationFrame(animate);
  }

  stop() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
      this.animationFrameId = null;
    }
    this.isRunning = false;
  }
}

/**
 * Initialize counters when they come into view
 */
export function initCounters() {
  const counters = document.querySelectorAll<HTMLElement>('.counter[data-count]');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counterElement = entry.target as HTMLElement;
        const target = parseInt(counterElement.getAttribute('data-count') || '0', 10);
        const currentValue = parseInt(counterElement.textContent || '0', 10) || 0;
        
        // Add animation class
        counterElement.classList.add('animated');
        
        // Animate the counter
        const counter = new Counter({
          start: currentValue,
          end: target,
          duration: 2000,
          onUpdate: (value) => {
            counterElement.textContent = value.toString();
          },
          onComplete: () => {
            counterElement.textContent = target.toString();
          }
        });
        
        counter.start();
        observer.unobserve(counterElement);
      }
    });
  }, {
    threshold: 0.5,
    rootMargin: '0px 0px -50px 0px'
  });
  
  counters.forEach(counter => observer.observe(counter));
}

// Initialize counters when the DOM is loaded
if (typeof window !== 'undefined') {
  // Add no-js class to HTML if JavaScript is disabled
  document.documentElement.classList.remove('no-js');
  
  // Initialize counters when the page loads
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCounters);
  } else {
    initCounters();
  }
}
