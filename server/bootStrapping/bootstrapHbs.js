import expressHandlebars from 'express-handlebars';

export default function bootstrapHbs(app) {
  const hbs = expressHandlebars.create({
    helpers: {
      inc(value) { return value + 1; },
    },
  });

  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
}
