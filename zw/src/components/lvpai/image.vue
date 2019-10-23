
<template>    
<div class="demo-image__lazy">
  <el-image v-for="url in urls" :key="url" :src="url" lazy></el-image>
</div>
</template>
<script>
  export default {
    data() {
      return {
        urls: [
          'http://cdn.img.121314.com//statics/files/10/20190919/de25b3cebbe5b4c9c6073819042cfa5e-600952.jpg',
          'http://cdn.img.121314.com//statics/files/10/20190905/615d0a18b17606beda70c251303810c2-610954.jpg',
           'http://cdn.img.121314.com//statics/files/10/20191018/56f0ae7d9d1d47c34f0bd23cf06ccf0a-628374.jpg',
           'http://cdn.img.121314.com//statics/files/10/20190922/69b178ff415dd0a3b338c92d370777af-519742.jpg',
        
        ]
      }
    }
  }
</script>