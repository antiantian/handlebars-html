var handlebars = require('express3-handlebars') // 引入handlebars .create({ defaultLayout: 'main', // 设置默认布局为main extname: '.hbs', // 设置模板引擎文件后缀为.hbs }); 合作！
handlebars.registerHelpers(new File("help.js"));
