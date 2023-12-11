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
    <li
      style={{ backgroundColor: 'lightgray' }}
      className="react-loqate-list-item"
      onClick={onClick}
    >
      {text}
    </li>
  );
};

export default ManualEntryListItem;
