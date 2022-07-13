import React from 'react';
import { Stack, Typography, Box, TextField} from '@mui/material';
import { ProfileImage, ProfileImageWithoutImg} from './styled';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { LazyLoadImage } from 'react-lazy-load-image-component';

const stringAvatar=  (name) => {
    return {
        sx: {
        bgcolor: `#F18226`,
        },
        children: `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`,
    };
}

export default function Author({
    image
}) {
    return ( 
        <Box paddingY={3}  width={`20%`}>  
            {image.profile_image
            ? <Box textAlign="center">
                <LazyLoadImage
                    alt={image.display_name}
                    height={82}
                    effect="blur"
                    src={image.profile_image}
                    width={82}
                    style={{
                        borderRadius: `50% 50%`,
                        objectFit: 'cover',
                        objectPosition: 'center'
                    }}
                    /> 
                <Typography variant="body2" component="div">{image.display_name}</Typography>
                </Box>
            : <ProfileImageWithoutImg {...stringAvatar(image.display_name)}/>}            
        </Box>
    );
  
}