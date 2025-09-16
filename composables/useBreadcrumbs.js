export const useBreadcrumbs = () => {
  const route = useRoute()
  const breadcrumbs = ref([])

  const generateBreadcrumbs = async () => {
    const pathSegments = route.path.split('/').filter(segment => segment)
    const crumbs = [{ name: 'Home', path: '/' }]

    let currentPath = ''
    for (let i = 0; i < pathSegments.length; i++) {
      currentPath += '/' + pathSegments[i]
      let name = pathSegments[i]

      // Handle dynamic routes
      if (route.params.slug && pathSegments[i] === route.params.slug) {
        // For news articles, get the title from content
        if (currentPath.startsWith('/news/')) {
          try {
            const article = await queryCollection('news').findOne({ stem: `news/${route.params.slug}` })
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

    breadcrumbs.value = crumbs
  }

  onMounted(() => {
    generateBreadcrumbs()
  })

  watch(() => route.path, () => {
    generateBreadcrumbs()
  })

  return breadcrumbs
}