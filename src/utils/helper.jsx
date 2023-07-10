import { AppRoutes } from "./constants";

export const getApp = () => {
  const domain = window.location.hostname;
  const subDomain = getSubdomain(domain);
  console.log("Subdomain", subDomain);
  const defaultApp = AppRoutes.find((app) => app.default);
  if (!defaultApp) throw new Error("Required Main Router");

  if (subDomain === "") return defaultApp.router;

  const app = AppRoutes.find((app) => app.subdomain === subDomain);
  if (!app) {
    // if (!app) throw new Error("No App Detected");
    const { router } = AppRoutes.find((app) => app.subdomain === "fallback");
    return router;
  }
  return app.router;
};

const getSubdomain = (domain) => {
  const domSplit = domain.split(".");
  let sliceTill = -2;
  var isLocalHost = domSplit.slice(-1)[0] === "localhost";
  if (isLocalHost) sliceTill = -1;
  return domSplit.slice(0, sliceTill).join("");
};
