/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{astro,ts,tsx}',
    './components/**/*.{astro,ts,tsx}',
    './app/**/*.{astro,ts,tsx}',
    './src/**/*.{astro,ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        pink: {
          "DEFAULT": "#A63F78",
          "100": "#F8EBF4",
          "200": "#F2D8EB",
          "300": "#E8B9D9",
          "400": "#CA6AA6",
          "500": "#A63F78",
          "600": "#81335D",
        },
        green: {
          "DEFAULT": "#1E3F33",
          "100": "#F1F8F4",
          "200": "#DDEEE4",
          "300": "#BEDCCC",
          "400": "#306B54",
          "500": "#1E3F33",
          "600": "#1C382F",
        },
        cindirella: {
          "DEFAULT": "#D86E55",
          "100": "#FCF5F4",
          "200": "#FCE3DE",
          "300": "#F6D7CF",
          "400": "#E5917D",
          "500": "#D86E55",
          "600": "#C4543B",
        },
        zircon: {
          "DEFAULT": "#6F8FC5",
          "100": "#EFF4FA",
          "200": "#E5EBF5",
          "300": "#D1DEEE",
          "400": "#8CAAD1",
          "500": "#6F8FC5",
          "600": "#5B77B7",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
}