import { Thumbnails } from "./types/image";

export const 
    react = '/react_ts.avif',
    esbuild = '/esbuild.avif',
    ts = '/ts.png',
    menu_icon = '/menu.avif',
    logo = '/logo.avif',
    search = '/search.avif',
    upload = '/upload.avif',
    more = '/more.avif',
    notification_icon = '/notification.avif',
    profile = '/jack.avif',
    home = '/home.avif',
    game_icon = '/game_icon.avif',
    entertainment = '/entertainment.avif',
    automobile = '/automobiles.avif',
    sports = '/sports.avif',
    tech = '/tech.avif',
    music = '/music.avif',
    blogs = '/blogs.avif',
    news = '/news.avif',
    jack = '/jack.avif',
    simon = '/simon.avif',
    tom = '/tom.avif',
    megan = '/megan.avif',
    cameron = '/cameron.avif',
    like = '/like.avif',
    dislike = '/dislike.avif',
    save = '/save.avif',
    user_profile = '/user_profile.avif',
    share = '/share.avif'
    
    export const thumbnail: Thumbnails = [];
    
    for (let i = 1; i <= 8; i++) {
        thumbnail.push(`/thumbnail${i}.avif`);
    }