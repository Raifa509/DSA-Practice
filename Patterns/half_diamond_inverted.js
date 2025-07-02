        //       *
        //      **
        //     ***
        //    ****
        //     ***
        //      **
        //       *
for(let row=1;row<=4;row++)
{
    let str="";
    for(let space=1;space<=4-row;space++)
    {
        str+=" ";
    }
    for(col=1;col<=row;col++)
    {
        str+="*";
    }
    console.log(str); 
}
for(let row=3;row>=1;row--)
{
    let str="";
    for(let space=1;space<=4-row;space++)
    {
        str+=" ";
    }
    for(col=1;col<=row;col++)
    {
        str+="*";
    }
    console.log(str);
    
}