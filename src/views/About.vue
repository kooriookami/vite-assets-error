<template>
  <div class="about">
    <el-checkbox-group>
      <el-checkbox label="复选框 A"></el-checkbox>
      <el-checkbox label="复选框 B"></el-checkbox>
      <el-checkbox label="复选框 C"></el-checkbox>
      <el-checkbox label="禁用" disabled></el-checkbox>
      <el-checkbox label="选中且禁用" disabled></el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
export default {
  data() {
    return {
      checkList: [],
    };
  },
  methods: {
    reset() {
      this.$refs.form.resetFields();
    },
  },
};
</script>
