<template>
  <Card title="Nouveau">
    <ApolloMutation
      :mutation="require('@/graphql/createPokemon.gql')"
      :variables="{ 
        nationalId: parseInt(nationalId),
        name,
        label,
        region,
        types: [type],
        weight: parseFloat(weight),
        size: parseFloat(size)
      }"
      @done="goBack()">
      <template slot-scope="{ mutate }">
        <Item
          title="Retour"
          subTitle="Voir Le Pokédex"
          :handleClick="goBack"
          faIcon="list-ul">
          <div class="clearfix">
            <i class="fa fa-angle-left" />
          </div>
        </Item>
        <h4>Informations</h4>
        <div class="container">
          <form>
            <Field
              label="N°"
              type="number"
              :min="0"
              :value="nationalId"
              :handleChange="handleChange('nationalId')" />
            <Field label="Nom" :value="name" :handleChange="handleChange('name')" />
            <Field label="Libellé" :value="label" :handleChange="handleChange('label')" />
            <Field label="Région" :value="region" :handleChange="handleChange('region')" />
            <Field label="Type" :value="type" :handleChange="handleChange('type')" />
            <Field
              label="Poids"
              type="number"
              :min="0"
              :step="0.1"
              :value="weight"
              :handleChange="handleChange('weight')" />
            <Field
              label="Taille"
              type="number"
              :min="0"
              :step="0.1"
              :value="size"
              :handleChange="handleChange('size')" />
          </form>
        </div>
        <Item
          title="Ajouter"
          subTitle="Valider & Terminer"
          :handleClick="mutate"
          faIcon="check"
          leftColor="#ef5350"
          rightColor="#ef5350">
          <div class="clearfix">
            <i class="fa fa-angle-left" />
          </div>
        </Item>
      </template>
    </ApolloMutation>
  </Card>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import Card from '../Card.vue';
import Field from '../Field.vue';
import Item from '../Item.vue';

@Component({
  components: {
    Card,
    Field,
    Item,
  },
})
export default class Form extends Vue {
  private nationalId: number = 0;
  private name: string = '';
  private label: string = '';
  private region: string = '';
  private type: string = '';
  private weight: number = 0;
  private size: number = 0;

  private goBack() {
    this.$router.push('/');
  }

  private handleChange(key: string) {
    return (event: Event) => {
      (this as any)[key] = (event.target as HTMLInputElement).value;
    };
  }
}
</script>
