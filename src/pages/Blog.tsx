
import React from 'react';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

const Blog = () => {
  // Sample blog posts data (in a real app, this would come from an API/database)
  const blogPosts = [
    {
      id: 1,
      title: 'Mental Health Awareness in African Communities',
      excerpt: 'Breaking the stigma around mental health issues and providing resources for support...',
      category: 'Mental Health',
      date: 'May 15, 2023',
      imageUrl: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Gender Equality: Progress and Challenges in Africa',
      excerpt: 'Examining the current state of gender equality across African nations and the work that remains...',
      category: 'Social Equality',
      date: 'April 23, 2023',
      imageUrl: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Climate Change Effects on Rural African Communities',
      excerpt: 'How climate change is disproportionately affecting rural communities across Africa...',
      category: 'Climate Action',
      date: 'March 10, 2023',
      imageUrl: 'https://images.unsplash.com/photo-1618677366787-9360352d5118?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 4,
      title: 'Success Stories: Women Entrepreneurs in Africa',
      excerpt: 'Highlighting inspiring stories of women entrepreneurs changing their communities...',
      category: 'Inspirational',
      date: 'February 28, 2023',
      imageUrl: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 5,
      title: 'Reforestation Initiatives Making a Difference',
      excerpt: 'How community-led reforestation projects are combating climate change effects...',
      category: 'Environmental Justice',
      date: 'January 15, 2023',
      imageUrl: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 6,
      title: 'Youth Activism and Mental Health',
      excerpt: 'The intersection of youth activism and mental health concerns in modern Africa...',
      category: 'Mental Health',
      date: 'December 7, 2022',
      imageUrl: 'https://images.unsplash.com/photo-1529390079861-591de354faf5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
    },
  ];

  const categories = [
    'All Categories',
    'Mental Health',
    'Social Equality',
    'Climate Action',
    'Environmental Justice',
    'Inspirational'
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-african-blue/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-african-dark mb-6">Our Blog</h1>
          <div className="w-20 h-1 bg-african-orange mx-auto mb-8"></div>
          <p className="text-xl max-w-3xl mx-auto">
            Explore articles on mental health, social equality, climate change, and inspirational stories from African communities.
          </p>
        </div>
      </section>

      {/* Search and Filter */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Search */}
            <div className="relative w-full md:w-64">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-african-orange"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            </div>

            {/* Categories */}
            <div className="flex flex-wrap gap-2 justify-center md:justify-end">
              {categories.map((category, index) => (
                <Button
                  key={category}
                  variant={index === 0 ? "default" : "outline"}
                  className={index === 0 ? "bg-african-orange hover:bg-african-orange/90" : ""}
                  size="sm"
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="section-container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-md border hover:shadow-lg transition-shadow">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between items-center mb-3">
                  <span className="px-3 py-1 bg-african-beige/60 text-african-brown rounded-full text-sm">
                    {post.category}
                  </span>
                  <span className="text-sm text-gray-500">{post.date}</span>
                </div>
                <h3 className="text-xl font-bold mb-2 text-african-dark">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <Button variant="link" className="p-0 text-african-blue hover:text-african-blue/90">
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <nav className="inline-flex rounded-md shadow">
            <Button variant="outline" className="rounded-l-md">Previous</Button>
            <Button variant="outline" className="border-l-0 border-r-0 bg-african-orange text-white hover:bg-african-orange/90">
              1
            </Button>
            <Button variant="outline" className="border-r-0">2</Button>
            <Button variant="outline" className="border-r-0">3</Button>
            <Button variant="outline" className="rounded-r-md">Next</Button>
          </nav>
        </div>
      </section>

      {/* Newsletter Sign Up */}
      <section className="bg-african-green/10 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-african-dark">Subscribe to Our Newsletter</h2>
          <p className="mb-6 max-w-2xl mx-auto text-gray-700">
            Get the latest articles, resources, and updates delivered directly to your inbox.
          </p>
          <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your email address"
              className="flex-grow px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-african-orange"
              required
            />
            <Button className="bg-african-orange hover:bg-african-orange/90">
              Subscribe
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Blog;
