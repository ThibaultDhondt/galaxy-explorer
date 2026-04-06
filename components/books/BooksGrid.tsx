import { spaceBooks } from '@/data/books';
import BookCard from './BookCard';

export default function BooksGrid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {spaceBooks.map((book) => (
        <BookCard key={book.id} book={book} />
      ))}
    </div>
  );
}
