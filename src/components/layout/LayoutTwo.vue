<template>
  <v-layout class="rounded rounded-md boreder">
    <v-navigation-drawer>
        <v-list nav>
            <v-list-item title="Navigation drawer" link></v-list-item>
        </v-list>
    </v-navigation-drawer>
    <v-app-bar title="Application bar"></v-app-bar>
    <v-main class="d-flex align-center justify-center" height="300">
        <v-container>
            <v-sheet border="dashed md" color="surface-light" width="100%" height="200" rounded="lg">

            </v-sheet>
        </v-container>
    </v-main>
  </v-layout>
</template>

<script>
export default {

}
</script>

<style>

</style>