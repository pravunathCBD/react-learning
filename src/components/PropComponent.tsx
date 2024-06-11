import React from 'react';

export interface PropComponentProps {
  title: string;
  description?: string;
}

const PropComponent: React.FC<PropComponentProps> = ({
  title,
  description = 'No description provided.',
}) => {
  return (
    <div>
      <p className='text-lg font-semibold'>{title}</p>
      <p>{description}</p>
    </div>
  );
};

export default PropComponent;
