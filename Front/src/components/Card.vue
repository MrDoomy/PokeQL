<template>
  <div class="card">
    <div class="card-title">{{ getTitle }}</div>
    <div class="list">
      <slot />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop() private title?: string;

  get getTitle() {
    return this.title || 'PokéDex';
  }
}
</script>
