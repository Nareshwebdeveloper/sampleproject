import React, { createContext, useContext, useState } from 'react';
import { ThemedComponent } from './ThemedComponent';

export const ThemeContext = createContext('light');

export function ThemeProvider(){
        
    const [theme, setTheme] = useState('');

    return(
        <ThemeContext.Provider value={{ theme, setTheme }}>
        <ThemedComponent/>
      </ThemeContext.Provider>

        )
}
