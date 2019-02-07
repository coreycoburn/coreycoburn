<template>
  <div>
    <div class="container mx-auto">
      <h1 class="text-center">
        {{ title }}
      </h1>

      <div class="flex">
        <div class="flex w-1/2 justify-center">
          <img
            class="flex"
            src="~assets/img/corey.png"
            alt="Corey waving"
          >
        </div>

        <div class="flex w-1/2 items-center text-xl">
          <p>
            Hi, I'm Corey, a full-stack web developer living in Santa Rosa, CA with 8+ years professional experience. My passion for this constantly evolving field resonates deeply with me. I am consistently pushing myself to grow and become a better developer and being a part of a team with similar goals.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey-light py-24 text-black text-lg shadow-lg shadow-inner">
      <div class="container mx-auto max-w-md">
        <h2>My Story</h2>

        <p>
          I've always been into building things for the web ever since I got my hands on a computer. I started building websites when I was in high school in the early 2000's, dabbling with free website hosts like Geocities and Angelfire. I continued my creative passion for the web while in college making personal websites and family/friends business websites for fun.
        </p>

        <p>
          I graduated from Sonoma State University in 2005 and became an Executive Team Leader for Target. I gained a lot of experience in customer service and leading a team during the three years I was there. I decided that the retail life wasn't for me.
        </p>

        <p>
          I joined C.P.A. Valet, a premier valet and shuttle company in the North Bay, as an Operations Manager. After a year of working as an Operations Manager, I realized that the operations of the business could operate much more efficiently if there was an application/service that could handle all of the business needs.
        </p>

        <p>
          Since 2011, I have been working as a full-stack web developer, creating an internal CRM and ERM (Customer Relationship Management and Employee Relationship Management) that runs the day-to-day operations for the company.
        </p>

        <h2>Experience</h2>

        <p>
          I have grown with the web. My first websites were built when CSS wasn't a thing and layouts were used with tables. I have developed websites using Flash and ActionScript 3 before html5 was introduced.
        </p>

        <p>
          Since 2011 I have been developing with PHP, Javascript (and jQuery), and MySQL. I have a good understanding of the Unix system / web servers as I've dealt with all of the DevOps processes for the company.
        </p>

        <p>
          My current tech stack that I am working in daily is:
        </p>

        <ul>
          <li>
            <a href="https://laravel.com/">
              Laravel: The PHP Framework for Web Artisans
            </a>
          </li>

          <li>
            <a href="https://vuejs.org/">
              Vue.js: The Progressive Javascript Framework
            </a>
          </li>

          <li>
            <a href="https://tailwindcss.com/">
              Tailwind CSS: A Utility-first CSS framework
            </a>
          </li>

          <li>
            <a href="https://vuejs.org/">
              Vue.js: The Progressive Javascript Framework
            </a>
          </li>

          <li>
            <a href="https://www.docker.com/">
              Docker: Containers for DevOps
            </a>
          </li>
        </ul>

        <h2>Current Projects</h2>

        <h3>Springly</h3>

        <p>
          Springly is a SAAS web app for mobile service companies in the hospitality industry. It is currently in private development.
        </p>

        <h3>Liv Themes</h3>
        <p>
          Currently working on releasing an Admin Template product on <a href="https://themeforest.net/category/site-templates/admin-templates">
            Theme Forest
          </a> built with Vue and Tailwind Css.
        </p>

        <h3>Currently Learning</h3>

        <p>
          I'm continuously trying to become a better developer and staying on top of the latest technologies. I'm focusing on improving my development by writing more tests for my code (unit and integration) for both Laravel and Vue. I'm also have been dabbling in learning React and GraphQL.
        </p>
      </div>
    </div>

    <div class="bg-black py-16 text-grey-lightest">
      <div class="flex container mx-auto max-w-xl">
        <Icon
          name="brands/php"
          class="flex-1 icon-lg"
        />

        <Icon
          name="brands/laravel"
          class="flex-1 icon-lg"
        />

        <Icon
          name="brands/js"
          class="flex-1 icon-lg"
        />

        <Icon
          name="brands/vuejs"
          class="flex-1 icon-lg"
        />

        <Icon
          name="brands/git"
          class="flex-1 icon-lg"
        />

        <Icon
          name="brands/sass"
          class="flex-1 icon-lg"
        />

        <Icon
          name="brands/sketch"
          class="flex-1 icon-lg"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Icons
import '@/components/icons/brands/git'
import '@/components/icons/brands/js'
import '@/components/icons/brands/laravel'
import '@/components/icons/brands/php'
import '@/components/icons/brands/sass'
import '@/components/icons/brands/sketch'
import '@/components/icons/brands/vuejs'

export default {
  head () {
    return {
      title: this.title
    }
  },

  data () {
    return {
      title: 'About'
    }
  }
}
</script>
