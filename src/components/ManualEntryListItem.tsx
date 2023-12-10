import React from 'react';

interface ManualEntryListItemProps {
  onClick?: () => void;
  text: string;
}

const ManualEntryListItem: React.FC<ManualEntryListItemProps> = ({
  onClick,
  text,
}) => {
  return (
    <li onClick={onClick} style={{ cursor: 'pointer', padding: '10px' }}>
      {text}
    </li>
  );
};

export default ManualEntryListItem;
