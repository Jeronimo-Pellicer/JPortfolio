import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Star, ExternalLink } from 'lucide-react';
import { useLanguage } from '@/Components/portfolio/LanguageContext';

function getBooks(t) {
    return [
        {
            id: 1,
            title: 'Atomic Habits',
            author: 'James Clear',
            publisher: 'Avery',
            rating: 5,
            amazonUrl: 'https://www.amazon.com/Atomic-Habits-James-Clear/dp/0735211299',
            opinionKey: 'atomicHabits',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg'
        },
        {
            id: 2,
            title: 'The Lean Startup',
            author: 'Eric Ries',
            publisher: 'Crown Business',
            rating: 5,
            amazonUrl: 'https://www.amazon.com/Lean-Startup-Entrepreneurs-Continuous-Innovation/dp/0307887898',
            opinionKey: 'leanStartup',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg'
        },
        {
            id: 3,
            title: 'Thinking, Fast and Slow',
            author: 'Daniel Kahneman',
            publisher: 'Farrar, Straus and Giroux',
            rating: 5,
            amazonUrl: 'https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555',
            opinionKey: 'thinkingFast',
            image: 'https://images-na.ssl-images-amazon.com/images/I/61fdrEuPJwL.jpg'
        },
        {
            id: 4,
            title: 'Hooked: How to Build Habit-Forming Products',
            author: 'Nir Eyal',
            publisher: 'Portfolio',
            rating: 4.5,
            amazonUrl: 'https://www.amazon.com/Hooked-How-Build-Habit-Forming-Products/dp/1591847788',
            opinionKey: 'hooked',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81zD0dVEuUL.jpg'
        },
        {
            id: 5,
            title: 'The Design of Everyday Things',
            author: 'Don Norman',
            publisher: 'Basic Books',
            rating: 4,
            amazonUrl: 'https://www.amazon.com/Design-Everyday-Things-Revised-Expanded/dp/0465050654',
            opinionKey: 'designEveryday',
            image: 'https://images-na.ssl-images-amazon.com/images/I/81zpLhP1gvL.jpg'
        }
    ];
}

export default function Books() {
    const { t } = useLanguage();
    const books = getBooks(t);

    const renderStars = (rating) => {
        const stars = [];
        const fullStars = Math.floor(rating);
        const hasHalfStar = rating % 1 !== 0;

        for (let i = 0; i < fullStars; i++) {
            stars.push(
                <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            );
        }

        if (hasHalfStar) {
            stars.push(
                <div key="half" className="relative w-5 h-5">
                    <Star className="absolute w-5 h-5 text-gray-300" />
                    <div className="absolute w-2.5 h-5 overflow-hidden">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    </div>
                </div>
            );
        }

        const remainingStars = 5 - Math.ceil(rating);
        for (let i = 0; i < remainingStars; i++) {
            stars.push(
                <Star key={`empty-${i}`} className="w-5 h-5 text-gray-300" />
            );
        }

        return stars;
    };

    return (
        <div className="min-h-screen bg-zinc-950">
            {/* Header */}
            <section className="pt-32 pb-16 bg-zinc-950 border-b border-zinc-800/50">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-4xl mx-auto"
                    >
                        <Link 
                            to="/"
                            className="inline-flex items-center gap-2 text-zinc-400 hover:text-emerald-400 mb-8 transition-colors"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            {t.books.backToHome}
                        </Link>
                        
                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {t.books.title}
                        </h1>
                        <p className="text-lg text-zinc-400 leading-relaxed">
                            {t.books.description}
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* Books List */}
            <section className="py-16 bg-zinc-950">
                <div className="container mx-auto px-6">
                    <div className="max-w-4xl mx-auto space-y-12">
                        {books.map((book, index) => (
                            <motion.div
                                key={book.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className="bg-zinc-900/40 backdrop-blur-xl border border-zinc-800/50 rounded-2xl p-8 hover:border-zinc-700/50 transition-all duration-300"
                            >
                                <div className="flex flex-col md:flex-row gap-6">
                                    {/* Book Cover */}
                                    <div className="flex-shrink-0">
                                        <div className="w-32 h-48 rounded-lg overflow-hidden bg-zinc-800 shadow-xl">
                                            <img
                                                src={book.image}
                                                alt={book.title}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    e.target.src = 'https://via.placeholder.com/200x300/1f2937/9ca3af?text=Book+Cover';
                                                }}
                                            />
                                        </div>
                                    </div>

                                    {/* Book Info */}
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between gap-4 mb-3">
                                            <div>
                                                <h2 className="text-2xl font-bold text-white mb-2">
                                                    {book.title}
                                                </h2>
                                                <p className="text-zinc-400 text-sm mb-1">
                                                    {book.author}
                                                </p>
                                                <p className="text-zinc-500 text-xs">
                                                    {book.publisher}
                                                </p>
                                            </div>
                                            <div className="flex items-center gap-1 flex-shrink-0">
                                                {renderStars(book.rating)}
                                                <span className="ml-2 text-zinc-400 text-sm">
                                                    {book.rating}
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-zinc-300 leading-relaxed mb-6">
                                            {t.books.opinions[book.opinionKey]}
                                        </p>

                                        <a
                                            href={book.amazonUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-lg hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-all duration-300"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                            {t.books.buyOnAmazon}
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
