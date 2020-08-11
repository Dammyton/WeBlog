<template>
    <div class="mt-5 pt-3">
          <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
</template>

<script>
export default {
  data() {
    return {
      items: [
        {
          text: "Home",
          href: "/",
        },
        {
          text: "Post",
          active: true,
        },
      ],
    };
  },
};
</script>
<style scoped>

a {
  color: #42b983;
}
a:hover {
    color: #2e805b;
    text-decoration: underline;
}
</style>