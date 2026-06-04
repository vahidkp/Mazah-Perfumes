/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // Mockup uses local SVG placeholders — allow SVG and skip optimization
    // so the assets render without a configured image loader.
    dangerouslyAllowSVG: true,
    contentDispositionType: 'inline',
    unoptimized: true,
  },
}

export default nextConfig
