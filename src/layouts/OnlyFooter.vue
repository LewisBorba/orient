<template>
  <q-layout view="hHh lpR fff">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer class="bg-white text-grey-8 text-center">
      <q-separator inset />
      <div class="q-my-md">
        Ⓒ 2021 - Orient - Política e Privacidade
      </div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {}
  }
}
</script>
