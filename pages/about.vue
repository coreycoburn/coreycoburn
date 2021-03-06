<template>
  <div>
    <div class="max-w-3xl mx-auto">
      <h1 class="text-center">
        {{ title }}
      </h1>

      <div class="flex flex-col md:flex-row">
        <div class="flex w-full justify-center md:w-1/2">
          <img
            class="flex"
            src="~assets/img/corey.png"
            alt="Corey waving"
          >
        </div>

        <div class="bg-teal flex w-full text-teal-lightest px-6 py-12 items-center text-xl md:w-1/2 md:bg-transparent md:text-grey-darker">
          <p>
            Hi, I am Corey, a Full Stack Software Engineer living in Santa Rosa, CA with {{ me.experience }}+ years of professional experience. My passion for this constantly evolving field resonates deeply with me. I continue to be inspired to excel as an engineer and I am eager to be part of a team with similar goals.
          </p>
        </div>
      </div>
    </div>

    <div class="bg-grey-lighter px-6 py-12 text-black text-lg shadow-lg shadow-inner md:px-0 md:py-24">
      <div class="container mx-auto max-w-md">
        <h2>My Story</h2>

        <p>
          Since I was a child I have been interested in building things for the web; that interest grew in high school when I was introduced to free website hosts like Geocities and Angelfire. I continued my creative passion for programming and design while in college both in and out of the classroom.
        </p>

        <p>
          I graduated from Sonoma State University in 2005 and became an Executive Team Leader for Target; my role focused heavily on providing excellent customer service and successfully leading a team. While I valued my role at Target, I was not fulfilled and after three years, I decided that I would be happier in a more creative setting.
        </p>

        <p>
          I joined C.P.A. Valet, a premier valet and shuttle company in the North Bay, as an Operations Manager. After a year of working as an Operations Manager, I realized that the operations of the business could operate much more efficiently if there was an application/service that could handle all of the business needs.
        </p>

        <p>
          Since 2011, I have been working as a software engineer, creating a successful internal CRM and ERM (Customer Relationship Management and Employee Relationship Management), called LEAP, that runs the day-to-day operations for the company. The application that I have built includes an extensive amount of features, including: scheduling, generating contracts, hiring process, client/employee communication, business reports, transactional emails, etc. I am presently close to rolling out LEAP 2.0 with a front end built in Vue and back-end/API built in Laravel.
        </p>

        <h2>Experience</h2>

        <p>
          I have grown with the web. My first websites were built before CSS existed and layouts were used with tables. I developed websites using Flash and ActionScript 3 before html5 was introduced.
        </p>

        <p>
          Since 2010, I have been developing with PHP using a custom framework I architected, Javascript/ES6 (jQuery and now Vue), MySQL, and use GIT for version control. I have a good understanding of the Unix system/web servers as I've dealt with all of the DevOps processes for C.P.A. Valet. I feel at home on the command line as I use it every day.
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
            <a href="https://www.docker.com/">
              Docker: Containers for DevOps
            </a>
          </li>
        </ul>

        <h2>Current Projects</h2>

        <h3>Springly</h3>

        <p>
          Springly is a multi-tenant SAAS web application for mobile service companies in the hospitality industry. It is currently in private development.
        </p>

        <h3>Liv Themes</h3>
        <p>
          Currently working on releasing an Admin Template product on <a href="https://themeforest.net/category/site-templates/admin-templates">
            Theme Forest
          </a>, which is built with Vue and Tailwind CSS.
        </p>

        <h3>Open Source</h3>

        <p>
          I started contributing to open source projects last year when my first pull-request was merged into a popular Vue package (<a href="https://github.com/jofftiquez/v-animate-css/pull/2/">
            Added modifiers to listen to scroll events
          </a>). I plan to spend more time focusing on open source work in 2019-2020.
        </p>

        <h3>Currently Learning</h3>

        <p>
          I am currently focusing on improving my development process by writing more tests for my code (unit and integration) by using TDD (Test-driven development) process for both Laravel and Vue. I also have been dabbling in learning React and GraphQL.
        </p>

        <p>
          I love the field that I work in and feel privileged that I can do what I love on a daily basis. I love staying on top of the ever-changing web and enjoy building side-projects to practice/hone my skills.
        </p>
      </div>
    </div>

    <div class="diamonds py-16 text-grey-lightest">
      <div class="flex flex-wrap container mx-auto max-w-xl">
        <Icon
          name="php"
          class="w-1/3 mb-12 icon-lg md:flex-1 md:mb-0"
        />

        <Icon
          name="laravel"
          class="w-1/3 mb-12 icon-lg md:flex-1 md:mb-0"
        />

        <Icon
          name="js"
          class="w-1/3 mb-12 icon-lg md:flex-1 md:mb-0"
        />

        <Icon
          name="vuejs"
          class="w-1/3 mb-12 icon-lg md:flex-1 md:mb-0"
        />

        <Icon
          name="git"
          class="w-1/3 mb-12 icon-lg md:flex-1 md:mb-0"
        />

        <Icon
          name="sass"
          class="w-1/3 mb-12 icon-lg md:flex-1 md:mb-0"
        />

        <Icon
          name="sketch"
          class="w-full icon-lg md:flex-1 md:mb-0"
        />
      </div>
    </div>
  </div>
</template>

<script>
// Icons
import '@/components/icons/git'
import '@/components/icons/js'
import '@/components/icons/laravel'
import '@/components/icons/php'
import '@/components/icons/sass'
import '@/components/icons/sketch'
import '@/components/icons/vuejs'

// Content
import { me } from '@/config/content'

export default {
  head () {
    return {
      title: this.title
    }
  },

  data () {
    return {
      me
    }
  },

  computed: {
    title () {
      return `About ${this.me.name}`
    }
  }
}
</script>
