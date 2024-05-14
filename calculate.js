let t=0;
let temp=0;
let c='';
const result = document.getElementById('value');
function send(intValue)
{
    if(t==0)
    {
        t=intValue;
    }
    else
    {
        t=t*10 + intValue;
    }
    result.innerHTML = `${t}`;
}
function func(i)
{
    switch(i)
    {
        case 'C':
            {
                t=0;
                temp=0;
                c='';
                result.innerHTML = `${t}`;
                break;
            }
        case '+':
            {
                temp=temp+t;
                t=0;
                c='+';
                break;
            }
        case '-':
            {
                temp=temp-t;
                t=0;
                c='-';
                break;
            }
        case '*':
            {
                func(c);
                result.innerHTML = `${temp}`;
                c='*';
                if(t!=0)
                {
                    temp=temp*t;
                    t=0;
                }
                break;
            }
        case '/':
            {
                c='/';
                break;
            }
        case '=':
            {
                func(c);
                result.innerHTML = `${temp}`;
                break;
            }
        default:
            {

            }
    }
}