<template>
  <div>
    <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
    <section
      class="relative bg-white overflow-hidden shadow-sm"
      style="margin: 0px -14vw;"
    >
      <div class="max-w-screen-xl mx-auto">
        <div
          class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 xl:max-w-2xl xl:w-full xl:pb-28 xl:pb-32"
        >
          <svg
            class="hidden xl:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
            fill="currentColor"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <polygon points="50,0 100,0 50,100 0,100" />
          </svg>

          <div class="relative pt-6 px-4 sm:px-6 xl:px-8"></div>

          <main
            class="mt-10 mb-10 mx-auto max-w-screen-xl px-4 sm:mt-12 sm:px-6 md:mt-16 xl:mt-20 xl:px-8 xl:mt-28"
          >
            <div class="text-center xl:text-left">
              <h1
                class="text-grey-600 text-4xl md:text-5xl tracking-tight leading-10 font-bold"
              >
                Hi there! I'm Joel Brubaker.
              </h1>
              <p
                class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-3xl sm:mx-auto md:mt-5 md:text-xl xl:mx-0"
              >
                I'm a developer and Lead Software Engineer at a fast-paced
                healthcare management company in San Diego, CA.
              </p>
              <div
                class="mt-5 sm:mt-8 sm:flex sm:justify-center xl:justify-start"
              >
                <div class="rounded-md shadow">
                  <router-link
                    to="/about-me"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-blue-600 hover:bg-blue-500 focus:outline-none focus:border-blue-700 focus:shadow-outline-blue transition duration-150 ease-in-out md:py-3 md:text-lg md:px-8"
                  >
                    About Me
                  </router-link>
                </div>
                <div class="mt-3 sm:mt-0 sm:ml-3">
                  <a
                    href="https://twitter.com/JoelBrubaker"
                    target="_blank"
                    class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-3 md:text-lg md:px-8"
                  >
                    @JoelBrubaker
                  </a>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
      <div class="xl:absolute xl:inset-y-0 xl:right-0 xl:w-1/2">
        <img
          class="hidden h-56 w-full object-cover sm:h-72 md:h-96 xl:w-full xl:h-full xl:block"
          src="/pictures/joel-brubaker.jpg"
          alt=""
        />
      </div>
    </section>
    <!--
      Overview
    -->
    <section
      class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24"
      style="margin: 0 -14vw;"
    >
      <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg
          class="hidden lg:block absolute right-full transform -translate-x-1/8 -translate-y-1/2"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 202 784"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>
        <div class="relative">
          <div class="lg:text-center">
            <p
              class="text-base leading-6 text-blue-600 font-semibold tracking-wide uppercase"
            >
              Full Stack Developer
            </p>
            <h3
              class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10"
            >
              Expertise Across User Interfaces, Web Servers, Data and Cloud
            </h3>
            <p
              class="mt-4 max-w-2xl text-xl leading-7 text-gray-500 lg:mx-auto"
            >
              My problem-solving capabilities extend across the tech stack.
            </p>
          </div>

          <div class="mt-10">
            <ul class="list-none md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              <li>
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div
                      class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
                    >
                      <!-- Heroicon name: globe-alt -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">
                      User Interfaces
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      I'm very familiar with reactive component frameworks such
                      as Vue.js and React. I'm also comfortable switching
                      between SASS stylesheets, styled components or
                      Tailwind.css.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-0">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div
                      class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
                    >
                      <!-- Heroicon name: scale -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">
                      Web Servers & APIs
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      I can leverage a full-featured framework such as Laravel,
                      a highly performant binary written in Go, or a
                      frontend-aligned stack in Node.js and Typescript to build
                      RESTful or gRPC endpoints.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-0">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div
                      class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
                    >
                      <!-- Heroicon name: lightning-bolt -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M13 10V3L4 14h7v7l9-11h-7z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">
                      Databases & Data Pipelines
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      I've worked extensively with SQL databases and ORMs. When
                      performance matters, I know how to eject from abstractions
                      to use raw joins, sub queries, views and complex selects.
                    </p>
                  </div>
                </div>
              </li>
              <li class="mt-10 md:mt-0">
                <div class="flex">
                  <div class="flex-shrink-0">
                    <div
                      class="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white"
                    >
                      <!-- Heroicon name: annotation -->
                      <svg
                        class="h-6 w-6"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                        />
                      </svg>
                    </div>
                  </div>
                  <div class="ml-4">
                    <h4 class="text-lg leading-6 font-medium text-gray-900">
                      Kubernetes & Cloud Platforms
                    </h4>
                    <p class="mt-2 text-base leading-6 text-gray-500">
                      I love working with Docker and Kubernetes. Google Cloud is
                      my platform of choice, but I'm no stranger to AWS. And
                      when a simple linux box will do, that's good enough for
                      me.
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
    <!-- Contact -->
    <section
      class="py-0 bg-gray-50 overflow-hidden md:py-12 lg:py-18"
      style="margin: 0 -14vw;"
    >
      <div class="relative max-w-screen-xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <svg
          class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width="404"
          height="784"
          fill="none"
          viewBox="0 0 404 784"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>
        <div class="relative">
          <div
            class="bg-blue-700 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4"
          >
            <div
              class="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20"
            >
              <div class="lg:self-center">
                <div
                  class="text-2xl leading-9 font-extrabold text-white sm:text-3xl sm:leading-10"
                >
                  <span class="block">Looking for help?</span>
                  <span class="block">Don't hesitate to reach out.</span>
                </div>
                <p class="mt-4 text-lg leading-6 text-blue-200">
                  If you are looking for advice, or have a great opportunity to
                  share, feel free to reach out.
                </p>
                <div
                  class="mt-5 sm:mt-8 sm:flex sm:justify-center xl:justify-start"
                >
                  <div class="rounded-md shadow">
                    <a
                      href="mailto:contact@joelbrubaker.com"
                      target="_blank"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-3 md:text-lg md:px-8"
                    >
                      Email Me
                    </a>
                  </div>
                  <div class="mt-3 sm:mt-0 sm:ml-3">
                    <a
                      href="https://twitter.com/messages/compose?recipient_id=259107445"
                      target="_blank"
                      class="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-blue-700 bg-blue-100 hover:text-blue-600 hover:bg-blue-50 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out md:py-3 md:text-lg md:px-8"
                    >
                      Direct Message
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="relative pb-3/5 -mt-6 md:pb-1/2">
              <img
                class="absolute inset-0 w-full h-full transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="https://tailwindui.com/img/component-images/full-width-with-sidebar.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- Featured -->
    <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
    <section
      class="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8"
      style="margin: 0 -14vw;"
    >
      <div class="absolute inset-0">
        <div class="bg-gray-50 h-1/3 sm:h-2/3"></div>
      </div>
      <div class="relative max-w-7xl mx-auto">
        <div class="text-center">
          <h3
            class="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            Past Work
          </h3>
          <p
            class="mt-3 max-w-2xl mx-auto text-xl leading-7 text-gray-500 sm:mt-4"
          >
            I bring nearly a decade of experience working across several
            industries including healthcare, finance, online retail and digital
            marketing.
          </p>
        </div>
        <div
          class="mt-12 grid gap-5 max-w-lg mx-auto lg:grid-cols-3 lg:max-w-none"
        >
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0 p-8 bg-purple-300 overflow-hidden h-48">
              <browser-frame>
                <img
                  class="h-full w-full object-scale-down object-top"
                  src="/projects/premier.png"
                  alt=""
                />
              </browser-frame>
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-blue-600">
                  Healthcare Management Software
                </p>
                <div>
                  <h3
                    class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                  >
                    Premiere Healthcare Management
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    Cloud-based software that enables non-profit community
                    health centers to increase access to quality care for
                    underserved communities.
                  </p>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <a
                  href="https://www.phmtech.com/"
                  target="_blank"
                  class="text-sm text-gray-400 hover:underline"
                  >View Website</a
                >
              </div>
            </div>
          </div>
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0 p-8 bg-red-300 overflow-hidden h-48">
              <browser-frame>
                <img
                  class="h-full w-full object-scale-down object-top"
                  src="/projects/pure.jpg"
                  alt=""
                />
              </browser-frame>
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-blue-600">
                  Studio Management Software
                </p>
                <div>
                  <h3
                    class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                  >
                    Pure Studio
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    Cloud-based business management software serving gyms and
                    fitness studios, and helping people find and book with them.
                  </p>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <a
                  href="https://purestudio.com/"
                  target="_blank"
                  class="text-sm text-gray-400 hover:underline"
                  >View Website</a
                >
              </div>
            </div>
          </div>
          <div class="flex flex-col rounded-lg shadow-lg overflow-hidden">
            <div class="flex-shrink-0 p-8 bg-yellow-300 overflow-hidden h-48">
              <browser-frame>
                <img
                  class="h-full w-full object-scale-down object-top"
                  src="/projects/tipsy.jpg"
                  alt=""
                />
              </browser-frame>
            </div>
            <div class="flex-1 bg-white p-6 flex flex-col justify-between">
              <div class="flex-1">
                <p class="text-sm leading-5 font-medium text-blue-600">
                  E-Commerce Platform
                </p>
                <div>
                  <h3
                    class="mt-2 text-xl leading-7 font-semibold text-gray-900"
                  >
                    Tipsy Elves
                  </h3>
                  <p class="mt-3 text-base leading-6 text-gray-500">
                    An e-commerce platform and mobile-optimized shopping
                    experience selling fun clothing &amp; outfits for every
                    holiday.
                  </p>
                </div>
              </div>
              <div class="mt-6 flex items-center">
                <a
                  href="https://www.tipsyelves.com/"
                  target="_blank"
                  class="text-sm text-gray-400 hover:underline"
                  >View Website</a
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Blockquote -->
    <section
      class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24"
      style="margin: 0 -14vw;"
    >
      <div class="relative max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <svg
          class="absolute top-full right-full transform translate-x-1/3 -translate-y-1/4 lg:translate-x-1/2 xl:-translate-y-1/2"
          width="404"
          height="404"
          fill="none"
          viewBox="0 0 404 404"
          role="img"
          aria-labelledby="svg-boost-capital"
        >
          <title id="svg-boost-capital">Boost Capital</title>
          <defs>
            <pattern
              id="ad119f34-7694-4c31-947f-5c9d249b21f3"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="404"
            fill="url(#ad119f34-7694-4c31-947f-5c9d249b21f3)"
          />
        </svg>

        <div class="relative">
          <div class="flex justify-center font-bold text-blue-700 text-xl">
            Boost Capital Private Limited
          </div>
          <blockquote class="mt-2 border-none">
            <div
              class="max-w-3xl mx-auto text-center text-2xl leading-9 font-medium text-gray-900"
            >
              <p>
                &ldquo;Joel is everything you would want in a developer. He has
                a great eye for design as well as a deep understanding of both
                backend and frontend architecture.&rdquo;
              </p>
            </div>
            <footer class="mt-8">
              <div class="md:flex md:items-center md:justify-center">
                <div class="md:flex-shrink-0">
                  <img
                    class="mx-auto h-10 w-10 rounded-full"
                    src="/pictures/art-longbottom.jpeg"
                    alt=""
                  />
                </div>
                <div
                  class="mt-3 text-center md:mt-0 md:ml-4 md:flex md:items-center"
                >
                  <div class="text-base leading-6 font-medium text-gray-900">
                    Arthur Longbottom
                  </div>

                  <svg
                    class="hidden md:block mx-1 h-5 w-5 text-blue-600"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M11 0h3L9 20H6l5-20z" />
                  </svg>

                  <div class="text-base leading-6 font-medium text-gray-500">
                    Chief Technology Officer
                  </div>
                </div>
              </div>
            </footer>
          </blockquote>
        </div>
      </div>
    </section>

    <!-- Tech Stack -->
    <section
      class="py-12 bg-gray-50 overflow-hidden md:py-20 lg:py-24"
      style="margin: 0 -14vw;"
    >
      <div class="relative max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <svg
          class="hidden lg:block absolute left-full transform -translate-x-1/2 -translate-y-1/4"
          width="404"
          height="400"
          fill="none"
          viewBox="0 0 101 400"
        >
          <defs>
            <pattern
              id="b1e6e422-73f8-40a6-b5d9-c8586e37e0e7"
              x="0"
              y="0"
              width="20"
              height="20"
              patternUnits="userSpaceOnUse"
            >
              <rect
                x="0"
                y="0"
                width="4"
                height="4"
                class="text-gray-200"
                fill="currentColor"
              />
            </pattern>
          </defs>
          <rect
            width="404"
            height="784"
            fill="url(#b1e6e422-73f8-40a6-b5d9-c8586e37e0e7)"
          />
        </svg>
        <div class="relative">
          <p
            class="text-center mb-16 text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10"
          >
            My Favorite Tools And Technology
          </p>
          <tech-stack />
        </div>
      </div>
    </section>

    <!-- Footer -->
    <!--
  Tailwind UI components require Tailwind CSS v1.8 and the @tailwindcss/ui plugin.
  Read the documentation to get started: https://tailwindui.com/documentation
-->
    <footer class="bg-white">
      <div
        class="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8"
      >
        <div class="flex justify-center space-x-6 md:order-2">
          <a
            href="https://twitter.com/JoelBrubaker"
            target="_blank"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">Twitter</span>
            <svg
              class="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
              />
            </svg>
          </a>
          <a
            href="https://github.com/thebrubaker"
            target="_blank"
            class="text-gray-400 hover:text-gray-500"
          >
            <span class="sr-only">GitHub</span>
            <svg
              class="h-6 w-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                fill-rule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clip-rule="evenodd"
              />
            </svg>
          </a>
        </div>
        <div class="mt-8 md:mt-0 md:order-1">
          <p class="text-center text-base leading-6 text-gray-400">
            &copy; 2020 Joel Brubaker. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {};
  },
  methods: {},
};
</script>

<style lang="scss"></style>
