import { SIMPLE_ACTION_NAME, STARTUP } from './action-types';

interface Payload {
  somePayload: string;
}
export function blancAction(payload: Payload) {
  return {
    type: SIMPLE_ACTION_NAME,
    payload,
  };
}

export function startUp(payload: Payload) {
  return {
    type: STARTUP,
    payload,
  };
}
