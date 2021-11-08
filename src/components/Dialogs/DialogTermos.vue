<template>
  <q-dialog v-model="propModel">
    <q-card>
      <q-card-section>
        <div class="text-h6">Termos e condições de uso</div>
      </q-card-section>

      <q-card-section class="q-pt-none">
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut aliquam purus, iaculis tristique ipsum. Suspendisse mollis, nisi sed facilisis tempus, ex eros luctus orci, a fermentum erat tortor non ligula. Donec sit amet dolor mi. Suspendisse eu justo sed nisi condimentum suscipit vel ullamcorper ipsum. Phasellus commodo fermentum pulvinar. Phasellus maximus feugiat nisl vel laoreet. Donec quis ex nec magna mattis molestie. Duis suscipit et ante eu facilisis.
        </p>
      </q-card-section>

      <q-card-actions align="right">
        <q-btn
          label="Aceitar"
          color="primary"
          v-close-popup
          @click="$emit('click', true)"
        />
        <q-btn
          flat
          label="Recusar"
          color="primary"
          v-close-popup
          @click="$emit('click', false)"
        />
      </q-card-actions>
    </q-card>
  </q-dialog>
</template>

<script>
export default {
  name: "DialogTermos",
  props: {
    value: Boolean,
  },
  data() {
    return {
      accepted: true
    }
  },
  computed: {
    propModel: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("input", value);
      },
    },
  }
};
</script>
