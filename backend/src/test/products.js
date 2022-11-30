import test from 'ava';
import expectStatusCode from './expects/status-expect.js';
import { METHODS, request } from './utils/fetch-enpoints.js';
import url from './utils/test-env.js';

const { GET, POST, PUT, DELETE } = METHODS;

let someId;
const data = {
    title: 'Only Yesterday',
    originalTitle: 'おもひでぽろぽろ',
    originalTitleRomanised: 'Omoide poro poro',
    image: 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/xjJU6rwzLX7Jk8HFQfVW6H5guMC.jpg',
    description:
        'It’s 1982, and Taeko is 27 years old, unmarried, and has lived her whole life in Tokyo. She decides to visit her family in the countryside, and as the train travels through the night, memories flood back of her younger years: the first immature stirrings of romance, the onset of puberty, and the frustrations of math and boys. At the station she is met by young farmer Toshio, and the encounters with him begin to reconnect her to forgotten longings. In lyrical switches between the present and the past, Taeko contemplates the arc of her life, and wonders if she has been true to the dreams of her childhood self.',
    director: 'Isao Takahata',
    producer: 'Toshio Suzuki',
    releaseYear: 1991,
    minDuration: 118,
    info: 'https://www.imdb.com/title/tt0102587/?ref_=fn_al_tt_1',
    price: 150
};

export const gPostProduct = test.macro(async (t, _, __) => {
    const response = await request.to(t, POST, url.products(), data);
    expectStatusCode(t, 201, response);
});

export const gGetProducts = test.macro(async (t, _, __) => {
    const response = await request.to(t, GET, url.products());

    const bodyParsed = JSON.parse(response.body);
    someId = bodyParsed.results[0]._id;

    expectStatusCode(t, 200, response);
});

export const gGetProductById = test.macro(async (t, _, __) => {
    const response = await request.to(t, GET, url.products(someId));
    expectStatusCode(t, 200, response);
});

export const gUpdateProduct = test.macro(async (t, _, __) => {
    const goodReqPut = {
        ...data,
        title: 'Changed'
    };
    const response = await request.to(t, PUT, url.products(someId), goodReqPut);
    expectStatusCode(t, 202, response);
});

export const gDeleteProduct = test.macro(async (t, _, __) => {
    const response = await request.to(t, DELETE, url.products(someId));
    console.log(response.body);
    expectStatusCode(t, 200, response);
});
