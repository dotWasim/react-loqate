import React from 'react';

const ManualEntryListItem = ({ onClick, text }) => {
  return (
    <li onClick={onClick} style={{ cursor: 'pointer', padding: '10px' }}>
      {text}
    </li>
  );
};

export default ManualEntryListItem;
