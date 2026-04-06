import { SpaceBook } from '@/data/books';
import BookCoverImage from './BookCoverImage';

interface Props {
  book: SpaceBook;
}

export default function BookCard({ book }: Props) {
  return (
    <div className="flex gap-4 p-4 rounded-xl bg-[#0f1729] border border-white/[0.07] hover:border-white/[0.14] transition-colors">
      {/* Cover */}
      <div
        className="shrink-0 rounded-md overflow-hidden bg-white/[0.04]"
        style={{ width: 72, height: 108 }}
      >
        <BookCoverImage isbn={book.isbn} title={book.title} author={book.author} />
      </div>

      {/* Info */}
      <div className="flex flex-col justify-center min-w-0">
        <p className="text-xs text-white/35 mb-1 tabular-nums">{book.year}</p>
        <h3 className="text-sm font-semibold text-white leading-snug mb-1 line-clamp-2">
          {book.title}
        </h3>
        <p className="text-xs text-white/50 mb-2">{book.author}</p>
        <p className="text-xs text-white/40 leading-relaxed line-clamp-3">{book.description}</p>
      </div>
    </div>
  );
}
