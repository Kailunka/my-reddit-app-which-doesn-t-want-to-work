import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { BrowserRouter } from "react-router-dom";
import  {fetchPosts}  from "./components/Posts/PostsSlice"
import { FiltersBar } from './components/FiltersBar/FiltersBar';
import { Posts } from './components/Posts/Posts';
import { SearchBar } from './components/SearchBar/SearchBar';

function App() {
  const [subreddits, setSubreddits] = useState([]);
  const dispatch = useDispatch();

  const fetchSubreddits = async () => {
    const response = await fetch('https://www.reddit.com/subreddits.json', { method: 'GET' });
    const data = await response.json();
    return data.data.children.map((subreddit) => subreddit.data.display_name);
  };

  useEffect(() => {
    const fetchData = async () => {
      console.log('Fetching subreddits...');
      const fetchedSubreddits = await fetchSubreddits();
      setSubreddits(fetchedSubreddits); 
      if (fetchedSubreddits.length > 0) {
        console.log('Dispatching fetchPosts for:', fetchedSubreddits[0]);
        dispatch(fetchPosts(fetchedSubreddits[0])); 
      }
    };

    fetchData();
  }, [dispatch]);

  console.log('Subreddits fetched:', subreddits);

  return (
    <BrowserRouter>
      <div className='main'>
        <div className="App-header"><h1>Hello Reddit</h1></div>
        <SearchBar />
        <FiltersBar subreddits={subreddits} />
        <Posts />
      </div>
    </BrowserRouter>
  );
}

export default App;
