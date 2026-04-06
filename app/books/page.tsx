import BooksGrid from '@/components/books/BooksGrid';

export const metadata = {
  title: 'Books — Galaxy Explorer',
};

export default function BooksPage() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="max-w-7xl mx-auto px-6 py-10">
        <h1 className="text-2xl font-semibold text-white mb-1">Essential Space Books</h1>
        <p className="text-white/50 text-sm mb-8">
          15 books that will change how you see the cosmos.
        </p>
        <BooksGrid />
      </div>
    </div>
  );
}
