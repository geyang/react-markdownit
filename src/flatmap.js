/**
 * Created by ge on 6/25/16.
 */
export default function flatMap (nestedList) {
    var result = [];
    nestedList.forEach((item)=>{
        if (item.length >= 1) result.concat(item);
        else result.push(item);
    })
    return result;
}
