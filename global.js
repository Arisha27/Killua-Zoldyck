const fs = require("fs")

global.user = require("./data/user")
global.group = require("./data/group")
global._user = JSON.parse(fs.readFileSync("./database/user.json"))
global._group = JSON.parse(fs.readFileSync("./database/group.json"))

global.mess = (type, m) => {
    let msg = {
        wait: 'Wait, in progress',
        owner: 'Owner only!',
        premium: 'Premium!',
        group: 'group only!',
        private: 'private chat!',
        admin: ' admin only of group!',
        botAdmin: 'Bot isnt admin, make it',
        bot: 'Fitur ini hanya dapat diakses oleh Bot',
        dead: 'Fitur ini sedang dimatikan!',
        media: 'Reply media',
        error: "No Results Found"
    }[type]
    if (msg) return m.reply(msg, m.from, { quoted: m })
}
