import { getRequestEvent, isServer } from "solid-js/web";
import { styled as originalStyled } from "solid-styled-components";

export interface RequestStyleSheet {
    data: string;
    assetsRegistered?: boolean;
}

interface StyleLocals {
    styledSheet?: RequestStyleSheet;
}

export function getRequestStyleSheet(): RequestStyleSheet {
    const event = getRequestEvent();
    if (!event)
        throw new Error("Server styles require an active request context.");
    const locals = event.locals as StyleLocals;
    return (locals.styledSheet ??= { data: "" });
}

// Module-scope declarations capture this getter, never one request's target.
const requestContext = {
    get target() {
        return getRequestStyleSheet();
    },
};

export const styled: typeof originalStyled = isServer
    ? new Proxy(originalStyled, {
          apply(target, _thisArg, args) {
              return Reflect.apply(target, requestContext, args);
          },
          get(target, element) {
              // The original Proxy treats .call/.apply/.bind as tag names too.
              return Reflect.apply(target, requestContext, [element]);
          },
      })
    : originalStyled;
