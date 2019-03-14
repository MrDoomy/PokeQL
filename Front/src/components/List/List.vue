<template>
  <Card>
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
    <ApolloQuery :query="require('@/graphql/pokedex.gql')" :variables="vars">
      <template slot-scope="{ result: { data, error, loading } }">
        <p v-if="loading">Loading PokéDex...</p>
        <p v-else-if="error">PokéDex Error !</p>
        <template v-else-if="data">
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
        </template>
      </template>
    </ApolloQuery>
  </Card>
</template>

<script lang="ts">
import orderBy from 'lodash/orderBy';
import { Component, Mixins } from 'vue-property-decorator';
import * as Types from '@/constants';
import { ConvertMixin } from '@/mixins';
import { capitalize, isDevEnv } from '@/utils';
import Card from '../Card.vue';
import Field from '../Field.vue';
import Item from '../Item.vue';

interface Pkmn {
  nationalId: number;
  name: string;
  shiny: boolean;
  types: string[];
}

@Component({
  components: {
    Card,
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
      const { nationalId, name, shiny, types } = pkmn;

      // Filter By National ID
      if (this.search.charAt(0) === '#') {
        return `${this.numericToText(nationalId)}`.includes(this.search.substring(1, this.search.length));
      }

      // Filter By Shiny
      if (this.search.toUpperCase() === 'SHINY') {
        return shiny;
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
