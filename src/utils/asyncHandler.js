
// let's see how to do in promises.. wala part.. 
const asyncHandler = (requestHandler) => {
    (req, res, next) =>{
        Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err))
    }
}



export {asyncHandler}

// const asyncHandler = () => {}
// const asyncHandler = (func) => () => {}
// const asyncHandler = (func) => async () => {}


    //  this is the way of try & catch......
// const asyncHandler = (fn) => (req, res, next) => {
//     try {
//         await fn(res, res, next)
//     } catch (error) {
//         req.status(error.code || 400).json({
//             success: false,
//             message: error.message
//         })
//     }
// }

