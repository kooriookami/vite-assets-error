<template>
  <div>
    <el-button icon="el-icon-user">button</el-button>
    <HelloWorld></HelloWorld>
  </div>
</template>

<script>
import HelloWorld from "../components/HelloWorld";

export default {
  name: "Home",
  components: {
    HelloWorld,
  },
};
</script>
