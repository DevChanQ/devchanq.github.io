<script lang="ts" setup>
import Permablog from '../../node_modules/permablog-js/lib/main';
import MarkdownRender from 'vue-markdown-render';

const route = useRoute();
const key = '8Um5N1NWBHKIBMu1DSSM8L4dZValtz10R7exV1ZQv1A';

const { data: article, pending, error } = await useAsyncData(
  `article-${route.params.id}`,
  async () => {
    const blog = Permablog({ key });
    console.log(blog)
    return await blog.fetchArticle(route.params.id as string);
  }
);

const formatDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};

useHead({
  title: article.value ? `${article.value.title} | Devjeff's Blog` : 'Loading...',
  meta: [
    {
      name: 'description',
      content: article.value
        ? article.value.content.slice(0, 150).replace(/[#*`\[\]]/g, '').trim()
        : 'Loading article...',
    },
  ],
});
</script>

<template>
  <div class="article-container">
    <NuxtLink to="/blog" class="back-link">
      ← Back to Blog
    </NuxtLink>

    <div v-if="pending" class="loading">
      <div class="spinner"></div>
      <p>Loading article...</p>
    </div>

    <div v-else-if="error" class="error">
      <h1>Error Loading Article</h1>
      <p>{{ error.message }}</p>
    </div>

    <div v-else-if="!article" class="not-found">
      <h1>Article Not Found</h1>
      <p>The article you're looking for doesn't exist.</p>
    </div>

    <article v-else class="article">
      <header class="article-header">
        <div class="article-category">{{ article.category }}</div>
        <h1 class="article-title">{{ article.title }}</h1>
        <div class="article-meta">
          <span class="article-date">{{ formatDate(article.timestamp) }}</span>
          <a 
            :href="`https://arweave.net/${article.id}`" 
            target="_blank" 
            rel="noopener noreferrer"
            class="arweave-link"
            title="View on Arweave"
          >
            View on Arweave ↗
          </a>
        </div>
      </header>

      <div class="article-content">
        <MarkdownRender :source="article.content" />
      </div>
    </article>
  </div>
</template>

<style scoped>
.article-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
}

.back-link {
  display: inline-flex;
  align-items: center;
  color: #3498db;
  text-decoration: none;
  margin-bottom: 2rem;
  font-weight: 500;
  transition: color 0.2s;
}

.back-link:hover {
  color: #2980b9;
}

.loading, .error, .not-found {
  text-align: center;
  padding: 4rem 1rem;
}

.spinner {
  width: 40px;
  height: 40px;
  margin: 0 auto 1rem;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error {
  color: #e74c3c;
}

.article {
  background: white;
  border-radius: 12px;
  padding: 3rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
}

.article-header {
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 2px solid #e0e0e0;
}

.article-category {
  display: inline-block;
  background: #3498db;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-bottom: 1rem;
}

.article-title {
  font-size: 2.5rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 1rem;
  line-height: 1.2;
}

.article-meta {
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #666;
  font-size: 0.95rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.article-date {
  color: #888;
}

.arweave-link {
  color: #3498db;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.2s;
}

.arweave-link:hover {
  color: #2980b9;
}

.article-content {
  font-size: 1.1rem;
  line-height: 1.8;
  color: #333;
}

.article-content :deep(h1),
.article-content :deep(h2),
.article-content :deep(h3) {
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 600;
  color: #2c3e50;
}

.article-content :deep(h1) {
  font-size: 2rem;
}

.article-content :deep(h2) {
  font-size: 1.5rem;
}

.article-content :deep(h3) {
  font-size: 1.25rem;
}

.article-content :deep(p) {
  margin-bottom: 1.5rem;
}

.article-content :deep(a) {
  color: #3498db;
  text-decoration: underline;
}

.article-content :deep(code) {
  background: #f5f5f5;
  padding: 0.2rem 0.4rem;
  border-radius: 4px;
  font-family: 'Courier New', monospace;
  font-size: 0.9em;
}

.article-content :deep(pre) {
  background: #2c3e50;
  color: #ecf0f1;
  padding: 1rem;
  border-radius: 8px;
  overflow-x: auto;
  margin-bottom: 1.5rem;
}

.article-content :deep(pre code) {
  background: transparent;
  padding: 0;
  color: inherit;
}

.article-content :deep(blockquote) {
  border-left: 4px solid #3498db;
  padding-left: 1rem;
  margin-left: 0;
  color: #666;
  font-style: italic;
}

.article-content :deep(ul),
.article-content :deep(ol) {
  margin-bottom: 1.5rem;
  padding-left: 2rem;
}

.article-content :deep(li) {
  margin-bottom: 0.5rem;
}

.article-content :deep(img) {
  max-width: 100%;
  height: auto;
  border-radius: 8px;
  margin: 2rem 0;
}

@media (max-width: 768px) {
  .article {
    padding: 1.5rem;
  }
  
  .article-title {
    font-size: 2rem;
  }
  
  .article-content {
    font-size: 1rem;
  }
}
</style>
