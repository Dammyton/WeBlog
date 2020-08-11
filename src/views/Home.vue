<template>
  <div>
    <BlogPost />
  </div>
</template>

<script>
// @ is an alias to /src
import BlogPost from '@/components/BlogPost'

export default {
  name: 'Home',
  components: {
    BlogPost
  }
}
</script>
