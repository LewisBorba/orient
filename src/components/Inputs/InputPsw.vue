<template>
  <q-input
    :rules="regra"
    lazy-rules
    :value="value"
    @input="value => $emit('input', value)"
    outlined
    :type="isPwd ? 'password' : 'text'"
    :label="label"
    class="q-mb-sm"
    ref="input"
  >
    <template v-slot:append>
      <q-icon
        :name="isPwd ? 'visibility_off' : 'visibility'"
        class="cursor-pointer"
        @click="isPwd = !isPwd"
      />
    </template>
  </q-input>
</template>

<script>
export default {
  name: 'InputPsw',
  props: {
    value: [String, null],
    label: String,
    regra: Array
  },
  data() {
    return {
      isPwd: true
    }
  },
  methods: {
    validate(...args) {
      return this.$refs.input.validate(...args)
    }
  }
}
</script>
