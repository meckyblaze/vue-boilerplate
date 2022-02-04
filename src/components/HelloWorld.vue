<template>
  <v-container>
    <v-row class="text-center">
      <v-col cols="12">
        <v-img
          :src="require('../assets/logo.svg')"
          class="my-3"
          contain
          height="200"
        />
      </v-col>
    </v-row>
    <v-row class="text-center">
      <v-col>
        {{ msg }}
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  props: {
    msg: {
      type: String,
      default: "",
    },
  },
  name: "HelloWorld",

  data() {
    return {};
  },
};
</script>
