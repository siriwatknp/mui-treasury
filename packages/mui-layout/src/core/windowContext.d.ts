import { Consumer, Context, Provider } from 'react';

export interface IWindowContext {
  iWindow?: Window;
  iBody?: HTMLBodyElement;
}

export declare const WindowProvider: Provider<IWindowContext>;

export declare const WindowConsumer: Consumer<IWindowContext>;

declare const WindowContext: Context<IWindowContext>;

export default WindowContext;
