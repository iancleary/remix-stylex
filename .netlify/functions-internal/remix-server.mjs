
    export { default } from "../../build/server/server.js";

    export const config = {
      name: "Remix server handler",
      generator: "@netlify/remix-adapter@2.5.1",
      path: "/*",
      preferStatic: true,
    };
    