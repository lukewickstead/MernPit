import { expect as chaiExpect } from 'chai';

import renderHtml from './htmlRenderer';
import { mockAppWithRender, mockAppWithRenderErroring } from '../testHelpers/mockHelpers';

afterEach(() => {
  jest.resetModules();
  jest.restoreAllMocks();
  jest.clearAllMocks();
});

describe('when calling renderHtml', () => {
  it('should resolve with a success', async () => {
    // Assign
    const stubbedHtml = 'TEST HTML';
    const stubbedView = 'TEST HTML';
    const app = mockAppWithRender(stubbedHtml);
    const stubbedViewModel = 'TEST VIDE MODEL';

    // Act
    const result = await renderHtml(app, stubbedView, stubbedViewModel);

    // Assert
    chaiExpect(result).to.deep.equal(stubbedHtml);

    expect(app.render).toHaveBeenCalledTimes(1);
    chaiExpect(app.render.mock.calls[0][0]).to.equal(stubbedView);
    chaiExpect(app.render.mock.calls[0][1]).to.deep.equal(stubbedViewModel);
  });

  it('should resolve with a reject', async () => {
    // Assign
    const stubbedError = 'TEST ERROR';
    const stubbedView = 'TEST HTML';
    const stubbedViewModel = 'TEST VIDE MODEL';
    const app = mockAppWithRenderErroring(stubbedError);

    // Act
    await renderHtml(app, stubbedView, stubbedViewModel).catch((e) => expect(e).toEqual(stubbedError));

    // Assert
    expect(app.render).toHaveBeenCalledTimes(1);
    chaiExpect(app.render.mock.calls[0][0]).to.equal(stubbedView);
    chaiExpect(app.render.mock.calls[0][1]).to.deep.equal(stubbedViewModel);
  });
});
