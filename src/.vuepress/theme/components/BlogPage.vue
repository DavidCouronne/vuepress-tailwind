<template>
  <main class="home" aria-labelledby="main-title">
    <header class="hero text-primary bg-background-primary">
      <img
        v-if="data.heroImage"
        :src="$withBase(data.heroImage)"
        :alt="data.heroAlt || 'hero'"
      >

      <h1 v-if="data.heroText !== null" id="main-title">{{ data.heroText || $title || 'Hello' }}</h1>

      <p class="description opacity-75">
        {{ data.tagline || $description || 'Welcome To My Blogs' }}
      </p>
    </header>

    <Content class="theme-default-content custom"/>

<div>
      <div class="flex-grow">
        <div  class="mb-12 bg-background-content p-4 rounded-lg shadow-lg">
            <img class="w-full" src="https://res.cloudinary.com/dpw19qolx/image/upload/c_crop,q_auto/v1549194480/samples/landscapes/landscape-panorama.jpg" alt="Sunset in the mountains">
          <span class="text-3xl font-bold">
            <g-link to="/h" class="text-primary pb-1"> post.title </g-link>
          </span>
          <div class="mb-4 opacity-75 pt-1">
            <span> formateDate(post.frontmatter.date) </span>
            <span>&middot;</span>
            <span>post.readingTime.text </span>
            <span class="px-6 py-4">
    <span class="inline-block bg-background-primary rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2">#photography</span>
    <span class="inline-block bg-background-primary rounded-full px-3 py-1 text-sm font-semibold text-primary mr-2">#travel</span>
    <span class="inline-block bg-background-primary rounded-full px-3 py-1 text-sm font-semibold text-primary">#winter</span>
  </span>
          </div>
          <div class="text-lg mb-4"> post.frontmatter.description</div>
          <div class="mb-8">
            <router-link to="/" class="font-bold uppercase">Read More</router-link>
          </div>
          
        </div>
        <div  class="mb-12 bg-background-content p-4 rounded-lg">
          <h2 class="text-3xl font-bold">
            <g-link to="/h" class="text-primary"> post.title </g-link>
          </h2>
          <div class="mb-4 opacity-75">
            <span> formateDate(post.frontmatter.date) </span>
            <span>&middot;</span>
            <span>post.readingTime.text </span>
          </div>
          <div class="text-lg mb-4"> post.frontmatter.description</div>
          <div class="mb-8">
            <router-link to="/" class="font-bold uppercase">Read More</router-link>
          </div>
        </div>
      </div>
    </div>
    
  </main>
</template>

<script>
import NavLink from '@theme/components/NavLink.vue'

export default {
  components: { NavLink },

  computed: {
    data () {
      return this.$page.frontmatter
    },

    actionLink () {
      return {
        link: this.data.actionLink,
        text: this.data.actionText
      }
    }
  }
}
</script>

<style lang="stylus">
.home
  padding $navbarHeight 2rem 0
  max-width 960px
  margin 0px auto
  display block
  .hero
    text-align center
    img
      max-width: 100%
      max-height 280px
      display block
      margin 3rem auto 1.5rem
    h1
      font-size 3rem
    h1, .description, .action
      margin 1.8rem auto
    .description
      max-width 35rem
      font-size 1.6rem
      line-height 1.3
      
    .action-button
      display inline-block
      font-size 1.2rem
      
      
      padding 0.8rem 1.6rem
      border-radius 4px
      transition background-color .1s ease
      box-sizing border-box
      border-bottom 1px solid darken($accentColor, 10%)
      
  .features
    border-top 1px solid var(--border-color)
    padding 1.2rem 0
    margin-top 2.5rem
    display flex
    flex-wrap wrap
    align-items flex-start
    align-content stretch
    justify-content space-between
  .feature
    flex-grow 1
    flex-basis 30%
    max-width 30%
    h2
      font-size 1.4rem
      font-weight 500
      border-bottom none
      padding-bottom 0
      
  .footer
    padding 2.5rem
    border-top 1px solid var(--border-color)
    text-align center
    
@media (max-width: $MQMobile)
  .home
    .features
      flex-direction column
    .feature
      max-width 100%
      padding 0 2.5rem

@media (max-width: $MQMobileNarrow)
  .home
    padding-left 1.5rem
    padding-right 1.5rem
    .hero
      img
        max-height 210px
        margin 2rem auto 1.2rem
      h1
        font-size 2rem
      h1, .description, .action
        margin 1.2rem auto
      .description
        font-size 1.2rem
      .action-button
        font-size 1rem
        padding 0.6rem 1.2rem
    .feature
      h2
        font-size 1.25rem
</style>
