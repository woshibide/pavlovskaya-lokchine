<template>
  <nav v-if="breadcrumbs && breadcrumbs.length > 1" class="breadcrumb" aria-label="Breadcrumb">
    <ol class="breadcrumb-list">
      <li v-for="(crumb, index) in breadcrumbs" :key="crumb.path" class="breadcrumb-item">
        <span v-if="index === breadcrumbs.length - 1" class="breadcrumb-current" aria-current="page">
          {{ crumb.name }}
        </span>
        <NuxtLink v-else :to="crumb.path" class="breadcrumb-link">
          {{ crumb.name }}
        </NuxtLink>
        <span v-if="index < breadcrumbs.length - 1" class="breadcrumb-separator"> / </span>
      </li>
    </ol>
  </nav>
</template>

<script setup>
const route = useRoute()

const { data: breadcrumbs } = await useAsyncData(`breadcrumbs-${route.path}`, async () => {
  return generateBreadcrumbs(route)
}, {
  default: () => [],
  watch: [route]
})

// Watch for route changes and regenerate breadcrumbs
watch(route, async (newRoute) => {
  breadcrumbs.value = await generateBreadcrumbs(newRoute)
}, { immediate: true })

async function generateBreadcrumbs(currentRoute) {
  const pathSegments = currentRoute.path.split('/').filter(segment => segment)
  if (pathSegments.length === 0) return []

  const crumbs = [{ name: 'Index', path: '/' }]

  let currentPath = ''
  for (let i = 0; i < pathSegments.length; i++) {
    currentPath += '/' + pathSegments[i]
    let name = pathSegments[i]

    // Handle dynamic routes
    if (currentRoute.params.slug && pathSegments[i] === currentRoute.params.slug) {
      // For news articles, get the title from content
      if (currentPath.startsWith('/news/')) {
        try {
          const article = await queryContent(`/news/${currentRoute.params.slug}`).findOne()
          if (article) {
            name = article.title
          }
        } catch (error) {
          console.error('Error fetching article for breadcrumb:', error)
        }
      }
    } else {
      // Capitalize first letter for other segments
      name = name.charAt(0).toUpperCase() + name.slice(1)
    }

    crumbs.push({ name, path: currentPath })
  }

  return crumbs
}
</script>

<style scoped>
.breadcrumb {
  opacity: 0.4;
  margin: 1rem 0;
  font-size: 0.9rem;
}

.breadcrumb-list {
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
}

.breadcrumb-item {
  text-transform: lowercase;
  display: flex;
  align-items: center;
}

.breadcrumb-link {
  color: #666;
  text-decoration: none;
}

.breadcrumb-link:hover {
  text-decoration: underline;
}

.breadcrumb-current {
  text-decoration: underline 1px solid;
  color: #000;
  font-weight: bold;
}

.breadcrumb-separator {
  margin: 0 0.5rem;
  color: #999;
}
</style>