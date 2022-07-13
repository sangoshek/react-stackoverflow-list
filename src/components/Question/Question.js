import React from 'react';
import { Stack, Typography, Box, TextField} from '@mui/material';
import Author from '../Author/Author';
import AnimatedNumber from './AnimatedNumber';

export default function Question({
    item
}) {
    return (            
        <Stack 
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center">
            
                <Stack  
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                width={`80%`}
                padding={2}>  
                <Typography variant="h6" component='div' >
                    <a 
                        href={item.link} 
                        rel="noopener noreferrer" 
                        target="_blank" 
                        style={{color:`purple`, textDecoration:`none`, fontSize:24}}>{item.title}</a>
                </Typography>
                <Stack  
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center"
                
                >  
                    <Box marginX={2}>
                        <Typography variant="h6" component='div'>Score</Typography>
                        <AnimatedNumber number={item.score} isHighlighted={item.score < 0}/>
                    </Box>                    
                    <Box marginX={2} padding={2} border={(!item.accepted_answer_id && item.answer_count > 1 ) && 2}>
                        <Typography variant="h6" component='div'>Answer</Typography>
                        <AnimatedNumber number={item.answer_count} isHighlighted={item.accepted_answer_id && item.answer_count > 1}/>
                    </Box>                    
                    <Box marginX={2}>
                        <Typography variant="h6" component='div'>View</Typography>
                        <AnimatedNumber number={item.view_count}/>
                    </Box>  
                    </Stack>                  
                </Stack>
                <Author image={item.owner}/>
            </Stack>
    );
  
}