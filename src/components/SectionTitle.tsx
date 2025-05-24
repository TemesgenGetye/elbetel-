import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle: string;
  alignment?: 'left' | 'center' | 'right';
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  subtitle,
  alignment = 'left',
}) => {
  const getAlignmentClasses = () => {
    switch (alignment) {
      case 'center':
        return 'text-center mx-auto';
      case 'right':
        return 'text-right ml-auto';
      case 'left':
      default:
        return 'text-left';
    }
  };

  return (
    <div className={`max-w-3xl ${getAlignmentClasses()}`}>
      <h2 className="text-sm uppercase tracking-wider font-bold text-purple-600 dark:text-purple-400 mb-2">
        {subtitle}
      </h2>
      <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
        {title}
      </h3>
      <div className={`h-1 w-24 bg-purple-600 dark:bg-purple-400 mt-4 mb-4 ${
        alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''
      }`}></div>
    </div>
  );
};

export default SectionTitle;