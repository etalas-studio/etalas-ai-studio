import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight } from 'lucide-react';

const BLOG_POSTS = [
  {
    id: 1,
    title: "The Death of the Traditional MVP",
    excerpt: "Why building a 'Minimum Viable Product' is no longer enough in the age of AI-generated software. We explore the shift to 'Minimum Lovable Products'.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    date: "Oct 12, 2023",
    author: "Etalas Team",
    tag: "Strategy"
  },
  {
    id: 2,
    title: "Scaling with Supabase: A Case Study",
    excerpt: "How we migrated a high-traffic fintech application from Firebase to Supabase and reduced latency by 40% while cutting costs in half.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=800&auto=format&fit=crop",
    date: "Oct 28, 2023",
    author: "Dev Team",
    tag: "Engineering"
  },
  {
    id: 3,
    title: "AI-Driven Design Systems",
    excerpt: "Leveraging generative AI to maintain consistency across complex UI libraries. How we automate tokens and component variations.",
    image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?q=80&w=800&auto=format&fit=crop",
    date: "Nov 05, 2023",
    author: "Design Team",
    tag: "Design"
  },
  {
    id: 4,
    title: "Why We Chose Cursor Over VS Code",
    excerpt: "The AI-native code editor has changed how we write software. Here is a deep dive into our productivity metrics since switching.",
    image: "https://images.unsplash.com/photo-1542831371-29b0f74f9713?q=80&w=800&auto=format&fit=crop",
    date: "Nov 15, 2023",
    author: "Etalas Team",
    tag: "Tools"
  },
  {
    id: 5,
    title: "Founder's Guide to Technical Debt",
    excerpt: "Not all debt is bad. Learn when to incur technical debt to move fast, and when to pay it down before it kills your startup.",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&w=800&auto=format&fit=crop",
    date: "Nov 22, 2023",
    author: "Strategy Team",
    tag: "Startup"
  },
  {
    id: 6,
    title: "React Server Components Explained",
    excerpt: "Breaking down the complexity of RSCs in Next.js 14. What founders need to know about server-side rendering performance.",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?q=80&w=800&auto=format&fit=crop",
    date: "Dec 01, 2023",
    author: "Dev Team",
    tag: "Engineering"
  },
  {
    id: 7,
    title: "The Future of Fintech UX",
    excerpt: "Moving beyond dashboards. How conversational interfaces and predictive analytics are reshaping financial applications.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    date: "Dec 10, 2023",
    author: "Design Team",
    tag: "Fintech"
  },
  {
    id: 8,
    title: "Zero to One: The First 30 Days",
    excerpt: "A checklist for non-technical founders. What you absolutely must achieve in your first month of product development.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=800&auto=format&fit=crop",
    date: "Dec 18, 2023",
    author: "Strategy Team",
    tag: "Startup"
  },
  {
    id: 9,
    title: "Optimizing Tailwind CSS for Scale",
    excerpt: "Best practices for organizing large CSS codebases. Using utility classes without creating a maintenance nightmare.",
    image: "https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=800&auto=format&fit=crop",
    date: "Jan 05, 2024",
    author: "Dev Team",
    tag: "Engineering"
  },
  {
    id: 10,
    title: "Visualizing Data with D3 and Framer",
    excerpt: "Creating immersive, interactive data visualizations that tell a story. A technical walkthrough of our recent dashboard project.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=800&auto=format&fit=crop",
    date: "Jan 12, 2024",
    author: "Design Team",
    tag: "Design"
  }
];

export const Blog: React.FC = () => {
  return (
    <section className="pt-32 pb-24 px-6 md:px-12 min-h-screen">
      <div className="container mx-auto">
        <div className="mb-20 max-w-2xl">
          <motion.h2 
            className="text-5xl md:text-7xl font-semibold tracking-tight mb-8 dark:text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Insights <span className="text-brand-600">.</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-etalas-secondary dark:text-gray-400"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Thoughts on technology, design, and the future of digital products.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post, index) => (
            <motion.article 
              key={post.id}
              className="group cursor-pointer flex flex-col h-full bg-white dark:bg-zinc-900 border border-gray-100 dark:border-zinc-800 rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.05, duration: 0.5 }}
              whileHover={{ y: -8 }}
            >
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={post.image} 
                  alt={`Blog post: ${post.title}`} 
                  loading="lazy"
                  width="800"
                  height="600"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 dark:bg-black/90 backdrop-blur text-xs font-bold uppercase tracking-wider rounded-full dark:text-white">
                    {post.tag}
                  </span>
                </div>
              </div>
              
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs text-gray-500 dark:text-gray-400 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    {post.author}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold mb-4 dark:text-white group-hover:text-brand-600 transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 line-clamp-3">
                  {post.excerpt}
                </p>

                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-zinc-800 flex items-center text-sm font-semibold text-brand-600">
                  Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};