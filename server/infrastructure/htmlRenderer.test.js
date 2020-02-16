import renderHtml from './htmlRenderer';
import { mockAppWithRender, mockAppWithRenderErroring } from '../testHelpers/mockHelpers';

afterEach(() => {
  jest.resetModules();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe('when calling renderHtml', () => {
  const stubbedHtml = 'TEST HTML';
  const stubbedView = 'TEST HTML';
  const stubbedViewModel = 'TEST VIDE MODEL';

  it('should resolve with a success', async () => {
    // Assign
    const app = mockAppWithRender(stubbedHtml);

    // Act
    const result = await renderHtml(app, stubbedView, stubbedViewModel);

    // Assert
    expect(result).toEqual(stubbedHtml);

    expect(app.render).toHaveBeenCalledTimes(1);
    expect(app.render).toHaveBeenNthCalledWith(1, stubbedView, stubbedViewModel, expect.anything());
  });

  it('should resolve with a reject', async () => {
    // Assign
    const stubbedError = 'TEST ERROR';
    const app = mockAppWithRenderErroring(stubbedError);

    // Act
    await renderHtml(app, stubbedView, stubbedViewModel).catch((e) => expect(e).toEqual(stubbedError));

    // Assert
    expect(app.render).toHaveBeenCalledTimes(1);
    expect(app.render).toHaveBeenNthCalledWith(1, stubbedView, stubbedViewModel, expect.anything());
  });
});
