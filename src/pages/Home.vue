<template>
  <div class="home">
    <Navbar />
    <Alert />
  </div>
</template>

<script lang="ts">
import { Vue, Component } from "@/utils/vue-imports";
import Navbar from "@/components/bootstrap/Navbar.vue";
import Alert from "@/components/bootstrap/Alert.vue";

@Component({
  name: "Home",
  components: {
    Navbar,
    Alert,
  },
})
export default class Home extends Vue {}
</script>

<style scoped></style>
