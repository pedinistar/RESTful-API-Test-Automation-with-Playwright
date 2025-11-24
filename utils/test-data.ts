export const testData = {
    validPost: {
        userId: 1,
        title: 'Test Post',
        body: 'Test body content'
    }
    ,
    invalidPost: {
        userId: 1,
        body: 'Body without title'
    }
    ,
    specialCharPost: {
        userId: 1, title: "Hello 😊 🚀 @#%&*!",
        body: "Unicode test — 你好世界! <> {} [] ()"
    }
}