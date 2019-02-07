const logOfActivity = []

const ActivityLogger = {
    add: function (message) {
        logOfActivity.push({
            message: message,
            timeStamp: Date.now()
        })
    },
    view: function () {
        return logOfActivity
    },
    html: function () {
        const htmlString = logOfActivity.map((log) => {
            return `
                <section>
                    <h2>${log.message}</h2>
                    <div>${log.timeStamp}</div>
                </section>
            `
        }).join("")

        return htmlString
    }
}

export default ActivityLogger