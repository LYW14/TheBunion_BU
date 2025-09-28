// src/app/components/Layout.jsx
// Optional: Reusable layout component for consistent page structure

interface LayoutProps {
  children: React.ReactNode;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export default function Layout({ 
  children, 
  className = "", 
  maxWidth = 'lg' 
}: LayoutProps) {
  const maxWidthClasses = {
    sm: 'max-w-sm',
    md: 'max-w-4xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full'
  };

  return (
    <div className={`min-h-screen bg-gray-50 ${className}`}>
      <div className={`container mx-auto px-4 py-8 ${maxWidthClasses[maxWidth]}`}>
        {children}
      </div>
    </div>
  );
}