import React from 'react';
import { SearchInput } from './styled';

export default function Search({
    callbackUpdateKeyword
}) { 
    return (      
        <SearchInput 
            id="search-input" 
            label="Tags" 
            onChange={(e)=>callbackUpdateKeyword(e.target.value)} 
            variant="outlined" /> 
    );
  
}