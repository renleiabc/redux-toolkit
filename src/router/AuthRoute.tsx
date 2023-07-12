// 导入重定向的路由模块
import { Navigate } from 'react-router-dom';

function AuthRoute({ children }) {
  const token = window.localStorage.getItem('token');
  if (token) {
    return <>{children}</>;
  } else {
    return <Navigate to="/login" replace></Navigate>;
  }
}
function LoginRoute({ children }) {
  const token = window.localStorage.getItem('token');
  if (token) {
    return <Navigate to="/" replace></Navigate>;
  } else {
    return <>{children}</>;
  }
}

export { AuthRoute, LoginRoute };
