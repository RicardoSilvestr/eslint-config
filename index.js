'use strict';

module.exports = {
  env: {
    es6: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: '2019',
    sourceType: 'script',
  },
  extends: ['plugin:prettier/recommended'],
  plugins: ['import', 'jest'],
  overrides: [
    {
      files: ['**/__tests__/**/*.{js,jsx,ts,tsx}', '*.test.{js,jsx,ts,tsx}'],
      env: {
        jest: true,
      },
      rules: {
        // Jest plugin (https://github.com/jest-community/eslint-plugin-jest)
        'jest/consistent-test-it': 'error',
        'jest/expect-expect': 'error',
        'jest/lowercase-name': 'off',
        'jest/no-alias-methods': 'error',
        'jest/no-commented-out-tests': 'error',
        'jest/no-disabled-tests': 'warn',
        'jest/no-duplicate-hooks': 'error',
        'jest/no-empty-title': 'error',
        'jest/no-export': 'error',
        'jest/no-focused-tests': 'error',
        'jest/no-hooks': 'off',
        'jest/no-identical-title': 'error',
        'jest/no-if': 'error',
        'jest/no-jasmine-globals': 'error',
        'jest/no-jest-import': 'error',
        'jest/no-large-snapshots': 'off',
        'jest/no-mocks-import': 'error',
        'jest/no-test-callback': 'error',
        'jest/no-test-prefixes': 'error',
        'jest/no-test-return-statement': 'error',
        'jest/no-truthy-falsy': 'error',
        'jest/no-try-expect': 'error',
        'jest/prefer-called-with': 'off',
        'jest/prefer-expect-assertions': 'off',
        'jest/prefer-inline-snapshots': 'off',
        'jest/prefer-spy-on': 'error',
        'jest/prefer-strict-equal': 'warn',
        'jest/prefer-to-be-null': 'error',
        'jest/prefer-to-be-undefined': 'error',
        'jest/prefer-to-contain': 'error',
        'jest/prefer-to-have-length': 'error',
        'jest/prefer-todo': 'error',
        'jest/require-tothrow-message': 'error',
        'jest/valid-describe': 'error',
        'jest/valid-expect-in-promise': 'error',
        'jest/valid-expect': 'error',
      },
    },
  ],
  rules: {
    // Possible Errors (http://eslint.org/docs/rules/#possible-errors)
    'for-direction': 'error',
    'getter-return': 'error',
    'no-async-promise-executor': 'error',
    'no-await-in-loop': 'warn',
    'no-compare-neg-zero': 'error',
    'no-cond-assign': 'error',
    'no-console': 'error',
    'no-constant-condition': ['error', { checkLoops: false }],
    'no-control-regex': 'error',
    'no-debugger': 'error',
    'no-dupe-args': 'error',
    'no-dupe-keys': 'error',
    'no-duplicate-case': 'error',
    'no-empty': 'error',
    'no-empty-character-class': 'error',
    'no-ex-assign': 'error',
    'no-extra-boolean-cast': 'error',
    'no-extra-parens': 'off',
    'no-extra-semi': 'error',
    'no-func-assign': 'error',
    'no-inner-declarations': 'error',
    'no-invalid-regexp': 'error',
    'no-irregular-whitespace': 'error',
    'no-misleading-character-class': 'error',
    'no-obj-calls': 'error',
    'no-prototype-builtins': 'error',
    'no-regex-spaces': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-unexpected-multiline': 'error',
    'no-unreachable': 'error',
    'no-unsafe-finally': 'error',
    'no-unsafe-negation': 'error',
    'require-atomic-updates': 'error',
    'use-isnan': 'error',
    'valid-typeof': 'error',

    // Best Practices (http://eslint.org/docs/rules/#best-practices)
    'accessor-pairs': 'off',
    'array-callback-return': 'error',
    'block-scoped-var': 'error',
    'class-methods-use-this': 'off',
    complexity: 'off',
    'consistent-return': 'off',
    curly: ['error', 'multi-line', 'consistent'],
    'default-case': 'error',
    'dot-location': ['error', 'property'],
    'dot-notation': 'error',
    eqeqeq: ['error', 'allow-null'],
    'guard-for-in': 'off',
    'no-alert': 'error',
    'no-caller': 'error',
    'no-case-declarations': 'error',
    'no-div-regex': 'error',
    'no-else-return': 'off',
    'no-empty-function': 'warn',
    'no-empty-pattern': 'error',
    'no-eq-null': 'off',
    'no-eval': 'error',
    'no-extend-native': 'error',
    'no-extra-bind': 'error',
    'no-extra-label': 'error',
    'no-fallthrough': 'error',
    'no-floating-decimal': 'error',
    'no-global-assign': 'error',
    'no-implicit-coercion': 'off',
    'no-implicit-globals': 'off',
    'no-implied-eval': 'error',
    'no-invalid-this': 'off',
    'no-iterator': 'error',
    'no-labels': 'off',
    'no-lone-blocks': 'error',
    'no-loop-func': 'error',
    'no-magic-numbers': 'off',
    'no-multi-spaces': 'error',
    'no-multi-str': 'error',
    'no-new': 'off',
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-octal': 'error',
    'no-octal-escape': 'error',
    'no-param-reassign': 'off',
    'no-proto': 'error',
    'no-redeclare': 'error',
    'no-restricted-properties': 'off',
    'no-return-assign': 'error',
    'no-return-await': 'error',
    'no-script-url': 'error',
    'no-self-assign': 'error',
    'no-self-compare': 'error',
    'no-sequences': 'error',
    'no-throw-literal': 'error',
    'no-unmodified-loop-condition': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-useless-call': 'error',
    'no-useless-catch': 'error',
    'no-useless-concat': 'error',
    'no-useless-escape': 'error',
    'no-useless-return': 'off',
    'no-void': 'error',
    'no-warning-comments': 'warn',
    'no-with': 'error',
    'prefer-named-capture-group': 'warn',
    'prefer-promise-reject-errors': 'error',
    radix: 'warn',
    'require-await': 'off',
    'require-unicode-regexp': 'off',
    'vars-on-top': 'off',
    'wrap-iife': ['error', 'inside'],
    yoda: 'error',

    // Strict Mode (https://eslint.org/docs/rules/#strict-mode)
    strict: ['error', 'global'],

    // Variables (https://eslint.org/docs/rules/#variables)
    'init-declarations': 'off',
    'no-delete-var': 'error',
    'no-label-var': 'error',
    'no-restricted-globals': 'off',
    'no-shadow': 'warn',
    'no-shadow-restricted-names': 'error',
    'no-undef': 'error',
    'no-undef-init': 'error',
    'no-undefined': 'off',
    'no-unused-vars': 'error',
    'no-use-before-define': 'off',

    // Node.js and CommonJS (https://eslint.org/docs/rules/#nodejs-and-commonjs)
    'callback-return': 'off',
    'global-require': 'off',
    'handle-callback-err': ['error', '^(err|error)$'],
    'no-buffer-constructor': 'error',
    'no-mixed-requires': 'error',
    'no-new-require': 'error',
    'no-path-concat': 'error',
    'no-process-env': 'warn',
    'no-process-exit': 'off',
    'no-restricted-modules': 'off',
    'no-sync': 'off',

    // Stylistic Issues (https://eslint.org/docs/rules/#stylistic-issues)
    // Many are unconfigured because we use Prettier
    camelcase: 'error',
    'capitalized-comments': 'off',
    'no-array-constructor': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-new-object': 'error',
    'no-tabs': 'error',
    'no-trailing-spaces': 'error',
    'one-var': ['error', { initialized: 'never' }],
    'one-var-declaration-per-line': ['error', 'initializations'],
    'padding-line-between-statements': [
      'error',
      { blankLine: 'always', prev: 'directive', next: '*' },
    ],
    'unicode-bom': 'error',

    // ECMAScript 6 (https://eslint.org/docs/rules/#ecmascript-6)
    // Many are unconfigured because we use Prettier
    'constructor-super': 'error',
    'no-class-assign': 'error',
    'no-const-assign': 'error',
    'no-dupe-class-members': 'error',
    'no-duplicate-imports': ['error', { includeExports: false }],
    'no-new-symbol': 'error',
    'no-this-before-super': 'error',
    'no-useless-computed-key': 'error',
    'no-useless-constructor': 'error',
    'no-useless-rename': 'error',
    'no-var': 'error',
    'object-shorthand': 'off', // complex
    'prefer-arrow-callback': 'off', // complex
    'prefer-const': 'off',
    'prefer-destructuring': 'off',
    'prefer-numeric-literals': 'error',
    'prefer-rest-params': 'error',
    'prefer-spread': 'error',
    'prefer-template': 'error',
    'require-yield': 'error',
    'sort-imports': 'off',
    'symbol-description': 'error',

    // Import plugin (https://github.com/benmosher/eslint-plugin-import)

    // Static analysis
    'import/no-unresolved': ['error', { commonjs: true }],
    'import/named': 'error',
    'import/default': 'warn',
    'import/namespace': 'error',
    'import/no-restricted-path': 'off',
    'import/no-absolute-path': 'error',
    'import/no-dynamic-require': 'off',
    'import/no-internal-modules': 'off',
    'import/no-webpack-loader-syntax': 'error',
    'import/no-self-import': 'error',
    'import/no-cycle': 'warn',
    'import/no-useless-path-segments': 'error',
    'import/no-relative-parent-imports': 'off',
    'import/no-unused-modules': 'off',

    // Helpful warnings
    'import/export': 'error',
    'import/no-named-as-default': 'error',
    'import/no-named-as-default-member': 'error',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 'error',
    'import/no-mutable-exports': 'off',

    // Module systems
    'import/unambiguous': 'off',
    'import/no-commonjs': 'off',
    'import/no-amd': 'error',
    'import/no-nodejs-modules': 'off',

    // Style guide
    'import/first': 'error',
    'import/exports-last': 'off',
    'import/no-duplicates': 'error',
    'import/no-namespace': 'off',
    'import/extensions': 'off',
    'import/order': [
      'warn',
      {
        groups: [
          'builtin',
          'external',
          'internal',
          'parent',
          'sibling',
          'index',
        ],
        'newlines-between': 'always',
      },
    ],
    'import/newline-after-import': 'error',
    'import/prefer-default-export': 'off',
    'import/max-dependencies': 'off',
    'import/no-unassigned-import': [
      'warn',
      { allow: ['make-promises-safe', 'node-report'] },
    ],
    'import/no-named-default': 'error',
    'import/no-default-export': 'off',
    'import/no-anonymous-default-export': 'warn',
    'import/group-exports': 'off',
    'import/dynamic-import-chunkname': 'off',
  },
};
