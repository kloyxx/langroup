const defaultSiteUrl = "https://kloyxx.github.io/langroup/";

export const siteUrl = new URL(process.env.NEXT_PUBLIC_SITE_URL || defaultSiteUrl);
export const basePath = siteUrl.pathname.replace(/\/+$/, "");
siteUrl.pathname = `${basePath}/`;

export function publicPath(path: `/${string}`) {
  return `${basePath}${path}`;
}
