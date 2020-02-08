export default async function renderHtml(app, view, viewModel) {
  return new Promise((resolve, reject) => {
    app.render(view, viewModel, (error, html) => {
      if (error) {
        return reject(error);
      }
      return resolve(html);
    });
  });
}
