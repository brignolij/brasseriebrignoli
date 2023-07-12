
<script>
// Initialization for ES Users
import {
  Collapse,
  Ripple,
  initTE,
} from "tw-elements";

initTE({ Collapse, Ripple });
</script>

<template>
  <!-- Navbar -->
  <nav
    class="sticky top-0 z-10 flex w-full items-center justify-between  bg-neutral text-white  md:flex-wrap md:justify-start"
    data-te-navbar-ref>
    <div class="px-6">
      <!-- Hamburger menu button -->
      <button
        class="border-0 bg-transparent px-2 py-3 text-xl leading-none transition-shadow duration-150 ease-in-out hover:text-yellowbeer focus:text-yellowbeer dark:hover:text-white dark:focus:text-white md:hidden"
        type="button"
        data-te-collapse-init
        data-te-target="#navbarSupportedContentE"
        aria-controls="navbarSupportedContentE"
        aria-expanded="false"
        aria-label="Toggle navigation">
        <!-- Hamburger menu icon -->
        <span class="[&>svg]:w-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="h-6 w-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </span>
      </button>

      <!-- Navigation links -->
      <div
        class="!visible hidden grow basis-[100%] items-center md:!flex md:basis-auto"
        id="navbarSupportedContentE"
        data-te-collapse-item>
        <ul
          class="mr-auto flex flex-col md:flex-row"
          data-te-navbar-nav-ref>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-yellowbeer focus:text-yellowbeer dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Home</a
            >
          </li>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-yellowbeer focus:text-yellowbeer dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Features</a
            >
          </li>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-yellowbeer focus:text-yellowbeer dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary"
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >Pricing</a
            >
          </li>
          <li data-te-nav-item-ref>
            <a
              class="block transition duration-150 ease-in-out hover:text-yellowbeer focus:text-yellowbeer dark:hover:text-white dark:focus:text-white md:p-2 [&.active]:border-primary [&.active]:text-primary "
              href="#!"
              data-te-nav-link-ref
              data-te-ripple-init
              data-te-ripple-color="light"
              >About</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>


</template>

