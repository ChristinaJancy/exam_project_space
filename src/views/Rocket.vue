<template>
    <Rockettree></Rockettree>

</template>


<script>
import Rockettree from "../components/Rockettree";

export default {
  name: "App",
  components: {
      Rockettree,
  },
  props: {
    source: String
  }
}

</script>