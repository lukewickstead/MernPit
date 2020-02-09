import expressHandlebars from 'express-handlebars';
import { createGetEnumLookUpHelper } from '../../common/enumLookUpHelper';

export default function bootstrapHbs(app) {
  const enumLookUpHelper = createGetEnumLookUpHelper();

  const hbs = expressHandlebars.create({
    helpers: {
      inc(value) { return value + 1; },
      getEnumDisplayValue(value) { return enumLookUpHelper(value); },
    },
  });

  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');
}
