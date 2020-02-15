module.exports = {
  components: ['client/src/components/Widgets/[A-Z]*.js', 'client/src/components/Widgets/**/index.js'],
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
