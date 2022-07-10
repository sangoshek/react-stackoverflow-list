import React, { useCallback, useEffect, useState } from 'react';
import { Stack, Typography, AppBar, TextField, Box} from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import './Home.css';

const questionListUrl = `https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow`


const StyledAppBar = styled(AppBar)({
  backgroundColor: '#cf3377',
  border: 0,
  boxShadow: 0,
  borderRadius: 0,
  height: '5rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

const SearchInput = styled(TextField)({
  width: '70%',
  backgroundColor: '#fff',
  borderRadius: '12px 12px',
})

export default function Home(props) {
    
    const [questionList, setQuestionList] = useState([]);

    const fetchQuestionList = async () => {
      const results = await axios.get(questionListUrl).catch(e => console.log(e))
      if(results){        
        setQuestionList(results.data.items)
      }
    }

    useEffect(()=>{
      fetchQuestionList()
    },[])

    return (
      <>
          <StyledAppBar position="sticky" color="primary">
            <SearchInput id="outlined-basic" label="Tags" variant="outlined" />
          </StyledAppBar>
          
          <Stack 
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            >            
            {console.log(questionList)}
            {questionList.length > 0 && questionList.map((item,key)=>(
              <Box key={key}>
                <Typography variant="h6" component='div'>{item.title}</Typography>
              </Box>
            ))}
            
          </Stack>
      </>
      
    );
  
}