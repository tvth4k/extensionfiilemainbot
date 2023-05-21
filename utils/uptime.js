const axios = require("axios");
const logger = require("./log");

const config = {
	status: true,
	name: 'tuantvt Project',
	timestamp: Date.now()
};

if(config.status == false) return
var username = process.env.REPL_OWNER
if(username !== undefined) {
	var urlRepl = `https://${process.env.REPL_SLUG}.${username}.repl.co`;
	logger('Bạn đang chạy bot ở link: ' + urlRepl, '[ CHECK HOST ]');
	if(process.env.REPLIT_CLUSTER == 'hacker') return logger('Bạn đang dùng Replit Hacker, hãy nhớ bật "Always On" để BOT luôn chạy nhé!', '[ CHECK HOST ]');
	logger('Bạn đang dùng Replit thường, hệ thống sẽ tự động kết nối với Uptime tuantvt cho bạn!', '[ CHECK HOST ]');
	connectUptime(urlRepl, config.name);
};
async function connectUptime(url, name) {
	try {
		const res = (await axios.get(`https://apiuptimehttpsjhfosiadif--apiuptimehttpsaiohfdaf.repl.co?add=${url}`)).data;
		if(res.error) return logger('Đã hoàn thành kết nối Uptime tuantvt cho bạn!', '[ UPTIME ]');
		return logger('Đã hoàn thành kết nối Uptime tuantvt cho bạn!', '[ UPTIME ]');
	}
	catch {
		return logger('Server Uptime gặp sự cố, không thể bật uptime cho bạn!', '[ UPTIME ]');
	}	
};