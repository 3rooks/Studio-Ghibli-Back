const setupTests = (test) => {
    // TODO
    test.before(() => {
        console.log(`
            ***********************
            |   STARTING TESTS    | 
            *********************** 
        `);
    });

    test.after.always(() => {
        console.log(`
            ***********************
            |     TESTS ENDED     | 
            *********************** 
        `);
    });
};

export default setupTests;
