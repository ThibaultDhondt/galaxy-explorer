'use client';

import { useState } from 'react';

interface Props {
  isbn: string;
  title: string;
  author: string;
}

export default function BookCoverImage({ isbn, title, author }: Props) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="w-full h-full flex flex-col items-center justify-center gap-2 bg-white/[0.03] px-4 text-center">
        <div className="w-8 h-0.5 bg-white/20 mb-1" />
        <p className="text-xs font-medium text-white/60 leading-snug">{title}</p>
        <p className="text-xs text-white/30">{author}</p>
      </div>
    );
  }

  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={`https://covers.openlibrary.org/b/isbn/${isbn}-L.jpg`}
      alt={`Cover of ${title}`}
      className="w-full h-full object-cover"
      onError={() => setFailed(true)}
    />
  );
}
