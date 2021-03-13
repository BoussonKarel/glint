import * as glimmerxComponent from '@glimmerx/component';

export * from '@glimmerx/component';

import type { ContextType, Invoke } from '@glint/template/-private';
import type { TemplateContext, AcceptsBlocks } from '@glint/template/-private';
import type { EmptyObject } from '@glint/template/-private/signature';

type Get<T, Key, Otherwise = EmptyObject> = Key extends keyof T
  ? Exclude<T[Key], undefined>
  : Otherwise;

export interface ComponentSignature {
  Args?: Partial<Record<string, unknown>>;
  Yields?: Partial<Record<string, Array<unknown>>>;
}

const Component = glimmerxComponent.default as new <
  T extends ComponentSignature = {}
>() => Component<T>;
interface Component<T extends ComponentSignature = {}>
  extends glimmerxComponent.default<Get<T, 'Args'> & {}> {
  [Invoke]: (args: Get<T, 'Args'>) => AcceptsBlocks<Get<T, 'Yields'>>;
  [ContextType]: TemplateContext<this, Get<T, 'Args'>, Get<T, 'Yields'>>;
}

export default Component;