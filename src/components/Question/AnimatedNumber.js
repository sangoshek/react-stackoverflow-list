
import AnimatedNumbers from "react-animated-numbers";
import { Typography } from '@mui/material';

export default function AnimatedNumber({number, isHighlighted=false}) {
    return (
        <Typography variant="h6" component='div'>
            <AnimatedNumbers
                animateToNumber={number}
                fontStyle={{ fontSize: 32, color: isHighlighted ? `red` : `inherit` }}
                configs={(number, index) => {
                return { mass: 1, tension: 20 * (index + 1), friction: 10 };
                }}
            ></AnimatedNumbers>
        </Typography>
    )
}