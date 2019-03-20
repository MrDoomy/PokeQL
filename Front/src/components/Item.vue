<template>
  <div :class="`list-item ${handleClick ? 'clickable' : ''}`" @click="handleClick && handleClick()">
    <div class="list-icon">
      <div class="circle-icon">
        <div class="half left" :style="{ backgroundColor: leftColor }"></div>
        <div class="half right" :style="{ backgroundColor: rightColor }"></div>
        <img v-if="imgSrc && subTitle" :src="imgSrc" :alt="subTitle" />
        <i v-if="faIcon" :class="`fa fa-${faIcon}`" />
      </div>
    </div>
    <div class="list-content">
      <div class="list-item-title">{{ title }}</div>
      <div class="list-item-sub-title">{{ subTitle }}</div>
    </div>
    <slot />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class Card extends Vue {
  @Prop() private title?: string;
  @Prop() private subTitle?: string;
  @Prop() private handleClick?: void;
  @Prop() private imgSrc?: string;
  @Prop() private faIcon?: string;
  @Prop() private leftColor?: string;
  @Prop() private rightColor?: string;
}
</script>
