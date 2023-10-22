import { afterUpdate } from "svelte";

export function autoscroll(node) {
  afterUpdate(() => {
    if (node.scrollHeight > node.clientHeight) {
      node.scrollTo(0, node.scrollHeight - node.clientHeight);
    }
  });
}
export default autoscroll;
