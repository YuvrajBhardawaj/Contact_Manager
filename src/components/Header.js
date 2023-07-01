import React, { PureComponent } from 'react';
import './App.css';
export class Header extends PureComponent {
  render() {
    return (
      <>
        <div className='heading container text-center p-4'>Contact Manager</div>
        <hr />
      </>
    )
  }
}

export default Header