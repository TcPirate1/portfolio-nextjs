/** @type {import('next').NextConfig} */

const cspHeader = `
    default-src 'self';
    script-src 'self';
    style-src 'self';
    img-src 'self' blob: data:;
    font-src 'self';
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    upgrade-insecure-requests;
`;

const nextConfig = {
  turbopack: {
    resolveExtensions: ['.mdx', '.tsx', '.ts', '.jsx', '.js', '.mjs', '.json'],
  },
  async headers() {
      return [
        {
          source: "/(.*)",
          headers: [
            {
              key: "Content-Security-Policy",
              value: cspHeader.replace(/\n/g, ""),
            },
          ],
        },
      ];
    },
};

export default nextConfig;
