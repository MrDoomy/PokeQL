<template>
  <ApolloQuery :query="require('@/graphql/pokemon.gql')" :variables="{ nationalId: parseInt($route.params.nationalId) }">
    <template slot-scope="{ result: { data, error, loading } }">
      <p v-if="loading">Loading...</p>
      <Failed v-if="error" title="#000" />
      <Card v-if="data" :title="`#${numericToText(data.pokemon.nationalId)}`">
        <Item
          :title="data.pokemon.name"
          :subTitle="data.pokemon.label"
          :handleClick="goBack"
          :imgSrc="spritePath(data.pokemon)">
          <div class="clearfix">
            <i class="fa fa-angle-left" />
          </div>
        </Item>
        <h4>Informations</h4>
        <Item
          title="Région"
          :subTitle="data.pokemon.region"
          faIcon="globe-europe" />
        <Item
          :title="`Type${data.pokemon.types.length > 1 ? 's' : ''}`"
          :subTitle="`${data.pokemon.types.join(' / ')}`"
          faIcon="certificate"
          :leftColor="typeToHexColor(data.pokemon.types[0])"
          :rightColor="data.pokemon.types.length > 1
            ? typeToHexColor(data.pokemon.types[1])
            : typeToHexColor(data.pokemon.types[0])" />
        <Item
          title="Poids"
          :subTitle="`${data.pokemon.weight} kg`"
          faIcon="weight" />
        <Item
          title="Taille"
          :subTitle="`${data.pokemon.size} m`"
          faIcon="ruler-vertical" />
        <h4 v-if="data.pokemon.parents.length > 0">Evolution{{ data.pokemon.parents.length > 1 ? 's' : '' }}</h4>
        <Item
          v-for="pkmn in data.pokemon.parents"
          :key="pkmn.nationalId"
          :title="`#${numericToText(pkmn.nationalId)}`"
          :subTitle="pkmn.name"
          :handleClick="() => goToPokemon(pkmn.nationalId)"
          :imgSrc="`/sprites/${numericToText(pkmn.nationalId)}.png`">
          <div class="clearfix">
            <i class="fa fa-angle-right" />
          </div>
        </Item>
        <Remove v-if="devEnv" :nationalId="data.pokemon.nationalId" />
      </Card>
    </template>
  </ApolloQuery>
</template>

<script lang="ts">
import { Component, Mixins } from 'vue-property-decorator';
import { ConvertMixin } from '@/mixins';
import { isDevEnv } from '@/utils';
import Card from '../Card.vue';
import Failed from '../Failed.vue';
import Item from '../Item.vue';
import Remove from './Remove.vue';

interface Pkmn {
  nationalId: number;
  shiny: boolean;
}

@Component({
  components: {
    Card,
    Failed,
    Item,
    Remove,
  },
})
export default class Detail extends Mixins(ConvertMixin) {
  get devEnv() {
    return isDevEnv();
  }

  private goTo(pathName: string) {
    this.$router.push(pathName);
  }

  private goBack() {
    this.goTo('/');
  }

  private goToPokemon(nationalId: number) {
    this.goTo(`/pokemon/${nationalId}`);
  }

  private spritePath(pkmn: Pkmn): string {
    const { nationalId, shiny } = pkmn;

    const path = `/sprites/${this.numericToText(nationalId)}`;

    return shiny ? `${path}_shiny.png` : `${path}.png`;
  }
}
</script>
