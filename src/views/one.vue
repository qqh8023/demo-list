<template>
  <div id="one">
    <div v-for="item in details">
      <p>
        <span>订单编号：{{item.num}}</span>
        <span>{{item.peopleName}}</span>
      </p>
      <div class="content">
        <p>my darling：{{item.darling}}</p>
        <p>myDarlingAge：{{item.age}}</p>
        <p>myDarlingHeight：{{item.height}}</p>
        <p>myDarlingLover：{{item.lover}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'one',
  data () {
    return {
      details: [
        {num: 5201314, peopleName: '隔壁老王', darling: '王先生', age: '22', height: '174', lover: '秦女士'},
        {num: 5201314, peopleName: '隔壁老王', darling: '王先生', age: '22', height: '174', lover: '秦女士'}
      ]
    }
  }
}
</script>
<style></style>