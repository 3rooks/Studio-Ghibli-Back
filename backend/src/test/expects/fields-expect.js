const expectField = (t, expectedFields, response) => {
    t.deepEqual(
        response.body,
        expectedFields,
        `Expected field ${expectedFields}, but received ${response.body}`
    );
};

export default expectField;
