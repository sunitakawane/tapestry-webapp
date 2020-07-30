import testConstants from '../../../constants/testConstants'

export const testActions = {
    test_list,
    test_create,
    test_update,
    test_pupdate
};

function test_list() {
    return {
        type: testConstants.TEST_LIST
    }
}

function test_create(test) {
    return {
        type: testConstants.TEST_CREATE,
        test
    }
}

function test_update(test) {
    return {
        type: testConstants.TEST_UPDATE,
        test
    }
}

function test_pupdate(testId, keyId, value) {
    return {
        type: testConstants.TEST_PUPDATE,
        testId,
        keyId,
        value
    }
}