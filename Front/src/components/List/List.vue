<template>
  <ApolloQuery :query="require('@/graphql/pokedex.gql')" :variables="vars" fetchPolicy="cache-and-network">
    <template slot-scope="{ result: { data, error, loading } }">
      <p v-if="loading">Loading...</p>
      <Failed v-else-if="error" />
      <Card v-else-if="data">
        <div v-if="!devEnv" class="container">
          <Field label="Recherche" :value="search" :handleChange="handleSearch" />
        </div>
        <Item
          v-if="devEnv"
          title="Nouveau"
          subTitle="Ajouter Un Pokémon"
          :handleClick="goToNew"
          faIcon="plus"
          leftColor="#fd2e76"
          rightColor="#fd2e76">
          <div class="clearfix">
            <i class="fa fa-angle-right" />
          </div>
        </Item>
        <h4>
          <strong>{{ orderList(data.pokedex).length }}</strong> Pokémon Référencé{{ orderList(data.pokedex).length > 1 ? 's' : '' }}
        </h4>
        <Item
          v-for="pkmn in orderList(data.pokedex)"
          :key="pkmn.nationalId"
          :title="`#${numericToText(pkmn.nationalId)} ${pkmn.name}`"
          :subTitle="pkmn.label"
          :handleClick="() => goToPokemon(pkmn.nationalId)"
          :imgSrc="`/sprites/${numericToText(pkmn.nationalId)}.png`">
          <div class="clearfix">
            <i class="fa fa-angle-right" />
          </div>
        </Item>
      </Card>
    </template>
  </ApolloQuery>
</template>

<script lang="ts">
import orderBy from 'lodash/orderBy';
import { Component, Mixins } from 'vue-property-decorator';
import * as Regions from '@/constants/regions';
import * as Types from '@/constants/types';
import { ConvertMixin } from '@/mixins';
import { capitalize, isDevEnv } from '@/utils';
import Card from '../Card.vue';
import Failed from '../Failed.vue';
import Field from '../Field.vue';
import Item from '../Item.vue';

interface Pkmn {
  nationalId: number;
  name: string;
  shiny: boolean;
  region: string;
  types: string[];
}

@Component({
  components: {
    Card,
    Failed,
    Field,
    Item,
  },
})
export default class List extends Mixins(ConvertMixin) {
  private search: string = '';

  private mounted() {
    this.search = sessionStorage.getItem('search') || '';
  }

  get vars() {
    const { region } = this.$route.params;
    return region ? { region: capitalize(region) } : {};
  }

  get devEnv() {
    return isDevEnv();
  }

  private handleSearch(event: Event) {
    this.search = (event.target as HTMLInputElement).value;
    sessionStorage.setItem('search', this.search);
  }

  private goTo(pathName: string) {
    this.$router.push(pathName);
  }

  private goToPokemon(nationalId: number) {
    this.goTo(`/pokemon/${nationalId}`);
  }

  private goToNew() {
    this.goTo('/new');
  }

  private orderList(list: Pkmn[]): Pkmn[] {
    return orderBy(list, 'nationalId').filter((pkmn: Pkmn) => {
      const { nationalId, name, shiny, region, types } = pkmn;

      // Filter By National ID
      if (this.search.charAt(0) === '#') {
        return `${this.numericToText(nationalId)}`.includes(this.search.substring(1, this.search.length));
      }

      // Filter By Shiny
      if (this.search.toUpperCase() === 'SHINY') {
        return shiny;
      }

      // Filter By Region
      if (Object.values(Regions).includes(this.search)) {
        return region === this.search;
      }

      // Filter By Types
      if (Object.values(Types).includes(this.search)) {
        return types.includes(this.search);
      }

      // Filter By Name
      return name.toLowerCase().includes(this.search.toLowerCase());
    });
  }
}
</script>
