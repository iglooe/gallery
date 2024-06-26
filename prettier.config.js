/** @type {import('prettier').Config & import('prettier-plugin-tailwindcss').PluginOptions} */
const config = {
  endOfLine: "lf",
  semi: false,
  singleQuote: false,
  tabWidth: 2,
  trailingComma: "es5",
  importOrder: [
    "^(react/(.*)$)|^(react$)",
    "^(next/(.*)$)|^(next$)",
    "<THIRD_PARTY_MODULES>",
    "",
    "^types$",
    "^~/app/(.*)$",
    "^~/common/(.*)$",
    "^~/config/(.*)$",
    "^~/hooks/(.*)$",
    "^~/lib/(.*)$",
    "^~/components/ui/(.*)$",
    "^~/components/(.*)$",
    "^~/styles/(.*)$",
    "^~/utils/(.*)$",
    "^~/server/(.*)$",
    "^~/server/db/(.*)$",
    "^~/app/(.*)$",
    "",
    "^[./]",
  ],
  importOrderParserPlugins: ["typescript", "jsx", "decorators-legacy"],
  tailwindAttributes: ["tw"],
  tailwindFunctions: ["cva"],
  plugins: [
    "@ianvs/prettier-plugin-sort-imports",
    "prettier-plugin-tailwindcss",
  ],
}

export default config
