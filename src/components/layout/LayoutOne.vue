<template>
<v-layout class="rounded rounded-md border">
  <v-app-bar title="어플리케이션 바"></v-app-bar>

  <v-navigation-drawer>
    <v-list nav>
      <v-list-item title="Navigation drawer" link></v-list-item>
    </v-list>
  </v-navigation-drawer>

  <v-main class="d-flex align-center justify-center" height="300">
    <v-container>
      <v-sheet border="dashed md" color="surface-light" width="100%" height="200" rounded="lg">
      </v-sheet>
    </v-container>
  </v-main>
</v-layout>
</template>

<script setup lang="ts">
  //s
</script>
