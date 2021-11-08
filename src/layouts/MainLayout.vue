<template>
  <q-layout view="lHh Lpr lFf">
    <q-header>
      <q-toolbar-title class="text-center"> Orient </q-toolbar-title>
      <q-btn
        color="primary"
        icon="exit_to_app"
        unelevated
        size="sm"
        class="absolute-right"
        type="a"
        href="#/"
      />
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer class="bg-white text-grey-8 text-center">
      <q-separator inset />
      <div class="q-my-md">Ⓒ 2021 - Orient - Política e Privacidade</div>
    </q-footer>
  </q-layout>
</template>

<script>
export default {
  name: "MainLayout",
  data() {
    return {};
  },
};
</script>
