import Component from '@glimmer/component';
import { and } from 'ember-truth-helpers';

export interface GreetingSignature {
  Args: { target: string };
}

function takesTwoNumbers(_a: number, _b:number) {
  return 1
}

export default class Greeting extends Component<GreetingSignature> {
  private message = 'Hello';

  get x():number|undefined {
    return 1
  }

  get y():number|undefined {
    return 1
  }

  <template>
    {{#if (and this.x this.y)}}
      {{this.x}}
      {{this.y}}
      {{takesTwoNumbers this.x this.y}}
    {{/if}}
  </template>
}
