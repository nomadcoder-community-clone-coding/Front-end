import React, { Fragment, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import handleSortion from ''

const HomePage = ({ getPosts, post: { posts, loading } }) => {
    useEffect(() => {
        getPosts();
    }, [getPosts]);

    /* Popular, new에 따라 탭 구분 */
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

HomePage.propTypes = {
    getPosts: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
    post: state.post,
});

export default connect(mapStateToProps, { getPosts })(HomePage);