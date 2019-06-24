---
title: Customize starter blog theme
date: 2019-06-24
description: 'my first post !'
---

## Customize Blog Layout

`.vuepress/components/BlogLayout.vue`

```js
<template>
  <div
    class="content-wrapper bg-background-primary font-sans text-primary leading-normal flex flex-col min-h-screen"
    :class="theme"
  >
    <Navbar :theme="theme" @themeChanged="updateTheme" @toggle-sidebar="toggleSidebar"/>
    <div class="mx-20 px-20 py-20">
      <div class="flex-grow">
        <div v-for="post in posts" class="mb-12 bg-background-content p-4 rounded-lg">
          <h2 class="text-3xl font-bold">
            <g-link :to="post.path" class="text-primary">{{ post.title }}</g-link>
          </h2>
          <div class="mb-4 opacity-75">
            <span>{{ formateDate(post.frontmatter.date) }}</span>
            <span>&middot;</span>
            <span>{{post.readingTime.text }}</span>
          </div>
          <div class="text-lg mb-4">{{ post.frontmatter.description}}</div>
          <div class="mb-8">
            <router-link :to="post.path" class="font-bold uppercase">Read More</router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@theme/components/Navbar.vue";
import moment from "moment";

export default {
  components: { Navbar },

  data() {
    return {
      isSidebarOpen: false,
      theme: ""
    };
  },
  mounted() {
    this.theme = localStorage.getItem("theme") || "theme-light";
  },
  methods: {
    formateDate(date) {
      return moment(date).format("MMM Do YYYY");
    },
    toggleSidebar(to) {
      this.isSidebarOpen = typeof to === "boolean" ? to : !this.isSidebarOpen;
    },
    updateTheme(theme) {
      this.theme = theme;
    }
  },
  computed: {
    posts() {
      return this.$site.pages
        .filter(x => x.path.startsWith("/blog/") && !x.frontmatter.blog_index)

        .sort(
          (a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date)
        );
    }
  }
};
</script>

```