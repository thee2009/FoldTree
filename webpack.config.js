

var webpack = require('webpack'),
	path = require('path'),
	HtmlwebpackPlugin = require('html-webpack-plugin'),
	ExtractwebpackPlugin = require('extract-text-webpack-plugin');

//定义了一些文件夹的路径 
var ROOT_PATH = path.resolve(__dirname);
 var APP_PATH = path.resolve(ROOT_PATH, 'old'); 
 var BUILD_PATH = path.resolve(ROOT_PATH, 'new'); 

 module.exports = { 
	 //项目的文件夹 可以直接用文件夹名称 默认会找index.js 也可以确定是哪个文件名字 
	 entry: {
	 	// app: APP_PATH,
	 	build: './old/index.js',
	 	vendor: ['./old/jquery-1.9.1.min.js']//第三方库
	 }, 
	 //输出的文件名 合并以后的js会命名为bundle.js 
	 output: { path: BUILD_PATH, filename: 'bundle.js' }, 
	 module: {
	 	rules:[{
			test: /\.less$/,
			use: ExtractwebpackPlugin.extract({
				use: [{
					loader: "css-loader"
				}, {
					loader: "less-loader"
				}],
				fallback: "style-loader"
			}),
			exclude: /node_modules/
		},
	 	{
	 		test:/\.js$/,
	 		exclude: /node_modules/,
	 		use: ['babel-loader']
	 	},
	 	{
	 		test: /\.(png|jpe?g|gif|eot|ttf|woff2?|svgz)(\?.+)?$/,
	 		loader: 'url-loader',
	 		options: {
	 			limit: 10000
	 		}
	 	}
	 	]
	 },
 	devServer:{
 		host:'0.0.0.0',
 		historyApiFallback:true,
 		hot:true,
 		inline:true
 	},
	 //添加我们的插件 会自动生成一个html文件 
	 plugins: [ 
		 new HtmlwebpackPlugin({ 
		 	// title: '组织架构树' ,
		 	template: 'old/index.html'
		 }), 
		 new ExtractwebpackPlugin('index.css'),
		 // new webpack.IgnorePlugin(/\.\/jquery-last.js$/);
		 /*new webpack.ProvidePlugin({
		 	$: 'jquery'
		 }),*/
		 new webpack.optimize.CommonsChunkPlugin({name:'vendor',filename:'jquery.bundle.js'})
	 ] 
};