<script setup>
import { ref, onMounted } from 'vue';
import axios from 'axios';

const payload = ref("")

onMounted(async() => {
  let urlParams = new URLSearchParams(window.location.search)

  if(urlParams.has("token")){
    const tokenParam = urlParams.get("token");
    let result = await axios.post("https://dummyibe-api.forecepts.net/api/Certificate/GetResultPayload", JSON.parse(JSON.stringify({ token: tokenParam })));
    payload.value = `${JSON.stringify(result.data,null,'\t')}`;
  }
})

</script>

<template>
  <main>
    <div>{{payload}}</div>
  </main>
</template>
