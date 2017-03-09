# FoldTree
Fold and Unfold
<h1>功能：组织结构展开收起</h1>
<ul>
  <li>工具：webpack</li>  
  <li>步骤：  
    <ol>
      <li>webpack其实不是很需要，假如有的话，可以使用命令生成，下面会说，没有的话，自己手动整理也是可以的。网上有很多webpack的教程，这里不作解释了</li>
      <li>node_modules文件没有打包进来，需要使用命令 【npm install】 安装</li>
      <li>在目录里新建一个名字为【new】的文件夹，和【old】同级</li>
      <li>修改文件名或者文件夹及生成内容的部分，都可以在【package.json】文件中修改</li>
      <li>命令行中敲【webpack】，会在【new】文件夹生成最后打包好未压缩的html、js、css</dd></li>
    </ol>
  </li>
</ul>
