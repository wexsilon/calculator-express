
module.exports.getMethod = (req, res) => {
    res.render('index', {title: 'Calculator', calcopr: '&nbsp;', calcres: '&nbsp;'});
};

module.exports.postMethod = (req, res) => {
    const lsnums = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '.'];
    const lsoprs = ['-', '+', '/', '*'];
    let {button, calcopr, calcres} = req.body;   
     
    calcopr = calcopr.trim();
    calcres = calcres.trim();

    if (lsnums.includes(button)) {
        calcres = calcres + button;
    } else if (lsoprs.includes(button) && calcopr === '') {
        calcopr = calcres + ' ' + button;
        calcres = '';
    } else if (button === 'C') {
        calcopr = '';
        calcres = '';
    } else if (button === 'BS' && calcres.length >= 1) {
        calcres = calcres.substring(0, calcres.length - 1);
    } else if (button === '=') {
        let [a, op] = calcopr.split(' ');
        a = Number(a);
        let b = Number(calcres);
        switch(op) {
            case '+':
                calcres = String(a + b); 
                break;
            case '-':
                calcres = String(a - b); 
                break;
            case '/':
                calcres = String(a / b);
                break;
            case '*':
                calcres = String(a * b); 
                break;
        }
        calcres = calcres.substring(0, 10);
        calcopr = '';
    }

    if (calcopr === '')
        calcopr = '&nbsp;';
    if (calcres === '')
        calcres = '&nbsp;';
    res.json({calcopr, calcres});
};

