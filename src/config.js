const [cookie, user, pass, to] = process.argv.slice(2);

const headers = {
  'content-type': 'application/json; charset=utf-8',
  'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/127.0.0.0 Safari/537.36 Edg/127.0.0.0',
  'accept-encoding': 'gzip, deflate, br, zstd',
  'accept-language': 'zh-CN,zh;q=0.9,en;q=0.8,en-GB;q=0.7,en-US;q=0.6',
  'sec-ch-ua': '"Not)A;Brand";v="99", "Microsoft Edge";v="127", "Chromium";v="127"',
  'sec-ch-ua-mobile': '?0',
  'x-ms-token': '8ti4Z8dpk5V_S_EW6vXsCiFGy8JGPaHtDzN5wI5WPn39KX44btqlykVqgna54U4AB4NeQj6C6OGwJm_ffI_LWFzoFch0wN7x5S-FnwG7neoCTH4x-p3TWS7nccIG2_I=',
  referer: 'https://juejin.cn/',
  accept: '*/*',
  cookie
};

module.exports = { headers, user, pass, to };
