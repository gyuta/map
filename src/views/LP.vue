<template>
  <div>
    <div class="button" @click='create'>マップを作成</div>
  </div>
</template>

<script>
export default {
  name: 'LP',
  methods: {
    create() {
      // this.$firebase.firestore()
      //   .collection('map') .....
      //  みたいな感じでmapコレクション配下にドキュメントを作成して
      // this.$router.push({name: 'map', params: {id: hogehoge}})
      // みたいな感じでmapページに作成したドキュメントのidを渡す

      // もしくは適当なライブラリを使って一意なidを生成してもよいかも　(uuidなど)
    }
  }
}
</script>

<style>

</style>