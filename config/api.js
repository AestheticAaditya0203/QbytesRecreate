/* eslint-disable import/prefer-default-export */
// const baseURL = 'https://dev.flyked.com/api/v1/users';
const baseURL = "https://apidev.quickbytes.in/api/v1/users";

export const API = {
  CREATE_PAGE_API: `${baseURL}/createPage`,

  SEARCH: `${baseURL}/search`,

  PAGE_DETAILS: `${baseURL}/page`,

  PENDING_PAGE_DETAILS: `${baseURL}/allpage`,

  GET_CATEGORY: `${baseURL}/category`,

  GET_SUBCATEGORY: `${baseURL}/subCategory`,

  VIEW_PROFILE: `${baseURL}/viewProfile`,

  SOCIAL_LOGIN: `${baseURL}/socialLogin`,

  USER_SIGNUP: `${baseURL}/socialLogin`,

  USER_PROFILE_UPDATE: `${baseURL}/updateProfile`,

  FILE_UPLOAD: `${baseURL}/uploadImage`,

  UPDATE_INTERESTS: `${baseURL}/updateInterests`,

  // GET_PAGES_ON_SEARCH: `${baseURL}/searchPage`,
  GET_PAGES_ON_SEARCH: `${baseURL}/searchPage`,

  CREATE_POST_API: `${baseURL}/post`,

  PENDING_POSTS: `${baseURL}/post/pending`,

  PUBLISHED_POSTS: `${baseURL}/post/published`,

  SAVED_POSTS: `${baseURL}/post/saved`,

  POST_DETAILS: `${baseURL}/post`,

  SAVE_POST_API: `${baseURL}/post`,

  COMMENT_POST_API: `${baseURL}/post`,

  LIKE_POST_API: `${baseURL}/post`,

  USER_PUBLIC_VIEW: `${baseURL}/`,

  TOP_CONTRIBUTORS: `${baseURL}/top-contibuters`,

  BIRTHDAY_FEED: `${baseURL}/onBirthday`,

  THIS_DAY_FEED: `${baseURL}/onThisDay`,

  IN_NEWS_FEED: `${baseURL}/inNews`,

  FEEDS: `${baseURL}/feed`,

  FILTER_FEEDS: `${baseURL}/filterFeed`,

  SUGGESTED_PAGES: `${baseURL}/suggestedPages`,

  FEED_POST_PREVIEW: `${baseURL}/post`,

  PAGE_FOLLOW_UNFOLLOW: `${baseURL}/page`,

  GET_NEW_POSTS: `${baseURL}/totalpostcount`,

  PAGE_NAME_VALIDATION: `${baseURL}/pagecheck`,

  STORY_NAME_VALIDATION: `${baseURL}/storyTitleCheck`,

  DID_YOU_KNOW: `${baseURL}/didyouknow`,

  UNSUBSCRIBE: `${baseURL}/unsubscribe`,

  NOTIFICATIONS: `${baseURL}/notifications`,

  NOTIFICATION_COUNT: `${baseURL}/notificationCounts`,

  VERIFY_EMAIL: `${baseURL}/verifyEmail`,

  KNOW_THEM_BETTER: `${baseURL}/knowThemBetter`,

  GET_STORY_POST_THUMBNAILS: `${baseURL}/storypage`,

  CREATE_STORY: `${baseURL}/createStory`,

  MULTIPLE_FILES_UPLOAD: `${baseURL}/uploadImages`,

  GET_ALL_STORIES: `${baseURL}/search`,

  SEARCH_ALL_STORIES: `${baseURL}/search`,

  VIEW_ALL_STORIES_LIST: `${baseURL}/search`,

  GET_STORY_DETAILS: `${baseURL}/storyWithImages`,

  LIKE_STORY: `${baseURL}/story`,

  PUBLIC_PROFILE_STORIES: `${baseURL}/story/`,

  GET_POST_DETAIL: `${baseURL}/postDetail`,

  GET_PAGE_POST_DETAIL: `${baseURL}/post`,

  GET_FOLLOW_STATUS: `${baseURL}/getFollowStatus`,

  GET_SEGMENT_DATA: `${baseURL}/getSegmentData`,

  GET_LONGREADS: `${baseURL}/longReads`,

  PREVIEW_LONGREADS: `${baseURL}/longReadsPreview`,

  GET_USERS: `${baseURL}/searchUser`,

  GET_TAGS: `${baseURL}/story/tags`,

  GET_STORIES_CATEGORY_WISE: `${baseURL}/searchnew`,
};
