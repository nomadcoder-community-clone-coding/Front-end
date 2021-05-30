import React, { Fragment, useEffect, useState } from 'react'
import styled from 'styled-components';
import PropTypes from "prop-types";
import { FooterContainer } from './component/footer'


//import Header from './components/Header/Header.component';
import './App.css';

function App() {

  return (
    <FooterContainer />
  )
}


export default App;

/*
const HomePage = ({ getPosts, post: { posts, loading } }) => {
  useEffect(() => {
    getPosts();
  }, [getPosts]);

//Popular, new에 따라 탭 구분
const [sortType, setSortType] = useState('Newest');

return (
  <Fragment>
    <div className='community-tabs'>
      <ButtonGroup>
        <div> Sort by : </div>
        buttons = {['Popular', 'New']}
        selected = {sortType}
        setSelected = {setSortType}
      </ButtonGroup>
    </div>
    <div className='posts'>
      {posts
        .filter((post) =>
          post.title
        )
        ?.sort(handleSorting(sortType))
        .map((post) => (
          <PostItem key={post.id} post={post} />
        ))}
    </div>
  </Fragment>
  );
};
*/