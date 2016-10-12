'use strict';

module.exports = {
    env: {
        es6: true,
        node: true
    },
    parserOptions: {
        ecmaVersion: '2015',
        sourceType: 'script'
    },
    extends: 'eslint:recommended',
    plugins: [
        'no-only-tests'
    ],
    rules: {
        'array-bracket-spacing': ['error', 'never'],
        'array-callback-return': 'error',
        'brace-style': ['error', '1tbs'],
        'camelcase': 'error',
        'comma-spacing': ['error', {after: true, before: false}],
        'comma-style': 'error',
        'curly': ['error', 'multi-line', 'consistent'],
        'eol-last': 'error',
        'eqeqeq': ['error', 'allow-null'],
        'indent': ['error', 4, {SwitchCase: 1}],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'new-parens': 'error',
        'no-cond-assign': 'error',
        'no-console': 'error',
        'no-constant-condition': ['error', {checkLoops: false}],
        'no-control-regex': 'error',
        'no-debugger': 'error',
        'no-delete-var': 'error',
        'no-dupe-args': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty': 'error',
        'no-empty-character-class': 'error',
        'no-ex-assign': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-semi': 'error',
        'no-func-assign': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-label-var': 'error',
        'no-multiple-empty-lines': ['error', {max: 2, maxEOF: 1, maxBOF: 1}],
        'no-obj-calls': 'error',
        'no-regex-spaces': 'error',
        'no-shadow-restricted-names': 'error',
        'no-sparse-arrays': 'error',
        'no-template-curly-in-string': 'error',
        'no-trailing-spaces': 'error',
        'no-undef': 'error',
        'no-undef-init': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-negation': 'error',
        'object-curly-spacing': ['error', 'never'],
        'quotes': ['error', 'single', 'avoid-escape'],
        'semi': 'error',
        'semi-spacing': ['error', {after: true, before: false}],
        'space-before-blocks': 'error',
        'space-before-function-paren': ['error', {anonymous: 'always', named: 'never'}],
        'space-in-parens': ['error', 'never'],
        'space-infix-ops': ['error', {int32Hint: true}],
        'space-unary-ops': 'error',
        'strict': ['error', 'global'],
        'use-isnan': 'error',
        'valid-typeof': 'error',

        'no-only-tests/no-only-tests': 'error'
    }
};
