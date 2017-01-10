// this is the code which will be injected into a given page...

(function () {
    let cache = {};
    let a = document.getElementsByClassName('rc');
    let b = document.getElementsByClassName('r');

    for (let i = 0; i < a.length; i++) {
        a[i].addEventListener('mouseover', function () {
            if (!cache[i]) {
                // let web = a[i].attr('href');
                let b = document.createElement('iframe');
                b.setAttribute('height', '500px');
                b.setAttribute('width', '800px');
                // b.setAttribute('src', 'https://www.reddit.com');
                b.setAttribute('scrolling', 'yes');
                b.setAttribute('position', 'absolute');
                b.setAttribute('left', i * -50 + '');
                b.setAttribute('z-index', '999');
                b.setAttribute('display', 'inline-block');
                b.setAttribute('src', a[i].children[0].children[0].href);
                b.setAttribute('sandbox', '');
                b.id = 'b' + i;
                a[i].appendChild(b);
                cache[i] = true;
            }
        });
        // a[i].addEventListener('mouseleave', function(){
        //     let r = document.getElementById('b' + i);
        //     a[i].removeChild(r);
        // })
    }
    // just place a div at top right


})();