// /** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{ts,js,tsx,jsx}", "./public/**/*.html"],
    plugins: [],
    theme: {
        extend: {
            colors: {
                primary: "#203559",
                secondary: "#6c757d",
                success: "#198754",
                info: "#0dcaf0",
                warning: "#ffc107",
                danger: "#F85656",
            },
        },
    },
};
