function feetToMile(feet){
    if(feet < 0){
        return 'Quantity cant be Negative';
    }
    var mile = feet / 5280;
    return mile;
}
function woodCalculator(chair, table, bed){
    if(chair < 0 || table < 0 || bed < 0){
        return 'Quantity cant be Negative';
    }
    var wood = chair * 1 + table * 3 + bed * 5;
    return wood;
}
function brickCalculator(tala){
    if(tala < 0)
    {
        return 'Tala Cant Be Negative';
    }
    var brick = 0;
    if(tala <= 10){
        brick = tala * 15 * 1000;
        return brick;
    }
    brick = 10 * 15 * 1000;
    if( tala <= 20) 
    {
        brick = brick + (tala - 10) * 12 * 1000;
        return brick;
    }
    brick = brick + 10 * 12 * 1000;
    brick = brick + (tala - 20) * 10 * 1000;
    return brick;
}
function tinyFriend(friend)
{
   if(friend.length == 0)
   {
       return 'You Have No Friend';
   }
   var tinyPosition = 0;
   var minLength = friend[0].length;
    for(var i = 1; i < friend.length; i++)
    {
        if(friend[i].length < minLength)
        {
            tinyPosition = i;
            minLength = friend[i].length;
        }
    }
    return friend[tinyPosition];
}


