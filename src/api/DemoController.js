class DemoController {
    constructor() {}
    async demo(ctx) {
        ctx.body = {
            msg: 'body message test1!!'
        }
    }
}

export default new DemoController()