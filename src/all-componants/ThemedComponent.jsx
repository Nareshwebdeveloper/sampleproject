import React, {useContext} from 'react';
import { ThemeContext } from './ThemeProvider';

export function ThemedComponent() {

    const { theme, setTheme } = useContext(ThemeContext);
    return (
      <div style={{ background: theme === 'dark' ? '#888' : '#fff', color: theme === null ? '#fff' : '#000' }}>
        <p>Current theme: {theme}</p>
        <button className='btn btn-primary' onClick={() => setTheme(theme === 'dark' ? "light" : 'dark') } style={{padding:"10px",marginLeft:"30px"}}>Change Theme</button>
      <span type="statusbar">
        Status Bar
      </span>
      </div>
    );
  }