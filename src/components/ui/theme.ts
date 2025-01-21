"use client"

import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        zircon: {
          100: { value: "#EFF4FA" },
          200: { value: "#E5EBF5" },
          300: { value: "#D1DEEE" },
          400: { value: "#8CAAD1" },
          500: { value: "#6F8FC5" },
          600: { value: "#5B77B7" },
        },
        green: {
          100: { value: "#F1F8F4" },
          200: { value: "#DDEEE4" },
          300: { value: "#BEDCCC" },
          400: { value: "#306B54" },
          500: { value: "#1E3F33" },
          600: { value: "#1C382F" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)