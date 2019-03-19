import { Component, Vue } from 'vue-property-decorator';
import { convertNumericToText, convertTypeToHexColor } from '@/utils';

@Component
export class ConvertMixin extends Vue {
  protected numericToText(numeric: number): string {
    return convertNumericToText(numeric, 3);
  }

  protected typeToHexColor(type: string): string {
    return convertTypeToHexColor(type);
  }
}
