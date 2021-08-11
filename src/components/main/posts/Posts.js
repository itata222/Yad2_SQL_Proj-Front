import React, { useEffect, useState } from 'react'
import Post from './Post'
import InfiniteScroll from 'react-infinite-scroll-component';
import { getPosts } from '../../../services/userService';
import NumberOfResults from '../home/NumberOfResults';
import SpinnerInfiniteScroll from '../SpinnerInfiniteScroll';
import { useContext } from 'react';
import { FiltersContext } from '../../../contexts/filtersContext';
import { PostsContext } from '../../../contexts/postsContext';
import { setPostsAction } from '../../../actions/postsActions';

const Posts = ({ setShowSpinner, currentLocation }) => {
    const { filtersData } = useContext(FiltersContext);
    // console.log(filtersData)
    const { postsData, dispatchPostsData } = useContext(PostsContext)
    const [currentPage, setCurrentPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const limit = 5;



    useEffect(() => {
        let isComponentExist = true;
        setShowSpinner(true)
        if (isComponentExist) {
            getPosts(limit, currentPage, filtersData).then((res) => {
                setCurrentPage(currentPage + 1);
                setShowSpinner(false);
                dispatchPostsData(setPostsAction(res.posts));
            })
        }
        return () => {
            isComponentExist = false;
        };
    }, []);

    const fetchMoreData = () => {
        setTimeout(() => {
            const currentPosts = [...postsData];
            console.log(limit, Math.ceil(currentPage), filtersData, postsData.length)
            getPosts(limit, currentPage, filtersData, postsData.length).then((res) => {
                console.log(res)
                if (res.posts.length > 0) {
                    setCurrentPage(res.posts.length / 5 + 1)
                    dispatchPostsData(setPostsAction([...currentPosts, ...res.posts]))
                }
                setShowSpinner(false);
                setHasMore(res.hasMore)
            }).catch(e => console.log(e))
        }, 500);
    }

    useEffect(() => {
        console.log(1)
        setShowSpinner(true)
        getPosts(limit, 1, filtersData, postsData.length).then((res) => {
            setCurrentPage(res.posts.length / 5 + 1);
            setShowSpinner(false)
            setHasMore(res.hasMore)
            dispatchPostsData(setPostsAction(res.posts));
        }).catch(e => console.log(e))

    }, [filtersData.sort, filtersData.fromPrice, filtersData.withImage]);


    const handleScroll = () => {
        const bottom = Math.ceil(window.innerHeight + window.scrollY) >= document.documentElement.scrollHeight;
        console.log(bottom)
        if (bottom && hasMore && currentLocation === "/home") {
            fetchMoreData();
        }
    };
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, {
            passive: true
        });
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    });

    return (
        <>
            <NumberOfResults resultsLength={postsData.length || 0} autoFocus />
            <div className="posts">
                <InfiniteScroll
                    dataLength={limit}
                    next={() => console.log('asd')}
                    hasMore={hasMore}
                    loader={<SpinnerInfiniteScroll />}
                    endMessage={<div className="endMessage">No More Posts</div>}
                >
                    {
                        postsData.map((post) => (
                            <Post key={post.postID} post={post} />
                        ))
                    }
                </InfiniteScroll>
            </div>
        </>
    )
}

export default Posts
