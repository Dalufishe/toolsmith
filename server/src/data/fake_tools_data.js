const { faker } = require("@faker-js/faker/locale/zh_CN");

function generate(amount) {
  const tools = [];
  const tools_s = [];
  for (let i = 0; i < amount; i++) {
    const id = Math.random() * 1000;
    const name = faker.commerce.product();
    const description = faker.commerce.productDescription();
    const long_description =
      faker.commerce.productDescription() +
      faker.commerce.productDescription() +
      faker.commerce.productDescription();
    const tags = [
      faker.commerce.productAdjective(),
      faker.commerce.productAdjective(),
      faker.commerce.productAdjective(),
    ];
    const classes = [
      faker.commerce.productAdjective(),
      faker.commerce.productAdjective(),
    ];
    const author = [faker.name.fullName()];
    const image = faker.image.abstract();
    const stars = {
      amount: Math.floor(Math.random() * 6),
      total: Math.floor(Math.random() * 5000),
    };
    const link = "";
    //
    //
    //
    tools.push({
      id,
      name,
      author,
      image,
      link,
    });
    tools_s.push({
      id,
      name,
      description,
      long_description,
      tags,
      classes,
      author,
      image,
      stars,
      link,
    });
  }

  return { tools, tools_s };
}

// const fake_tools_data = generate(20);

fake_tools_data = {
  tools: [
    {
      id: 123,
      name: "文字解編碼",
      description: "線上文字解編碼工具，支援多種格式轉換。",
      author: "Dalufishe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcFdOaLjrm5HDBCbQzseT83Opa-FqNIiMSQ&usqp=CAU",
      link: "",
    },
    {
      id: 234,
      name: "字數計算",
      description: "字數計算！",
      author: "Dalufishe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWZdfVa5frYkJ44rIBkjkCIFssMXWYM2BC3-CIKB8VcXG-7pv_fJg-BUHI5JJl_hfHRY&usqp=CAU",
      link: "",
    },
    {
      id: 345,
      name: "線上文本編輯",
      description: "強大的線上文本編輯器，功能完整，可進行編程及文書處理。",
      author: "Dalufishe",
      image:
        "https://help.apple.com/assets/63CF08E0C0D8F235CE7B4351/63CF08E1C0D8F235CE7B4358/en_US/26d8ac93e2a4c38c0140bda00372c740.png",
      link: "",
    },
  ],
  tools_s: [
    {
      id: 123,
      name: "文字解編碼",
      description: "線上文字解編碼工具，支援多種格式轉換。",
      long_description:
        "建造你專屬的 PC 帝國，從簡單診斷、維修到製作精美訂製品，讓每個愛好者羨慕到發狂吧。在這個不斷擴張的市場中，四處可見現實世界中的零組件，你終於可以停止對終極 PC 的幻想。動手組裝你的電腦，看看它在 3DMark 的評價吧！《PC Building Simulator》的 Alpha 前預先試玩版已經獲得了超過 65 萬的下載次數，這是非常重大的成功。本遊戲將會持續發展出完整的模擬體驗，讓你能組出夢想中的電腦",
      author: "Dalufishe",
      tags: ["work", "cool", "easy"],
      classes: ["文書", "程序"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfcFdOaLjrm5HDBCbQzseT83Opa-FqNIiMSQ&usqp=CAU",
      stars: {
        amount: 5,
        total: 3123,
      },
      link: "",
      apis: [
        {
          group: "編碼",
          item: [
            {
              name: " 取得編碼列表",
              method: "GET",
              url: "http://encode.org/api/encode",
            },
            {
              name: "進行編碼",
              method: "POST",
              url: "http://encode.org/api/encode",
              body: {
                type: "JSON",
                body: {
                  // 編碼內容
                  data: "string",
                  // 編碼格式
                  type: "string",
                },
              },
            },
          ],
        },
        {
          group: "解碼",
          item: [
            {
              name: "進行解碼",
              method: "POST",
              url: "http://encode.org/api/decode",
              body: {
                type: "JSON",
                body: {
                  // 解碼內容
                  data: "string",
                  // 解碼格式
                  type: "string",
                },
              },
            },
          ],
        },
      ],
      libraries: [
        {
          version: '1.0',
          link: "",
        },
        {
          version: 1.1,
          link: "",
        },
        {
          version: 1.2,
          link: "",
        },
        {
          version: 1.21,
          link: "",
        },
        {
          version: 1.3,
          link: "",
        },
        {
          version: 1.31,
          link: "",
        },
        {
          version: 1.32,
          link: "",
        },
        {
          version: 1.33,
          link: "",
        },
      ],
      scripts: {},
    },
    {
      id: 234,
      name: "字數計算",
      description: "字數計算！",
      long_description:
        "建造你專屬的 PC 帝國，從簡單診斷、維修到製作精美訂製品，讓每個愛好者羨慕到發狂吧。在這個不斷擴張的市場中，四處可見現實世界中的零組件，你終於可以停止對終極 PC 的幻想。動手組裝你的電腦，看看它在 3DMark 的評價吧！《PC Building Simulator》的 Alpha 前預先試玩版已經獲得了超過 65 萬的下載次數，這是非常重大的成功。本遊戲將會持續發展出完整的模擬體驗，讓你能組出夢想中的電腦",
      author: "Dalufishe",
      tags: ["work", "cool", "easy"],
      classes: ["文書", "程序"],
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAWZdfVa5frYkJ44rIBkjkCIFssMXWYM2BC3-CIKB8VcXG-7pv_fJg-BUHI5JJl_hfHRY&usqp=CAU",
      stars: {
        amount: 4.6,
        total: 1278,
      },
      link: "",
      apis: [],
      libraries: [],
      scripts: [],
    },
    {
      id: 345,
      name: "線上文本編輯",
      description: "強大的線上文本編輯器，功能完整，可進行編程及文書處理。",
      long_description:
        "建造你專屬的 PC 帝國，從簡單診斷、維修到製作精美訂製品，讓每個愛好者羨慕到發狂吧。在這個不斷擴張的市場中，四處可見現實世界中的零組件，你終於可以停止對終極 PC 的幻想。動手組裝你的電腦，看看它在 3DMark 的評價吧！《PC Building Simulator》的 Alpha 前預先試玩版已經獲得了超過 65 萬的下載次數，這是非常重大的成功。本遊戲將會持續發展出完整的模擬體驗，讓你能組出夢想中的電腦",
      author: "Dalufishe",
      tags: ["work", "cool", "easy"],
      classes: ["文書", "程序"],
      image:
        "https://help.apple.com/assets/63CF08E0C0D8F235CE7B4351/63CF08E1C0D8F235CE7B4358/en_US/26d8ac93e2a4c38c0140bda00372c740.png",
      stars: {
        amount: 4.2,
        total: 11156,
      },
      link: "",
      apis: [],
      libraries: [],
      scripts: [],
    },
  ],
};

module.exports = fake_tools_data;
