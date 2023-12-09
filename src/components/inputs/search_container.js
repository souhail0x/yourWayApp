import React, { useState } from 'react';
import { motion } from 'framer-motion';

function SearchContainer({onInputChange}) {
  const [keyword, setKeyword] = useState('');

  const handleInputChange = (event) => {
    const inputValue = event.target.value;
    onInputChange(inputValue);
  };

  return (
    <motion.div
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="search-container"
    >
      <input
        type="search"
        placeholder="Qu'est-ce que tu cherches ?"
        onChange={handleInputChange}
      />
      <div className="search-icon">
        <button type="submit">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 30 30" fill="none">
            <g clipPath="url(#clip0_47_154)">
              <path
                d="M24.375 12.1875C24.375 14.877 23.502 17.3613 22.0312 19.377L29.4492 26.8008C30.1816 27.5332 30.1816 28.7227 29.4492 29.4551C28.7168 30.1875 27.5273 30.1875 26.7949 29.4551L19.377 22.0312C17.3613 23.5078 14.877 24.375 12.1875 24.375C5.45508 24.375 0 18.9199 0 12.1875C0 5.45508 5.45508 0 12.1875 0C18.9199 0 24.375 5.45508 24.375 12.1875ZM12.1875 20.625C13.2955 20.625 14.3927 20.4068 15.4164 19.9827C16.4401 19.5587 17.3702 18.9372 18.1537 18.1537C18.9372 17.3702 19.5587 16.4401 19.9827 15.4164C20.4068 14.3927 20.625 13.2955 20.625 12.1875C20.625 11.0795 20.4068 9.98229 19.9827 8.95861C19.5587 7.93492 18.9372 7.00478 18.1537 6.22129C17.3702 5.43779 16.4401 4.81629 15.4164 4.39227C14.3927 3.96824 13.2955 3.75 12.1875 3.75C11.0795 3.75 9.98229 3.96824 8.95861 4.39227C7.93492 4.81629 7.00478 5.43779 6.22129 6.22129C5.43779 7.00478 4.81629 7.93492 4.39227 8.95861C3.96824 9.98229 3.75 11.0795 3.75 12.1875C3.75 13.2955 3.96824 14.3927 4.39227 15.4164C4.81629 16.4401 5.43779 17.3702 6.22129 18.1537C7.00478 18.9372 7.93492 19.5587 8.95861 19.9827C9.98229 20.4068 11.0795 20.625 12.1875 20.625Z"
                fill="#FDFCFC"
              />
            </g>
            <defs>
              <clipPath id="clip0_47_154">
                <rect width="30" height="30" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </button>
      </div>
    </motion.div>
  );
}

export default SearchContainer;
