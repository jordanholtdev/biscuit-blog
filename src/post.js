import postImg01 from './images/articles/blogImg01.jpg';
import postImgScience from './images/postImages/post01-Science.jpg';
import 'countable';
import Countable from 'countable';

const postImg = document.getElementById('postImg');
const postImg01Science = document.getElementById('postImgScience');

postImg.src = postImg01;
postImg01Science.src = postImgScience;


// post read time functions 
const readTimeArea = document.getElementById('postCardBody');
const readTimeOutput = document.getElementById('readTimeOutput');


Countable.on(readTimeArea, counter => {
    const wpm = 175;
    const estimatedRaw = counter.words / wpm;
    const minutes = Math.round(estimatedRaw);
    const effectiveTime = ( minutes < 1) ? " a couple of seconds" : minutes + "min read";

    readTimeOutput.innerHTML = `${effectiveTime}`
});
