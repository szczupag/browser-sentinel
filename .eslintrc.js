module.exports = {
    root: true,
    env: {
        node: true,
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:vue/vue3-recommended',
        'eslint:recommended',
        '@vue/typescript/recommended',
        'prettier',
        'plugin:prettier/recommended',
    ],
    parserOptions: {
        ecmaVersion: 2021,
    },
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    },
}