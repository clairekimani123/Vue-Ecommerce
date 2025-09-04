<script setup >
import Logo from '@/components/Logo.vue';
import AuthLogin from '@/components/Auth/AuthLogin.vue';
import AuthFooter from '@/components/Auth/AuthFooter.vue';


</script>

<template>
  <v-row class="bg-containerBg position-relative" no-gutters>
    <v-col cols="12">
      <div class="pt-6 pl-6">
        <Logo />
      </div>
    </v-col>
    <v-col cols="12" class="d-flex align-center">
      <v-container>
        <div class="d-flex align-center justify-center" style="min-height: calc(100vh - 148px)">
          <v-card class="loginBox" elevation="24">
            <v-card-text>
              <AuthLogin />
            </v-card-text>
          </v-card>
        </div>
      </v-container>
    </v-col>
    <v-col cols="12">
      <v-container class="pt-0 pb-6">
        <!-- <AuthFooter /> -->
      </v-container>
    </v-col>
  </v-row>
</template>

<style scoped>
.loginBox {
  max-width: 475px;
  margin: 0 auto;
}
</style>
