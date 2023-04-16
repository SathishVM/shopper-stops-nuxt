<script lang="ts" setup>
const user = useStrapiUser()
const auth = useStrapiAuth()
const router = useRouter()

const [isMobileNavOpen, toggleMobileNav] = useToggle(false)

function logout() {
  auth.logout()
  reloadNuxtApp()
}
</script>

<template>
  <nav class="border-b-[1px] py-4 px-6">
    <div class="grid md:grid-cols-[1fr_2fr] gap-2">
      <div class="flex items-center justify-between">
        <NuxtLink to="/" class="nav-brand">Shopper Stops</NuxtLink>
        <button
          class="ring-black focus:ring-1 md:hidden"
          @click="toggleMobileNav()"
        >
          <Icon name="hamburger" size="26px" />
        </button>
      </div>

      <div class="md:!block" :class="{ hidden: !isMobileNavOpen }">
        <div class="grid md:gap-2 md:grid-cols-2">
          <div>
            <div
              class="space-y-2 md:space-y-0 md:gap-4 md:flex md:justify-center"
            >
              <NuxtLink to="/" class="nav-link">Home</NuxtLink>
              <HeadlessMenu as="div">
                <HeadlessMenuButton
                  class="flex items-center justify-between w-full gap-2 md:relative nav-link"
                >
                  <span>Products</span>
                  <span>
                    <Icon name="arrow-down" />
                  </span>
                </HeadlessMenuButton>
                <HeadlessMenuItems as="div" class="md:absolute nav-menu">
                  <HeadlessMenuItem as="div" v-slot="{ active }">
                    <NuxtLink
                      to="/products/men"
                      class="nav-link"
                      :class="{ 'text-primary': active }"
                    >
                      Men
                    </NuxtLink>
                  </HeadlessMenuItem>
                  <HeadlessMenuItem as="div" v-slot="{ active }">
                    <NuxtLink
                      to="/products/women"
                      class="nav-link"
                      :class="{ 'text-primary': active }"
                    >
                      Women
                    </NuxtLink>
                  </HeadlessMenuItem>
                  <HeadlessMenuItem as="div" v-slot="{ active }">
                    <NuxtLink
                      to="/products/men"
                      class="nav-link"
                      :class="{ 'text-primary': active }"
                    >
                      Kids
                    </NuxtLink>
                  </HeadlessMenuItem>
                </HeadlessMenuItems>
              </HeadlessMenu>
            </div>
          </div>
          <div class="space-y-2 md:space-y-0 md:gap-4 md:flex md:justify-end">
            <div
              v-if="!user"
              class="mt-2 space-y-2 md:mt-0 md:justify-center md:space-y-0 md:flex md:items-center md:gap-4"
            >
              <NuxtLink to="/login" class="flex items-center gap-2 nav-link">
                <Icon name="login" />
                <span class="text-inherit">Login</span>
              </NuxtLink>
              <NuxtLink to="/register" class="flex items-center gap-2 nav-link">
                <Icon name="register" />
                <span>Register</span>
              </NuxtLink>
            </div>

            <div
              v-if="user"
              class="mt-2 space-y-2 md:space-y-0 md:mt-0 md:flex md:items-center md:gap-5"
            >
              <HeadlessMenu as="div">
                <HeadlessMenuButton
                  class="flex justify-between w-full md:w-auto nav-link md:relative"
                >
                  <div class="flex items-center gap-2">
                    <Icon name="user" />
                    <span class="md:hidden">{{ user.email }}</span>
                  </div>
                  <span>
                    <Icon name="arrow-down" />
                  </span>
                </HeadlessMenuButton>
                <HeadlessMenuItems as="ul" class="md:absolute nav-menu">
                  <HeadlessMenuItem as="li" v-slot="{ active }">
                    <NuxtLink
                      to="/products/men"
                      class="nav-link"
                      :class="{ 'text-primary': active }"
                    >
                      Account
                    </NuxtLink>
                  </HeadlessMenuItem>
                  <HeadlessMenuItem as="li" v-slot="{ active }">
                    <NuxtLink
                      to="/products/women"
                      class="nav-link"
                      :class="{ 'text-primary': active }"
                    >
                      Orders
                    </NuxtLink>
                  </HeadlessMenuItem>
                  <HeadlessMenuItem as="li" v-slot="{ active }">
                    <NuxtLink
                      to="/products/men"
                      class="nav-link"
                      :class="{ 'text-primary': active }"
                    >
                      Shipping Address
                    </NuxtLink>
                  </HeadlessMenuItem>
                </HeadlessMenuItems>
              </HeadlessMenu>
              <NuxtLink
                to="/profile/wishlist"
                class="flex items-center gap-2 mt-2 nav-link"
              >
                <Icon name="heart" />
                <span class="md:hidden">Wishlist</span>
              </NuxtLink>
              <NuxtLink
                to="/cart"
                class="flex items-center gap-2 mt-2 nav-link"
              >
                <Icon name="cart" />
                <span class="md:hidden">Cart</span>
              </NuxtLink>
              <button
                class="flex items-center gap-1 mt-2 nav-link"
                @click="logout()"
              >
                <Icon name="logout" />
                <span>Logout</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<style lang="postcss" scoped>
.nav-menu {
  @apply border space-y-2 p-2 mt-1 bg-white;
}

.nav-brand {
  @apply text-xl font-semibold;
}

.nav-link {
  @apply text-base font-medium hover:text-primary focus:text-primary;
}
</style>
