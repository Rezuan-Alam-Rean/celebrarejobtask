
'use client'

import React, { useState } from 'react';
import Tiptap from './Tiptap';


const NotePicker = () => {
  const [content, setContent] = useState<string>('')
  const handleContentChange = (reason: any) => {
    setContent(reason)
  }


  return (
    <div>
      <form className='max-w-3xl w-full grid place-items-center mx-auto pt-10 mb-10' >
      <h2>Add Text</h2>
      <Tiptap
        content={content}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
      </form>
    </div>
  );
};

export default NotePicker;
