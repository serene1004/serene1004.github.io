import { FlatCompat } from '@eslint/eslintrc';
import withNuxt from './.nuxt/eslint.config.mjs';

const compat = new FlatCompat({ baseDirectory: import.meta.dirname });
const airbnb = compat.extends('airbnb-base');

airbnb.forEach((config) => Reflect.deleteProperty(config, 'plugins'));

export default withNuxt(
  {
    ignores: ['.nuxt/**', '.output/**', 'api/**', '_legacy-vue/**', 'dist/**'],
  },
  ...airbnb,
  {
    rules: {
      'import/extensions': 'off',
      'import/no-unresolved': 'off',
      'import/prefer-default-export': 'off',
      'max-len': ['error', {
        code: 100, ignoreStrings: true, ignoreTemplateLiterals: true, ignoreUrls: true,
      }],
    },
  },
  {
    files: ['**/*.vue'],
    rules: {
      '@typescript-eslint/no-unused-vars': 'off',
      'max-len': 'off',
      'no-unused-vars': 'off',
      'vue/multi-word-component-names': 'off',
      'vue/require-default-prop': 'off',
      'vue/valid-v-for': 'off',
    },
  },
  {
    files: ['eslint.config.mjs'],
    rules: {
      'import/extensions': ['error', 'ignorePackages', { mjs: 'always' }],
      'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
      'import/no-named-as-default': 'off',
    },
  },
);
