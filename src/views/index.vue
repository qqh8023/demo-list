<template>
	<div id="index">
		<ul>
			<li v-for="item in navList" @click="route(item)">{{item.name}}</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
export default {
  name: 'index',
  data () {
    return {
      navList: [ { name: '首页', path: '/one' }, { name: '订单', path: '/two' }, { name: '其他', path: '/three' } ]
    }
  },
  methods: {
    route (item) {
      this.$router.push(item.path)
    }
  }
}
</script>
<style lang="scss">
#index {
	ul {
		width: 600px;
		display: flex;
		align-content: space-between;
		li {
			width: 200px;
			float: left;
			list-style: none;
			cursor: pointer;
		}
	}
}
</style>
