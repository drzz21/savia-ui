<script setup lang="ts">
import BasicPattern from '../patterns/fileupload/BasicPattern.vue';
import MultiplePattern from '../patterns/fileupload/MultiplePattern.vue';
import AcceptPattern from '../patterns/fileupload/AcceptPattern.vue';
import DisabledPattern from '../patterns/fileupload/DisabledPattern.vue';
</script>

<template>
  <div class="space-y-16">
    <h2 class="font-display text-3xl font-extrabold tracking-tight text-mist">File Upload</h2>

    <div id="basic"><BasicPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="multiple"><MultiplePattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="accept"><AcceptPattern /></div>
    <hr class="border-leaf-muted/30 my-4" />
    <div id="disabled"><DisabledPattern /></div>
  </div>
</template>
