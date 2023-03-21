module.exports = {
    printWidth: 160,
    tabWidth: 2,
    singleQuote: true,
    semi: false,
    arrowParens: "always",
    endOfLine: 'auto',
    trailingComma:  'all',
    overrides: [
        {
            files: '*.{js,jsx,tsx,ts,scss,json,html}',
            options: {
                tabWidth: 2,
            },
        },
    ],
};