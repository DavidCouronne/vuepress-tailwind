<template>
  <header>
    <nav
      class="font-sans bg-primary text-center flex justify-between my-4 mx-auto container overflow-hidden"
    >
      <a
        href="/"
        class="block text-left no-underline font-bold text-primary uppercase"
      >{{$site.title}}</a>
      <ul class="text-sm  list-reset flex items-center">
        <li v-for="item in $site.themeConfig.nav">
          <a
            :href="item.link"
            class="inline-block py-2 px-3   no-underline"
          >{{item.text}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>