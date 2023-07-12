const pathRes = onRouteBefore({ pathname, meta });
const pathResType = Object.prototype.toString
  .call(pathRes)
  .match(/\s(\w+)\]/)[1];
if (pathResType === 'Promise') {
  pathRes.then((res) => {
    if (res && res !== pathname) {
      navigate(res, { replace: true });
    }
  });
} else {
  if (pathRes && pathRes !== pathname) {
    element = <Navigate to={pathRes} replace={true} />;
  }
}

return element;
