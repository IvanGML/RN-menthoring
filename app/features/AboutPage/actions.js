export const FETCH_ABOUT = "FETCH_ABOUT";

export const fetchAbout = content => {
    return {
        type: FETCH_ABOUT,
        content
    };
};