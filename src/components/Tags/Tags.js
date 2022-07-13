import React from 'react';
import { Stack, Box } from '@mui/material';
import { KeywordTag } from './styled';

export default function Tags({
    tagList,
    selectedTag,
    callbackUpdateSelectedTags,
    callbackSearchByTag
}) {
    const handleTagsSelected = (tag) => {
        callbackUpdateSelectedTags(tag)
        callbackSearchByTag(tag)
    }
    return (     
        <Stack 
            flexDirection="row" 
            justifyContent="flex-start" 
            alignItems="center"
            flexWrap="wrap"
            >
            {tagList && tagList.length > 0 && tagList.map((item,key)=>(
              <KeywordTag 
                selected={item.name===selectedTag} 
                key={key}
                onClick={()=>handleTagsSelected(item.name)}>
                    {item.name}
            </KeywordTag>
            ))}
        </Stack>      
    );  
}