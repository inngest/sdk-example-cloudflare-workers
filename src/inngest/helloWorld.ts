import { createFunction } from "inngest";

export default createFunction("Hello World", "demo/event.sent", () => {
  return "Hello!";
});
