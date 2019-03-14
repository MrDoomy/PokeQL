<template>
  <ApolloMutation
    :mutation="require('@/graphql/deletePokemon.gql')"
    :variables="{
      nationalId
    }"
    @done="goBack()">
    <template slot-scope="{ mutate }">
      <Item
        title="Supprimer"
        subTitle="Valider & Retour"
        :handleClick="mutate"
        faIcon="trash-alt"
        leftColor="#fd2e76"
        rightColor="#fd2e76">
        <div class="clearfix">
          <i class="fa fa-angle-left" />
        </div>
      </Item>
    </template>
  </ApolloMutation>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import Item from '../Item.vue';

@Component({
  components: {
    Item,
  },
})
export default class Remove extends Vue {
  @Prop() private nationalId!: number;

  private goBack() {
    this.$router.push('/');
  }
}
</script>
