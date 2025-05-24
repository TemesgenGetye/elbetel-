/**
 * Animation utility functions for the portfolio website
 */

// Fade in animation when element enters viewport
export const fadeInAnimation = (element: Element, delay: number = 0) => {
  element.classList.add('opacity-0', 'translate-y-10');
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.classList.add('opacity-100', 'translate-y-0');
          element.classList.remove('opacity-0', 'translate-y-10');
        }, delay);
        observer.unobserve(element);
      }
    },
    { threshold: 0.1 }
  );
  
  observer.observe(element);
  
  return () => observer.unobserve(element);
};

// Scale in animation when element enters viewport
export const scaleInAnimation = (element: Element, delay: number = 0) => {
  element.classList.add('opacity-0', 'scale-95');
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.classList.add('opacity-100', 'scale-100');
          element.classList.remove('opacity-0', 'scale-95');
        }, delay);
        observer.unobserve(element);
      }
    },
    { threshold: 0.1 }
  );
  
  observer.observe(element);
  
  return () => observer.unobserve(element);
};

// Slide in from left animation
export const slideInLeftAnimation = (element: Element, delay: number = 0) => {
  element.classList.add('opacity-0', '-translate-x-10');
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.classList.add('opacity-100', 'translate-x-0');
          element.classList.remove('opacity-0', '-translate-x-10');
        }, delay);
        observer.unobserve(element);
      }
    },
    { threshold: 0.1 }
  );
  
  observer.observe(element);
  
  return () => observer.unobserve(element);
};

// Slide in from right animation
export const slideInRightAnimation = (element: Element, delay: number = 0) => {
  element.classList.add('opacity-0', 'translate-x-10');
  
  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          element.classList.add('opacity-100', 'translate-x-0');
          element.classList.remove('opacity-0', 'translate-x-10');
        }, delay);
        observer.unobserve(element);
      }
    },
    { threshold: 0.1 }
  );
  
  observer.observe(element);
  
  return () => observer.unobserve(element);
};