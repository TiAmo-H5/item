<template>
  <!-- <div class="app-container">
    <el-card>
    </el-card>

  </div> -->
  <Admin />

</template>

<script>
import { mapGetters } from 'vuex'
import Admin from './admin/index'

export default {
  name: 'Dashboard',
  components: {
    Admin
  },
  data() {
    return {
      currentRole: 'adminDashboard'
    }
  },
  computed: {
    ...mapGetters([
      'roles'
    ])
  },
  created() {
    if (!this.roles.includes('admin')) {
      this.currentRole = 'editorDashboard'
    }
  }

}
</script>
<style lang="scss" scoped>
</style>
