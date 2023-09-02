const path = require('path');

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:prettier/recommended',
    ],
    plugins: ['react', 'react-hooks', '@typescript-eslint'],
    settings: {
        react: {
            version: 'detect',
        },
    },
    rules: {
        // Define your custom ESLint rules here, if needed.
        'react/jsx-uses-react': 'off',
        'react/react-in-jsx-scope': 'off',
        'react/prop-types': 'off',
        'react/no-unescaped-entities': 'off',
        'no-var': 'error',
        '@typescript-eslint/no-explicit-any': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
    },
    overrides: [
        {
            files: [
                'resources/js/**/*.js',
                'resources/js/**/*.jsx',
                'resources/js/**/*.ts',
                'resources/js/**/*.tsx',
            ],
            parserOptions: {
                project: path.resolve(__dirname, './tsconfig.json'),
            },
        },
    ],
};
