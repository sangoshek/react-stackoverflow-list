import React from 'react';
import { Stack, Typography, Box, TextField} from '@mui/material';
import { ProfileImage, ProfileImageWithoutImg} from './styled';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function Question({
    item
}) {
    return (            
        <Stack 
            flexDirection="row"
            justifyContent="space-between"
            alignItems="flex-start">
            
                <Stack  
                flexDirection="column"
                justifyContent="flex-start"
                alignItems="flex-start"
                padding={2}>  
                <Typography variant="h6" component='div'>
                    <a href={item.link} rel="noopener noreferrer" target="_blank">{item.title}</a>
                </Typography>
                <Stack  
                flexDirection="row"
                justifyContent="space-between"
                alignItems="center">  
                    <Box marginX={2}>
                        <Typography variant="h6" component='div'>Score</Typography>
                        <Typography variant="h6" component='div'>{item.score}</Typography>
                    </Box>                    
                    <Box marginX={2}>
                        <Typography variant="h6" component='div'>Answer</Typography>
                        <Typography variant="h6" component='div'>{item.answer_count}</Typography>
                    </Box>                    
                    <Box marginX={2}>
                        <Typography variant="h6" component='div'>View</Typography>
                        <Typography variant="h6" component='div'>{item.view_count}</Typography>
                    </Box>  
                    </Stack>                  
                </Stack>
                <Box>  
                {item.owner.profile_image
                ? <LazyLoadImage
                    alt={item.owner.display_name}
                    height={52}
                    effect="blur"
                    src={item.owner.profile_image}
                    width={52}
                    style={{
                        borderRadius: `50% 50%`,
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                    /> 
                : <ProfileImageWithoutImg {...stringAvatar(item.owner.display_name)}/>}            
                </Box>
            </Stack>
    );
  
}