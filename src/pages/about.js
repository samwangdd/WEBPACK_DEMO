import React, { Component } from 'react';

// import Mouse from '@components/RenderProps/Mouse';
// import { Cat } from '@components/RenderProps/MouseWithCat';
import MouseTraker from '@components/RenderProps/MouseTraker';
import styles from '@styles/style.css';

import Tabs from './tabs';
import RefsButton from './refsButton';

class about extends Component {
  renderCat = mouse => {
    console.log('renderCat :');
    return <MouseTraker mouse={mouse} />;
  };
  render() {
    return (
      <div className={styles.wrapper}>
        {/* <div className={`${styles.center} ${styles.col}`}>2</div>
        <div className={`${styles.left} ${styles.col}`}>1</div>
        <div className={`${styles.right} ${styles.col}`}>3</div> */}
        <div className={styles.header}>Header</div>
        <div className={styles.footer}>Footer</div>
        <Tabs />
        <RefsButton />
      </div>
    );
  }
}

export default about;
