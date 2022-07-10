import React, { useCallback, useEffect, useState } from 'react';
import { Stack, Typography, AppBar, TextField, Box} from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroller';

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
    const [isLoading, setIsLoading] = useState(true);
    const [questionList, setQuestionList] = useState([]);

    const fetchMore = async () => {
      if(isLoading) return
      setIsLoading(true)
      const results = await axios.get(questionListUrl).catch(e => console.log(e))
      if(results){       
        
        setQuestionList(questionList.concat(results.data.items))
        setIsLoading(false)
      }
    }

    const fetchQuestionList = async () => {
      const results = await axios.get(questionListUrl).catch(e => console.log(e))
      if(results){        
        setQuestionList(results.data.items)
        setIsLoading(false)
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
            style={{overflow:'auto'}}
            >            
            <InfiniteScroll
                pageStart={0}
                loadMore={fetchMore}
                hasMore={true}
                threshold={50}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
                {questionList.length > 0 && questionList.map((item,key)=>(
                  <Stack 
                    flexDirection="row"
                    justifyContent="space-between"
                    alignItems="center"
                    key={key}>
                    <Typography variant="h6" component='div'>{item.title}</Typography>
                  </Stack>
                ))}
            </InfiniteScroll>
            
            
          </Stack>
      </>
      
    );
  
}