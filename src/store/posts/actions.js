import _ from 'lodash';
import * as types from './actionTypes';
import redditService from '../../services/reddit';
import * as topicsSelectors from '../topics/reducer';

export function fetchPosts(){
    return async(dispatch, getState) =>{
        try{
            const selectedTopicsUrls = topicsSelectors.getSelectedTopicUrls(getState());
            const fetchPromises = _.map( selectedTopicsUrls, (topicUrl) => {return redditService.getPostsFromSubreddit(topicUrl) } );
            const topicsPosts = await Promise.all(fetchPromises);
            const postsById = _.keyBy(_.flatten(topicsPosts), (post) => { return post.id });
            dispatch({ type:types.POSTS_FETCHED, postsById });
        }catch(error){
            console.error(error);
        }
    };
}

export function changeFilter(newFilter){
    return ({ type:types.FILTER_CHANGED, filter:newFilter});
}

export function selectPost(postId){
    return ({type:types.POST_SELECTED, postId});
}