<script lang="ts" setup>
import Permablog from '../../node_modules/permablog-js/lib/main';

const key = '8Um5N1NWBHKIBMu1DSSM8L4dZValtz10R7exV1ZQv1A';

const { data: articles, pending, error } = await useAsyncData(
  'blog-articles',
  async () => {
    const blog = Permablog({ key });
    return await blog.fetchArticles({ limit: 50 });
  }
);

const formatDate = (timestamp: number) => {
  return new Date(timestamp * 1000).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
};
</script>

<template>
  <div class="blog-container">
    <div class="blog-header">
      <h1>Blog</h1>
      <p class="subtitle">Articles stored permanently on Arweave</p>
    </div>

    <div v-if="pending" class="loading">
      <div class="spinner"></div>
      <p>Loading articles...</p>
    </div>

    <div v-else-if="error" class="error">
      <p>Failed to load articles: {{ error.message }}</p>
    </div>

    <div v-else-if="!articles || articles.length === 0" class="empty">
      <p>No articles found.</p>
    </div>

    <div v-else class="articles-list">
      <NuxtLink
        v-for="article in articles"
        :key="article.id"
        :to="`/blog/${article.id}`"
        class="article-item"
      >
        <div class="article-main">
          <h2 class="article-title">{{ article.title }}</h2>
          <span class="article-category">{{ article.category }}</span>
        </div>
        <span class="article-date">{{ formatDate(article.timestamp) }}</span>
      </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
.blog-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 2rem 1rem;
  min-height: 100vh;
}

.blog-header {
  text-align: center;
  margin-bottom: 3rem;
}

.blog-header h1 {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.subtitle {
  color: #666;
  font-size: 1.1rem;
}

.loading, .error, .empty {
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

.articles-list {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.article-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.25rem 0;
  border-bottom: 1px solid #e0e0e0;
  text-decoration: none;
  color: inherit;
  transition: all 0.2s ease;
}

.article-item:hover {
  padding-left: 1rem;
  background: #f9f9f9;
}

.article-main {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex: 1;
  min-width: 0;
}

.article-title {
  font-size: 1.125rem;
  font-weight: 500;
  color: #2c3e50;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.article-category {
  color: #3498db;
  font-size: 0.875rem;
  font-weight: 500;
  text-transform: uppercase;
  white-space: nowrap;
}

.article-date {
  color: #888;
  font-size: 0.875rem;
  white-space: nowrap;
  margin-left: 1rem;
}

@media (max-width: 768px) {
  .blog-header h1 {
    font-size: 2rem;
  }
  
  .article-item {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
  }
  
  .article-main {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.25rem;
  }
  
  .article-date {
    margin-left: 0;
  }
}
</style>
