declare function useEventListener<K extends keyof HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: HTMLElementEventMap[K]) => any, element?: HTMLElement): void;
declare function useEventListener(type: string, listener: EventListenerOrEventListenerObject, element?: HTMLElement): void;

export default useEventListener;
