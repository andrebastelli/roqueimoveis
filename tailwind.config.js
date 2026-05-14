/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        border: "hsl(var(--border))",
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        gold: { DEFAULT: "hsl(var(--gold))", foreground: "hsl(var(--gold-foreground))" },
      },
      fontFamily: {
        sans: ["Roboto", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-primary": "linear-gradient(135deg, hsl(var(--primary)) 0%, hsl(330 85% 18%) 100%)",
        "gradient-gold": "linear-gradient(135deg, hsl(var(--gold)) 0%, hsl(38 100% 42%) 100%)",
      },
      boxShadow: {
        elegant: "0 20px 60px -20px hsl(var(--primary) / 0.35)",
        gold: "0 10px 30px -10px hsl(var(--gold) / 0.5)",
      },
    },
  },
  plugins: [],
};
