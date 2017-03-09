import './index.less';
import './jquery-1.9.1.min.js';
import { FoldTreeFn } from './foldTree.js';


let test = new FoldTreeFn();
test.targetDom = $('.cost-tree .cost-name');
test.ClickDom();