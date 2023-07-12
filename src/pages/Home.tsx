import React from 'react';
import { Counter } from '@/components/Counter';
class Home extends React.Component {
  render(): React.ReactNode {
    return (
      <div>
        <Counter />
      </div>
    );
  }
}
export default Home;
