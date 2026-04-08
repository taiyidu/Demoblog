import { useState, useEffect } from 'react';

// 博客文章类型定义
interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  image: string;
}

// 默认博客数据
const defaultBlogs: BlogPost[] = [
  {
    id: 1,
    title: '如何打造个人品牌',
    excerpt: '在当今数字时代，个人品牌变得越来越重要。本文将分享如何通过内容创作和社交媒体建立强大的个人品牌...',
    date: '2024-01-15',
    author: '张三',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=personal%20branding%20professional%20headshot%20modern%20style&image_size=square'
  },
  {
    id: 2,
    title: '前端开发趋势2024',
    excerpt: '探索2024年前端开发的最新趋势，包括React新特性、WebAssembly应用和AI辅助开发工具...',
    date: '2024-01-10',
    author: '李四',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=frontend%20development%20code%20editor%20modern%20workspace&image_size=square'
  },
  {
    id: 3,
    title: '健康生活方式指南',
    excerpt: '保持健康的生活方式对我们的身体和心理健康至关重要。本文提供实用的健康建议和生活技巧...',
    date: '2024-01-05',
    author: '王五',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=healthy%20lifestyle%20fitness%20nutrition%20balance&image_size=square'
  },
  {
    id: 4,
    title: '旅行摄影技巧',
    excerpt: '如何在旅行中捕捉令人难忘的瞬间？本文分享专业旅行摄影的构图、光线和后期处理技巧...',
    date: '2024-01-01',
    author: '赵六',
    image: 'https://trae-api-cn.mchost.guru/api/ide/v1/text_to_image?prompt=travel%20photography%20landscape%20camera%20professional&image_size=square'
  }
];

function App() {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  // 模拟API请求
  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        setLoading(true);
        // 模拟网络请求延迟
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // 模拟API失败的情况
        // throw new Error('API请求失败');
        
        setBlogs(defaultBlogs);
        setError(null);
      } catch (err) {
        setError('获取博客数据失败，显示默认内容');
        setBlogs(defaultBlogs); // 失败时使用默认数据
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="App">
      {/* 头部 */}
      <header>
        <div className="header-bg"></div>
        <div className="container header-content">
          <h1>个人博客</h1>
          <p>分享我的 thoughts 和 experiences</p>
          <div className="battery-animation">
            <div className="battery-level"></div>
          </div>
        </div>
      </header>

      {/* 导航栏 */}
      <nav>
        <div className="container nav-container">
          <a href="#" className="logo">Blog</a>
          <ul className="nav-links">
            <li><a href="#">首页</a></li>
            <li><a href="#">文章</a></li>
            <li><a href="#">关于我</a></li>
            <li><a href="#">联系方式</a></li>
          </ul>
        </div>
      </nav>

      {/* 英雄区域 */}
      <section className="hero">
        <div className="container">
          <h1>欢迎来到我的个人博客</h1>
          <p>这里记录了我的学习、工作和生活经历，希望能为你带来一些启发和帮助</p>
        </div>
      </section>

      {/* 博客文章区域 */}
      <section className="blog-section">
        <div className="container">
          <h2 className="section-title">最新文章</h2>
          
          {loading ? (
            <div className="loading">
              <div className="loading-spinner"></div>
              <p>加载中...</p>
            </div>
          ) : error ? (
            <div className="error">
              <p>{error}</p>
            </div>
          ) : (
            <div className="blog-grid">
              {blogs.map(blog => (
                <div key={blog.id} className="blog-card">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    loading="lazy" 
                    decoding="async"
                  />
                  <div className="blog-content">
                    <h3 className="blog-title">{blog.title}</h3>
                    <p className="blog-excerpt">{blog.excerpt}</p>
                    <div className="blog-meta">
                      <span>{blog.date}</span>
                      <span>{blog.author}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* 页脚 */}
      <footer>
        <div className="container footer-content">
          <p>&copy; 2024 个人博客. 保留所有权利.</p>
          <ul className="footer-links">
            <li><a href="#">隐私政策</a></li>
            <li><a href="#">使用条款</a></li>
            <li><a href="#">联系我们</a></li>
          </ul>
          <div className="social-links">
            <a href="#">📧</a>
            <a href="#">🐦</a>
            <a href="#">📘</a>
            <a href="#">📱</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;