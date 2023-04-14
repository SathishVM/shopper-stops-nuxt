<script setup lang="ts">
const copyrightYear = new Date().getFullYear()

const footerLinks = [
  {
    title: 'Support',
    links: [
      { name: 'Contact Us', to: '/contact-us' },
      { name: 'FAQs', to: '/faq' },
      { name: 'Shipping & Returns', to: '/shipping-and-returns' },
    ],
  },
  {
    title: 'Shop',
    links: [
      { name: "Men's Shopping", to: '/products?category=mens' },
      { name: "Women's Shopping", to: '/products?category=womens' },
      { name: "Kid's Shopping", to: '/products?category=kids' },
      { name: 'Discounts', to: '/products?sortBy=discounts' },
    ],
  },
  {
    title: 'Company',
    links: [
      { name: 'Our Story', to: '/our-story' },
      { name: 'Careers', to: '/careers' },
      { name: 'Terms & Conditions', to: '/terms-conditions' },
      { name: 'Privacy & Cookie policy', to: '/privacy-policy' },
    ],
  },
  {
    title: 'Contact',
    links: [
      { name: '📞 +919876543210', to: '#' },
      { name: '📧 help@shopperstops.com', to: '#' },
    ],
  },
]
</script>

<template>
  <!-- Footer -->
  <footer class="bg-dark" style="background-image: url(/img/patterns.svg)">
    <div class="px-5 py-12">
      <!-- Footer-Container -->
      <div class="container mx-auto">
        <h1 class="mb-5 text-center text-white md:mb-12">Shopper Stops</h1>
        <!-- Footer-Links -->
        <div class="grid gap-x-3 gap-y-3 sm:grid-cols-2 md:grid-cols-4">
          <div
            class="text-center md:text-left"
            v-for="(data, idx) in footerLinks"
            :key="idx"
          >
            <!-- Heading -->
            <h6 class="my-4 font-medium text-white sm:mt-0 sm:mb-6">
              {{ data.title }}
            </h6>
            <!-- Links -->
            <ul class="flex flex-col space-y-1">
              <li v-for="item in data.links" :key="item.name">
                <a :href="item.to" class="text-gray-400 hover:text-secondary">
                  {{ item.name }}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Copyright 😅 -->
        <div class="text-center mt-10">
          <h6 class="bg-slate-50 inline-block p-1">
            &copy; {{ copyrightYear }} All rights reserved. ♥
            <a
              class="underline"
              href="https://twitter.com/theRainSparrow"
              target="_blank"
            >
              Designed & Developed by Sathish</a
            >
          </h6>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped></style>
