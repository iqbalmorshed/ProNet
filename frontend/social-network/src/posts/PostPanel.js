import React from 'react'
import Grid from '@material-ui/core/Grid';

import NetworkLayout from '../layout/NetworkLayout'
import { layoutInfo } from '../data/layoutInfo'
import { sidebarInfo } from '../data/sidebarInfo'
import Sidebar from './Sidebar'
import PostList from './PostList'
import { data } from './data'
//temp
// import post1 from './blog-post.1.md';
// import post2 from './blog-post.2.md';
// import post3 from './blog-post.3.md';
// const posts = [post1, post2, post3];

// console.log(post1)

// const posts = [
//     {
//         id: '1',
//         title: 'Featured post',
//         date: 'Nov 12',
//         description:
//             'This is a wider card with supporting text below as a natural lead-in to additional content.',
//         image: 'https://source.unsplash.com/random',
//         imageText: 'Image Text',
//     },
//     {
//         id: '2',
//         title: 'Post title',
//         date: 'Nov 11',
//         description:
//             'This is a wider card with supporting text below as a natural lead-in to additional content.',
//         image: 'https://source.unsplash.com/random',
//         imageText: 'Image Text',
//     },
// ];

const posts = data.results

function PostPanel() {
    return (
        <>
            <NetworkLayout layoutInfo={layoutInfo}>
                <Grid container spacing={3}>
                    <PostList>
                        {posts}
                    </PostList>
                    <Sidebar sidebarInfo={sidebarInfo} />
                </Grid>
            </NetworkLayout>
        </>
    )
}

export default PostPanel