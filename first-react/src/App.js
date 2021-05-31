import React from 'react'
import Footer from './component/Footer'


//import Header from './components/Header/Header.component';

function App() {

  return (
    <Footer />
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