<script setup>
const error = useError()

function handleError() {
  clearError({ redirect: '/' })
}
</script>

<template>
  <div class="font-jost">
    <AppNavbar />
    <div class="py-10 my-10 md:my-16 md:py-16">
      <div class="container px-4 mx-auto">
        <div class="text-center">
          <!-- Icon -->
          <div class="mb-6 text-6xl">🙁</div>

          <!-- Heading -->
          <div class="mb-6 font-medium">
            <h2 v-if="error.statusCode === 404">404. Page not found.</h2>
            <h2 v-else>{{ error.statusCode }} {{ error.message }}</h2>
          </div>

          <!-- Text -->
          <p class="mb-6 text-gray-600">
            Sorry, we couldn't find the page you where looking for. We suggest
            that you return to home page.
          </p>

          <SButton @click="handleError"> Go to Homepage </SButton>
        </div>
      </div>
    </div>
    <AppFooter />
  </div>
</template>
