export const samuraiMiddleware = (storeApi) => {
  return (next) => {
    return (action) => {
      next(action);
      return;
    };
  };
};
