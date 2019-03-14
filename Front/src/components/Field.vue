<template>
  <div class="group">
    <input :type="getType" :min="min" :step="step" :value="value" required @input="handleChange($event)" />
    <span class="highlight" />
    <span class="bar" />
    <label>{{ label }}</label>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop() private label!: string;
  @Prop() private type?: string;
  @Prop() private min?: number;
  @Prop() private step?: number;
  @Prop() private value?: string | number;
  @Prop() private handleChange!: void;

  get getType() {
    return this.type || 'text';
  }
}
</script>
