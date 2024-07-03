/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
    output: 'export',
      basePath: '/Project-Portfolio-By-Next-Js',
  assetPrefix: '/Project-Portfolio-By-Next-Js/',
 
  // Optional: Change links `/me` -> `/me/` and emit `/me.html` -> `/me/index.html`
  // trailingSlash: true,
 
  // Optional: Prevent automatic `/me` -> `/me/`, instead preserve `href`
  // skipTrailingSlashRedirect: true,
 
  // Optional: Change the output directory `out` -> `dist`
  // distDir: 'dist',
}
 
export default nextConfig