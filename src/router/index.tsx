import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/pages/Layout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NoMatch from '@/pages/NoMatch';
import { AuthRoute, LoginRoute } from '@/router/AuthRoute';
const Router = createBrowserRouter([
  /* {
    path: '/',
    redirect: '/index'
  }, */
  {
    path: '/',
    element: (
      <AuthRoute>
        <Layout />
      </AuthRoute>
    ),
    //  errorElement: <NoMatch />,
    children: [
      {
        index: true,
        element: <Home />,
        meta: {
          title: '首页',
          needLogin: true
        }
      },
      {
        path: 'about',
        // Single route in lazy file
        lazy: () => import('@/pages/About'),
        meta: {
          title: '关于',
          needLogin: true
        }
      },
      {
        path: 'dashboard',
        async lazy() {
          // Multiple routes in lazy file
          const { DashboardLayout } = await import('@/pages/Dashboard');
          return { Component: DashboardLayout };
        },
        children: [
          {
            index: true,
            async lazy() {
              const { DashboardIndex } = await import('@/pages/Dashboard');
              return { Component: DashboardIndex };
            }
          },
          {
            path: 'messages',
            async lazy() {
              const { dashboardMessagesLoader, DashboardMessages } =
                await import('@/pages/Dashboard');
              return {
                loader: dashboardMessagesLoader,
                Component: DashboardMessages
              };
            }
          }
        ]
      },
      {
        path: 'details/:id/:name',
        // Single route in lazy file
        lazy: () => import('@/pages/Details')
      },
      {
        path: 'detailsother',
        async lazy() {
          const { DetailsOther } = await import('@/pages/DetailsOther');
          return { Component: DetailsOther };
        }
      }
    ]
  },
  {
    path: '/login',
    element: (
      <LoginRoute>
        <Login />
      </LoginRoute>
    )
  },
  {
    path: '*',
    element: <NoMatch />
  }
]);
/**
 * @description: 全局路由拦截
 * @param {string} pathname 当前路由路径
 * @param {object} meta 当前路由自定义meta字段
 * @return {string} 需要跳转到其他页时，就返回一个该页的path路径，或返回resolve该路径的promise对象
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const onRouteBefore = ({ pathname, meta }) => {
  // 动态修改页面title
  if (meta.title !== undefined) {
    document.title = meta.title;
  }
  // 判断未登录跳转登录页
  if (meta.needLogin) {
    if (!isLogin) {
      return '/login';
    }
  }
};

export default Router;
