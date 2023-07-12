import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = () => {
    console.log(name);
    if (name) {
      localStorage.setItem('token', name);
      navigate('/', { replace: true });
    }
  };
  return (
    <div>
      <form action="#">
        <input
          type="text"
          placeholder="用户名"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border"
        />
        <input
          type="password"
          placeholder="密码"
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          className="border"
        />
        <button className="button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
