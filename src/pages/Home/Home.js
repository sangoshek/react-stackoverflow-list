import React, { useCallback, useEffect, useState } from 'react';
import { Stack, Typography, AppBar, TextField} from '@mui/material';
import { styled } from '@mui/system';
import axios from 'axios';
import Search from '../../components/Search/Search';
import Tags from '../../components/Tags/Tags';
import Question from '../../components/Question/Question';
import InfiniteScroll from 'react-infinite-scroller';

const questionListUrl = `https://api.stackexchange.com/2.3/questions?order=desc&sort=activity&site=stackoverflow&pagesize=20`
const tagsListUrl = `https://api.stackexchange.com/2.3/tags?order=desc&sort=popular&site=stackoverflow&pagesize=10`

const StyledAppBar = styled(AppBar)({
  backgroundColor: '#cf3377',
  border: 0,
  boxShadow: 0,
  borderRadius: 0,
  height: '10rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
})

export default function Home(props) {
    const [isLoading, setIsLoading] = useState(true);
    const [hasMore, setHasMore] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [questionList, setQuestionList] = useState([]);
    const [tagList, setTagList] = useState([]);
    const [tagSelected, setTagSelected] = useState('');

    const handlefetchMore = async () => {
      if(isLoading) return
      setIsLoading(true)
      const page = currentPage + 1
      const results = await axios.get(`${questionListUrl}&page=${page}`).catch(e => console.log(e))
      if(results){       
        console.log(results.data)
        setQuestionList(questionList.concat(results.data.items))
        setCurrentPage(page)
        setIsLoading(false)
      }
    }

    const fetchQuestionList = async () => {
      const results = await axios.get(questionListUrl).catch(e => console.log(e))
      if(results){        
        setHasMore(results.data.has_more)
        setQuestionList(results.data.items)
        setIsLoading(false)
      }
    }

    const fetchTagList = async () => {
      const results = await axios.get(tagsListUrl).catch(e => console.log(e))
      if(results){        
        console.log(results.data.items)
        setTagList(results.data.items)
        setTagSelected(results.data.items[0].name)
        setIsLoading(false)
      }
    }

    const handleKeywordSearch = async (tag) => {
     
      const results = await axios.get(`${tagsListUrl}&inname=${tag}`).catch(e => console.log(e))
      console.log(results)
      if(results){        
        setTagList(results.data.items)
        setTagSelected(results.data.items[0].name)
        setIsLoading(false)
      }
      handleKeywordFilter(tag)
    }

    const handleKeywordFilter = async (tag) => {
      console.log(tag)
      const results = await axios.get(`${questionListUrl}&tags=${tag}`).catch(e => console.log(e))
      if(results){        
        setHasMore(results.data.has_more)
        setQuestionList(results.data.items)
        setIsLoading(false)
      }
    }

    useEffect(()=>{
      fetchQuestionList()
      fetchTagList()
    },[])

    return (
      <>
          <StyledAppBar position="sticky" color="primary">
            <Search callbackUpdateKeyword={handleKeywordSearch}/>
            <Tags 
              tagList={tagList}
              selectedTag={tagSelected}
              callbackUpdateSelectedTags={(value)=>{setTagSelected(value)}}
              callbackSearchByTag={(value)=>handleKeywordFilter(value)}
              />
          </StyledAppBar>

          <Stack 
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            style={{overflow:'auto'}}
            >    
            <InfiniteScroll
                pageStart={0}
                loadMore={handlefetchMore}
                hasMore={hasMore}
                threshold={50}
                loader={<div className="loader" key={0}>Loading ...</div>}
            >
              {questionList.length > 0 && questionList.map((item,key)=><Question key={key} item={item}/>)}              
            </InfiniteScroll> 
          </Stack>
      </>
      
    );
  
}