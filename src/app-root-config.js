import { registerApplication, start } from "single-spa";

registerApplication({
  name: "angular1",
  app: () => import("ngmfe1/MFEModule1"),
  activeWhen: ["#/angular1", () => ["#/", ""].includes(location.hash)],
});
registerApplication({
  name: "angular2",
  app: () => import("ngmfe2/MFEModule2"),
  activeWhen: "#/angular2",
});
registerApplication({
  name: "angular3",
  app: () => import("ngmfe3/MFEModule3"),
  activeWhen: "#/angular3",
});

start({
  urlRerouteOnly: true,
});
