export const mockLogger = () => ({
  info: jest.fn(),
  error: jest.fn(),
});

export const mockRequest = (body) => ({
  body,
  app: {
    render: jest.fn(),
  },
  logger: mockLogger(),
});

export const mockResponse = () => {
  const res = {};
  res.send = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  res.json = jest.fn().mockReturnValue(res);
  res.status = jest.fn().mockReturnValue(res);
  return res;
};

export function mockAppWithRender(html) {
  return {
    render: jest.fn((templateView, dto, cb) => {
      cb('', html);
    }),
  };
}

export function mockAppWithRenderErroring(error) {
  return {
    render: jest.fn((templateView, dto, cb) => {
      cb(error, '');
    }),
  };
}
