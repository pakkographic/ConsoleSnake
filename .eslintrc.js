module.exports = {
  "env": {
    "node": true,
    "es6": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:@typescript-eslint/recommended-requiring-type-checking",
    "plugin:unicorn/recommended"
  ],
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaVersion": 2022,
    "sourceType": "module",
    "project": "./tsconfig.json",
    "ecmaFeatures": {
      "jsx": false,
      "forOf": true,
      "spread": true,
      "modules": true,
      "classes": true,
      "generators": true,
      "restParams": true,
      "regexUFlag": true,
      "regexYFlag": true,
      "globalReturn": true,
      "destructuring": true,
      "impliedStrict": true,
      "blockBindings": true,
      "defaultParams": true,
      "octalLiterals": true,
      "arrowFunctions": true,
      "binaryLiterals": true,
      "templateStrings": true,
      "superInFunctions": true,
      "unicodeCodePointEscapes": true,
      "objectLiteralShorthandMethods": true,
      "objectLiteralComputedProperties": true,
      "objectLiteralDuplicateProperties": true,
      "objectLiteralShorthandProperties": true
    }
  },
  "plugins": [
    "import",
    "prefer-arrow",
    "@typescript-eslint",
    "jsdoc",
    "import-newlines",
    "unused-imports"
  ],
  "rules": {
    "@typescript-eslint/adjacent-overload-signatures": "error",
    "@typescript-eslint/array-type": [
      "error",
      {
        "default": "generic"
      }
    ],
    "@typescript-eslint/consistent-indexed-object-style": ["error", "record"],
    "@typescript-eslint/consistent-type-assertions": [
      "error",
      {
        "assertionStyle": "as"
      }
    ],
    "@typescript-eslint/consistent-type-definitions": ["error", "interface"],
    "@typescript-eslint/dot-notation": [
      "error",
      {
        "allowPrivateClassPropertyAccess": true,
        "allowProtectedClassPropertyAccess": true
      }
    ],
    "@typescript-eslint/explicit-member-accessibility": [
      "error",
      {
        "accessibility": "no-public"
      }
    ],
    "@typescript-eslint/explicit-module-boundary-types": "off",
    "@typescript-eslint/member-delimiter-style": [
      "error",
      {
        "multiline": {
          "delimiter": "semi",
          "requireLast": true
        },
        "singleline": {
          "delimiter": "semi",
          "requireLast": true
        }
      }
    ],
    "@typescript-eslint/method-signature-style": ["error", "method"],
    "@typescript-eslint/no-empty-function": [
      "error",
      {
        "allow": ["arrowFunctions"]
      }
    ],
    "@typescript-eslint/no-empty-interface": [
      "error",
      {
        "allowSingleExtends": true
      }
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/no-inferrable-types": "error",
    "@typescript-eslint/no-misused-new": "error",
    "@typescript-eslint/no-misused-promises": [
      "error",
      {
        "checksVoidReturn": false
      }
    ],
    "@typescript-eslint/no-namespace": "error",
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/no-shadow": "error",
    "@typescript-eslint/no-this-alias": [
      "error",
      {
        "allowDestructuring": true,
        "allowedNames": ["self"]
      }
    ],
    "@typescript-eslint/no-unnecessary-qualifier": "error",
    "@typescript-eslint/no-unused-expressions": "error",
    "@typescript-eslint/no-use-before-define": "off",
    "@typescript-eslint/no-var-requires": "error",
    "@typescript-eslint/prefer-for-of": "error",
    "@typescript-eslint/prefer-function-type": "error",
    "@typescript-eslint/prefer-includes": "error",
    "@typescript-eslint/prefer-namespace-keyword": "error",
    "@typescript-eslint/quotes": [
      "error",
      "double",
      {
        "avoidEscape": true
      }
    ],
    "@typescript-eslint/require-await": "off",
    "@typescript-eslint/semi": ["error", "always"],
    "@typescript-eslint/type-annotation-spacing": "error",
    "@typescript-eslint/unified-signatures": "error",
    "@typescript-eslint/consistent-type-imports": [
      "error",
      {
        "disallowTypeAnnotations": false,
        "fixStyle": "inline-type-imports"
      }
    ],
    "arrow-body-style": ["error", "as-needed"],
    "brace-style": ["error", "1tbs"],
    "comma-dangle": "off",
    "complexity": "off",
    "dot-notation": "off",
    "eol-last": ["error", "always"],
    "eqeqeq": ["error", "always"],
    "guard-for-in": "error",
    "import-newlines/enforce": ["error", 4],
    "import/order": [
      "error",
      {
        "groups": [
          "index",
          "sibling",
          "parent",
          "internal",
          "external",
          "builtin",
          "object"
        ]
      }
    ],
    "indent": "off",
    "jsdoc/check-alignment": "error",
    "jsdoc/check-indentation": "error",
    "jsdoc/no-undefined-types": "off",
    "key-spacing": [
      "error",
      {
        "align": "value"
      }
    ],
    "keyword-spacing": "error",
    "linebreak-style": ["error", "unix"],
    "new-parens": ["error", "always"],
    "no-caller": "error",
    "no-console": "off",
    "no-debugger": "error",
    "no-duplicate-case": "error",
    "no-duplicate-imports": "error",
    "no-empty": [
      "error",
      {
        "allowEmptyCatch": true
      }
    ],
    "no-empty-function": "off",
    "no-eval": "error",
    "no-extra-bind": "error",
    "no-fallthrough": "error",
    "no-inner-declarations": "off",
    "no-invalid-this": "off",
    "no-multiple-empty-lines": [
      "error",
      {
        "max": 2,
        "maxBOF": 1,
        "maxEOF": 1
      }
    ],
    "no-new-func": "error",
    "no-new-wrappers": "error",
    "no-redeclare": "off",
    "no-sequences": "error",
    "no-shadow": "off",
    "no-sparse-arrays": "error",
    "no-template-curly-in-string": "error",
    "no-throw-literal": "error",
    "no-trailing-spaces": "error",
    "no-undef-init": "error",
    "no-underscore-dangle": "off",
    "no-unsafe-finally": "error",
    "no-unused-labels": "error",
    "no-unused-vars": "off",
    "no-use-before-define": "off",
    "no-var": "error",
    "object-curly-spacing": ["error", "always"],
    "object-shorthand": "error",
    "one-var": "off",
    "prefer-arrow-callback": "off",
    "prefer-arrow/prefer-arrow-functions": "off",
    "prefer-const": "error",
    "prefer-numeric-literals": "error",
    "prefer-object-spread": "error",
    "quote-props": ["error", "consistent-as-needed"],
    "radix": "error",
    "space-before-function-paren": "off",
    "space-in-parens": ["error", "never"],
    "space-infix-ops": "error",
    "spaced-comment": [
      "error",
      "always",
      {
        "markers": ["/"]
      }
    ],
    "template-curly-spacing": ["error", "never"],
    "unused-imports/no-unused-imports": "error",
    "unused-imports/no-unused-vars": "off",
    "use-isnan": "error",
    "valid-typeof": [
      "error",
      {
        "requireStringLiterals": true
      }
    ],
    "@typescript-eslint/no-redeclare": ["error"],
    "@typescript-eslint/triple-slash-reference": "off",
    "@typescript-eslint/member-ordering": [
      "error",
      {
        "default": {
          "memberTypes": [
            "static-initialization",
            "signature",
            "call-signature",
            "private-static-field",
            "protected-static-field",
            "static-field",
            "private-field",
            "protected-field",
            "field",
            "protected-abstract-get",
            "protected-abstract-set",
            "protected-abstract-method",
            ["abstract-get", "abstract-set"],
            "abstract-method",
            "private-constructor",
            "protected-constructor",
            "constructor",
            ["private-static-get", "protected-static-get"],
            ["protected-static-get", "protected-static-get"],
            ["static-get", "static-set"],
            "private-static-method",
            "protected-static-method",
            "static-method",
            "private-method",
            "protected-method",
            ["private-get", "private-set"],
            ["protected-get", "protected-set"],
            ["get", "set"],
            "method"
          ],
          "order": "alphabetically"
        }
      }
    ],
    "@typescript-eslint/no-unnecessary-type-assertion": "off",
    "@typescript-eslint/explicit-function-return-type": "error",
    "@typescript-eslint/indent": [
      "error",
      4,
      {
        "SwitchCase": 1
      }
    ],
    "jsdoc/tag-lines": "error",
    "jsdoc/no-types": "error",
    "arrow-parens": ["error", "as-needed"],
    "unicorn/no-null": "off",
    "unicorn/no-static-only-class": "off",
    "unicorn/no-unreadable-array-destructuring": "off",
    "unicorn/numeric-separators-style": [
      "error",
      {
        "onlyIfContainsSeparator": true
      }
    ],
    "unicorn/filename-case": "off",
    "unicorn/prevent-abbreviations": "off",
    "unicorn/no-await-expression-member": "off",
    "unicorn/no-array-reduce": "off",
    "unicorn/prefer-spread": "off",
    "unicorn/explicit-length-check": [
      "error",
      {
        "non-zero": "not-equal"
      }
    ],
    "unicorn/catch-error-name": "off",
    "unicorn/consistent-destructuring": "off",
    "unicorn/prefer-number-properties": "off",
    "unicorn/no-array-callback-reference": "off",
    "unicorn/no-array-method-this-argument": "off",
    "unicorn/custom-error-definition": "error",
    "unicorn/switch-case-braces": "off",
    "@typescript-eslint/comma-dangle": [
      "error",
      {
        "enums": "always-multiline"
      }
    ],
    "unicorn/prefer-event-target": "off",
    "@typescript-eslint/no-unsafe-declaration-merging": "off",
    "@typescript-eslint/no-unsafe-enum-comparison": "off",
    "unicorn/prefer-ternary": "off"
  }
}
