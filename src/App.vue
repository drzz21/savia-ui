<script setup lang="ts">
import Button from './components/Button.vue';
</script>

<template>
	<Button
		label="Click me"
		variant="primary"
		size="small"
		type="default"
		@click="console.log('1')"
	/>
  <Button
		label="Click me"
		variant="secondary"
		size="small"
		type="default"
		@click="console.log('1')"
	/>
</template>

