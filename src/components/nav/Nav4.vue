<template>
  <v-card class="mx-auto" max-width="430">
    <v-layout>
        <v-app-bar color="pink" density="prominent">
            <template v-slot:prepend>
                <v-app-bar-nav-icon/>
                <v-app-bar-title>Catch! Teenieping</v-app-bar-title>
                <template v:slot:append>
                    <v-btn icon><v-icon>mdi-dots-vertical</v-icon></v-btn>
                </template>
            </template>
        </v-app-bar>

        <v-main>
            <v-container fluid>
                <v-card
                class="mb-2"
                density="compact"
                prepend-avatar="https://randomuser.me/api/portraits/women/10.jpg"
                subtitle="내 목숨을 가져가도 좋아 어쩌구"
                title="오늘 내 세상이 무너졌어"
                variant="text"
                border
                >
                    <v-img height="128" src="https://picsum.photos/512/128?images=660" cover/>
                    <v-card-text>고백받았는데 내가 거절했어<br>
                    한순간에 남같이 돌변하더라 어쩌구<br>
                    너무너무 그리워 내 목숨을 가져가도 좋아<br>
                    제발 연락해줘 어쩌구<br></v-card-text>
                    <template v-slot:actions>
                        <v-btn color="pink" variant="text">View More</v-btn>
                        <v-btn color="pink" variant="text">See un Map</v-btn>
                    </template>
                </v-card>
            </v-container>
        </v-main>
    </v-layout>
  </v-card>
</template>

<script>
export default {

}
</script>

<style>

</style>