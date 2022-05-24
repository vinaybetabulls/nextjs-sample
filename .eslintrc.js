module.exports = {
  extends: "next",
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
    "jsx-a11y/alt-text": "off",
    "@next/next/no-img-element": "off",
    // 'jsx-a11y/anchor-is-valid': [
    //   'error',
    //   {
    //     components: ['Link'],
    //     specialLink: ['hrefLeft', 'hrefRight'],
    //     aspects: ['invalidHref', 'preferButton'],
    //   },
    // ],
  },
};
