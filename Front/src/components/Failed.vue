<template>
  <Card :title="title">
    <Item
      title="Erreur"
      subTitle="La connexion a échouée"
      faIcon="exclamation"
      :handleClick="reload" />
    <slot />
  </Card>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Card from './Card.vue';
import Item from './Item.vue';

@Component({
  components: {
    Card,
    Item,
  },
})
export default class Failed extends Vue {
  @Prop() private title?: string;

  private reload() {
    document.location.reload(true);
  }
}
</script>
