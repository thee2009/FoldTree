import './jquery-1.9.1.min.js';

class FoldTreeFn {
    constructor() {
        this.targetDom = {};
        this.maxSublevel = 10; //最大子级数
    }

    ClickDom() {
        let that = this;
        that.targetDom.on('click', function() {

            let uChild = parseInt(this.getAttribute('data-child')),
                addOrRemove = this.getAttribute('data-fold'),
                allChild = [],
                nextElem = this;

            //假如有子级的话
            if (addOrRemove) {

                if (addOrRemove == 'unfold') {
                    this.setAttribute('data-fold', 'fold');
                } else {
                    this.setAttribute('data-fold', 'unfold');
                }

                //假设最大子级为10级
                for (let i = 0; i < that.maxSublevel; i++) {

                    let newNextElem = nextElem.nextElementSibling;

                    if (newNextElem) {

                        if (parseInt(this.getAttribute('data-child')) < parseInt(newNextElem.getAttribute('data-child'))) {
                            nextElem = newNextElem;
                            allChild.push(nextElem);
                        } else {
                            break;
                        }
                    } else {
                        break;
                    }

                };


                allChild.forEach(function(e, i) {
                    let uIndex = $('.cost-name').index(e);

                    //收起内容
                    if (addOrRemove == 'unfold') {
                        $('.cost-count').eq(uIndex).addClass('hide-height');
                        $(e).addClass('hide-height');
                    }
                    //展开内容
                    else {
                        $('.cost-count').eq(uIndex).removeClass('hide-height');
                        $(e).removeClass('hide-height');
                    }
                });

            }


        })
    }

};

export { FoldTreeFn };