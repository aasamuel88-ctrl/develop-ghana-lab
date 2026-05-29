import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'AI Tools',
  description: 'Intelligent automation and productivity tools',
};

export default function AIToolsPage() {
  const tools = [
    {
      title: 'Content Generator',
      description: 'AI-powered content creation for blogs, social media, and marketing',
      icon: '✨',
    },
    {
      title: 'Code Assistant',
      description: 'Intelligent code completion and debugging suggestions',
      icon: '💻',
    },
    {
      title: 'Image Generator',
      description: 'Generate stunning images from text descriptions',
      icon: '🎨',
    },
    {
      title: 'Analytics Pro',
      description: 'Advanced analytics and insights for your business',
      icon: '📊',
    },
    {
      title: 'Chat Assistant',
      description: 'AI chatbot for customer support and engagement',
      icon: '💬',
    },
    {
      title: 'SEO Optimizer',
      description: 'Optimize your content for search engines automatically',
      icon: '🔍',
    },
  ];

  return (
    <div className="py-12 md:py-24">
      <div className="container-max mb-16">
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-5xl md:text-6xl font-bold mb-4">AI Tools</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400">
            Harness the power of artificial intelligence to automate your workflow
          </p>
        </div>
      </div>

      <div className="container-max">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tools.map((tool, idx) => (
            <div key={idx} className="card-hover">
              <div className="text-5xl mb-4">{tool.icon}</div>
              <h3 className="text-xl font-bold mb-2">{tool.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{tool.description}</p>
              <button className="btn-outline">
                Try Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
