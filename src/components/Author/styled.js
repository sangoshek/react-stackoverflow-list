import { Stack, Typography, Avatar, TextField} from '@mui/material';
import { styled } from '@mui/system';

const ProfileImage = styled(Avatar)({
    width: 54,
    height: 54,
})
const ProfileImageWithoutImg = styled(Avatar)({
    width: 54,
    height: 54,
    bgcolor: `#F18226`
})

export {
    ProfileImage,
    ProfileImageWithoutImg
}