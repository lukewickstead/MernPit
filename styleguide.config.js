module.exports = {
  components: 'client/src/components/**/[A-Z]*.js',
  template: {
    head: {
      links: [
        {
          rel: 'stylesheet',
          href:
            '/main.css',
        },
      ],
    },
  },
};
