import React from 'react';
import { Stack, Typography, Box, TextField} from '@mui/material';
import { ProfileImage, ProfileImageWithoutImg} from './styled';

export default function Question({
    item
}) {
    return (            
        <Stack 
            flexDirection="column"
            justifyContent="flex-start"
            alignItems="flex-start">
            <Typography variant="h6" component='div'>
                <a href={item.link} rel="noopener noreferrer" target="_blank">{item.title}</a>
            </Typography>
                <Stack  
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center">  
                    <Box>
                        <Typography variant="h6" component='div'>Score</Typography>
                        <Typography variant="h6" component='div'>{item.score}</Typography>
                    </Box>                    
                    <Box>
                        <Typography variant="h6" component='div'>Answer</Typography>
                        <Typography variant="h6" component='div'>{item.answer_count}</Typography>
                    </Box>                    
                    <Box>
                        <Typography variant="h6" component='div'>View</Typography>
                        <Typography variant="h6" component='div'>{item.view_count}</Typography>
                    </Box>                    
                </Stack>
                <Box>
                <ProfileImage src={item.owner.profile_image}/>
                </Box>
            </Stack>
    );
  
}