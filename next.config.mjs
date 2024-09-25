import path from "path";
import fileUrl from "file-url";

const __filename = fileUrl(import.meta.url);

const __dirname = path.dirname(__filename);

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    sassOptions: {
        includePaths: [path.join(__dirname, "src")],
        prependData: `@use "src/styles/_helpers.scss" as *;`,
    },
};

export default nextConfig;
