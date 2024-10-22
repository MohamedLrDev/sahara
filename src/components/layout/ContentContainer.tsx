// src/components/ContentContainer.tsx
import { ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
}

const ContentContainer: React.FC<ContentContainerProps> = ({ children }) => {
  return (
    <div className="w-full max-w-screen-3xl min-w-[375px]  mx-auto  ">
      {children}
    </div>
  );
};

export default ContentContainer;


